<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Chinese Mythology</h1>
      <p class="page-subtitle">
        Zhōng Guó Shén Huà — Tales of Creation, Heroes, and Immortals
      </p>
      <PageMeta>
        <MetaItem>🌌 Creation Myths</MetaItem>
        <MetaItem>🐉 Dragons & Deities</MetaItem>
        <MetaItem>⚔️ Mythical Heroes</MetaItem>
        <MetaItem>🏔️ Legendary Creatures</MetaItem>
      </PageMeta></div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/chinese-mythology.png"
      altText="Chinese mythology illustration with dragon, phoenix, and mythical landscape"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Chinese Mythology</strong> (中国神话) is a vast and ancient
          tapestry of stories that explain the creation of the world, the
          origins of civilization, and the relationship between humans,
          nature, and the divine. Unlike the unified pantheons of Greek or
          Norse mythology, Chinese myths evolved across thousands of years and
          multiple cultural traditions — blending folk beliefs, Daoist
          immortals, Buddhist bodhisattvas, and Confucian heroes into a rich
          and complex mythological landscape.
        </p>
        <p class="section-text">
          These stories are woven into the fabric of Chinese daily life.
          Children learn about Pangu creating the world and Nüwa mending the
          sky. The Monkey King leaps from the pages of <em>Journey to the
          West</em>. Dragon kings rule the seas, and the Jade Emperor governs
          heaven — a celestial bureaucracy that mirrors the imperial courts of
          ancient China.
        </p>
      </section>

      <!-- 创世神话 -->
      <section class="section">
        <h2 class="section-title">Creation Myths</h2>
        <FeatureGrid>
          <FeatureItem title="Pangu (盘古) — Creator of the World" theme="gold">
            <p>
              In the beginning, the universe was a formless, dark egg
              containing the primordial giant Pangu. After 18,000 years of
              gestation, Pangu awoke, split the egg open with his mighty axe.
              The light, clear parts rose to become Heaven (Yang); the heavy,
              dark parts sank to become Earth (Yin). For another 18,000 years
              Pangu stood between them, pushing heaven upward. When he died,
              his body became the world — his breath the wind, his voice
              thunder, his left eye the sun, his right eye the moon, his blood
              the rivers, and the parasites on his body the human race.
            </p>
          </FeatureItem>
          <FeatureItem title="Nüwa (女娲) — Mother of Humanity" theme="red">
            <p>
              The goddess Nüwa — with the head of a human and the body of a
              serpent — grew lonely in the newly created world. From yellow
              earth she molded figures that came to life as humans. When she
              grew tired of shaping each by hand, she dipped a rope in mud and
              flicked it, creating many more. The hand-made became the rich
              and noble; the rope-flicked became the common people. When a
              great flood broke the pillars of heaven, Nüwa melted
              five-colored stones to patch the sky, saving humanity from
              destruction.
            </p>
          </FeatureItem>
          <FeatureItem title="Fuxi (伏羲) — First Teacher" theme="blue">
            <p>
              Nüwa's brother and husband, Fuxi is credited as the first of the
              Three Sovereigns. He taught humans hunting, fishing, and animal
              domestication. Most importantly, he observed the patterns of
              nature — the markings on birds, the stars in the sky — and
              created the Eight Trigrams (八卦), the foundation of Chinese
              writing and the I Ching philosophy.
            </p>
          </FeatureItem>
          <FeatureItem title="Shennong (神农) — Divine Farmer" theme="green">
            <p>
              The second of the Three Sovereigns, Shennong was a mythical
              emperor with the head of an ox and the body of a man. He taught
              humans agriculture, invented the plow, and personally tasted
              hundreds of herbs to discover their medicinal properties — being
              poisoned dozens of times in the process. He is honored as the
              father of Chinese medicine and agriculture.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 神话英雄 -->
      <section class="section">
        <h2 class="section-title">Legendary Heroes & Folk Tales</h2>
        <FeatureGrid>
          <FeatureItem title="Hou Yi (后羿) & The Ten Suns" theme="red">
            <p>
              Once, ten suns — the children of the Jade Emperor — decided to
              rise together, scorching the earth and destroying all life. The
              heroic archer Hou Yi shot down nine of them with his magical
              bow, leaving just one to warm the earth. As a reward, he
              received the elixir of immortality, but his wife Chang'e
              accidentally consumed it and floated to the moon, where she
              remains to this day. The Mid-Autumn Festival celebrates her
              story.
            </p>
          </FeatureItem>
          <FeatureItem title="Yu the Great (大禹) — Taming the Flood" theme="blue">
            <p>
              In ancient times, a catastrophic flood threatened to drown all
              of China. Yu worked tirelessly for 13 years, dredging channels
              and diverting rivers. He passed his own home three times but
              never entered, so devoted was he to his mission. His success
              earned him the throne, founding China's first dynasty — the Xia
              Dynasty. His story embodies the Confucian ideal of selfless
              service.
            </p>
          </FeatureItem>
          <FeatureItem title="The Monkey King (孙悟空)" theme="gold">
            <p>
              Born from a stone egg, Sun Wukong — the Monkey King — learned
              magical arts and acquired a magical staff. He wreaked havoc in
              Heaven until the Buddha trapped him under a mountain for 500
              years. He was later freed to protect the monk Xuanzang on his
              journey to India in search of Buddhist scriptures, as told in
              the classic novel <em>Journey to the West</em> (西游记).
            </p>
          </FeatureItem>
          <FeatureItem title="The Legend of the White Snake (白蛇传)" theme="green">
            <p>
              A white snake spirit, Bai Suzhen, transforms into a beautiful
              woman and falls in love with a human scholar, Xu Xian. They
              marry and open a medicine shop, but a Buddhist monk, Fahai,
              exposes her true nature and traps her under a pagoda. This tale
              of forbidden love between human and spirit remains one of
              China's most beloved love stories.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 神仙体系 -->
      <section class="section">
        <h2 class="section-title">The Heavenly Court & Divine Beings</h2>
        <p class="section-text">
          Chinese mythology features a vast celestial bureaucracy, mirroring
          the imperial government of ancient China. The heavens are organized
          like a palace, with the Jade Emperor as the supreme ruler:
        </p>
        <FeatureGrid>
          <FeatureItem title="The Jade Emperor (玉皇大帝)" theme="gold">
            <p>
              Ruler of Heaven and the highest deity in folk Daoism. He governs
              a vast celestial bureaucracy with ministers, generals, and
              officials. His palace is in the highest heaven, from where he
      watches over the mortal world. His birthday is celebrated on the 9th
      day of the first lunar month.
    </p>
  </FeatureItem>
  <FeatureItem title="The Eight Immortals (八仙)" theme="green">
    <p>
      A group of legendary Daoist immortals, each with a unique magic
      tool and personality. They represent different social classes and
      life circumstances, showing that anyone can achieve immortality.
      Their stories are told in the phrase: "The Eight Immortals cross
      the sea, each revealing their divine power" (八仙过海,各显神通).
    </p>
  </FeatureItem>
  <FeatureItem title="Dragon Kings (龙王)" theme="blue">
    <p>
      Each of the Four Seas is ruled by a Dragon King who controls
      rainfall and weather. They live in magnificent underwater
      palaces. When angry, they cause storms and floods; when pleased,
      they bring gentle rain for bountiful harvests. Temples dedicated
      to Dragon Kings dot the Chinese countryside.
    </p>
  </FeatureItem>
  <FeatureItem title="The Kitchen God (灶神)" theme="red">
    <p>
      Every household has a Kitchen God who observes the family's
      behavior throughout the year. A week before Spring Festival, he
      returns to Heaven to report to the Jade Emperor. Families offer
      sweet treats to his statue — sometimes smearing honey on his lips
      so he will report only sweet things.
    </p>
  </FeatureItem>
</FeatureGrid>
      </section>

      <!-- 神兽 -->
      <section class="section">
        <h2 class="section-title">Mythical Creatures</h2>
        <FeatureGrid>
          <FeatureItem title="🐉 The Dragon (龙)" theme="red">
            <p>
              The most revered creature in Chinese mythology — a symbol of
              power, strength, and good fortune. Unlike the fire-breathing
              dragons of Western myth, Chinese dragons are benevolent beings
              associated with water, rain, and the emperor. With the head of
              a camel, antlers of a deer, scales of a fish, and claws of an
              eagle — they are composite beings representing unity.
            </p>
          </FeatureItem>
          <FeatureItem title="🕊️ The Phoenix (凤凰)" theme="gold">
            <p>
              The Fèng Huáng is the king of birds, symbolizing virtue, grace,
              and prosperity. It appears only in times of peace and harmony.
              Together with the dragon, it represents the union of yin and
              yang — the dragon as yang (emperor), the phoenix as yin (empress).
            </p>
          </FeatureItem>
          <FeatureItem title="🐢 The Black Tortoise (玄武)" theme="blue">
            <p>
              One of the Four Symbols (四象) of Chinese constellations — the
              Black Tortoise of the North, protecting winter and representing
              longevity and endurance. Often depicted with a snake coiled
              around it, uniting two powerful creatures.
            </p>
          </FeatureItem>
          <FeatureItem title="🦁 The Guardian Lion (石狮)" theme="gray">
            <p>
              Pairs of stone lions guard the entrances of palaces, temples,
              and homes. The male plays with a ball (symbolizing power), the
              female with a cub (nurturing). They are believed to repel evil
              spirits and attract good fortune.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 四大神兽 -->
      <section class="section">
        <h2 class="section-title">The Four Symbols (四象 / Sì Xiàng)</h2>
        <p class="section-text">
          The Four Symbols are mythological creatures representing the
          four cardinal directions and seasons, deeply embedded in Chinese
          astronomy, Feng Shui, and martial arts:
        </p>
        <FeatureGrid>
          <FeatureItem title="🐉 Azure Dragon (青龙) — East" theme="green">
            <p>The dragon of the East, representing spring and the Wood element. Symbol of vitality, growth, and renewal.</p>
          </FeatureItem>
          <FeatureItem title="🕊️ Vermilion Bird (朱雀) — South" theme="red">
            <p>The bird of the South, representing summer and the Fire element. Symbol of passion, creativity, and joy.</p>
          </FeatureItem>
          <FeatureItem title="🐯 White Tiger (白虎) — West" theme="gray">
            <p>The tiger of the West, representing autumn and the Metal element. Symbol of strength, courage, and protection.</p>
          </FeatureItem>
          <FeatureItem title="🐢 Black Tortoise (玄武) — North" theme="blue">
            <p>The tortoise-snake of the North, representing winter and the Water element. Symbol of endurance, wisdom, and longevity.</p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 现代影响 -->
      <section class="section">
        <h2 class="section-title">Mythology in Modern Culture</h2>
        <p class="section-text">
          Chinese mythology continues to inspire modern storytelling. From
          blockbuster films like <em>Ne Zha</em> (哪吒, 2019) — the highest-grossing
          animated film in China's history — to video games, fantasy novels,
          and TV series, these ancient tales are being retold for new
          generations. The Marvel comic <em>Shang-Chi</em> draws on Chinese
          mythology, and the world of <em>Genshin Impact</em> is steeped in
          Chinese mythological references.
        </p>
        <p class="section-text">
          Beyond entertainment, Chinese mythology lives in everyday language.
          Parents call mischievous children "Monkey Kings." Ambitious projects
          are said to need "Yu the Great's determination." The phrase "Nüwa
          mending the sky" describes heroic efforts against overwhelming odds.
          These stories are not relics of a distant past — they are living
          narratives that continue to shape Chinese identity and values.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "In the beginning, there was chaos like a chicken's egg.
          Within it slept Pangu. When he awoke and stretched, the heavens
          rose and the earth sank — and all the wonders of creation
          sprang from his body."
          <template #author>— Xu Zheng, Three Five Historical Records (三五历纪), 3rd Century CE</template>
        </QuoteBox>
      </section></div>
  
      <!-- AI 趣味测验 -->
      <CultureQuiz title="Mythology Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title:
    "Chinese Mythology | Gods, Heroes & Legends — Chinese Culture Guide",
  description:
    "Discover Chinese Mythology (中国神话) — from Pangu's creation and Nüwa mending the sky to the Monkey King, the Eight Immortals, dragons, and the Four Symbols. Explore the stories that shaped Chinese civilization.",
  ogTitle: "Chinese Mythology — Creation, Heroes, and Immortals",
  ogDescription:
    "Explore the rich world of Chinese mythology — creation myths, legendary heroes, divine beings, and mythical creatures",
  ogType: "article",
  ogImage: "/assets/images/chinese-mythology.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Mythology",
  twitterDescription:
    "Explore the rich world of Chinese mythology — creation myths, legendary heroes, and mythical creatures",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Chinese Mythology — Gods, Heroes & Legends",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Chinese Mythology",
        description:
          "Comprehensive guide to Chinese mythology, covering creation myths of Pangu and Nüwa, legendary heroes like Hou Yi and Yu the Great, the Heavenly Court and Eight Immortals, mythical creatures, and the Four Symbols",
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
