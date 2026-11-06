<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Chinese Painting</h1>
      <p class="page-subtitle">
        Zhōngguó Huà — Mountains, Water, and the Spirit of the Brush
      </p>
      <PageMeta>
        <MetaItem>🖌️ Ink and Brush</MetaItem>
        <MetaItem>🏔️ Shan Shui Landscapes</MetaItem>
        <MetaItem>📜 Painting, Poetry &amp; Calligraphy</MetaItem>
        <MetaItem>🎨 A Thousand Years of Masters</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/chinese-painting.png"
      altText="Ink wash landscape painting of misty mountains, a small pavilion and pine trees in the Chinese shan shui style"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Chinese painting</strong> (中国画, Zhōngguó Huà) is one of
          the oldest continuous painting traditions in the world. Painted with
          brush and ink on silk or paper, it developed over more than two
          thousand years into an art that values the spirit of a subject as
          much as its outward appearance. A single brushstroke can suggest a
          mountain ridge, a pine branch, or a whole river — and the empty paper
          around it is as much a part of the picture as the ink itself.
        </p>
        <p class="section-text">
          Unlike Western oil painting, which traditionally builds up layers of
          colour to model light and shadow, Chinese painting is founded on the
          line. The brush, the same tool used for writing, is loaded with black
          ink and water; by changing its pressure, speed, and wetness, the
          painter creates an entire range of tones, from deep black to the
          palest grey wash. Colour, when it appears at all, is usually light
          and mineral-based — a touch of green, blue, or red over an ink
          drawing rather than a covering layer.
        </p>
        <p class="section-text">
          For the Chinese painter, a good painting does more than record what
          the eye sees. The classical ideal was to capture the
          <em>qi yun</em> (气韵), the "spirit resonance" of the subject — the
          living energy of a mountain, the character of a bamboo stalk, the
          mood of a misty morning. This idea, first set down in the 5th
          century, has guided Chinese painters ever since.
        </p>
      </section>

      <!-- 历史 -->
      <section class="section">
        <h2 class="section-title">A Brief History</h2>
        <p class="section-text">
          The earliest surviving Chinese paintings come from tombs of the Han
          dynasty (206 BCE – 220 CE). Silk banners found at Mawangdui, in
          present-day Changsha, were painted in the 2nd century BCE with
          scenes of the heavens, the underworld, and the life of the deceased
          — already showing the flowing lines and flat, decorative style that
          would shape later painting. Painted pottery, lacquer, and tomb murals
          from the same period show that brushwork was already a mature art.
        </p>
        <p class="section-text">
          During the Six Dynasties period (220–589 CE), painting became a
          subject of theory as well as practice. The painter Gu Kaizhi (c.
          344–406) is the earliest Chinese artist whose name and works are
          known to us; later copies of his handscroll
          <em>Admonitions of the Court Instructress</em> still survive. Around
          the same time, the critic Xie He set out six principles of painting,
          placing "spirit resonance" first — a ranking that Chinese critics
          never abandoned.
        </p>
        <p class="section-text">
          The Tang dynasty (618–907) brought figure painting to a peak under
          masters such as Wu Daozi, active in the 8th century and famed for
          the energy of his line, and Wang Wei (699–759), a poet, musician,
          and painter later credited as the founder of ink-wash landscape
          painting. In the Song dynasty (960–1279), landscape painting reached
          its classical height: the imperial painting academy produced
          monumental mountain scenes, while scholar-painters began to treat
          painting as a personal art rather than a professional craft.
        </p>
        <p class="section-text">
          Under the Yuan dynasty (1271–1368), when many scholars were barred
          from government service, painting became the refuge of the educated
          class. The so-called Four Masters of the Yuan — Huang Gongwang, Wu
          Zhen, Ni Zan, and Wang Meng — painted quiet, ink-wash landscapes
          that expressed the scholar's inner life rather than the grandeur of
          the court. Their example shaped the literati tradition of the Ming
          (1368–1644) and Qing (1644–1912) dynasties, and in the 20th century
          artists such as Qi Baishi and Xu Beihong carried Chinese painting
          into the modern world, one with playful ink shrimp and flowers, the
          other with powerful ink horses.
        </p>
      </section>

      <!-- 文房四宝 -->
      <section class="section">
        <h2 class="section-title">Ink, Brush, and the Four Treasures</h2>
        <p class="section-text">
          Chinese painting is made with the same tools as calligraphy, known
          together as the <strong>Four Treasures of the Study</strong>
          (文房四宝, Wén Fáng Sì Bǎo). The two arts share a single brush
          language, and for centuries a painter was judged first of all by the
          quality of their brushwork — a standard borrowed directly from
          writing. Our companion article on
          <NuxtLink to="/articles/chinese-calligraphy">Chinese calligraphy</NuxtLink>
          explores these tools in depth; here is what a painter needs from
          each of them:
        </p>
        <FeatureGrid>
          <FeatureItem title="🖌️ The Brush (笔)" theme="gold">
            <p>
              Brushes are made from animal hair — goat hair for soft, absorbent
              strokes, weasel or wolf hair for firm, springy ones — set in a
              bamboo handle. A good brush comes to a fine point, holds a large
              amount of ink, and springs back to shape after every stroke. The
              painter holds it upright and moves from the wrist and arm, so
              that the whole body is involved in a single line.
            </p>
          </FeatureItem>
          <FeatureItem title="🖋️ The Ink (墨)" theme="gray">
            <p>
              Ink comes as a solid stick of soot and glue, ground by hand with
              water on an inkstone until it reaches the right thickness. Pure
              black ink can be diluted into a scale of greys — the old saying
              is that ink alone contains five colours — and the painter controls
              tone by the amount of water in the brush.
            </p>
          </FeatureItem>
          <FeatureItem title="📄 The Paper (纸)" theme="blue">
            <p>
              Xuan paper (宣纸), made in Anhui Province from bark and straw,
              is the classic surface. Untreated, absorbent xuan paper drinks
              the ink at once, so every stroke is final — there is no painting
              over a mistake. Sized, less absorbent paper allows slower, more
              detailed work. Silk, the older surface, gives a smoother and
              more precise line.
            </p>
          </FeatureItem>
          <FeatureItem title="🪨 The Inkstone (砚)" theme="red">
            <p>
              The inkstone is a shallow slab of fine stone on which the ink
              stick is ground. Good stones have a fine, slightly rough surface
              that grinds smoothly without wearing down too fast, and the best
              have been collected and treasured as works of craft in their own
              right since the Song dynasty.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 山水画 -->
      <section class="section">
        <h2 class="section-title">Shan Shui: Painting Mountains and Water</h2>
        <p class="section-text">
          The most celebrated subject in Chinese painting is
          <strong>shan shui</strong> (山水), literally "mountain-water" —
          landscape. Mountains and water were not just scenery to the Chinese
          eye. In Daoist and Confucian thought, the mountain is the stable,
          enduring principle of the world, while water is the flowing, changing
          one; together they stand for the whole of nature, and for the
          balance of stillness and movement in human life.
        </p>
        <p class="section-text">
          A great shan shui painting is rarely a portrait of a real place.
          The painter builds an ideal landscape from remembered mountains,
          observed trees, and imagined mists, arranging them so that the
          viewer's eye can travel through the scene. The Song-dynasty painter
          Guo Xi (c. 1020–1090) described three ways of looking at a mountain
          in a painting: the <em>high distance</em>, looking up from below;
          the <em>deep distance</em>, looking through layer after layer of
          peaks; and the <em>level distance</em>, looking across misty water
          to a far shore. A single painting often combines all three, so that
          no single viewpoint can contain it.
        </p>
        <p class="section-text">
          Guo Xi also wrote that a landscape painting should be a place the
          viewer can walk in, look at, wander through, and live in — a
          painting to inhabit, not merely to look at. That is why tiny figures
          appear so often in these vast scenes: a fisherman in a boat, a
          traveller on a mountain path, a scholar in a pavilion. The figures
          are small, but they give the landscape its scale — and they invite
          the viewer to step inside.
        </p>
      </section>

      <!-- 文人画 -->
      <section class="section">
        <h2 class="section-title">Literati Painting and the Three Perfections</h2>
        <p class="section-text">
          From the Song dynasty onward, the most admired painters were often
          not professionals but scholar-officials who painted for themselves
          and their friends. This <strong>literati painting</strong> (文人画,
          Wén Rén Huà) valued personal expression over technical display: a
          scholar might paint a few stalks of bamboo or a gnarled old tree
          not to show off skill, but to show character — bamboo for uprightness
          and resilience, the plum blossom for purity in winter, the orchid
          for quiet refinement, the chrysanthemum for endurance in old age.
          Together these four plants are known as the "Four Gentlemen" of
          painting.
        </p>
        <p class="section-text">
          The Ming-dynasty critic Dong Qichang (1555–1636) gave this tradition
          its theory, dividing Chinese painting into a "Southern school" of
          scholar-amateurs, who painted from feeling and learning, and a
          "Northern school" of professional court painters, who painted with
          precise technique. The division was more a statement of values than
          a map of geography — and for the next three centuries, almost every
          serious painter in China positioned themselves within it.
        </p>
        <p class="section-text">
          Literati painting also gave Chinese art its most distinctive habit:
          the <strong>Three Perfections</strong> (三绝, Sān Jué). A single
          work could combine painting, calligraphy, and poetry — a landscape
          with a poem inscribed on it in the painter's own hand, the writing
          itself part of the composition. The painting, the poem, and the
          handwriting were judged together, as one work of art.
        </p>
      </section>

      <!-- 名家 -->
      <section class="section">
        <h2 class="section-title">Masters to Know</h2>
        <p class="section-text">
          A few names recur in every history of Chinese painting. Each of
          them changed what the art could do:
        </p>
        <FeatureGrid>
          <FeatureItem title="Gu Kaizhi (顾恺之, c. 344–406)" theme="gold">
            <p>
              The earliest named master in Chinese painting, active in the
              Eastern Jin dynasty. His figure paintings, known today through
              later copies such as the <em>Admonitions of the Court
              Instructress</em>, show a flowing, calligraphic line and a deep
              interest in character — he wrote that painting a person's spirit
              mattered more than painting their likeness.
            </p>
          </FeatureItem>
          <FeatureItem title="Wang Wei (王维, 699–759)" theme="blue">
            <p>
              Tang-dynasty poet, musician, and painter, traditionally credited
              with founding ink-wash landscape painting. His surviving works
              are known only through copies, but his reputation was enormous:
              the Song-dynasty writer Su Shi said of him that in his poetry
              there is painting, and in his painting there is poetry.
            </p>
          </FeatureItem>
          <FeatureItem title="Fan Kuan (范宽, c. 960–1030)" theme="green">
            <p>
              A Northern Song master of monumental landscape. His
              <em>Travelers Among Mountains and Streams</em> fills a tall
              hanging scroll with a single towering peak, waterfalls, and
              travellers so small they are almost lost at its foot — the
              classic image of humanity's smallness before nature.
            </p>
          </FeatureItem>
          <FeatureItem title="Guo Xi (郭熙, c. 1020–1090)" theme="gray">
            <p>
              Court painter to the Northern Song emperor Shenzong and author
              of <em>Lofty Message of Forests and Streams</em>, the great
              early treatise on landscape painting. His <em>Early Spring</em>
              shows a mountain range emerging from mist, and his theory of
              the three distances shaped how Chinese painters composed
              landscapes for centuries.
            </p>
          </FeatureItem>
          <FeatureItem title="Qi Baishi (齐白石, 1864–1957)" theme="red">
            <p>
              The most beloved painter of modern China. Born into a farming
              family, he worked as a carpenter before teaching himself
              painting, and became famous for fresh, playful ink studies of
              shrimp, frogs, birds, and flowers — painted with a few bold,
              wet strokes that look effortless and are anything but.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 技法 -->
      <section class="section">
        <h2 class="section-title">Blank Space, Seals, and Colophons</h2>
        <p class="section-text">
          Three habits make a Chinese painting look unlike a painting from
          anywhere else. The first is <strong>leaving blank space</strong>
          (留白, liú bái). Large areas of the paper are deliberately left
          empty, and the emptiness is not unfinished work — it is mist, water,
          sky, or simply the quiet that lets the painted part breathe. In the
          classical phrase, the white of the paper counts as a colour.
        </p>
        <p class="section-text">
          The second is the <strong>seal</strong> (印章). The painter stamps
          the finished work with a small red seal carved with their name or a
          studio name, usually in ancient seal script. Collectors, friends,
          and later owners add their own seals and inscriptions, so a famous
          old painting may carry a dozen red marks — a visible record of all
          the hands it has passed through.
        </p>
        <p class="section-text">
          The third is the <strong>colophon</strong> (题跋): a poem, a note,
          or a comment written directly onto the painting, often by the
          painter and sometimes by later admirers. On a handscroll, the
          colophons can grow longer than the painting itself, turning the
          work into a conversation across centuries.
        </p>
        <p class="section-text">
          Finally, the painting is mounted, not framed: a hanging scroll
          (立轴) for display on a wall, or a handscroll (手卷) that is unrolled
          section by section on a table and viewed slowly, from right to left.
          The mount — silk borders, wooden rollers, and end pieces — is part
          of the work, and a badly mounted painting was considered a damaged
          one.
        </p>
      </section>

      <!-- 与书法诗歌的关系 -->
      <section class="section">
        <h2 class="section-title">Painting, Calligraphy, and Poetry</h2>
        <p class="section-text">
          To understand Chinese painting, it helps to remember that it was
          never a separate art from writing. The brush that draws a bamboo
          leaf is the same brush that writes the character for bamboo, and
          the strokes of calligraphy — the press, the lift, the turn, the
          flick — are the strokes of painting. This is why Chinese art
          criticism has always judged a painter by their line before anything
          else, and why the greatest painters were so often also calligraphers
          and poets.
        </p>
        <p class="section-text">
          The partnership runs in both directions. Calligraphers learned
          composition from painting, painters learned rhythm from calligraphy,
          and poets supplied the subjects: a line of poetry could become a
          painting, and a painting could answer a poem. Our companion article
          on
          <NuxtLink to="/articles/chinese-calligraphy">Chinese calligraphy</NuxtLink>
          tells the story of the writing side of this partnership — the five
          script styles, the Four Treasures of the Study, and masters such as
          Wang Xizhi. Together, the two arts show how a single tool, the
          brush, shaped two thousand years of Chinese visual culture.
        </p>
        <p class="section-text">
          Today, Chinese painting is still practised in studios, schools, and
          art academies across China, and its ink-wash language has travelled
          around the world — influencing modern ink art, animation, and
          design far beyond its homeland. The mountain and the water are still
          there on the paper; the brush is still the way in.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "In Wang Wei's poetry there is painting, and in his painting there
          is poetry."
          <template #author>— Su Shi (1037–1101), on the poet-painter Wang Wei (诗中有画，画中有诗)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Chinese Painting Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "Chinese Painting",
  title: "Chinese Painting | Shan Shui, Ink Wash & Literati Art — Chinese Culture Guide",
  description:
    "Chinese painting (中国画) — the history of ink and brush painting from Han tomb silk to Song masters, shan shui landscapes, literati painting, the Four Treasures of the Study, and the bond between painting, calligraphy, and poetry.",
  ogTitle: "Chinese Painting (中国画)",
  ogDescription:
    "Mountains, water, and the spirit of the brush — the history, techniques, and masters of Chinese ink painting, from Wang Wei and Fan Kuan to Qi Baishi",
  ogType: "article",
  ogImage: "/assets/images/chinese-painting.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Painting",
  twitterDescription:
    "Mountains, water, and the spirit of the brush — the history, techniques, and masters of Chinese ink painting",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Chinese Painting (中国画)",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Chinese Painting",
        description:
          "A guide to Chinese painting (中国画), including its history from Han tomb silk to Song masters, shan shui landscape painting, literati painting and the Three Perfections, the Four Treasures of the Study, and its bond with calligraphy and poetry",
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
  border-bottom: 3px solid rgba(212, 175, 55, 0.2);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #b8860b;
  font-weight: 500;
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
  border-bottom: 2px solid rgba(212, 175, 55, 0.2);
}

.section-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.75rem;
  }
}
</style>
