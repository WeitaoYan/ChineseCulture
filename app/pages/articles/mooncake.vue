<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Mooncake</h1>
      <p class="page-subtitle">Yuebing - The Taste of Mid-Autumn Reunion</p>
      <PageMeta>
        <MetaItem>🥮 Festival Treat</MetaItem>
        <MetaItem>🌕 Reunion Symbol</MetaItem>
        <MetaItem>🍵 Perfect with Tea</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/mooncake.png"
      altText="Mooncakes - Traditional Chinese mooncakes stamped with characters, served on a plate for the Mid-Autumn Festival"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />

      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          Mooncakes (月饼, Yuèbǐng) are the iconic food of the Mid-Autumn
          Festival (中秋节). These rich, dense pastries are shaped like the full
          moon and stamped with characters or floral patterns that symbolize
          family unity and the completeness of the harvest moon. They are
          exchanged as gifts throughout the festival season and shared among
          friends, family, and colleagues as a token of respect and connection.
        </p>
        <p class="section-text">
          Far more than a sweet snack, the mooncake carries the heart of Chinese
          culture: roundness (团圆) standing for reunion, sweetness for a joyful
          life, and gifting for the bonds that hold communities together. For
          anyone exploring Chinese food, the mooncake is a delicious gateway to
          understanding how food, festival, and feeling intertwine.
        </p>
      </section>

      <!-- 历史与传说 -->
      <section class="section">
        <h2 class="section-title">History and Legends</h2>
        <p class="section-text">
          The mooncake's story stretches back over a thousand years. Its ancestor
          is often traced to the "taishi cake" of the Tang Dynasty, but the
          round, filled pastry we know today took shape during the Song and Ming
          dynasties, when it became the signature treat of the moon festival.
        </p>
        <FeatureGrid>
          <FeatureItem title="Why Round?" theme="red">
            <p>
              The mooncake is made round to echo the full moon — a symbol of
              wholeness and family reunion. Slicing a mooncake and sharing it
              among family members mirrors the act of gathering together.
            </p>
          </FeatureItem>
          <FeatureItem title="Wu Gang's Moon Sass" theme="red">
            <p>
              In one folk tale, Wu Gang (吴刚) carried a basket of cake to the
              moon after a misdeed, symbolizing an unattainable goal. This gave
              the mooncake a playful association with chasing high ambitions.
            </p>
          </FeatureItem>
          <FeatureItem title="The Revolution Legend" theme="red">
            <p>
              A popular story claims that during the Yuan Dynasty, messages
              plotting rebellion were hidden inside mooncakes and delivered
              across the country. Though partly myth, it reflects how deeply the
              pastry is woven into historical memory.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 种类 -->
      <section class="section">
        <h2 class="section-title">Types of Mooncakes</h2>
        <p class="section-text">
          China's mooncakes come in an extraordinary variety of styles, each
          region adding its own character to the classic form.
        </p>
        <div class="regions">
          <div class="region-item">
            <h3 class="region-title">Guangdong (Cantonese) Style</h3>
            <p class="region-text">
              The most famous version, with a golden, glossy baked skin and a
              dense filling of lotus seed paste (莲蓉) wrapped around salted egg
              yolks (蛋黄). Rich, moist, and luxurious.
            </p>
          </div>
          <div class="region-item">
            <h3 class="region-title">Suzhou Style</h3>
            <p class="region-text">
              A flaky, layered pastry with a more crumbly texture, often baked
              with savory fillings like pork or dark-sugar sesame.
            </p>
          </div>
          <div class="region-item">
            <h3 class="region-title">Beijing Style</h3>
            <p class="region-text">
              A thin-skinned, moderately sweet mooncake frequently filled with
              red bean paste (红豆沙) and studded with preserved fruits and nuts.
            </p>
          </div>
          <div class="region-item">
            <h3 class="region-title">Snow-Skin (Ice) Style</h3>
            <p class="region-text">
              A modern favorite. Uncooked and snowy-white, made with glutinous
              rice flour and kept chilled, often filled with cream, fruit, or
              even ice cream.
            </p>
          </div>
        </div>
      </section>

      <!-- 制作方法 -->
      <section class="section">
        <h2 class="section-title">How to Make Mooncakes</h2>
        <p class="section-text">
          Making mooncakes at home is a rewarding way to celebrate the festival.
          The steps below produce classic Cantonese-style mooncakes — golden,
          glossy, and rich. They need a day of resting, so plan ahead.
        </p>
        <p class="section-text section-note">
          <strong>Ingredients:</strong> For the dough — 140 g golden syrup, 50 g
          vegetable oil, 1/2 tsp alkaline water (枧水), 200 g plain flour. For the
          filling — about 520 g lotus seed paste, and 8 salted egg yolks. You
          will also need a 100 g mooncake mold.
        </p>

        <div class="process-steps">
          <div class="step-item">
            <div class="step-number">1</div>
            <h3 class="step-title">Rest the Dough</h3>
            <p class="step-desc">
              Whisk the golden syrup, vegetable oil, and alkaline water together.
              Sift in the flour and stir into a soft, silky dough. Wrap it and
              rest for <strong>at least 1 hour</strong> (overnight is best) so
              the dough becomes pliable and the syrup fully soaks the flour.
            </p>
          </div>

          <div class="step-item">
            <div class="step-number">2</div>
            <h3 class="step-title">Prepare the Filling</h3>
            <p class="step-desc">
              Lightly steam the egg yolks to firm them (optional). Divide the
              lotus paste into balls; each ball should enclose one yolk and weigh
              about <strong>60–70 g</strong>. A classic ratio is about 60%
              filling to 40% dough, so the pastry stays thin.
            </p>
          </div>

          <div class="step-item">
            <div class="step-number">3</div>
            <h3 class="step-title">Wrap the Filling</h3>
            <p class="step-desc">
              Divide the rested dough to equal the number of filling balls
              (about 30–40 g each). Flatten one piece of dough in your palm, set
              a filling ball on top, and gently push the dough up and over the
              filling until it is fully sealed. Take care not to tear the thin
              dough.
            </p>
          </div>

          <div class="step-item">
            <div class="step-number">4</div>
            <h3 class="step-title">Mold and Pattern</h3>
            <p class="step-desc">
              Dust the mold and the ball lightly with flour. Press the ball into
              the mold and tap it sharply onto the counter to release the
              mooncake. The mold stamps the classic patterns, often including the
              character 月 (moon) or 囍 (double happiness).
            </p>
          </div>

          <div class="step-item">
            <div class="step-number">5</div>
            <h3 class="step-title">Bake and Glaze</h3>
            <p class="step-desc">
              Preheat the oven to 190°C (375°F). Bake the mooncakes for about 5
              minutes until the top firms slightly, then brush gently with a
              beaten egg-yolk wash. Return to the oven for <strong>10–12
              minutes</strong> until golden brown. Resist over-baking — the skin
              should stay soft.
            </p>
          </div>

          <div class="step-item">
            <div class="step-number">6</div>
            <h3 class="step-title">Rest Before Serving</h3>
            <p class="step-desc">
              This is the hardest part: freshly baked mooncakes are hard and
              crumbly. Store them in an airtight container for
              <strong>1–2 days</strong>, during which the filling releases oil
              that softens the skin into its glossy, tender final texture.
            </p>
          </div>
        </div>
      </section>

      <!-- 传统馅料与现代变化 -->
      <section class="section">
        <h2 class="section-title">Fillings: Traditional and Modern</h2>
        <FeatureGrid>
          <FeatureItem title="Lotus Seed Paste" theme="red">
            <p>
              The classic filling — silky, subtly sweet, and prized for its
              smooth texture. Often paired with one or two salted duck egg yolks.
            </p>
          </FeatureItem>
          <FeatureItem title="Red Bean Paste" theme="red">
            <p>
              A nostalgic favorite, slightly grainier and brighter in flavor,
              widely used in both Beijing and Cantonese styles.
            </p>
          </FeatureItem>
          <FeatureItem title="Five Kernel" theme="red">
            <p>
              A chewy filling of mixed nuts, seeds, and candied fruits —
              walnuts, watermelon seeds, melon seeds, almonds, and more.
            </p>
          </FeatureItem>
          <FeatureItem title="Modern Twists" theme="red">
            <p>
              Today you will find matcha, durian, chocolate, tiramisu, and even
              ice-cream mooncakes. Snow-skin versions and mini mooncakes appeal
              to younger, health-conscious eaters.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 赠送礼仪 -->
      <section class="section">
        <h2 class="section-title">The Art of Gifting</h2>
        <p class="section-text">
          Gifting mooncakes is one of the most important rituals of Mid-Autumn.
          Near the festival, beautifully packaged boxes appear in offices and
          homes across China, and exchanging them is a way to show respect,
          gratitude, and good wishes.
        </p>
        <FeatureGrid>
          <FeatureItem title="Who Receives Them" theme="red">
            <p>
              Mooncakes are given to parents, elders, bosses, friends, and
              relatives. Businesses send elaborate gift boxes to clients and
              partners as a gesture of goodwill.
            </p>
          </FeatureItem>
          <FeatureItem title="Gift Presentation" theme="red">
            <p>
              A pair of exquisite boxes is often more auspicious than one. The
              number eight (8) is considered lucky and frequently appears in
              premium gift packaging.
            </p>
          </FeatureItem>
          <FeatureItem title="Eco-Friendly Trend" theme="red">
            <p>
              Modern consumers increasingly favor simpler, sustainable
              packaging. Some recycle empty boxes into storage or donation
              drives, reducing the festival's environmental footprint.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 饮食搭配 -->
      <section class="section">
        <h2 class="section-title">Serving and Pairing</h2>
        <p class="section-text">
          The mooncake is dense and rich, so it is best enjoyed in small
          wedges — traditionally one mooncake is sliced and shared among the
          family, mirroring the full moon's completeness.
        </p>
        <ul class="ingredient-list">
          <li>
            <strong>Tea</strong> — Oolong, jasmine, or jasmine-green tea cuts
            through the sweetness and aids digestion, the classic pairing.
          </li>
          <li>
            <strong>Pomelo</strong> — A seasonal autumn fruit that balances the
            richness with its fresh, slightly bitter notes.
          </li>
          <li>
            <strong>Warm water or rice wine</strong> — Mild beverages that cleanse
            the palate between sweet bites.
          </li>
        </ul>
      </section>

      <!-- 全球传播 -->
      <section class="section">
        <h2 class="section-title">Mooncakes Around the World</h2>
        <p class="section-text">
          Mooncakes have traveled wherever Chinese communities have settled. In
          Vietnam, the "banh trung thu" shares the same round shape and festival
          spirit. Singapore, Malaysia, and Hong Kong enjoy both traditional and
          adventurous modern varieties. Around the globe, mooncakes have become a
          tangible taste of Chinese culture that welcomes everyone to share in
          the Mid-Autumn celebration.
        </p>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox>
      "A mooncake shared among family mirrors the full moon in the sky — whole,
      golden, and unbroken, just like the bonds we hold dear."
    </QuoteBox>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Mooncake Quiz" />
  </div>
</template>

<script setup>
const siteUrl = "https://chinese-culture.ikber.cc";

definePageMeta({
  layout: "content",
  title: "Mooncake (月饼) - The Taste of Mid-Autumn Festival",
  description:
    "Discover the mooncake (月饼, yuebing), the iconic pastry of China's Mid-Autumn Festival. Learn about its history, regional styles, gifting traditions, and how to make them at home.",
  ogTitle: "Mooncake (月饼) - The Taste of Mid-Autumn Festival | Chinese Culture Explorer",
  ogDescription:
    "Explore the mooncake — from Cantonese lotus seed classics to snow-skin ice varieties. History, regional styles, gifting, and a step-by-step recipe.",
  twitterTitle: "Mooncake (月饼) - The Taste of Mid-Autumn Festival",
  twitterDescription:
    "Discover the mooncake, the iconic pastry of China's Mid-Autumn Festival — history, styles, and how to make them.",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Mooncake (月饼) - The Taste of Mid-Autumn Festival",
        description:
          "Discover the mooncake, the iconic pastry of China's Mid-Autumn Festival. History, regional styles, gifting traditions, and a step-by-step recipe.",
        image: `${siteUrl}/assets/images/mooncake.png`,
        url: `${siteUrl}/articles/mooncake`,
        datePublished: "2026-09-05T00:00:00Z",
        dateModified: "2026-09-05T00:00:00Z",
        author: {
          "@type": "Organization",
          name: "Chinese Culture Explorer",
          url: siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "Chinese Culture Explorer",
          url: siteUrl,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/articles/mooncake`,
        },
        about: {
          "@type": "Thing",
          name: "Mooncake",
          alternateName: ["月饼", "Yuebing", "Mid-Autumn pastry"],
        },
        keywords: [
          "Mooncake",
          "月饼",
          "Yuebing",
          "Mid-Autumn Festival",
          "lotus seed paste",
          "snow skin",
          "Cantonese mooncake",
        ],
      }),
    },
  ],
});
</script>

<style scoped>
.content-page {
  max-width: 100%;
}

/* 页面头部 */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid rgba(166, 44, 33, 0.1);
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.page-subtitle {
  font-size: 1.4rem;
  color: #a62c21;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

/* 内容主体 */
.content-body {
  line-height: 1.8;
}

/* 章节样式 */
.section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(166, 44, 33, 0.3);
}

.section-text {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.2rem;
  text-align: justify;
}

.section-note {
  background-color: rgba(212, 175, 55, 0.1);
  border-left: 4px solid #a62c21;
  padding: 1rem 1.2rem;
  border-radius: 4px;
}

.ingredient-list {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #555;
}

.ingredient-list li {
  margin-bottom: 0.8rem;
  font-size: 1.05rem;
}

/* 地区风格 */
.regions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.region-item {
  background: linear-gradient(135deg, rgba(166, 44, 33, 0.06), rgba(212, 175, 55, 0.06));
  border: 1px solid rgba(166, 44, 33, 0.12);
  border-radius: 10px;
  padding: 1.4rem;
}

.region-title {
  font-size: 1.15rem;
  color: #a62c21;
  margin-bottom: 0.6rem;
  font-weight: 600;
}

.region-text {
  color: #555;
  font-size: 0.98rem;
  line-height: 1.7;
  margin: 0;
}

/* 制作步骤 */
.process-steps {
  margin-top: 2rem;
}

.step-item {
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px dashed rgba(166, 44, 33, 0.2);
}

.step-item:last-child {
  border-bottom: none;
}

.step-number {
  position: absolute;
  left: 0;
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #a62c21;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.2rem;
}

.step-title {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 0.8rem;
  margin-top: 0;
}

.step-desc {
  color: #666;
  line-height: 1.7;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .section-text {
    font-size: 1rem;
  }

  .regions {
    grid-template-columns: 1fr;
  }

  .step-item {
    padding-left: 2.5rem;
  }

  .step-number {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }
}
</style>