<template>
  <div class="quote-box">
    <blockquote class="quote">
      <slot></slot>
    </blockquote>
    <p class="quote-author">
      <slot name="author">— Chinese Cultural Heritage</slot>
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";

// 定义 props
const props = defineProps({
  gradientType: {
    type: String,
    default: "culture", // 'culture', 'nature', 'traditional', 'custom'
    validator: (value) =>
      ["culture", "nature", "traditional", "custom"].includes(value),
  },
});

// 根据类型计算背景渐变
const getBackgroundGradient = computed(() => {
  const gradients = {
    culture:
      "linear-gradient(135deg, rgba(166, 44, 33, 0.1), rgba(212, 175, 55, 0.1))",
    nature:
      "linear-gradient(135deg, rgba(46, 125, 50, 0.1), rgba(102, 187, 106, 0.1))",
    traditional:
      "linear-gradient(135deg, rgba(123, 31, 162, 0.1), rgba(179, 157, 219, 0.1))",
    custom: "linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))",
  };
  return gradients[props.gradientType];
});
</script>

<style scoped>
.quote-box {
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  background: v-bind(getBackgroundGradient);
}

.quote {
  font-size: 1.2rem;
  font-style: italic;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.quote-author {
  font-size: 1rem;
  color: #a62c21;
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .quote-box {
    padding: 1.5rem;
  }

  .quote {
    font-size: 1.2rem;
  }
}
</style>
