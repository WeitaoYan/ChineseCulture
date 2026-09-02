<template>
  <div class="content-layout">
    <!-- 导航栏 -->
    <TheNavbar />

    <div class="layout-container">
      <!-- 左侧边栏 - 文章过滤器 -->
      <aside class="sidebar" v-if="$route.path.startsWith('/articles')">
        <div
          class="mobile-filter-toggle"
          @click="toggleMobileFilter"
          v-if="isMobile"
        >
          <span>{{ showMobileFilter ? "Hide Filters" : "Show Filters" }}</span>
          <span class="toggle-icon">{{ showMobileFilter ? "▲" : "▼" }}</span>
        </div>

        <div
          class="filter-content"
          :class="{ 'mobile-hidden': isMobile && !showMobileFilter }"
        >
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
        </div>
      </aside>

      <!-- 主要内容区域 -->
      <main class="layout-main">
        <BreadcrumbNav :items="breadcrumbItems" />
        <slot />
      </main>
    </div>

    <!-- 页脚 -->
    <TheFooter />
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const route = useRoute();

// 面包屑导航数据
const breadcrumbItems = computed(() => {
  const items = [];
  const path = route.path;

  if (path.startsWith("/articles/")) {
    items.push({ label: "Articles", to: "/articles" });
    // 优先取页面 definePageMeta 中声明的 breadcrumb（与页面 H1 一致）
    const slug = path.split("/").pop();
    const articleTitle =
      route.meta.breadcrumb ||
      slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    items.push({ label: articleTitle });
  } else if (path === "/articles") {
    items.push({ label: "Articles" });
  } else if (path === "/about") {
    items.push({ label: "About Us" });
  }

  return items;
});

// 文章标签
const tags = [
  { label: "All", value: "all", icon: "📚" },
  { label: "Traditions", value: "traditions", icon: "🎎" },
  // { label: "Art", value: "art", icon: "🎨" },
  { label: "History", value: "history", icon: "📜" },
  { label: "Cuisine", value: "cuisine", icon: "🍜" },
  { label: "Philosophy", value: "philosophy", icon: "🧘" },
  { label: "Festival", value: "festival", icon: "🎆" },
  { label: "Family", value: "family", icon: "👪" },
];

// 选中的标签
const selectedTag = ref("all");
const showMobileFilter = ref(false);
const isMobile = ref(false);

// 检测屏幕尺寸
const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 768;
};

// 切换移动端过滤器显示状态
const toggleMobileFilter = () => {
  showMobileFilter.value = !showMobileFilter.value;
};

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

  // 在移动端点击后自动隐藏过滤器
  if (isMobile.value) {
    showMobileFilter.value = false;
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

  // 检查屏幕尺寸并设置监听器
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<style scoped>
.content-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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

.mobile-filter-toggle {
  display: none; /* 默认不显示 */
  padding: 0.8rem;
  background-color: #a62c21;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle-icon {
  font-size: 0.8rem;
}

.filter-content {
  width: 100%;
}

.filter-content.mobile-hidden {
  display: none;
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
  width: 100%; /* 确保按钮宽度为100% */
  box-sizing: border-box; /* 包含padding和border在宽度内 */
  word-break: break-word; /* 防止文本溢出 */
  white-space: normal; /* 允许文本换行 */
  min-height: 48px; /* 设置最小高度 */
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
  flex-shrink: 0; /* 图标不压缩 */
}

.layout-main {
  flex: 1;
  padding: 2rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    padding: 1rem;
    position: static;
    border-right: none;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
  }

  .mobile-filter-toggle {
    display: flex; /* 在移动端显示切换按钮 */
  }

  .filter-content {
    width: 100%;
  }

  .filter-content.mobile-hidden {
    display: none;
  }

  .layout-main {
    padding: 1.5rem;
  }

  .filter-btn {
    padding: 0.7rem 1rem; /* 减少内边距 */
    font-size: 0.9rem; /* 减小字体 */
    min-height: 44px; /* 调整最小高度 */
  }

  .filter-icon {
    min-width: 1.3rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .filter-btn {
    padding: 0.6rem 0.8rem; /* 进一步减少内边距 */
    font-size: 0.85rem; /* 进一步减小字体 */
    min-height: 40px; /* 进一步调整最小高度 */
  }

  .filter-icon {
    min-width: 1.2rem;
    font-size: 0.9rem;
  }

  .layout-main {
    padding: 1rem;
  }
}
</style>
