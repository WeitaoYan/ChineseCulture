<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">The Forbidden City</h1>
      <p class="page-subtitle">Palace Museum - Beijing, China</p>
      <div class="page-meta">
        <span class="meta-item">🏛️ UNESCO World Heritage Site</span>
        <span class="meta-item">📅 Built: 1406-1420</span>
        <span class="meta-item"
          >👑 Imperial Palace of Ming and Qing Dynasties</span
        >
      </div>
    </div>

    <!-- 主图 -->
    <div class="featured-image">
      <img
        src="/assets/images/forbidden-city.png"
        alt="Forbidden City Main Gate"
      />
    </div>

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          The Forbidden City, also known as the Palace Museum, is a large
          imperial palace complex in central Beijing, China. For almost 500
          years, it served as the home of emperors and their households, as well
          as the ceremonial and political center of Chinese government.
        </p>
        <p class="section-text">
          Built from 1406 to 1420 during the Ming Dynasty, the complex covers
          approximately 72 hectares (178 acres) and contains 980 surviving
          buildings with 8,886 bays of rooms. It is recognized as one of the
          largest and best-preserved wooden structures in the world.
        </p>
      </section>

      <!-- 建筑特色 -->
      <section class="section">
        <h2 class="section-title">Architectural Features</h2>
        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">Symmetrical Design</h3>
            <p class="feature-text">
              The entire complex follows strict symmetrical principles, with the
              main buildings aligned along a central north-south axis.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Yellow Roofs</h3>
            <p class="feature-text">
              Buildings reserved for the emperor feature yellow roof tiles,
              symbolizing imperial power and the highest authority.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Red Walls</h3>
            <p class="feature-text">
              The iconic red walls represent good fortune, joy, and
              auspiciousness in traditional Chinese culture.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Ceremonial Halls</h3>
            <p class="feature-text">
              The three main halls - Hall of Supreme Harmony, Hall of Central
              Harmony, and Hall of Preserving Harmony - were used for important
              state ceremonies.
            </p>
          </div>
        </div>
      </section>

      <!-- 历史意义 -->
      <section class="section">
        <h2 class="section-title">Historical Significance</h2>
        <p class="section-text">
          The Forbidden City is not only an architectural masterpiece but also a
          treasure trove of Chinese history and culture. It houses over 1.8
          million cultural relics, including paintings, calligraphy, ceramics,
          bronze ware, jade carvings, and imperial artifacts.
        </p>
        <p class="section-text">
          In 1987, the Forbidden City was listed as a UNESCO World Heritage
          Site, recognizing its outstanding universal value as "the largest
          collection of preserved ancient wooden structures in the world and a
          testimony to the development of Chinese architecture, art, and culture
          over several centuries."
        </p>
      </section>

      <!-- 游览信息 -->
      <section class="section">
        <h2 class="section-title">Visitor Information</h2>
        <div class="info-box">
          <div class="info-row">
            <span class="info-label">Location:</span>
            <span class="info-value">Dongcheng District, Beijing</span>
          </div>
          <div class="info-row">
            <span class="info-label">Opening Hours:</span>
            <span class="info-value"
              >8:30 AM - 5:00 PM (last entry 4:10 PM)</span
            >
          </div>
          <div class="info-row">
            <span class="info-label">Ticket:</span>
            <span class="info-value"
              >CNY 60 (peak season), CNY 40 (off-season)</span
            >
          </div>
          <div class="info-row">
            <span class="info-label">Recommended Time:</span>
            <span class="info-value">3-4 hours</span>
          </div>
        </div>
      </section>
    </div>

    <!-- 引用 -->
    <div class="quote-box">
      <blockquote class="quote">
        "The Forbidden City is a mirror reflecting China's history, culture, and
        civilization."
      </blockquote>
      <p class="quote-author">— UNESCO</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content", // 使用 content 布局
  title: "The Forbidden City - Chinese Culture Explorer",
  description:
    "Explore the Forbidden City, China's imperial palace and UNESCO World Heritage Site in Beijing.",
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

.image-caption {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  font-size: 0.95rem;
  text-align: center;
  font-style: italic;
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

/* 特色网格 */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature-item {
  background-color: rgba(166, 44, 33, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #a62c21;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.feature-item .feature-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.feature-item .feature-text {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
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
}

.info-value {
  color: #666;
  font-size: 1rem;
  text-align: right;
}

/* 引用框 */
.quote-box {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(166, 44, 33, 0.1),
    rgba(212, 175, 55, 0.1)
  );
  border-radius: 12px;
  text-align: center;
}

.quote {
  font-size: 1.4rem;
  font-style: italic;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.quote-author {
  font-size: 1rem;
  color: #a62c21;
  font-weight: 600;
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
