<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Bao Buns: The Pillowy Steamed Buns Taking Over the World</h1>
      <p class="page-subtitle">
        Bāozi — Soft, Steamed, and Stuffed with History
      </p>
      <PageMeta>
        <MetaItem>🥟 Leavened Dough, Not Dumpling Wrappers</MetaItem>
        <MetaItem>♨️ Steamed in Bamboo Baskets</MetaItem>
        <MetaItem>🥩 From Char Siu to Shengjian</MetaItem>
        <MetaItem>🌍 Breakfast Staple to Global Street Food</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/bao-buns.png"
      altText="Freshly steamed pillowy white bao buns in a bamboo steamer basket, steam rising, at a Chinese street food market"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Bao buns</strong> (包子, <em>bāozi</em>) are China's great
          steamed buns: rounds of soft, yeasted wheat dough, risen until
          pillowy, wrapped around a savoury or sweet filling, pinched shut
          at the top, and steamed in a bamboo basket until the skin turns
          tender, white, and faintly sweet. Break one open while it is still
          hot and the steam carries the smell of the filling with it — pork
          and cabbage, barbecue pork, red bean, or custard — before you have
          taken a single bite.
        </p>
        <p class="section-text">
          Baozi are among the most everyday foods in China. They are the
          breakfast bought from a street stall on the way to work, the
          lunchbox packed for a train journey, the dim sum trolley favourite
          at a Cantonese teahouse, and the festival food shared at family
          gatherings. They are also, in recent years, one of the most
          successful Chinese foods abroad — the folded pork belly bun
          alone has become a fixture on menus in New York, London, and
          Sydney. But their story is much older than their fame: buns of
          this kind have been eaten in China for well over a thousand years.
        </p>
        <p class="section-text">
          One confusion is worth clearing up at the start. Bao buns are
          often lumped together with dumplings, but they are a different
          food made in a different way — and the difference is the whole
          point of this article.
        </p>
      </section>

      <!-- 包子 vs 饺子 -->
      <section class="section">
        <h2 class="section-title">Bao vs. Dumpling: What's the Difference?</h2>
        <p class="section-text">
          Baozi and jiaozi (dumplings) are cousins — both are wheat dough
          wrapped around a filling — but almost every step of making them
          is different. The easiest way to tell them apart is the dough:
        </p>
        <FeatureGrid>
          <FeatureItem title="🍞 Baozi: Leavened Dough" theme="gold">
            <p>
              Baozi dough is made with yeast (traditionally with a piece
              of old, fermented dough kept from the last batch) and left
              to rise. The result is a thick, soft, bread-like skin that
              puffs up in the steamer — closer to a dinner roll than to
              pasta. The bun is round, sealed with a twist or pleat at
              the top, and the filling is fully enclosed.
            </p>
          </FeatureItem>
          <FeatureItem title="🥟 Jiaozi: Unleavened Wrappers" theme="blue">
            <p>
              Dumpling dough has no yeast at all. It is rolled into thin,
              flat wrappers, filled, and folded into a crescent shape
              with a pinched edge. Jiaozi are usually boiled in water or
              pan-fried — not steamed in the same way — and their thin
              skin is chewy rather than fluffy. See our article on
              <NuxtLink to="/articles/dumplings">Dumplings</NuxtLink> for
              the full story of jiaozi.
            </p>
          </FeatureItem>
          <FeatureItem title="♨️ Steamed vs. Boiled" theme="red">
            <p>
              A baozi is cooked by steam, sitting in a bamboo steamer
              basket above boiling water, so the dough rises and sets
              without ever touching the water. A jiaozi is dropped
              directly into boiling water (or a hot pan). Steam makes the
              baozi's skin soft and spongy; boiling keeps a dumpling's
              skin firm and springy.
            </p>
          </FeatureItem>
          <FeatureItem title="📏 Size and Role" theme="green">
            <p>
              A baozi is a meal in itself — big, filling, and usually
              eaten on its own or with a bowl of congee. Jiaozi are
              smaller and eaten by the plateful, often as part of a shared
              meal or a festival feast. A breakfast of two baozi will keep
              you going until lunch; a plate of dumplings is a social
              event.
            </p>
          </FeatureItem>
          <FeatureItem title="🥟 A Tricky Cousin: Xiaolongbao" theme="yellow">
            <p>
              Soup dumplings (小笼包, <em>xiǎolóngbāo</em>) cause the
              most confusion: they are steamed in small bamboo baskets
              like baozi, but their wrapper is thin and unleavened, like a
              dumpling's — and they are filled with aspic that melts into
              soup. They belong to the dumpling side of the family, not
              the baozi side, whatever the basket suggests.
            </p>
          </FeatureItem>
          <FeatureItem title="🔍 The Quick Test" theme="gray">
            <p>
              Still unsure? Press the skin. If it springs back like a
              soft bread roll, it is a baozi. If it is thin, smooth, and
              slightly translucent, it is a dumpling. And if it is
              golden-crisp on the bottom with a soft, juicy top, you may
              be eating shengjianbao — a baozi that broke the rules, as
              the next sections explain.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 历史 -->
      <section class="section">
        <h2 class="section-title">A Legend and a Long History</h2>
        <p class="section-text">
          According to legend, the baozi was invented by Zhuge Liang
          (诸葛亮), the brilliant strategist of the Three Kingdoms period
          in the 3rd century. The story says that on campaign in the
          south, his army needed to cross a river, and local custom
          demanded a sacrifice of human heads to the river god. Unwilling
          to kill his own men, Zhuge Liang is said to have ordered dough
          shaped like heads and filled with meat to be offered instead —
          and the buns were called <em>mantou</em>, "barbarian heads."
          It is a legend rather than a documented fact, but it has been
          told for centuries, and it captures something true: the filled
          bun began as food for soldiers and travellers, cheap, portable,
          and filling.
        </p>
        <p class="section-text">
          The word <em>mantou</em> later came to mean the plain,
          unfilled steamed bun of northern China, while the filled version
          kept the name <em>baozi</em> — <em>bao</em> meaning "to wrap."
          That split tells the story of the bun itself. In the wheat-growing
          north, steamed bread became the staple food, eaten at almost
          every meal in place of rice. In the south, where rice was the
          staple, the filled bun became a snack, a breakfast, and a
          teahouse treat — smaller, whiter, and often slightly sweet.
        </p>
        <p class="section-text">
          By the Qing dynasty, famous bun shops were already institutions.
          In Tianjin, the Goubuli (狗不理) bun shop, founded in the 19th
          century, became so well known that its name — said to come from
          a nickname meaning "the dog pays no attention," because the
          owner was too busy making buns to greet his customers — is still
          one of the most famous food brands in China today. In Shanghai,
          street vendors were already selling pan-fried buns from carts
          at dawn. The baozi had moved from army rations to urban
          breakfast, and it has stayed there ever since.
        </p>
      </section>

      <!-- 品种 -->
      <section class="section">
        <h2 class="section-title">A Family of Buns</h2>
        <p class="section-text">
          There is no single baozi. Every region of China has its own
          version, and a few have become famous far beyond their home
          towns:
        </p>
        <FeatureGrid>
          <FeatureItem title="🥩 Classic Pork Baozi" theme="gold">
            <p>
              The everyday northern baozi: a large, soft bun filled with
              seasoned minced pork, cabbage, and ginger. Sold from
              breakfast stalls across northern China, it is the working
              day's fuel — cheap, hot, and eaten with the hands on the
              walk to work.
            </p>
          </FeatureItem>
          <FeatureItem title="🍖 Char Siu Bao (叉烧包)" theme="red">
            <p>
              The Cantonese classic. Diced barbecue pork (<em>char
              siu</em>) in a sweet-savoury sauce, wrapped in a snowy,
              slightly sweet dough that splits open at the top as it
              steams. It is a star of yum cha — the Cantonese teahouse
              tradition of small plates shared over tea — and one of the
              first buns most visitors to Hong Kong or Guangzhou will
              meet.
            </p>
          </FeatureItem>
          <FeatureItem title="🍳 Shengjianbao (生煎包)" theme="yellow">
            <p>
              Shanghai's pan-fried buns, and the rebels of the family.
              They start as ordinary steamed buns, but are fried in a
              shallow pan until the bottoms turn golden and crisp, then
              steamed under a lid with a splash of water. The result is
              a bun with a crunchy base, a soft top, and a juicy pork
              filling, sprinkled with sesame seeds and chopped spring
              onion. Bite carefully — the first bite can be very hot.
            </p>
          </FeatureItem>
          <FeatureItem title="🥓 Gua Bao (割包)" theme="blue">
            <p>
              The Taiwanese folded bun: a flat, steamed bun folded like a
              pocket around braised pork belly, pickled mustard greens,
              coriander, and crushed peanuts. Eaten at night markets and
              festivals in Taiwan, it is the bun that travelled furthest
              — in the 2000s, chefs in New York and London made the pork
              belly bun a global restaurant staple.
            </p>
          </FeatureItem>
          <FeatureItem title="🍮 Sweet Buns" theme="green">
            <p>
              Not all baozi are savoury. Red bean paste, black sesame,
              lotus seed paste, and — in Cantonese teahouses — molten
              salted-egg custard buns (流沙包, "flowing sand buns"),
              whose golden filling runs like lava when the bun is torn
              open, are dessert and afternoon tea in one.
            </p>
          </FeatureItem>
          <FeatureItem title="🏪 Goubuli and the Famous Shops" theme="gray">
            <p>
              Some bun shops are destinations in themselves. Tianjin's
              Goubuli, Kaifeng's soup-filled buns, and the old breakfast
              stalls of Beijing all built their names on a single recipe,
              repeated thousands of times a day for generations. In China,
              a great bun shop needs no advertising — the queue outside
              does the talking.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 制作工艺 -->
      <section class="section">
        <h2 class="section-title">The Craft: From Dough to Steamer</h2>
        <p class="section-text">
          A good baozi is a small piece of engineering. The dough is
          mixed from wheat flour, water, and yeast — or, in older
          kitchens, a piece of fermented dough saved from the previous
          batch, called <em>laomian</em> (老面, "old dough"), which
          gives the bun a faint, pleasant tang. It is kneaded until
          smooth, then left to rise until it has roughly doubled in size.
          Rushed dough makes a dense bun; patient dough makes a cloud.
        </p>
        <p class="section-text">
          Filling and shaping is the skilled part. The risen dough is
          rolled into small rounds, thicker in the middle and thinner at
          the edges, so the base of the bun stays strong while the top
          seals neatly. A spoonful of filling goes in the centre, and the
          cook pleats the edge around it — gathering the dough up and
          twisting it closed in a swirl that should sit neatly at the
          crown of the bun. A well-made baozi has many fine pleats and no
          leaks; the pattern of the pleats is the maker's signature.
        </p>
        <p class="section-text">
          The shaped buns rest a second time, puffing up a little more,
          and are then steamed in a bamboo steamer basket — the
          <em>zhenglong</em> (蒸笼) — over boiling water. The basket is
          lined with cloth or paper so the buns do not stick, and the lid
          stays on: lifting it too early lets the steam escape and the
          buns can collapse. After ten minutes or so, the basket is lifted
          off the heat, and the buns emerge white, swollen, and steaming.
          The first basket of the morning is often gone within minutes.
        </p>
      </section>

      <!-- 街头与世界 -->
      <section class="section">
        <h2 class="section-title">Street Culture, Breakfast, and the World</h2>
        <p class="section-text">
          To understand baozi, go to a Chinese city at dawn. The steamer
          baskets are already stacked on the stalls, the steam fogging
          the morning air, and the queue is made up of everyone: school
          children, office workers, taxi drivers, grandparents. A baozi
          costs little, needs no plate or cutlery, and can be eaten
          walking — which is exactly why it has survived every change in
          Chinese life, from bicycle commutes to subway rush hours.
          Breakfast stalls sell them alongside soy milk, congee, and
          fried dough sticks, and many Chinese people will tell you that
          the smell of a bun stall is the smell of morning itself.
        </p>
        <p class="section-text">
          In the south, the bun has a different stage: the Cantonese
          teahouse. At yum cha, families gather around a table piled
          with small steamer baskets, and char siu bao and custard buns
          arrive among the dumplings, rice rolls, and chicken feet — one
          small plate among many, shared, argued over, and ordered again.
          The teahouse turns eating buns into a slow social occasion,
          the opposite of the hurried breakfast stall, and the bun is at
          home in both.
        </p>
        <p class="section-text">
          Abroad, the baozi has had a second life. Chinese bakeries in
          cities around the world sell them to homesick students and
          curious locals alike, and restaurant chefs have taken the bun
          in new directions — filled with fried chicken, slow-cooked
          beef, or vegetables, and served as street food at markets and
          festivals. The form is forgiving: a soft, warm pocket of bread
          will hold almost anything. What travels is not just a recipe
          but an idea — that good food can be simple, cheap, and eaten
          with your hands.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "A baozi is a whole meal folded into a pocket of cloud — bread,
          filling, and steam, made to be eaten hot, with your hands, on
          a cold morning."
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Bao Buns Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "Bao Buns: The Pillowy Steamed Buns Taking Over the World",
  title:
    "Bao Buns: The Pillowy Steamed Buns Taking Over the World | Chinese Culture Guide",
  description:
    "Bao buns (包子) — China's pillowy steamed buns: how leavened baozi differ from dumplings, the Zhuge Liang legend, char siu bao, shengjianbao, gua bao, the craft of pleating and steaming, and breakfast and street culture.",
  ogTitle: "Bao Buns: The Pillowy Steamed Buns Taking Over the World",
  ogDescription:
    "Baozi — soft, steamed, and stuffed: how bao buns differ from dumplings, from char siu bao to shengjianbao, and the street culture behind them",
  ogType: "article",
  ogImage: "/assets/images/bao-buns.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Bao Buns: The Pillowy Steamed Buns Taking Over the World",
  twitterDescription:
    "Baozi — soft, steamed, and stuffed: how bao buns differ from dumplings, from char siu bao to shengjianbao, and the street culture behind them",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Bao Buns: The Pillowy Steamed Buns Taking Over the World",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Bao Buns: The Pillowy Steamed Buns Taking Over the World",
        description:
          "A guide to bao buns (包子), China's steamed buns: how leavened baozi differ from unleavened dumplings, their history and legend, char siu bao, shengjianbao and gua bao, the craft of making them, and their place in breakfast and street food culture",
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
