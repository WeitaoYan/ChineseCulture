<template>
  <nav class="breadcrumb-nav" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li class="breadcrumb-item">
        <NuxtLink to="/" class="breadcrumb-link">
          <span class="breadcrumb-icon">🏠</span>
          <span>Home</span>
        </NuxtLink>
      </li>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="breadcrumb-item"
        :class="{ 'is-current': index === items.length - 1 }"
      >
        <span class="breadcrumb-separator">›</span>
        <NuxtLink
          v-if="item.to && index !== items.length - 1"
          :to="item.to"
          class="breadcrumb-link"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="breadcrumb-text">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
.breadcrumb-nav {
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.breadcrumb-separator {
  margin: 0 0.5rem;
  color: #999;
}

.breadcrumb-link {
  color: #a62c21;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: #d4af37;
  text-decoration: underline;
}

.breadcrumb-icon {
  font-size: 0.85rem;
}

.breadcrumb-text {
  color: #666;
}

.is-current .breadcrumb-text {
  color: #2c3e50;
  font-weight: 500;
}

@media (max-width: 768px) {
  .breadcrumb-item {
    font-size: 0.8rem;
  }

  .breadcrumb-separator {
    margin: 0 0.3rem;
  }
}
</style>
