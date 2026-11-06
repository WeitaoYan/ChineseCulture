<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">
        Hotpot: China's Communal Feast
      </h1>
      <p class="page-subtitle">
        Huǒguō — One Bubbling Pot, a Table Full of Friends
      </p>
      <PageMeta>
        <MetaItem>🍲 One Pot, Shared by All</MetaItem>
        <MetaItem>🌶️ From Mild Broth to Fiery Mala</MetaItem>
        <MetaItem>🏮 A Meal That Is Also a Party</MetaItem>
        <MetaItem>🥢 Cook It Yourself, at the Table</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/chinese-hotpot.png"
      altText="Friends gathered around a steaming yin-yang hotpot with plates of thinly sliced meat, vegetables and dipping sauces"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Hotpot</strong> (火锅, <em>huǒguō</em>, literally "fire
          pot") is China's most sociable way to eat. A pot of bubbling broth
          sits in the middle of the table, heated over a flame, and everyone
          around it cooks their own food — thin slices of meat, leafy
          vegetables, mushrooms, tofu, and noodles — dipping each morsel into
          the broth for seconds or minutes, then fishing it out and eating it
          with a personal dipping sauce. Nothing arrives finished from the
          kitchen. The meal is made, bite by bite, at the table, together.
        </p>
        <p class="section-text">
          That is the whole point of hotpot. It is not fast food and it is
          not a formal banquet. It is a long, noisy, steamy gathering where
          the cooking is the entertainment and the pot never really empties:
          as plates of raw ingredients are added, more broth is poured in,
          and the meal stretches happily on for an hour or two. In China,
          hotpot is the default choice for birthdays, reunions, cold winter
          evenings, and the simple question friends ask each other:
          "Shall we go for hotpot tonight?"
        </p>
        <p class="section-text">
          Hotpot is also one of the most forgiving meals a visitor can try.
          There is no menu to decode dish by dish, no fixed order of courses,
          and no single "correct" way to eat — you choose what you like,
          cook it as long as you like, and season it to your own taste. This
          guide covers where hotpot comes from, the broths and ingredients
          that define it, the regional styles worth knowing, and how to eat
          it like a local.
        </p>
      </section>

      <!-- 历史 -->
      <section class="section">
        <h2 class="section-title">A Pot with a Long History</h2>
        <p class="section-text">
          Hotpot is old — how old is a matter of legend as much as record.
          Cooking meat and vegetables in a communal pot of boiling water or
          broth is one of the oldest ways humans have eaten together, and
          versions of it appear across Asia. In China, the story most often
          told traces hotpot to the nomadic peoples of the northern steppes,
          who cooked mutton in a pot over an open fire — a practical meal
          for people on the move. A popular tale says Mongol horsemen cooked
          in their upturned helmets; charming as the image is, it is a
          legend, not a documented fact, and historians treat it with a
          smile rather than as evidence.
        </p>
        <p class="section-text">
          What the record does support is that by the Qing dynasty (1644–
          1912), hotpot was firmly established in northern China, above all
          in Beijing, where the classic copper pot — a tall, chimney-like
          vessel heated by charcoal — became the symbol of the meal. The
          northern style centred on mutton: paper-thin slices of lamb, swished
          briefly in clear broth and dipped in sesame sauce. The pot's shape
          was part of its genius: the narrow chimney drew the charcoal heat
          straight up, keeping the broth at a rolling boil.
        </p>
        <p class="section-text">
          The other great branch of hotpot grew up far to the south, along
          the Yangtze River in Chongqing and Sichuan. There, in the late Qing
          dynasty and the early 20th century, dockworkers and labourers
          cooked cheap offal and vegetables in pots of water fiercely spiced
          with chilli and Sichuan pepper, to mask strong flavours and to
          warm bodies working in damp river air. That rough workers' meal
          became <em>mala</em> hotpot — numbing and spicy — and over the
          course of the 20th century it travelled from the docks to
          restaurants across China and then around the world, becoming the
          style most people outside China picture when they hear the word
          "hotpot".
        </p>
        <p class="section-text">
          Today the two traditions — the clear, mutton-centred pots of the
          north and the fiery pots of the southwest — have blended with
          dozens of local styles, and with modern inventions such as the
          divided <em>yuanyang</em> (鸳鸯, "mandarin duck") pot, which holds
          two broths side by side so that diners who love spice and diners
          who do not can share one table. Hotpot has become a national
          institution: China is home to many thousands of hotpot
          restaurants, from tiny neighbourhood shops to huge chains, and
          the meal has spread with the Chinese diaspora to cities on every
          continent.
        </p>
      </section>

      <!-- 汤底 -->
      <section class="section">
        <h2 class="section-title">The Broths: The Soul of the Pot</h2>
        <p class="section-text">
          Everything in hotpot starts with the broth, and the first decision
          at any hotpot table is which broth — or broths — to order. The
          broth is not a background detail: it flavours every ingredient
          that passes through it, and it grows richer as the meal goes on,
          absorbing the taste of everything cooked in it. These are the
          broths you are most likely to meet:
        </p>
        <FeatureGrid>
          <FeatureItem title="🌶️ Mala (麻辣)" theme="red">
            <p>
              The famous Chongqing broth: dried chillies and Sichuan
              peppercorns simmered in oil and beef tallow, fiercely hot and
              mouth-numbingly tingly. The "ma" (麻, numbing) is as important
              as the "la" (辣, spicy). Not for the faint-hearted, but
              addictive — and the broth you will be offered first in most
              hotpot restaurants.
            </p>
          </FeatureItem>
          <FeatureItem title="🍅 Tomato (番茄)" theme="gold">
            <p>
              A sweet-sour, tomato-rich broth that is gentle, bright, and
              popular with children and with anyone who finds mala too much.
              It pairs beautifully with vegetables and seafood, and it is
              often chosen as the mild half of a divided pot.
            </p>
          </FeatureItem>
          <FeatureItem title="🍄 Mushroom (菌汤)" theme="gray">
            <p>
              A clear, savoury broth made with dried mushrooms, sometimes
              with goji berries and red dates. Earthy and delicate, it lets
              the flavour of each ingredient shine through, and it is a
              favourite of diners who prefer a lighter meal.
            </p>
          </FeatureItem>
          <FeatureItem title="🍲 Clear / Bone Broth (清汤)" theme="blue">
            <p>
              The classic northern broth: a light stock, often made from pork
              or chicken bones, seasoned simply with ginger and spring onion.
              This is the broth of the old Beijing copper pot — the point is
              the quality of the meat and the dipping sauce, not the broth
              itself.
            </p>
          </FeatureItem>
          <FeatureItem title="🥛 Milk / Collagen Broth (胶原蛋白)" theme="yellow">
            <p>
              A milky, rich broth simmered for hours from pork or chicken
              bones, sometimes described as a beauty broth for its collagen.
              Creamy and comforting, it is especially popular in Guangdong
              and in modern hotpot chains.
            </p>
          </FeatureItem>
          <FeatureItem title="🥬 Pickled Cabbage (酸菜)" theme="green">
            <p>
              A tangy, sour broth built on pickled mustard greens, a
              speciality of northeastern China. The sourness cuts through
              fatty meats and keeps the palate fresh — a warming winter
              favourite in the cold northeast.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          In most restaurants you can order a divided pot — two broths, or
          sometimes three — so the table does not have to agree on one level
          of heat. And if the broth level drops as ingredients absorb it,
          staff will top it up with fresh stock: never add plain water
          yourself if a kettle of broth is provided, and never drink the
          mala broth by the bowlful — it is a cooking medium, not a soup.
          The clear broths, on the other hand, are often drunk at the end
          of the meal, by which time they have become a rich, flavourful
          soup in their own right.
        </p>
      </section>

      <!-- 食材 -->
      <section class="section">
        <h2 class="section-title">What Goes in the Pot</h2>
        <p class="section-text">
          A hotpot order is a tour of the market. Ingredients arrive raw, on
          plates arranged around the pot, and each cooks in a different time —
          which is part of the fun and part of the skill. As a rough guide:
          thinly sliced meat takes seconds, leafy vegetables a minute or two,
          and root vegetables, mushrooms, and tofu longer. Fish and seafood
          cook quickly but must be cooked through; if in doubt, leave it in
          a little longer — overcooked is better than undercooked when the
          broth is boiling.
        </p>
        <FeatureGrid>
          <FeatureItem title="🥩 Thinly Sliced Meat" theme="red">
            <p>
              The star of the pot: lamb, beef, and pork sliced so thin they
              curl the moment they touch the broth — often in under ten
              seconds. The slices are cut while the meat is partly frozen,
              which is how they get so thin. Swish them with chopsticks,
              don't drop in a whole clump, or they will stick together.
            </p>
          </FeatureItem>
          <FeatureItem title="🦐 Seafood" theme="blue">
            <p>
              Prawns, fish fillets, squid, and scallops, plus fish balls,
              shrimp balls, and fish paste. Seafood cooks fast and takes on
              the broth's flavour beautifully — but fish it out promptly,
              and keep raw seafood away from cooked food on your plate.
            </p>
          </FeatureItem>
          <FeatureItem title="🥬 Leafy Vegetables" theme="green">
            <p>
              Chinese leafy greens such as bok choy, choy sum, lettuce, and
              spinach, along with bean sprouts and watercress. They wilt in
              a minute or two and are the refreshing counterpoint to the rich
              meat — order plenty of them, and add them throughout the meal
              rather than all at once.
            </p>
          </FeatureItem>
          <FeatureItem title="🍄 Mushrooms &amp; Fungi" theme="gray">
            <p>
              Shiitake, enoki, king oyster, and wood ear mushrooms, which
              soak up broth like sponges. Enoki cook in about a minute;
              shiitake and king oyster take a little longer. Wood ear adds a
              satisfying crunch.
            </p>
          </FeatureItem>
          <FeatureItem title="🧈 Tofu &amp; Bean Products" theme="yellow">
            <p>
              Firm tofu, fried tofu puffs, tofu skin, and bean curd sheets.
              Tofu puffs are hotpot treasures: they drink up the broth and
              burst with flavour when bitten. Tofu skin needs a longer
              simmer to soften.
            </p>
          </FeatureItem>
          <FeatureItem title="🍜 Noodles &amp; Dumplings" theme="gold">
            <p>
              Hand-pulled noodles, vermicelli, and potato starch noodles are
              usually saved for the end, when the broth is at its richest —
              they turn the last of the pot into a satisfying finish. Some
              tables add dumplings too; cook them until they float and the
              skins turn slightly translucent.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          Two practical rules cover most hotpot mishaps. First, use separate
          chopsticks — or the serving chopsticks provided — for raw meat,
          and never put cooked food back on a plate that held raw meat.
          Second, keep track of what you dropped in: with several people
          cooking at once, it is easy to lose a slice of beef to the depths.
          Small wire strainers, provided at most tables, are your best
          friend — scoop, check, and rescue before things overcook.
        </p>
      </section>

      <!-- 地方流派 -->
      <section class="section">
        <h2 class="section-title">Regional Styles Worth Knowing</h2>
        <p class="section-text">
          Hotpot is not one dish but a family of regional traditions. Each
          region cooks its own way, with its own pot, broth, and dipping
          sauce — and partisans will defend their style with real passion:
        </p>
        <FeatureGrid>
          <FeatureItem title="Chongqing (重庆)" theme="red">
            <p>
              The fiery original: a pot of beef-tallow mala broth so spicy
              it is usually eaten with an oil dipping bowl to cool the heat.
              Chongqing hotpot is famously uncompromising — the broth is
              the star, and even the vegetables come out tingling.
            </p>
          </FeatureItem>
          <FeatureItem title="Beijing / Mongolian (北京 / 蒙古)" theme="gold">
            <p>
              The northern classic: a charcoal-heated copper pot, clear
              broth, and paper-thin lamb. The dipping sauce is the ritual
              here — a personal bowl of sesame paste mixed with fermented
              bean curd, chilli oil, and chopped spring onion and coriander.
            </p>
          </FeatureItem>
          <FeatureItem title="Cantonese (广东)" theme="green">
            <p>
              Guangdong's lighter style, sometimes called "daa bin lou"
              (打边炉, "hitting the edge of the stove"). Clear, delicate
              broths — often chicken or seafood based — and an emphasis on
              freshness, with premium seafood and a simple soy-based dip.
            </p>
          </FeatureItem>
          <FeatureItem title="Sichuan (四川)" theme="red">
            <p>
              Sichuan's version is close to Chongqing's but often a little
              more varied in its broths, with tomato, mushroom, and
              three-delicacy stocks alongside mala. Chengdu restaurants
              helped turn hotpot into the polished, chain-restaurant
              experience that spread worldwide.
            </p>
          </FeatureItem>
          <FeatureItem title="Yunnan (云南)" theme="blue">
            <p>
              Yunnan's mushroom hotpot celebrates the province's wild
              mushrooms, simmered in a chicken broth with ham — a seasonal,
              fragrant style that shows hotpot at its most delicate.
            </p>
          </FeatureItem>
          <FeatureItem title="Taiwan (台湾)" theme="yellow">
            <p>
              Taiwanese hotpot often comes as individual mini-pots, one per
              diner, with a wide choice of broths — from mala to milk to
              tomato — and a sauce bar where each person builds their own
              dip. Convenient, personal, and very popular with solo diners.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 怎么吃 -->
      <section class="section">
        <h2 class="section-title">How to Eat Hotpot Like a Local</h2>
        <p class="section-text">
          Eating hotpot well is a small ritual, and it is easy to learn. Here
          is the usual flow, from sitting down to the last noodle:
        </p>
        <p class="section-text">
          <strong>1. Choose your broth.</strong> Pick one broth, or a divided
          pot with a spicy side and a mild side. If your table cannot agree,
          the divided pot is the peacemaker — nobody has to suffer, and
          everyone can try both.
        </p>
        <p class="section-text">
          <strong>2. Build your dipping sauce.</strong> At most restaurants
          there is a sauce bar: sesame paste, soy sauce, oyster sauce, chilli
          oil, minced garlic, chopped spring onion, coriander, and fermented
          bean curd, among others. Northern diners build a thick sesame-based
          sauce; Chongqing diners use a simpler bowl of oil with garlic and
          herbs. There is no wrong recipe — mix, taste, adjust.
        </p>
        <p class="section-text">
          <strong>3. Wait for a rolling boil.</strong> Do not start cooking
          in a lukewarm pot. Wait until the broth is bubbling hard, then add
          ingredients a few at a time — a crowded pot cools down and cooks
          unevenly.
        </p>
        <p class="section-text">
          <strong>4. Cook, dip, eat — in that order.</strong> Swish thin meat
          for a few seconds until it changes colour; give vegetables and
          mushrooms a minute or two; fish things out with your strainer or
          chopsticks, dip in your sauce, and eat while hot. Pace yourself:
          hotpot is a marathon, not a sprint.
        </p>
        <p class="section-text">
          <strong>5. Save the noodles for last.</strong> Once the plates are
          nearly empty and the broth is rich with everything that has been
          cooked in it, add noodles or vermicelli for a final course — and,
          if the broth is a clear one, a bowl of that soup to finish.
        </p>
        <p class="section-text">
          A few points of etiquette help. Do not fish around in the pot with
          your own chopsticks if serving chopsticks are provided; do not take
          food from someone else's section of a divided pot without asking;
          and if you are the host, keep an eye on the broth level and on
          whether guests need more of anything — in China, the host's job is
          to make sure nobody's bowl is ever empty. For a fuller guide to
          Chinese table manners, see our
          <NuxtLink to="/articles/chinese-food">beginner's guide to Chinese food and dining etiquette</NuxtLink>.
        </p>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">More Than a Meal</h2>
        <p class="section-text">
          Hotpot matters in China because it is, above all, a social
          technology. A shared pot makes everyone equal: the boss and the
          intern cook the same way, reach into the same broth, and wait for
          the same beef to cook. Nobody is served first and nobody is served
          last. The meal only works if everyone takes part, and the long,
          slow pace gives conversation room to grow — which is why hotpot is
          the go-to choice for reunions, farewells, team dinners, and cold
          nights when friends want an excuse to stay together a little
          longer.
        </p>
        <p class="section-text">
          Hotpot is also a winter ritual. When temperatures drop across
          northern China, the steam rising from a copper pot is warmth you
          can eat, and the chilli heat of a Chongqing pot is famous for
          driving out the damp cold of the Yangtze winter. In summer, too,
          hotpot restaurants stay busy — air conditioning inside, a fiery
          pot on the table, and cold beer to balance it — a combination the
          Chinese call "sweating it out".
        </p>
        <p class="section-text">
          Beyond China, hotpot has travelled with the diaspora and with
          curious eaters everywhere. Similar communal pots exist across Asia
          — Japan's <em>shabu-shabu</em> and <em>sukiyaki</em>, Korea's
          <em>jeongol</em> — and each owes something to the same idea: food
          tastes better when you cook it together. But the Chinese version
          remains the most exuberant of them all: the biggest pots, the
          boldest broths, and the longest evenings.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "Eating hotpot is not about the food — it is about the gathering
          around the pot."
          <template #author>— A common Chinese saying about hotpot</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Hotpot Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "Chinese Hotpot",
  title:
    "Hotpot: China's Communal Feast | Chinese Culture Guide",
  description:
    "Chinese hotpot (火锅) — the bubbling communal pot at the heart of Chinese dining: its history from northern copper pots to Chongqing mala, the main broths, what to cook in it, regional styles, and how to eat it like a local.",
  ogTitle: "Hotpot: China's Communal Feast (火锅)",
  ogDescription:
    "One bubbling pot, a table full of friends — the history, broths, ingredients and etiquette of Chinese hotpot",
  ogType: "article",
  ogImage: "/assets/images/chinese-hotpot.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Hotpot",
  twitterDescription:
    "One bubbling pot, a table full of friends — the history, broths, ingredients and etiquette of Chinese hotpot",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Hotpot: China's Communal Feast",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Hotpot: China's Communal Feast",
        description:
          "A guide to Chinese hotpot (火锅): its history from northern copper pots to Chongqing mala, the main broths, ingredients, regional styles, and how to eat hotpot like a local",
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
</style>
