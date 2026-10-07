<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">The Eight Immortals Cross the Sea</h1>
      <p class="page-subtitle">
        Bā Xiān Guò Hǎi — Eight Immortals, Eight Treasures, One Legendary
        Crossing
      </p>
      <PageMeta>
        <MetaItem>🌊 Legendary Crossing</MetaItem>
        <MetaItem>⚔️ Eight Sacred Treasures</MetaItem>
        <MetaItem>🎭 Folk Legend &amp; Opera</MetaItem>
        <MetaItem>💬 A Living Idiom</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/eight-immortals-crossing.png"
      altText="Illustration of the Eight Immortals crossing the sea under a full moon, each standing on a magic treasure"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>The Eight Immortals Cross the Sea</strong> (八仙过海, Bā Xiān
          Guò Hǎi) is one of China's most beloved folk legends — the tale of
          eight Daoist immortals who refuse to fly over the ocean and instead
          cross it on their own magic treasures, each revealing a completely
          different kind of power. It is a story about individuality, equality,
          and the idea that there is more than one way to solve a problem.
        </p>
        <p class="section-text">
          Unlike most pantheons, the Eight Immortals are deliberately
          mismatched: an old man, a young woman, a crippled beggar, a ragged
          street musician, a scholar, a nobleman, a fat former general, and a
          boy flutist. They span every age, gender, and social class — rich and
          poor, noble and common — which is precisely the point. Legend holds
          that anyone, regardless of station, may cultivate the Dao and achieve
          immortality. The phrase born from their crossing,
          <em>八仙过海，各显神通</em> ("The Eight Immortals cross the sea, each
          revealing their divine power"), remains a everyday Chinese idiom for
          any group where everyone brings their own special skill to the task.
        </p>
      </section>

      <!-- 传说 -->
      <section class="section">
        <h2 class="section-title">The Legend</h2>
        <p class="section-text">
          The most familiar version of the tale comes from the Ming-dynasty
          novel <em>Journey to the East</em> (东游记) and centuries of opera,
          storytelling, and New Year prints. The eight immortals had gathered at
          the seaside pavilion of Penglai (蓬莱阁) in today's Shandong Province
          — the legendary threshold of the isles of the blessed — after
          celebrating a feast in heaven. Ahead of them lay the vast East Sea,
          and beyond it, home.
        </p>
        <p class="section-text">
          Someone suggested they simply fly across together. But Lü Dongbin, the
          scholar-immortal, proposed something bolder: each would cross on their
          own treasure, without relying on anyone else's magic. The others
          agreed. One by one they cast their treasures upon the waves — a gourd,
          a fan, a donkey, a sword, a lotus, a basket, a flute, a pair of jade
          castanets — and stepped aboard.
        </p>
        <p class="section-text">
          The crossing was anything but calm. Their churning treasures stirred
          the sea and shook the undersea palace of the Dragon King of the East.
          Furious at the disturbance, the Dragon King's third son rose from the
          depths and seized Lan Caihe, the young immortal in rags. The seven
          others attacked the underwater palace to rescue their companion, and
          the battle raged across sky and sea. In the end the Dragon King
          yielded, Lan Caihe was freed, and the eight immortals completed their
          crossing — each in a way only they could. Their wild, joyful scramble
          across the water became the image Chinese artists have painted for
          five hundred years.
        </p>
      </section>

      <!-- 八仙其人 -->
      <section class="section">
        <h2 class="section-title">Meet the Eight Immortals</h2>
        <p class="section-text">
          The group is often arranged by age, gender, and station to show that
          immortality belongs to everyone:
        </p>
        <FeatureGrid>
          <FeatureItem title="Iron-Crutch Li (铁拐李)" theme="gold">
            <p>
              A wandering, lame beggar with a dark complexion and a holy gourd
              at his side — said to contain medicine that cures every illness.
              According to legend he was once a handsome Daoist whose soul left
              his body during meditation; when his disciple accidentally burned
              the corpse, he had to inhabit the nearest available body: a
              freshly dead cripple's. He represents the poor and the sick, and
              is the patron saint of beggars and herbal healers.
            </p>
          </FeatureItem>
          <FeatureItem title="Han Zhongli (汉钟离)" theme="red">
            <p>
              A bare-chested, pot-bellied immortal fanning himself with a banana
              leaf fan, often shown laughing. Said to have been a Han dynasty
              general who deserted his army and wandered into the mountains,
              where he found the elixir of immortality. His fan can revive the
              dead and conjure wealth. He represents the powerful and the
              prosperous.
            </p>
          </FeatureItem>
          <FeatureItem title="Zhang Guolao (张果老)" theme="blue">
            <p>
              The white-bearded old man who rides his donkey
              <em>backwards</em> — explaining that he does not care to see the
              future, only to reflect on the past. His donkey can cover a
              thousand li a day; at nightfolded up like paper it fits in a
              bamboo tube. He represents old age, and his strange
              backwards-riding silhouette is one of the most recognizable in
              Chinese art.
            </p>
          </FeatureItem>
          <FeatureItem title="Lü Dongbin (吕洞宾)" theme="green">
            <p>
              The refined scholar-immortal with a demon-slaying sword at his
              hip, the most popular of the eight and the patron of barbers,
              scholars, and scholars-at-large. Once a failing civil-service
              candidate, he was awakened to immortality by a pot of wine that
              lasted through a dream of fifty years. He represents scholars and
              intellectuals.
            </p>
          </FeatureItem>
          <FeatureItem title="He Xiangu (何仙姑)" theme="yellow">
            <p>
              The only woman of the group, usually shown as a graceful young
              immortal holding a lotus blossom. A filial daughter of a
              peach-seller, she ate a peach pit given her by an old woman and
              rose to heaven — her lotus can cleanse the world of disease and
              grant long life. She represents women.
            </p>
          </FeatureItem>
          <FeatureItem title="Lan Caihe (蓝采和)" theme="gray">
            <p>
              A young street performer in ragged blue clothes, one foot bare,
              singing for coins in the marketplace and giving every coin to the
              poor before wandering off. Some depictions show the figure as
              androgynous or as a boy. Their flower basket is said to hold
              flowers that never wither — and, in the crossing story, it is Lan
              Caihe the Dragon King snatches from the waves.
            </p>
          </FeatureItem>
          <FeatureItem title="Han Xiangzi (韩湘子)" theme="blue">
            <p>
              The boyish immortal musician with a jade flute, shown mid-melody
              with birds and beasts gathered around him. Said to be the nephew
              of the great Confucian official Han Yu, he abandoned office for
              the mountains. His flute music charms all living creatures and can
              make flowers bloom out of season. He represents youth.
            </p>
          </FeatureItem>
          <FeatureItem title="Cao Guojiu (曹国舅)" theme="red">
            <p>
              The immaculate nobleman in a crimson court robe holding a pair of
              jade castanets (笏板). Legend says he was the brother of an
              empress who disgraced the family; renouncing his title, he
              cultivated the Dao on a quiet mountain until the other seven
              accepted him. He represents royalty and the noble class.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 各显神通 -->
      <section class="section">
        <h2 class="section-title">Each Reveals Their Power (各显神通)</h2>
        <p class="section-text">
          The heart of the legend is the crossing itself — eight treasures,
          eight solutions, no shared playbook:
        </p>
        <FeatureGrid>
          <FeatureItem title="🫙 The Magic Gourd" theme="gold">
            <p>
              Iron-Crutch Li steps onto his gourd, which bobs over the waves
              like a boat while dispensing healing smoke. The gourd (葫芦) is
              itself a symbol of healing and warding off evil in Chinese folk
              religion.
            </p>
          </FeatureItem>
          <FeatureItem title="🪭 The Banana Fan" theme="red">
            <p>
              Han Zhongli unfurls his fan, riding the gusts it raises — a
              reminder that a single small object, in the right hands, can move
              heaven and sea.
            </p>
          </FeatureItem>
          <FeatureItem title="The Backwards-Riding Donkey" theme="blue">
            <p>
              Zhang Guolao rides his paper donkey backwards across the water,
              facing the shore he left rather than the shore ahead — unhurried,
              unbothered, entirely his own pace.
            </p>
          </FeatureItem>
          <FeatureItem title="⚔️ The Demon-Quelling Sword" theme="green">
            <p>
              Lü Dongbin stands upon his sword as it skims the surface, the
              blade that has cut down demons now cutting a path through the sea.
            </p>
          </FeatureItem>
          <FeatureItem title="🌸 The Sacred Lotus" theme="yellow">
            <p>
              He Xiangu's lotus opens beneath her feet like a living raft, its
              petals glowing — purity itself staying dry above the storm.
            </p>
          </FeatureItem>
          <FeatureItem title="🧺 The Flower Basket" theme="gray">
            <p>
              Lan Caihe's basket overflows with blossoms that never fade and
              floats lightly over the waves — until the Dragon King's son drags
              it under.
            </p>
          </FeatureItem>
          <FeatureItem title="🎶 The Jade Flute" theme="blue">
            <p>
              Han Xiangzi does not ride at all: he plays, and the melody carries
              him — the only crossing made of music rather than matter.
            </p>
          </FeatureItem>
          <FeatureItem title="📿 The Jade Castanets" theme="red">
            <p>
              Cao Guojiu steps onto his court castanets, the symbol of his rank
              turned into the vessel of his freedom.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 文化影响 -->
      <section class="section">
        <h2 class="section-title">The Legend in Chinese Culture</h2>
        <p class="section-text">
          The crossing lives on far beyond the page. The saying
          <strong>八仙过海，各显神通</strong> is used constantly in modern
          Chinese — for a hackathon, a class project, a national team, any
          situation where a diverse group each brings a different strength to
          the same challenge. It celebrates competence without hierarchy: the
          beggar's gourd works as well as the nobleman's jade.
        </p>
        <p class="section-text">
          Artists love the story for its motion and variety. The Eight Immortals
          appear in woodblock New Year prints, temple carvings, porcelain,
          lacquerware, and countless opera stages — most famously in the Peking
          opera repertoire of
          <em>Eight Immortals Crossing the Sea</em> (八仙过海). A related motif,
          the "Hidden Eight Immortals" (暗八仙), depicts only their eight
          treasures — gourd, fan, donkey, sword, lotus, basket, flute, and
          castanets — which decorate furniture, textiles, and jewelry as a
          blessing of protection and longevity. The square
          <em>eight-immortal table</em> (八仙桌), seating eight guests, takes
          its name from the same circle, and the Penglai Pavilion where the
          legend begins still draws visitors on Shandong's coast today.
        </p>
        <p class="section-text">
          At its core the tale carries a quietly radical idea: that the road to
          the other shore is open to everyone, and that the most elegant
          solution is rarely the one everyone else is using.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "The Eight Immortals cross the sea — each reveals their own divine
          power."
          <template #author>— Chinese proverb (八仙过海，各显神通)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Eight Immortals Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "The Eight Immortals Cross the Sea",
  title:
    "The Eight Immortals Cross the Sea | Ba Xian Guo Hai — Chinese Culture Guide",
  description:
    "The Eight Immortals Cross the Sea (八仙过海) — the beloved legend of eight Daoist immortals crossing the ocean on magic treasures, the eight sacred tools, and the living Chinese idiom it gave the language.",
  ogTitle: "The Eight Immortals Cross the Sea (八仙过海)",
  ogDescription:
    "Eight immortals, eight treasures, one legendary crossing — the legend behind China's most famous idiom about everyone showing their own special power",
  ogType: "article",
  ogImage: "/assets/images/eight-immortals-crossing.png",
  twitterCard: "summary_large_image",
  twitterTitle: "The Eight Immortals Cross the Sea",
  twitterDescription:
    "Eight immortals, eight treasures, one legendary crossing — the legend behind the Chinese idiom 八仙过海，各显神通",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "The Eight Immortals Cross the Sea (八仙过海)",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "The Eight Immortals Cross the Sea",
        description:
          "A guide to the Chinese legend of the Eight Immortals crossing the sea (八仙过海), including the story, the eight immortals and their magic treasures, and the idiom 八仙过海，各显神通",
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
  color: #b8860b;
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
