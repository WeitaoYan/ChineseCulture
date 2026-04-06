<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Mid-Autumn Festival</h1>
      <p class="page-subtitle">Zhongqiu Festival - Moonlight and Reunion</p>
      <PageMeta>
        <MetaItem>🌙 Full Moon</MetaItem>
        <MetaItem>🥮 Mooncakes</MetaItem>
        <MetaItem>🏮 Lanterns</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/mid-autumn.jpg"
      altText="Mid-Autumn Festival - families appreciating the full moon and enjoying mooncakes"
    />
    <FestivalDates
      festivalName="Mid-Autumn Festival"
      :lunarMonth="8"
      :lunarDay="15"
    />
    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          The Mid-Autumn Festival (中秋节, Zhōngqiū Jié) is one of the most
          beloved traditional Chinese festivals, celebrated on the 15th day of
          the 8th lunar month when the moon is at its fullest and brightest.
          Known as the "Moonlight Festival," it honors the harvest moon and
          symbolizes reunion, completeness, and harmony.
        </p>
        <p class="section-text">
          This festival embodies the Chinese value of family unity. Like
          Thanksgiving in Western cultures, Mid-Autumn is a time for families to
          gather, appreciate the beautiful moonlit night, and celebrate the
          abundance of harvest season together.
        </p>
      </section>

      <!-- 时间介绍 -->
      <section class="section">
        <h2 class="section-title">When Is the Mid-Autumn Festival?</h2>
        <FeatureGrid>
          <FeatureItem title="Date" theme="red">
            <p>
              The Mid-Autumn Festival falls on the
              <strong>15th day of the 8th lunar month</strong>, typically
              occurring between late September and early October in the
              Gregorian calendar. In 2026, it will be celebrated on
              <strong>September 25, 2026</strong>.
            </p>
          </FeatureItem>
          <FeatureItem title='Why "Mid-Autumn"?' theme="red">
            <p>
              "Mid-Autumn" (中秋) refers to the lunar month's midpoint. The 8th
              month is considered the "autumn" month in the lunar calendar,
              making this the "mid-autumn" celebration.
            </p>
          </FeatureItem>
          <FeatureItem title="Holiday Status" theme="red">
            <p>
              In modern China, Mid-Autumn is a public holiday, typically
              observed with a one-day break. It's often combined with National
              Day (October 1st) to create a longer holiday period.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 月亮与传说 -->
      <section class="section">
        <h2 class="section-title">The Moon and Legends</h2>
        <p class="section-text">
          The full moon is the central symbol of this festival. In Chinese
          culture, the moon represents completeness, harmony, and feminine
          elegance. Several beautiful legends are associated with the moon.
        </p>
        <FeatureGrid>
          <FeatureItem title="Chang'e Flying to the Moon" theme="red">
            <p>
              The most famous legend tells of Chang'e (嫦娥), who floated to the
              moon after drinking the elixir of immortality. She now lives in
              the Moon Palace (广寒宫) with the Jade Rabbit, symbolizing the
              moon's beauty and mystery.
            </p>
          </FeatureItem>
          <FeatureItem title="The Jade Rabbit" theme="red">
            <p>
              According to legend, a jade rabbit lives on the moon, pounding the
              elixir of life for Chang'e. In some versions, the rabbit offers
              itself as food to a hungry beggar, showing self-sacrifice and
              compassion.
            </p>
          </FeatureItem>
          <FeatureItem title="Wu Gang's Tree" theme="red">
            <p>
              Wu Gang (吴刚) is a man punished to chop the osmanthus tree on the
              moon. The tree heals each time he chops it, representing endless
              effort and the cyclical nature of life.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 传统习俗 -->
      <section class="section">
        <h2 class="section-title">Traditional Customs</h2>
        <FeatureGrid>
          <FeatureItem title="Appreciating the Moon" theme="red">
            <p>
              Families gather outdoors to admire the full moon, symbolizing
              reunion and completeness. It's a moment of quiet beauty and
              reflection, appreciating nature's cycles.
            </p>
          </FeatureItem>
          <FeatureItem title="Eating Mooncakes" theme="red">
            <p>
              Mooncakes (月饼) are the signature food of the festival. These
              round pastries symbolize completeness and unity. Traditional
              fillings include lotus seed paste and egg yolks.
            </p>
          </FeatureItem>
          <FeatureItem title="Lighting Lanterns" theme="red">
            <p>
              Lanterns symbolize illuminating the way for those who are far
              away, guiding them home. Children especially enjoy carrying
              colorful lanterns in moonlit processions.
            </p>
          </FeatureItem>
          <FeatureItem title="Fire Dragon Dances" theme="red">
            <p>
              In some regions, elaborate fire dragon dances are performed, with
              dancers weaving through streets carrying glowing dragon lanterns.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 月饼 -->
      <section class="section">
        <h2 class="section-title">Mooncakes: The Festival Treat</h2>
        <p class="section-text">
          No Mid-Autumn celebration is complete without mooncakes (月饼,
          Yuèbǐng). These rich, round pastries are more than just a delicious
          treat—they symbolize the completeness of the full moon and the unity
          of family.
        </p>
        <FeatureGrid>
          <FeatureItem title="Traditional Flavors" theme="red">
            <p>
              Classic mooncakes feature lotus seed paste (莲蓉) with egg yolk
              (蛋黄), creating a rich, smooth filling. Red bean paste (红豆沙)
              is also popular, offering a sweeter, lighter alternative.
            </p>
          </FeatureItem>
          <FeatureItem title="Modern Variations" theme="red">
            <p>
              Modern mooncakes come in many styles: snow skin (冰皮) with ice
              cream fillings, fruit flavors, chocolate, and even tea-based
              varieties. These are especially popular with younger generations.
            </p>
          </FeatureItem>
          <FeatureItem title="Regional Styles" theme="red">
            <p>
              Cantonese mooncakes are rich and dense, often with multiple egg
              yolks. Suzhou-style mooncakes are lighter and flaky. Each region
              has its own specialty.
            </p>
          </FeatureItem>
          <FeatureItem title="Gifting Tradition" theme="red">
            <p>
              Exchanging mooncakes is an important ritual. Businesses and
              families present boxes of mooncakes to colleagues, friends, and
              relatives as a symbol of respect and connection.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 团圆 -->
      <section class="section">
        <h2 class="section-title">Reunion: The Heart of the Festival</h2>
        <p class="section-text">
          Mid-Autumn is fundamentally about reunion (团圆, Tuányuán). For many
          Chinese families working and living apart, this festival brings them
          together to celebrate their bonds.
        </p>
        <FeatureGrid>
          <FeatureItem title="Family Gatherings" theme="red">
            <p>
              Like Thanksgiving, Mid-Autumn brings families together. Adult
              children return to their parents' home to share a reunion dinner
              and appreciate the moon together.
            </p>
          </FeatureItem>
          <FeatureItem title="Reunion Dinner" theme="red">
            <p>
              The festival dinner features autumn harvest foods: crabs, taro,
              watermelon, and of course, mooncakes. It's a celebration of
              abundance.
            </p>
          </FeatureItem>
          <FeatureItem title="Missing Loved Ones" theme="red">
            <p>
              For those who cannot return home, looking at the same full moon
              creates a symbolic connection with family. The moon bridges the
              distance between loved ones.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 诗词 -->
      <section class="section">
        <h2 class="section-title">Poetry and Literature</h2>
        <p class="section-text">
          The Mid-Autumn moon has inspired countless poets throughout Chinese
          history. The festival evokes themes of longing, nostalgia, and family
          bonds.
        </p>
        <QuoteBox>
          "But pray let us share the moonlight, though far apart— May we live
          long to see each other before we part." — Su Shi (苏轼), "Song of the
          Mid-Autumn Moon"
        </QuoteBox>
        <p class="section-text">
          This famous poem captures the essence of the festival: even when
          separated by distance, sharing the same moonlight creates a sense of
          connection and shared humanity.
        </p>
      </section>

      <!-- 全球化 -->
      <section class="section">
        <h2 class="section-title">Global Celebrations</h2>
        <p class="section-text">
          The Mid-Autumn Festival is celebrated not only in China but throughout
          East Asia, including in Taiwan, Hong Kong, Singapore, Malaysia, and
          among Chinese communities worldwide.
        </p>
        <FeatureGrid>
          <FeatureItem title="East Asia" theme="red">
            <p>
              In Vietnam, it's called Tết Trung Thu (Children's Day). In Korea,
              Korea, Chuseok (추석) is a major harvest festival with similar
              moon-appreciating traditions.
            </p>
          </FeatureItem>
          <FeatureItem title="Diaspora Communities" theme="red">
            <p>
              Chinese communities worldwide gather to celebrate with lantern
              displays, mooncake tastings, and cultural performances.
            </p>
          </FeatureItem>
          <FeatureItem title="Modern Celebrations" theme="red">
            <p>
              Major cities host elaborate lantern displays and cultural events,
              attracting visitors of all backgrounds to enjoy the celebration.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 饮食与健康 -->
      <section class="section">
        <h2 class="section-title">Foods and Traditions</h2>
        <p class="section-text">
          Beyond mooncakes, Mid-Autumn celebrations feature many traditional
          foods associated with harvest and abundance.
        </p>
        <ul class="ingredient-list">
          <li>
            <strong>Crabs</strong> — Harvest crabs are at their ripest during
            this season
          </li>
          <li><strong>Taro</strong> — A traditional harvest food</li>
          <li>
            <strong>Watermelon</strong> — Cut in half to represent the full moon
          </li>
          <li>
            <strong>Chestnuts</strong> — In season and symbolizing vitality
          </li>
          <li><strong>Osmanthus cakes</strong> — fragrant with桂花 flowers</li>
          <li><strong>Tea</strong> — Served with mooncakes to aid digestion</li>
        </ul>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">Cultural Significance</h2>
        <p class="section-text">
          The Mid-Autumn Festival represents the Chinese values of family unity,
          gratitude for harvest, and appreciation of nature's beauty. It reminds
          us to pause and reflect on what truly matters: our connections with
          loved ones.
        </p>
        <p class="section-text">
          Whether celebrating with family members, sharing mooncakes with
          colleagues, or simply gazing at the moon alone, the festival offers a
          moment of beauty and connection in our busy modern lives.
        </p>
      </section>

      <!-- 为什么重要 -->
      <section class="section">
        <h2 class="section-title">Why It Matters</h2>
        <p class="section-text">
          In an era of rapid modernization and urbanization, the Mid-Autumn
          Festival serves as an important anchor to Chinese cultural heritage.
          It preserves traditions of family gatherings, respect for nature, and
          gratitude for abundance.
        </p>
        <p class="section-text">
          The festival teaches us the value of reunion—the importance of coming
          together with family, of honoring our roots, and of finding beauty in
          simple moments like watching the moon rise on a autumn evening.
        </p>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox>
      "The moon, the star, the heavens—may they be blessed with longevity.
      Though separated by thousands of miles, we see the same moon together." —
      Traditional Mid-Autumn blessing
    </QuoteBox>
  </div>
</template>

<script setup>
// Nuxt 3 会自动导入 components 目录下的组件
definePageMeta({
  layout: "content",
  title: "Mid-Autumn Festival (Zhongqiu) - Chinese Culture Explorer",
  description:
    "Discover the Mid-Autumn Festival, a traditional Chinese celebration of the full moon, mooncakes, and family reunion.",
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

.ingredient-list {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #555;
}

.ingredient-list li {
  margin-bottom: 0.8rem;
  font-size: 1.05rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.comparison-table th,
.comparison-table td {
  padding: 1rem 1.5rem;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.comparison-table th {
  background-color: rgba(166, 44, 33, 0.08);
  color: #2c3e50;
  font-weight: 600;
}

.comparison-table tr:last-child td {
  border-bottom: none;
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

  .comparison-table {
    display: block;
    overflow-x: auto;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
  }
}
</style>
