<template>
  <div class="featured-image">
    <img
      :src="imageSrc"
      :alt="altText"
      loading="lazy"
    />
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true,
    validator: (value) => value.startsWith('/')
  },
  altText: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.featured-image {
  margin-bottom: 3rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.featured-image img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
