<template>
  <div class="content-layout">
    <!-- 导航栏 -->
    <header class="layout-header">
      <nav class="main-nav">
        <div class="nav-brand">
          <NuxtLink to="/" class="brand-link">Chinese Culture</NuxtLink>
        </div>
        <div class="nav-menu">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/articles" class="nav-link">Articles</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        </div>
      </nav>
    </header>

    <div class="layout-container">
      <!-- 左侧边栏 - 文章过滤器 -->
      <aside class="sidebar" v-if="$route.path.startsWith('/articles')">
        <div class="article-filters">
          <h3 class="filters-title">Article Categories</h3>
          <button
            v-for="tag in tags"
            :key="tag.value"
            :class="['filter-btn', { active: selectedTag === tag.value }]"
            @click="handleTagClick(tag.value)"
          >
            <span class="filter-icon">{{ tag.icon }}</span>
            {{ tag.label }}
          </button>
        </div>
      </aside>

      <!-- 主要内容区域 -->
      <main class="layout-main">
        <slot />
      </main>
    </div>

    <!-- 页脚 -->
    <footer class="layout-footer">
      <p>&copy; 2023 Chinese Culture Explorer. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// 文章标签
const tags = [
  { label: "All", value: "all", icon: "📚" },
  { label: "Traditions", value: "traditions", icon: "🎎" },
  { label: "Art", value: "art", icon: "🎨" },
  { label: "History", value: "history", icon: "📜" },
  { label: "Cuisine", value: "cuisine", icon: "🍜" },
  { label: "Philosophy", value: "philosophy", icon: "🧘" },
];

// 选中的标签
const selectedTag = ref("all");

// 处理标签点击事件
const handleTagClick = (tagValue) => {
  selectedTag.value = tagValue;

  // 更新路由查询参数
  const route = useRoute();
  const router = useRouter();

  // 只在文章路径下应用过滤
  if (route.path.startsWith("/articles")) {
    router.push({
      path: "/articles",
      query: { ...route.query, tag: tagValue !== "all" ? tagValue : undefined },
    });
  }
};

// 监听路由变化，同步标签状态
watch(
  () => useRoute().query.tag,
  (newTag) => {
    selectedTag.value = newTag || "all";
  },
  { immediate: true },
);

// 初始化标签状态
onMounted(() => {
  const route = useRoute();
  selectedTag.value = route.query.tag || "all";
});
</script>

<style scoped>
.content-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.main-nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.nav-brand .brand-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: #a62c21;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.nuxt-link-active {
  color: #a62c21;
}

.layout-container {
  display: flex;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.sidebar {
  width: 250px;
  padding: 2rem 1.5rem;
  background-color: #f9f9f9;
  border-right: 1px solid #eee;
  height: fit-content;
  position: sticky;
  top: 0;
}

.filters-title {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(166, 44, 33, 0.3);
}

/* 文章过滤器样式 */
.article-filters {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.2rem;
  border: 2px solid transparent;
  background-color: white;
  border-radius: 8px;
  color: #555;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  text-align: left;
}

.filter-btn:hover {
  border-color: rgba(166, 44, 33, 0.5);
  background-color: rgba(166, 44, 33, 0.05);
  transform: translateX(3px);
}

.filter-btn.active {
  background-color: #a62c21;
  border-color: #a62c21;
  color: white;
}

.filter-icon {
  font-size: 1.1rem;
  min-width: 1.5rem;
}

.layout-main {
  flex: 1;
  padding: 2rem;
}

.layout-footer {
  background-color: #f8f8f8;
  padding: 2rem;
  text-align: center;
  color: #666;
  border-top: 1px solid #eee;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    padding: 1.5rem;
    position: static;
    border-right: none;
    border-bottom: 1px solid #eee;
  }

  .layout-main {
    padding: 1.5rem;
  }
}
</style>
