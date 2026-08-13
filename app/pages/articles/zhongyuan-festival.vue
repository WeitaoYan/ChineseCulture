<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Zhongyuan Festival</h1>
      <p class="page-subtitle">
        Ghost Festival — Honoring Ancestors and the Spirit World
      </p>
      <PageMeta>
        <MetaItem>👻 Ancestor Worship</MetaItem>
        <MetaItem>🏮 Lanterns on Water</MetaItem>
        <MetaItem>🙏 Compassion & Charity</MetaItem>
      </PageMeta></div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/zhongyuan-festival.png"
      altText="Zhongyuan Festival - floating lanterns on a river at night, honoring spirits and ancestors"
    />

    <FestivalDates
      festival-name="Zhongyuan Festival"
      :lunar-month="7"
      :lunar-day="15"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          The Zhongyuan Festival (中元节), widely known in English as the Ghost
          Festival, is one of China's most important traditional observances for
          honoring the deceased. Falling on the <strong>15th day of the 7th lunar
          month</strong> (typically in August), it is believed that on this day the
          gates of the underworld open, releasing hungry ghosts and ancestral spirits
          to roam the living world.
        </p>
        <p class="section-text">
          Rooted in a blend of <strong>Taoist</strong> and <strong>Buddhist</strong>
          traditions — known as "Zhongyuan" in Taoism and "Yu Lan Pen" (Ullambana)
          in Buddhism — the festival has been observed for over 1,500 years. While
          its themes of death and spirits may seem somber, the festival is ultimately
          an expression of filial piety, compassion, and the deep Chinese belief in
          maintaining harmony between the living and the dead.
        </p>
      </section>

      <!-- 时间介绍 -->
      <section class="section">
        <h2 class="section-title">When Is the Zhongyuan Festival?</h2>
        <FeatureGrid>
          <FeatureItem title="Date" theme="gray">
            <p>
              The Zhongyuan Festival falls on the <strong>15th day of the 7th lunar
              month</strong>. In the Gregorian calendar, this usually corresponds to
              mid-to-late August. The entire 7th lunar month is traditionally
              considered Ghost Month (鬼月).
            </p>
          </FeatureItem>
          <FeatureItem title="Taoist Meaning" theme="gray">
            <p>
              In Taoism, "Zhongyuan" (中元) refers to one of the three primordial
              officials (三元). The Earth Official (地官) is believed to visit the
              world on this day to judge souls and pardon sins, making it a day of
              repentance and mercy.
            </p>
          </FeatureItem>
          <FeatureItem title="Buddhist Meaning" theme="gray">
            <p>
              In Buddhism, the day is called Yu Lan Pen (盂兰盆节), from the
              Ullambana Sutra, telling the story of Mulian (Maudgalyayana) saving
              his mother from the realm of hungry ghosts through offerings to monks.
            </p>
          </FeatureItem>
          <FeatureItem title="Regional Variations" theme="gray">
            <p>
              While observed throughout the Chinese world, the festival is most
              elaborately celebrated in southern China, Taiwan, Hong Kong, Macau,
              and Southeast Asian Chinese communities. Some regions hold celebrations
              on different days within the 7th month.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 核心习俗 -->
      <section class="section">
        <h2 class="section-title">Core Traditions and Customs</h2>
        <p class="section-text">
          The Zhongyuan Festival involves a rich tapestry of rituals aimed at
          honoring ancestors, appeasing wandering spirits, and accumulating merit
          through compassionate acts.
        </p>
        <FeatureGrid>
          <FeatureItem title="Ancestor Worship" theme="gray">
            <p>
              Families prepare elaborate offerings of food, tea, fruit, and incense
              at home altars or ancestral graves. These offerings express gratitude
              to ancestors and ensure their continued well-being in the afterlife.
              Special attention is given to making the ancestors feel welcomed and
              honored.
            </p>
          </FeatureItem>
          <FeatureItem title="Floating Water Lanterns" theme="gray">
            <p>
              One of the most visually stunning traditions: paper lanterns are set
              afloat on rivers, lakes, and seas. The drifting lights are believed to
              guide lost spirits back to the underworld and illuminate the path for
              ancestral souls. In some regions, thousands of lanterns light up the
              night sky and water in a breathtaking spectacle.
            </p>
          </FeatureItem>
          <FeatureItem title="Burning Joss Paper" theme="gray">
            <p>
              People burn joss paper (spirit money), paper clothes, paper houses,
              and even paper mobile phones and cars — believed to be sent to the
              afterlife for use by ancestors and wandering spirits. These offerings
              are often made in designated areas or on street corners to avoid
              offending spirits.
            </p>
          </FeatureItem>
          <FeatureItem title="Offerings to Hungry Ghosts" theme="gray">
            <p>
              Outside the home, people leave food and incense offerings for
              unattended wandering spirits — those with no descendants to care for
              them. This practice embodies the Buddhist virtue of compassion for
              all sentient beings and prevents these spirits from causing mischief.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 民间禁忌 -->
      <section class="section">
        <h2 class="section-title">Taboos and Superstitions</h2>
        <p class="section-text">
          During the Ghost Month, various taboos are observed — especially by
          older generations — to avoid attracting unwanted spiritual attention.
        </p>
        <FeatureGrid>
          <FeatureItem title="Avoid Swimming" theme="gray">
            <p>
              It is believed that water spirits may try to drown swimmers, so
              swimming in natural waters is avoided, especially at night.
            </p>
          </FeatureItem>
          <FeatureItem title="No Late Nights" theme="gray">
            <p>
              Staying out after dark is discouraged, as spirits are believed to be
              most active at night. People are advised to return home before sunset
              during the Ghost Month.
            </p>
          </FeatureItem>
          <FeatureItem title="Don't Whistle or Sing" theme="gray">
            <p>
              Whistling, singing, or making loud noises at night is said to attract
              wandering spirits who may follow you home. Silence is considered
              respectful during this period.
            </p>
          </FeatureItem>
          <FeatureItem title="Avoid Hanging Clothes at Night" theme="gray">
            <p>
              Clothes hung outside at night are believed to be occupied by spirits
              who want to wear them. Laundry should be taken in before sunset,
              especially dark-colored items that spirits are drawn to.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 佛教盂兰盆节 -->
      <section class="section">
        <h2 class="section-title">The Buddhist Ullambana Tradition</h2>
        <p class="section-text">
          The Buddhist dimension of the festival is deeply connected to the legend
          of <strong>Mulian Saving His Mother</strong> (目连救母), a story that
          has been told in Chinese culture for over 1,500 years and appears in
          Dunhuang manuscripts and later vernacular literature.
        </p>
        <FeatureGrid>
          <FeatureItem title="The Story of Mulian" theme="gray">
            <p>
              The Buddha's disciple Mulian (Maudgalyayana), possessing supernatural
              vision, saw his deceased mother suffering in the realm of hungry ghosts
              (preta) — emaciated, starving, and unable to eat. Distraught, he
              begged the Buddha for a way to save her.
            </p>
          </FeatureItem>
          <FeatureItem title="The Buddha's Teaching" theme="gray">
            <p>
              The Buddha instructed Mulian to make offerings to the monastic
              community on the 15th day of the 7th month, after the monks' summer
              retreat. The collective merit from these offerings would be
              transferred to his mother, allowing her liberation. This became the
              origin of the Ullambana ceremony.
            </p>
          </FeatureItem>
          <FeatureItem title="Legacy in Chinese Culture" theme="gray">
            <p>
              The story of Mulian became one of the most popular tales in Chinese
              Buddhism. It was adapted into <strong>bianwen</strong> (transformation
              texts), operas, and folk performances, influencing Chinese literature
              and theater for centuries. The story remains a powerful allegory for
              filial piety.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 仪式与表演 -->
      <section class="section">
        <h2 class="section-title">Public Rituals and Performances</h2>
        <p class="section-text">
          Many Chinese communities organize large-scale public events during the
          Zhongyuan Festival that blend religious ritual with cultural performance.
        </p>
        <FeatureGrid>
          <FeatureItem title="Chinese Opera for Spirits" theme="gray">
            <p>
              Known as "Spirit Operas" (神功戏) or "Ghost Operas," performances are
              staged on temporary bamboo platforms in open spaces. The front rows
              are deliberately left empty for spirits to watch — living audience
              members sit further back as a sign of respect.
            </p>
          </FeatureItem>
          <FeatureItem title="Chiu Qian (Priest Rituals)" theme="gray">
            <p>
              Taoist priests perform elaborate ceremonies including the "Breaking
              of Hell's Gates" ritual, summoning and releasing trapped souls, and
              the distribution of blessed food and money to spirits. These rituals
              can last for days and involve complex talisman drawing and chanting.
            </p>
          </FeatureItem>
          <FeatureItem title="Lantern Processions" theme="gray">
            <p>
              In Hong Kong's Cheung Chau Island and various towns in Taiwan and
              Fujian, grand lantern parades wind through streets at night. Giant
              lanterns shaped like deities, dragons, and mythical creatures lead
              the procession, accompanied by drums, gongs, and chanting.
            </p>
          </FeatureItem>
          <FeatureItem title="Feast for the Lonely Spirits" theme="gray">
            <p>
              Communities collectively prepare massive feasts — often with whole
              roasted pigs, poultry, and seasonal fruits — placed on long outdoor
              tables. Incense is burned as an invitation, and after the spirits
              have "dined," the food is distributed to the poor and needy.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 地方特色 -->
      <section class="section">
        <h2 class="section-title">Regional Highlights</h2>
        <FeatureGrid>
          <FeatureItem title="Hong Kong" theme="gray">
            <p>
              The "Yue Lan" (Hungry Ghosts Festival) in Hong Kong features
              spectacular paper offerings, including luxury paper items like Rolex
              watches and apartment buildings. The Tin Hau Temple area hosts
              week-long celebrations with Cantonese opera performances.
            </p>
          </FeatureItem>
          <FeatureItem title="Taiwan" theme="gray">
            <p>
              Taiwan is famous for its <strong>Keelung Ghost Festival</strong>, one
              of the largest in the world. It features a massive lantern release,
              Taoist ceremonies that last an entire month, and the spectacular
              "Puning Temple" ritual with hundreds of participating priests.
            </p>
          </FeatureItem>
          <FeatureItem title="Fujian & Chaoshan" theme="gray">
            <p>
              In the Minnan and Chaoshan regions, families construct elaborate
              "paper houses" (纸厝) — detailed replicas of traditional homes,
              complete with miniature furniture and household goods — to be burned
              for ancestors' use in the afterlife.
            </p>
          </FeatureItem>
          <FeatureItem title="Southeast Asia" theme="gray">
            <p>
              In Singapore and Malaysia, "Getai" (歌台) performances — live music
              and variety shows on outdoor stages — are held throughout the Ghost
              Month. Similar to the spirit operas, front rows are reserved for
              spirits, and the shows are both entertainment for the living and an
              offering to the dead.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">Cultural Significance</h2>
        <FeatureGrid>
          <FeatureItem title="Filial Piety Beyond Death" theme="gray">
            <p>
              The Zhongyuan Festival powerfully expresses the Chinese value of
              filial piety (孝道) that extends beyond death. Children continue to
              care for their parents even in the afterlife, reflecting an
              unbroken bond between generations that transcends mortality.
            </p>
          </FeatureItem>
          <FeatureItem title="Compassion for All" theme="gray">
            <p>
              The festival's tradition of offering food to hungry ghosts — spirits
              with no descendants to care for them — embodies a profound compassion
              that extends beyond one's own family to all suffering beings. This
              reflects both Buddhist universal compassion and the Confucian ideal
              of extending love from family to society.
            </p>
          </FeatureItem>
          <FeatureItem title="Harmony Between Worlds" theme="gray">
            <p>
              At its core, Zhongyuan Festival is about maintaining cosmic harmony
              — the belief that the living and the dead exist in an interconnected
              relationship. By properly honoring spirits, the living ensure peace,
              prosperity, and protection for their families, while also fulfilling
              their moral duties.
            </p>
          </FeatureItem>
          <FeatureItem title="Cultural Preservation" theme="gray">
            <p>
              In modern times, the Zhongyuan Festival serves as a vital link to
              Chinese heritage. While younger generations may be less superstitious,
              the festival's core values — remembering ancestors, showing compassion,
              and maintaining family bonds — continue to resonate deeply.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 著名诗句 -->
      <section class="section quote-section">
        <h2 class="section-title">A Literary Reflection</h2>
        <div class="quote-content">
          <p class="quote-chinese">
            新秋七月半，<br />
            祭祖中元节。<br />
            河灯照冥路，<br />
            香火达天阙。
          </p>
          <p class="quote-translation">
            "In early autumn on the fifteenth,<br />
            Ancestors are honored at Zhongyuan.<br />
            River lanterns light the dark path,<br />
            Incense smoke reaches heaven's gate."
          </p>
          <p class="quote-author">— Traditional Chinese Folk Verse</p>
        </div>
      </section>

      <!-- 现代观察 -->
      <section class="section">
        <h2 class="section-title">Modern Observance</h2>
        <p class="section-text">
          In contemporary China, the Zhongyuan Festival is observed with varying
          degrees of intensity. While urban and younger populations may be less
          involved in traditional rituals, the festival remains an important part
          of life in rural areas and traditional communities.
        </p>
        <FeatureGrid>
          <FeatureItem title="Eco-Friendly Practices" theme="gray">
            <p>
              Growing environmental awareness has led to calls for reducing joss
              paper burning. Many communities now designate centralized burning
              areas or encourage digital memorials and flower offerings as cleaner
              alternatives.
            </p>
          </FeatureItem>
          <FeatureItem title="Intangible Heritage" theme="gray">
            <p>
              The Zhongyuan Festival was inscribed on China's National Intangible
              Cultural Heritage list, recognizing its cultural importance. Various
              local governments now sponsor organized events to preserve and promote
              traditional practices.
            </p>
          </FeatureItem>
          <FeatureItem title="Tourism and Culture" theme="gray">
            <p>
              In places like Hong Kong, Macau, and Taiwan, the festival has become
              a cultural tourism attraction. The spectacular water lantern releases
              and ghost operas draw visitors interested in experiencing authentic
              Chinese folk culture.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 给外国人的小贴士 -->
      <section class="section tips-section">
        <h2 class="section-title">Tips for International Visitors</h2>
        <div class="tips-content">
          <div class="tip-item">
            <span class="tip-icon">📌</span>
            <div class="tip-text">
              <strong>Best Time to Visit:</strong> The 15th day of the 7th lunar
              month (August) is the peak. Hong Kong and Taiwan offer the most
              visible public celebrations.
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-icon">⚠️</span>
            <div class="tip-text">
              <strong>Be Respectful:</strong> While the festival may seem eerie
              to outsiders, it is a solemn occasion. Avoid making jokes about
              ghosts or spirits, and do not touch offerings left on the streets.
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-icon">🏮</span>
            <div class="tip-text">
              <strong>Water Lanterns:</strong> The floating lantern ceremonies
              are the most photogenic aspect of the festival. Visit waterfront
              areas in the evening for spectacular views.
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-icon">🎭</span>
            <div class="tip-text">
              <strong>Watch a Spirit Opera:</strong> If you have the chance,
              attending a Getai or spirit opera performance is an unforgettable
              cultural experience that reveals the festival's vibrant folk
              tradition.
            </div>
          </div>
        </div>
      </section></div>
  
      <!-- AI 趣味测验 -->
      <CultureQuiz title="Zhongyuan Festival Quiz" />
  </div>
</template>

<script setup>
// Nuxt 3 会自动导入 components 目录下的组件
definePageMeta({
  layout: "content",
  title: "Zhongyuan Festival - Chinese Culture Explorer",
  description:
    "Discover Zhongyuan Festival (Ghost Festival), a traditional Chinese observance honoring ancestors and spirits with floating lanterns, offerings, and rituals.",
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
  border-bottom: 3px solid rgba(80, 80, 80, 0.15);
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
  color: #6d6d6d;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

/* 内容主体 */
.content-body {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* 章节样式 */
.section {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;
  transition: all 0.3s ease;
  border-left: 4px solid rgba(109, 109, 109, 0.1);
}

.section:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
  border-left-color: #6d6d6d;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(109, 109, 109, 0.1);
}

.section-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1rem;
  text-align: justify;
}

.section-text:last-child {
  margin-bottom: 0;
}

/* 诗句部分 */
.quote-section {
  background: linear-gradient(
    135deg,
    rgba(80, 80, 80, 0.05),
    rgba(109, 109, 109, 0.08)
  );
  text-align: center;
}

.quote-content {
  padding: 1rem;
}

.quote-chinese {
  font-size: 1.5rem;
  line-height: 2;
  color: #2c3e50;
  font-style: normal;
  margin-bottom: 1.5rem;
  font-family: "Noto Serif SC", serif;
}

.quote-translation {
  font-size: 1.1rem;
  font-style: italic;
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.quote-author {
  font-size: 1.1rem;
  color: #6d6d6d;
  font-weight: 600;
}

/* 小贴士部分 */
.tips-section {
  background: linear-gradient(
    135deg,
    rgba(80, 80, 80, 0.05),
    rgba(33, 150, 243, 0.05)
  );
}

.tips-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(109, 109, 109, 0.03);
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.tip-item:hover {
  background-color: rgba(109, 109, 109, 0.08);
}

.tip-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1.5;
}

.tip-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.tip-text strong {
  color: #2c3e50;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .section {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .section-text {
    font-size: 1rem;
  }

  .quote-chinese {
    font-size: 1.2rem;
  }
}
</style>
