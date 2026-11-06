<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">The Summer Palace</h1>
      <p class="page-subtitle">
        Yíhéyuán — The Garden of Nurtured Harmony in Beijing
      </p>
      <PageMeta>
        <MetaItem>🏛️ Imperial Garden</MetaItem>
        <MetaItem>🌊 Kunming Lake &amp; Longevity Hill</MetaItem>
        <MetaItem>🎨 The Long Corridor</MetaItem>
        <MetaItem>🏅 UNESCO World Heritage Site</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/summer-palace.png"
      altText="The Summer Palace in Beijing, the long corridor along Kunming Lake with Longevity Hill and the Tower of Buddhist Incense behind, in golden afternoon light"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>The Summer Palace</strong> (颐和园, Yíhéyuán — the Garden
          of Nurtured Harmony) is China's greatest imperial garden, a vast
          landscape of lake, hill, pavilions, and corridors on the northwestern
          edge of Beijing. Where the
          <NuxtLink to="/articles/forbidden-city">Forbidden City</NuxtLink>
          is the empire in stone — formal, symmetrical, and walled — the
          Summer Palace is the empire at leisure: a garden designed to look
          like a painting, where emperors escaped the summer heat, took the
          air on the lake, and walked among scenery borrowed from famous
          landscapes across China.
        </p>
        <p class="section-text">
          The garden covers about 290 hectares, three-quarters of it water.
          Kunming Lake spreads out at the foot of Longevity Hill like a
          mirror, crossed by bridges and dotted with islands, while temples
          and pavilions climb the hillside above. It has been a UNESCO World
          Heritage Site since 1998, recognised as a masterpiece of Chinese
          landscape garden design — and it remains one of Beijing's most
          beloved places to wander.
        </p>
      </section>

      <!-- 历史 -->
      <section class="section">
        <h2 class="section-title">From Qingyi Garden to the Summer Palace</h2>
        <p class="section-text">
          The garden began as the Garden of Clear Ripples (清漪园, Qīngyī
          Yuán), built by the Qianlong Emperor from 1750. Qianlong ordered
          it to celebrate the 60th birthday of his mother, the Empress
          Dowager Chongqing, and he poured the resources of the empire into
          it: the lake was dredged and enlarged, the hill was planted and
          crowned with temples, and scenery was modelled on famous views
          from the south — the causeways of West Lake in Hangzhou, the
          gardens of Suzhou.
        </p>
        <p class="section-text">
          In 1860, during the Second Opium War, Anglo-French forces burned
          the garden to the ground, along with the Old Summer Palace nearby.
          For a generation it lay in ruins. Then, in the 1880s, the Empress
          Dowager Cixi ordered it rebuilt — using funds set aside for the
          navy, a decision that still draws criticism from historians — and
          in 1888 she renamed it the Garden of Nurtured Harmony (颐和园),
          the name it carries today. Cixi spent her summers here, holding
          court on the lake, and the Marble Boat that still stands by the
          shore dates from her rebuilding.
        </p>
        <p class="section-text">
          The garden was damaged again in 1900, during the Boxer Rebellion,
          and rebuilt once more in the years that followed. After the fall
          of the Qing dynasty in 1912, the last emperor Puyi lived for a
          time in the palace grounds, and in 1924 the garden was opened to
          the public as a park. It has been open to visitors ever since,
          and in 1998 UNESCO inscribed it on the World Heritage List as an
          outstanding example of Chinese garden art.
        </p>
      </section>

      <!-- 园内漫步 -->
      <section class="section">
        <h2 class="section-title">A Walk Through the Garden</h2>
        <p class="section-text">
          The garden is arranged around two great elements: water below and
          hill above. Six places capture it best:
        </p>
        <FeatureGrid>
          <FeatureItem title="Kunming Lake (昆明湖)" theme="blue">
            <p>
              The garden's mirror. Qianlong dredged the old West Lake and
              enlarged it into a lake of about 220 hectares, so large that
              the garden feels like a lakeside resort. Boats cross it in
              summer, skaters glide on it in winter, and the Seventeen-Arch
              Bridge links its southern shore to Nanhu Island, where a
              small temple and the bronze ox watch the water.
            </p>
          </FeatureItem>
          <FeatureItem title="Longevity Hill (万寿山)" theme="green">
            <p>
              The hill that rises above the lake, planted with pine and
              cypress and crowned with temples. Its name — the Hill of
              Ten Thousand Years of Longevity — was Qianlong's wish for his
              mother's long life. Climbing it gives the classic view of
              the garden: lake below, pavilions scattered along the shore,
              and the whole composition laid out like a painting.
            </p>
          </FeatureItem>
          <FeatureItem title="The Long Corridor (长廊)" theme="gold">
            <p>
              The most famous walkway in China: a covered corridor 728
              metres long, running along the northern shore of Kunming
              Lake at the foot of Longevity Hill. Its beams are decorated
              with more than 14,000 painted scenes — landscapes, flowers
              and birds, stories from history and legend, scenes from
              the classic novel <em>Journey to the West</em> — so that a
              walk through the corridor is also a walk through Chinese
              painting.
            </p>
          </FeatureItem>
          <FeatureItem title="The Marble Boat (石舫)" theme="gray">
            <p>
              A two-storey pavilion built to look like a boat, standing in
              the lake at the western end of the Long Corridor. The first
              version was wood; Cixi rebuilt it in marble in 1893. It has
              become the garden's most famous symbol — and, for many
              Chinese, a wry emblem of the late Qing dynasty: a boat of
              stone that can never sail.
            </p>
          </FeatureItem>
          <FeatureItem title="The Tower of Buddhist Incense (佛香阁)" theme="red">
            <p>
              The tall eight-sided tower that crowns Longevity Hill, the
              highest point of the garden. Its three tiers of eaves rise
              above the trees and can be seen across the lake. Inside
              stands a thousand-handed statue of the bodhisattva Guanyin.
              Climb to its terrace, and the whole of the Summer Palace —
              lake, bridges, and gardens — opens out below.
            </p>
          </FeatureItem>
          <FeatureItem title="The Seventeen-Arch Bridge (十七孔桥)" theme="blue">
            <p>
              The longest bridge in the garden, with seventeen arches
              spanning the water to Nanhu Island. Its balustrades are
              carved with more than 500 small stone lions, each one
              different. On the winter solstice, the setting sun shines
              through all seventeen arches at once, a sight that draws
              crowds of photographers every year.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          Together, these six places form a single composition. Stand on
          the Seventeen-Arch Bridge and look north, and the Tower of
          Buddhist Incense rises over Longevity Hill; stand on the tower
          and look south, and Kunming Lake spreads out to the horizon.
          The garden was designed so that every viewpoint would frame
          another, like a series of paintings hung along a walk — which
          is exactly what the Long Corridor, with its 14,000 painted
          scenes, does for the wall of the walkway itself.
        </p>
      </section>

      <!-- 艺术与象征 -->
      <section class="section">
        <h2 class="section-title">Art and Symbolism</h2>
        <p class="section-text">
          The Summer Palace is a garden built from borrowed scenery. Its
          designers copied the causeways of West Lake in Hangzhou, the
          lakeside pavilions of Suzhou, and the towered hills of famous
          landscapes, then arranged them around their own lake and hill so
          that every view would feel both familiar and new. Chinese garden
          design calls this <em>jiejing</em> (借景) — borrowed scenery —
          and the Summer Palace is its grandest example.
        </p>
        <p class="section-text">
          The garden is also full of meaning. Longevity Hill and Kunming
          Lake are named for long life and good harvests. The painted
          scenes of the Long Corridor teach history and morality as you
          walk. Even the Marble Boat carries a message: Cixi, who rebuilt
          the garden, knew the old saying that water can float a boat and
          water can overturn it — a warning to rulers about the power of
          the people. Whether she took the warning to heart is another
          question.
        </p>
        <p class="section-text">
          The same taste for symbolism runs through the
          <NuxtLink to="/articles/temple-of-heaven">Temple of Heaven</NuxtLink>,
          the other great imperial site in Beijing: where the Temple of
          Heaven uses circles and numbers to speak of the cosmos, the
          Summer Palace uses hills and water to speak of harmony.
        </p>
      </section>

      <!-- 游览 -->
      <section class="section">
        <h2 class="section-title">Visiting Today</h2>
        <p class="section-text">
          The Summer Palace is easiest to reach by subway — Beigongmen
          station on Line 4 brings you to the north gate, closest to the
          Long Corridor and the Tower of Buddhist Incense. Come early in
          the morning, when the lake is still and the tour groups have
          not yet arrived, or late in the afternoon, when the low sun
          turns the hill gold.
        </p>
        <p class="section-text">
          Plan for at least half a day. A good route is to enter by the
          east gate, walk the Long Corridor from east to west, climb
          Longevity Hill to the Tower of Buddhist Incense, then take a
          boat across Kunming Lake to Nanhu Island and walk back over the
          Seventeen-Arch Bridge. In summer, the lotus blooms across the
          western part of the lake; in winter, the frozen lake fills with
          skaters. Each season gives the garden a different painting to
          walk through.
        </p>
        <p class="section-text">
          Boats are part of the experience, not just a shortcut. Ferries
          and painted pleasure boats cross Kunming Lake between the
          Long Corridor, Nanhu Island, and the western shore, and the
          view from the water — the hill rising over the corridor, the
          tower against the sky — is the view the garden's designers
          intended. It is the closest a visitor can come to seeing the
          Summer Palace as the court saw it, from the lake rather than
          the shore.
        </p>
      </section>

      <!-- 慈禧与颐和园 -->
      <section class="section">
        <h2 class="section-title">The Court on the Lake</h2>
        <p class="section-text">
          The Summer Palace as visitors see it today is largely Cixi's
          garden. From the late 1880s until her death in 1908, the
          Empress Dowager spent her summers here, and the garden was
          arranged around her daily life. She held audiences in the
          Hall of Benevolence and Longevity by the eastern shore, took
          the air in boats on Kunming Lake, and watched opera on the
          grand three-storey stage in the Garden of Virtue and Harmony
          (德和园), the theatre quarter built into the garden's eastern
          side.
        </p>
        <p class="section-text">
          Life at the Summer Palace was a performance in itself. In the
          morning, Cixi would be carried in a sedan chair along the
          lakeside; in the afternoon, she might watch a play, stroll the
          Long Corridor, or take a dragon boat across the lake as
          eunuchs and courtiers followed along the shore. Foreign
          visitors who were received here — among them the wives of
          diplomats in the last years of the dynasty — described a
          court that was at once formal and relaxed, with the garden
          itself as the stage set.
        </p>
        <p class="section-text">
          This is part of why the garden feels different from the
          Forbidden City. The Forbidden City was built to impress; the
          Summer Palace was built to be lived in. Its buildings are
          scattered among hills and water rather than lined up on a
          single axis, and its pleasures — a boat ride, a walk under
          painted beams, a view from a hilltop pavilion — are pleasures
          a visitor can still share today, in much the same way the
          court once did.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "Yiheyuan — the Garden of Nurtured Harmony: a name that promises
          rest for the body and peace for the mind."
          <template #author>— The meaning of Yiheyuan (颐和园)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Summer Palace Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "The Summer Palace",
  title: "The Summer Palace | Yiheyuan — The Garden of Nurtured Harmony",
  description:
    "The Summer Palace (颐和园) in Beijing — Qianlong's Qingyi Garden, rebuilt by Empress Dowager Cixi, home to Kunming Lake, the Long Corridor, the Marble Boat and the Tower of Buddhist Incense, a UNESCO World Heritage Site since 1998.",
  ogTitle: "The Summer Palace (颐和园)",
  ogDescription:
    "Kunming Lake, Longevity Hill and the 728-metre Long Corridor — the story of Beijing's Summer Palace, China's greatest imperial garden",
  ogType: "article",
  ogImage: "/assets/images/summer-palace.png",
  twitterCard: "summary_large_image",
  twitterTitle: "The Summer Palace",
  twitterDescription:
    "Kunming Lake, Longevity Hill and the Long Corridor — the story of Beijing's Summer Palace, a UNESCO World Heritage Site",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "The Summer Palace (颐和园)",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "The Summer Palace",
        description:
          "A guide to the Summer Palace (颐和园) in Beijing, including its history from Qianlong's Qingyi Garden to Empress Dowager Cixi's rebuilding, Kunming Lake, Longevity Hill, the Long Corridor, the Marble Boat and the Tower of Buddhist Incense",
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
