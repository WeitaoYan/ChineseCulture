<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Chinese Kung Fu</h1>
      <p class="page-subtitle">
        Gōngfu — A Thousand Years of Discipline, from Shaolin to the World
      </p>
      <PageMeta>
        <MetaItem>🥋 Skill Through Effort</MetaItem>
        <MetaItem>🏯 Shaolin Temple</MetaItem>
        <MetaItem>🐉 North and South Styles</MetaItem>
        <MetaItem>🌍 A Global Phenomenon</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/kung-fu.png"
      altText="A Shaolin monk practicing kung fu in a mountain temple courtyard at sunrise"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Chinese kung fu</strong> (功夫, Gōngfu) is one of the most
          famous exports of Chinese culture — yet the word itself is often
          misunderstood. In Chinese, <em>gongfu</em> does not mean "martial
          arts" at all. It means skill acquired through long, patient
          effort: a master calligrapher has gongfu, and so does a great
          chef. The martial arts are properly called <em>wushu</em> (武术),
          but the world has come to know them by the Cantonese pronunciation
          of gongfu — and the name has stuck.
        </p>
        <p class="section-text">
          At its heart, kung fu is a discipline of the whole person. A
          student trains the body through forms, stances, and sparring;
          trains the mind through patience, humility, and respect for the
          teacher; and trains the character through years of repetition.
          The famous saying in Chinese martial arts circles is that kung fu
          is "ten years out of the door" — it takes a decade of practice
          before the art truly begins to show. There are no shortcuts, and
          that is the point.
        </p>
        <p class="section-text">
          Over more than a thousand years, hundreds of styles have grown
          across China — from the monks of Shaolin Temple to the dockworkers
          of Guangdong, from the imperial guards of Beijing to village
          schools in Fujian. Some are hard and explosive, others soft and
          internal; some fight with fists, others with swords, spears, and
          staffs. Together they form one of the richest martial traditions
          in the world.
        </p>
      </section>

      <!-- 少林寺 -->
      <section class="section">
        <h2 class="section-title">Shaolin Temple and the Bodhidharma Legend</h2>
        <p class="section-text">
          No place is more central to the story of kung fu than the Shaolin
          Temple (少林寺), founded in 495 CE on Mount Song in Henan
          Province, during the Northern Wei dynasty. Built for Buddhist
          monks, the temple became famous for something its founders never
          planned: warrior monks.
        </p>
        <p class="section-text">
          According to legend, the Indian monk Bodhidharma (菩提达摩)
          arrived at Shaolin in the early 6th century and, finding the
          monks too weak from long hours of seated meditation to sustain
          their practice, taught them a set of exercises to strengthen
          their bodies — the so-called Eighteen Luohan Hands. The legend
          continues that Bodhidharma then spent nine years facing a cave
          wall in meditation. Historians treat this as legend rather than
          documented fact: the earliest reliable records of Shaolin monks
          fighting come much later, from the Tang dynasty, when the monks
          famously helped the future emperor Li Shimin in battle around
          621 CE. But the legend captures something true about Shaolin —
          the idea that martial training and spiritual cultivation belong
          together.
        </p>
        <p class="section-text">
          Over the centuries, Shaolin developed its own complete system:
          empty-hand forms, staff and sword, the demanding "72 arts," and
          the famous one-finger and iron-body training that still draws
          crowds today. The temple was burned and rebuilt several times —
          most dramatically in the 1920s during China's warlord era — and
          each time the monks returned. Today Shaolin is both a working
          monastery and a global school, with tens of thousands of
          students training in its shadow.
        </p>
      </section>

      <!-- 南北流派 -->
      <section class="section">
        <h2 class="section-title">North and South: Two Great Traditions</h2>
        <p class="section-text">
          Chinese martial arts are traditionally divided into northern and
          southern schools, shaped by the different landscapes and lives
          of the people who created them. The old saying goes: "Northern
          legs, Southern fists" (北腿南拳).
        </p>
        <p class="section-text">
          Northern styles grew up on the wide plains of the north, where
          open ground and horseback culture favoured long, extended
          movements, high kicks, and acrobatic leaps. A northern fighter
          covers distance quickly and attacks from range. Southern styles
          developed in the crowded river towns and boats of Guangdong and
          Fujian, where there was little room to move: they favour short,
          powerful hand techniques, stable low stances, and close-range
          fighting — a fighter who cannot step back learns to stand firm.
        </p>
        <p class="section-text">
          The division is a useful guide rather than a strict rule — many
          styles mix both — but it explains why two kung fu schools can
          look so different while sharing the same roots. Both traditions
          also divide into "external" (外家) styles, which emphasize
          strength, speed, and physical conditioning, and "internal"
          (内家) styles, which emphasize relaxation, breath, and internal
          energy. <em>Tai chi</em>, covered in our companion article on
          <NuxtLink to="/articles/tai-chi">Tai Chi</NuxtLink>, is the most
          famous of the internal arts.
        </p>
      </section>

      <!-- 著名流派 -->
      <section class="section">
        <h2 class="section-title">Famous Styles</h2>
        <p class="section-text">
          Of the hundreds of recorded styles, a handful have become famous
          far beyond China:
        </p>
        <FeatureGrid>
          <FeatureItem title="🥋 Shaolin (少林)" theme="red">
            <p>
              The oldest and most famous school, from the Shaolin Temple
              on Mount Song. Hard, direct, and athletic, with hundreds of
              empty-hand and weapon forms. Its animal forms — tiger,
              leopard, crane, snake, and dragon — imitate the movements of
              animals, a training method that spread to many other styles.
            </p>
          </FeatureItem>
          <FeatureItem title="🐍 Wing Chun (咏春)" theme="gold">
            <p>
              A southern style from Guangdong, said to have been created by
              a Buddhist nun, Ng Mui, and named after her disciple Yim Wing
              Chun. Compact and economical, it fights at close range with
              rapid chain punches and the centreline principle — and with
              the wooden dummy (木人桩) as its signature training tool. Its
              most famous student was Bruce Lee.
            </p>
          </FeatureItem>
          <FeatureItem title="🐅 Hung Gar (洪家)" theme="blue">
            <p>
              A southern style founded by Hung Hei-gun, a tea merchant
              turned fighter of the Qing dynasty, and systematized by the
              19th-century master Wong Fei-hung. Famous for its deep
              stances, powerful tiger-claw hand, and the iron-wire form —
              and for Wong Fei-hung himself, who became a folk hero through
              dozens of films.
            </p>
          </FeatureItem>
          <FeatureItem title="⚡ Bajiquan (八极拳)" theme="green">
            <p>
              "Eight extremes fist," a northern style from Hebei known for
              explosive, close-range power: elbow strikes, shoulder bumps,
              and sudden bursts delivered from a stable stance. Once the
              art of imperial bodyguards, it is famously direct — one of
              its sayings is that it does not chase the opponent, but
              meets them head-on.
            </p>
          </FeatureItem>
          <FeatureItem title="🪭 Bagua &amp; Xingyi" theme="yellow">
            <p>
              Two internal northern arts, often taught alongside tai chi.
              Baguazhang (八卦掌) is built on circle-walking — the
              practitioner moves constantly around an opponent, striking
              from unexpected angles. Xingyiquan (形意拳) is the opposite:
              direct, linear, and aggressive, its five element fists
              driving straight forward like a spear.
            </p>
          </FeatureItem>
          <FeatureItem title="🦅 Choy Li Fut (蔡李佛)" theme="gray">
            <p>
              A southern style founded in the 1830s by Chan Heung, who
              combined three family systems into one. Known for its wide,
              sweeping arm techniques — said to be inspired by the swing of
              a basket on a carrying pole — it spread from Guangdong to
              Southeast Asia and the Americas with the Chinese diaspora.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 现代武术 -->
      <section class="section">
        <h2 class="section-title">Wushu: Kung Fu as Modern Sport</h2>
        <p class="section-text">
          In the 20th century, the Chinese government set out to turn the
          scattered family styles of wushu into a standardized national
          sport. The result, modern <em>wushu</em>, has two sides:
          <em>taolu</em> (套路), the performance of choreographed forms
          judged on difficulty and artistry, and <em>sanda</em> (散打),
          full-contact sparring with punches, kicks, throws, and
          takedowns.
        </p>
        <p class="section-text">
          Modern wushu athletes perform feats that look almost superhuman:
          spinning kicks, aerial flips, and gravity-defying jumps, often
          with swords and spears. It is spectacular — and controversial.
          Traditionalists argue that standardization polished away the
          practical fighting content of the old styles, while supporters
          say it saved them: by the early 20th century, many family styles
          were dying out with their last masters, and wushu gave them a
          future in schools and competitions. Wushu is now practiced in
          more than 100 countries, and its governing body continues to
          campaign for a place in the Olympic Games.
        </p>
      </section>

      <!-- 走向世界 -->
      <section class="section">
        <h2 class="section-title">Kung Fu Goes Global</h2>
        <p class="section-text">
          Kung fu first reached the West with Chinese migrants in the 19th
          century, but it stayed largely within overseas Chinese
          communities for a hundred years. That changed in the 1970s,
          when Hong Kong cinema carried it to the world. Films like
          <em>Five Deadly Venoms</em>, <em>The 36th Chamber of Shaolin</em>,
          and the Shaw Brothers epics made the sounds of the training hall
          familiar everywhere — and made kung fu a global fashion.
        </p>
        <p class="section-text">
          The figure who did the most to spread it was Bruce Lee (李小龙,
          1940–1973). Born in San Francisco and raised in Hong Kong, Lee
          studied Wing Chun under the master Ip Man, then developed his
          own philosophy, Jeet Kune Do, and became a film star with
          <em>The Big Boss</em> (1971), <em>Fist of Fury</em> (1972), and
          <em>Enter the Dragon</em> (1973) — released just weeks after his
          sudden death at the age of 32. Lee's speed, physical presence,
          and insistence that martial arts were a philosophy of
          self-expression, not just fighting, turned kung fu from a niche
          interest into a worldwide phenomenon. Schools opened in every
          major city; a generation of children grew up imitating his
          moves.
        </p>
        <p class="section-text">
          Today kung fu lives many lives at once: a monastery tradition at
          Shaolin, a competitive sport in wushu, a health practice in
          parks, a film genre, and a path of personal discipline for
          millions of students around the world. The styles differ, but
          the idea behind them has not changed in a thousand years: that
          mastery is not a talent you are born with, but a skill you earn
          — one repetition at a time.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "Be water, my friend."
          <template #author>— Bruce Lee (李小龙)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Kung Fu Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "Chinese Kung Fu",
  title: "Chinese Kung Fu | Gōngfu — From Shaolin to the World",
  description:
    "Chinese kung fu (功夫) — what gongfu really means, the Shaolin Temple and the Bodhidharma legend, northern and southern styles, Wing Chun, Hung Gar, Bajiquan, modern wushu, and how Bruce Lee carried kung fu to the world.",
  ogTitle: "Chinese Kung Fu (功夫) — From Shaolin to the World",
  ogDescription:
    "Kung fu, from the monks of Shaolin to Bruce Lee: the styles, the legends, and the discipline behind China's most famous martial art",
  ogType: "article",
  ogImage: "/assets/images/kung-fu.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Kung Fu",
  twitterDescription:
    "Kung fu, from the monks of Shaolin to Bruce Lee: the styles, the legends, and the discipline behind China's most famous martial art",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Chinese Kung Fu (功夫) — From Shaolin to the World",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Chinese Kung Fu",
        description:
          "A guide to Chinese kung fu (功夫): the meaning of gongfu, Shaolin Temple and the Bodhidharma legend, northern and southern styles, famous schools including Wing Chun and Hung Gar, modern wushu, and kung fu's spread around the world",
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
</style>
