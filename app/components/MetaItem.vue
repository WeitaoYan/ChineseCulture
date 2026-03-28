<template>
  <span class="meta-item">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
// MetaItem 组件 - 用于页面元数据展示
// 使用默认插槽传入完整的元数据内容（包括 emoji 和文本）
</script>

<style scoped>
.meta-item {
  background-color: rgba(166, 44, 33, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #666;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .meta-item {
    font-size: 0.85rem;
    padding: 0.3rem 0.8rem;
  }
}
</style>
