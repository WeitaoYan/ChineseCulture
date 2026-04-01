<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Chinese Zodiac</h1>
      <p class="page-subtitle">Sheng Xiao - The Twelve Animal Signs</p>
      <PageMeta>
        <MetaItem>🐀 Rat</MetaItem>
        <MetaItem>🐂 Ox</MetaItem>
        <MetaItem>🐅 Tiger</MetaItem>
        <MetaItem>🐇 Rabbit</MetaItem>
        <MetaItem>🐉 Dragon</MetaItem>
        <MetaItem>🐍 Snake</MetaItem>
        <MetaItem>🐴 Horse</MetaItem>
        <MetaItem>🐏 Goat</MetaItem>
        <MetaItem>🐒 Monkey</MetaItem>
        <MetaItem>🐔 Rooster</MetaItem>
        <MetaItem>🐕 Dog</MetaItem>
        <MetaItem>🐖 Pig</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/chinese-zodiac.png"
      altText="Chinese Zodiac - Sheng Xiao"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          The Chinese Zodiac, known as Sheng Xiao (生肖), is a repeating 12-year
          cycle where each year is represented by an animal and its reputed
          attributes. This ancient system has been used in China for over 2,000
          years and plays a significant role in Chinese culture, affecting
          everything from personality traits to marriage compatibility.
        </p>
        <p class="section-text">
          Unlike Western astrology based on months, the Chinese Zodiac is based
          on the lunar year, with each animal sign lasting approximately one
          year. The cycle begins with the Rat and ends with the Pig, creating a
          rich tapestry of symbolism and cultural meaning that continues to
          influence modern Chinese society.
        </p>
      </section>

      <!-- 十二生肖介绍 -->
      <section class="section">
        <h2 class="section-title">The Twelve Animals</h2>
        <FeatureGrid>
          <FeatureItem title="Rat (鼠)" theme="gray">
            <p>Clever, adaptable, and resourceful.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2020, 2032</li>
              <li><strong>Traits:</strong> Intelligent, quick-witted</li>
              <li><strong>Lucky Numbers:</strong> 2, 3</li>
              <li><strong>Compatible:</strong> Ox, Dragon</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Ox (牛)" theme="blue">
            <p>Diligent, reliable, and determined.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2021, 2033</li>
              <li><strong>Traits:</strong> Hardworking, patient</li>
              <li><strong>Lucky Numbers:</strong> 1, 4</li>
              <li><strong>Compatible:</strong> Rat, Snake, Rooster</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Tiger (虎)" theme="red">
            <p>Brave, competitive, and confident.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2022, 2034</li>
              <li><strong>Traits:</strong> Courageous, authoritative</li>
              <li><strong>Lucky Numbers:</strong> 1, 3, 4</li>
              <li><strong>Compatible:</strong> Horse, Dog</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Rabbit (兔)" theme="green">
            <p>Gentle, quiet, and elegant.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2023, 2035</li>
              <li><strong>Traits:</strong> Kind, responsible</li>
              <li><strong>Lucky Numbers:</strong> 3, 4, 6</li>
              <li><strong>Compatible:</strong> Goat, Monkey, Dog</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Dragon (龙)" theme="gold">
            <p>Confident, intelligent, and enthusiastic.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2024, 2036</li>
              <li><strong>Traits:</strong> Ambitious, charismatic</li>
              <li><strong>Lucky Numbers:</strong> 1, 6, 7</li>
              <li><strong>Compatible:</strong> Rat, Monkey, Rooster</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Snake (蛇)" theme="gray">
            <p>Enigmatic, intelligent, and wise.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2025, 2037</li>
              <li><strong>Traits:</strong> Analytical, organized</li>
              <li><strong>Lucky Numbers:</strong> 2, 8, 9</li>
              <li><strong>Compatible:</strong> Ox, Rooster</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Horse (马)" theme="yellow">
            <p>Energetic, active, and animated.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2026, 2038</li>
              <li><strong>Traits:</strong> Cheerful, popular</li>
              <li><strong>Lucky Numbers:</strong> 2, 3, 7</li>
              <li><strong>Compatible:</strong> Tiger, Goat</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Goat (羊)" theme="yellow">
            <p>Calm, gentle, and sympathetic.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2027, 2039</li>
              <li><strong>Traits:</strong> Creative, empathetic</li>
              <li><strong>Lucky Numbers:</strong> 2, 7</li>
              <li><strong>Compatible:</strong> Rabbit, Horse, Pig</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Monkey (猴)" theme="blue">
            <p>Sharp, smart, and curiosity.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2028, 2040</li>
              <li><strong>Traits:</strong> Witty, versatile</li>
              <li><strong>Lucky Numbers:</strong> 4, 9</li>
              <li><strong>Compatible:</strong> Rat, Dragon</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Rooster (鸡)" theme="gray">
            <p>Observant, hardworking, and courageous.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2029, 2041</li>
              <li><strong>Traits:</strong> Confident, honest</li>
              <li><strong>Lucky Numbers:</strong> 5, 7, 8</li>
              <li><strong>Compatible:</strong> Ox, Snake</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Dog (狗)" theme="blue">
            <p>Loyal, prudent, and honest.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2030, 2042</li>
              <li><strong>Traits:</strong> Responsible, sincere</li>
              <li><strong>Lucky Numbers:</strong> 3, 4, 9</li>
              <li><strong>Compatible:</strong> Rabbit, Horse</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Pig (猪)" theme="green">
            <p>Compassionate, generous, and diligent.</p>
            <ul class="element-list">
              <li><strong>Years:</strong> 2031, 2043</li>
              <li><strong>Traits:</strong> Optimistic, loyal</li>
              <li><strong>Lucky Numbers:</strong> 2, 5, 8</li>
              <li><strong>Compatible:</strong> Tiger, Rabbit, Goat</li>
            </ul>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 传说故事 -->
      <section class="section">
        <h2 class="section-title">The Legend of the Great Race</h2>
        <p class="section-text">
          According to Chinese legend, the Jade Emperor organized a great race
          to determine the order of the zodiac animals. The story tells how
          twelve animals competed to cross a river and reach the Emperor's
          palace.
        </p>

        <div class="legend-story">
          <h3 class="story-title">The Great Race Story</h3>
          <p class="story-intro">
            Long ago, the Jade Emperor decided that there should be a way to
            measure time. He told the animals that there would be a swimming
            race across a fast-flowing river. The first twelve animals to reach
            the other side would have a year named after them.
          </p>

          <div class="story-section">
            <h4 class="story-section-title">The Race Begins</h4>
            <p class="story-text">
              On the day of the race, all the animals gathered at the riverbank.
              The Ox was the strongest swimmer, but not very bright. The Rat,
              being clever, asked the Ox if he could ride on his back across the
              river. The kind-hearted Ox agreed.
            </p>
            <p class="story-text">
              The Cat and the Rat had been best friends, but the Rat decided to
              trick the Cat. The night before the race, the Rat told the Cat
              that the race would be the day after tomorrow. The Cat overslept
              and missed the race—which is why cats have chased rats ever since.
            </p>
          </div>

          <div class="story-section">
            <h4 class="story-section-title">Crossing the River</h4>
            <p class="story-text">
              As the race began, the Ox carried the Rat on his back. They were
              making good progress, with the Ox swimming steadily through the
              current. Behind them, the Tiger was struggling against the strong
              water, being the third to reach the other side.
            </p>
            <p class="story-text">
              The Rabbit tried to hop across on stones and logs but nearly
              drowned. Fortunately, a floating log came by and carried the
              Rabbit to safety, making it the fourth animal to finish.
            </p>
            <p class="story-text">
              The mighty Dragon flew above the water, but it stopped to help a
              village suffering from drought by bringing rain. Then it saw the
              Rabbit clinging to a log and blew it toward the shore. Because of
              these good deeds, the Dragon arrived fifth.
            </p>
          </div>

          <div class="story-section">
            <h4 class="story-section-title">The Surprise Finish</h4>
            <p class="story-text">
              The Horse was galloping toward the finish line, thinking it would
              arrive sixth. But the Snake had been hiding in the Horse's hoof
              and slithered out just as they reached the bank, surprising the
              Horse and taking sixth place. The Horse settled for seventh.
            </p>
            <p class="story-text">
              The Goat, Monkey, and Rooster worked together, building a raft to
              cross the river. When they reached the shore, they were so happy
              to have worked as a team that they all stepped onto the bank at
              the same time. The Emperor was impressed by their teamwork and
              gave them all eighth place.
            </p>
          </div>

          <div class="story-section">
            <h4 class="story-section-title">The Final Animals</h4>
            <p class="story-text">
              The Dog was an excellent swimmer but got distracted playing in the
              water along the way. It finally arrived eleventh. The Pig, which
              had been eating and napping along the riverbank, arrived last but
              was proud to have finished.
            </p>
            <p class="story-text">
              And so the twelve animals earned their places in the Chinese
              Zodiac, each representing different personality traits and
              characteristics that influence people born in their year.
            </p>
          </div>
        </div>

        <div class="legend-section">
          <h3 class="legend-subtitle">How Each Animal Earned Its Place</h3>
          <ul class="legend-list">
            <li>
              <strong>Rat (1st):</strong> Rode on the Ox's back and jumped ahead
              at the last moment
            </li>
            <li>
              <strong>Ox (2nd):</strong> Steady and hardworking, carried the Rat
              across the river
            </li>
            <li>
              <strong>Tiger (3rd):</strong> Powerful swimmer who struggled
              against the strong current
            </li>
            <li>
              <strong>Rabbit (4th):</strong> Hopped across stones and logs,
              nearly drowned but was saved by a floating log
            </li>
            <li>
              <strong>Dragon (5th):</strong> Flew above but paused to help a
              village and the Rabbit, demonstrating kindness
            </li>
            <li>
              <strong>Snake (6th):</strong> Hidden in the Horse's hoof,
              surprising everyone at the finish line
            </li>
            <li>
              <strong>Horse (7th):</strong> Fast and strong, almost won sixth
              place before the Snake appeared
            </li>
            <li>
              <strong>Goat, Monkey, Rooster (8th):</strong> Worked together on a
              raft, sharing the eighth place for their teamwork
            </li>
            <li>
              <strong>Monkey (8th):</strong> Helped build the raft with Goat and
              Rooster
            </li>
            <li>
              <strong>Rooster (8th):</strong> Helped build the raft with Goat
              and Monkey
            </li>
            <li>
              <strong>Dog (11th):</strong> Got distracted playing in the water
              but was a strong swimmer
            </li>
            <li>
              <strong>Pig (12th):</strong> Stopped for a nap and food along the
              way, arriving last
            </li>
          </ul>
        </div>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">Cultural Significance</h2>
        <FeatureGrid>
          <FeatureItem title="Personality Traits" theme="green">
            <p>
              Each zodiac animal is believed to influence personality traits,
              strengths, and weaknesses of people born in that year.
            </p>
          </FeatureItem>
          <FeatureItem title="Marriage Compatibility" theme="red">
            <p>
              Traditional Chinese families often consider zodiac compatibility
              when arranging marriages, believing certain pairs are more
              harmonious.
            </p>
          </FeatureItem>
          <FeatureItem title="Career Guidance" theme="blue">
            <p>
              Some people use zodiac signs to make career decisions, believing
              certain animals are better suited for specific professions.
            </p>
          </FeatureItem>
          <FeatureItem title="Fortune Telling" theme="gold">
            <p>
              During Chinese New Year, zodiac predictions for the coming year
              are popular in newspapers, magazines, and fortune-telling.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 本命年 -->
      <section class="section">
        <h2 class="section-title">Ben Ming Nian - Your Zodiac Year</h2>
        <p class="section-text">
          Ben Ming Nian (本命年) refers to the year of your birth animal, which
          occurs every 12 years. Traditionally, it's considered a challenging
          year that requires special precautions.
        </p>
        <FeatureGrid>
          <FeatureItem title="Wearing Red" theme="red">
            <p>
              People wear red underwear, socks, or accessories to ward off bad
              luck and protect themselves during their zodiac year.
            </p>
          </FeatureItem>
          <FeatureItem title="Wearing Jade" theme="green">
            <p>
              Jade jewelry is believed to bring protection and good fortune
              during one's zodiac year.
            </p>
          </FeatureItem>
          <FeatureItem title="Temple Visits" theme="gold">
            <p>
              Visiting temples and making offerings to deities is a common
              practice to seek blessings and protection.
            </p>
          </FeatureItem>
          <FeatureItem title="Caution & Humility" theme="blue">
            <p>
              People are advised to be extra careful, avoid risky decisions, and
              remain humble during their zodiac year.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 全球影响 -->
      <section class="section">
        <h2 class="section-title">Global Influence</h2>
        <p class="section-text">
          The Chinese Zodiac has spread beyond China's borders, influencing
          cultures across Asia and gaining popularity worldwide. Many Asian
          countries, including Japan, Korea, Vietnam, and Thailand, have their
          own versions of the zodiac system with slight variations.
        </p>
        <p class="section-text">
          In Western countries, the Chinese Zodiac has become a popular topic
          during Lunar New Year celebrations, with newspapers and magazines
          publishing zodiac horoscopes and predictions. The universal appeal of
          animal symbolism and personality archetypes has made the Chinese
          Zodiac a fascinating cultural bridge between East and West.
        </p>
      </section>

      <!-- 现代应用 -->
      <section class="section">
        <h2 class="section-title">Modern Applications</h2>
        <ul class="modern-practices">
          <li>
            <strong>Festive Celebrations:</strong> Each Lunar New Year is
            decorated with images and symbols of the corresponding zodiac animal
          </li>
          <li>
            <strong>Marketing & Design:</strong> Businesses use zodiac themes in
            advertising, product packaging, and seasonal campaigns
          </li>
          <li>
            <strong>Art & Literature:</strong> The zodiac animals inspire
            countless works of art, literature, and popular culture
          </li>
          <li>
            <strong>Social Connection:</strong> Knowing someone's zodiac sign is
            a common icebreaker and conversation starter in Chinese culture
          </li>
        </ul>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">Why It Matters</h2>
        <p class="section-text">
          The Chinese Zodiac represents more than just a fortune-telling
          system—it embodies Chinese cultural values of harmony, balance, and
          the cyclical nature of time. This ancient tradition connects modern
          Chinese people to their heritage and provides a framework for
          understanding personality, relationships, and life events.
        </p>
        <p class="section-text">
          Whether you're born in the Year of the Dragon or the Year of the
          Rabbit, the zodiac offers a unique perspective on identity and
          destiny, reminding us that we are all part of a larger cosmic cycle
          that has guided Chinese civilization for thousands of years.
        </p>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox>
      "The Chinese Zodiac is not just about predicting the future—it's about
      understanding ourselves, our relationships, and our place in the ancient
      wisdom of the East."
    </QuoteBox>
  </div>
</template>

<script setup>
// Nuxt 3 会自动导入 components 目录下的组件
definePageMeta({
  layout: "content",
  title: "Chinese Zodiac (Sheng Xiao) - Chinese Culture Explorer",
  description:
    "Discover the Chinese Zodiac, a 12-year cycle of animal signs that influence personality, relationships, and cultural traditions in Chinese culture.",
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

.legend-story {
  background: linear-gradient(
    135deg,
    rgba(166, 44, 33, 0.08) 0%,
    rgba(166, 44, 33, 0.02) 100%
  );
  border-radius: 12px;
  padding: 2.5rem;
  margin: 1.5rem 0;
  border-left: 4px solid #a62c21;
}

.story-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #a62c21;
  margin-bottom: 1.5rem;
  text-align: center;
}

.story-intro {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
  text-align: center;
}

.story-section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed rgba(166, 44, 33, 0.2);
}

.story-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.story-section-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.story-section-title::before {
  content: "📖";
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.story-text {
  font-size: 1.05rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 1rem;
  text-align: justify;
}

.legend-section {
  background-color: rgba(166, 44, 33, 0.05);
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
}

.legend-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.legend-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.legend-list li {
  padding: 0.8rem 0;
  color: #555;
  font-size: 1.05rem;
  line-height: 1.6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.legend-list li:last-child {
  border-bottom: none;
}

.legend-list strong {
  color: #a62c21;
  font-weight: 600;
}

.modern-practices {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #555;
}

.modern-practices li {
  margin-bottom: 0.8rem;
  font-size: 1.05rem;
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

  .legend-section {
    padding: 1.5rem;
  }

  .legend-subtitle {
    font-size: 1.3rem;
  }

  .legend-list li {
    font-size: 1rem;
  }

  .legend-story {
    padding: 1.5rem;
  }

  .story-title {
    font-size: 1.4rem;
  }

  .story-intro {
    font-size: 1rem;
  }

  .story-section-title {
    font-size: 1.2rem;
  }

  .story-text {
    font-size: 1rem;
  }
}
</style>
