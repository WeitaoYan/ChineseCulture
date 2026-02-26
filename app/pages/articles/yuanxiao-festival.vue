<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Yuanxiao Festival</h1>
      <p class="page-subtitle">
        China's Sweet Lantern Celebration - The Grand Finale
      </p>
      <div class="page-meta">
        <span class="meta-item">🏮 Lantern Displays</span>
        <span class="meta-item">🍡 Sweet Yuanxiao Treats</span>
        <span class="meta-item">❤️ Romantic Traditions</span>
      </div>
    </div>

    <!-- 主图 -->
    <div class="featured-image">
      <img
        src="/assets/images/yuanxiao.png"
        alt="Colorful lanterns and sweet yuanxiao during the Lantern Festival"
      />
    </div>

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          If Chinese New Year is a grand, weeks-long party, then the
          <strong>Yuanxiao Festival</strong> (元宵节) is the beautiful
          finale—the last dazzling burst of fireworks before the holiday season
          gently comes to a close.
        </p>
        <p class="section-text">
          Celebrated on the <strong>15th day of the first lunar month</strong>,
          this festival marks the first full moon night of the new year. In
          English, it's often called the <strong>Lantern Festival</strong>, and
          for good reason: when night falls, the world lights up with glowing
          colors.
        </p>
      </section>

      <!-- 时间介绍 -->
      <section class="section">
        <h2 class="section-title">When Is It?</h2>
        <p class="section-text">
          The Yuanxiao Festival always falls on the 15th day of Lunar January.
          In 2026, as the Year of the Horse begins on February 17, the festival
          will be celebrated on <strong>March 12, 2026</strong>.
        </p>
      </section>

      <!-- 双重名称 -->
      <section class="section">
        <h2 class="section-title">Two Names, One Festival</h2>
        <p class="section-text">
          You might hear this celebration called by two different names, and
          both tell you something important about the day:
        </p>
        <FeatureGrid>
          <FeatureItem title="Yuanxiao Festival (元宵节)" theme="gold">
            <p>
              Named after the sweet dumplings people eat—more on those soon!
            </p>
          </FeatureItem>
          <FeatureItem title="Lantern Festival (灯笼节)" theme="gold">
            <p>
              Named after the central activity when darkness falls.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 元宵与汤圆 -->
      <section class="section">
        <h2 class="section-title">The Food: Yuanxiao vs. Tangyuan</h2>
        <p class="section-text">
          Let's start with the star of the table: the little round dumplings
          that give the festival its name.
        </p>
        <p class="section-text">
          These are <strong>sweet glutinous rice balls</strong> served in warm
          soup. They're small, chewy, and filled with something delicious
          inside. Common fillings include:
        </p>
        <ul class="ingredient-list">
          <li><strong>Black sesame paste</strong> (the most classic)</li>
          <li><strong>Sweet red bean paste</strong></li>
          <li><strong>Peanut butter mixed with sugar</strong></li>
          <li><strong>Chocolate</strong> (a modern twist)</li>
          <li><strong>Osmanthus flowers</strong> for fragrance</li>
        </ul>
        <p class="section-text">
          But here's an interesting detail:
          <strong>northern and southern China make them differently</strong>,
          and they even call them by different names!
        </p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th></th>
              <th><strong>Northern China</strong></th>
              <th><strong>Southern China</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>Yuanxiao (元宵)</td>
              <td>Tangyuan (汤圆)</td>
            </tr>
            <tr>
              <td><strong>How It's Made</strong></td>
              <td>
                The filling is cut into cubes, then rolled in dry glutinous rice
                flour—like making snowballs!
              </td>
              <td>
                The filling is wrapped in rice dough, like making dumplings.
              </td>
            </tr>
            <tr>
              <td><strong>Texture</strong></td>
              <td>Slightly chewier, with a drier surface</td>
              <td>Softer, smoother, and more delicate</td>
            </tr>
            <tr>
              <td><strong>Soup</strong></td>
              <td>The water becomes slightly cloudy from the flour</td>
              <td>The soup stays clearer</td>
            </tr>
          </tbody>
        </table>
        <p class="section-text">
          No matter how they're made, the meaning is the same. The round shape
          represents <strong>wholeness and togetherness</strong>. The character
          for "round" (圆) sounds like "reunion" (团圆). Eating these sweet
          balls with family is a wish for a
          <strong>sweet, complete, and harmonious year</strong> ahead.
        </p>
      </section>

      <!-- 灯笼庆典 -->
      <section class="section">
        <h2 class="section-title">
          The Heart of the Festival: Lanterns at Night
        </h2>
        <p class="section-text">
          When the sun sets, the real magic begins. Everywhere you look,
          lanterns appear:
        </p>
        <FeatureGrid>
          <FeatureItem title="Traditional Paper Lanterns" theme="gold">
            <p>
              Beautiful red and gold paper lanterns in various shapes and sizes,
              illuminating streets and buildings.
            </p>
          </FeatureItem>
          <FeatureItem title="Elaborate Sculptures" theme="gold">
            <p>
              Large lantern sculptures shaped like dragons, zodiac animals,
              flowers, and mythical creatures.
            </p>
          </FeatureItem>
          <FeatureItem title="Floating & Sky Lanterns" theme="gold">
            <p>
              Lanterns set adrift on rivers and released into the sky, carrying
              wishes upward.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          In major cities and ancient towns,
          <strong>lantern fairs</strong> transform parks into glowing
          wonderlands. Families bundle up against the winter chill and stroll
          through the light, children holding small lanterns of their own—often
          in the shape of the year's zodiac animal.
        </p>
      </section>

      <!-- 猜灯谜 -->
      <section class="section">
        <h2 class="section-title">The Game: Riddles Written on Light</h2>
        <p class="section-text">
          Here's a tradition that adds brain-teasing fun to the beauty:
          <strong>lantern riddles</strong> (猜灯谜).
        </p>
        <p class="section-text">
          People write riddles on strips of paper and attach them to lanterns.
          Visitors stop, read, and try to guess the answer. If you solve one,
          you might win a small prize!
        </p>
        <FeatureGrid>
          <FeatureItem title="Wordplay Puzzles" theme="gold">
            <p>
              Clever riddles based on the structure and meaning of Chinese
              characters.
            </p>
          </FeatureItem>
          <FeatureItem title="Object Riddles" theme="gold">
            <p>
              Descriptive riddles about common objects, animals, or natural
              phenomena.
            </p>
          </FeatureItem>
          <FeatureItem title="Character Twists" theme="gold">
            <p>
              Creative interpretations of Chinese characters with hidden
              meanings.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          It's a social game that turns a walk through the lanterns into an
          interactive experience. Friends and families gather around, pointing
          and thinking together.
        </p>
      </section>

      <!-- 其他庆典活动 -->
      <section class="section">
        <h2 class="section-title">Other Festive Flavors</h2>
        <p class="section-text">
          Depending on where you are in China, you might also see:
        </p>
        <FeatureGrid>
          <FeatureItem title="Lion & Dragon Dances" theme="gold">
            <p>
              Colorful performances in the streets adding to the festive
              atmosphere.
            </p>
          </FeatureItem>
          <FeatureItem title="Stilt Walkers" theme="gold">
            <p>
              Performers in colorful costumes walking on stilts for acrobatic
              fun.
            </p>
          </FeatureItem>
          <FeatureItem title="Fireworks" theme="gold">
            <p>
              Spectacular displays lighting up the night sky with brilliant
              colors.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          In some regions, there are even
          <strong>traditional folk performances</strong> that have been passed
          down for centuries—dances, operas, and songs specific to the lantern
          festival.
        </p>
      </section>

      <!-- 浪漫传统 -->
      <section class="section">
        <h2 class="section-title">A Festival of Romance</h2>
        <p class="section-text">
          Long ago, the Yuanxiao Festival had a special role in young people's
          lives. In ancient China, unmarried women were not often allowed to go
          out freely. But during the lantern festival, social rules relaxed.
          Young women could leave their homes, walk under the lanterns, and
          enjoy the night alongside young men.
        </p>
        <p class="section-text">
          Many a romance began on this night. Poets wrote verses about chance
          encounters beneath glowing lanterns. The festival became associated
          with <strong>love, longing, and sweet memories</strong>.
        </p>
        <p class="section-text">
          Even today, it carries a gentle romantic feeling—a softer counterpart
          to the more boisterous Valentine's Day.
        </p>
      </section>

      <!-- 深层含义 -->
      <section class="section">
        <h2 class="section-title">
          The Deeper Meaning: Full Moon, Full Family
        </h2>
        <p class="section-text">
          The 15th day of the lunar month always brings a full moon. In Chinese
          culture, the full moon represents
          <strong>completeness and reunion</strong>. Just as the moon is round
          and whole, families should be together.
        </p>
        <p class="section-text">
          By the time the Yuanxiao Festival arrives, many people have already
          returned to work after the long New Year holiday. But on this night,
          they come home again. They share a bowl of tangyuan, walk through the
          lantern light, and look up at the same full moon—together.
        </p>
        <p class="section-text">
          It's a final moment of warmth before the year truly settles into its
          rhythm.
        </p>
        <ul class="modern-practices">
          <li>
            Modern celebrations blend ancient traditions with contemporary
            lantern designs
          </li>
          <li>Technology allows virtual participation in lantern festivals</li>
          <li>Global celebrations spread Chinese culture worldwide</li>
          <li>
            The festival serves as a bridge between New Year celebrations and
            daily life
          </li>
        </ul>
      </section>

      <!-- 访客指南 -->
      <section class="section">
        <h2 class="section-title">For Visitors: How to Experience It</h2>
        <p class="section-text">
          If you're in China during the Yuanxiao Festival, here's how to make
          the most of it:
        </p>
        <div class="info-box">
          <div class="info-row">
            <span class="info-label">1.</span>
            <span class="info-value">
              Find a lantern fair in your city. The biggest cities like Beijing,
              Shanghai, and Xi'an have spectacular displays.
            </span>
          </div>
          <div class="info-row">
            <span class="info-label">2.</span>
            <span class="info-value">
              Try both yuanxiao and tangyuan if you can—taste the difference!
            </span>
          </div>
          <div class="info-row">
            <span class="info-label">3.</span>
            <span class="info-value">
              Go out at night, even if it's cold. The lanterns are best after
              dark.
            </span>
          </div>
          <div class="info-row">
            <span class="info-label">4.</span>
            <span class="info-value">
              Look for riddles on lanterns and see if you can guess any.
            </span>
          </div>
          <div class="info-row">
            <span class="info-label">5.</span>
            <span class="info-value">
              Make a wish as you look at the full moon. Who knows? It might just
              come true.
            </span>
          </div>
        </div>
      </section>

      <!-- 最后的庆祝 -->
      <section class="section">
        <h2 class="section-title">One Last Celebration</h2>
        <p class="section-text">
          The Yuanxiao Festival is sometimes called the "little New Year's Eve"
          because it's the last big celebration before the holiday season truly
          ends. After this night, the decorations come down, the special foods
          are finished, and daily life returns to normal.
        </p>
        <p class="section-text">
          But what a beautiful way to say goodbye to the holidays—with sweetness
          on your tongue, light in your eyes, and family by your side under the
          first full moon of the new year.
        </p>
        <p class="section-text">
          So if someone wishes you a happy Yuanxiao Festival, you now know what
          they mean: may your year be round and whole, may your life be sweet,
          and may you always find your way home by the light of the lanterns.
        </p>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox>
      "In the glow of lanterns and the sweetness of yuanxiao, we find the
      perfect conclusion to the New Year celebration—where romance, reunion, and
      hope merge under the first full moon of spring."
    </QuoteBox>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content", // 使用 content 布局
  title: "Yuanxiao Festival - Chinese Culture Explorer",
  description:
    "Discover the Yuanxiao Festival, China's sweet lantern celebration marking the end of Chinese New Year.",
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
  border-bottom: 3px solid rgba(212, 175, 55, 0.1);
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
  background-color: rgba(212, 175, 55, 0.1);
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
  border-bottom: 2px solid rgba(212, 175, 55, 0.3);
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

/* 对比表格 */
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.comparison-table th {
  background-color: #f9f5eb;
  font-weight: 600;
  color: #2c3e50;
}

.comparison-table tr:last-child td {
  border-bottom: none;
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

  .comparison-table {
    font-size: 0.9rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 0.8rem 0.5rem;
  }
}
</style>
