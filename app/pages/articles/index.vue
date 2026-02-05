<template>
  <div class="articles-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Cultural Articles</h1>
      <p class="page-subtitle">
        Explore in-depth articles about Chinese traditions, history, and culture
      </p>
    </div>

    <!-- 文章列表 -->
    <div class="articles-grid">
      <article
        v-for="article in filteredArticles"
        :key="article.id"
        class="article-card"
        itemscope
        itemtype="https://schema.org/Article"
      >
        <div class="article-image" itemprop="image">
          <NuxtLink :to="`/articles/${article.slug}`" itemprop="url">
            <img
              :src="article.image"
              :alt="article.title"
              itemprop="name"
              loading="lazy"
            />
          </NuxtLink>
          <div class="article-tags" role="navigation" aria-label="Article tags">
            <NuxtLink
              v-for="tag in article.tags"
              :key="tag"
              :to="`/articles?tag=${tag}`"
              class="tag-link"
            >
              <span class="tag-badge">
                {{ tag }}
              </span>
            </NuxtLink>
          </div>
        </div>
        <div class="article-content">
          <h3 class="article-title" itemprop="headline">
            <NuxtLink :to="`/articles/${article.slug}`">
              {{ article.title }}
            </NuxtLink>
          </h3>
          <p class="article-excerpt" itemprop="description">
            {{ article.excerpt }}
          </p>
          <div class="article-meta">
            <span class="article-readtime" itemprop="timeRequired">
              {{ article.readtime }} min read
            </span>
          </div>
        </div>
      </article>
    </div>

    <!-- 分页 -->
    <div class="pagination">
      <button class="page-btn prev-btn" disabled>Previous</button>
      <span class="page-info">Page 1 of 1</span>
      <button class="page-btn next-btn" disabled>Next</button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title: "Chinese Cultural Articles | Explore Traditions & History",
  description:
    "Discover authentic Chinese cultural articles covering traditions, festivals, history, and heritage. Learn about Forbidden City, Spring Festival, dumplings, and more.",
  ogTitle: "Chinese Cultural Articles",
  ogDescription:
    "Explore authentic Chinese cultural articles covering traditions, festivals, history, and heritage",
  ogType: "website",
  ogImage: "/assets/images/building.png", // 添加OG图片
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Cultural Articles",
  twitterDescription:
    "Explore authentic Chinese cultural articles covering traditions, festivals, history, and heritage",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "preload", as: "image", href: "/assets/images/building.png" }],
  title: "Chinese Cultural Articles",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Chinese Cultural Articles",
        description:
          "Collection of articles about Chinese traditions, history, and cultural heritage",
      }),
    },
  ],
});

// 从路由参数获取当前选中的标签
const route = useRoute();
const currentTag = computed(() => route.query.tag || "all");

// 文章数据
const articles = [
  {
    id: 1,
    title: "Forbidden City",
    slug: "forbidden-city",
    tags: ["history", "architecture"],
    readtime: 8,
    image: "/assets/images/forbidden-city.png",
    excerpt:
      "Explore the fascinating history of China's imperial palace, from its construction in the 15th century to its role as a UNESCO World Heritage Site today.",
  },
  {
    id: 2,
    title: "Laba Festival",
    slug: "laba-festival",
    tags: ["traditions", "cuisine", "festival"],
    readtime: 7,
    image: "/assets/images/laba-congee.png",
    excerpt:
      "Discover the Laba Festival, a traditional Chinese celebration of porridge, gratitude, and community spirit.",
  },
  {
    id: 3,
    title: "Counting the Nines",
    slug: "counting-the-nines",
    tags: ["traditions", "philosophy", "festival"],
    readtime: 7,
    image: "/assets/images/counting-the-nines.png",
    excerpt:
      "Counting the Nines is an ancient Chinese tradition of tracking winter's progress by counting 81 days in nine sets of nine, beginning from the Winter Solstice.",
  },
  {
    id: 4,
    title: "Spring Festival",
    slug: "spring-festival",
    tags: ["traditions", "festival", "family"],
    readtime: 9,
    image: "/assets/images/spring-festival-reunion-dinner.png",
    excerpt:
      "Discover the Spring Festival, China's most important celebration of family, tradition, and renewal.",
  },
  {
    id: 5,
    title: "Dumplings",
    slug: "dumplings",
    tags: ["traditions", "cuisine", "family"],
    readtime: 8,
    image: "/assets/images/jiaozi.png",
    excerpt:
      "Discover the cultural significance and tradition of Chinese dumplings, a symbol of warmth, reunion, and heritage.",
  },
  {
    id: 6,
    title: "How to Make Laba Congee",
    slug: "laba-congee",
    tags: ["cuisine", "recipe", "traditions"],
    readtime: 6,
    image: "/assets/images/congee.png",
    excerpt:
      "Complete guide to making traditional Laba Congee, a nutritious and symbolic Chinese porridge eaten during the Laba Festival.",
  },
  {
    id: 7,
    title: "The Terracotta Army",
    slug: "terracotta-army",
    tags: ["history", "archaeology", "culture"],
    readtime: 8,
    image: "/assets/images/terracotta-army.png",
    excerpt:
      "Discover the Terracotta Army, an awe-inspiring collection of thousands of life-sized sculptures built to protect China's First Emperor in the afterlife.",
  },
  {
    id: 8,
    title: "The Great Wall",
    slug: "great-wall",
    tags: ["history", "architecture", "culture"],
    readtime: 7,
    image: "/assets/images/greatwall.png",
    excerpt:
      "Explore the Great Wall of China, the world's most iconic symbol of defense and perseverance spanning over 2,000 years of history.",
  },
];

// 过滤文章
const filteredArticles = computed(() => {
  if (currentTag.value === "all") {
    return articles;
  }
  return articles.filter((article) => article.tags.includes(currentTag.value));
});
</script>

<style scoped>
.articles-page {
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
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-weight: 400;
}

/* 文章列表 */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.article-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.article-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .article-image img {
  transform: scale(1.05);
}

.article-tags {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.tag-badge {
  background-color: #a62c21;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.article-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.article-title a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;
}

.article-title a:hover {
  color: #a62c21;
}

.article-excerpt {
  color: #666;
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  flex: 1;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #888;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.article-readtime {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 分页 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.page-btn {
  padding: 0.8rem 1.5rem;
  border: 2px solid rgba(166, 44, 33, 0.2);
  background-color: white;
  border-radius: 8px;
  color: #555;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.page-btn:hover:not(:disabled) {
  border-color: #a62c21;
  color: #a62c21;
  transform: translateY(-2px);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  color: #666;
  font-weight: 500;
}

.tag-link {
  text-decoration: none;
  display: inline-block;
}

.tag-link:hover {
  transform: translateY(-1px);
}
/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .articles-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .article-content {
    padding: 1.2rem;
  }

  .article-title {
    font-size: 1.2rem;
  }

  .tag-badge {
    font-size: 0.6rem;
  }
}
</style>
