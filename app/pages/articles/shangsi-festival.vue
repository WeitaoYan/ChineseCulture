<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Shangsi Festival</h1>
      <p class="page-subtitle">
        Shangsi Jie - Spring Purification and Celebration
      </p>
      <PageMeta>
        <MetaItem>🌸 Spring Outings</MetaItem>
        <MetaItem>🌊 River Bathing</MetaItem>
        <MetaItem>💮 Willow Decorations</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/shangsi-festival.jpg"
      altText="Shangsi Festival - spring riverside celebration with cherry blossoms"
    />

    <FestivalDates festivalName="Shangsi Festival" :lunarMonth="3" :lunarDay="3" />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Shangsi Festival</strong> (上巳节, Shangsì Jie) is one of
          China's oldest traditional festivals, celebrated on the
          <strong>3rd day of the 3rd month</strong> of the lunar calendar.
          This ancient festival marks the arrival of spring and the renewal
          of life, combining ritual purification with joyful outdoor
          celebrations.
        </p>
        <p class="section-text">
          In ancient times, Shangsi was a significant festival when people
          would go to riversides to bathe and purify themselves, believing
          it would wash away misfortune and bring good health for the year
          ahead. Today, it has evolved into a celebration of spring, nature,
          and new beginnings—sometimes called "Girls' Day" when daughters
          are honored and celebrated.
        </p>
      </section>

      <!-- 时间介绍 -->
      <section class="section">
        <h2 class="section-title">When Is Shangsi Festival?</h2>
        <p class="section-text">
          Shangsi Festival falls on the <strong>3rd day of the 3rd lunar month</strong>,
          typically occurring in <strong>April</strong> of the Gregorian
          calendar. This timing places it at the height of spring, when
          nature awakens with blooming flowers, gentle rains, and
          warming temperatures—perfect conditions for outdoor celebration.
        </p>
        <FeatureGrid>
          <FeatureItem title="Ancient Calendar" theme="red">
            <p>
              The "3rd month, 3rd day" date has special significance in
              Chinese numerology, representing the harmony of heaven, earth,
              and humanity—making it an auspicious day for new beginnings.
            </p>
          </FeatureItem>
          <FeatureItem title="Spring Setting" theme="red">
            <p>
              The festival arrives during peak spring season, when cherry
              blossoms, plum blossoms, and rape flowers paint the landscape
              in vibrant colors, creating a magical atmosphere for
              celebration.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 历史渊源 -->
      <section class="section">
        <h2 class="section-title">Historical Origins</h2>
        <p class="section-text">
          Shangsi Festival has a history spanning over 2,000 years, with
          its roots in ancient purification rituals and spring worship
          ceremonies.
        </p>
        <FeatureGrid>
          <FeatureItem title="Ritual Purification" theme="red">
            <p>
              In ancient China, people believed that evil spirits were most
              active during the transition of seasons. On Shangsi, they would
              go to riversides to bathe, perform rituals, and wash away
              misfortune accumulated over the winter months.
            </p>
          </FeatureItem>
          <FeatureItem title="Spring Worship" theme="red">
            <p>
              The festival originally coincided with the "Clearing and
              Bright" (清明) season, a time when ancestors were honored
              at graves. Shangsi added the element of joyful spring
              celebration to this solemn remembrance.
            </p>
          </FeatureItem>
          <FeatureItem title="Court Traditions" theme="red">
            <p>
              Historical records show that Chinese courts held grand
              celebrations on Shangsi, with emperors leading officials in
              riverside rituals and feasting, setting an example for
              popular observance throughout the land.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 祓禊仪式 -->
      <section class="section">
        <h2 class="section-title">Riverside Purification Rituals</h2>
        <p class="section-text">
          The most distinctive tradition of Shangsi Festival is the practice
          of <strong>fu xi</strong> (祓禊)—a ritual bathing and purification
          ceremony performed at riversides. Ancient people believed that
          flowing water had the power to wash away illness and misfortune.
        </p>
        <FeatureGrid>
          <FeatureItem title="Riverside Bathing" theme="red">
            <p>
              People would wade into rivers or streams, using aromatic
              herbs and flowers to create cleansing waters. This practice
              was believed to purify both body and spirit, preparing one
              for the new season.
            </p>
          </FeatureItem>
          <FeatureItem title="Flower Baths" theme="red">
            <p>
              Petals of spring flowers, particularly plum and cherry
              blossoms, were gathered and floated on the water during
              the ritual, adding fragrance and symbolic meaning of
              renewal and beauty.
            </p>
          </FeatureItem>
          <FeatureItem title="Symbolic Meaning" theme="red">
            <p>
              The ritual represented washing away the troubles of the past
              and embracing the freshness of new beginnings—perfect for
              the spring season of renewal and growth.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 春游习俗 -->
      <section class="section">
        <h2 class="section-title">Spring Outings</h2>
        <p class="section-text">
          Shangsi Festival is naturally suited for <strong>spring outings</strong>
          (春游), as the pleasant weather invites people to leave their homes
          and enjoy the beauty of nature awakening after winter.
        </p>
        <FeatureGrid>
          <FeatureItem title="Flower Viewing" theme="red">
            <p>
              People gather in gardens and countryside to admire blooming
              flowers—cherry blossoms, plum blossoms, and rapeseed flowers
              create stunning displays of pink, white, and gold across the
              landscape.
            </p>
          </FeatureItem>
          <FeatureItem title="Picnics by Water" theme="red">
            <p>
              It became traditional to pack food and hold picnics by
              rivers, lakes, and in parks. The combination of good food,
              beautiful scenery, and company makes for perfect spring
              celebration.
            </p>
          </FeatureItem>
          <FeatureItem title="Willow Decorations" theme="red">
            <p>
              Willows are closely associated with Shangsi—people would
              wear willow branches or weave them into crowns, believing
              the willow had protective powers against evil and welcomed
              spring's life energy.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 曲水流觞 -->
      <section class="section">
        <h2 class="section-title">Floating Wine Cups</h2>
        <p class="section-text">
          <strong>Qu Shui Liu Shang</strong> (曲水流觞), or "floating wine
          cups on winding water," is one of the most elegant traditions
          associated with Shangsi Festival. This practice has its roots in
          literati culture and represents the refined pleasures of spring.
        </p>
        <FeatureGrid>
          <FeatureItem title="The Practice" theme="red">
            <p>
              A stream or channel would be arranged with cups of wine
              floating on the water. When a cup stopped in front of
              someone, they were expected to drink the wine and compose
              a poem—a delightful blend of nature, wine, and poetry.
            </p>
          </FeatureItem>
          <FeatureItem title="Literary Tradition" theme="red">
            <p>
              This tradition was especially beloved by scholars and
              artists, who would gather at beautiful garden settings
              to compose verses, creating some of classical China's
              most memorable poetry during these gatherings.
            </p>
          </FeatureItem>
          <FeatureItem title="Famous Example" theme="red">
            <p>
              The famous Lantingji Xu (Preface to the Orchid Pavilion
              Poetry Collection) was written during such a gathering
              in the 4th century, becoming one of the most celebrated
              pieces of calligraphy in Chinese history.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 女孩节 -->
      <section class="section">
        <h2 class="section-title">Girls' Day Celebration</h2>
        <p class="section-text">
          In many regions of China, Shangsi Festival has evolved into a
          special day to <strong>celebrate young women and girls</strong>,
          recognizing their beauty, grace, and contributions to family.
          This modern observance honors daughters and their place in
          Chinese society.
        </p>
        <FeatureGrid>
          <FeatureItem title="Honoring Daughters" theme="red">
            <p>
              Families with daughters may celebrate by giving gifts,
              preparing special meals, or taking girls on outings to
              enjoy the spring scenery—making them feel cherished and
              valued.
            </p>
          </FeatureItem>
          <FeatureItem title="Flower Hair Accessories" theme="red">
            <p>
              Girls traditionally wear flower hair accessories or
              clothing decorated with spring blossoms during this
              season, celebrating youth, beauty, and the renewal of
              spring.
            </p>
          </FeatureItem>
          <FeatureItem title="Community Events" theme="red">
            <p>
              Some communities organize special events, performances,
              or gatherings specifically to celebrate young women
              during this season, strengthening social bonds and
              community spirit.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 传统习俗 -->
      <section class="section">
        <h2 class="section-title">Traditional Customs</h2>
        <p class="section-text">
          Shangsi Festival is rich with traditional customs that celebrate
          spring and renewal:
        </p>
        <FeatureGrid>
          <FeatureItem title="Eating Spring Vegetables" theme="red">
            <p>
              Spring vegetables such as shepherd's purse, bamboo shoots,
              and fresh greens are harvested and prepared as special
              dishes, representing the first tastes of the new season.
            </p>
          </FeatureItem>
          <FeatureItem title="Paper Boats" theme="red">
            <p>
              Small paper boats are placed in rivers or streams, carrying
              offerings or wishes downstream—a practice symbolizing the
              release of troubles and the flow of good fortune.
            </p>
          </FeatureItem>
          <FeatureItem title="Egg Balancing" theme="red">
            <p>
              An old tradition involves attempting to balance eggs on
              their ends during Shangsi—the belief is that if one
              succeeds, it brings luck for the entire year.
            </p>
          </FeatureItem>
          <FeatureItem title="Wearing Hu Die" theme="red">
            <p>
              People, especially children, wear jade or ornaments shaped
              like butterflies (蝴蝶/蝴蝶) during Shangsi, as the butterfly
              symbolizes transformation and the emergence of new life.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 现代庆祝 -->
      <section class="section">
        <h2 class="section-title">Modern Celebrations</h2>
        <p class="section-text">
          While many ancient customs have faded, Shangsi Festival
          continues to be celebrated in various ways across China
          today:
        </p>
        <FeatureGrid>
          <FeatureItem title="Spring Tourism" theme="red">
            <p>
              The "Tomb-Sweeping and Shangsi Holiday" (清明上巳) has
              become a popular travel period, with families taking
              advantage of the spring weather for outings and
              cultural activities.
            </p>
          </FeatureItem>
          <FeatureItem title="Cultural Events" theme="red">
            <p>
              Many communities organize traditional performances,
              costume displays, and cultural demonstrations that
              showcase the elegance of ancient Shangsi traditions.
            </p>
          </FeatureItem>
          <FeatureItem title="Tea Ceremonies" theme="red">
            <p>
              Spring tea is celebrated during this season, with tea
              ceremonies and tastings that honor the first flush of
              tea leaves, a prized delicacy of the spring season.
            </p>
          </FeatureItem>
          <FeatureItem title="Photography" theme="red">
            <p>
              The stunning spring scenery makes Shangsi the perfect
              time for photography enthusiasts to capture the beauty
              of blooming flowers, traditional costumes, and scenic
              landscapes.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 总结 -->
      <section class="section">
        <h2 class="section-title">A Festival of Renewal</h2>
        <p class="section-text">
          Shangsi Festival embodies the spirit of spring—renewal,
          purification, and the joy of new beginnings. Whether through
          ancient riverside rituals, elegant poetry gatherings, or
          modern spring outings, this festival reminds us to embrace
          the freshness of each new season.
        </p>
        <p class="section-text">
          As we welcome the beauty of spring and participate in its
          celebrations, Shangsi offers us a beautiful opportunity
          to honor tradition, connect with nature, and appreciate the
          enduring richness of Chinese cultural heritage.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title: "Shangsi Festival | Traditional Chinese Spring Celebration",
  description:
    "Discover Shangsi Festival (上巳节), an ancient Chinese spring celebration of purification rituals, flower viewing, and floating wine cups on the 3rd day of the 3rd lunar month.",
  ogTitle: "Shangsi Festival - Traditional Chinese Spring Celebration",
  ogDescription:
    "Explore the traditions, customs, and modern celebrations of Shangsi Festival, China's beautiful spring festival of renewal and purification.",
  ogType: "website",
  ogImage: "/assets/images/shangsi-festival.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Shangsi Festival",
  twitterDescription:
    "Discover Shangsi Festival, China's ancient spring celebration of renewal, river purification, and spring outings.",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/assets/images/shangsi-festival.jpg",
    },
  ],
  title: "Shangsi Festival | Traditional Chinese Spring Celebration",
  meta: [
    {
      name: "description",
      content:
        "Discover Shangsi Festival (上巳节), an ancient Chinese spring celebration of purification rituals, flower viewing, and floating wine cups on the 3rd day of the 3rd lunar month.",
    },
    {
      name: "keywords",
      content:
        "Shangsi Festival, Chinese spring festival, 上巳节, traditional Chinese festival, river purification, spring outing, floating wine cups",
    },
  ],
});
</script>

<style scoped>
.content-page {
  max-width: 100%;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-weight: 400;
  margin-bottom: 1rem;
}

.content-body {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.8rem;
  color: #a62c21;
  margin-bottom: 1rem;
  font-weight: 700;
  border-bottom: 2px solid rgba(166, 44, 33, 0.2);
  padding-bottom: 0.5rem;
}

.section-text {
  font-size: 1.1rem;
  line-height: 1.9;
  color: #333;
  margin-bottom: 1.2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .section-text {
    font-size: 1rem;
  }
}
</style>