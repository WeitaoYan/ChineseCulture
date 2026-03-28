<template>
  <div class="page-meta">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// PageMeta 组件 - 用于包裹页面元数据项
// 使用默认插槽传入多个 MetaItem 组件
</script>

<style scoped>
.page-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-meta {
    gap: 0.8rem;
  }
}
</style>
