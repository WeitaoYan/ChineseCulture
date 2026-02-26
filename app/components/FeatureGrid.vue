<template>
  <div class="feature-grid">
    <slot></slot>
  </div>
</template>

<script setup>
// FeatureGrid 组件 - 用于创建响应式网格布局
</script>

<style scoped>
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
}
</style>
