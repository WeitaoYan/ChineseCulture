<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Chinese Porcelain</h1>
      <p class="page-subtitle">
        Cíqì — The White Gold of Jingdezhen
      </p>
      <PageMeta>
        <MetaItem>🏺 From Clay to Porcelain</MetaItem>
        <MetaItem>🔵 Blue and White</MetaItem>
        <MetaItem>🏭 Jingdezhen, Porcelain Capital</MetaItem>
        <MetaItem>🌍 A Treasure That Travelled the World</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/chinese-porcelain.png"
      altText="Blue-and-white Chinese porcelain vases and bowls with floral patterns arranged on a wooden table"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Chinese porcelain</strong> (瓷器, cíqì) is one of China's
          great gifts to the world — a ceramic so hard, white, and translucent
          that for centuries no other country could make it. Europeans called
          it "white gold" and paid fortunes for it; in English, the word
          "china" still means both the country and the fine ceramic it
          invented. A single blue-and-white vase could cross oceans, inspire
          imitation in a dozen countries, and end up on a king's table.
        </p>
        <p class="section-text">
          Porcelain is not simply fine pottery. It is made from a special
          white clay, shaped on the wheel or in moulds, coated with a glassy
          glaze, and fired at a temperature high enough — around 1,300°C —
          for the clay and glaze to fuse into a single hard, glass-like body.
          The result rings when tapped, holds hot liquid without cracking, and
          lets light pass faintly through its thin walls. Chinese potters
          mastered this recipe more than a thousand years before Europe
          managed it.
        </p>
        <p class="section-text">
          The story of porcelain is also the story of Jingdezhen, a town in
          Jiangxi Province that became the porcelain capital of the world,
          and of the trade routes — overland and by sea — that carried its
          wares to Persia, Southeast Asia, the Middle East, and eventually
          Europe. It is a story of craft, chemistry, and commerce, all fired
          in the same kiln.
        </p>
      </section>

      <!-- 起源 -->
      <section class="section">
        <h2 class="section-title">From Pottery to Porcelain</h2>
        <p class="section-text">
          China had been making pottery for thousands of years before
          porcelain appeared. As early as the Shang dynasty (c. 1600–1046
          BCE), potters in the south were glazing stoneware with a thin
          coating of wood ash, producing a hard, greenish ware known today as
          proto-porcelain. It was not yet true porcelain — the clay was not
          white enough, and the firing temperature was not quite high enough —
          but it pointed the way.
        </p>
        <p class="section-text">
          True porcelain emerged in the Eastern Han dynasty (25–220 CE), in
          kilns in present-day Zhejiang Province. These early wares were
          celadons: stoneware covered with a pale green glaze, fired hot
          enough to become dense and watertight. By the Tang dynasty
          (618–907), two great traditions were already famous — the white
          porcelain of the Xing kilns in the north, praised for a whiteness
          "like silver and snow", and the green celadon of the Yue kilns in
          the south, praised for a green "like jade" and "like a thousand
          peaks". The Tang-dynasty poet Lu Guimeng celebrated Yue ware in
          verse, and tea masters of the time argued fiercely over which ware
          suited tea best.
        </p>
        <p class="section-text">
          The Song dynasty (960–1279) is remembered as the golden age of
          Chinese ceramics. The imperial court collected wares of extraordinary
          refinement, and the kilns competed to produce glazes of subtle,
          restrained beauty — crackled, sky-blue, moon-white, and hare's-fur
          glazes that are still admired today. Song potters cared less about
          painted decoration than about the quality of the clay and the glaze
          itself, and their quiet, elegant wares set the standard for
          connoisseurs ever after.
        </p>
      </section>

      <!-- 五大名窑 -->
      <section class="section">
        <h2 class="section-title">The Five Great Kilns of the Song Dynasty</h2>
        <p class="section-text">
          Later collectors grouped the finest Song kilns into five — the
          "Five Great Kilns" (五大名窑). Each had its own clay, glaze, and
          character, and each is still a byword for quality among collectors:
        </p>
        <FeatureGrid>
          <FeatureItem title="Ru Ware (汝窑)" theme="blue">
            <p>
              The rarest of all, made for the imperial court of the Northern
              Song for only about two decades in the late 11th and early 12th
              centuries. Ru ware is famous for a soft, sky-blue glaze with a
              fine crackled network, over a pale body. Very few pieces survive
              — fewer than a hundred are known today — and they are among the
              most treasured ceramics in the world.
            </p>
          </FeatureItem>
          <FeatureItem title="Guan Ware (官窑)" theme="gray">
            <p>
              "Official ware", made by kilns run directly for the imperial
              court, first in the Northern Song and later in the Southern Song
              capital of Hangzhou. Guan ware is known for thick, jade-like
              glazes in grey-blue and pink-blue tones, with a bold crackle
              pattern of dark lines against the glaze.
            </p>
          </FeatureItem>
          <FeatureItem title="Ge Ware (哥窑)" theme="green">
            <p>
              Named, according to tradition, for an elder brother (哥, gē)
              who ran a kiln while his younger brother ran another. Ge ware
              is celebrated for its crackle: a dense web of fine lines, often
              described as "golden wire and iron thread", where darker large
              cracks cross a background of finer ones.
            </p>
          </FeatureItem>
          <FeatureItem title="Jun Ware (钧窑)" theme="red">
            <p>
              Made in Henan Province, Jun ware is famous for thick, opalescent
              glazes in sky blue and purple-red, created by copper in the
              glaze changing colour in the heat of the kiln. No two Jun pieces
              come out quite alike — the kiln itself was said to decide the
              colour, and potters spoke of pieces "entering the kiln one colour
              and leaving it another".
            </p>
          </FeatureItem>
          <FeatureItem title="Ding Ware (定窑)" theme="gold">
            <p>
              The great white ware of the Northern Song, made in Hebei
              Province. Ding ware is thin, light, and ivory-white, often
              decorated with finely carved or moulded designs of flowers,
              lotus petals, and children at play, under a clear glaze that
              pools slightly at the rim — a detail collectors call "teardrop".
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 青花瓷 -->
      <section class="section">
        <h2 class="section-title">Blue and White: The Porcelain That Conquered the World</h2>
        <p class="section-text">
          The most famous Chinese porcelain of all is
          <strong>blue-and-white ware</strong> (青花瓷, qīnghuā cí): white
          porcelain painted in cobalt blue under a clear glaze. It was born in
          the Yuan dynasty (1271–1368), when Jingdezhen's potters began
          painting with cobalt imported from Persia — a deep blue pigment
          Chinese potters called "Mohammedan blue" — and firing it beneath
          the glaze so the colour would never wear off.
        </p>
        <p class="section-text">
          Under the Ming dynasty (1368–1644), blue-and-white reached its peak.
          The Yongle (1403–1424) and Xuande (1426–1435) reigns produced wares
          of extraordinary quality: large vases, jars, bowls, and dishes
          painted with dragons, phoenixes, lotus scrolls, and landscape
          scenes, in a rich blue with silvery-black speckles that connoisseurs
          prized. In the Chenghua reign (1465–1487), potters developed
          <em>doucai</em> (斗彩), "contrasting colours", in which the design
          is outlined in underglaze blue and filled in with enamels painted
          over the glaze — a technique that opened the door to the full-colour
          <em>famille rose</em> and <em>famille verte</em> wares of the Qing
          dynasty (1644–1912).
        </p>
        <p class="section-text">
          Blue-and-white succeeded because it combined beauty with practicality.
          The blue stood out crisply against the white, the glaze protected
          the painting forever, and the ware could be made in large quantities
          for export. Within a few generations it became the standard image of
          Chinese porcelain around the world — and the pattern that potters in
          Persia, Turkey, Japan, the Netherlands, and England all set out to
          copy.
        </p>
      </section>

      <!-- 景德镇 -->
      <section class="section">
        <h2 class="section-title">Jingdezhen: The Porcelain Capital</h2>
        <p class="section-text">
          Every great porcelain tradition needs a great town, and China's was
          <strong>Jingdezhen</strong> (景德镇), in Jiangxi Province. The town
          took its name in the Jingde reign (1004–1007) of the Song dynasty,
          when its wares were first supplied to the imperial court, and for
          the next thousand years it was the centre of Chinese porcelain
          production. At its height, in the Ming and Qing dynasties, its
          kilns are said to have employed tens of thousands of workers, and
          its products were shipped across the empire and overseas.
        </p>
        <p class="section-text">
          Jingdezhen's success rested on two gifts of nature. The first was
          its clay: a fine white kaolin, named for the nearby Gaoling
          (高岭) hills, mixed with a local porcelain stone. Kaolin is what
          makes true porcelain possible — it stays white at high temperatures
          and gives the body its hardness. The second was its fuel and
          transport: pinewood for the kilns, and the Chang River, which
          carried finished wares down to the Yangtze and on to the sea.
        </p>
        <p class="section-text">
          The town was organised like a single great factory. Different
          workshops specialised in each stage of the work: mining and washing
          the clay, throwing and moulding the shapes, painting the designs,
          glazing, and firing. A Jesuit missionary who visited in the early
          18th century, Père d'Entrecolles, wrote detailed letters home about
          the process — letters that were read avidly across Europe by
          potters desperate to learn the Chinese secret.
        </p>
      </section>

      <!-- 制作工艺 -->
      <section class="section">
        <h2 class="section-title">How Porcelain Is Made</h2>
        <p class="section-text">
          Making porcelain is a long, exacting process. A single piece can
          pass through dozens of hands before it is finished, and every stage
          can ruin it:
        </p>
        <FeatureGrid>
          <FeatureItem title="1. Preparing the Clay" theme="gray">
            <p>
              Kaolin and porcelain stone are mined, crushed, washed, and left
              to age — sometimes for years — until the clay is fine, plastic,
              and free of impurities. Even a speck of iron can stain a white
              body or cause a crack in the firing.
            </p>
          </FeatureItem>
          <FeatureItem title="2. Shaping" theme="gold">
            <p>
              The potter throws the clay on a wheel, builds it up in moulds,
              or trims it with tools once it is leather-hard. Handles, spouts,
              and lids are made separately and joined with liquid clay. The
              piece is then dried slowly and evenly, so it will not warp in
              the kiln.
            </p>
          </FeatureItem>
          <FeatureItem title="3. Painting and Glazing" theme="blue">
            <p>
              For blue-and-white ware, the design is painted onto the unglazed
              body with cobalt pigment, using brushes of different sizes for
              outlines and washes. The piece is then dipped in a clear glaze
              made of feldspar and ash, which will melt into a glassy coat in
              the firing.
            </p>
          </FeatureItem>
          <FeatureItem title="4. Firing" theme="red">
            <p>
              The pieces are packed into the kiln in protective clay boxes
              called saggars, which shield them from flame and ash. The kiln
              is fired for days, rising to around 1,300°C, and then left to
              cool slowly. Only when the kiln is opened does the potter know
              whether the piece has survived — or cracked, warped, or changed
              colour.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 走向世界 -->
      <section class="section">
        <h2 class="section-title">Porcelain Travels the World</h2>
        <p class="section-text">
          Chinese porcelain began travelling long before Europe knew what it
          was. During the Tang and Song dynasties, celadons and white wares
          went overland along the Silk Road to Central Asia and Persia, and
          by sea from ports such as Quanzhou and Guangzhou to Southeast Asia,
          India, and the Middle East. Arab merchants praised Chinese wares,
          and Persian and Turkish potters began painting their own ceramics
          in blue and white in imitation — a cross-current that eventually
          brought cobalt blue back to China.
        </p>
        <p class="section-text">
          The sea trade reached its height under the Ming and Qing dynasties.
          European trading companies — Portuguese, Dutch, and English — shipped
          porcelain home in vast quantities: the Dutch East India Company
          alone imported millions of pieces in the 17th and 18th centuries.
          In Europe, porcelain was so prized that it was displayed in special
          cabinets and mounted in gold and silver; a single large vase could
          be worth more than a house. Potters in Delft in the Netherlands
          copied Chinese blue-and-white in tin-glazed earthenware, giving the
          world Delftware, and in 1708 the German alchemist Johann Friedrich
          Böttger finally produced Europe's first true hard-paste porcelain
          at Meissen — ending a thousand-year Chinese monopoly.
        </p>
        <p class="section-text">
          The influence ran in the other direction too. European and Middle
          Eastern customers sent orders, patterns, and even shapes to
          Jingdezhen: armorial dinner services for European families, wares
          painted with biblical scenes, and pieces made to fit European
          tables and habits. Porcelain was never just an export product — it
          was a conversation between cultures, carried out in clay.
        </p>
      </section>

      <!-- 收藏 -->
      <section class="section">
        <h2 class="section-title">Collecting Porcelain Today</h2>
        <p class="section-text">
          Chinese porcelain is one of the most collected art forms in the
          world, and its market is famously demanding. The first thing a
          collector learns is that age alone is not enough: a Song-dynasty
          Ru ware bowl and a Qing-dynasty imperial vase are both precious,
          but for different reasons — one for the rarity and purity of its
          glaze, the other for the skill of its painting and the rank of its
          patron. Marks matter too: many imperial pieces carry a reign mark
          written on the base, naming the emperor under whom they were made,
          though marks were also copied by later potters, so they must be
          judged alongside the clay, the glaze, and the style of painting.
        </p>
        <p class="section-text">
          The best way to learn porcelain is to look at real pieces. The
          great museum collections — in Beijing, Shanghai, Taipei, London,
          and New York — hold wares from every kiln and every period, and
          many offer the chance to compare a Song celadon, a Ming blue-and-
          white, and a Qing famille rose side by side. Jingdezhen itself is
          still a working porcelain town, where visitors can watch potters
          throw, paint, and fire in the old ways — and where the kilns that
          supplied emperors now supply studios, schools, and collectors
          around the world.
        </p>
        <p class="section-text">
          From a Han-dynasty celadon jar to a Qing-dynasty vase on a museum
          shelf, porcelain carries the same lesson: that patience, material
          knowledge, and a steady hand can turn common clay into something
          that outlasts empires.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "In the ninth month's wind and dew the Yue kilns open, seizing the
          green of a thousand peaks."
          <template #author>— Lu Guimeng, Tang-dynasty poet, on Yue celadon ware (九秋风露越窑开，夺得千峰翠色来)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Chinese Porcelain Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "Chinese Porcelain",
  title: "Chinese Porcelain | Jingdezhen, Blue and White & the Five Great Kilns — Chinese Culture Guide",
  description:
    "Chinese porcelain (瓷器) — from Eastern Han celadon and the Song dynasty's Five Great Kilns to blue-and-white ware, Jingdezhen the porcelain capital, and the porcelain trade that carried Chinese ceramics around the world.",
  ogTitle: "Chinese Porcelain (瓷器)",
  ogDescription:
    "The white gold of Jingdezhen — celadon, the Five Great Kilns, blue-and-white porcelain, and the trade that carried Chinese ceramics around the world",
  ogType: "article",
  ogImage: "/assets/images/chinese-porcelain.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Porcelain",
  twitterDescription:
    "The white gold of Jingdezhen — celadon, the Five Great Kilns, blue-and-white porcelain, and the trade that carried Chinese ceramics around the world",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Chinese Porcelain (瓷器)",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Chinese Porcelain",
        description:
          "A guide to Chinese porcelain (瓷器), including its origins in Eastern Han celadon, the Song dynasty's Five Great Kilns, blue-and-white ware, Jingdezhen the porcelain capital, the production process, and the global porcelain trade",
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
