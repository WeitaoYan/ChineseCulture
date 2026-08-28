<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute();
const siteUrl = "https://chinese-culture.ikber.cc";

useSeoMeta({
  titleTemplate: "%s | Chinese Culture Explorer",
  defaultTitle: "Chinese Culture Explorer",
  description:
    "Explore the rich heritage and timeless traditions of China — festivals, history, philosophy, art, and more.",
  ogSiteName: "Chinese Culture Explorer",
  ogLocale: "en_US",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "canonical", href: `${siteUrl}${route.path}` }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Chinese Culture Explorer",
        alternateName: "中华文化探索平台",
        url: siteUrl,
        description:
          "Explore the rich heritage and timeless traditions of China — festivals, history, philosophy, art, and more.",
        publisher: {
          "@type": "Organization",
          name: "Chinese Culture Explorer",
          url: siteUrl,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/articles?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
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
