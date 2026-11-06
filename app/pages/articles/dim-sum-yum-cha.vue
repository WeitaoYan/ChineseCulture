<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">
        Dim Sum and Yum Cha
      </h1>
      <p class="page-subtitle">
        Yǐnchá — "Drink Tea": Small Plates, Slow Mornings, and the Cantonese
        Art of Lingering
      </p>
      <PageMeta>
        <MetaItem>🫖 Drink Tea, Eat Dim Sum</MetaItem>
        <MetaItem>🥟 Bite-Sized Plates</MetaItem>
        <MetaItem>🌅 A Slow Morning Ritual</MetaItem>
        <MetaItem>👨‍👩‍👧‍👦 Family Around the Table</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/dim-sum-yum-cha.png"
      altText="Illustration of a Cantonese tea house in the morning, with a round table of bamboo steamers full of dim sum, a clay teapot pouring tea, and families chatting over tea"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          In Cantonese, the phrase is <em>yum cha</em> (饮茶) — literally,
          "drink tea." But anyone who has been to a morning tea house in
          Guangzhou or Hong Kong knows that the tea is only half the story.
          The other half arrives in small bamboo steamers and on tiny
          plates, a few pieces at a time: shrimp dumplings, pork buns,
          rice rolls, egg tarts. This is <em>dim sum</em> (点心), which
          means "touch the heart" — small morsels meant to delight rather
          than fill.
        </p>
        <p class="section-text">
          Yum cha is not a meal in the ordinary sense. It is a ritual, a
          social institution, and a way of spending a morning. Families
          gather at round tables, often for two or three hours. The tea is
          poured, the steamers come and go, the conversation never hurries.
          Nobody orders a single main course; instead the table slowly
          fills with a dozen small dishes, shared by everyone. To
          understand Cantonese culture, there may be no better place to
          start than a noisy, steamy tea house at nine in the morning.
        </p>
        <p class="section-text">
          Dim sum is sometimes confused with the dumplings of northern
          China, but the two traditions are quite different. Northern
          <em>jiaozi</em> are a family food, wrapped by hand at home and
          eaten above all at the Spring Festival. Dim sum belongs to the
          tea house: dozens of different small dishes, made by professional
          chefs, eaten slowly alongside pot after pot of tea. See our
          article on
          <NuxtLink to="/articles/dumplings">Dumplings</NuxtLink> for the
          northern tradition — this article is about the Cantonese morning
          table.
        </p>
      </section>

      <!-- 饮茶仪式 -->
      <section class="section">
        <h2 class="section-title">The Ritual of Yum Cha</h2>
        <p class="section-text">
          A yum cha morning follows a rhythm that regulars know by heart.
          First comes the tea. Before any food is ordered, the table
          chooses its tea — pu'er, tieguanyin, chrysanthemum, jasmine — and
          the first pot arrives. The cups are small, the tea is strong, and
          the pot is refilled again and again through the morning. In the
          old Cantonese saying, the meal is summed up as
          <em>一盅两件</em> — "one pot of tea, two dishes" — the minimum a
          person needed for a proper morning in the tea house.
        </p>
        <p class="section-text">
          Then the food begins to arrive. In the classic tea houses of the
          past, waitresses pushed heated trolleys between the tables, and
          diners simply pointed at whatever steamer caught their eye.
          Today many restaurants have replaced the trolleys with order
          sheets — tick the dishes you want, and the kitchen sends them
          out — but a few old-style tea houses still run the trolleys, and
          for many people that slow parade of steamers is the heart of the
          experience.
        </p>
        <p class="section-text">
          There is no rush, and that is the point. Yum cha is the opposite
          of fast food: a meal designed to stretch across a morning, where
          the food arrives in waves and the talk matters as much as the
          eating. Old friends meet for yum cha to catch up; families meet
          for yum cha on Sundays; business partners meet for yum cha
          because a table of small shared dishes is a good place to build
          trust.
        </p>
      </section>

      <!-- 历史 -->
      <section class="section">
        <h2 class="section-title">A Short History of Dim Sum</h2>
        <p class="section-text">
          The story of dim sum is often traced back to the tea houses along
          the old trade routes, where travellers stopping for tea needed
          something small to eat with it. According to popular telling, inn
          keepers along the roads of southern China began serving light
          snacks with tea, and the idea travelled with merchants to the
          cities. Like many food origin stories, the details are more
          legend than documented history — but the connection between tea
          and small snacks is the real heart of the tradition.
        </p>
        <p class="section-text">
          What is certain is that yum cha became a way of life in
          Guangzhou, the great trading port of southern China, during the
          19th century. Tea houses there grew from simple rest stops into
          grand, multi-storey establishments with the bustle of a market
          hall — places for business, gossip, opera, and family gatherings
          as much as for eating. As Guangzhou's merchants grew rich, the
          dim sum they served grew more elaborate, and Cantonese chefs
          turned the small snack into a showcase of skill.
        </p>
        <p class="section-text">
          In the 20th century, the tradition crossed into Hong Kong, where
          it flourished and spread around the world. Hong Kong's tea houses
          refined yum cha into the form most people know today — the
          trolleys, the vast menus, the weekend crowds — and carried it
          overseas with emigrants to Chinatowns in London, Sydney, Toronto,
          and San Francisco. Today, a yum cha breakfast can be found in
          almost any city with a Cantonese community, and in many cities
          without one.
        </p>
      </section>

      <!-- 茶 -->
      <section class="section">
        <h2 class="section-title">The Tea Comes First</h2>
        <p class="section-text">
          In yum cha, the tea is not a drink on the side — it is the
          reason for the meal, and dim sum was invented to go with it. The
          choice of tea sets the tone of the morning, and regulars have
          strong opinions about which tea suits which dishes:
        </p>
        <FeatureGrid>
          <FeatureItem title="🍵 Pu'er (普洱)" theme="red">
            <p>
              A dark, earthy, fermented tea from Yunnan Province, aged like
              wine. Its deep, mellow flavour is the classic companion to
              rich, oily dim sum, and it is said to help cut through the
              grease of fried dishes. Many old tea houses serve it as the
              default.
            </p>
          </FeatureItem>
          <FeatureItem title="🌸 Tieguanyin (铁观音)" theme="gold">
            <p>
              An oolong tea from Fujian Province, named after Guanyin, the
              Goddess of Mercy. Floral and toasty, it sits between green and
              black tea, and is a favourite for those who want something
              fragrant without the heaviness of pu'er.
            </p>
          </FeatureItem>
          <FeatureItem title="🌼 Chrysanthemum (菊花茶)" theme="yellow">
            <p>
              Dried chrysanthemum flowers brewed in hot water, light,
              floral, and naturally caffeine-free. In Chinese food culture
              it is considered cooling, and it is often ordered in summer,
              or by diners who prefer a gentler cup with their meal.
            </p>
          </FeatureItem>
          <FeatureItem title="🌿 Jasmine (茉莉花茶)" theme="green">
            <p>
              Green tea scented with jasmine blossoms, delicate and
              sweet-smelling. Its lightness pairs well with steamed dishes
              such as shrimp dumplings and rice rolls, and it is a common
              choice for first-timers at the tea house.
            </p>
          </FeatureItem>
          <FeatureItem title="🍃 Shou Mei (寿眉)" theme="gray">
            <p>
              A white tea made from larger leaves, mild, slightly sweet, and
              low in caffeine. Old Cantonese tea drinkers value it for long
              mornings: it can be steeped again and again without turning
              bitter, and its gentle taste never tires the palate.
            </p>
          </FeatureItem>
          <FeatureItem title="🫖 The Rinse" theme="blue">
            <p>
              Before the first cup is poured, regulars rinse the cups,
              teapot, and chopsticks with the first brew of hot tea — a
              habit born of old tea houses where cleanliness was uncertain.
              Today the dishes are clean, but the ritual survives as a sign
              of a seasoned yum cha goer.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 点心菜单 -->
      <section class="section">
        <h2 class="section-title">The Dim Sum Menu</h2>
        <p class="section-text">
          A large tea house may offer dozens of dim sum dishes, from
          steamed to fried to baked. A few classics appear on almost every
          table, and learning them is the fastest way to order like a
          regular:
        </p>
        <FeatureGrid>
          <FeatureItem title="🦐 Har Gow (虾饺)" theme="red">
            <p>
              The king of dim sum: translucent rice-flour dumplings filled
              with whole shrimp. A good har gow has a skin thin enough to
              see the pink shrimp inside, yet strong enough not to tear —
              Cantonese chefs say a perfect har gow should have at least
              seven folds in its pleated top.
            </p>
          </FeatureItem>
          <FeatureItem title="🌼 Siu Mai (烧卖)" theme="gold">
            <p>
              Open-topped cups of pork and shrimp mince in a thin wheat
              wrapper, often crowned with a dot of crab roe or a single pea.
              Siu mai is one of the oldest dim sum dishes, and one of the
              most widely loved.
            </p>
          </FeatureItem>
          <FeatureItem title="🍞 Char Siu Bao (叉烧包)" theme="yellow">
            <p>
              Soft, fluffy white steamed buns filled with sweet barbecued
              pork (char siu). They should split open slightly at the top
              when steamed, like a flower — a sign, chefs say, that the
              dough has risen properly.
            </p>
          </FeatureItem>
          <FeatureItem title="🍜 Cheung Fun (肠粉)" theme="blue">
            <p>
              Silky rice-noodle rolls, steamed flat and rolled around
              fillings of shrimp, beef, or char siu, then dressed with sweet
              soy sauce. Cheung fun is as much about texture as taste — soft,
              slippery, and gone in two bites.
            </p>
          </FeatureItem>
          <FeatureItem title="🥧 Egg Tarts (蛋挞)" theme="green">
            <p>
              Small, crisp pastry cups filled with smooth egg custard,
              glossy on top. The Hong Kong version, with its flaky lard
              pastry, was shaped by Portuguese custard tarts brought to the
              city in the 20th century — a reminder that Cantonese food has
              always absorbed outside influences.
            </p>
          </FeatureItem>
          <FeatureItem title="🐔 Chicken Feet (凤爪)" theme="gray">
            <p>
              Braised chicken feet in black bean sauce, steamed until
              tender — a dish outsiders often hesitate over and regulars
              order first. The name in Cantonese, <em>fung jaau</em>,
              means "phoenix claws," a more poetic name for a beloved
              tea-house classic.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          Beyond these, the menu runs on: turnip cakes pan-fried until
          crisp, sticky rice wrapped in lotus leaves, sesame balls, mango
          pudding, and sweet bean soups to finish. The rule of thumb is
          simple — order a little of everything, and share it all.
        </p>
      </section>

      <!-- 怎么吃 -->
      <section class="section">
        <h2 class="section-title">How It Works: Ordering and Sharing</h2>
        <p class="section-text">
          For a first-timer, a yum cha restaurant can look chaotic: a vast
          hall, hundreds of people, steam everywhere, no menu in sight.
          The system is simpler than it looks. In trolley-style tea houses,
          you wait at your table and the food comes to you; when a trolley
          stops, you point at what you want and the server stamps your
          card. Each dish is priced by size — small, medium, large, or
          special — and the stamps add up to your bill. In modern
          restaurants, you tick dishes on a paper order sheet instead, and
          the kitchen delivers them fresh to your table.
        </p>
        <p class="section-text">
          Everything is shared. A steamer of three har gow is not one
          person's lunch; it is three pieces for the table, and taking the
          last piece without offering it around is considered poor form.
          Tea is poured for others before yourself, with the youngest at
          the table often doing the pouring. And the bill is rarely split:
          one person treats, and the favour is returned next time. The
          whole meal runs on generosity — of food, of tea, and of time.
        </p>
      </section>

      <!-- 礼仪 -->
      <section class="section">
        <h2 class="section-title">Table Manners and Small Rituals</h2>
        <p class="section-text">
          Yum cha has its own etiquette, much of it expressed in small
          gestures that regulars perform without thinking:
        </p>
        <FeatureGrid>
          <FeatureItem title="👆 Tapping the Table" theme="gold">
            <p>
              When someone pours tea for you, tap the table twice with two
              fingers — a small bow in miniature. According to a popular
              legend, the gesture began when an emperor travelling in
              disguise poured tea for his servants, who could not bow
              without giving him away, and tapped their fingers instead.
              Legend or not, every tea drinker in Guangdong knows the tap.
            </p>
          </FeatureItem>
          <FeatureItem title="🫖 Pouring for Others First" theme="red">
            <p>
              Always fill your neighbours' cups before your own, and keep
              an eye on the pot. If someone's cup is empty, refill it
              without being asked. The person who pours the tea is, in a
              small way, the host of the table — even if they are the
              youngest there.
            </p>
          </FeatureItem>
          <FeatureItem title="🔄 The Teapot Lid" theme="blue">
            <p>
              When the pot runs dry, lift the lid and rest it on top of the
              pot, or lean it against the handle. The waitress will see the
              signal and bring hot water. In the old tea houses, this
              silent system kept the tea flowing without anyone having to
              call out across a crowded hall.
            </p>
          </FeatureItem>
          <FeatureItem title="🥢 Chopstick Care" theme="green">
            <p>
              Chopsticks are never stuck upright in a bowl of rice — that
              shape recalls incense burned for the dead — and are not used
              to point at people or to spear food. At the tea table, the
              shared dishes are served with a separate pair of serving
              chopsticks or a spoon, so that everyone's own chopsticks stay
              out of the common plate.
            </p>
          </FeatureItem>
          <FeatureItem title="🍵 Rinsing the Cups" theme="gray">
            <p>
              The first brew of the pot is often used to rinse the cups and
              warm the teapot, then poured away into a small bowl. This
              "washing the tea" wakes up the leaves and warms the vessels,
              so the tea that is actually drunk is at its best.
            </p>
          </FeatureItem>
          <FeatureItem title="🐢 No Rushing" theme="yellow">
            <p>
              The deepest rule of yum cha is unwritten: do not hurry. A
              meal that lasts two hours is not a slow meal — it is the meal
              working as intended. The food is small so the conversation
              can be long, and leaving early is the only real breach of
              etiquette.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 社交生活 -->
      <section class="section">
        <h2 class="section-title">Yum Cha as Social Life</h2>
        <p class="section-text">
          In Guangdong and Hong Kong, yum cha is woven into the week. For
          many older people it is a daily habit: up early, down to the tea
          house, the same table, the same friends, the same pot of pu'er,
          reading the newspaper over steaming baskets. For working families
          it is the Sunday gathering — grandparents, parents, children,
          three generations around one round table, ordering far more than
          they can finish.
        </p>
        <p class="section-text">
          The tea house is also, famously, a place where news travels and
          deals are done. In the Hong Kong of the last century, businessmen
          met clients over dim sum, stock tips were exchanged between
          steamers, and neighbourhood gossip moved from table to table
          faster than any newspaper. The Cantonese have a saying for the
          tea house's role in daily life: it is the living room of the
          city, open to anyone who can pay for a pot of tea.
        </p>
        <p class="section-text">
          That social role is part of why yum cha has survived every change
          around it — fast food, food delivery, and the hurry of modern
          life. A tea house sells something no delivery app can: a table,
          a morning, and company. The food is small, but the occasion is
          large.
        </p>
      </section>

      <!-- 走向世界 -->
      <section class="section">
        <h2 class="section-title">Beyond Guangdong</h2>
        <p class="section-text">
          From its home in Guangzhou and Hong Kong, dim sum has travelled
          wherever Cantonese people have settled. In the Chinatowns of
          London, New York, Sydney, and Vancouver, weekend yum cha is a
          fixture of community life, and queues outside popular restaurants
          on Sunday mornings are a familiar sight. In recent decades dim
          sum has also moved beyond the tea house: fine-dining restaurants
          serve tasting menus of miniature dumplings, frozen dim sum fills
          supermarket freezers, and chefs around the world borrow the
          small-plate idea for their own cuisines.
        </p>
        <p class="section-text">
          Yet the heart of the tradition has not changed. The best yum cha
          is still a slow morning, a round table, a pot of tea that never
          empties, and a parade of small dishes that nobody is in a hurry
          to finish. It is a reminder that in Cantonese culture, a meal is
          not just fuel — it is time spent together, measured out in
          mouthfuls and cups of tea. To learn more about the tea itself,
          see our article on
          <NuxtLink to="/articles/chinese-tea-culture">Chinese Tea Culture</NuxtLink>.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "One pot of tea, two dishes."
          <template #author>— Cantonese saying (一盅两件), the classic yum cha order</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Dim Sum and Yum Cha Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "Dim Sum and Yum Cha",
  title:
    "Dim Sum and Yum Cha | Chinese Culture Guide",
  description:
    "Dim sum and yum cha (饮茶) — the Cantonese morning tea ritual: its history in Guangzhou and Hong Kong, the teas that come first, the classic dim sum menu, trolley service, table etiquette, and yum cha as social life.",
  ogTitle: "Dim Sum and Yum Cha (饮茶)",
  ogDescription:
    "Yum cha, the Cantonese morning ritual of tea and small plates: the teas, the classic dim sum dishes, the trolleys, and the etiquette of the tea house",
  ogType: "article",
  ogImage: "/assets/images/dim-sum-yum-cha.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Dim Sum and Yum Cha",
  twitterDescription:
    "Yum cha, the Cantonese morning ritual: tea first, then a parade of small steamed, fried, and baked dim sum dishes shared around the table",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Dim Sum and Yum Cha (饮茶)",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Dim Sum and Yum Cha",
        description:
          "A guide to dim sum and yum cha (饮茶), the Cantonese morning tea ritual: its history in Guangzhou and Hong Kong, the teas that come first, the classic dim sum menu from har gow to egg tarts, trolley service and order sheets, table etiquette, and yum cha as social life",
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
