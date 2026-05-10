<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Chinese Calligraphy</h1>
      <p class="page-subtitle">
        Shū Fǎ - The Art of Beautiful Writing
      </p>
      <PageMeta>
        <MetaItem>🖌️ Brush Writing</MetaItem>
        <MetaItem>📜 Script Styles</MetaItem>
        <MetaItem>🏛️ Four Treasures</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/chinese-calligraphy.jpg"
      altText="Traditional Chinese calligraphy with brush, ink, and rice paper"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Chinese Calligraphy</strong> (书法, Shū Fǎ) is the art of
          writing Chinese characters with a brush and ink. More than just a
          form of writing, it is regarded as the highest form of visual art in
          Chinese culture — a discipline that combines aesthetics, philosophy,
          and expression in every brushstroke.
        </p>
        <p class="section-text">
          For over 3,000 years, calligraphy has been a revered practice in
          China, considered essential training for scholars, poets, and
          officials. The strokes of a single character can convey emotion,
          personality, and spiritual energy, making each work a unique
          reflection of the artist's mind and heart.
        </p>
      </section>

      <!-- 历史渊源 -->
      <section class="section">
        <h2 class="section-title">A 3,000-Year History</h2>
        <p class="section-text">
          Chinese calligraphy has evolved alongside Chinese civilization
          itself, with each dynasty contributing new styles and innovations:
        </p>
        <FeatureGrid>
          <FeatureItem title="Oracle Bone Script (甲骨文)" theme="red">
            <p>
              The earliest known Chinese writing, carved on turtle shells and
              animal bones during the Shang Dynasty (1600–1046 BCE). Used for
              divination and record-keeping, these characters are the
              ancestors of modern Chinese writing.
            </p>
          </FeatureItem>
          <FeatureItem title="Bronze Inscriptions (金文)" theme="gold">
            <p>
              Cast onto bronze ritual vessels during the Zhou Dynasty
              (1046–256 BCE), these characters evolved to be more structured
              and decorative, marking the transition from pictographs to a
              more standardized writing system.
            </p>
          </FeatureItem>
          <FeatureItem title="Seal Script (篆书)" theme="red">
            <p>
              Standardized under Qin Emperor Qin Shi Huang (221 BCE). The
              Prime Minister Li Si unified the writing system, creating Small
              Seal Script with elegant, symmetrical strokes. Still used today
              for seals and stamps.
            </p>
          </FeatureItem>
          <FeatureItem title="Clerical Script (隶书)" theme="gold">
            <p>
              Emerged during the Han Dynasty (206 BCE–220 CE). This was a
              revolutionary simplification — faster to write with flatter,
              more angular strokes. Clerical script made writing accessible
              beyond the scholar class.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 五大书体 -->
      <section class="section">
        <h2 class="section-title">The Five Major Script Styles</h2>
        <p class="section-text">
          Chinese calligraphy is traditionally divided into five major script
          styles, each with its own aesthetic and purpose:
        </p>
        <FeatureGrid>
          <FeatureItem title="Seal Script (篆书/Zhuàn Shū)" theme="red">
            <p>
              The oldest surviving style, characterized by rounded,
              symmetrical strokes of even thickness. Each character fits
              neatly into a square or rectangle. Used primarily for
              inscriptions on seals, monuments, and decorative art today.
            </p>
          </FeatureItem>
          <FeatureItem title="Clerical Script (隶书/Lì Shū)" theme="gray">
            <p>
              Known for its distinctive "silkworm head, wild goose tail"
              strokes — each horizontal stroke begins thick and ends with a
              dramatic flick. Flatter and wider than seal script, it marked a
              major step in the evolution of Chinese writing.
            </p>
          </FeatureItem>
          <FeatureItem title="Regular Script (楷书/Kǎi Shū)" theme="red">
            <p>
              The most recognizable and widely taught style. Each stroke is
              clear, separate, and carefully structured. Regular script is the
              standard for printing, education, and formal documents — the
              gateway for anyone learning calligraphy.
            </p>
          </FeatureItem>
          <FeatureItem title="Running Script (行书/Xíng Shū)" theme="gray">
            <p>
              A semi-cursive style where strokes flow into each other, but
              characters remain recognizable. Faster to write and more
              expressive than regular script. The most practical style for
              daily writing and personal correspondence.
            </p>
          </FeatureItem>
          <FeatureItem title="Cursive Script (草书/Cǎo Shū)" theme="red">
            <p>
              The most abstract and artistic style. Strokes are highly
              abbreviated and connected, often with characters merging into
              one another. Like a dancer's movement captured on paper, it
              prioritizes expression and energy over legibility.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 文房四宝 -->
      <section class="section">
        <h2 class="section-title">The Four Treasures of the Study</h2>
        <p class="section-text">
          Chinese calligraphy relies on four essential tools, known as the
          <strong>Four Treasures of the Study</strong> (文房四宝, Wén Fáng Sì
          Bǎo). Each is a world of craftsmanship in its own right:
        </p>
        <FeatureGrid>
          <FeatureItem title="Brush (笔/Bǐ)" theme="red">
            <p>
              Made from animal hair — goat, wolf, rabbit, or weasel — each
              offering different firmness and flexibility. A well-made brush
              can hold a precise point yet release ink in subtle gradients.
              The brush is considered the soul of calligraphy.
            </p>
          </FeatureItem>
          <FeatureItem title="Ink (墨/Mò)" theme="gray">
            <p>
              Traditionally made from pine soot or lampblack mixed with animal
              glue, formed into solid ink sticks. To prepare ink, the
              calligrapher grinds the stick against an inkstone with water — a
              meditative process that prepares the mind as much as the
              material.
            </p>
          </FeatureItem>
          <FeatureItem title="Paper (纸/Zhǐ)" theme="gold">
            <p>
              Xuan paper (宣纸), made from the bark of the blue sandalwood
              tree, is the gold standard. Its soft, absorbent fibers allow ink
              to spread naturally, creating the subtle gradations of tone that
              give calligraphy its depth and life.
            </p>
          </FeatureItem>
          <FeatureItem title="Inkstone (砚/Yàn)" theme="blue">
            <p>
              A carved stone slab used to grind ink sticks and mix ink with
              water. Duan inkstones (端砚), made from a specific stone in
              Guangdong, are the most prized. A good inkstone preserves the
              texture and consistency of the ink.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 名家介绍 -->
      <section class="section">
        <h2 class="section-title">Master Calligraphers</h2>
        <FeatureGrid>
          <FeatureItem title="Wang Xizhi (王羲之 303–361)" theme="red">
            <p>
              Revered as the "Sage of Calligraphy" (书圣), Wang Xizhi set the
              standard for artistic calligraphy. His masterpiece, the
              <strong>Preface to the Orchid Pavilion</strong> (兰亭序), written
              in running script, is considered the most famous piece of
              Chinese calligraphy ever created.
            </p>
          </FeatureItem>
          <FeatureItem title="Yan Zhenqing (颜真卿 709–785)" theme="gray">
            <p>
              A Tang Dynasty master known for his bold, dignified regular
              script. Yan's style — strong, upright, and powerful — reflected
              his character as a loyal statesman. His "Yan Style" remains one
              of the most widely studied calligraphy traditions.
            </p>
          </FeatureItem>
          <FeatureItem title="Liu Gongquan (柳公权 778–865)" theme="red">
            <p>
              Famous for his refined, elegant regular script. Liu's style is
              known as "bones" — lean, precise, and structurally perfect.
              Together with Yan Zhenqing, he forms the duo "Yan the Flesh,
              Liu the Bones" in calligraphy history.
            </p>
          </FeatureItem>
          <FeatureItem title="Su Shi (苏轼 1037–1101)" theme="gray">
            <p>
              One of China's greatest literary figures, Su Shi was also a
              brilliant calligrapher. His spontaneous, free-flowing running
              script embodied the Song Dynasty ideal of artistic
              self-expression over rigid technical perfection.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 当代意义 -->
      <section class="section">
        <h2 class="section-title">Calligraphy Today</h2>
        <p class="section-text">
          Despite the digital age, Chinese calligraphy remains a vibrant and
          cherished art form. Millions of people practice it as a hobby, a
          meditation, and a connection to cultural roots. Calligraphy is
          taught in schools across China, Japan, Korea, and increasingly in
          Western countries.
        </p>
        <p class="section-text">
          Modern calligraphers experiment with abstract forms, mixed media,
          and digital tools, while traditionalists preserve the classical
          techniques. Calligraphy has also influenced modern design — from
          typography and graphic design to fashion and architecture.
        </p>
        <FeatureGrid>
          <FeatureItem title="Mindfulness Practice" theme="red">
            <p>
              In a fast-paced world, calligraphy offers a meditative retreat.
              The slow, deliberate movements of brush and ink require complete
              presence of mind, making it a form of moving meditation that
              reduces stress and cultivates patience.
            </p>
          </FeatureItem>
          <FeatureItem title="Cultural Identity" theme="gold">
            <p>
              For Chinese people worldwide, calligraphy is a tangible link to
              thousands of years of cultural heritage. Practicing calligraphy
              is an act of preserving and celebrating Chinese identity in an
              increasingly globalized world.
            </p>
          </FeatureItem>
          <FeatureItem title="Modern Design" theme="gray">
            <p>
              The aesthetics of Chinese calligraphy have found new life in
              modern design — from logos and packaging to fashion and
              architecture. Brands around the world draw inspiration from the
              fluid lines and expressive power of calligraphic strokes.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 名言引用 -->
      <section class="section">
        <QuoteBox>
          "Calligraphy is the music of the eye, the dance of the brush on
          paper. Each stroke carries the rhythm of the heart and the
          spirit of the artist."
        </QuoteBox>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title:
    "Chinese Calligraphy | The Art of Brush and Ink — Chinese Culture Guide",
  description:
    "Discover the ancient art of Chinese calligraphy (书法). Explore 3,000 years of script evolution, the Five Major Styles, the Four Treasures of the Study, and legendary masters like Wang Xizhi.",
  ogTitle: "Chinese Calligraphy — The Art of Beautiful Writing",
  ogDescription:
    "Explore the history, styles, and masters of Chinese calligraphy, from oracle bones to modern ink art",
  ogType: "article",
  ogImage: "/assets/images/chinese-calligraphy.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Calligraphy — The Art of Beautiful Writing",
  twitterDescription:
    "Explore the history, styles, and masters of Chinese calligraphy",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Chinese Calligraphy — The Art of Brush and Ink",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Chinese Calligraphy — The Art of Beautiful Writing",
        description:
          "Comprehensive guide to Chinese calligraphy, its history, five major script styles, four treasures of the study, and famous calligraphers",
      }),
    },
  ],
});
</script>

<style scoped>
/* 页面布局 */
.content-page {
  max-width: 100%;
}

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
  margin-bottom: 1rem;
}

/* 内容 */
.content-body {
  max-width: 900px;
  margin: 0 auto;
}

.section {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.section:last-child {
  border-bottom: none;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #a62c21;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(166, 44, 33, 0.1);
}

.section-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
}
</style>
