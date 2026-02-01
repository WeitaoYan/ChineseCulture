<!-- components/TheNavbar.vue -->
<template>
  <header class="header">
    <nav class="navbar">
      <NuxtLink to="/" class="logo">
        <span class="logo-chinese">文化</span>
        <span class="logo-english">CULTURE</span>
      </NuxtLink>
      <ul class="nav-links">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/articles">Articles</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// 这里可以添加导航栏特定的逻辑
</script>

<style scoped>
/* 导航栏样式 */
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
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #333;
  flex-shrink: 0;
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
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  white-space: nowrap;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
    gap: 1rem;
  }

  .nav-links {
    gap: 1.2rem;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .logo {
    margin: 0 auto;
  }

  .logo-chinese {
    font-size: 1.8rem;
  }

  .logo-english {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .nav-links {
    gap: 1rem;
  }

  .nav-links a {
    font-size: 0.9rem;
    padding: 0.3rem 0;
  }

  .logo {
    gap: 0.3rem;
  }

  .logo-chinese {
    font-size: 1.6rem;
  }

  .logo-english {
    font-size: 0.9rem;
  }
}
</style>
