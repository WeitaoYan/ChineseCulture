interface AiEnv {
  AI?: {
    run: (model: string, input: unknown) => Promise<{ response?: string }>
  }
}

interface QuizOption {
  question: string
  options: string[]
  answer: number
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}))
  const content = String(body?.content || "").trim()

  if (!content) {
    throw createError({ statusCode: 400, statusMessage: "缺少 content 参数" })
  }
  if (content.length > 8000) {
    throw createError({ statusCode: 400, statusMessage: "content 内容过长，请控制在 8000 字以内" })
  }

  const env = (event.context.cloudflare as { env?: AiEnv } | undefined)?.env
  if (!env?.AI) {
    throw createError({ statusCode: 500, statusMessage: "AI binding 未配置" })
  }

  const prompt = `You are a teacher of traditional Chinese culture. Based on the page content provided below, generate 3 English multiple-choice questions.

Requirements:
- All questions and options must be written in English.
- Questions must relate to the content and test its core facts; do not ask about the same fact twice.
- Each question has exactly 4 options, with only 1 correct answer.
- The position of the correct answer must be randomized among the 4 options.
- Output only valid JSON, with no extra text, comments, or code fences.

Output format:
{"questions":[{"question":"question text","options":["option A","option B","option C","option D"],"answer":0}]}
The answer field is the 0-based index of the correct option.

Page content:
${content}`

  const messages = [
    { role: "system", content: "Output valid JSON only. Do not output any extra characters." },
    { role: "user", content: prompt },
  ]

  let raw = ""
  try {
    const resp = await env.AI.run("@cf/meta/llama-3.1-8b-instruct-fp8", { messages })
    raw = resp?.response ?? ""
  } catch (err) {
    console.error("AI run failed:", err)
    throw createError({ statusCode: 502, statusMessage: "AI 服务调用失败" })
  }

  const questions = parseQuestions(raw)
  if (!questions.length) {
    throw createError({ statusCode: 502, statusMessage: "AI 返回内容无法解析" })
  }

  return { questions }
})

function parseQuestions(raw: string): QuizOption[] {
  let text = raw.trim()
  text = text.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim()

  let data: unknown = null
  try {
    data = JSON.parse(text)
  } catch {
    const match = text.match(/\{[\s\S]*\}/)
    if (match) {
      try {
        data = JSON.parse(match[0])
      } catch {
        data = null
      }
    }
  }

  const list = Array.isArray(data)
    ? data
    : data && typeof data === "object" && Array.isArray((data as { questions?: unknown }).questions)
      ? ((data as { questions: unknown[] }).questions)
      : []

  return list
    .filter(
      (q): q is Record<string, unknown> =>
        !!q && typeof q === "object" && typeof (q as any).question === "string" && Array.isArray((q as any).options) && (q as any).options.length === 4,
    )
    .map<QuizOption>((q) => {
      const answer = (q as any).answer
      return {
        question: String((q as any).question),
        options: (q as any).options.map((o: unknown) => String(o)),
        answer: typeof answer === "number" && answer >= 0 && answer < 4 ? answer : 0,
      }
    })
    .slice(0, 3)
}