<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Spring Festival</h1>
      <p class="page-subtitle">Chinese New Year - Family, Food, and Fortune</p>
      <div class="page-meta">
        <span class="meta-item">🏠 Family Reunion Celebration</span>
        <span class="meta-item">💰 Hongbao and Good Fortune</span>
        <span class="meta-item">🎉 Most Important Chinese Holiday</span>
      </div>
    </div>

    <!-- 主图 -->
    <div class="featured-image">
      <img
        src="/assets/images/spring-festival-reunion-dinner.png"
        alt="Family reunion dinner during Chinese New Year with traditional dishes"
      />
    </div>
    <FestivalDates
      festival-name="Spring Festival"
      :lunar-month="1"
      :lunar-day="1"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          Chinese New Year, also known as the Spring Festival, marks the
          beginning of the lunar new year. It is the most important traditional
          holiday in China, celebrated with family reunions, rich cultural
          rituals, and wishes for good fortune. This ancient festival combines
          centuries-old traditions with modern celebrations, creating a unique
          cultural experience that brings together millions of families across
          China and around the world.
        </p>
        <p class="section-text">
          The festival spans 15 days, culminating in the Lantern Festival, and
          is deeply rooted in Chinese mythology and agricultural traditions. It
          represents renewal, hope, and the strengthening of familial and social
          bonds.
        </p>
      </section>

      <!-- 团圆饭介绍 -->
      <section class="section">
        <h2 class="section-title">The Reunion Dinner: Nianye Fan</h2>
        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">Significant Dishes</h3>
            <p class="feature-text">
              The New Year's Eve feast features symbolic foods:
            </p>
            <ul class="ingredient-list">
              <li>
                <strong>Fish (鱼):</strong> Symbolizes surplus and abundance
                ("年年有余")
              </li>
              <li>
                <strong>Dumplings (饺子):</strong> Resemble ancient gold ingots,
                symbolizing wealth
              </li>
              <li>
                <strong>Niangao (年糕):</strong> Sticky rice cake meaning
                "rising fortune" each year
              </li>
              <li>
                <strong>Tangyuan (汤圆):</strong> Sweet glutinous rice balls
                symbolizing family togetherness
              </li>
            </ul>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Cultural Meaning</h3>
            <p class="feature-text">
              The reunion dinner emphasizes unity and hope for prosperity.
              Families gather regardless of distance, making it the most
              important meal of the year. The meal is not just about food but
              about strengthening bonds and expressing gratitude for another
              year together.
            </p>
          </div>
        </div>
      </section>

      <!-- 红色元素 -->
      <section class="section">
        <h2 class="section-title">Red Everything!</h2>
        <p class="section-text">
          Red is the festival's dominant color, representing happiness,
          prosperity, and protection against evil. This vibrant hue permeates
          every aspect of the celebration.
        </p>
        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">Decorations</h3>
            <p class="feature-text">
              Families hang red lanterns, paste red couplets (春联) with poetic
              blessings on doorways, and display red paper cuttings with
              auspicious characters.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Hongbao</h3>
            <p class="feature-text">
              Red envelopes containing money are given to children and unmarried
              adults as symbols of good luck and wishes for prosperity in the
              new year.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Clothing</h3>
            <p class="feature-text">
              Many wear new red clothes during the festival to ensure good
              fortune and ward off evil spirits.
            </p>
          </div>
        </div>
      </section>

      <!-- 烟花爆竹 -->
      <section class="section">
        <h2 class="section-title">Fireworks and Firecrackers</h2>
        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">Tradition</h3>
            <p class="feature-text">
              At midnight and throughout the festival, fireworks and
              firecrackers light up the sky. The loud noises are believed to
              scare away bad spirits and evil forces.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Modern Celebrations</h3>
            <p class="feature-text">
              While traditional firecrackers are still popular, many cities have
              restrictions due to safety concerns, leading to organized
              fireworks displays instead.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Symbolism</h3>
            <p class="feature-text">
              The bright lights and loud sounds symbolize the triumph of good
              over evil and welcome prosperity for the coming year.
            </p>
          </div>
        </div>
      </section>

      <!-- 打扫与禁忌 -->
      <section class="section">
        <h2 class="section-title">House Cleaning and Taboos</h2>
        <p class="section-text">
          Before the new year, families thoroughly clean their homes to sweep
          away bad luck and prepare for good fortune. However, during the
          festival itself, cleaning becomes taboo.
        </p>
        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">Pre-Festival Cleaning</h3>
            <p class="feature-text">
              Complete house cleaning before New Year's Day to remove any traces
              of bad luck from the previous year.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Festival Restrictions</h3>
            <p class="feature-text">
              Avoid sweeping or taking out garbage during the festival, as it
              might "sweep away" good fortune. Breaking objects is also
              considered unlucky.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Other Taboos</h3>
            <p class="feature-text">
              Other common taboos include avoiding words with negative meanings,
              lending money, and arguing.
            </p>
          </div>
        </div>
      </section>

      <!-- 舞龙舞狮 -->
      <section class="section">
        <h2 class="section-title">Lion and Dragon Dances</h2>
        <p class="section-text">
          Vibrant lion and dragon dances are performed in streets and public
          squares during the Spring Festival. These dynamic performances are
          central to the celebration and carry deep cultural significance.
        </p>
        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">Performance</h3>
            <p class="feature-text">
              Performers manipulate large puppets of lions and dragons in
              coordinated movements, accompanied by drums and cymbals.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Symbolism</h3>
            <p class="feature-text">
              The dances are thought to bring prosperity, good luck, and drive
              away negative energy. They also symbolize power, wisdom, and
              dignity.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Community</h3>
            <p class="feature-text">
              These performances often involve entire communities and provide
              entertainment while reinforcing cultural identity.
            </p>
          </div>
        </div>
      </section>

      <!-- 拜访亲友 -->
      <section class="section">
        <h2 class="section-title">Visiting Family and Friends</h2>
        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">Schedule</h3>
            <p class="feature-text">
              The first days of the new year are for visiting loved ones. The
              first day is usually reserved for immediate family, while
              subsequent days are for extended family and friends.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Greetings</h3>
            <p class="feature-text">
              People exchange traditional greetings like "Xinnian Kuai Le"
              (新年快乐 - Happy New Year) and "Gong Xi Fa Cai" (恭喜发财 -
              Wishing you prosperity).
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Hospitality</h3>
            <p class="feature-text">
              Hosts prepare special treats and gifts for visitors, emphasizing
              the importance of hospitality and maintaining relationships.
            </p>
          </div>
        </div>
      </section>

      <!-- 元宵节 -->
      <section class="section">
        <h2 class="section-title">The Lantern Festival: End of Celebrations</h2>
        <p class="section-text">
          The celebrations conclude on the 15th day with the Lantern Festival,
          marking the official end of the Spring Festival period. This event
          combines beauty, culture, and tradition.
        </p>
        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">Lantern Displays</h3>
            <p class="feature-text">
              People light and display colorful lanterns of various shapes and
              sizes in parks and public spaces.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Riddle Solving</h3>
            <p class="feature-text">
              Traditional riddles are written on lanterns for people to solve,
              combining entertainment with intellectual challenge.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Yuanxiao</h3>
            <p class="feature-text">
              Sweet glutinous rice balls (元宵) are eaten, symbolizing family
              togetherness and completeness.
            </p>
          </div>
        </div>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">
          Why It Matters: The Heart of Spring Festival
        </h2>
        <p class="section-text">
          Beyond the festivities, Spring Festival is a time to honor ancestors,
          strengthen family bonds, and embrace new beginnings. Each custom, from
          the food to the decorations, carries deep meaning— rooted in history,
          folklore, and shared hope for a brighter year.
        </p>
        <ul class="modern-practices">
          <li>
            Modern celebrations blend ancient traditions with contemporary
            practices
          </li>
          <li>Technology allows separated families to celebrate virtually</li>
          <li>Global celebrations spread Chinese culture worldwide</li>
          <li>
            The festival serves as a bridge between past and future generations
          </li>
        </ul>
        <p class="section-text">
          Whether you're joining a celebration abroad or visiting China during
          this time, experiencing Spring Festival offers a beautiful glimpse
          into Chinese culture's heart and soul. It reminds us of the universal
          values of family, hope, and renewal.
        </p>
      </section>

      <!-- 体验建议 -->
      <section class="section">
        <h2 class="section-title">Experience Spring Festival Yourself</h2>
        <div class="info-box">
          <div class="info-row">
            <span class="info-label">1.</span>
            <span class="info-value"
              >Join a local Chinese community celebration or visit during the
              holiday season</span
            >
          </div>
          <div class="info-row">
            <span class="info-label">2.</span>
            <span class="info-value"
              >Try preparing traditional foods like dumplings or niangao</span
            >
          </div>
          <div class="info-row">
            <span class="info-label">3.</span>
            <span class="info-value"
              >Learn and practice traditional greetings and customs</span
            >
          </div>
          <div class="info-row">
            <span class="info-label">4.</span>
            <span class="info-value"
              >Attend a lion dance performance or lantern festival in your
              area</span
            >
          </div>
        </div>
      </section>
    </div>

    <!-- 引用 -->
    <div class="quote-box">
      <blockquote class="quote">
        "In the Spring Festival, we find the essence of Chinese culture—family
        unity, ancestral respect, hope for prosperity, and the eternal cycle of
        renewal that connects past, present, and future."
      </blockquote>
      <p class="quote-author">— Chinese Cultural Heritage</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content", // 使用 content 布局
  title: "Spring Festival - Chinese Culture Explorer",
  description:
    "Discover the Spring Festival, China's most important celebration of family, tradition, and renewal.",
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
  color: #d4af37;
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

/* 特色网格 */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature-item {
  background-color: rgba(212, 175, 55, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #d4af37;
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
  min-width: 2rem;
}

.info-value {
  color: #666;
  font-size: 1rem;
  text-align: left;
  flex: 1;
}

/* 引用框 */
.quote-box {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1),
    rgba(166, 44, 33, 0.1)
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
  color: #d4af37;
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
