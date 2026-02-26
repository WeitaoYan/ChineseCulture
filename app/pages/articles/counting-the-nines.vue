<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Shu Jiu (数九)</h1>
      <p class="page-subtitle">
        Counting the Nines - Winter's Countdown to Spring
      </p>
      <div class="page-meta">
        <span class="meta-item">❄️ Seasonal Calendar Practice</span>
        <span class="meta-item">📅 81 Days After Winter Solstice</span>
        <span class="meta-item">🌸 Ancient Farmer's Almanac</span>
      </div>
    </div>

    <!-- 主图 -->
    <div class="featured-image">
      <img
        src="/assets/images/counting-the-nines.png"
        alt="Traditional Shu Jiu calendar with 81 days marked"
      />
    </div>

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">What is "Counting the Nines"?</h2>
        <p class="section-text">
          It is a traditional method of tracking winter's progress, beginning on
          the Winter Solstice (around December 21-23). The 81 days following the
          solstice are divided into nine sets of nine days each. It was an
          ancient farmer's almanac and a psychological tool to make the long,
          cold winter feel more manageable and predictable.
        </p>
        <p class="section-text">
          As the coldest days descend upon China, a unique folk tradition
          transforms the long winter into a countdown to spring. Welcome to "Shǔ
          Jiǔ" (数九), literally "Counting the Nines" — often poetically called
          the "Nine Nine-Day Periods of Winter." This is not a single-day
          festival, but a seasonal calendar and cultural practice that maps the
          ebb and flow of winter's chill with remarkable wisdom and artistry.
        </p>
      </section>

      <!-- 九九歌介绍 -->
      <section class="section">
        <h2 class="section-title">
          The Heart of the Tradition: The "Nine Nine Rhyme"
        </h2>
        <FeatureGrid>
          <FeatureItem title="Jiǔ Jiǔ Gē (九九歌)" theme="red">
            <p>
              The most charming aspect is the "Jiǔ Jiǔ Gē" (九九歌), or "Nine
              Nine Song." Passed down through generations, this folk rhyme
              describes the changing natural phenomena during each nine-day
              period.
            </p>
            <blockquote class="rhyme-quote">
              "First and second nines, hands stay in pockets tight.<br />
              Third and fourth nines, walk on ice with delight.<br />
              Fifth and sixth nines, see willows by riverside.<br />
              Seventh nine, river thaw; eighth nine, wild geese arrive.<br />
              Nine times nine done, the plowing oxen step outside."
            </blockquote>
          </FeatureItem>
          <FeatureItem title="Practical Guide" theme="red">
            <p>
              This rhyme served as an oral weather forecast and agricultural
              guide, painting a vivid picture of winter's gradual retreat. It
              helped farmers plan their activities based on seasonal changes.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 文化内涵 -->
      <section class="section">
        <h2 class="section-title">
          The Cultural Tapestry: From Observation to Art
        </h2>
        <FeatureGrid>
          <FeatureItem
            title="The 'Nine Nine Elimination of Cold' Chart"
            theme="red"
          >
            <p>
              This is a beautiful folk art. People would draw a branch with 81
              plum blossoms (each with five petals, totaling 405 strokes!). Each
              day, they would fill in one petal with red ink. By the time all
              petals were colored, spring had arrived. It was a meditative daily
              ritual of patience and hope.
            </p>
          </FeatureItem>
          <FeatureItem title="Regional Variations" theme="red">
            <p>Different regions adapted the tradition:</p>
            <ul class="regional-list">
              <li>
                <strong>Northern China:</strong> Focused on ice, rivers, and the
                return of migratory birds.
              </li>
              <li>
                <strong>Southern China:</strong> Rhymes often mentioned the
                blooming of specific flowers in each period.
              </li>
            </ul>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 意义价值 -->
      <section class="section">
        <h2 class="section-title">Why It Matters: Wisdom and Resilience</h2>
        <p class="section-text">
          "Counting the Nines" showcases a profound, poetic connection to
          nature. In an age before modern meteorology, people observed subtle
          signs—the texture of frost, the direction of wind, the behavior of
          animals—to navigate life.
        </p>
        <FeatureGrid>
          <FeatureItem title="Resilience" theme="red">
            <p>Finding structure and beauty in the harshest season.</p>
          </FeatureItem>
          <FeatureItem title="Hope" theme="red">
            <p>
              Each colored petal or recited verse was a step toward warmth and
              renewal.
            </p>
          </FeatureItem>
          <FeatureItem title="Community" theme="red">
            <p>
              Shared rhymes and charts created a collective experience of
              winter.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 体验建议 -->
      <section class="section">
        <h2 class="section-title">Experience the Tradition</h2>
        <FeatureGrid>
          <FeatureItem title="Observe Nature" theme="red">
            <p>
              Mark your calendar on the Winter Solstice and observe nature's
              subtle changes throughout the 81 days.
            </p>
          </FeatureItem>
          <FeatureItem title="Create Your Chart" theme="red">
            <p>
              Create your own "Elimination of Cold" chart—color a segment each
              day.
            </p>
          </FeatureItem>
          <FeatureItem title="Learn the Rhyme" theme="red">
            <p>
              Learn a simple "Nine Nine Song" and share it as a cultural story.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          Unlike the festive Laba, "Counting the Nines" is a serene,
          observational tradition. It reflects a fundamental Chinese
          philosophical stance: living in harmonious rhythm with nature's
          cycles, finding depth and meaning in each season, and holding the
          certainty of renewal through the deepest cold.
        </p>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox>
      "So this winter, as the days slowly lengthen, remember this ancient
      rhythm. It is a testament to human patience, a poetic measure of time, and
      a gentle reminder that winter, however long, always gives way to spring."
    </QuoteBox>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content", // 使用 content 布局
  title: "Shu Jiu - Chinese Culture Explorer",
  description:
    "Discover the ancient Chinese tradition of 'Shu Jiu' (Counting the Nines) - a winter countdown to spring.",
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

.rhyme-quote {
  border-left: 4px solid #a62c2193;
}

.regional-list {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #555;
}

.regional-list li {
  margin-bottom: 0.5rem;
}

.period-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.period-table th,
.period-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.period-table th {
  background-color: #a62c21;
  color: white;
  font-weight: 600;
}

.period-table tbody tr:nth-child(even) {
  background-color: rgba(166, 44, 33, 0.05);
}

/* 特色网格 */
/* 已移至 FeatureGrid 和 FeatureItem 组件 */

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
  min-width: 12rem;
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

  .info-row {
    flex-direction: column;
    gap: 0.5rem;
  }

  .info-value {
    text-align: left;
  }

  .period-table {
    display: block;
    overflow-x: auto;
  }

  .period-table th,
  .period-table td {
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  .info-label {
    min-width: auto;
  }
}
</style>
