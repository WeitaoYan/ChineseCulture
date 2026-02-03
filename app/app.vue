<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "preload", as: "image", href: "/assets/images/building.png" }],
  title: "Chinese Cultural Articles",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Chinese Cultural Articles",
        description:
          "Collection of articles about Chinese traditions, history, and cultural heritage",
      }),
    },
  ],
});
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
