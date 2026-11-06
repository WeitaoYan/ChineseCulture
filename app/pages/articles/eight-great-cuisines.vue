<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">The Eight Great Cuisines of China</h1>
      <p class="page-subtitle">
        Bā Dà Càixì — Eight Regional Traditions, One Extraordinary Table
      </p>
      <PageMeta>
        <MetaItem>🍜 Eight Regional Schools</MetaItem>
        <MetaItem>🌶️ From Mala to Delicate Sweetness</MetaItem>
        <MetaItem>🗺️ A Map You Can Taste</MetaItem>
        <MetaItem>🥢 Balance in Every Bite</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/eight-great-cuisines.png"
      altText="Overhead view of a lavish Chinese banquet table with many colourful regional dishes, chopsticks and tea cups"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>The Eight Great Cuisines of China</strong> (八大菜系, Bā Dà
          Càixì) are the eight great regional schools of Chinese cooking:
          Shandong, Sichuan, Cantonese, Jiangsu, Fujian, Hunan, Anhui, and
          Zhejiang. Each grew out of the landscape, climate, and history of its
          home region — the wheat fields and Yellow Sea coast of Shandong, the
          humid river valleys of Sichuan, the trading ports of Guangdong — and
          each answers the same question differently: what does good food taste
          like?
        </p>
        <p class="section-text">
          Together they are a map you can eat. A single country holds a cuisine
          that prizes the numbing tingle of Sichuan pepper and another that
          prizes the barely-seasoned sweetness of a freshly steamed fish. To
          learn the eight cuisines is to learn how geography becomes flavour,
          and how a shared set of ideas — balance, seasonality, respect for
          the ingredient — can produce eight completely different tables.
        </p>
      </section>

      <!-- 八大菜系的形成 -->
      <section class="section">
        <h2 class="section-title">How the Eight Came to Be</h2>
        <p class="section-text">
          Regional cooking in China is far older than the list itself. For
          centuries, cooks in each region worked with what the land gave them:
          wheat and seafood in the north, rice and river fish in the south,
          chilli and mountain herbs in the humid interior. The imperial court
          in Beijing drew the best of them together, and merchants, officials,
          and migrants carried recipes along the canals and trade roads,
          so regional styles were already famous long before anyone counted
          them.
        </p>
        <p class="section-text">
          The grouping into eight took its modern form in the late Qing dynasty
          and the early Republican era, when better transport, printed
          cookbooks, and restaurant culture let people compare the great
          traditions side by side. Earlier writers had spoken of four great
          cuisines — Shandong, Sichuan, Cantonese, and Jiangsu — and the
          eight-cuisine list grew from that foundation, adding Fujian, Hunan,
          Anhui, and Zhejiang. The list is a shorthand, not a law: China has
          many more local traditions, from the Muslim cooking of the northwest
          to the food of Yunnan, but the eight remain the classic starting
          point for understanding Chinese cuisine.
        </p>
        <p class="section-text">
          What unites them is older than the list. Chinese cooking has long
          judged a dish by the balance of flavours — salty, sweet, sour,
          bitter, and umami — and by the harmony of colour, aroma, and taste.
          The eight cuisines are eight answers to that shared ideal, each
          shaped by its own soil and water.
        </p>
      </section>

      <!-- 八大菜系 -->
      <section class="section">
        <h2 class="section-title">The Eight Cuisines</h2>
        <p class="section-text">
          Each of the eight has a home, a flavour, and a table of signature
          dishes:
        </p>
        <FeatureGrid>
          <FeatureItem title="Shandong Cuisine — Lu (鲁菜)" theme="gold">
            <p>
              The oldest of the eight, from the Yellow River plain and the
              Shandong coast. Lu cooking is salty and savoury, built on
              clear broths, precise knife work, and excellent seafood. Its
              classics include sweet and sour Yellow River carp, braised
              sea cucumber, and Dezhou braised chicken. As the cuisine of
              the imperial court in the north, Lu cooking set the standard
              for banquet food across China.
            </p>
          </FeatureItem>
          <FeatureItem title="Sichuan Cuisine — Chuan (川菜)" theme="red">
            <p>
              The boldest of the eight, from the humid river valleys of
              Sichuan. Its signature is <em>mala</em> (麻辣) — the
              numbing tingle of Sichuan pepper combined with the heat of
              chilli. Its classics include mapo tofu, kung pao chicken,
              and twice-cooked pork. Sichuan cooking uses more than two
              dozen flavour combinations, and its fiery reputation has
              made it the most famous Chinese cuisine abroad.
            </p>
          </FeatureItem>
          <FeatureItem title="Cantonese Cuisine — Yue (粤菜)" theme="green">
            <p>
              From Guangdong and the trading ports of the south, Yue
              cooking prizes freshness above all: the flavour of the
              ingredient itself, lightly seasoned and quickly cooked. Its
              classics include dim sum, roast goose, steamed fish with
              ginger and spring onion, and white-cut chicken. Cantonese
              restaurants also gave the world the yum cha tradition of
              tea and small plates.
            </p>
          </FeatureItem>
          <FeatureItem title="Jiangsu Cuisine — Su (苏菜)" theme="blue">
            <p>
              The refined cuisine of the lower Yangtze, from Suzhou,
              Yangzhou, and Nanjing. Su cooking is elegant and gently
              sweet-savoury, with careful knife work and a love of
              river fish and freshwater crab. Its classics include
              squirrel fish, Yangzhou fried rice, and lion's head meatballs
              braised with cabbage. It is the cuisine of scholars and
              gardens, and its delicate style shaped banquet cooking
              across the south.
            </p>
          </FeatureItem>
          <FeatureItem title="Fujian Cuisine — Min (闽菜)" theme="yellow">
            <p>
              From the mountainous coast of Fujian, Min cooking is built
              on the sea and the soup pot: clear, umami-rich broths,
              seafood, and the red rice wine that gives many dishes their
              colour. Its classics include Buddha Jumps Over the Wall
              (a slow-steamed soup of abalone, sea cucumber, and other
              treasures) and oyster omelette. Fujian's soups are said to
              nourish as much as they feed.
            </p>
          </FeatureItem>
          <FeatureItem title="Hunan Cuisine — Xiang (湘菜)" theme="red">
            <p>
              From the spicy heartland of Hunan, Xiang cooking is hot,
              sour, and bold — chilli heat without Sichuan's numbing
              pepper. Its classics include steamed fish head with chopped
              chilli, Chairman Mao's red braised pork, and stir-fried
              pork with chilli. Hunan cooks love pickled vegetables and
              smoked meats, and their food is famously appetite-whetting:
              sour and spicy, it makes you eat more rice.
            </p>
          </FeatureItem>
          <FeatureItem title="Anhui Cuisine — Hui (徽菜)" theme="gray">
            <p>
              The mountain cuisine of Anhui, shaped by the Huangshan
              peaks and the merchants of Huizhou. Hui cooking uses wild
              mountain herbs, bamboo shoots, mushrooms, and freshwater
              fish, braised slowly over a small fire. Its classics
              include stinky mandarin fish (a fermented delicacy that
              smells strong and tastes mild) and hairy tofu. It is the
              most rustic of the eight, and the most closely tied to
              the seasons of the mountains.
            </p>
          </FeatureItem>
          <FeatureItem title="Zhejiang Cuisine — Zhe (浙菜)" theme="blue">
            <p>
              From the lakes and hills of Zhejiang, Zhe cooking is fresh,
              tender, and lightly seasoned, with a love of river fish,
              bamboo shoots, and the produce of the seasons. Its
              classics include West Lake vinegar fish, Dongpo pork
              (named after the poet Su Dongpo), and beggar's chicken
              baked in clay. Hangzhou, the old Southern Song capital,
              gave Zhejiang cuisine its courtly polish.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 共同之处 -->
      <section class="section">
        <h2 class="section-title">What the Eight Share</h2>
        <p class="section-text">
          For all their differences, the eight cuisines cook from the same
          ideas. The first is balance: a meal should offer contrasting
          flavours and textures — something braised beside something
          steamed, something spicy beside something mild — so that no
          single taste overwhelms the table.
        </p>
        <p class="section-text">
          The second is seasonality. Chinese cooking has always eaten with
          the calendar: bamboo shoots in spring, crab in autumn, warming
          braises in winter. The twenty-four solar terms that guide
          farming also guide the kitchen, and each cuisine has dishes that
          belong to a particular moment of the year.
        </p>
        <p class="section-text">
          The third is respect for the ingredient. Whether it is a
          Cantonese chef steaming a fish for exactly the right minutes or
          a Fujian cook simmering a broth for hours, the aim is the same:
          to bring out what is already there rather than to cover it up.
          The knife, the wok, and the fire are tools for revealing flavour,
          not disguising it.
        </p>
      </section>

      <!-- 如何品尝 -->
      <section class="section">
        <h2 class="section-title">How to Taste Them</h2>
        <p class="section-text">
          The best way to meet the eight cuisines is to eat them where they
          come from — a bowl of noodles in Chengdu, dim sum in Guangzhou,
          crab in Suzhou in autumn. But even far from China, most cities
          have restaurants for at least a few of the eight, and a good
          Chinese menu is itself a tour: order one dish from Sichuan and
          one from Cantonese, and the contrast tells you more than any
          description can.
        </p>
        <p class="section-text">
          A few tips help. Eat family-style, sharing many dishes from the
          middle of the table — that is how Chinese meals are built, and
          it is the only way to taste the balance of a cuisine. Start with
          the mild dishes and move towards the spicy ones, not the other
          way round. And remember that "spicy" in China is not one thing:
          Sichuan numbs, Hunan burns, and both are worth trying.
        </p>
        <p class="section-text">
          The eight great cuisines are not a contest with a winner. They are
          eight ways of answering the same question — how to make a meal
          that nourishes the body and delights the senses — and the best
          answer is to taste them all.
        </p>
      </section>

      <!-- 四大菜系 -->
      <section class="section">
        <h2 class="section-title">The Four That Came First</h2>
        <p class="section-text">
          Before there were eight cuisines, there were four. For a long
          time, Chinese writers spoke of four great traditions — Shandong,
          Sichuan, Cantonese, and Jiangsu — and those four are still the
          pillars the other four rest on.
        </p>
        <p class="section-text">
          Shandong gave Chinese cooking its banquet standard: the clear
          broths, the seafood, and the formal structure of a meal that the
          imperial court carried across the country. Sichuan gave it
          boldness, proving that a single peppercorn could change the
          character of a cuisine. Cantonese gave it freshness, showing
          that the best seasoning is often the least. And Jiangsu gave it
          refinement, the scholar's ideal of a dish that is beautiful to
          look at and gentle to eat.
        </p>
        <p class="section-text">
          The other four cuisines grew in conversation with these four.
          Fujian's soups share Jiangsu's love of delicacy, while its
          seafood owes much to the Cantonese example. Hunan's heat is a
          cousin of Sichuan's, but without the numbing pepper — two
          neighbouring provinces, two different answers to the chilli.
          Anhui's mountain cooking and Zhejiang's lakeside freshness both
          belong to the same eastern world as Jiangsu, yet each keeps its
          own character. The eight-cuisine list works because the four
          originals are still visible inside it, like the four corners of
          a table.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "The people regard food as heaven."
          <template #author>— Chinese proverb (民以食为天)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Eight Great Cuisines Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "The Eight Great Cuisines of China",
  title:
    "The Eight Great Cuisines of China | Ba Da Caixi — Chinese Culture Guide",
  description:
    "The Eight Great Cuisines of China (八大菜系) — Shandong, Sichuan, Cantonese, Jiangsu, Fujian, Hunan, Anhui and Zhejiang: their home regions, flavour profiles and signature dishes, and what they share.",
  ogTitle: "The Eight Great Cuisines of China (八大菜系)",
  ogDescription:
    "Eight regional traditions, one extraordinary table — the flavours, signature dishes and stories of China's eight great cuisines",
  ogType: "article",
  ogImage: "/assets/images/eight-great-cuisines.png",
  twitterCard: "summary_large_image",
  twitterTitle: "The Eight Great Cuisines of China",
  twitterDescription:
    "Eight regional traditions, one extraordinary table — the flavours and signature dishes of China's eight great cuisines",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "The Eight Great Cuisines of China (八大菜系)",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "The Eight Great Cuisines of China",
        description:
          "A guide to the Eight Great Cuisines of China (八大菜系) — Shandong, Sichuan, Cantonese, Jiangsu, Fujian, Hunan, Anhui and Zhejiang — including each cuisine's home region, flavour profile and signature dishes",
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
