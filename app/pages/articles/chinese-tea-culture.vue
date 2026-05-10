<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Chinese Tea Culture</h1>
      <p class="page-subtitle">
        Chá Wén Huà - The Spirit of Tea
      </p>
      <PageMeta>
        <MetaItem>🍵 Six Tea Types</MetaItem>
        <MetaItem>🏺 Tea Ceremony</MetaItem>
        <MetaItem>🗺️ Tea Horse Road</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/chinese-tea-culture.jpg"
      altText="Traditional Chinese tea ceremony with Yixing teapot and teacups"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Chinese Tea Culture</strong> (茶文化, Chá Wén Huà) is one of
          the most cherished traditions in Chinese civilization. For over
          <strong>5,000 years</strong>, tea has been more than a beverage — it
          is a way of life, a path to spiritual cultivation, a medium for
          social connection, and a cornerstone of Chinese philosophy and
          medicine.
        </p>
        <p class="section-text">
          From the misty mountains of Fujian to the ancient tea houses of
          Chengdu, tea permeates every aspect of Chinese life. The practice of
          tea drinking has evolved into a sophisticated art form, complete
          with its own rituals, aesthetics, and philosophy that continue to
          thrive in modern China and around the world.
        </p>
      </section>

      <!-- 历史 -->
      <section class="section">
        <h2 class="section-title">A 5,000-Year History</h2>
        <FeatureGrid>
          <FeatureItem title="Legendary Origins (神农)" theme="red">
            <p>
              According to Chinese legend, Emperor Shen Nong (神农), the
              mythical father of Chinese agriculture, discovered tea around
              2737 BCE when a tea leaf accidentally fell into his boiling
              water. He found the drink refreshing and medicinal, beginning
              China's love affair with tea.
            </p>
          </FeatureItem>
          <FeatureItem title="Tang Dynasty Golden Age" theme="gold">
            <p>
              Tea culture flourished during the Tang Dynasty (618–907 CE).
              Lu Yu (陆羽) wrote the <strong>Classic of Tea</strong>
              (茶经), the world's first comprehensive treatise on tea, and
              was later deified as the "God of Tea." Tea drinking spread from
              monasteries to all levels of society.
            </p>
          </FeatureItem>
          <FeatureItem title="Song Dynasty Refinement" theme="red">
            <p>
              The Song Dynasty (960–1279) elevated tea to an art form. The
              practice of whisking powdered tea (点茶) in wide bowls was the
              precursor to the Japanese matcha ceremony. Tea competitions
              judged the quality of foam and aroma.
            </p>
          </FeatureItem>
          <FeatureItem title="Global Export" theme="gold">
            <p>
              By the Ming Dynasty (1368–1644), loose-leaf tea brewing became
              standard. Tea was one of China's most valuable exports along the
              Silk Road and the Tea Horse Road, eventually reaching Europe
              where it would transform global drinking habits forever.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 六大茶类 -->
      <section class="section">
        <h2 class="section-title">The Six Types of Chinese Tea</h2>
        <p class="section-text">
          Unlike Western tea culture, Chinese tea is categorized by its
          <strong>degree of oxidation</strong> and processing method. Every
          type of Chinese tea comes from the same plant —
          <em>Camellia sinensis</em> — yet each is remarkably different:
        </p>
        <FeatureGrid>
          <FeatureItem title="Green Tea (绿茶/Lǜ Chá)" theme="green">
            <p>
              <strong>Unoxidized.</strong> The most popular type in China.
              Fresh, grassy, and delicate. Pan-fired to stop oxidation.
              Famous varieties: <em>Longjing</em> (龙井, Dragon Well),
              <em>Biluochun</em> (碧螺春), <em>Mao Feng</em> (毛峰).
            </p>
          </FeatureItem>
          <FeatureItem title="Black Tea (红茶/Hóng Chá)" theme="red">
            <p>
              <strong>Fully oxidized.</strong> Called "red tea" in Chinese
              for its rich amber liquor. Bold, malty, and warming. Famous
              varieties: <em>Keemun</em> (祁门红茶), <em>Lapsang Souchong</em>
              (正山小种, smoked over pine), <em>Dianhong</em> (滇红).
            </p>
          </FeatureItem>
          <FeatureItem title="Oolong Tea (乌龙/Wū Lóng)" theme="gold">
            <p>
              <strong>Semi-oxidized</strong> (10–80%). The most complex
              category, ranging from light floral to dark roasted. Famous
              varieties: <em>Tieguanyin</em> (铁观音, Iron Goddess),
              <em>Da Hong Pao</em> (大红袍, Big Red Robe).
            </p>
          </FeatureItem>
          <FeatureItem title="White Tea (白茶/Bái Chá)" theme="gray">
            <p>
              <strong>Minimally processed.</strong> Simply withered and dried.
              The most delicate and natural of all teas, with a subtle,
              sweet flavor. Famous varieties: <em>Baihao Yinzhen</em>
              (白毫银针, Silver Needle), <em>Bai Mudan</em> (白牡丹).
            </p>
          </FeatureItem>
          <FeatureItem title="Yellow Tea (黄茶/Huáng Chá)" theme="yellow">
            <p>
              <strong>Lightly oxidized with a unique "sealed yellowing"</strong>
              step. Rare and precious, with a mellow, sweet taste free of
              grassiness. Famous variety: <em>Junshan Yinzhen</em>
              (君山银针).
            </p>
          </FeatureItem>
          <FeatureItem title="Dark Tea (黑茶/Hēi Chá)" theme="blue">
            <p>
              <strong>Post-fermented.</strong> Aged and fermented over years
              or decades, developing earthy, complex flavors. Includes the
              famous <em>Pu'er</em> (普洱茶), which improves with age like
              fine wine. Prized for its digestive health benefits.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 茶道与茶艺 -->
      <section class="section">
        <h2 class="section-title">Tea Ceremony & The Way of Tea</h2>
        <p class="section-text">
          Chinese tea ceremony (茶道/茶艺) is a ritualized form of preparing
          and serving tea that emphasizes mindfulness, harmony, and respect.
          There are several major styles:
        </p>
        <FeatureGrid>
          <FeatureItem title="Gongfu Cha (功夫茶)" theme="red">
            <p>
              "Kung Fu Tea" — the most elaborate and artistic style. Small
              Yixing clay teapots and tiny cups are used to extract multiple
              infusions from high-quality oolong or pu'er. Each steep reveals
              new layers of flavor. The focus is on skill, patience, and the
              journey of taste.
            </p>
          </FeatureItem>
          <FeatureItem title="Gaiwan Brewing (盖碗)" theme="gray">
            <p>
              A gaiwan — a lidded bowl with a saucer — is the most versatile
              tea vessel. Used for brewing all types of tea, especially green
              and white teas. The lid controls steeping time by adjusting how
              much the bowl is covered.
            </p>
          </FeatureItem>
          <FeatureItem title="Tea Tasting (品茶)" theme="gold">
            <p>
              Chinese tea tasting engages all five senses. The dry leaf is
              observed and smelled, the infused leaf examined, the liquor
              color admired, the aroma inhaled from the cup, and the flavor
              savored in small sips. A good tea leaves a lingering
              "aftertaste" (回甘).
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 茶马古道 -->
      <section class="section">
        <h2 class="section-title">The Ancient Tea Horse Road</h2>
        <p class="section-text">
          The <strong>Ancient Tea Horse Road</strong> (茶马古道, Chá Mǎ Gǔ
          Dào) was a network of trade routes connecting tea-producing regions
          of Yunnan and Sichuan with Tibet and beyond. For over a thousand
          years, caravans of horses and mules carried compressed pu'er tea
          bricks over treacherous mountain passes, trading tea for war horses.
        </p>
        <p class="section-text">
          This arduous route — crossing snow-capped mountains, deep gorges,
          and rushing rivers — was one of the most challenging trade routes in
          history. It not only facilitated the exchange of goods but also the
          exchange of culture, religion, and ideas between Han Chinese,
          Tibetan, and other ethnic groups.
        </p>
      </section>

      <!-- 健康益处 -->
      <section class="section">
        <h2 class="section-title">Tea and Health</h2>
        <p class="section-text">
          In traditional Chinese medicine, tea is considered a medicine as
          much as a beverage. Each type of tea has different energetic
          properties:
        </p>
        <FeatureGrid>
          <FeatureItem title="Green Tea (Cooling)" theme="green">
            <p>
              Cools the body, clears heat, benefits the mind. Rich in
              antioxidants (catechins). Studies show it may reduce the risk
              of cardiovascular disease and certain cancers.
            </p>
          </FeatureItem>
          <FeatureItem title="Black Tea (Warming)" theme="red">
            <p>
              Warms the stomach, promotes circulation, aids digestion.
              Contains theaflavins and thearubigins, which support gut health
              and heart health.
            </p>
          </FeatureItem>
          <FeatureItem title="Pu'er (Digestive)" theme="blue">
            <p>
              Known as the "weight-loss tea" in Chinese culture. Supports
              digestion, reduces cholesterol, and is believed to help
              regulate blood sugar. Its probiotics from fermentation benefit
              gut flora.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 名言引用 -->
      <section class="section">
        <QuoteBox>
          "Tea is the beverage of the soul. Its fragrance calms the mind,
          its warmth comforts the heart, and its taste brings people together
          in the simple joy of being present."
        </QuoteBox>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title:
    "Chinese Tea Culture | The Art of Tea — Chinese Culture Guide",
  description:
    "Discover Chinese tea culture (茶文化). Explore 5,000 years of history, the Six Types of Chinese Tea, the art of Gongfu Cha ceremony, and the legendary Tea Horse Road.",
  ogTitle: "Chinese Tea Culture — The Spirit of Tea",
  ogDescription:
    "Explore the history, types, and rituals of Chinese tea culture",
  ogType: "article",
  ogImage: "/assets/images/chinese-tea-culture.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Tea Culture — The Spirit of Tea",
  twitterDescription:
    "Explore the history, types, and rituals of Chinese tea culture",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Chinese Tea Culture — The Spirit of Tea",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Chinese Tea Culture — The Spirit of Tea",
        description:
          "Comprehensive guide to Chinese tea culture, covering 5,000 years of history, six tea types, tea ceremony, and the Tea Horse Road",
      }),
    },
  ],
});
</script>

<style scoped>
/* 页面布局 */
.content-page {
  max-width: 100%;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid rgba(166, 44, 33, 0.1);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-weight: 400;
  margin-bottom: 1rem;
}

/* 内容 */
.content-body {
  max-width: 900px;
  margin: 0 auto;
}

.section {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.section:last-child {
  border-bottom: none;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #a62c21;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(166, 44, 33, 0.1);
}

.section-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
}
</style>
