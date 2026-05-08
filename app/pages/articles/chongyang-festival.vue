<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Double Ninth Festival</h1>
      <p class="page-subtitle">
        Chongyang Festival - Honoring Elders and Climbing High
      </p>
      <PageMeta>
        <MetaItem>🏔️ Mountain Climbing</MetaItem>
        <MetaItem>🌼 Chrysanthemum</MetaItem>
        <MetaItem>👴 Respect for Elders</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/chongyang-festival.jpg"
      altText="Double Ninth Festival - chrysanthemum blossoms and mountain scenery"
    />

    <FestivalDates festivalName="Double Ninth Festival" :lunarMonth="9" :lunarDay="9" />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Double Ninth Festival</strong> (重阳节, Chongyang Jie) is one of
          China's traditional festivals, celebrated on the
          <strong>9th day of the 9th month</strong> of the lunar calendar. The
          word "chongyang" means "double yang"—the number nine is considered
          the yang (masculine, sun, heaven) number in Chinese numerology, and
          when the ninth day of the ninth month arrives, it creates a
          particularly powerful yang energy.
        </p>
        <p class="section-text">
          This festival is a beautiful blend of honoring ancestors, respecting
          elders, and celebrating autumn. It combines the joy of chrysanthemum
          viewing, mountain climbing for good health, and the tradition of
          caring for elderly family members. In 2024, UNESCO recognized
          Double Ninth Festival as part of China's intangible cultural
          heritage.
        </p>
      </section>

      <!-- 时间介绍 -->
      <section class="section">
        <h2 class="section-title">When Is Double Ninth Festival?</h2>
        <p class="section-text">
          Double Ninth Festival falls on the <strong>9th day of the 9th lunar month</strong>,
          typically occurring in <strong>October</strong> of the Gregorian
          calendar. The timing places it perfectly in the midst of autumn's
          golden hues, when chrysanthemums bloom and the weather is crisp and
          comfortable for outdoor activities.
        </p>
        <FeatureGrid>
          <FeatureItem title="Date Significance" theme="red">
            <p>
              The number nine is the largest single-digit in Chinese culture,
              symbolizing longevity and eternity. When doubled (both month and
              day are nine), it creates an especially auspicious date for
              celebration and worship.
            </p>
          </FeatureItem>
          <FeatureItem title="Autumn Setting" theme="red">
            <p>
              The festival arrives during the peak of autumn, when maple leaves
              turn red, chrysanthemums bloom in vibrant colors, and the air is
              crisp and refreshing—the perfect season for outdoor celebration.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 登高远眺 -->
      <section class="section">
        <h2 class="section-title">Climbing High for Good Fortune</h2>
        <p class="section-text">
          The most distinctive custom of Double Ninth Festival is
          <strong>climbing to a high place</strong> (登高, Denggao). Ancient
          Chinese believed that climbing high during the double-ninth would
          ward off disasters and bring good luck. This tradition stems from
          the folk belief that ascending to elevated ground drives away
          evil spirits and plague.
        </p>
        <FeatureGrid>
          <FeatureItem title="Mountain Climbing" theme="red">
            <p>
              Families and friends gather to hike up hills and mountains,
              enjoying the autumn scenery while exercising. The higher you
              climb, the more blessings you receive for the coming year.
            </p>
          </FeatureItem>
          <FeatureItem title="Symbolic Meaning" theme="red">
            <p>
              The elevation represents rising above troubles and troubles, and
              the panoramic view symbolizes broad perspectives and long-term
              thinking. Climbing is also associated with reaching for longevity
              in life.
            </p>
          </FeatureItem>
          <FeatureItem title="Autumn Hiking" theme="red">
            <p>
              Modern celebrations embrace the outdoor spirit, with people
              choosing parks, hills, or scenic trails. It's a wonderful way to
              connect with nature during the beautiful autumn season.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 赏菊饮酒 -->
      <section class="section">
        <h2 class="section-title">Chrysanthemum Viewing</h2>
        <p class="section-text">
          <strong>Chrysanthemums</strong> (菊花) bloom at their finest during
          Double Ninth Festival, making chrysanthemum viewing an essential part
          of the celebration. The flower's name "ju" in Chinese sounds similar
          to the word for "long-lasting," symbolizing longevity and the
          perseverance of life.
        </p>
        <FeatureGrid>
          <FeatureItem title="Chrysanthemum Wine" theme="red">
            <p>
              A traditional custom is drinking chrysanthemum wine (菊花酒),
              infused with the flowers and believed to have purifying and
              health-giving properties. It represents the cleansing of the
              body and spirit.
            </p>
          </FeatureItem>
          <FeatureItem title="Flower Displays" theme="red">
            <p>
              Parks and gardens host chrysanthemum exhibitions featuring
              thousands of varieties in breathtaking colors and forms. These
              displays attract visitors who come to appreciate the autumn
              beauty.
            </p>
          </FeatureItem>
          <FeatureItem title="Symbolism" theme="red">
            <p>
              In Chinese culture, chrysanthemums symbolize noble character,
              perseverance, and the beauty of autumn. They are one of the
              "Four Gentlemen" of flowers in Chinese art.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 敬老孝亲 -->
      <section class="section">
        <h2 class="section-title">Honoring Elders</h2>
        <p class="section-text">
          Double Ninth Festival has evolved into <strong>Seniors' Day</strong>
          (敬老节) in modern China, a time to honor and show respect for
          elderly family members and all senior citizens. It's a reminder to
          appreciate the wisdom, sacrifices, and love of those who came
          before us.
        </p>
        <FeatureGrid>
          <FeatureItem title="Family Gatherings" theme="red">
            <p>
              Families gather to share meals with elders, expressing gratitude
              for their care and wisdom. It's a day to strengthen family bonds
              across generations.
            </p>
          </FeatureItem>
          <FeatureItem title="Gift-Giving" theme="red">
            <p>
              Children and grandchildren present gifts to elders, often
              including health supplements, warm clothing, or thoughtful
              presents that show care and attention.
            </p>
          </FeatureItem>
          <FeatureItem title="Community Events" theme="red">
            <p>
              Communities organize activities for seniors, including
              performances, outings, and cultural events that celebrate their
              contributions to society.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 传统习俗 -->
      <section class="section">
        <h2 class="section-title">Traditional Customs</h2>
        <p class="section-text">
          Double Ninth Festival is rich with traditional practices passed down
          through generations:
        </p>
        <FeatureGrid>
          <FeatureItem title="Wearing Cornel Dogwood" theme="red">
            <p>
              A traditional custom is wearing cornel dogwood (茱萸) sprigs on
              clothing or hanging them on doors. The plant is believed to have
              protective properties against evil and illness.
            </p>
          </FeatureItem>
          <FeatureItem title="Eating Chongyang Cakes" theme="red">
            <p>
              Special "climbing high cakes" (重阳糕) are prepared, often
              layered to represent the ascending heights of mountains. These
              sweet rice cakes symbolize progress and elevation in life.
            </p>
          </FeatureItem>
          <FeatureItem title="Flying Kites" theme="red">
            <p>
              Kite flying is popular during this festival, especially in
              southern China. The kites are flown high and then cut loose,
              symbolizing the release of troubles and the rise of good fortune.
            </p>
          </FeatureItem>
          <FeatureItem title="Poetry and Art" theme="red">
            <p>
              Many famous poems about autumn, mountains, and chrysanthemums
              were composed during this season. It's a time for artistic
              expression and appreciation of nature's beauty.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 现代庆祝 -->
      <section class="section">
        <h2 class="section-title">Modern Celebrations</h2>
        <p class="section-text">
          While honoring ancient traditions, Double Ninth Festival continues
          to evolve in contemporary society:
        </p>
        <FeatureGrid>
          <FeatureItem title="Senior Citizen's Day" theme="red">
            <p>
              In China, Double Ninth Festival is officially recognized as
              "Seniors' Day," with various activities organized to show
              respect and care for elderly citizens across the country.
            </p>
          </FeatureItem>
          <FeatureItem title="Outdoor Activities" theme="red">
            <p>
              People embrace the autumn weather with hiking, picnics, and
              family outings. It's one of the most pleasant times of year for
              outdoor celebration in China.
            </p>
          </FeatureItem>
          <FeatureItem title="Cultural Preservation" theme="red">
            <p>
              The festival's recognition as intangible cultural heritage has
              sparked renewed interest in traditional customs, folk songs, and
              the poetry associated with this autumn celebration.
            </p>
          </FeatureItem>
          <FeatureItem title="Family Values" theme="red">
            <p>
              The festival reinforces the important Chinese value of respecting
              and caring for elders, reminding younger generations of their
              duty to honor family and tradition.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 总结 -->
      <section class="section">
        <h2 class="section-title">A Festival of Depth and Meaning</h2>
        <p class="section-text">
          Double Ninth Festival embodies the best of Chinese tradition—a
          celebration that connects us to nature, honors our ancestors, and
          reminds us to cherish our elders. As we climb high and gaze at the
          autumn scenery, we are reminded of the heights of wisdom and love
          that our forebears have helped us reach.
        </p>
        <p class="section-text">
          Whether you join in the mountain climbing, raise a cup of
          chrysanthemum tea, or simply spend time with family, Double Ninth
          Festival offers a beautiful opportunity to pause, reflect, and
          appreciate the richness of Chinese cultural heritage.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title: "Double Ninth Festival | Chongyang Festival",
  description:
    "Discover Double Ninth Festival (Chongyang Jie), a traditional Chinese celebration of honoring elders, climbing mountains, and viewing chrysanthemums on the 9th day of the 9th lunar month.",
  ogTitle: "Double Ninth Festival - Chinese Cultural Heritage",
  ogDescription:
    "Explore the traditions, customs, and modern celebrations of Double Ninth Festival, China's beautiful autumn festival honoring elders and enjoying chrysanthemum season.",
  ogType: "website",
  ogImage: "/assets/images/chongyang-festival.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Double Ninth Festival",
  twitterDescription:
    "Discover Double Ninth Festival, China's autumn celebration of respecting elders and enjoying chrysanthemum season.",
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
      href: "/assets/images/chongyang-festival.jpg",
    },
  ],
  title: "Double Ninth Festival | Chongyang Festival",
  meta: [
    {
      name: "description",
      content:
        "Discover Double Ninth Festival (Chongyang Jie), a traditional Chinese celebration of honoring elders, climbing mountains, and viewing chrysanthemums.",
    },
    {
      name: "keywords",
      content:
        "Double Ninth Festival, Chongyang Festival, Chinese festival, 重阳节, chrysanthemum, mountain climbing, respecting elders",
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