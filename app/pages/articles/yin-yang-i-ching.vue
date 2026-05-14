<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Yin &amp; Yang · I Ching</h1>
      <p class="page-subtitle">The Eternal Dance of Opposites and the Book of Changes</p>
      <PageMeta>
        <MetaItem>☯ Yin · Yang</MetaItem>
        <MetaItem>☰ Eight Trigrams</MetaItem>
        <MetaItem>䷀ 64 Hexagrams</MetaItem>
        <MetaItem>📜 I Ching</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/yin-yang-i-ching.jpg"
      altText="Yin-Yang Taijitu with Eight Trigrams and I Ching hexagrams"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          The concepts of Yin and Yang (阴阳) and the I Ching (易经, Yì Jīng — the Book of Changes)
          form the philosophical bedrock of Chinese civilization. Together, they represent a
          comprehensive worldview that has shaped Chinese thought for over three millennia —
          influencing medicine, art, warfare, governance, and personal spirituality.
        </p>
        <p class="section-text">
          Yin and Yang describe the fundamental dualistic nature of reality — light and dark,
          active and passive, masculine and feminine — while the I Ching provides a system
          of 64 hexagrams that map the patterns of change in the universe. This ancient wisdom
          continues to offer profound insights into the nature of existence and the art of
          living in harmony with the cosmic order.
        </p>
      </section>

      <!-- 阴阳概念 -->
      <section class="section">
        <h2 class="section-title">The Concept of Yin and Yang</h2>
        <p class="section-text">
          Yin and Yang are not opposing forces in conflict, but complementary aspects of a
          single, unified reality. The Taijitu (太极图), the iconic black-and-white symbol,
          visually represents this relationship — each half contains a seed of the other,
          suggesting that nothing is purely one or the other.
        </p>
        <FeatureGrid>
          <FeatureItem title="Yin (阴)" theme="gray">
            <p>The receptive, dark, and yielding principle.</p>
            <ul class="element-list">
              <li><strong>Symbol:</strong> █ Broken line (⚋)</li>
              <li><strong>Nature:</strong> Female, moon, earth</li>
              <li><strong>Energy:</strong> Inward, contracting</li>
              <li><strong>Season:</strong> Winter</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="Yang (阳)" theme="red">
            <p>The active, bright, and firm principle.</p>
            <ul class="element-list">
              <li><strong>Symbol:</strong> █ Solid line (⚊)</li>
              <li><strong>Nature:</strong> Male, sun, heaven</li>
              <li><strong>Energy:</strong> Outward, expanding</li>
              <li><strong>Season:</strong> Summer</li>
            </ul>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 阴阳四对关系 -->
      <section class="section">
        <h2 class="section-title">The Four Relationships of Yin and Yang</h2>
        <FeatureGrid>
          <FeatureItem title="Opposition (对立)" theme="gray">
            <p>
              Yin and Yang are opposites — hot vs. cold, day vs. night, up vs. down.
              Yet they define each other; without darkness, there is no light.
            </p>
          </FeatureItem>
          <FeatureItem title="Interdependence (互根)" theme="blue">
            <p>
              Neither can exist without the other. Day gives way to night; activity
              requires rest. Each aspect depends on its counterpart for definition
              and meaning.
            </p>
          </FeatureItem>
          <FeatureItem title="Mutual Consumption (消长)" theme="green">
            <p>
              As one grows, the other diminishes. Spring's yang energy rises as
              winter's yin recedes. This constant flux is the rhythm of nature
              and the source of all change.
            </p>
          </FeatureItem>
          <FeatureItem title="Inter-Transformation (转化)" theme="gold">
            <p>
              At their extreme, each transforms into the other. The hottest part
              of summer begins the turn toward winter; the darkest hour precedes
              the dawn. This is the core insight of the I Ching.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 八卦 -->
      <section class="section">
        <h2 class="section-title">The Eight Trigrams (八卦 / Bā Guà)</h2>
        <p class="section-text">
          The Eight Trigrams are the fundamental building blocks of the I Ching. Each
          trigram (卦, guà) consists of three stacked lines — either solid (yang, ⚊)
          or broken (yin, ⚋) — arranged in eight possible combinations. These trigrams
          represent the basic forces and phenomena of the natural world.
        </p>
        <FeatureGrid>
          <FeatureItem title="☰ Qián (乾) — Heaven" theme="red">
            <p>Three yang lines. The creative, expansive, and powerful force of the universe. Represents strength, initiative, and leadership.</p>
            <ul class="element-list">
              <li><strong>Family Role:</strong> Father</li>
              <li><strong>Direction:</strong> Northwest</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="☷ Kūn (坤) — Earth" theme="gray">
            <p>Three yin lines. The receptive, nurturing, and supportive force. Represents devotion, endurance, and fertility.</p>
            <ul class="element-list">
              <li><strong>Family Role:</strong> Mother</li>
              <li><strong>Direction:</strong> Southwest</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="☳ Zhèn (震) — Thunder" theme="green">
            <p>One yang below two yin. The arousing force that shakes things awake. Represents movement, revolution, and sudden change.</p>
            <ul class="element-list">
              <li><strong>Family Role:</strong> First Son</li>
              <li><strong>Direction:</strong> East</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="☵ Kǎn (坎) — Water" theme="blue">
            <p>One yin between two yang. The abysmal, dangerous, yet flowing force. Represents risk, adaptation, and perseverance.</p>
            <ul class="element-list">
              <li><strong>Family Role:</strong> Second Son</li>
              <li><strong>Direction:</strong> North</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="☶ Gèn (艮) — Mountain" theme="gold">
            <p>One yang above two yin. The still, stable, and meditative force. Represents rest, reflection, and standing still.</p>
            <ul class="element-list">
              <li><strong>Family Role:</strong> Third Son</li>
              <li><strong>Direction:</strong> Northeast</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="☴ Xùn (巽) — Wind" theme="yellow">
            <p>One yin below two yang. The penetrating, gentle, and subtle force. Represents influence, communication, and gradual progress.</p>
            <ul class="element-list">
              <li><strong>Family Role:</strong> First Daughter</li>
              <li><strong>Direction:</strong> Southeast</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="☲ Lí (离) — Fire" theme="red">
            <p>One yin between two yang. The clinging, illuminating, and radiant force. Represents clarity, beauty, and awareness.</p>
            <ul class="element-list">
              <li><strong>Family Role:</strong> Second Daughter</li>
              <li><strong>Direction:</strong> South</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="☱ Duì (兑) — Lake" theme="blue">
            <p>One yin above two yang. The joyful, communicative, and reflective force. Represents pleasure, exchange, and completion.</p>
            <ul class="element-list">
              <li><strong>Family Role:</strong> Third Daughter</li>
              <li><strong>Direction:</strong> West</li>
            </ul>
          </FeatureItem>
        </FeatureGrid>

        <div class="cycle-diagram">
          <h3 class="cycle-title">The Pre-Heaven (先天八卦 / Xiāntiān) Arrangement</h3>
          <p class="cycle-desc">
            Attributed to Fuxi (伏羲), this arrangement places Heaven (☰) at the top
            and Earth (☷) at the bottom, representing the cosmic order before the
            formation of the physical world.
          </p>
          <div class="bagua-ring">
          <div class="bagua-item t-n"><span class="trigram-symbol">☰</span>Qián · Heaven</div>
          <div class="bagua-item t-ne"><span class="trigram-symbol">☴</span>Xùn · Wind</div>
          <div class="bagua-item t-e"><span class="trigram-symbol">☵</span>Kǎn · Water</div>
          <div class="bagua-item t-se"><span class="trigram-symbol yin">☶</span>Gèn · Mountain</div>
          <div class="bagua-item t-s"><span class="trigram-symbol yin">☷</span>Kūn · Earth</div>
          <div class="bagua-item t-sw"><span class="trigram-symbol yin">☳</span>Zhèn · Thunder</div>
          <div class="bagua-item t-w"><span class="trigram-symbol">☲</span>Lí · Fire</div>
          <div class="bagua-item t-nw"><span class="trigram-symbol yin">☱</span>Duì · Lake</div>
          <div class="bagua-center">☯</div>
        </div>
        </div>
      </section>

      <!-- 易经 -->
      <section class="section">
        <h2 class="section-title">The I Ching · Book of Changes (易经)</h2>
        <p class="section-text">
          The I Ching, or Book of Changes, is one of the oldest and most important
          texts in world literature. Its origins stretch back over 3,000 years,
          making it the earliest of the Chinese Five Classics (五经). The I Ching
          is not merely a divination manual — it is a philosophical masterpiece
          that describes the dynamics of change underlying all existence.
        </p>
        <FeatureGrid>
          <FeatureItem title="The 64 Hexagrams" theme="red">
            <p>
              Each hexagram (卦) consists of two trigrams stacked together, creating
              64 possible combinations. Each hexagram has a name, an image, and a
              judgment that describes a specific life situation or phase of change.
            </p>
          </FeatureItem>
          <FeatureItem title="The Judgments" theme="blue">
            <p>
              The judgment (彖传) is the core text for each hexagram, attributed to
              King Wen of the Zhou Dynasty. It provides the fundamental meaning and
              guidance for the situation represented by the hexagram.
            </p>
          </FeatureItem>
          <FeatureItem title="The Line Texts" theme="green">
            <p>
              Each of the six lines in a hexagram has its own text (爻辞), offering
              specific advice for different stages of the situation — from initial
              beginnings to the final outcome.
            </p>
          </FeatureItem>
          <FeatureItem title="The Ten Wings" theme="gold">
            <p>
              The Ten Wings (十翼) are commentaries attributed to Confucius that
              interpret the I Ching's philosophical depth, transforming it from a
              divination text into a profound metaphysical system.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 重要卦象 -->
      <section class="section">
        <h2 class="section-title">Key Hexagrams</h2>
        <FeatureGrid>
          <FeatureItem title="䷀ Qián · The Creative" theme="red">
            <p>
              Hexagram 1, composed of six yang lines. Represents pure creative
              power, the energy of Heaven. Its message: "Great and originating,
              penetrating, advantageous, and correct." Success comes through
              strength and perseverance.
            </p>
            <ul class="element-list">
              <li><strong>Upper/Lower:</strong> ☰ Heaven / ☰ Heaven</li>
              <li><strong>Advice:</strong> Be strong, yet follow the natural order</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="䷁ Kūn · The Receptive" theme="gray">
            <p>
              Hexagram 2, composed of six yin lines. Represents pure receptive
              power, the force of Earth. Its message: "Great and originating,
              penetrating — the mare's course." Success comes through devotion,
              humility, and supportive action.
            </p>
            <ul class="element-list">
              <li><strong>Upper/Lower:</strong> ☷ Earth / ☷ Earth</li>
              <li><strong>Advice:</strong> Be receptive, follow the lead of Heaven</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="䷂ Zhūn · Difficulty at the Beginning" theme="blue">
            <p>
              Hexagram 3 — Water (☵) over Thunder (☳). Represents the initial
              struggle of any new venture. Like a seed breaking through soil,
              the path is challenging but promises abundant growth.
            </p>
            <ul class="element-list">
              <li><strong>Message:</strong> Initial difficulty yields to great success</li>
              <li><strong>Advice:</strong> Persevere through the chaos of beginnings</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="䷄ Xū · Waiting" theme="yellow">
            <p>
              Hexagram 5 — Water (☵) over Heaven (☰). Represents a time of
              patient waiting. The clouds have gathered but the rain has not yet
              fallen. Success comes to those who wait with faith and preparation.
            </p>
            <ul class="element-list">
              <li><strong>Message:</strong> Nourish yourself while waiting</li>
              <li><strong>Advice:</strong> Patience is not passivity — prepare actively</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="䷊ Tài · Peace" theme="green">
            <p>
              Hexagram 11 — Earth (☷) over Heaven (☰). Represents perfect harmony
              between Heaven and Earth. The most auspicious hexagram — a time when
              everything flows naturally and the world is in balance.
            </p>
            <ul class="element-list">
              <li><strong>Message:</strong> The small departs, the great approaches</li>
              <li><strong>Advice:</strong> Great harmony enables great achievement</li>
            </ul>
          </FeatureItem>
          <FeatureItem title="䷿ Wèi Jì · Before Completion" theme="gold">
            <p>
              Hexagram 64 — Fire (☲) over Water (☵). The final hexagram, yet its
              name means "Not Yet Across." It reminds us that the process of
              change is never truly finished — every ending contains a new beginning.
            </p>
            <ul class="element-list">
              <li><strong>Message:</strong> The fox has almost crossed, tail still wet</li>
              <li><strong>Advice:</strong> Caution in the final moments is most critical</li>
            </ul>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 应用领域 -->
      <section class="section">
        <h2 class="section-title">Applications in Chinese Culture</h2>
        <FeatureGrid>
          <FeatureItem title="Traditional Chinese Medicine (TCM)" theme="red">
            <p>
              Yin-Yang theory is the foundation of Chinese medicine. Health is seen
              as balance between yin and yang forces in the body; illness arises
              from their imbalance. Acupuncture, herbal medicine, and qigong all
              aim to restore this fundamental harmony.
            </p>
          </FeatureItem>
          <FeatureItem title="Feng Shui (风水)" theme="blue">
            <p>
              The art of spatial arrangement is deeply rooted in Yin-Yang and I
              Ching philosophy. Feng Shui practitioners use the trigrams and
              hexagrams to analyze the flow of qi (气) in buildings and landscapes,
              creating environments that support health, prosperity, and harmony.
            </p>
          </FeatureItem>
          <FeatureItem title="Divination (占卜)" theme="gold">
            <p>
              The I Ching remains one of the most widely used divination systems
              in the world. Traditionally using yarrow stalks or three coins, the
              practitioner generates a hexagram that offers guidance for a specific
              question, based on the principle of "sincere inquiry."
            </p>
          </FeatureItem>
          <FeatureItem title="Martial Arts (武术)" theme="gray">
            <p>
              Tai Chi (太极拳) and other internal martial arts embody Yin-Yang
              principles in every movement — softness overcoming hardness,
              yielding leading to victory. The Taijitu symbol is the universal
              emblem of martial arts philosophy.
            </p>
          </FeatureItem>
          <FeatureItem title="Chinese Painting (国画)" theme="green">
            <p>
              Traditional Chinese ink painting embodies Yin-Yang through the
              interplay of black ink and white paper — the presence of absence,
              the balance of stroke and empty space. Mountains rise as yang
              against the yin of mist and water.
            </p>
          </FeatureItem>
          <FeatureItem title="Governance & Strategy" theme="yellow">
            <p>
              The I Ching has been used by Chinese rulers and strategists for
              millennia. Sun Tzu's Art of War draws on Yin-Yang principles, and
              Confucian scholars studied the I Ching as a guide to ethical
              governance and decision-making.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 历史与文化 -->
      <section class="section">
        <h2 class="section-title">Historical Origins</h2>
        <p class="section-text">
          The origins of the I Ching are shrouded in legend. According to tradition,
          the mythical emperor Fuxi (伏羲) observed the patterns of nature — the
          markings on birds and animals, the movements of celestial bodies — and
          created the Eight Trigrams around 2800 BCE. King Wen of Zhou (周文王)
          expanded the trigrams into 64 hexagrams while imprisoned by the Shang
          Dynasty, and his son the Duke of Zhou (周公) added the line texts.
        </p>
        <p class="section-text">
          Confucius (孔子, 551–479 BCE) is said to have studied the I Ching so
          diligently that the leather binding of his copy wore out three times.
          The Ten Wings — philosophical commentaries attributed to Confucius and
          his school — elevated the I Ching from a divination manual to a
          comprehensive metaphysical system that has influenced every aspect of
          Chinese culture.
        </p>
        <FeatureGrid>
          <FeatureItem title="Fuxi (伏羲)" theme="green">
            <p>
              Legendary first emperor and culture hero. Created the Eight Trigrams
              by observing the natural world. The Pre-Heaven (先天) arrangement
              of the trigrams is attributed to him.
            </p>
          </FeatureItem>
          <FeatureItem title="King Wen (周文王)" theme="red">
            <p>
              Founder of the Zhou Dynasty. While imprisoned, he expanded the
              Eight Trigrams into 64 hexagrams and wrote the judgments (卦辞).
            </p>
          </FeatureItem>
          <FeatureItem title="Duke of Zhou (周公)" theme="blue">
            <p>
              Son of King Wen and regent of the Zhou court. Wrote the line texts
              (爻辞) for each of the 384 lines in the hexagrams.
            </p>
          </FeatureItem>
          <FeatureItem title="Confucius (孔子)" theme="gold">
            <p>
              The great sage who transformed the I Ching into a philosophical
              classic. His commentaries, the Ten Wings, reveal the ethical and
              cosmic dimensions of the hexagrams.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 现代意义 -->
      <section class="section">
        <h2 class="section-title">Modern Significance</h2>
        <p class="section-text">
          In the modern world, Yin-Yang and the I Ching have found resonance far
          beyond China's borders. Carl Jung, the Swiss psychiatrist, wrote a
          celebrated foreword to the Richard Wilhelm translation of the I Ching,
          describing it as a "scientific" system based on the principle of
          synchronicity — meaningful coincidence.
        </p>
        <ul class="modern-practices">
          <li>
            <strong>Psychology:</strong> Jung's concept of synchronicity was
            deeply influenced by the I Ching, and modern depth psychology continues
            to explore its symbolic framework.
          </li>
          <li>
            <strong>Physics:</strong> Niels Bohr, the father of quantum mechanics,
            adopted the Taijitu symbol as his coat of arms, recognizing in
            Yin-Yang the complementarity principle central to quantum theory.
          </li>
          <li>
            <strong>Business:</strong> The I Ching is used by executives and
            entrepreneurs worldwide as a tool for strategic thinking and
            decision-making in complex situations.
          </li>
          <li>
            <strong>Design & Technology:</strong> The Yin-Yang symbol has become
            a universal icon of balance, appearing in everything from corporate
            logos to user interface design.
          </li>
          <li>
            <strong>Personal Growth:</strong> The I Ching offers timeless wisdom
            for navigating change, uncertainty, and the complexities of human
            relationships.
          </li>
        </ul>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">Why It Matters</h2>
        <p class="section-text">
          Yin-Yang and the I Ching represent the most profound expression of the
          Chinese understanding of reality — a universe in constant flux, where
          every change contains the seed of its opposite, and harmony emerges
          not from static balance but from the dynamic interplay of complementary
          forces.
        </p>
        <p class="section-text">
          In a world that often demands either-or thinking, the I Ching offers a
          both-and philosophy. It teaches us that what appears to be a problem
          may be an opportunity, that strength can be found in softness, and
          that every ending is merely a beginning in disguise. This ancient wisdom,
          recorded over three millennia ago, speaks directly to the challenges
          and uncertainties of modern life.
        </p>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox gradientType="culture">
      "The I Ching does not offer itself as a book of prophecies or commandments.
      It is a mirror — a mirror of the human soul in its eternal search for
      meaning and harmony with the Tao."
      <template #author>— Inspired by Carl Jung's Preface to the I Ching</template>
    </QuoteBox>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title: "Yin & Yang and I Ching - Chinese Culture Explorer",
  description:
    "Discover Yin-Yang philosophy and the I Ching (Book of Changes), the ancient Chinese systems of cosmology, divination, and wisdom that have shaped Eastern thought for over 3,000 years.",
  ogTitle: "Yin & Yang · I Ching — Ancient Chinese Wisdom",
  ogDescription:
    "Explore the eternal dance of Yin and Yang, the Eight Trigrams, and the 64 hexagrams of the I Ching — the philosophical foundation of Chinese civilization.",
  ogImage: "/assets/images/yin-yang-i-ching.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Yin & Yang · I Ching",
  twitterDescription:
    "Explore Yin-Yang philosophy and the I Ching — the ancient Chinese systems of cosmology and wisdom.",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "preload", as: "image", href: "/assets/images/yin-yang-i-ching.jpg" }],
  title: "Yin & Yang and I Ching",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Yin & Yang and I Ching — Ancient Chinese Philosophy",
        description:
          "A comprehensive exploration of Yin-Yang theory, the Eight Trigrams, and the I Ching (Book of Changes), the philosophical foundation of Chinese civilization.",
      }),
    },
  ],
});
</script>

<style scoped>
.content-page {
  max-width: 100%;
}

/* 页面头部 */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid rgba(166, 44, 33, 0.1);
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.page-subtitle {
  font-size: 1.4rem;
  color: #a62c21;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

/* 内容主体 */
.content-body {
  line-height: 1.8;
}

/* 章节样式 */
.section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(166, 44, 33, 0.3);
}

.section-text {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.2rem;
  text-align: justify;
}

.element-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 0.5rem;
}

.element-list li {
  padding: 0.3rem 0;
  color: #555;
}

.element-list strong {
  color: #2c3e50;
}

/* 八卦排列 */
.cycle-diagram {
  background-color: rgba(166, 44, 33, 0.08);
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
  text-align: center;
}

.cycle-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.cycle-desc {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.5rem;
}

/* 八卦圆环布局 */
.bagua-ring {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 1.5rem;
  position: relative;
}

.bagua-item {
  flex: 0 0 calc(33.33% - 0.7rem);
  text-align: center;
  font-size: 0.85rem;
  color: #555;
  padding: 0.6rem 0.4rem;
  background: rgba(255,255,255,0.6);
  border-radius: 8px;
  border: 1px solid rgba(166, 44, 33, 0.1);
}

.trigram-symbol {
  font-size: 1.8rem;
  display: block;
  color: #2c3e50;
  margin-bottom: 0.2rem;
}

.trigram-symbol.yin {
  color: #a62c21;
}

.bagua-center {
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin-top: 0.5rem;
  color: #2c3e50;
}

.modern-practices {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: #555;
}

.modern-practices li {
  margin-bottom: 0.8rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .section-text {
    font-size: 1rem;
  }

  .bagua-arrangement {
    max-width: 220px;
  }

  .bagua-pos strong {
    font-size: 1.4rem;
  }
}
</style>
