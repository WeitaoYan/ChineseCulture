<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Five Elements</h1>
      <p class="page-subtitle">Wu Xing - The Foundation of Chinese Cosmology</p>
      <PageMeta>
        <MetaItem>🌳 Wood</MetaItem>
        <MetaItem>🔥 Fire</MetaItem>
        <MetaItem>🏔️ Earth</MetaItem>
        <MetaItem>⚔️ Metal</MetaItem>
        <MetaItem>💧 Water</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/five-elements.png"
      altText="Five Elements - Wu Xing"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          The Five Elements (五行, Wǔ Xíng) are the fundamental principles in
          traditional Chinese philosophy, representing the five basic substances
          that make up the world. These elements—Wood, Fire, Earth, Metal, and
          Water—are not merely physical materials but dynamic forces that
          describe the relationships between different phenomena in nature.
        </p>
        <p class="section-text">
          This ancient theory dates back over 2,500 years and forms the
          foundation of Chinese medicine, feng shui, martial arts, music,
          astrology, and governance. Understanding the Five Elements provides
          insight into the Chinese worldview—a universe of constant change and
          interconnectedness.
        </p>
      </section>

      <!-- 五行介绍 -->
      <section class="section">
        <h2 class="section-title">The Five Elements</h2>
        <FeatureGrid>
          <FeatureItem title="Wood (木)" theme="green">
            <p>Represents spring, growth, and vitality.</p>
            <ul class="element-list">
              <li><strong>Direction:</strong> East</li>
              <li><strong>Color:</strong> Green</li>
              <li><strong>Organ:</strong> Liver</li>
              <li><strong>Emotion:</strong> Anger</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Fire (火)" theme="red">
            <p>Represents summer, heat, and transformation.</p>
            <ul class="element-list">
              <li><strong>Direction:</strong> South</li>
              <li><strong>Color:</strong> Red</li>
              <li><strong>Organ:</strong> Heart</li>
              <li><strong>Emotion:</strong> Joy</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Earth (土)" theme="gray">
            <p>Represents late summer, stability, and nourishment.</p>
            <ul class="element-list">
              <li><strong>Direction:</strong> Center</li>
              <li><strong>Color:</strong> Yellow</li>
              <li><strong>Organ:</strong> Spleen</li>
              <li><strong>Emotion:</strong> Worry</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Metal (金)" theme="gold">
            <p>Represents autumn, contraction, and structure.</p>
            <ul class="element-list">
              <li><strong>Direction:</strong> West</li>
              <li><strong>Color:</strong> White</li>
              <li><strong>Organ:</strong> Lungs</li>
              <li><strong>Emotion:</strong> Grief</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Water (水)" theme="blue">
            <p>Represents winter, conservation, and wisdom.</p>
            <ul class="element-list">
              <li><strong>Direction:</strong> North</li>
              <li><strong>Color:</strong> Black/Blue</li>
              <li><strong>Organ:</strong> Kidneys</li>
              <li><strong>Emotion:</strong> Fear</li>
            </ul>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 相生关系 -->
      <section class="section">
        <h2 class="section-title">Generating Cycle (相生)</h2>
        <p class="section-text">
          The Generating Cycle describes how each element nourishes and supports
          the next, creating a harmonious flow of energy.
        </p>
        <div class="cycle-diagram">
          <div class="cycle-item">
            <span class="cycle-element">Wood</span>
            <span class="cycle-arrow">→</span>
            <span class="cycle-element">Fire</span>
            <span class="cycle-arrow">→</span>
            <span class="cycle-element">Earth</span>
            <span class="cycle-arrow">→</span>
            <span class="cycle-element">Metal</span>
            <span class="cycle-arrow">→</span>
            <span class="cycle-element">Water</span>
            <span class="cycle-arrow">→</span>
            <span class="cycle-element">Wood</span>
          </div>
        </div>
        <FeatureGrid>
          <FeatureItem title="Wood feeds Fire" theme="green">
            <p>
              Wood fuels fire—what we burn becomes flames. This represents how
              growth and expansion enable transformation and energy.
            </p>
          </FeatureItem>
          <FeatureItem title="Fire creates Earth" theme="red">
            <p>
              Fire transforms matter into ash, which becomes earth. This
              represents transformation and the cyclical nature of endings and
              new beginnings.
            </p>
          </FeatureItem>
          <FeatureItem title="Earth bears Metal" theme="gray">
            <p>
              Metal is extracted from the earth. This represents how stability
              and nourishment give rise to structure and value.
            </p>
          </FeatureItem>
          <FeatureItem title="Metal collects Water" theme="gold">
            <p>
              Metal containers can hold and condense water. This represents how
              structure and discipline enable wisdom and flow.
            </p>
          </FeatureItem>
          <FeatureItem title="Water nurtures Wood" theme="blue">
            <p>
              Water feeds trees and plants. This represents how wisdom and
              flexibility support growth and vitality.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 相克关系 -->
      <section class="section">
        <h2 class="section-title">Controlling Cycle (相克)</h2>
        <p class="section-text">
          The Controlling Cycle describes how each element restrains and
          balances another, maintaining natural order and preventing excessive
          growth.
        </p>
        <div class="cycle-diagram">
          <div class="cycle-item">
            <span class="cycle-element">Wood</span>
            <span class="cycle-arrow">→</span>
            <span class="cycle-element">Earth</span>
            <span class="cycle-arrow">→</span>
            <span class="cycle-element">Water</span>
            <span class="cycle-arrow">→</span>
            <span class="cycle-element">Fire</span>
            <span class="cycle-arrow">→</span>
            <span class="cycle-element">Metal</span>
            <span class="cycle-arrow">→</span>
            <span class="cycle-element">Wood</span>
          </div>
        </div>
        <FeatureGrid>
          <FeatureItem title="Wood parts Earth" theme="green">
            <p>
              Trees and plants break through the earth. This represents how
              growth can overcome rigidity and stagnation.
            </p>
          </FeatureItem>
          <FeatureItem title="Earth absorbs Water" theme="gray">
            <p>
              Earth can dam and absorb water. This represents how stability can
              contain and redirect powerful forces.
            </p>
          </FeatureItem>
          <FeatureItem title="Water extinguishes Fire" theme="blue">
            <p>
              Water puts out fire. This represents how wisdom and flexibility
              can calm destructive energy.
            </p>
          </FeatureItem>
          <FeatureItem title="Fire melts Metal" theme="red">
            <p>
              Fire can melt metal. This represents how passion and energy can
              transform rigid structures.
            </p>
          </FeatureItem>
          <FeatureItem title="Metal chops Wood" theme="gold">
            <p>
              Metal tools can cut wood. This represents how structure and
              precision can shape and direct growth.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 应用领域 -->
      <section class="section">
        <h2 class="section-title">Applications in Daily Life</h2>
        <FeatureGrid>
          <FeatureItem title="Chinese Medicine" theme="green">
            <p>
              The Five Elements theory is fundamental to understanding health
              balance. Each organ corresponds to an element, and practitioners
              use this framework to diagnose and treat illness.
            </p>
          </FeatureItem>
          <FeatureItem title="Feng Shui" theme="blue">
            <p>
              In feng shui, the Five Elements help balance energy (qi) in living
              spaces. Colors, materials, and spatial arrangements are adjusted
              to create harmony.
            </p>
          </FeatureItem>
          <FeatureItem title="Chinese Astrology" theme="yellow">
            <p>
              The Chinese zodiac combines the Five Elements with the 12 animal
              signs, creating a 60-year cycle that describes personality traits
              and destiny.
            </p>
          </FeatureItem>
          <FeatureItem title="Martial Arts" theme="red">
            <p>
              Many martial arts incorporate Five Elements theory into their
              philosophy, connecting specific fighting styles with elemental
              energies.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 五行与季节 -->
      <section class="section">
        <h2 class="section-title">Elements and Seasons</h2>
        <p class="section-text">
          The Five Elements are deeply connected to the seasons, representing
          nature's cyclical patterns:
        </p>
        <FeatureGrid>
          <FeatureItem title="Spring → Wood" theme="green">
            <p>
              A time of renewal, growth, and new beginnings. Nature awakens with
              fresh energy and vitality.
            </p>
          </FeatureItem>
          <FeatureItem title="Summer → Fire" theme="red">
            <p>
              The peak of yang energy, representing warmth, expansion, and
              abundant growth.
            </p>
          </FeatureItem>
          <FeatureItem title="Late Summer → Earth" theme="gray">
            <p>
              The transitional period between seasons, representing grounding,
              nourishment, and stability.
            </p>
          </FeatureItem>
          <FeatureItem title="Autumn → Metal" theme="gold">
            <p>
              A time of contraction, harvesting, and reflection. Energy turns
              inward in preparation for winter.
            </p>
          </FeatureItem>
          <FeatureItem title="Winter → Water" theme="blue">
            <p>
              The peak of yin energy, representing conservation, stillness, and
              wisdom in preparation for renewal.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 现代意义 -->
      <section class="section">
        <h2 class="section-title">Modern Significance</h2>
        <p class="section-text">
          The Five Elements theory continues to influence modern Chinese culture
          and is increasingly recognized worldwide as a valuable framework for
          understanding natural cycles and balance.
        </p>
        <ul class="modern-practices">
          <li>
            <strong>Business:</strong> Many Chinese businesses consider Five
            Elements when choosing company names, dates, and locations
          </li>
          <li>
            <strong>Design:</strong> Interior designers use Five Elements
            principles to create balanced, harmonious spaces
          </li>
          <li>
            <strong>Personal Development:</strong> Some people use the Five
            Elements to understand their personality strengths and weaknesses
          </li>
          <li>
            <strong>Health:</strong> The theory remains central to traditional
            Chinese medicine and wellness practices
          </li>
        </ul>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">Why It Matters</h2>
        <p class="section-text">
          The Five Elements represent more than a philosophical concept—they
          embody the Chinese understanding of harmony, balance, and
          interconnectedness. This ancient wisdom offers a unique perspective on
          the natural world and our place within it.
        </p>
        <p class="section-text">
          Whether you're exploring Chinese medicine, practicing feng shui, or
          simply curious about traditional Chinese culture, understanding the
          Five Elements provides a window into a worldview that has shaped
          civilization for millennia.
        </p>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox>
      "The Five Elements are not merely substances but dynamic forces—the
      interplay of generation and control that shapes the universe and
      everything within it."
    </QuoteBox>
  </div>
</template>

<script setup>
// Nuxt 3 会自动导入 components 目录下的组件
definePageMeta({
  layout: "content",
  title: "Five Elements (Wu Xing) - Chinese Culture Explorer",
  description:
    "Discover the Five Elements theory, the foundation of traditional Chinese philosophy and cosmology.",
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

.section--title {
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

.element-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.element-list li {
  padding: 0.3rem 0;
  color: #555;
}

.element-list strong {
  color: #2c3e50;
}

.cycle-diagram {
  background-color: rgba(166, 44, 33, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.cycle-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cycle-element {
  font-weight: 600;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid rgba(166, 44, 33, 0.3);
}

.cycle-arrow {
  font-size: 1.5rem;
  color: #a62c21;
}

.modern-practices {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #555;
}

.modern-practices li {
  margin-bottom: 0.8rem;
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

  .element-list li {
    margin-bottom: 0.5rem;
  }
}
</style>
