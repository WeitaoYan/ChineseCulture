<template>
  <div class="home-page">
    <!-- 简介部分 -->
    <section class="intro-section">
      <div class="intro-content">
        <h2 class="section-title">Ancient Wisdom, Timeless Beauty</h2>
        <p class="section-text">
          Chinese traditional culture spans thousands of years, encompassing
          philosophy, art, literature, medicine, and more. It is a rich tapestry
          of traditions that have shaped one of the world's oldest continuous
          civilizations.
        </p>
      </div>
    </section>

    <!-- 特色文化部分 -->
    <section class="features-section">
      <h2 class="section-title">Explore Chinese Culture</h2>
      <div class="features-grid">
        <!-- 哲学思想 -->
        <NuxtLink to="/articles?tag=philosophy" class="feature-card">
          <div class="feature-icon">🎋</div>
          <h3 class="feature-title">Philosophy</h3>
          <p class="feature-text">
            Explore the teachings of Confucianism, Taoism, and Buddhism that
            have influenced Chinese thought for centuries.
          </p>
        </NuxtLink>

        <!-- 传统艺术 -->
        <NuxtLink to="/articles?tag=art" class="feature-card">
          <div class="feature-icon">🎨</div>
          <h3 class="feature-title">Traditional Arts</h3>
          <p class="feature-text">
            From calligraphy and painting to porcelain and silk, discover the
            exquisite beauty of Chinese artistic traditions.
          </p>
        </NuxtLink>

        <!-- 节日庆典 -->
        <NuxtLink to="/articles?tag=festival" class="feature-card">
          <div class="feature-icon">🏮</div>
          <h3 class="feature-title">Festivals</h3>
          <p class="feature-text">
            Experience the vibrant celebrations of Chinese New Year, Mid-Autumn
            Festival, and other important cultural events.
          </p>
        </NuxtLink>

        <!-- 饮食文化 -->
        <NuxtLink to="/articles?tag=cuisine" class="feature-card">
          <div class="feature-icon">🍜</div>
          <h3 class="feature-title">Cuisine</h3>
          <p class="feature-text">
            Discover the rich flavors of Chinese cuisine, from regional
            specialties to traditional festival foods.
          </p>
        </NuxtLink>

        <!-- 历史遗产 -->
        <NuxtLink to="/articles?tag=history" class="feature-card">
          <div class="feature-icon">📜</div>
          <h3 class="feature-title">History & Heritage</h3>
          <p class="feature-text">
            Journey through China's magnificent historical sites, from the Great
            Wall to the Forbidden City.
          </p>
        </NuxtLink>

        <!-- 传统医学 -->
        <NuxtLink to="/articles/traditional-chinese-medicine" class="feature-card">
          <div class="feature-icon">🌿</div>
          <h3 class="feature-title">Traditional Medicine</h3>
          <p class="feature-text">
            Learn about the holistic approach of Traditional Chinese Medicine,
            including acupuncture and herbal remedies.
          </p>
        </NuxtLink>
      </div>
    </section>

    <!-- 文化遗产部分 -->
    <section class="heritage-section">
      <h2 class="section-title">World Heritage Sites</h2>
      <div class="heritage-grid">
        <div class="heritage-item">
          <NuxtLink to="/articles/great-wall">
            <div class="heritage-image">
              <img
                src="/assets/images/greatwall.png"
                alt="Great Wall of China - The most iconic symbol of Chinese civilization"
                loading="lazy"
              />
            </div>
            <h3>Great Wall of China</h3>
          </NuxtLink>
        </div>
        <div class="heritage-item">
          <NuxtLink to="/articles/forbidden-city">
            <div class="heritage-image">
              <img
                src="/assets/images/forbidden-city.png"
                alt="Forbidden City - Imperial palace of the Ming and Qing dynasties"
                loading="lazy"
              />
            </div>
            <h3>Forbidden City</h3>
          </NuxtLink>
        </div>
        <div class="heritage-item">
          <NuxtLink to="/articles/terracotta-army">
            <div class="heritage-image">
              <img
                src="/assets/images/terracotta-army.png"
                alt="Terracotta Army - Guardian sculptures of Emperor Qin Shi Huang"
                loading="lazy"
              />
            </div>
            <h3>Terracotta Army</h3>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 热门文章部分 -->
    <section class="popular-section">
      <h2 class="section-title">Popular Articles</h2>
      <div class="popular-grid">
        <NuxtLink to="/articles/spring-festival" class="popular-card">
          <span class="popular-icon">🧧</span>
          <div class="popular-content">
            <h3>Spring Festival</h3>
            <p>China's most important traditional holiday</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/articles/chinese-zodiac" class="popular-card">
          <span class="popular-icon">🐉</span>
          <div class="popular-content">
            <h3>Chinese Zodiac</h3>
            <p>The twelve animals of the Chinese calendar</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/articles/chinese-tea-culture" class="popular-card">
          <span class="popular-icon">🍵</span>
          <div class="popular-content">
            <h3>Tea Culture</h3>
            <p>The ancient art of Chinese tea</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/articles/chinese-calligraphy" class="popular-card">
          <span class="popular-icon">🖌️</span>
          <div class="popular-content">
            <h3>Calligraphy</h3>
            <p>The art of beautiful writing</p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- 引用部分 -->
    <section class="quote-section">
      <div class="quote-content">
        <p class="quote-text">
          "The wise find pleasure in water; the virtuous find pleasure in
          hills."
        </p>
        <p class="quote-author">— Confucius (孔子)</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const siteUrl = "https://chinese-culture.ikber.cc";
const ogImage = `${siteUrl}/assets/images/building.png`;
const featuredArticles = [
  "spring-festival",
  "chinese-zodiac",
  "forbidden-city",
  "great-wall",
  "terracotta-army",
  "mid-autumn-festival",
  "chinese-tea-culture",
  "chinese-calligraphy",
  "confucius",
  "traditional-chinese-medicine",
];

definePageMeta({
  layout: "home",
});

useSeoMeta({
  title: "Chinese Traditional Culture: Festivals, History, Philosophy & Arts",
  description:
    "Discover 5,000 years of Chinese traditional culture — Spring Festival, Mid-Autumn Festival, Chinese zodiac, calligraphy, tea culture, Confucianism, the Great Wall and world heritage sites.",
  robots: "index,follow",
  ogTitle: "Chinese Culture Explorer — Discover Chinese Traditional Culture",
  ogDescription:
    "Explore 5,000 years of Chinese traditions: festivals, philosophy, cuisine, arts and world heritage sites, explained in depth.",
  ogType: "website",
  ogUrl: `${siteUrl}/`,
  ogImage,
  ogImageWidth: 800,
  ogImageHeight: 450,
  ogImageAlt: "Traditional Chinese architecture",
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Culture Explorer — Discover Chinese Traditional Culture",
  twitterDescription:
    "Explore 5,000 years of Chinese traditions: festivals, philosophy, cuisine, arts and world heritage sites.",
  twitterImage: ogImage,
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Chinese Culture Explorer",
        description:
          "Discover Chinese traditional culture — explore festivals, history, philosophy, cuisine, and ancient heritage.",
        url: `${siteUrl}/`,
        isPartOf: { "@id": siteUrl },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: featuredArticles.length,
          itemListElement: featuredArticles.map((slug, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Article",
              name: slug
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" "),
              url: `${siteUrl}/articles/${slug}`,
            },
          })),
        },
      }),
    },
  ],
});
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

/* 简介部分 */
.intro-section {
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.section-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}

/* 特色文化部分 */
.features-section {
  margin-bottom: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: #fff;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.feature-text {
  color: #666;
  line-height: 1.7;
}

/* 文化遗产部分 */
.heritage-section {
  margin-bottom: 4rem;
}

.heritage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.heritage-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.heritage-image {
  height: 250px;
  overflow: hidden;
}

.heritage-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.heritage-item:hover .heritage-image img {
  transform: scale(1.1);
}

.heritage-item h3 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1.5rem;
  margin: 0;
  font-size: 1.3rem;
}

/* 引用部分 */
.quote-section {
  background: linear-gradient(
    135deg,
    rgba(166, 44, 33, 0.1),
    rgba(212, 175, 55, 0.1)
  );
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 8px;
}

.quote-text {
  font-size: 1.8rem;
  font-style: italic;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.quote-author {
  font-size: 1.2rem;
  color: #a62c21;
  font-weight: 600;
}

/* 热门文章部分 */
.popular-section {
  margin-bottom: 4rem;
}

.popular-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.popular-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.popular-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-left-color: #a62c21;
}

.popular-icon {
  font-size: 2rem;
  min-width: 50px;
  text-align: center;
}

.popular-content h3 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.3rem;
  font-weight: 600;
}

.popular-content p {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .quote-text {
    font-size: 1.4rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .heritage-grid {
    grid-template-columns: 1fr;
  }

  .popular-grid {
    grid-template-columns: 1fr;
  }
}
</style>
