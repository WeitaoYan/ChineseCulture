<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">The Silk Road</h1>
      <p class="page-subtitle">
        Sī Chóu Zhī Lù — The Ancient Highway of Civilizations
      </p>
      <PageMeta>
        <MetaItem>🗺️ Trade Routes</MetaItem>
        <MetaItem>🐪 Caravans</MetaItem>
        <MetaItem>🏛️ Dunhuang</MetaItem>
        <MetaItem>🌏 East Meets West</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/silk-road.png"
      altText="Silk Road caravan crossing desert dunes with camels at sunset"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          The <strong>Silk Road</strong> (丝绸之路, Sī Chóu Zhī Lù) was not a
          single road but a vast network of trade routes spanning over
          <strong>6,400 kilometers</strong> (4,000 miles), connecting China
          with Central Asia, the Middle East, and Europe. For more than
          <strong>1,500 years</strong>, it served as the world's most important
          artery of commerce, culture, and ideas.
        </p>
        <p class="section-text">
          Named for the lucrative Chinese silk trade that first opened this
          route, the Silk Road carried far more than goods. Along its dusty
          paths traveled religions, philosophies, technologies, art styles,
          and diseases — transforming every civilization it touched and laying
          the foundation for the interconnected world we know today.
        </p>
      </section>

      <!-- 丝绸之路的起源 -->
      <section class="section">
        <h2 class="section-title">The Origins: Zhang Qian's Journey</h2>
        <p class="section-text">
          The Silk Road's story begins with a remarkable explorer: <strong>Zhang Qian</strong>
          (张骞), a Han Dynasty diplomat. In 138 BCE, Emperor Wu of Han sent
          Zhang Qian on a mission to forge an alliance with Central Asian
          tribes against the Xiongnu nomads. Captured and held prisoner for
          over a decade, Zhang Qian eventually escaped and spent years
          exploring the kingdoms of Central Asia.
        </p>
        <p class="section-text">
          When he returned to China in 126 BCE, Zhang Qian brought back
          detailed reports of the civilizations he had encountered — their
          products, customs, and geography. His journey opened China's eyes to
          the wider world and established the diplomatic and commercial
          contacts that would evolve into the Silk Road.
        </p>
        <FeatureGrid>
          <FeatureItem title="Years Traveled" theme="red">
            <p>12 years (138–126 BCE), including 10 years as a prisoner of the Xiongnu.</p>
          </FeatureItem>
          <FeatureItem title="Distance Covered" theme="gold">
            <p>Over 10,000 kilometers through uncharted territory.</p>
          </FeatureItem>
          <FeatureItem title="Discoveries Brought Back" theme="green">
            <p>Grapes, alfalfa, walnuts, pomegranates, and intelligence about Ferghana horses.</p>
          </FeatureItem>
          <FeatureItem title="Legacy" theme="blue">
            <p>Known as the "Pioneer of the Silk Road" — his travels made the route possible.</p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 主要路线 -->
      <section class="section">
        <h2 class="section-title">The Main Routes</h2>
        <p class="section-text">
          The Silk Road was not a single path but a web of routes that shifted
          over centuries. The main overland route from Chang'an (now Xi'an)
          split into northern and southern paths around the Taklamakan Desert:
        </p>
        <FeatureGrid>
          <FeatureItem title="Northern Route" theme="red">
            <p>
              From Chang'an → Hexi Corridor → Dunhuang → Turpan → Kashgar →
              Samarkand → Persia. The most frequently used route, passing
              through oasis cities that grew wealthy from the trade.
            </p>
          </FeatureItem>
          <FeatureItem title="Southern Route" theme="gold">
            <p>
              From Chang'an → Dunhuang → Khotan (Hotan) → Kashgar →
              Bactria. Followed the southern edge of the Taklamakan Desert,
              famous for its jade and Buddhist cave temples.
            </p>
          </FeatureItem>
          <FeatureItem title="Maritime Silk Road" theme="blue">
            <p>
              From Guangzhou → Quanzhou → Southeast Asia → India → East
              Africa. During the Song and Ming dynasties, this sea route
              rivaled the overland routes in importance.
            </p>
          </FeatureItem>
          <FeatureItem title="Tea Horse Road" theme="green">
            <p>
              From Yunnan → Tibet → India. A southern branch that traded
              pu'er tea for Tibetan war horses, operating for over 1,000
              years alongside the main Silk Road.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 商品交流 -->
      <section class="section">
        <h2 class="section-title">What Traveled the Silk Road</h2>
        <p class="section-text">
          The Silk Road was a two-way street. China gave the world some of its
          most transformative inventions, while receiving goods that
          transformed Chinese culture:
        </p>
        <FeatureGrid>
          <FeatureItem title="From China → West" theme="red">
            <ul class="trade-list">
              <li><strong>Silk (丝绸)</strong> — The most prized luxury, so valuable it was used as currency</li>
              <li><strong>Tea (茶叶)</strong> — Revolutionized drinking habits worldwide</li>
              <li><strong>Paper (造纸术)</strong> — Transformed communication and record-keeping</li>
              <li><strong>Gunpowder (火药)</strong> — Changed warfare and global power dynamics</li>
              <li><strong>Porcelain (瓷器)</strong> — "China" became synonymous with fine ceramics</li>
              <li><strong>Compass (指南针)</strong> — Enabled global navigation and exploration</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="From West → China" theme="gold">
            <ul class="trade-list">
              <li><strong>Grapes & Wine (葡萄)</strong> — Introduced from Persia via Central Asia</li>
              <li><strong>Buddhism (佛教)</strong> — The most transformative cultural import</li>
              <li><strong>Horses (马匹)</strong> — Ferghana "heavenly horses" prized for military use</li>
              <li><strong>Spices (香料)</strong> — Saffron, pepper, and other exotic flavors</li>
              <li><strong>Glassware (玻璃)</strong> — Roman and Persian glass prized by Chinese elites</li>
              <li><strong>Music & Dance (音乐舞蹈)</strong> — New instruments and performance styles</li>
            </ul>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 敦煌 -->
      <section class="section">
        <h2 class="section-title">Dunhuang: The Crossroads of Civilizations</h2>
        <p class="section-text">
          No place better represents the spirit of the Silk Road than
          <strong>Dunhuang</strong> (敦煌), an oasis city at the junction of
          the northern and southern desert routes. From the 4th to the 14th
          centuries, Dunhuang served as a sacred gateway where travelers from
          China, India, Persia, and beyond would stop to pray for safe passage
          through the treacherous desert ahead.
        </p>
        <p class="section-text">
          The <strong>Mogao Caves</strong> (莫高窟), also known as the
          "Caves of the Thousand Buddhas," house the world's richest treasure
          of Buddhist art — over 45,000 square meters of murals and 2,000
          painted sculptures spanning a millennium. In 1900, a hidden library
          cave was discovered containing over 50,000 manuscripts in multiple
          languages, revealing the intellectual life of the Silk Road in
          astonishing detail.
        </p>
        <FeatureGrid>
          <FeatureItem title="Construction Period" theme="red">
            <p>492 cave temples built over 1,000 years (366–1368 CE).</p>
          </FeatureItem>
          <FeatureItem title="Cave Art" theme="gold">
            <p>Over 45,000 square meters of murals — the largest Buddhist art treasury in the world.</p>
          </FeatureItem>
          <FeatureItem title="Library Cave" theme="blue">
            <p>50,000+ manuscripts discovered in 1900, spanning Buddhism, Daoism, Nestorian Christianity, and Manichaeism.</p>
          </FeatureItem>
          <FeatureItem title="UNESCO Site" theme="green">
            <p>Designated a World Heritage Site in 1987. One of China's most important cultural treasures.</p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 文化交流 -->
      <section class="section">
        <h2 class="section-title">The Exchange of Ideas</h2>
        <p class="section-text">
          Perhaps more important than the goods traded on the Silk Road were
          the ideas that traveled alongside them. The route was the primary
          channel for the spread of Buddhism from India to China, Korea, and
          Japan — a religious and philosophical transformation that reshaped
          East Asian civilization.
        </p>
        <FeatureGrid>
          <FeatureItem title="Buddhism's Journey East" theme="gold">
            <p>
              Buddhist monks like Kumarajiva (343–413 CE) and Xuanzang (玄奘,
              602–664 CE) traveled the Silk Road carrying sacred scriptures.
              They translated hundreds of texts into Chinese, laying the
              foundation for Chinese Buddhism.
            </p>
          </FeatureItem>
          <FeatureItem title="Nestorian Christianity" theme="blue">
            <p>
              The Church of the East (Nestorian Christianity) reached China
              via the Silk Road in the 7th century. The Nestorian Stele,
              erected in 781 CE in Chang'an, records its presence in three
              languages.
            </p>
          </FeatureItem>
          <FeatureItem title="Islam" theme="green">
            <p>
              Arab and Persian merchants brought Islam to China's port cities
              and along the Silk Road's western corridors during the Tang and
              Song dynasties, creating lasting Muslim communities.
            </p>
          </FeatureItem>
          <FeatureItem title="Artistic Fusion" theme="red">
            <p>
              Silk Road art blended Greek, Persian, Indian, and Chinese
              aesthetics. The flying Apsaras of Dunhuang, Gandharan Buddha
              statues, and Sogdian metalwork all show this cross-cultural
              fusion.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 著名旅人 -->
      <section class="section">
        <h2 class="section-title">Famous Travelers of the Silk Road</h2>
        <FeatureGrid>
          <FeatureItem title="Xuanzang (玄奘, 602–664)" theme="red">
            <p>
              The most famous Buddhist pilgrim in Chinese history. Xuanzang
              traveled 16 years and 16,000 kilometers to India, studied at
              Nalanda University, and returned with 657 Buddhist texts. His
              journey inspired the classic novel <em>Journey to the West</em>.
            </p>
          </FeatureItem>
          <FeatureItem title="Marco Polo (1254–1324)" theme="gold">
            <p>
              The Venetian merchant who traveled the Silk Road to Kublai
              Khan's court. His <em>Travels of Marco Polo</em> introduced
              Europe to the wealth, technology, and culture of Yuan Dynasty
              China.
            </p>
          </FeatureItem>
          <FeatureItem title="Ibn Battuta (1304–1369)" theme="blue">
            <p>
              The Moroccan scholar who traveled over 120,000 kilometers across
              the Islamic world and beyond, reaching China's port city of
              Quanzhou in 1345.
            </p>
          </FeatureItem>
          <FeatureItem title="Faxian (法显, 337–422)" theme="green">
            <p>
              The first Chinese monk to travel to India via the Silk Road and
              return with Buddhist scriptures. His travelogue is the earliest
              surviving Chinese account of Central Asia and India.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 衰落与复兴 -->
      <section class="section">
        <h2 class="section-title">Decline and Revival</h2>
        <p class="section-text">
          The overland Silk Road declined from the 15th century onward as
          maritime routes became safer, faster, and more economical. The rise
          of the Ottoman Empire, the Mongol Empire's fragmentation, and
          Europe's Age of Discovery shifted global trade to the oceans.
        </p>
        <p class="section-text">
          However, in the 21st century, the Silk Road has experienced a
          remarkable revival. China's <strong>Belt and Road Initiative</strong>
          (一带一路) — a massive infrastructure project launched in 2013 —
          explicitly invokes the Silk Road's legacy, building modern roads,
          railways, and ports across Eurasia. The ancient route that once
          carried silk and spices now carries high-speed trains, oil pipelines,
          and digital data.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "The Silk Road was never just about trade. It was the world's first
          bridge between civilizations — a road where merchants exchanged not
          only goods, but dreams, beliefs, and the building blocks of human
          progress."
        </QuoteBox>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title:
    "The Silk Road | Ancient Highway of Civilizations — Chinese Culture Guide",
  description:
    "Discover the Silk Road (丝绸之路), the 1,500-year-old network of trade routes connecting China with the world. Explore Zhang Qian's journey, Dunhuang's Mogao Caves, the exchange of goods and ideas, and its modern revival.",
  ogTitle: "The Silk Road — The Ancient Highway of Civilizations",
  ogDescription:
    "Explore the history, routes, and cultural exchange of the Silk Road — the world's most important ancient trade network",
  ogType: "article",
  ogImage: "/assets/images/silk-road.png",
  twitterCard: "summary_large_image",
  twitterTitle: "The Silk Road",
  twitterDescription:
    "Explore the history, routes, and cultural exchange of the Silk Road",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "The Silk Road — Ancient Highway of Civilizations",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "The Silk Road",
        description:
          "Comprehensive guide to the Silk Road, covering its origins with Zhang Qian, major routes, Dunhuang's Mogao Caves, traded goods, religious exchange, famous travelers, and modern Belt and Road revival",
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
  border-bottom: 3px solid rgba(166, 44, 33, 0.15);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #a62c21;
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
  border-bottom: 2px solid rgba(166, 44, 33, 0.15);
}

.section-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
}

.trade-list {
  list-style-type: none;
  padding: 0;
}

.trade-list li {
  padding: 0.4rem 0;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.08);
}

.trade-list li:last-child {
  border-bottom: none;
}
</style>
