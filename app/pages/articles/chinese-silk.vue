<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Chinese Silk</h1>
      <p class="page-subtitle">
        Sīchóu — Five Thousand Years of Thread, Loom, and Legend
      </p>
      <PageMeta>
        <MetaItem>🐛 The Silkworm's Gift</MetaItem>
        <MetaItem>🧵 Sericulture &amp; Weaving</MetaItem>
        <MetaItem>🗺️ Silk on the Silk Road</MetaItem>
        <MetaItem>🎨 Embroidery &amp; Art</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/chinese-silk.png"
      altText="Colourful embroidered Chinese silk fabrics, silk scrolls and silkworm cocoons on a wooden table"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Chinese silk</strong> (丝绸, sīchóu) is one of the oldest and
          most admired textiles in the world. For thousands of years, China
          was the only place on earth that knew how to make it — a soft,
          shimmering cloth woven from the thread of a single insect, the
          silkworm. Silk dressed emperors, carried paintings and poems,
          furnished palaces, and gave its name to the most famous trade route
          in history, the Silk Road.
        </p>
        <p class="section-text">
          Archaeologists have found silk fragments in China dating back
          roughly five thousand years, to the Neolithic period. By the Shang
          dynasty (circa 1600–1046 BCE), silk weaving was already a skilled
          craft, and by the Han dynasty (206 BCE–220 CE) it had become a
          pillar of the Chinese economy, a form of money, and a diplomatic
          gift. To own silk in the ancient world was to own a piece of China
          itself — so precious that for centuries the secret of how it was
          made was guarded as a state treasure.
        </p>
      </section>

      <!-- 传说 -->
      <section class="section">
        <h2 class="section-title">The Legend of Leizu</h2>
        <p class="section-text">
          According to legend, silk was discovered by
          <strong>Leizu</strong> (嫘祖), wife of the Yellow Emperor
          (黄帝), the mythical founder of Chinese civilisation. The story
          says that one day, while drinking tea beneath a mulberry tree, a
          silkworm cocoon fell from the branches into her cup. As she fished
          it out, the cocoon began to unravel in the hot water into a single
          long, glistening thread — and Leizu realised that the thread could
          be woven into cloth.
        </p>
        <p class="section-text">
          The tale is legend, not history, but the Chinese have honoured
          Leizu as the goddess of sericulture for more than two thousand
          years. Temples were built to her, and silk workers prayed to her
          for healthy silkworms and fine thread. The story captures something
          true about silk itself: that one of the world's most luxurious
          materials begins with something small and humble — a caterpillar,
          a leaf, and a cup of hot water.
        </p>
      </section>

      <!-- 养蚕缫丝 -->
      <section class="section">
        <h2 class="section-title">From Worm to Thread: Sericulture</h2>
        <p class="section-text">
          Sericulture — the raising of silkworms — is a patient, delicate
          craft. Every step depends on the last, and the whole process has
          changed remarkably little in thousands of years:
        </p>
        <FeatureGrid>
          <FeatureItem title="🌿 The Mulberry Tree" theme="green">
            <p>
              It all begins with the mulberry tree (桑树). Silkworms eat
              almost nothing else, and farmers have planted mulberry groves
              beside their houses for millennia. In the lower Yangtze region,
              whole villages once lived by the rhythm of the mulberry harvest.
            </p>
          </FeatureItem>
          <FeatureItem title="🐛 The Silkworm" theme="gold">
            <p>
              The domesticated silkworm (<em>Bombyx mori</em>) is a
              caterpillar bred by humans for so long that it can no longer
              survive in the wild. In about a month of eating mulberry
              leaves, it grows thousands of times heavier, then spins a
              cocoon around itself from a single thread up to 900 metres
              long.
            </p>
          </FeatureItem>
          <FeatureItem title="🫧 Reeling the Silk" theme="blue">
            <p>
              The cocoons are softened in hot water so the gum holding the
              thread loosens, and workers find the loose end and wind the
              filament onto a reel. Several filaments are twisted together
              to make a single silk yarn — fine, strong, and naturally
              lustrous.
            </p>
          </FeatureItem>
          <FeatureItem title="🧵 Weaving the Cloth" theme="red">
            <p>
              The yarn is woven on a loom into fabrics with many names:
              plain silk, satin, damask, brocade, and gauze. Weavers
              developed drawlooms that could lift hundreds of threads at
              once, letting them weave flowers, dragons, and cloud patterns
              directly into the cloth.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 四大名绣 -->
      <section class="section">
        <h2 class="section-title">The Four Great Embroideries</h2>
        <p class="section-text">
          If weaving gives silk its body, embroidery gives it its soul.
          Chinese embroidery stitches pictures directly onto silk with
          coloured thread, and four regional schools became famous across
          China — each with its own style, subjects, and stitches:
        </p>
        <FeatureGrid>
          <FeatureItem title="Su Embroidery (苏绣)" theme="blue">
            <p>
              From Suzhou in Jiangsu Province, the most refined of the four.
              Su embroidery is famous for its fine, almost invisible
              stitches, its lifelike animals — cats, goldfish, butterflies —
              and its double-sided pieces, where the front and back show
              two different pictures.
            </p>
          </FeatureItem>
          <FeatureItem title="Xiang Embroidery (湘绣)" theme="red">
            <p>
              From Hunan Province, known for bold, expressive work. Xiang
              embroiderers favoured lions, tigers, and landscapes, using
              long, loose stitches and strong contrasts of light and shade
              to make their pictures seem to leap off the cloth.
            </p>
          </FeatureItem>
          <FeatureItem title="Yue Embroidery (粤绣)" theme="gold">
            <p>
              From Guangdong Province, bright and richly coloured. Yue
              embroidery often uses gold and silver thread, and its
              favourite subjects are peacocks, phoenixes, and flowers —
              designs as vivid as the Cantonese culture that produced them.
            </p>
          </FeatureItem>
          <FeatureItem title="Shu Embroidery (蜀绣)" theme="green">
            <p>
              From Sichuan Province, one of the oldest schools, with a
              history stretching back more than two thousand years. Shu
              embroidery is known for its neat, even stitches, its pandas
              and flowers, and its use on everyday things — pillow covers,
              tablecloths, and clothing.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          Together, these four schools turned silk into a canvas. An
          embroidered silk robe or screen was never only clothing or
          furniture — it was a painting you could wear, hang, or fold away.
        </p>
      </section>

      <!-- 丝绸之路 -->
      <section class="section">
        <h2 class="section-title">Silk on the Silk Road</h2>
        <p class="section-text">
          Silk gave the Silk Road its name, and for good reason: it was the
          most valuable cargo on the route. When the Han-dynasty envoy
          Zhang Qian travelled west in 138 BCE, he opened a corridor of
          trade that would carry Chinese silk to Central Asia, Persia, and
          eventually Rome — where silk was worth its weight in gold.
        </p>
        <p class="section-text">
          The Chinese guarded the secret of sericulture jealously. According
          to tradition, anyone caught smuggling silkworm eggs out of China
          faced death. The secret did eventually leak out — legend says a
          Chinese princess smuggled silkworm eggs to the Kingdom of Khotan
          hidden in her headdress — and by the 6th century CE, silk-making
          had reached Byzantium. Even so, Chinese silk kept its reputation
          as the finest in the world for centuries afterwards.
        </p>
        <p class="section-text">
          To follow the journeys silk made, and the cities it built, see our
          article on
          <NuxtLink to="/articles/silk-road">The Silk Road</NuxtLink>,
          the network of routes that carried not only silk but also glass,
          spices, Buddhism, and ideas between East and West.
        </p>
      </section>

      <!-- 服饰与艺术 -->
      <section class="section">
        <h2 class="section-title">Silk in Clothing and Art</h2>
        <p class="section-text">
          In imperial China, silk was more than a fabric — it was a language
          of rank. Laws told people which silks they were allowed to wear:
          the emperor alone could wear certain yellows, officials wore
          colours and patterns that matched their grade, and commoners were
          long forbidden from wearing silk at all. A robe's colour, its
          embroidered dragons or cranes, and even the number of its claws
          told the world exactly who its wearer was.
        </p>
        <p class="section-text">
          Silk also carried Chinese art itself. Before paper became common,
          silk was the surface on which painters painted and calligraphers
          wrote — the great landscape paintings of the Song dynasty were
          often made on silk, and the scrolls in which they were mounted
          were silk too. The fabric's smooth sheen made ink flow beautifully,
          and its durability has let many silk paintings survive for a
          thousand years.
        </p>
        <p class="section-text">
          Everyday life was wrapped in silk as well: wedding robes, baby
          carriers, table covers, fans, purses, and the sashes that tied
          hanfu robes closed. In the great silk cities of Suzhou and
          Hangzhou, the saying went:
          <em>上有天堂，下有苏杭</em> — "Above there is heaven; below there
          are Suzhou and Hangzhou" — and much of what made those cities
          feel like heaven was silk.
        </p>
      </section>

      <!-- 今日丝绸 -->
      <section class="section">
        <h2 class="section-title">Silk Today</h2>
        <p class="section-text">
          China remains the world's largest producer of silk, and the old
          silk cities are still at work. Suzhou's silk workshops still weave
          brocade on wooden looms, and its embroidery institute trains new
          generations of stitchers. Hangzhou, once the capital of the
          Southern Song dynasty, still calls itself a silk city, and its
          China National Silk Museum holds one of the world's great
          collections of historic textiles.
        </p>
        <p class="section-text">
          Modern silk has found new roles: high fashion, interiors, and
          even medicine, where silk proteins are studied for sutures and
          tissue repair. Yet the heart of the craft is unchanged — a
          caterpillar, a mulberry leaf, and the patient hands that turn a
          kilometre of thread into cloth. In 2009, UNESCO recognised
          sericulture and silk craftsmanship as Intangible Cultural
          Heritage, a reminder that silk is not only a product of China,
          but a living part of its culture.
        </p>
      </section>

      <!-- 识别真丝 -->
      <section class="section">
        <h2 class="section-title">How to Recognise Real Silk</h2>
        <p class="section-text">
          Because silk has always been expensive, imitation silk has
          always existed — and today most "silk" in shops is polyester
          or rayon. A few old tests still work, and silk sellers in
          Suzhou and Hangzhou will happily demonstrate them:
        </p>
        <FeatureGrid>
          <FeatureItem title="🔥 The Burn Test" theme="red">
            <p>
              Take a single loose thread and burn it. Real silk burns
              slowly, smells faintly of burnt hair — because, like hair,
              it is made of protein — and leaves a soft, crumbly ash.
              Polyester melts into a hard bead and smells of chemicals.
            </p>
          </FeatureItem>
          <FeatureItem title="✋ The Touch Test" theme="gold">
            <p>
              Real silk feels cool and smooth, but not slippery. Rub two
              layers together and you can hear a soft, dry rustle — the
              "scroop" that silk makers call the sound of silk. It
              warms quickly in the hand and drapes in soft, uneven folds.
            </p>
          </FeatureItem>
          <FeatureItem title="💧 The Water Test" theme="blue">
            <p>
              Silk absorbs water quickly. A drop of water on real silk
              spreads and darkens the fabric within seconds, then dries
              without a mark. On polyester it beads up and sits on the
              surface.
            </p>
          </FeatureItem>
          <FeatureItem title="🔍 The Weave Test" theme="green">
            <p>
              Look at the edge of the cloth. Real silk has a fine,
              slightly uneven weave — no two threads are exactly alike,
              because they come from living cocoons. Perfectly uniform,
              machine-even threads are a sign of synthetic fibre.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "Above there is heaven; below there are Suzhou and Hangzhou."
          <template #author>— Chinese saying (上有天堂，下有苏杭)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Chinese Silk Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "Chinese Silk",
  title: "Chinese Silk | Sīchóu — Sericulture, Embroidery & the Silk Road — Chinese Culture Guide",
  description:
    "Chinese silk (丝绸) — five thousand years of sericulture, the legend of Leizu, the Four Great Embroideries, silk on the Silk Road, and the silk cities of Suzhou and Hangzhou.",
  ogTitle: "Chinese Silk (丝绸)",
  ogDescription:
    "Five thousand years of thread, loom, and legend — how the silkworm's thread became China's most famous fabric and gave the Silk Road its name",
  ogType: "article",
  ogImage: "/assets/images/chinese-silk.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Silk",
  twitterDescription:
    "Five thousand years of thread, loom, and legend — sericulture, embroidery, and the Silk Road",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Chinese Silk (丝绸)",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Chinese Silk",
        description:
          "A guide to Chinese silk (丝绸): the legend of Leizu, sericulture and weaving, the Four Great Embroideries, silk on the Silk Road, and the silk cities of Suzhou and Hangzhou",
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
