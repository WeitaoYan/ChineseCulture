<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Laba Festival</h1>
      <p class="page-subtitle">The Porridge Festival - Winter Celebration</p>
      <div class="page-meta">
        <span class="meta-item">🍲 Traditional Porridge Celebration</span>
        <span class="meta-item">📅 8th Day of 12th Lunar Month</span>
        <span class="meta-item">🌱 Commemorating Buddha's Enlightenment</span>
      </div>
    </div>

    <!-- 主图 -->
    <div class="featured-image">
      <img
        src="/assets/images/congee.png"
        alt="Traditional Laba Congee with various grains and nuts"
      />
    </div>
    <FestivalDates
      festival-name="Laba Festival"
      :lunar-month="12"
      :lunar-day="8"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          As winter deepens in China, a special festival brings warmth and aroma
          to the cold season. Welcome to the Laba Festival, a traditional
          holiday celebrated on the eighth day of the twelfth lunar month
          (usually falling in January). More than just a culinary event, Laba is
          a cultural tapestry woven with history, folklore, and communal spirit.
        </p>
        <p class="section-text">
          "La" refers to the twelfth lunar month, while "ba" means eight. The
          festival marks the traditional start of preparations for the upcoming
          Chinese New Year, much like the anticipatory atmosphere of Advent
          before Christmas.
        </p>
      </section>

      <!-- 腊八粥介绍 -->
      <section class="section">
        <h2 class="section-title">The Heart of the Festival: Laba Congee</h2>
        <FeatureGrid>
          <FeatureItem title="Ingredients" theme="red">
            <p>
              Families simmer a mixture of eight or more symbolic ingredients,
              which may include:
            </p>
            <ul class="ingredient-list">
              <li><strong>Grains:</strong> rice, millet, barley</li>
              <li><strong>Beans:</strong> red beans, mung beans</li>
              <li>
                <strong>Nuts & dried fruits:</strong> walnuts, chestnuts, dates,
                goji berries
              </li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Symbolism" theme="red">
            <p>
              Each ingredient carries meaning—longevity, prosperity, health, and
              good fortune. The slow-cooking process fills homes with a sweet,
              nutty aroma, while the sharing of congee strengthens community
              bonds.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 历史起源 -->
      <section class="section">
        <h2 class="section-title">Origin Stories</h2>
        <p class="section-text">
          Laba has multiple origin stories. One popular Buddhist legend tells of
          Siddhartha Gautama achieving enlightenment after accepting a bowl of
          porridge from a village girl on this day. In Chinese folklore, it
          commemorates a harvest celebration from ancient times. Historically,
          it was also a day to honor ancestors and household deities.
        </p>
        <FeatureGrid>
          <FeatureItem title="Buddhist Legend" theme="red">
            <p>
              The story of Buddha's enlightenment after receiving a bowl of
              porridge from a village girl.
            </p>
          </FeatureItem>
          <FeatureItem title="Ancient Harvest" theme="red">
            <p>
              A celebration of the year's harvest and preparation for the coming
              winter months.
            </p>
          </FeatureItem>
          <FeatureItem title="Ancestor Honor" theme="red">
            <p>A time to pay respects to ancestors and household deities.</p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 庆祝方式 -->
      <section class="section">
        <h2 class="section-title">How Laba is Celebrated</h2>
        <FeatureGrid>
          <FeatureItem title="Temple Porridge" theme="red">
            <p>
              Temples distribute free porridge to the public, continuing the
              Buddhist tradition of compassion.
            </p>
          </FeatureItem>
          <FeatureItem title="Laba Garlic" theme="red">
            <p>
              Families pickle garlic in vinegar to make "Laba garlic," which
              turns jade green and is enjoyed with dumplings during Chinese New
              Year.
            </p>
          </FeatureItem>
          <FeatureItem title="Preparations" theme="red">
            <p>
              An auspicious day to begin Spring Festival preparations, like
              cleaning homes and making New Year goods.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 现代意义 -->
      <section class="section">
        <h2 class="section-title">Modern Laba: Tradition in Today's China</h2>
        <p class="section-text">
          While urban life has simplified some customs, Laba remains a beloved
          cultural touchstone:
        </p>
        <ul class="modern-practices">
          <li>Supermarkets sell pre-mixed Laba ingredients</li>
          <li>Offices organize congee-making activities</li>
          <li>Social media buzzes with #Laba porridge photos and memories</li>
          <li>
            Serves as the unofficial countdown to Chinese New Year festivities
          </li>
        </ul>
        <p class="section-text">
          In a fast-paced world, Laba Festival invites everyone to slow down.
          It's about gratitude for the year's harvest, hope for the coming year,
          connection with family and tradition, and compassion through sharing
          with others.
        </p>
      </section>

      <!-- 体验建议 -->
      <section class="section">
        <h2 class="section-title">Experience Laba Yourself</h2>
        <div class="info-box">
          <div class="info-row">
            <span class="info-label">1.</span>
            <span class="info-value"
              >Cook your own Laba congee (many recipes are available
              online)</span
            >
          </div>
          <div class="info-row">
            <span class="info-label">2.</span>
            <span class="info-value"
              >Visit a local Chinese temple around January—many serve
              porridge</span
            >
          </div>
          <div class="info-row">
            <span class="info-label">3.</span>
            <span class="info-value"
              >Share the story with friends as an example of China's living
              traditions</span
            >
          </div>
        </div>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox>
      "In a single bowl of Laba porridge, one tastes thousands of years of
      history and the simple, universal human desires for health, happiness, and
      community."
    </QuoteBox>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content", // 使用 content 布局
  title: "Laba Festival - Chinese Culture Explorer",
  description:
    "Discover the Laba Festival, a traditional Chinese celebration of porridge, gratitude, and community spirit.",
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

.page-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: #666;
}

.meta-item {
  background-color: rgba(166, 44, 33, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

/* 主图 */
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
  margin-bottom: 0.5rem;
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
  background-color: rgba(212, 175, 55, 0.1);
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
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
  min-width: 2rem;
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

  .page-meta {
    gap: 0.8rem;
  }

  .meta-item {
    font-size: 0.85rem;
    padding: 0.3rem 0.8rem;
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
    gap: 0.5rem;
  }

  .info-value {
    text-align: left;
  }
}
</style>
