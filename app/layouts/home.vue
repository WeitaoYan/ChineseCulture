<template>
  <div class="home-layout">
    <!-- 导航栏 -->
    <TheNavbar />
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">Discover Chinese Traditional Culture</h1>
        <p class="hero-subtitle">
          Explore the rich heritage and timeless traditions of China
        </p>
      </div>
    </section>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <slot />
    </main>

    <!-- 页脚 -->
    <TheFooter />
  </div>
</template>

<script setup>
// 可以在这里添加布局特定的逻辑
</script>

<style scoped>
/* 全局样式重置和基础设置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 英雄区域 */
.hero {
  height: 80vh;
  background:
    linear-gradient(rgba(166, 44, 33, 0.4), rgba(212, 175, 55, 0.3)),
    url("https://images.unsplash.com/photo-1516949085976-f23fd3e0a885?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  animation: heroBackground 20s ease-in-out infinite alternate;
}

@keyframes heroBackground {
  0% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 50% 60%;
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(166, 44, 33, 0.3) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.3rem;
  font-weight: 300;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* 主要内容区域 */
.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  width: 100%;
  position: relative;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .main-content {
    padding: 2rem 1rem;
  }
}
</style>
