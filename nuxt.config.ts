// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    siteUrl: "https://chinese-culture.ikber.cc",
    autoLastmod: true,
    discoverImages: true,
    urls: [
      {
        loc: "/",
        images: [
          { loc: "/assets/images/building.png", title: "Chinese Culture Explorer" },
        ],
      },
      {
        loc: "/articles",
        images: [
          { loc: "/assets/images/building.png", title: "Chinese Cultural Articles" },
        ],
      },
      // Philosophy & Culture
      { loc: "/articles/yin-yang-i-ching", images: [{ loc: "/assets/images/yin-yang-i-ching.jpg" }] },
      { loc: "/articles/five-elements", images: [{ loc: "/assets/images/five-elements.png" }] },
      { loc: "/articles/chinese-zodiac", images: [{ loc: "/assets/images/chinese-zodiac.jpg" }] },
      { loc: "/articles/chinese-calligraphy", images: [{ loc: "/assets/images/chinese-calligraphy.jpg" }] },
      { loc: "/articles/chinese-tea-culture", images: [{ loc: "/assets/images/chinese-tea-culture.jpg" }] },
      // Festivals (by season)
      { loc: "/articles/spring-festival", images: [{ loc: "/assets/images/spring-festival-reunion-dinner.png" }] },
      { loc: "/articles/xiaonian-festival", images: [{ loc: "/assets/images/xiaonian.png" }] },
      { loc: "/articles/po-wu", images: [{ loc: "/assets/images/po-wu.png" }] },
      { loc: "/articles/yuanxiao-festival", images: [{ loc: "/assets/images/yuanxiao.png" }] },
      { loc: "/articles/longtaitou-festival", images: [{ loc: "/assets/images/longtaitou.png" }] },
      { loc: "/articles/shangsi-festival", images: [{ loc: "/assets/images/shangsi-festival.jpg" }] },
      { loc: "/articles/qingming-festival", images: [{ loc: "/assets/images/qingming-festival.png" }] },
      { loc: "/articles/qixi-festival", images: [{ loc: "/assets/images/qixi.jpg" }] },
      { loc: "/articles/dragon-boat-festival", images: [{ loc: "/assets/images/dragon-boat-festival.png" }] },
      { loc: "/articles/mid-autumn-festival", images: [{ loc: "/assets/images/mid-autumn.jpg" }] },
      { loc: "/articles/chongyang-festival", images: [{ loc: "/assets/images/chongyang-festival.jpg" }] },
      { loc: "/articles/laba-festival", images: [{ loc: "/assets/images/laba-congee.png" }] },
      { loc: "/articles/laba-congee", images: [{ loc: "/assets/images/congee.png" }] },
      { loc: "/articles/winter-solstice", images: [{ loc: "/assets/images/winter-solstice.png" }] },
      { loc: "/articles/counting-the-nines", images: [{ loc: "/assets/images/counting-the-nines.png" }] },
      // Cuisine
      { loc: "/articles/dumplings", images: [{ loc: "/assets/images/jiaozi.png" }] },
      // History & Architecture
      { loc: "/articles/forbidden-city", images: [{ loc: "/assets/images/forbidden-city.png" }] },
      { loc: "/articles/great-wall", images: [{ loc: "/assets/images/greatwall.png" }] },
      { loc: "/articles/terracotta-army", images: [{ loc: "/assets/images/terracotta-army.png" }] },
      { loc: "/articles/temple-of-heaven", images: [{ loc: "/assets/images/temple-of-heaven.png" }] },
    ],
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || "http://localhost:3000",
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    },
  },
});
