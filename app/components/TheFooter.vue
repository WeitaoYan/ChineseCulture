<template>
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
        </ul>
      </div>
      <div class="footer-section">
        <h3 class="footer-title">Connect</h3>
        <p>chinese-culture@ikber.cc</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        &copy; {{ new Date().getFullYear() }} Chinese Culture Explorer. All
        rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
// 页脚组件逻辑
</script>

<style scoped>
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
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer {
    padding: 2rem 1rem 1rem;
  }
}
</style>
