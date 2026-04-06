<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Qixi Festival</h1>
      <p class="page-subtitle">Chinese Valentine's Day - The Night of Stars</p>
      <PageMeta>
        <MetaItem>⭐ Cowherd and Weaver Girl</MetaItem>
        <MetaItem>🌉 Magpie Bridge</MetaItem>
        <MetaItem>💕 Love and Romance</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/qixi.jpg"
      altText="Qixi Festival - lovers under the stars"
    />

    <FestivalDates festivalName="Qixi Festival" :lunarMonth="7" :lunarDay="7" />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Qixi Festival</strong> (七夕节), also known as Chinese
          Valentine's Day, is one of the most romantic festivals in the Chinese
          calendar. Celebrated on the
          <strong>7th day of the 7th lunar month</strong>, it honors the
          legendary love story between Cowboy (the Cowherd) and Weaver Girl (the
          Weaver Maid), who are separated by the Milky Way and allowed to meet
          only once a year on this special night.
        </p>
        <p class="section-text">
          This festival has evolved from an ancient worship of the heavens into
          China's most cherished celebration of love and romance. It's a day
          when young couples express their love, when singles pray for ideal
          partners, and when the magic of the stars brings hope to countless
          hearts.
        </p>
      </section>

      <!-- 传说故事 -->
      <section class="section">
        <h2 class="section-title">The Legend of Cowherd and Weaver Girl</h2>
        <p class="section-text">
          The story of Qixi is one of the most beautiful legends in Chinese
          culture, passed down for over two thousand years.
        </p>
        <FeatureGrid>
          <FeatureItem title="The Origin" theme="red">
            <p>
              Once upon a time, there lived a beautiful fairy named Weaver Girl
              (Zhinü) who was so skilled at weaving that her cloud tapestries
              amazed the gods. She fell in love with a mortal Cowherd (Niulang),
              and they married in secret, living happily together on earth.
            </p>
          </FeatureItem>
          <FeatureItem title="The Separation" theme="red">
            <p>
              When the gods discovered their love, they were furious. Weaver
              Girl was taken back to heaven, and Cowherd was left on earth with
              their two children. But the gods relented partially—allowing them
              to meet once a year, on the 7th day of the 7th lunar month.
            </p>
          </FeatureItem>
          <FeatureItem title="The Milky Way" theme="red">
            <p>
              The Milky Way (Silver River) separates the two lovers in the
              sky—Weaver Girl becomes the star Vega, and Cowherd becomes the
              star Altair. Every year, magpies form a bridge across the heavens
              so they can reunite.
            </p>
          </FeatureItem>
          <FeatureItem title="The Meaning" theme="red">
            <p>
              Their love story symbolizes perseverance and devotion despite
              obstacles. For Chinese people, Qixi represents the hope that true
              love can overcome any distance.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 时间介绍 -->
      <section class="section">
        <h2 class="section-title">When is Qixi?</h2>
        <p class="section-text">
          Qixi falls on the <strong>7th day of the 7th lunar month</strong>,
          typically occurring in August of the Gregorian calendar. This "double
          seven" (七七) is considered especially auspicious.
        </p>
        <FeatureGrid>
          <FeatureItem title='Why "7th, 7th"?' theme="red">
            <p>
              The number seven is considered lucky in Chinese culture, and
              "double seven" is believed to be the most fortune time for love
              and romance.
            </p>
          </FeatureItem>
          <FeatureItem title="Timing" theme="red">
            <p>
              The festival is traditionally celebrated in the evening, when
              couples look up at the stars to witness the reunion of Cowherd and
              Weaver Girl.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 传统习俗 -->
      <section class="section">
        <h2 class="section-title">Traditional Customs</h2>
        <p class="section-text">
          On Qixi, people engage in various romantic customs to celebrate love
          and pray for happiness:
        </p>
        <FeatureGrid>
          <FeatureItem title="Admiring Stars" theme="red">
            <p>
              Couples stay up late to watch the reunion of Cowherd and Weaver
              Girl at the magical moment when the stars align. It's a night of
              romance and wishes.
            </p>
          </FeatureItem>
          <FeatureItem title="Needlework Competitions" theme="red">
            <p>
              Women traditionally display their needlework skills, demonstrating
              weaving talent to honor Weaver Girl. This has evolved into beauty
              pageants.
            </p>
          </FeatureItem>
          <FeatureItem title="Wishing on Wisteria" theme="red">
            <p>
              Young women write wishes on slips of paper and hang them on
              wisteria vines, hoping their romantic wishes will come true.
            </p>
          </FeatureItem>
          <FeatureItem title="Eating Special Foods" theme="red">
            <p>
              Qixi foods include lotus seed or melon seed pastries, symbolizing
              fertility and sweet relationships.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 现代庆祝 -->
      <section class="section">
        <h2 class="section-title">Modern Celebrations</h2>
        <p class="section-text">
          Qixi has evolved into China's version of Valentine's Day, with modern
          expressions of love and romance:
        </p>
        <FeatureGrid>
          <FeatureItem title="Giving Gifts" theme="red">
            <p>
              Like Valentine's Day, couples exchange gifts—flowers, chocolates,
              jewelry, and heartfelt cards. Roses are especially popular.
            </p>
          </FeatureItem>
          <FeatureItem title="Romantic Dinners" theme="red">
            <p>
              Romantic restaurants book up quickly for Qixi dinners. Many
              couples create memorable evenings with special meals and
              atmosphere.
            </p>
          </FeatureItem>
          <FeatureItem title="Proposals" theme="red">
            <p>
              Qixi is considered an especially auspicious day for marriage
              proposals. Many couples choose this romantic day to begin their
              forever.
            </p>
          </FeatureItem>
          <FeatureItem title="Social Media" theme="red">
            <p>
              Social media fills with declarations of love, romantic photos, and
              wishes for happiness—much like Valentine's Day celebrations
              worldwide.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 浪漫传统 -->
      <section class="section">
        <h2 class="section-title">Romantic Traditions</h2>
        <p class="section-text">
          The festival is filled with romantic customs that celebrate love in
          all its forms:
        </p>
        <FeatureGrid>
          <FeatureItem title="Double Seventh Ball" theme="red">
            <p>
              Some couples mark their anniversary on Qixi, calling it their
              "double seventh" (七七) anniversary—a special milestone in their
              relationship.
            </p>
          </FeatureItem>
          <FeatureItem title="Love Lock" theme="red">
            <p>
              In some regions, couples hang "love locks" on bridges or trees as
              symbols of their unbreakable bond.
            </p>
          </FeatureItem>
          <FeatureItem title="Wishing for Love" theme="red">
            <p>
              Single people pray to Weaver Girl for an ideal partner, hoping to
              find their true love.
            </p>
          </FeatureItem>
          <FeatureItem title="Protecting Love" theme="red">
            <p>
              Couples wear red strings or matching accessories to protect their
              relationship from separation.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">Cultural Significance</h2>
        <p class="section-text">
          Qixi represents more than just romance—it embodies the Chinese values
          of devotion, perseverance, and the hope that love can overcome any
          obstacle.
        </p>
        <p class="section-text">
          The story of Cowherd and Weaver Girl teaches that true love is worth
          waiting for, even if separation is inevitable. Their annual reunion
          reminds us that love can endure any distance.
        </p>
      </section>

      <!-- 全球影响 -->
      <section class="section">
        <h2 class="section-title">Global Influence</h2>
        <p class="section-text">
          Qixi has gained international recognition as China's Valentine's Day.
          It's now celebrated in Chinese communities worldwide and is sometimes
          called the "Chinese Valentine's Day" to distinguish it from Western
          Valentine's Day.
        </p>
        <FeatureGrid>
          <FeatureItem title="Asian Celebrations" theme="red">
            <p>
              Similar celebrations exist in Japan (Tanabata) and Korea, each
              with their own unique traditions honoring the star-crossed lovers.
            </p>
          </FeatureItem>
          <FeatureItem title="Romantic Tourism" theme="red">
            <p>
              Many couples travel to special Qixi celebration venues or romantic
              destinations to mark the occasion.
            </p>
          </FeatureItem>
          <FeatureItem title="Commercial Growth" theme="red">
            <p>
              The festival has become increasingly commercialized, with
              businesses promoting special Qixi deals and romantic experiences.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 节日食物 -->
      <section class="section">
        <h2 class="section-title">Festive Foods</h2>
        <p class="section-text">
          Like other Chinese festivals, Qixi has its own special foods that
          carry romantic symbolism:
        </p>
        <ul class="ingredient-list">
          <li>
            <strong>Lantern Cakes</strong> — Sweet pastries shaped like hearts
          </li>
          <li><strong>Lotus Seed Pastries</strong> — Representing fertility</li>
          <li><strong>Melon Seeds</strong> — Symbolizing reproduction</li>
          <li>
            <strong>Red Bean Soups</strong> — "Red beans" symbolize longing
          </li>
          <li><strong>Chocolate</strong> — Modern romantic gift</li>
          <li><strong>Rose Tea</strong> — Fragrant and romantic</li>
        </ul>
      </section>

      <!-- 为什么重要 -->
      <section class="section">
        <h2 class="section-title">Why It Matters</h2>
        <p class="section-text">
          Qixi holds a special place in Chinese culture as a day dedicated to
          celebrating love in all its forms—at romantic relationships, the hope
          of finding love, and the enduring bonds between couples.
        </p>
        <p class="section-text">
          In a world where romance can feel fleeting, Qixi reminds us that true
          love can endure separation, that patience brings reward, and that the
          stars themselves celebrate devotion.
        </p>
        <p class="section-text">
          Whether you're coupled or single, Qixi offers a moment to celebrate
          love—the most universal and enduring of human emotions.
        </p>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox>
      "On Qixi, the stars align for lovers. Cowherd and Weaver Girl teach us
      that love, no matter how distant, always finds a way to reunite."
    </QuoteBox>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title: "Qixi Festival - Chinese Valentine's Day",
  description:
    "Discover Qixi Festival, Chinese Valentine's Day celebrating the legendary love of Cowboy and Weaver Girl.",
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

.ingredient-list {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #555;
}

.ingredient-list li {
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
}
</style>
