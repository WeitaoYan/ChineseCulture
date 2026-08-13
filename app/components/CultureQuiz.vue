<template>
  <section class="culture-quiz">
    <h2 class="quiz-title">{{ title }}</h2>

    <div v-if="status === 'loading'" class="quiz-state">
      <div class="quiz-loader" aria-hidden="true"></div>
      <p class="quiz-state-text">题目生成中，请稍候…</p>
    </div>

    <div v-else-if="status === 'error'" class="quiz-state">
      <p class="quiz-state-text quiz-error">题目生成失败，请稍后重试</p>
      <button class="quiz-btn" @click="loadQuestions">重新生成</button>
    </div>

    <div v-else-if="status === 'done'" class="quiz-state">
      <p class="quiz-score">答对 {{ score }} / {{ questions.length }} 题</p>
      <button class="quiz-btn" @click="restart">再玩一次</button>
    </div>

    <div v-else class="quiz-body">
      <p class="quiz-progress">第 {{ current + 1 }} / {{ questions.length }} 题</p>
      <p class="quiz-question">{{ currentQuestion.question }}</p>

      <ul class="quiz-options">
        <li v-for="(opt, i) in currentQuestion.options" :key="i">
          <button
            class="quiz-option"
            :class="optionClass(i)"
            :disabled="answered"
            @click="select(i)"
          >
            <span class="quiz-option-letter">{{ letters[i] }}</span>
            {{ opt }}
          </button>
        </li>
      </ul>

      <div class="quiz-actions">
        <template v-if="!answered">
          <button
            class="quiz-btn quiz-btn-primary"
            :disabled="selected === null"
            @click="submit"
          >
            提交答案
          </button>
        </template>
        <template v-else>
          <p v-if="selected === currentQuestion.answer" class="quiz-feedback quiz-feedback--right">
            ✓ 回答正确！
          </p>
          <p v-else class="quiz-feedback quiz-feedback--wrong">
            ✕ 正确答案是 {{ letters[currentQuestion.answer] }}
          </p>
          <button
            v-if="current < questions.length - 1"
            class="quiz-btn quiz-btn-primary"
            @click="next"
          >
            下一题
          </button>
          <button v-else class="quiz-btn quiz-btn-primary" @click="finish">
            查看成绩
          </button>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "趣味小测验",
  },
  content: {
    type: String,
    required: true,
  },
});

const letters = ["A", "B", "C", "D"];

const status = ref("loading");
const questions = ref([]);
const current = ref(0);
const selected = ref(null);
const answered = ref(false);
const score = ref(0);

const currentQuestion = computed(() => questions.value[current.value] || {});

async function loadQuestions() {
  status.value = "loading";
  try {
    const { data } = await useFetch("/api/ai", {
      method: "POST",
      body: { content: props.content },
    });
    if (data.value?.questions?.length) {
      questions.value = data.value.questions;
      reset();
      status.value = "ready";
    } else {
      status.value = "error";
    }
  } catch {
    status.value = "error";
  }
}

function reset() {
  current.value = 0;
  selected.value = null;
  answered.value = false;
  score.value = 0;
}

function select(i) {
  if (!answered.value) selected.value = i;
}

function submit() {
  if (selected.value === null) return;
  answered.value = true;
  if (selected.value === currentQuestion.value.answer) score.value += 1;
}

function next() {
  current.value += 1;
  selected.value = null;
  answered.value = false;
}

function finish() {
  status.value = "done";
}

function restart() {
  reset();
  status.value = "ready";
}

function optionClass(i) {
  if (!answered.value) {
    return i === selected.value ? "quiz-option--selected" : "";
  }
  if (i === currentQuestion.value.answer) return "quiz-option--correct";
  if (i === selected.value) return "quiz-option--wrong";
  return "quiz-option--muted";
}

onMounted(loadQuestions);
</script>

<style scoped>
.culture-quiz {
  margin: 3rem 0;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-left: 4px solid #d4af37;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.quiz-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(166, 44, 33, 0.3);
}

.quiz-state {
  text-align: center;
  padding: 1.5rem 0;
}

.quiz-loader {
  width: 36px;
  height: 36px;
  margin: 0 auto 0.75rem;
  border: 3px solid rgba(212, 175, 55, 0.3);
  border-top-color: #a62c21;
  border-radius: 50%;
  animation: quiz-spin 0.8s linear infinite;
}

@keyframes quiz-spin {
  to {
    transform: rotate(360deg);
  }
}

.quiz-state-text {
  color: #666;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.quiz-error {
  color: #a62c21;
}

.quiz-score {
  font-size: 1.4rem;
  color: #a62c21;
  font-weight: 700;
  margin-bottom: 1rem;
}

.quiz-progress {
  color: #a62c21;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}

.quiz-question {
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.quiz-options {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  text-align: left;
  padding: 0.85rem 1rem;
  font-size: 1.05rem;
  color: #444;
  background: rgba(212, 175, 55, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.quiz-option:hover:not(:disabled) {
  border-color: #d4af37;
  background: rgba(212, 175, 55, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
}

.quiz-option-letter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: #a62c21;
  color: #fff;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 700;
  flex-shrink: 0;
}

.quiz-option--selected {
  border-color: #a62c21;
  background: rgba(166, 44, 33, 0.08);
}

.quiz-option--correct {
  border-color: #4caf50;
  background: rgba(76, 175, 80, 0.12);
}

.quiz-option--correct .quiz-option-letter {
  background: #4caf50;
}

.quiz-option--wrong {
  border-color: #a62c21;
  background: rgba(166, 44, 33, 0.12);
}

.quiz-option--wrong .quiz-option-letter {
  background: #a62c21;
}

.quiz-option--muted {
  opacity: 0.6;
}

.quiz-option:disabled {
  cursor: default;
}

.quiz-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.quiz-btn {
  padding: 0.7rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid #a62c21;
  color: #a62c21;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quiz-btn:hover:not(:disabled) {
  background: #a62c21;
  color: #fff;
}

.quiz-btn:disabled {
  opacity: 0.4;
  cursor: default;
}

.quiz-btn-primary {
  background: #a62c21;
  color: #fff;
}

.quiz-btn-primary:hover:not(:disabled) {
  background: #8a241b;
  border-color: #8a241b;
}

.quiz-feedback {
  font-size: 1.05rem;
  font-weight: 600;
}

.quiz-feedback--right {
  color: #4caf50;
}

.quiz-feedback--wrong {
  color: #a62c21;
}

@media (max-width: 768px) {
  .culture-quiz {
    padding: 1.4rem;
  }

  .quiz-title {
    font-size: 1.5rem;
  }

  .quiz-question {
    font-size: 1.05rem;
  }

  .quiz-option {
    font-size: 0.98rem;
  }
}
</style>