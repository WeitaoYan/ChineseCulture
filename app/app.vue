<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useSeoMeta({
  titleTemplate: "%s | Chinese Culture Explorer",
  defaultTitle: "Chinese Culture Explorer",
  description:
    "Explore the rich heritage and timeless traditions of China — festivals, history, philosophy, art, and more.",
  ogTitle: "Chinese Culture Explorer",
  ogDescription:
    "Explore the rich heritage and timeless traditions of China — festivals, history, philosophy, art, and more.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "preload", as: "image", href: "/assets/images/building.png" }],
});
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
