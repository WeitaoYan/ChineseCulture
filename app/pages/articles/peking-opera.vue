<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Peking Opera</h1>
      <p class="page-subtitle">
        Jīng Jù — The Quintessence of Chinese Performing Arts
      </p>
      <PageMeta>
        <MetaItem>🎭 Four Roles</MetaItem>
        <MetaItem>🎵 Music & Song</MetaItem>
        <MetaItem>🎨 Face Painting</MetaItem>
        <MetaItem>⚔️ Acrobatics</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/peking-opera.png"
      altText="Peking Opera performer in elaborate costume and painted face"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Peking Opera</strong> (京剧, Jīng Jù) is the most celebrated
          form of traditional Chinese opera and one of the most sophisticated
          performing arts in the world. Combining music, vocal performance,
          mime, dance, and acrobatics, it is a comprehensive theatrical art
          that has captivated audiences for over 200 years.
        </p>
        <p class="section-text">
          Widely regarded as the "quintessence of Chinese culture" (国粹),
          Peking Opera is more than entertainment — it is a living museum of
          Chinese history, morality, and aesthetics. Every gesture, costume
          color, painted face pattern, and musical phrase carries specific
          meaning, creating a rich symbolic language that audiences learn to
          read like a book.
        </p>
      </section>

      <!-- 历史 -->
      <section class="section">
        <h2 class="section-title">A Brief History</h2>
        <FeatureGrid>
          <FeatureItem title="Origins (1790)" theme="red">
            <p>
              Peking Opera was born in 1790 when four Anhui opera troupes
              traveled to Beijing to perform for Emperor Qianlong's 80th
              birthday. Their performances blended Anhui opera, Kunqu,
              Qinqiang, and Han folk melodies, gradually evolving into a
              distinct new form.
            </p>
          </FeatureItem>
          <FeatureItem title="Golden Age (19th C.)" theme="gold">
            <p>
              During the late Qing Dynasty and early Republic, Peking Opera
              reached its artistic peak. Legendary performers like Cheng
              Changgeng and Tan Xinpei established the stylistic conventions
              still followed today. It became the most popular entertainment
              across all social classes.
            </p>
          </FeatureItem>
          <FeatureItem title="Mei Lanfang Era" theme="blue">
            <p>
              Mei Lanfang (梅兰芳, 1894–1961), the greatest Dan performer in
              history, elevated Peking Opera to international fame. He toured
              Japan, the United States, and the Soviet Union, influencing
              theater masters like Charlie Chaplin and Stanislavski.
            </p>
          </FeatureItem>
          <FeatureItem title="Modern Revival" theme="green">
            <p>
              After suppression during the Cultural Revolution, Peking Opera
              has been revitalized. In 2010, UNESCO recognized it as an
              Intangible Cultural Heritage of Humanity. Today, young
              audiences rediscover it through digital platforms and fusion
              productions.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 四大行当 -->
      <section class="section">
        <h2 class="section-title">The Four Main Roles (四大行当)</h2>
        <p class="section-text">
          Every character in Peking Opera belongs to one of four major role
          types, distinguished by costume, makeup, voice, and performance
          style:
        </p>
        <FeatureGrid>
          <FeatureItem title="Shēng (生) — Male Lead" theme="blue">
            <p>
              The male role, divided into subcategories: <em>Lao Sheng</em>
              (老生, old man) wears a beard and uses a natural voice;
              <em>Xiao Sheng</em> (小生, young man) uses a high-pitched,
              falsetto voice; <em>Wu Sheng</em> (武生, martial man) excels in
              acrobatics and combat scenes.
            </p>
          </FeatureItem>
          <FeatureItem title="Dàn (旦) — Female Lead" theme="red">
            <p>
              The female role, traditionally performed by men. <em>Qing Yi</em>
              (青衣) is the virtuous, refined woman; <em>Hua Dan</em> (花旦) is
              the vivacious, flirtatious maiden; <em>Lao Dan</em> (老旦) is the
              elderly woman; <em>Wu Dan</em> (武旦) is the martial female
              warrior.
            </p>
          </FeatureItem>
          <FeatureItem title="Jìng (净) — Painted Face" theme="gold">
            <p>
              The powerful, dramatic male role with a elaborately painted face.
              <em>Tong Chui</em> (铜锤) is the upright general or official;
              <em>Jia Zi</em> (架子) is the fierce warrior or bandit. The face
              painting (脸谱) reveals the character's personality — red for
              loyalty, white for treachery, black for integrity.
            </p>
          </FeatureItem>
          <FeatureItem title="Chǒu (丑) — Clown" theme="gray">
            <p>
              The comic role, recognizable by a small patch of white paint on
              the nose. Wen Chou (文丑) is the civilian clown — a witty servant
              or funny official; Wu Chou (武丑) is the martial clown, combining
              humor with impressive acrobatic skills.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 脸谱艺术 -->
      <section class="section">
        <h2 class="section-title">The Art of Face Painting (脸谱 / Liǎn Pǔ)</h2>
        <p class="section-text">
          One of the most distinctive features of Peking Opera is its
          elaborate face painting. The colors and patterns on a Jing role's
          face are a visual code that tells the audience everything about the
          character before a single word is spoken:
        </p>
        <FeatureGrid>
          <FeatureItem title="🔴 Red = Loyalty & Courage" theme="red">
            <p>
              Red faces represent brave, loyal, and upright characters.
              Guan Yu (关羽), the legendary general from the Three Kingdoms,
              is the classic red-faced figure — symbolizing his unwavering
              loyalty and martial prowess.
            </p>
          </FeatureItem>
          <FeatureItem title="⚪ White = Cunning & Treachery" theme="gray">
            <p>
              White faces signal deceit, cunning, and evil. Cao Cao (曹操),
              the cunning warlord of the Three Kingdoms, is the archetypal
              white-faced villain — his powdered face a mask for his
              ruthless ambition.
            </p>
          </FeatureItem>
          <FeatureItem title="⚫ Black = Integrity & Strength" theme="gray">
            <p>
              Black faces denote honesty, integrity, and rough strength. Bao
              Zheng (包拯), the legendary Song Dynasty judge known for his
              impartial justice, always appears with a black face and a
              crescent moon on his forehead.
            </p>
          </FeatureItem>
          <FeatureItem title="🟡 Yellow = Ambition & Ferocity" theme="yellow">
            <p>
              Yellow faces belong to ambitious, fierce, and sometimes
              ruthless characters. Blue and green faces are used for
              supernatural figures or particularly savage warriors.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 表演四功 -->
      <section class="section">
        <h2 class="section-title">The Four Skills (四功 / Sì Gōng)</h2>
        <p class="section-text">
          Peking Opera performers train from childhood in four fundamental
          skills, mastering each to a level that rivals Olympic athletes and
          concert musicians:
        </p>
        <FeatureGrid>
          <FeatureItem title="Chàng (唱) — Singing" theme="gold">
            <p>
              A highly stylized vocal technique blending speech, song, and
              emotive expression. Performers train for years to control
              pitch, resonance, and breath. The two main musical modes are
              <em>Xipi</em> (西皮) for lively scenes and <em>Erhuang</em>
              (二黄) for solemn moments.
            </p>
          </FeatureItem>
          <FeatureItem title="Niàn (念) — Speech" theme="blue">
            <p>
              Rhythmic, musicalized dialogue that follows precise tonal
              patterns. There are two styles: <em>Yun Bai</em> (韵白) —
              elegant, stylized speech in a refined dialect, used by
              serious characters; and <em>Jing Bai</em> (京白) — livelier,
              colloquial speech used by clowns and maidens.
            </p>
          </FeatureItem>
          <FeatureItem title="Zuò (做) — Dance & Gesture" theme="red">
            <p>
              Every movement is choreographed and symbolic. A four-step walk
              can represent a long journey; rotating a sleeve can express
              anger or sorrow. Mimed actions — opening a door, riding a horse,
              rowing a boat — are performed with such precision that the
              audience "sees" the invisible props.
            </p>
          </FeatureItem>
          <FeatureItem title="Dǎ (打) — Acrobatics & Combat" theme="green">
            <p>
              Martial arts and acrobatics performed with dazzling speed and
              precision. Fight scenes combine real martial arts techniques
              with theatrical flourishes — somersaults, weapon twirling, and
              synchronized ensemble combat that can leave audiences breathless.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 音乐与乐器 -->
      <section class="section">
        <h2 class="section-title">Music & Instruments</h2>
        <p class="section-text">
          The Peking Opera orchestra is small but powerful, consisting of
          both melodic and percussion instruments. The music follows
          standard patterns (板腔体) that guide the rhythm, mood, and pace
          of every performance:
        </p>
        <FeatureGrid>
          <FeatureItem title="Jīng Hú (京胡)" theme="gold">
            <p>
              The lead melodic instrument — a two-stringed bowed fiddle with
              a piercing, bright tone. The Jing Hu player is the musical
              director of the performance, setting the tempo and signaling
              changes in mood.
            </p>
          </FeatureItem>
          <FeatureItem title="Percussion Section" theme="red">
            <p>
              The <em>Danpigu</em> (单皮鼓, single-skin drum) and <em>Ban</em>
              (板, wooden clappers) are conducted by the drummer, who
              controls the entire performance's rhythm. Cymbals, gongs, and
              bells punctuate dramatic moments and combat scenes.
            </p>
          </FeatureItem>
          <FeatureItem title="Yuè Qín (月琴)" theme="blue">
            <p>
              A four-stringed plucked lute with a round moon-shaped body. It
              provides harmonic support and adds a bright, crisp texture to
              the ensemble.
            </p>
          </FeatureItem>
          <FeatureItem title="Suǒ Nà (唢呐)" theme="green">
            <p>
              A double-reed Chinese horn, used for military processions,
              weddings, and grand entrances. Its loud, penetrating sound
              carries over the orchestra and the audience's excitement.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 经典剧目 -->
      <section class="section">
        <h2 class="section-title">Famous Repertoire</h2>
        <p class="section-text">
          Peking Opera draws its stories from Chinese history, legend, and
          classical literature. Some of the most beloved and frequently
          performed works include:
        </p>
        <FeatureGrid>
          <FeatureItem title="Farewell My Concubine (霸王别姬)" theme="red">
            <p>
              The tragic story of Xiang Yu, the defeated warlord, and his
              beloved concubine Yu Ji on the eve of his final battle. Made
              internationally famous by Chen Kaige's award-winning film.
            </p>
          </FeatureItem>
          <FeatureItem title="The Drunken Beauty (贵妃醉酒)" theme="gold">
            <p>
              Mei Lanfang's signature piece. Yang Guifei, the Tang Dynasty
              imperial consort, drowns her romantic sorrow in wine — a
              virtuoso display of acting, singing, and dance.
            </p>
          </FeatureItem>
          <FeatureItem title="The Legend of the White Snake (白蛇传)" theme="blue">
            <p>
              A beloved love story between a human scholar and a white snake
              spirit who has taken human form. Combines romance, comedy, and
              spectacular martial arts battles.
            </p>
          </FeatureItem>
          <FeatureItem title="The Crossroads (三岔口)" theme="black">
            <p>
              A masterpiece of mime and martial arts. Two characters fight in
              what is supposed to be total darkness, but the stage is fully
              lit — the performers must convince the audience they cannot see
              each other through their movements alone.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "The highest achievement of Peking Opera is not mere entertainment.
          It is the perfect union of song, dance, and drama — a complete work
          of art that speaks directly to the heart."
          <template #author>— Mei Lanfang (梅兰芳)</template>
        </QuoteBox>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title:
    "Peking Opera | The Quintessence of Chinese Culture — Chinese Culture Guide",
  description:
    "Discover Peking Opera (京剧), China's most celebrated performing art. Explore the Four Roles, face painting symbolism, the Four Skills of performance, legendary repertoire, and the legacy of Mei Lanfang.",
  ogTitle: "Peking Opera — The Quintessence of Chinese Performing Arts",
  ogDescription:
    "Explore the history, roles, music, and artistry of Peking Opera — China's most treasured performing art",
  ogType: "article",
  ogImage: "/assets/images/peking-opera.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Peking Opera",
  twitterDescription:
    "Explore the history, roles, music, and artistry of Peking Opera",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Peking Opera — The Quintessence of Chinese Culture",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Peking Opera",
        description:
          "Comprehensive guide to Peking Opera (Jingju), covering its history, four main role types, face painting symbolism, four performance skills, musical instruments, and classic repertoire",
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
</style>
