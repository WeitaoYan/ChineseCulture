<template>
  <div class="home-layout">
    <!-- 导航栏 -->
    <header class="header">
      <nav class="navbar">
        <NuxtLink to="/" class="logo">
          <span class="logo-chinese">文化</span>
          <span class="logo-english">CULTURE</span>
        </NuxtLink>
        <ul class="nav-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/articles">Articles</NuxtLink></li>
        </ul>
      </nav>
    </header>
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
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Chinese Culture</h3>
          <p>Exploring the rich traditions and heritage of China since 2023.</p>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Quick Links</h3>
          <ul class="footer-links">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/traditions">Traditions</NuxtLink></li>
            <li><NuxtLink to="/art">Art</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Connect</h3>
          <p>Stay updated with our latest discoveries and events.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          &copy; {{ new Date().getFullYear() }} Chinese Culture Explorer. All
          rights reserved.
        </p>
      </div>
    </footer>
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #faf9f7;
  color: #333;
  position: relative;
  overflow-x: hidden;
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

/* 导航栏 */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #333;
}

.logo-chinese {
  font-family: "Noto Serif SC", serif;
  font-size: 2rem;
  color: #a62c21;
  font-weight: bold;
}

.logo-english {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #333;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a:hover,
.nav-links a.nuxt-link-exact-active {
  color: #a62c21;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a62c21;
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.nuxt-link-exact-active::after {
  width: 100%;
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

/* 页脚 */
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #a62c21, #d4af37, #2ecc71, #3498db);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #d4af37;
}

.footer-section p,
.footer-section a {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  text-decoration: none;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a:hover {
  color: #d4af37;
  transition: color 0.3s ease;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .navbar {
    padding: 1rem;
  }

  .main-content {
    padding: 2rem 1rem;
  }
}
</style>
