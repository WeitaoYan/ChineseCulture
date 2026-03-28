<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Longtaitou Festival</h1>
      <p class="page-subtitle">
        Dragon Raises Head - The Awakening of Spring
      </p>
      <PageMeta>
        <MetaItem>🐉 Dragon's Awakening</MetaItem>
        <MetaItem>📅 2nd Day of 2nd Lunar Month</MetaItem>
        <MetaItem>✂️ Traditional Haircuts</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <div class="featured-image">
      <img
        src="/assets/images/longtaitou.png"
        alt="Traditional Longtaitou Festival dragon decorations and spring celebrations"
        loading="lazy"
      />
    </div>

    <FestivalDates
      festival-name="Longtaitou Festival"
      :lunar-month="2"
      :lunar-day="2"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          In the rhythm of the Chinese calendar, there's a special day in early spring when farmers look to the sky, families visit barbers, and everyone eats foods renamed in honor of a mythical beast. This is <strong>Longtaitou</strong> (龙抬头), the <strong>"Dragon Raises Head" Festival</strong>.
        </p>
        <p class="section-text">
          Falling on the <strong>second day of the second lunar month</strong>, this festival marks an important moment: the awakening of the dragon from his winter sleep, the arrival of spring rains, and the real beginning of the farming year.
        </p>
      </section>

      <!-- 时间介绍 -->
      <section class="section">
        <h2 class="section-title">When Is It?</h2>
        <p class="section-text">
          Longtaitou always falls on <strong>Lunar February 2</strong>. In 2025, that translates to <strong>March 1, 2025</strong> on the Western calendar.
        </p>
      </section>

      <!-- 龙的文化意义 -->
      <section class="section">
        <h2 class="section-title">The Dragon's Role in Chinese Culture</h2>
        <p class="section-text">
          To understand this festival, you first need to understand what the dragon means in China.
        </p>
        <p class="section-text">
          Unlike the fire-breathing, treasure-hoarding dragons of Western tales, the Chinese dragon (<strong>long</strong>, 龙) is a <strong>benevolent and powerful creature</strong>. He rules over the skies and waters, controlling rain, rivers, and seas. For thousands of years in an agricultural society, rain meant life. Crops needed water to grow. So the dragon, as the rain-bringer, was deeply honored.
        </p>
        <FeatureGrid>
          <FeatureItem title="The Dragon's Awakening" theme="blue">
            <p>
              According to traditional belief, the dragon sleeps through the cold winter at the bottom of the sea. But on the second day of the second lunar month, he <strong>raises his head</strong>, awakens, and ascends to the sky. With his rise come the spring rains that will nourish the year's harvest.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 天文联系 -->
      <section class="section">
        <h2 class="section-title">A Farmer's Calendar in the Sky</h2>
        <p class="section-text">
          Longtaitou is also connected to the stars. Ancient Chinese astronomers divided the sky into sections, and one of the most important was the <strong>Azure Dragon of the East</strong>, a constellation made of seven stars.
        </p>
        <p class="section-text">
          In winter, this "celestial dragon" sits low on the horizon, hidden from view. But as spring approaches, its "head" star begins to rise just after sunset. To the ancient eye, it looked exactly like a dragon lifting its head from the depths. The festival marks this astronomical event and ties it to the seasonal change on earth.
        </p>
      </section>

      <!-- 传统习俗 -->
      <section class="section">
        <h2 class="section-title">The Traditions: What People Do</h2>
        
        <h3 class="subsection-title">✂️ The Most Popular Tradition: Getting a Haircut</h3>
        <p class="section-text">
          Ask any Chinese person what happens on Longtaitou, and the first answer will almost certainly be: <strong>"Get a haircut!"</strong>
        </p>
        <p class="section-text">
          There's a popular saying: "On Longtaitou, cutting hair brings good luck." But there's also a superstition about what happens if you <strong>don't</strong> wait until this day.
        </p>
        <p class="section-text">
          In some traditions, it's considered unlucky to cut hair during the first month of the lunar year. People believe that getting a haircut in Lunar January could bring bad luck to your uncles! So everyone patiently waits. By the time the second month arrives, hair has grown long and shaggy. The Dragon Raising His Head is the perfect moment for a fresh start.
        </p>
        <FeatureGrid>
          <FeatureItem title="Good Fortune Through Haircuts" theme="blue">
            <ul class="tradition-list">
              <li><strong>Remove bad luck</strong> from the previous year</li>
              <li><strong>Bring good fortune</strong> for the months ahead</li>
              <li><strong>Make you look sharp</strong> for spring!</li>
            </ul>
            <p style="margin-top: 1rem; font-style: italic;">
              Barbershops across China are packed on Longtaitou, with long lines of people waiting for their turn under the scissors.
            </p>
          </FeatureItem>
        </FeatureGrid>

        <h3 class="subsection-title">🥟 Eating "Dragon" Foods</h3>
        <p class="section-text">
          Another charming tradition is renaming everyday foods with "dragon" names. Nothing is actually made from dragons, of course—it's all about giving ordinary dishes a festive, lucky twist.
        </p>

        <div class="table-wrapper">
          <table class="dragon-food-table">
            <thead>
              <tr>
                <th>Regular Name</th>
                <th>"Dragon" Name</th>
                <th>What It Is</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Regular Name">Dumplings</td>
                <td data-label="'Dragon' Name"><strong>Dragon's Ears</strong> (龙耳)</td>
                <td data-label="What It Is">Boiled or steamed dumplings, shaped like little ears</td>
              </tr>
              <tr>
                <td data-label="Regular Name">Spring pancakes</td>
                <td data-label="'Dragon' Name"><strong>Dragon's Scales</strong> (龙鳞)</td>
                <td data-label="What It Is">Thin pancakes, their layered surface resembling scales</td>
              </tr>
              <tr>
                <td data-label="Regular Name">Noodles</td>
                <td data-label="'Dragon' Name"><strong>Dragon's Beard</strong> (龙须)</td>
                <td data-label="What It Is">Long, thin noodles representing the dragon's whiskers</td>
              </tr>
              <tr>
                <td data-label="Regular Name">Fried dough twists</td>
                <td data-label="'Dragon' Name"><strong>Dragon's Bones</strong> (龙骨)</td>
                <td data-label="What It Is">Crispy fried snacks</td>
              </tr>
              <tr>
                <td data-label="Regular Name">Popcorn</td>
                <td data-label="'Dragon' Name"><strong>Exploding Gold</strong> (爆金花)</td>
                <td data-label="What It Is">Legend says popcorn looks like gold bursting forth</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="section-text">
          There's even a folk tale about the popcorn connection. An old story tells of a dragon who was punished and trapped under a mountain. The only way to free him was when <strong>golden flowers bloomed</strong>. People discovered that popping corn looked just like tiny golden flowers—so they popped it, the dragon was freed, and he raised his head to bring rain. Ever since, popping corn on this day has been a tradition in some regions.
        </p>

        <h3 class="subsection-title">🌾 Praying for a Good Harvest</h3>
        <p class="section-text">
          In rural areas, farmers still observe older traditions. They might:
        </p>
        <FeatureGrid>
          <FeatureItem title="Rural Traditions" theme="blue">
            <ul class="tradition-list">
              <li>Walk through their fields with incense</li>
              <li>Offer prayers for timely rain</li>
              <li>Spread ashes from the kitchen stove around their homes to guide the dragon inside</li>
              <li>Beat on drums to "awaken" the dragon</li>
            </ul>
            <p style="margin-top: 1rem;">
              The connection between the dragon and water is so strong that many villages have small temples dedicated to the Dragon King, where people make offerings on this day.
            </p>
          </FeatureItem>
        </FeatureGrid>

        <h3 class="subsection-title">🏠 House Cleaning and Spring Preparations</h3>
        <p class="section-text">
          Longtaitou also marks the transition from winter to spring. People clean their homes thoroughly, open windows to let in fresh air, and begin preparing for the warmer months ahead. It's a practical tradition—after long months sealed against the cold, houses need airing out—but it's also symbolic. Just as the dragon rises, people rise from winter's sluggishness.
        </p>
      </section>

      <!-- 深层意义 -->
      <section class="section">
        <h2 class="section-title">The Festival's Deeper Meaning</h2>
        <p class="section-text">
          Longtaitou is not as widely celebrated in big cities as festivals like Lunar New Year or the Mid-Autumn Festival. You won't see public holidays or massive parades. But it survives because it speaks to something fundamental:
        </p>
        <div class="highlight-box">
          <p class="highlight-text">
            <strong>A connection to nature's cycles.</strong>
          </p>
        </div>
        <p class="section-text">
          In a modern world where we get our food from supermarkets and our water from taps, it's easy to forget that our ancestors watched the sky with desperate hope, praying for rain to save their crops. Longtaitou remembers that time. It honors the moment when winter loosens its grip, when life stirs again in the soil, and when humanity looks up and says, "Thank you for the coming rain."
        </p>
      </section>

      <!-- 体验建议 -->
      <section class="section">
        <h2 class="section-title">For Visitors: How to Observe Longtaitou</h2>
        <p class="section-text">
          If you're in China on this day, here's how to join in:
        </p>
        <div class="info-box">
          <div class="info-row">
            <span class="info-label">1.</span>
            <span class="info-value">
              <strong>Get a haircut.</strong> Visit a local barber and experience the friendly chaos of one of the busiest hair days of the year. Your hair will thank you, and you'll be participating in China's most popular folk tradition.
            </span>
          </div>
          <div class="info-row">
            <span class="info-label">2.</span>
            <span class="info-value">
              <strong>Eat "dragon" food.</strong> Go to a restaurant or street stall and order dumplings (dragon's ears), noodles (dragon's beard), or spring pancakes (dragon's scales). Tell the vendor you know it's Longtaitou—they'll smile.
            </span>
          </div>
          <div class="info-row">
            <span class="info-label">3.</span>
            <span class="info-value">
              <strong>Look for popcorn.</strong> In some places, you might see street vendors popping corn, keeping alive the legend of freeing the dragon with golden flowers.
            </span>
          </div>
          <div class="info-row">
            <span class="info-label">4.</span>
            <span class="info-value">
              <strong>Notice the weather.</strong> If it rains on Longtaitou, people will say it's a good sign—the dragon has brought water for the fields. If it's sunny, that's good too—the dragon is watching over the world. Either way, spring is on its way.
            </span>
          </div>
        </div>
      </section>

      <!-- 总结 -->
      <section class="section">
        <h2 class="section-title">A Quiet Festival with Deep Roots</h2>
        <p class="section-text">
          Longtaitou lacks the fireworks of New Year or the romance of the Lantern Festival. It's quieter, more practical, rooted in the daily concerns of farmers rather than grand mythology. But perhaps that's why it has survived for so long. It marks a real, observable change in the world: the days growing longer, the air softening, the first hints of green appearing on bare branches.
        </p>
        <p class="section-text">
          The dragon raises his head, and spring begins.
        </p>
        <p class="section-text">
          So on the second day of the second month, whether you're in a bustling city or a quiet village, take a moment to look up at the sky. Somewhere up there, an ancient dragon is stirring. And down here, millions of people are eating dumplings, getting fresh haircuts, and welcoming the season of growth.
        </p>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox>
      "The dragon raises his head, and spring begins—a quiet promise kept for thousands of years, connecting sky to earth, myth to reality, and humanity to the eternal rhythm of nature."
    </QuoteBox>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content", // 使用 content 布局
  title: "Longtaitou Festival - Chinese Culture Explorer",
  description:
    "Discover the Longtaitou Festival, when the dragon raises its head to bring spring rains and mark the beginning of the farming year in China.",
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

.subsection-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #a62c21;
  margin: 2rem 0 1rem;
}

.section-text {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.2rem;
  text-align: justify;
}

.tradition-list {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #555;
}

.tradition-list li {
  margin-bottom: 0.8rem;
  line-height: 1.6;
}

/* 高亮框 */
.highlight-box {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(166, 44, 33, 0.1));
  border-left: 4px solid #d4af37;
  padding: 1.5rem 2rem;
  margin: 2rem 0;
  border-radius: 8px 0 0 8px;
}

.highlight-text {
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 0;
  line-height: 1.6;
}

/* 表格样式 */
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.dragon-food-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  min-width: 600px;
}

.dragon-food-table thead {
  background: linear-gradient(135deg, #a62c21, #8b231a);
  color: white;
}

.dragon-food-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 1rem;
}

.dragon-food-table td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  color: #555;
}

.dragon-food-table tbody tr:nth-child(even) {
  background-color: rgba(212, 175, 55, 0.05);
}

.dragon-food-table tbody tr:hover {
  background-color: rgba(166, 44, 33, 0.05);
  transition: background-color 0.3s ease;
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

  .section-title {
    font-size: 1.6rem;
  }

  .subsection-title {
    font-size: 1.3rem;
  }

  .section-text {
    font-size: 1rem;
  }

  .highlight-box {
    padding: 1rem 1.5rem;
  }

  .highlight-text {
    font-size: 1.1rem;
  }

  /* 表格响应式 */
  .dragon-food-table thead {
    display: none;
  }

  .dragon-food-table tr {
    display: block;
    margin-bottom: 1rem;
    border: 2px solid rgba(166, 44, 33, 0.2);
    border-radius: 8px;
    padding: 1rem;
  }

  .dragon-food-table td {
    display: block;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  .dragon-food-table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 45%;
    font-weight: 600;
    color: #a62c21;
  }

  .dragon-food-table td:last-child {
    border-bottom: none;
  }

  /* 响应式设计保持不变 */

  .info-row {
    flex-direction: column;
    gap: 0.5rem;
  }

  .info-value {
    text-align: left;
  }
}
</style>