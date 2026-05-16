<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Winter Solstice</h1>
      <p class="page-subtitle">Dōngzhì (冬至) - The Turning Point of Winter</p>
      <PageMeta>
        <MetaItem>❄️ Solar Term & Festival</MetaItem>
        <MetaItem>🥟 Family Gathering & Dumplings</MetaItem>
        <MetaItem>☀️ Shortest Day of the Year</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/winter-solstice.png"
      altText="Winter Solstice celebration - family gathering around a table with steaming dumplings and tangyuan"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          In China, the Winter Solstice (冬至, Dōngzhì) is far more than a
          mere astronomical event. Falling between December 21 and 23 each year,
          it marks the shortest day and longest night of the year — the moment
          when the sun reaches its southernmost point. But in Chinese culture,
          this is also a moment of joyful reversal: from this day forward, the
          days grow longer, and the light begins its triumphant return.
        </p>
        <p class="section-text">
          Dōngzhì is both a solar term (the 22nd of the 24 solar terms) and a
          traditional festival with over 2,000 years of history. In ancient
          China, it was regarded as the "new year" of the solar calendar and
          celebrated with as much importance as the Spring Festival itself. The
          saying goes: "冬至大如年" (Dōngzhì is as important as the New Year).
        </p>
      </section>

      <!-- 天文意义 -->
      <section class="section">
        <h2 class="section-title">The Astronomical Significance</h2>
        <p class="section-text">
          On the Winter Solstice, the Northern Hemisphere experiences the
          shortest period of daylight and the longest night. In Beijing, for
          instance, the sun is up for only about 9 hours and 20 minutes. The
          Chinese word "冬至" literally means "winter's extreme" — capturing
          the idea that winter has reached its peak and is about to turn back.
        </p>
        <p class="section-text">
          This turning point has deep philosophical resonance in Chinese
          thought. The concept of yin and yang teaches that when yin (darkness,
          cold) reaches its maximum, yang (light, warmth) begins to grow. The
          Winter Solstice embodies this cycle perfectly — the darkest night
          gives birth to the returning light.
        </p>
        <FeatureGrid>
          <FeatureItem title="Yin at Its Peak" theme="gray">
            <p>
              The longest night represents the maximum of yin energy. From this
              moment, yang begins its slow, steady ascent — a living example of
              the cyclical nature of the universe in Chinese cosmology.
            </p>
          </FeatureItem>
          <FeatureItem title="The Turning Point" theme="gold">
            <p>
              After the solstice, daylight increases by roughly one minute each
              day. This gradual return of light was observed and celebrated by
              farmers, scholars, and emperors for thousands of years.
            </p>
          </FeatureItem>
          <FeatureItem title="24 Solar Terms" theme="blue">
            <p>
              Dōngzhì is the 22nd of the 24 solar terms (节气), the ancient
              Chinese calendar system that guided agricultural life. It follows
              "Major Snow" (大雪) and precedes "Minor Cold" (小寒).
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 历史与传统 -->
      <section class="section">
        <h2 class="section-title">Ancient Traditions and Imperial Roots</h2>
        <p class="section-text">
          During the Zhou Dynasty (1046-256 BC), the Winter Solstice marked the
          beginning of the new year. The emperor would lead grand ceremonies at
          the Temple of Heaven, praying to Heaven for a bountiful harvest in the
          coming year. This tradition continued through the Ming and Qing
          dynasties, with the famous Circular Mound Altar in Beijing's Temple of
          Heaven designed specifically for this ritual.
        </p>
        <p class="section-text">
          After the ceremony, the emperor would meet with his ministers and
          bestow gifts, while common families would gather to worship their
          ancestors and share a feast. Even today, ancestor worship remains an
          important part of the Winter Solstice for many families, especially in
          southern China.
        </p>
        <FeatureGrid>
          <FeatureItem title="Imperial Ceremony" theme="red">
            <p>
              Emperors conducted solemn rituals at the Temple of Heaven,
              offering prayers to Heaven on behalf of all the people — a
              profound statement of the emperor's role as the "Son of Heaven."
            </p>
          </FeatureItem>
          <FeatureItem title="Ancestor Worship" theme="red">
            <p>
              Families prepare offerings of food and incense at ancestral altars
              or graves, honoring those who came before and inviting their
              blessings for the winter season ahead.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 食物传统 -->
      <section class="section">
        <h2 class="section-title">What to Eat: A Tale of North and South</h2>
        <p class="section-text">
          If there's one thing every Chinese person knows about the Winter
          Solstice, it's what to eat — and the answer depends on where you're
          from. The culinary traditions of Dōngzhì reveal a delicious cultural
          divide:
        </p>
        <FeatureGrid>
          <FeatureItem title="Northern China: Dumplings 🥟" theme="green">
            <p>
              In northern China, eating dumplings (饺子, jiǎozi) on the Winter
              Solstice is an ironclad tradition. The shape of dumplings
              resembles ancient Chinese gold ingots, symbolizing wealth. There's
              also a popular legend: the famous physician Zhang Zhongjing
              invented dumplings in the Eastern Han Dynasty to warm people's
              frostbitten ears during a bitter winter. So eating dumplings on
              this day is said to prevent your ears from freezing!
            </p>
          </FeatureItem>
          <FeatureItem title="Southern China: Tangyuan 🍡" theme="green">
            <p>
              In the south, families gather to eat tangyuan (汤圆) — sweet
              glutinous rice balls filled with sesame, peanut, or red bean
              paste, served in warm broth. Their round shape symbolizes family
              reunion and completeness. The phrase "吃汤圆，团圆美满" (eat
              tangyuan, complete reunion) captures the warm sentiment.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 数九 -->
      <section class="section">
        <h2 class="section-title">Shu Jiu: Counting Down to Spring</h2>
        <p class="section-text">
          The Winter Solstice also marks the beginning of "Counting the Nines"
          (数九, Shǔ Jiǔ), a traditional method of tracking winter's progress.
          The 81 days following the solstice are divided into nine sets of nine
          days each. For each nine-day period, a verse describes the changing
          weather:
        </p>
        <div class="info-box">
          <div class="info-row">
            <span class="info-label">一九二九</span>
            <span class="info-value">Hands in pockets — the cold begins to bite</span>
          </div>
          <div class="info-row">
            <span class="info-label">三九四九</span>
            <span class="info-value">Walking on ice — the coldest days arrive</span>
          </div>
          <div class="info-row">
            <span class="info-label">五九六九</span>
            <span class="info-value">Willows sprout by the river — the chill softens</span>
          </div>
          <div class="info-row">
            <span class="info-label">七九河开</span>
            <span class="info-value">The river ice breaks — spring is stirring</span>
          </div>
          <div class="info-row">
            <span class="info-label">八九雁来</span>
            <span class="info-value">Wild geese return — the air warms</span>
          </div>
          <div class="info-row">
            <span class="info-label">九九加一九</span>
            <span class="info-value">Plowing everywhere — spring farming begins</span>
          </div>
        </div>
        <p class="section-text" style="margin-top: 1rem">
          A popular folk tradition was to draw a "Nine Nines Plum Blossom
          Picture" (九九消寒图) — a branch with 81 plum blossoms. Each day, one
          petal was painted in, and when all 81 flowers were colored, spring had
          arrived.
        </p>
      </section>

      <!-- 现代庆祝 -->
      <section class="section">
        <h2 class="section-title">Modern Celebrations</h2>
        <p class="section-text">
          Today, the Winter Solstice remains a cherished occasion across China.
          While urban life has simplified some traditions, the core spirit
          endures:
        </p>
        <ul class="modern-practices">
          <li>Families reunite for a hearty dinner — dumplings or hotpot warm the coldest evening</li>
          <li>Restaurants serve special solstice menus, often packed with customers</li>
          <li>Social media fills with #冬至 photos of homemade dumplings and tangyuan</li>
          <li>Workplaces organize team gatherings around a pot of dumplings</li>
          <li>Health-conscious practices — eating warming foods like lamb and ginger</li>
        </ul>
        <p class="section-text">
          In a season of long nights and cold winds, the Winter Solstice reminds
          everyone that light always returns. It's a celebration of hope,
          family, and the eternal cycles of nature — a moment to slow down,
          share warmth, and look forward to brighter days ahead.
        </p>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox>
      "冬至阳生春又来 — At the Winter Solstice, yang energy is born and spring will come again."
      <template #author>— Ancient Chinese proverb</template>
    </QuoteBox>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "content",
  title: "Winter Solstice (Dongzhi) - Chinese Culture Explorer",
  description:
    "Discover the Winter Solstice (冬至), a major Chinese festival celebrating the shortest day of the year with dumplings, tangyuan, family gatherings, and ancient traditions.",
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
  border-bottom: 3px solid rgba(44, 62, 80, 0.1);
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
  color: #2c3e50;
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
  border-bottom: 2px solid rgba(44, 62, 80, 0.3);
}

.section-text {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.2rem;
  text-align: justify;
}

.modern-practices {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #555;
}

.modern-practices li {
  margin-bottom: 0.5rem;
}

/* 信息框 */
.info-box {
  background-color: rgba(44, 62, 80, 0.08);
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid rgba(44, 62, 80, 0.2);
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(44, 62, 80, 0.15);
}

.info-row:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.info-label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
  min-width: 6rem;
}

.info-value {
  color: #666;
  font-size: 1rem;
  text-align: left;
  flex: 1;
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

  .quote {
    font-size: 1.2rem;
  }

  .info-row {
    flex-direction: column;
    gap: 0.3rem;
  }

  .info-label {
    min-width: auto;
  }

  .info-value {
    text-align: left;
  }
}
</style>
