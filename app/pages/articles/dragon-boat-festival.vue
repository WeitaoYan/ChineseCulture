<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Dragon Boat Festival</h1>
      <p class="page-subtitle">
        Duanwu Festival - Racing Dragons and Wrapping Zongzi
      </p>
      <PageMeta>
        <MetaItem>🚁 Dragon Boat Racing</MetaItem>
        <MetaItem>💎 Zongzi Dumplings</MetaItem>
        <MetaItem>🌿 Mugwort and Aromatic Herbs</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FestivalDates
      festival-name="Dragon Boat Festival"
      :lunar-month="5"
      :lunar-day="5"
    />

    <FeaturedImage
      imageSrc="/assets/images/dragon-boat-festival.png"
      altText="Dragon Boat Festival - vibrant dragon boat races on rivers and lakes"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          Dragon Boat Festival (端午节), also known as Duanwu Festival, is one
          of China's most exciting traditional festivals. Celebrated on the 5th
          day of the 5th month of the lunar calendar (usually in June), it
          combines thrilling dragon boat races with the aroma of freshly steamed
          zongzi. The festival is rich in cultural significance, honoring national
          heroes while embracing the vitality of summer.
        </p>
        <p class="section-text">
          With origins dating back over 2,000 years, Dragon Boat Festival
          showcases the perfect blend of athletic competition, culinary tradition,
          and spiritual ritual. It is observed not only across China but also in
          many East and Southeast Asian communities, making it a truly global
          celebration of Chinese culture.
        </p>
      </section>

      <!-- 时间介绍 -->
      <section class="section">
        <h2 class="section-title">When Is Dragon Boat Festival?</h2>
        <FeatureGrid>
          <FeatureItem title="Date" theme="red">
            <p>
              Dragon Boat Festival falls on the <strong>5th day of the 5th lunar month</strong>,
              which typically corresponds to <strong>June</strong> in the Gregorian
              calendar. The exact date varies each year as it follows the
              traditional Chinese lunar calendar.
            </p>
          </FeatureItem>
          <FeatureItem title="Origin of Name" theme="red">
            <p>
              "Duanwu" (端午) means "beginning of midday" or "end of the fifth",
              referring to the lunar date. The more popular English name
              "Dragon Boat Festival" comes from the spectacular races of
              long, dragon-prowed boats that are the holiday's centerpiece.
            </p>
          </FeatureItem>
          <FeatureItem title="Holiday Duration" theme="red">
            <p>
              In modern China, Dragon Boat Festival is a public holiday,
              typically observed with a one-day break, often combined with a
              weekend to create a three-day holiday period for travel and family
              gatherings.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 龙舟竞渡 -->
      <section class="section">
        <h2 class="section-title">Dragon Boat Racing</h2>
        <p class="section-text">
          The most iconic feature of Dragon Boat Festival is the thrilling dragon
          boat race. Teams of paddlers race their ornately decorated boats to
          the rhythmic beating of drums, creating one of the most visually
          spectacular events in Chinese culture.
        </p>
        <FeatureGrid>
          <FeatureItem title="Dragon Boats" theme="red">
            <p>
              Traditional dragon boats are long, narrow vessels adorned with a
              carved dragon head at the bow and a dragon tail at the stern. They
              typically accommodate 20–22 paddlers, a drummer, and a coxswain
              who steers from the rear.
            </p>
          </FeatureItem>
          <FeatureItem title="The Drummer" theme="red">
            <p>
              The drummer sits at the front of the boat, beating a large drum to
              set the pace and inspire the team. The rhythm of the drum is
              believed to awaken the dragon spirit and unite all paddlers into
              a single, powerful force.
            </p>
          </FeatureItem>
          <FeatureItem title="Race Traditions" theme="red">
            <p>
              Before races begin, teams perform a ceremonial "Eye-Dotting"
              ritual (点睛) to bring the dragon to life by painting its eyes
              with red paint. This tradition dates back centuries and honors the
              dragon's spiritual significance.
            </p>
          </FeatureItem>
          <FeatureItem title="Competitive Spirit" theme="red">
            <p>
              Dragon boat racing is now an internationally recognized sport with
              governing bodies and annual world championships. However, locally
              organized races in rivers and lakes across China remain deeply
              rooted in community spirit and friendly rivalry.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 粽子 -->
      <section class="section">
        <h2 class="section-title">Zongzi — Sticky Rice Dumplings</h2>
        <p class="section-text">
          No Dragon Boat Festival is complete without zongzi (粽子), the
          pyramid-shaped sticky rice dumplings wrapped in bamboo leaves. These
          delicious bundles are steamed or boiled and come in both sweet and
          savory varieties.
        </p>
        <FeatureGrid>
          <FeatureItem title="Northern Style" theme="red">
            <p>
              In northern China, zongzi are typically sweetened with red bean
              paste or jujube (Chinese date). They tend to be larger and often
              dipped in sugar or syrup before eating. Common shapes are
              rectangular or conical.
            </p>
          </FeatureItem>
          <FeatureItem title="Southern Style" theme="red">
            <p>
              Southern zongzi are usually savory, filled with marinated pork,
              salted egg yolk, chestnuts, or mushrooms. They are often wrapped
              in multiple layers of bamboo leaves for extra protection and flavor,
              and are more compact and triangular in shape.
            </p>
          </FeatureItem>
          <FeatureItem title="The Wrapping Process" theme="red">
            <p>
              Making zongzi is a cherished family activity. Bamboo leaves are
              soaked until pliable, sticky rice and fillings are prepared, and
              the leaves are folded and tied with string into their distinctive
              pyramid shape — a skill passed down through generations.
            </p>
          </FeatureItem>
          <FeatureItem title="Legend of Zongzi" theme="red">
            <p>
              Zongzi is traditionally associated with the legend of Qu Yuan.
              Legend says that after the poet drowned, locals threw rice dumplings
              into the river to prevent fish from eating his body, giving rise
              to the enduring tradition of zongzi during the festival.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 艾草与香囊 -->
      <section class="section">
        <h2 class="section-title">Mugwort and Aromatic Traditions</h2>
        <p class="section-text">
          Dragon Boat Festival falls at the height of summer, traditionally
          considered a time of illness and pestilence. As a result, the festival
          is rich in customs designed to ward off disease, repel insects, and
          bring good health.
        </p>
        <FeatureGrid>
          <FeatureItem title="Hanging Mugwort and Calamus" theme="red">
            <p>
              It is customary to hang bundles of mugwort (艾草) and calamus
              (菖蒲) above doors and windows during Dragon Boat Festival. These
              aromatic plants are believed to repel insects, ward off evil
              spirits, and bring good fortune to the household.
            </p>
          </FeatureItem>
          <FeatureItem title="Aromatic Sachets" theme="red">
            <p>
              Children and adults often wear fragrant sachets (香囊) filled with
              medicinal herbs and spices, hung around the neck or pinned to
              clothing. These sachets are both decorative and believed to have
              protective, disease-preventing properties.
            </p>
          </FeatureItem>
          <FeatureItem title="Five-Color Thread" theme="red">
            <p>
              Parents traditionally tie five-color silk thread (五彩丝) around
              their children's wrists, necks, or ankles during the festival.
              The five colors — red, yellow, white, black, and green — represent
              the five elements and are believed to protect against evil.
            </p>
          </FeatureItem>
          <FeatureItem title="Realgar Wine" theme="red">
            <p>
              A small amount of realgar wine (雄黄酒), made with powdered realgar,
              is sometimes drunk or dabbed on children's foreheads during the
              festival. It is believed to repel evil spirits and toxic creatures.
              In modern times, this practice is less common due to the toxicity
              of realgar.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 历史典故 -->
      <section class="section">
        <h2 class="section-title">The Legend of Qu Yuan</h2>
        <p class="section-text">
          The most widely known origin of Dragon Boat Festival is linked to the
          tragic story of Qu Yuan (屈原), a patriotic poet and statesman of the
          Warring States Period (340–278 BCE).
        </p>
        <FeatureGrid>
          <FeatureItem title="The Poet" theme="red">
            <p>
              Qu Yuan served as a minister in the Kingdom of Chu. Known for his
              brilliant literary talent and deep love for his country, he authored
              the famous work "Encountering Sorrow" (离骚), one of the greatest
              poems in Chinese literature.
            </p>
          </FeatureItem>
          <FeatureItem title="Exile" theme="red">
            <p>
              Due to political intrigue and slander by jealous rivals, Qu Yuan
              was exiled by King Huai of Chu. During his exile, he traveled
              across the land, writing poetry that expressed his longing for
              his homeland and his grief over its decline.
            </p>
          </FeatureItem>
          <FeatureItem title="Drowning" theme="red">
            <p>
              In 278 BCE, upon hearing that Chu's capital had been invaded by
              Qin forces, Qu Yuan was so distraught that he drowned himself in
              the Miluo River (汨罗江) on the 5th day of the 5th lunar month,
              choosing death over serving a fallen kingdom.
            </p>
          </FeatureItem>
          <FeatureItem title="Dragon Boat Racing" theme="red">
            <p>
              Upon hearing of Qu Yuan's death, local fishermen rushed to the
              river in their boats, racing to save him or retrieve his body.
              This frantic search gave rise to the tradition of dragon boat
              races. To keep fish away, they also beat the water and threw
              rice dumplings into the river.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">Cultural Significance</h2>
        <FeatureGrid>
          <FeatureItem title="Patriotism" theme="red">
            <p>
              Through the story of Qu Yuan, Dragon Boat Festival embodies the
              Chinese value of patriotism and loyalty to one's country. It
              celebrates those who place the nation's interests above their own
              personal well-being.
            </p>
          </FeatureItem>
          <FeatureItem title="Community Spirit" theme="red">
            <p>
              Dragon boat races foster a strong sense of teamwork, community
              pride, and collective identity. Villages, companies, and
              organizations field teams that train together, strengthening
              social bonds.
            </p>
          </FeatureItem>
          <FeatureItem title="Harmony with Nature" theme="red">
            <p>
              The festival's herbal and aromatic traditions reflect the Chinese
              philosophy of living in harmony with nature and using natural
              remedies to maintain health and balance through seasonal transitions.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 著名诗句 -->
      <section class="section quote-section">
        <h2 class="section-title">Famous Poem</h2>
        <div class="quote-content">
          <p class="quote-chinese">
            粽包分两髻，<br />
            艾束著危冠。<br />
            旧俗方储药，<br />
            骄躯亦点丹。
          </p>
          <p class="quote-translation">
            "Zongzi wrapped and divided into two portions,<br />
            Mugwort bound atop the tall hat.<br />
            Following old customs to store medicinal herbs,<br />
            A proud frame anointed with cinnabar."
          </p>
          <p class="quote-author">— Lu You (陆游), Song Dynasty Poet</p>
        </div>
      </section>

      <!-- 现代庆祝 -->
      <section class="section">
        <h2 class="section-title">Modern Celebrations</h2>
        <p class="section-text">
          Today, Dragon Boat Festival is celebrated with great enthusiasm
          across China and around the world, with a mix of time-honored
          traditions and modern innovations.
        </p>
        <FeatureGrid>
          <FeatureItem title="International Growth" theme="red">
            <p>
              Dragon boat racing has become a global sport with competitions
              held worldwide, from the United States to Australia. Annual
              international dragon boat festivals attract thousands of
              participants and draw massive crowds.
            </p>
          </FeatureItem>
          <FeatureItem title="Culinary Innovation" theme="red">
            <p>
              While traditional zongzi remain popular, modern variations have
              emerged including ice cream zongzi, chocolate zongzi, and even
              fusion flavors that blend traditional fillings with contemporary
              tastes, especially popular among younger generations.
            </p>
          </FeatureItem>
          <FeatureItem title="Cultural Tourism" theme="red">
            <p>
              Many Chinese cities organize large-scale dragon boat events during
              the festival, attracting tourists with performances, food fairs,
              and cultural exhibitions that showcase the rich heritage of this
              ancient celebration.
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
              <strong>Best Time to Experience:</strong> Late May to mid-June
              (lunar 5th month) is the ideal time to visit China for the
              Dragon Boat Festival. Many cities along rivers and lakes host
              spectacular races.
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-icon">⚠️</span>
            <div class="tip-text">
              <strong>Food Alert:</strong> Do not miss the chance to try
              freshly made zongzi — both sweet and savory varieties. They are
              best enjoyed warm, and food markets during the festival are
              especially lively.
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-icon">🌿</span>
            <div class="tip-text">
              <strong>Aromatic Souvenirs:</strong> Fragrant sachets and
              five-color thread bracelets make wonderful, meaningful souvenirs.
              Look for them at local markets during the festival period.
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-icon">🚣</span>
            <div class="tip-text">
              <strong>Join a Race:</strong> Many dragon boat teams welcome
              international visitors to participate. It is a fantastic way to
              experience the energy and teamwork that define this festival.
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Nuxt 3 会自动导入 components 目录下的组件
definePageMeta({
  layout: "content",
  title: "Dragon Boat Festival - Chinese Culture Explorer",
  description:
    "Discover Dragon Boat Festival, the exciting Duanwu Festival with dragon boat races, zongzi dumplings, and ancient traditions.",
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
  border-left: 4px solid rgba(166, 44, 33, 0.1);
}

.section:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
  border-left-color: #a62c21;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(166, 44, 33, 0.1);
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
    rgba(166, 44, 33, 0.05),
    rgba(212, 175, 55, 0.08)
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
  color: #a62c21;
  font-weight: 600;
}

/* 小贴士部分 */
.tips-section {
  background: linear-gradient(
    135deg,
    rgba(76, 175, 80, 0.05),
    rgba(166, 44, 33, 0.05)
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
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.tip-item:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: translateX(5px);
}

.tip-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.tip-text {
  color: #555;
  line-height: 1.6;
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
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .section-text {
    font-size: 1rem;
  }

  .quote-chinese {
    font-size: 1.2rem;
  }
}
</style>
