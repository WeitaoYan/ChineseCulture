<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Qingming Festival</h1>
      <p class="page-subtitle">Tomb-Sweeping Day - Honoring Ancestors and Embracing Spring</p>
      <div class="page-meta">
        <span class="meta-item">🪦 Ancestor Worship</span>
        <span class="meta-item">🌸 Spring Outings</span>
        <span class="meta-item">🪁 Flying Kites</span>
      </div>
    </div>

    <!-- 主图 -->
    <div class="featured-image">
      <img
        src="/assets/images/qingming-festival.png"
        alt="Qingming Festival - families visiting ancestors' graves and enjoying spring"
      />
    </div>
    <FestivalDates
      festival-name="Qingming Festival"
      :solar-month="4"
      :solar-day="4"
      :solar-day-range="6"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          Qingming Festival (清明节), also known as Tomb-Sweeping Day, is one of the most important traditional Chinese festivals. Falling on April 4th or 5th each year, it is a time when Chinese families honor their ancestors by visiting their graves, cleaning the tombstones, and making offerings. The festival beautifully balances solemn remembrance with the joyful celebration of spring's arrival.
        </p>
        <p class="section-text">
          With a history spanning over 2,500 years, Qingming embodies the Chinese values of filial piety and respect for one's roots. It is also a celebration of life and nature, as families traditionally take spring outings (踏青) to enjoy the warming weather and blossoming flowers.
        </p>
      </section>

      <!-- 时间介绍 -->
      <section class="section">
        <h2 class="section-title">When Is Qingming Festival?</h2>
        <FeatureGrid>
          <FeatureItem title="Date" theme="gold">
            <p>
              Qingming Festival falls on the 15th day after the Spring Equinox, typically on <strong>April 4th, 5th, or 6th</strong> each year. Unlike most Chinese festivals that follow the lunar calendar, Qingming is based on the solar calendar.
            </p>
          </FeatureItem>
          <FeatureItem title="Origin of Name" theme="gold">
            <p>
              "Qingming" (清明) means "clear and bright" in Chinese, describing the fresh, clean weather of early spring when the sky clears and nature comes alive.
            </p>
          </FeatureItem>
          <FeatureItem title="Holiday Duration" theme="gold">
            <p>
              In modern China, Qingming is a public holiday, typically observed with a one-day break, often combined with a weekend to create a three-day holiday period.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 扫墓祭祖 -->
      <section class="section">
        <h2 class="section-title">Tomb-Sweeping and Ancestor Worship</h2>
        <p class="section-text">
          The central tradition of Qingming Festival is visiting ancestral graves to pay respects. This practice reflects the deep-rooted Chinese value of filial piety (孝道) and the belief in maintaining connections with deceased family members.
        </p>
        <FeatureGrid>
          <FeatureItem title="Cleaning the Graves" theme="gold">
            <p>
              Families clean the tombstones, remove weeds, and tidy up the surrounding area. This act symbolizes care and respect for ancestors, ensuring their resting places are well-maintained.
            </p>
          </FeatureItem>
          <FeatureItem title="Making Offerings" theme="gold">
            <p>
              Traditional offerings include food, tea, wine, and incense. Families may also burn joss paper (paper money) as symbolic offerings for ancestors to use in the afterlife.
            </p>
          </FeatureItem>
          <FeatureItem title="Bow and Pray" theme="gold">
            <p>
              Family members bow before the tombstone and offer prayers, expressing gratitude to ancestors and asking for their continued blessings and protection.
            </p>
          </FeatureItem>
          <FeatureItem title="Willow Branches" theme="gold">
            <p>
              Some traditions involve placing willow branches on graves or wearing them, as willow is believed to ward off evil spirits and bring good fortune.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 踏青 -->
      <section class="section">
        <h2 class="section-title">Spring Outings (Taqing 踏青)</h2>
        <p class="section-text">
          While Qingming involves solemn remembrance, it is also a joyful celebration of spring. After paying respects at ancestral graves, families often enjoy spring outings called "taqing" (踏青), meaning "treading on the green."
        </p>
        <FeatureGrid>
          <FeatureItem title="Enjoying Nature" theme="gold">
            <p>
              Families take walks in parks, mountains, and countryside areas to appreciate the blossoming flowers, fresh green leaves, and warming weather of early spring.
            </p>
          </FeatureItem>
          <FeatureItem title="Picnics" theme="gold">
            <p>
              It's common for families to have picnics outdoors, enjoying traditional Qingming foods while surrounded by spring scenery.
            </p>
          </FeatureItem>
          <FeatureItem title="Photography" theme="gold">
            <p>
              In modern times, many families combine tomb-sweeping with photography trips, capturing beautiful spring moments and creating lasting memories.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 放风筝 -->
      <section class="section">
        <h2 class="section-title">Flying Kites</h2>
        <p class="section-text">
          Flying kites is a beloved Qingming tradition that dates back centuries. The open spaces and breezy spring weather make it an ideal time for this activity.
        </p>
        <FeatureGrid>
          <FeatureItem title="Traditional Belief" theme="gold">
            <p>
              According to tradition, when a kite is flown high and its string is cut, it carries away bad luck, illness, and misfortune. This act symbolizes letting go of negativity from the past year.
            </p>
          </FeatureItem>
          <FeatureItem title="Kite Designs" theme="gold">
            <p>
              Traditional Chinese kites feature intricate designs including dragons, phoenixes, butterflies, and legendary figures. Modern kites come in various creative shapes and sizes.
            </p>
          </FeatureItem>
          <FeatureItem title="Family Activity" theme="gold">
            <p>
              Kite flying is a popular family activity during Qingming, bringing generations together to enjoy the outdoors and create joyful spring memories.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 传统美食 -->
      <section class="section">
        <h2 class="section-title">Traditional Foods</h2>
        <p class="section-text">
          Qingming Festival has its own special traditional foods, varying by region across China.
        </p>
        <FeatureGrid>
          <FeatureItem title="Qingtuan (青团)" theme="gold">
            <p>
              A glutinous rice dumpling colored green with mugwort or barley grass juice, filled with sweet bean paste. This soft, chewy snack is especially popular in southern China and is considered the signature Qingming food.
            </p>
          </FeatureItem>
          <FeatureItem title="Sanzi (馓子)" theme="gold">
            <p>
              Crispy fried dough twists made from wheat flour, popular in northern China. These golden, crunchy snacks have a long history dating back to the Cold Food Festival that merged with Qingming.
            </p>
          </FeatureItem>
          <FeatureItem title="Snail Dishes" theme="gold">
            <p>
              In some regions, particularly around Suzhou, eating snails during Qingming is traditional. The snails are believed to be at their most tender and delicious during this season.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 历史典故 -->
      <section class="section">
        <h2 class="section-title">The Legend of Jie Zitui</h2>
        <p class="section-text">
          Qingming Festival is closely connected to the story of Jie Zitui (介子推), a loyal servant from the Spring and Autumn Period (around 600 BCE).
        </p>
        <FeatureGrid>
          <FeatureItem title="The Story" theme="gold">
            <p>
              Jie Zitui once saved his master, Prince Chong'er, from starvation by cutting flesh from his own thigh to make soup. Later, when the prince became Duke Wen of Jin, he forgot to reward Jie, who retreated to the mountains with his mother.
            </p>
          </FeatureItem>
          <FeatureItem title="The Tragedy" theme="gold">
            <p>
              When the duke tried to find Jie by burning the forest to force him out, Jie and his mother were found burned to death under a willow tree, clinging to an old willow.
            </p>
          </FeatureItem>
          <FeatureItem title="Cold Food Festival" theme="gold">
            <p>
              In remorse, Duke Wen ordered that no fire be used for three days each year, creating the "Cold Food Festival" (寒食节). This eventually merged with Qingming, contributing traditions like eating cold foods such as sanzi.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">Cultural Significance</h2>
        <FeatureGrid>
          <FeatureItem title="Filial Piety" theme="gold">
            <p>
              Qingming Festival embodies the core Chinese value of filial piety, teaching younger generations to remember and honor their ancestors, fostering a sense of family continuity and gratitude.
            </p>
          </FeatureItem>
          <FeatureItem title="Life and Death" theme="gold">
            <p>
              The festival represents a thoughtful balance between remembering the deceased and celebrating life. It acknowledges death while embracing the renewal of spring.
            </p>
          </FeatureItem>
          <FeatureItem title="Family Unity" theme="gold">
            <p>
              Qingming brings families together, reinforcing bonds across generations as they share in both solemn rituals and joyful spring activities.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 著名诗句 -->
      <section class="section quote-section">
        <h2 class="section-title">Famous Poem</h2>
        <div class="quote-content">
          <p class="quote-chinese">
            清明时节雨纷纷，<br />
            路上行人欲断魂。<br />
            借问酒家何处有？<br />
            牧童遥指杏花村。
          </p>
          <p class="quote-translation">
            "A drizzling rain falls endlessly during Qingming season,<br />
            Travelers on the road feel like their souls are breaking.<br />
            'Where might I find a wineshop?' someone asks,<br />
            The shepherd boy points to Apricot Blossom Village in the distance."
          </p>
          <p class="quote-author">— Du Mu (杜牧), Tang Dynasty Poet</p>
        </div>
      </section>

      <!-- 现代庆祝 -->
      <section class="section">
        <h2 class="section-title">Modern Celebrations</h2>
        <p class="section-text">
          Today, Qingming Festival continues to be widely celebrated across China and among Chinese communities worldwide, with some adaptations to modern life.
        </p>
        <FeatureGrid>
          <FeatureItem title="Online Tomb-Sweeping" theme="gold">
            <p>
              For those unable to visit graves in person, online memorial platforms allow people to create virtual tributes and pay respects to ancestors digitally.
            </p>
          </FeatureItem>
          <FeatureItem title="Eco-Friendly Practices" theme="gold">
            <p>
              Many cemeteries now encourage eco-friendly practices such as using flowers instead of burning paper, and biodegradable offerings to reduce fire hazards and environmental impact.
            </p>
          </FeatureItem>
          <FeatureItem title="Travel Rush" theme="gold">
            <p>
              Similar to other major Chinese holidays, Qingming sees significant domestic travel as people return to their hometowns to visit ancestral graves.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 给外国人的小贴士 -->
      <section class="section tips-section">
        <h2 class="section-title">Tips for International Visitors</h2>
        <div class="tips-content">
          <div class="tip-item">
            <span class="tip-icon">📌</span>
            <div class="tip-text">
              <strong>Best Time to Visit:</strong> Qingming (early April) is a beautiful time to visit China, with pleasant spring weather and blooming flowers.
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-icon">⚠️</span>
            <div class="tip-text">
              <strong>Travel Note:</strong> Expect crowds at popular tourist destinations and transportation hubs during the holiday period.
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-icon">🌸</span>
            <div class="tip-text">
              <strong>Try Qingtuan:</strong> The green glutinous rice dumpling is a unique seasonal treat worth trying, especially in southern China.
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-icon">🪁</span>
            <div class="tip-text">
              <strong>Join the Fun:</strong> Parks and open spaces during Qingming are great places to see kite flying and experience the festive spring atmosphere.
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// 定义页面元信息
definePageMeta({
  layout: "content",
  title: "Qingming Festival - Tomb-Sweeping Day | Chinese Culture",
  description:
    "Learn about Qingming Festival (Tomb-Sweeping Day), a traditional Chinese holiday for honoring ancestors and celebrating spring. Discover its history, customs, and cultural significance.",
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
  position: relative;
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
  gap: 1.5rem;
  flex-wrap: wrap;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(166, 44, 33, 0.08), rgba(212, 175, 55, 0.08));
  border-radius: 20px;
  font-size: 0.95rem;
  color: #555;
}

/* 主图 */
.featured-image {
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.featured-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* 内容主体 */
.content-body {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* 章节样式 */
.section {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  transition: all 0.3s ease;
  border-left: 4px solid rgba(166, 44, 33, 0.1);
}

.section:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
  border-left-color: #a62c21;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(166, 44, 33, 0.1);
}

.section-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1rem;
  text-align: justify;
}

.section-text:last-child {
  margin-bottom: 0;
}

/* 诗句部分 */
.quote-section {
  background: linear-gradient(135deg, rgba(166, 44, 33, 0.05), rgba(212, 175, 55, 0.08));
  text-align: center;
}

.quote-content {
  padding: 1rem;
}

.quote-chinese {
  font-size: 1.5rem;
  line-height: 2;
  color: #2c3e50;
  font-style: normal;
  margin-bottom: 1.5rem;
  font-family: "Noto Serif SC", serif;
}

.quote-translation {
  font-size: 1.1rem;
  font-style: italic;
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.quote-author {
  font-size: 1.1rem;
  color: #a62c21;
  font-weight: 600;
}

/* 小贴士部分 */
.tips-section {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(166, 44, 33, 0.05));
}

.tips-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.tip-item:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: translateX(5px);
}

.tip-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.tip-text {
  color: #555;
  line-height: 1.6;
}

.tip-text strong {
  color: #2c3e50;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .section {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .page-meta {
    flex-direction: column;
    align-items: center;
  }

  .quote-chinese {
    font-size: 1.2rem;
  }
}
</style>
