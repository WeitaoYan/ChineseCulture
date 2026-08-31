<template>
  <div class="google-ad">
    <ins
      class="adsbygoogle"
      style="display: block; text-align: center;"
      data-ad-client="ca-pub-7935584531479999"
      data-ad-slot="4863755884"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>

<script setup>
onMounted(async () => {
  // 等待 AdSense 脚本加载完成
  await nextTick();

  const pushAd = () => {
    if (window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        // 广告脚本未加载或已禁用时静默失败，不影响页面内容
        console.error("Google AdSense load error:", error);
      }
    } else {
      // 脚本尚未加载，延迟重试
      setTimeout(pushAd, 500);
    }
  };

  pushAd();
});
</script>

<style scoped>
.google-ad {
  margin: 1.5rem 0;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.adsbygoogle {
  display: block;
  min-height: 250px;
  width: 100%;
}
</style>
