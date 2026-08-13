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
  if (content.length > 1200) {
    throw createError({ statusCode: 400, statusMessage: "content 内容过长，请控制在 1200 字以内" })
  }

  const env = (event.context.cloudflare as { env?: AiEnv } | undefined)?.env
  if (!env?.AI) {
    throw createError({ statusCode: 500, statusMessage: "AI binding 未配置" })
  }

  const prompt = `你是一位中国传统文化课的老师。根据下面提供的页面介绍内容，生成 3 道中文选择题。

要求：
- 题目必须与内容相关，考察其中的核心事实，不要重复提问同一知识点。
- 每道题给出 4 个选项，只有 1 个正确。
- 正确答案在 4 个选项中的位置要随机分布。
- 只输出合法 JSON，不要输出任何多余文字、注释或代码块标记。

输出格式：
{"questions":[{"question":"题干","options":["选项A","选项B","选项C","选项D"],"answer":0}]}
其中 answer 为正确答案在 options 中的下标（0-3）。

页面介绍内容：
${content}`

  const messages = [
    { role: "system", content: "你只输出合法 JSON，不输出任何多余字符。" },
    { role: "user", content: prompt },
  ]

  let raw = ""
  try {
    const resp = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", { messages })
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