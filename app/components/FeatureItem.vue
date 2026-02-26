<template>
  <div class="feature-item" :class="itemClass">
    <h3 class="feature-title">{{ title }}</h3>
    <div class="feature-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// 定义 props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: "gold", // 'gold', 'red', 'blue', 'green'
    validator: (value) => ["gold", "red", "blue", "green"].includes(value),
  },
});

// 根据主题计算样式类名
const itemClass = computed(() => {
  return `feature-item--${props.theme}`;
});
</script>

<style scoped>
.feature-item {
  padding: 1.5rem;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* 不同主题样式 */
.feature-item--gold {
  background-color: rgba(212, 175, 55, 0.05);
  border-left: 4px solid #d4af37;
}

.feature-item--red {
  background-color: rgba(166, 44, 33, 0.05);
  border-left: 4px solid #a62c21;
}

.feature-item--blue {
  background-color: rgba(33, 150, 243, 0.05);
  border-left: 4px solid #2196f3;
}

.feature-item--green {
  background-color: rgba(76, 175, 80, 0.05);
  border-left: 4px solid #4caf50;
}

/* 标题样式 */
.feature-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

/* 内容区域样式 */
.feature-content :deep(p) {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.feature-content :deep(ul) {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #666;
}

.feature-content :deep(li) {
  margin-bottom: 0.3rem;
  line-height: 1.5;
}

.feature-content :deep(strong) {
  color: #2c3e50;
  font-weight: 600;
}

.feature-content :deep(blockquote) {
  background-color: rgba(212, 175, 55, 0.1);
  padding: 1rem;
  font-style: italic;
  color: #555;
  margin: 1rem 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .feature-item {
    padding: 1.2rem;
  }

  .feature-title {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  .feature-content :deep(p) {
    font-size: 0.95rem;
  }
}
</style>
