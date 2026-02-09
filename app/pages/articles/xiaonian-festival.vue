<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Xiaonian Festival</h1>
      <p class="page-subtitle">
        Little New Year - The Warm-Up to Spring Festival
      </p>
      <div class="page-meta">
        <span class="meta-item">🔥 Kitchen God's Departure</span>
        <span class="meta-item">📅 23rd/24th Day of 12th Lunar Month</span>
        <span class="meta-item">🧹 The Great Annual Cleaning</span>
      </div>
    </div>

    <!-- 主图 -->
    <div class="featured-image">
      <img
        src="/assets/images/xiaonian.png"
        alt="Traditional Xiaonian decorations and offerings for Kitchen God"
      />
    </div>
    <FestivalDates
      festival-name="Xiaonian Festival"
      :lunar-month="12"
      :lunar-day="23"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          Think of the most festive time of year in your culture—the week when
          preparations kick into high gear, the air buzzes with excitement, and
          homes fill with specific, beloved smells. In China, that warm-up act
          is called <strong>Xiaonian</strong>, literally
          <strong>"Little New Year."</strong>
        </p>
        <p class="section-text">
          Celebrated about a week before the Lunar New Year (Spring Festival),
          Xiaonian isn't the main event, but it's the heartfelt, family-centered
          <strong>prologue</strong>. It's the day when families officially
          switch into "New Year mode," performing ancient rituals to send off a
          special kitchen god and clean away the old to welcome good fortune.
        </p>
      </section>

      <!-- 时间介绍 -->
      <section class="section">
        <h2 class="section-title">When is Xiaonian?</h2>
        <p class="section-text">
          There's a charming regional difference here! Traditionally, Xiaonian
          falls on the
          <strong>23rd or 24th day of the last lunar month</strong>.
        </p>
        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">Northern China</h3>
            <p class="feature-text">
              Typically celebrates on <strong>Lunar December 23</strong>, which
              in 2025 translates to <strong>January 21, 2025</strong>.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Southern China</h3>
            <p class="feature-text">
              Often observes it on <strong>Lunar December 24</strong>, which in
              2025 translates to <strong>January 22, 2025</strong>.
            </p>
          </div>
        </div>
      </section>

      <!-- 灶王爷介绍 -->
      <section class="section">
        <h2 class="section-title">The Star of the Day: The Kitchen God</h2>
        <p class="section-text">
          The most unique tradition of Xiaonian revolves around a beloved
          domestic deity: <strong>Zao Shen, the Kitchen God</strong>. Picture a
          friendly, grandfatherly figure who lives by your stove, quietly
          observing the family's harmony and conduct throughout the year.
        </p>
        <p class="section-text">
          On Xiaonian, his annual duty is to
          <strong>ascend to the Jade Emperor in heaven</strong> to deliver a
          report on the household. Naturally, families want to ensure he says
          only good things!
        </p>

        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">The Send-Off Ceremony</h3>
            <ol class="ceremony-steps">
              <li>
                <strong>The Offering</strong>: Families place sweet foods—like
                sticky <strong>mallet candy</strong>, sweet rice cakes, or
                fruits—as an offering before his paper image or shrine near the
                kitchen.
              </li>
              <li>
                <strong>The Sweet Purpose</strong>: The idea is to "<strong
                  >sweeten his mouth</strong
                >" (make his words sweet) or even stick his jaws together so he
                can only mumble positive things!
              </li>
              <li>
                <strong>The Send-Off</strong>: After prayers for a good report,
                his paper image is gently burned, symbolizing his journey to
                heaven via the smoke. A new image will be pasted up on Lunar New
                Year's Eve, welcoming him back.
              </li>
            </ol>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Cultural Significance</h3>
            <p class="feature-text">
              This ritual represents the intimate relationship between the
              divine and daily life in Chinese culture. The Kitchen God is seen
              as a guardian of the home, watching over the family's well-being
              and behavior.
            </p>
          </div>
        </div>
      </section>

      <!-- 大扫除 -->
      <section class="section">
        <h2 class="section-title">The Great Annual Cleaning</h2>
        <p class="section-text">
          If sending off the Kitchen God is a spiritual cleanse, then the other
          major Xiaonian activity is a physical one:
          <strong>the "Dusting" (大扫除)</strong>.
        </p>
        <p class="section-text">
          This isn't just any cleaning. It's a thorough, top-to-bottom scrub of
          the entire house, from washing windows to sweeping corners. The
          Chinese word for "dust" (<strong>尘</strong>) sounds like the word for
          "old," so sweeping away dust is symbolic of
          <strong>sweeping away any bad luck or lingering negativity</strong>
          from the past year. This creates a clean, fresh, and receptive space
          for the incoming luck and prosperity of the New Year.
        </p>
        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">Symbolic Meaning</h3>
            <p class="feature-text">
              Removing all traces of the old year to make way for new
              opportunities and good fortune.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Family Activity</h3>
            <p class="feature-text">
              Usually involves the entire family working together to prepare
              their home for the Spring Festival.
            </p>
          </div>
        </div>
      </section>

      <!-- 小年美食 -->
      <section class="section">
        <h2 class="section-title">A Taste of Xiaonian</h2>
        <p class="section-text">
          Food, as always in Chinese festivals, plays a starring role:
        </p>
        <div class="feature-grid">
          <div class="feature-item">
            <h3 class="feature-title">Mallet Candy / Guandong Candy (糖瓜)</h3>
            <p class="feature-text">
              The most iconic treat. This hard, sticky malt candy is chewy and
              incredibly sweet, directly linked to the Kitchen God ritual.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Rice Cakes (年糕)</h3>
            <p class="feature-text">
              Eaten for good luck, as their name sounds like "year high,"
              symbolizing rising prosperity and growth in the coming year.
            </p>
          </div>
          <div class="feature-item">
            <h3 class="feature-title">Dumplings (饺子)</h3>
            <p class="feature-text">
              In the north, families often make dumplings on Xiaonian, a preview
              of the grand feast to come.
            </p>
          </div>
        </div>
      </section>

      <!-- 精神内涵 -->
      <section class="section">
        <h2 class="section-title">The True Spirit: Family and Transition</h2>
        <p class="section-text">
          Beyond the rituals, Xiaonian's essence is about
          <strong>transition and togetherness</strong>. It marks the moment when
          distant family members begin their journeys home, when work winds
          down, and focus shifts entirely to family and celebration. It's the
          emotional starting line for the world's largest annual human migration
          and the most important family reunion of the year.
        </p>
        <p class="section-text">
          <strong>For a visitor to China during this time,</strong> witnessing
          Xiaonian means catching a glimpse of the authentic, heartfelt
          preparations behind the dazzling public celebrations. You might hear
          the sweeping of brooms, smell the unique sweetness of malt candy in
          the air, and feel the palpable, growing anticipation for the reunion
          to come.
        </p>
        <p class="section-text">
          So, while the Lunar New Year's Eve dinner is the grand finale,
          remember that the warmth and goodwill start building a week earlier,
          with a little sweetness for a kitchen god and a very clean house.
        </p>
      </section>

      <!-- 体验建议 -->
      <section class="section">
        <h2 class="section-title">Experience Xiaonian Yourself</h2>
        <div class="info-box">
          <div class="info-row">
            <span class="info-label">1.</span>
            <span class="info-value"
              >Try making sugar melon (糖瓜) at home to understand its
              significance in the Kitchen God ritual</span
            >
          </div>
          <div class="info-row">
            <span class="info-label">2.</span>
            <span class="info-value"
              >Join a family's annual cleaning ritual to witness this important
              preparation for Spring Festival</span
            >
          </div>
          <div class="info-row">
            <span class="info-label">3.</span>
            <span class="info-value"
              >Visit a local market during Xiaonian to see traditional foods and
              decorations being prepared</span
            >
          </div>
          <div class="info-row">
            <span class="info-label">4.</span>
            <span class="info-value"
              >Learn about regional differences in how Xiaonian is celebrated
              across northern and southern China</span
            >
          </div>
        </div>
      </section>
    </div>

    <!-- 引用 -->
    <div class="quote-box">
      <blockquote class="quote">
        "In Xiaonian, we find the bridge between the ordinary and the
        extraordinary—a moment when daily routines become sacred preparations
        for renewal, family, and hope."
      </blockquote>
      <p class="quote-author">— Chinese Cultural Heritage</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content", // 使用 content 布局
  title: "Xiaonian Festival - Chinese Culture Explorer",
  description:
    "Discover the Xiaonian Festival, the 'Little New Year' that marks the beginning of Spring Festival preparations in China.",
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

.ceremony-steps {
  list-style-type: decimal;
  margin-left: 1.5rem;
  color: #555;
}

.ceremony-steps li {
  margin-bottom: 1rem;
  line-height: 1.6;
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

  .ceremony-steps {
    margin-left: 1rem;
  }
}
</style>
