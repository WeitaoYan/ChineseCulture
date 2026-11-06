<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Chinese Food: A Beginner's Guide</h1>
      <p class="page-subtitle">
        Zhōngguó Cài — How to Eat Well, Order Well, and Enjoy the Table
      </p>
      <PageMeta>
        <MetaItem>🍜 Famous Dishes to Try First</MetaItem>
        <MetaItem>🍚 How a Chinese Meal Is Built</MetaItem>
        <MetaItem>🥢 Chopsticks, Hosts &amp; Toasts</MetaItem>
        <MetaItem>📋 Ordering Without Fear</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/chinese-food.png"
      altText="Overhead view of a round Chinese dining table covered with shared dishes, rice bowls, dumplings, steamed fish and tea cups"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Chinese food</strong> is one of the world's great cuisines
          — and one of the most misunderstood. Outside China, many people know
          it through a handful of takeaway dishes, but the real thing is far
          bigger, more varied, and more interesting: a cuisine built on
          balance, seasonality, and sharing, with a table manners all its own.
          This guide is the beginner's map. It explains how a Chinese meal is
          put together, which famous dishes to try first, how the flavours
          work, how to behave at the table, and how to order with confidence
          — in China or in a Chinese restaurant anywhere in the world.
        </p>
        <p class="section-text">
          One note before we begin: this is a guide to Chinese food as a
          whole — the dishes, the structure of a meal, and the etiquette
          around it. It is deliberately not a tour of the regional schools:
          for those, see our article on
          <NuxtLink to="/articles/eight-great-cuisines">the Eight Great Cuisines of China</NuxtLink>,
          which covers Shandong, Sichuan, Cantonese, Jiangsu, Fujian, Hunan,
          Anhui, and Zhejiang cooking in detail. What follows here is what
          those eight traditions share — the grammar of the Chinese table,
          which stays the same whichever region you are eating in.
        </p>
        <p class="section-text">
          The first thing to understand is that a Chinese meal is not a
          sequence of courses served to individuals. It is a shared event.
          Dishes arrive in the middle of the table, everyone eats from the
          same plates, and the meal is judged as a whole: are there enough
          dishes, enough contrast, enough for everyone? Once you grasp that,
          almost everything else — the ordering, the etiquette, even the
          flavours — falls into place.
        </p>
      </section>

      <!-- 餐制结构 -->
      <section class="section">
        <h2 class="section-title">How a Chinese Meal Is Built</h2>
        <p class="section-text">
          The foundation of Chinese eating is a simple pair of ideas:
          <strong><em>fan</em></strong> (饭) and
          <strong><em>cai</em></strong> (菜). <em>Fan</em> is the staple —
          usually steamed rice in the south, wheat noodles or steamed buns
          in the north — the plain, filling base of the meal. <em>Cai</em>
          is everything that goes with it: the dishes, the flavours, the
          variety. A meal without <em>fan</em> feels incomplete to most
          Chinese diners, and a meal with only <em>fan</em> and one dish
          feels poor. The art lies in the balance between the two.
        </p>
        <p class="section-text">
          A typical shared meal runs roughly like this. First come cold
          appetizers — perhaps smashed cucumber, marinated vegetables, or
          cold sliced meats — set out while everyone settles and tea is
          poured. Then the hot dishes arrive, one or two at a time, and are
          placed in the centre of the table for all to share. There is
          usually a soup, served partway through or near the end, and the
          meal finishes with the staple — rice or noodles — and often with
          fresh fruit rather than a sweet dessert. Sweet dishes exist, but
          they are rarely the grand finale that dessert is in the West.
        </p>
        <p class="section-text">
          The number and mix of dishes matter. A good host aims for
          contrast on the table: something braised beside something steamed,
          something spicy beside something mild, meat beside vegetables, a
          rich dish beside a light one. Colour matters too — a table of
          dishes that are all brown looks wrong, however good they taste.
          And above all, there should be plenty: running out of food is an
          embarrassment for a host, so Chinese meals are generously sized,
          and leaving a little food on the shared plates is normal — it
          shows there was enough.
        </p>
        <p class="section-text">
          Rice deserves a word of its own. In the south it is the default
          staple, served in individual bowls, and diners take dishes from
          the centre onto their rice. In the north, wheat takes its place:
          noodles, steamed buns (<em>mantou</em>), and pancakes. Neither is
          "more Chinese" than the other — the divide follows the old
          agricultural line between rice-growing south and wheat-growing
          north, and both are equally central to the cuisine. For more on
          the northern staple in its most famous form, see our article on
          <NuxtLink to="/articles/dumplings">dumplings</NuxtLink>.
        </p>
      </section>

      <!-- 名菜 -->
      <section class="section">
        <h2 class="section-title">Famous Dishes Every Beginner Should Know</h2>
        <p class="section-text">
          Chinese cooking has thousands of dishes, but a small set of famous
          ones will take you a long way — they appear on menus everywhere,
          they show off the cuisine's range, and they are a safe, delicious
          first order anywhere in the world:
        </p>
        <FeatureGrid>
          <FeatureItem title="🦆 Peking Duck (北京烤鸭)" theme="red">
            <p>
              Beijing's most famous dish: duck roasted until the skin is
              crisp and lacquered, then carved at the table and eaten wrapped
              in thin pancakes with spring onion, cucumber, and sweet bean
              sauce. A banquet showpiece with a history stretching back to
              the imperial kitchens of the Ming dynasty.
            </p>
          </FeatureItem>
          <FeatureItem title="🌶️ Mapo Tofu (麻婆豆腐)" theme="red">
            <p>
              Soft tofu and minced meat in a fiery sauce of chilli and
              Sichuan pepper, from Sichuan. The name means "pockmarked
              grandmother's tofu," after the 19th-century Chengdu cook who
              is said to have created it. Numbing, spicy, and deeply savoury
              — the dish that converts people to Sichuan food.
            </p>
          </FeatureItem>
          <FeatureItem title="🥟 Dumplings (饺子)" theme="gold">
            <p>
              Wheat wrappers folded around pork, vegetable, or seafood
              fillings, boiled, steamed, or pan-fried. A northern staple and
              a New Year tradition — families gather to make them together,
              and their shape is said to resemble the old silver ingots,
              symbolising wealth for the year ahead.
            </p>
          </FeatureItem>
          <FeatureItem title="🍤 Xiaolongbao (小笼包)" theme="yellow">
            <p>
              Delicate steamed soup dumplings from Shanghai, filled with
              pork and a spoonful of aspic that melts into soup as they
              steam. Bite a small hole, sip the soup, then eat the rest with
              black vinegar and ginger. Handle with care — they are
              delicious, hot, and easy to burst.
            </p>
          </FeatureItem>
          <FeatureItem title="🥜 Kung Pao Chicken (宫保鸡丁)" theme="gold">
            <p>
              Diced chicken stir-fried with peanuts, dried chillies, and
              Sichuan pepper in a sweet-sour-savoury sauce. A Sichuan
              classic that became one of the most ordered Chinese dishes
              abroad — though the version outside China is often much
              sweeter than the original.
            </p>
          </FeatureItem>
          <FeatureItem title="🍖 Sweet and Sour Pork (糖醋里脊)" theme="red">
            <p>
              Crisp-fried pork in a glossy sweet-and-sour sauce, a
              Cantonese-influenced favourite that travelled the world with
              Chinese restaurants. The balance of the sauce — neither too
              sweet nor too sharp — is the test of the kitchen.
            </p>
          </FeatureItem>
          <FeatureItem title="🐟 Steamed Fish (清蒸鱼)" theme="blue">
            <p>
              A whole fish steamed with ginger and spring onion, finished
              with hot oil and light soy sauce. The simplest test of a
              Chinese kitchen: there is nowhere to hide, so the fish must
              be fresh and the timing exact. Whole fish also symbolises
              abundance — the word for fish, <em>yu</em> (鱼), sounds like
              the word for surplus (余).
            </p>
          </FeatureItem>
          <FeatureItem title="🍲 Hotpot (火锅)" theme="green">
            <p>
              The communal pot in the middle of the table, where diners cook
              their own thinly sliced meat, vegetables, and noodles in
              bubbling broth. Less a dish than an event — the most sociable
              meal in China. For the full guide, see our article on
              <NuxtLink to="/articles/chinese-hotpot">hotpot</NuxtLink>.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          Beyond these, look out for dim sum — the Cantonese tradition of
          small steamed, fried, and baked plates served with tea, usually at
          lunchtime — and for the noodle soups, from Lanzhou beef noodles to
          Chongqing's spicy small noodles, which are whole meals in a bowl.
          Together, these dishes give you a working map of the cuisine: you
          can order a version of almost any of them in any Chinese city, and
          in most cities outside China too.
        </p>
      </section>

      <!-- 味道 -->
      <section class="section">
        <h2 class="section-title">The Flavours: Five Tastes, One Balance</h2>
        <p class="section-text">
          Chinese cooking traditionally judges a dish by the balance of five
          flavours — salty, sweet, sour, bitter, and umami (savoury) — and by
          the harmony of colour, aroma, and taste. No single flavour should
          dominate, and a meal should offer contrast across its dishes. That
          idea, older than any single regional school, is the common thread
          running through all of Chinese cooking:
        </p>
        <FeatureGrid>
          <FeatureItem title="🧂 Salty (咸)" theme="gray">
            <p>
              The foundation flavour, from soy sauce, salt, and fermented
              pastes. Soy sauce is the seasoning of the Chinese kitchen —
              light soy for saltiness, dark soy for colour and a touch of
              sweetness — and a dish that is under-salted tastes flat, not
              delicate.
            </p>
          </FeatureItem>
          <FeatureItem title="🍯 Sweet (甜)" theme="yellow">
            <p>
              Used as a seasoning, not just a dessert flavour: a little sugar
              rounds out braised pork, balances vinegar in sweet-and-sour
              dishes, and softens chilli heat. Southern cooking, especially,
              leans gently sweet.
            </p>
          </FeatureItem>
          <FeatureItem title="🍋 Sour (酸)" theme="green">
            <p>
              From black vinegar, pickled vegetables, and sour fruits. Sour
              flavours cut through richness and wake up the appetite — which
              is why vinegar is the classic partner for dumplings and why
              hot-and-sour soup works so well.
            </p>
          </FeatureItem>
          <FeatureItem title="🍵 Bitter (苦)" theme="blue">
            <p>
              The least used of the five in everyday cooking, but valued
              all the same: bitter melon, bitter greens, and certain herbal
              teas are prized in Chinese food culture, where bitter flavours
              are associated with cooling the body and clearing heat.
            </p>
          </FeatureItem>
          <FeatureItem title="🍜 Umami (鲜)" theme="gold">
            <p>
              The savoury depth that makes a dish taste complete — from
              stocks, mushrooms, fermented sauces, and well-cooked meat.
              The Chinese word <em>xian</em> (鲜) also means "fresh," and
              the two ideas are linked: freshness itself is a flavour.
            </p>
          </FeatureItem>
          <FeatureItem title="🌶️ Mala (麻辣)" theme="red">
            <p>
              Strictly speaking, not one of the five classical flavours, but
              no beginner's guide can ignore it: the combination of chilli
              heat (<em>la</em>) and the numbing tingle of Sichuan pepper
              (<em>ma</em>) that defines Sichuan and Chongqing cooking. It is
              a sensation as much as a taste — and, for many, an acquired
              one worth acquiring.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          Texture matters as much as taste. Chinese diners prize contrast:
          crisp beside tender, slippery beside chewy, soft beside crunchy.
          A single dish often combines several textures on purpose — the
          crunch of peanuts in kung pao chicken, the silkiness of steamed
          egg custard, the springy bite of hand-pulled noodles. If a dish
          seems to have a texture you do not recognise — jelly-like, chewy,
          or slippery — that is usually the point, not a mistake.
        </p>
      </section>

      <!-- 餐桌礼仪 -->
      <section class="section">
        <h2 class="section-title">Dining Etiquette: The Rules of the Table</h2>
        <p class="section-text">
          Chinese table manners are different from Western ones, but they are
          not difficult — and Chinese hosts are famously forgiving of foreign
          guests. A few rules cover most situations, and knowing them will
          make you a welcome guest rather than a nervous one:
        </p>
        <FeatureGrid>
          <FeatureItem title="🪑 Seating Matters" theme="gold">
            <p>
              The seat facing the door, or the one furthest from it, is the
              seat of honour, reserved for the most senior guest or the host.
              Do not rush to sit down: wait to be shown your place, and if
              you are the guest of honour, expect a little polite insistence
              before you take it.
            </p>
          </FeatureItem>
          <FeatureItem title="🥢 Chopsticks: The Essentials" theme="red">
            <p>
              Hold chopsticks in one hand and use them to take food from the
              shared dishes to your own bowl — never eat directly from the
              shared plate. Do not stick chopsticks upright in a bowl of
              rice (it resembles incense at a funeral), do not point with
              them, and do not use them to spear food like a fork. Resting
              them across your bowl signals you are finished.
            </p>
          </FeatureItem>
          <FeatureItem title="🤝 The Host Looks After You" theme="blue">
            <p>
              A good host will keep putting food in your bowl — accept it
              graciously, even if you are full. In return, it is polite to
              serve others before yourself, especially senior guests. The
              meal is a performance of care, and generosity is the point.
            </p>
          </FeatureItem>
          <FeatureItem title="🍵 Tea Is Hospitality" theme="green">
            <p>
              Tea is served throughout the meal, often before any food
              arrives. If someone pours tea for you, tap two fingers lightly
              on the table beside your cup — a silent thank you, said to
              come from a Qing-dynasty emperor's secret gesture. Pour tea
              for others before refilling your own cup.
            </p>
          </FeatureItem>
          <FeatureItem title="🥂 Toasting (干杯)" theme="yellow">
            <p>
              At formal meals there will be toasts, usually with
              <em>baijiu</em> (白酒), the strong grain spirit. <em>Ganbei</em>
              (干杯, "dry the glass") means finish your glass, but nobody
              reasonable expects a guest to match every toast — a sip, or a
              toast with tea or water, is acceptable. When toasting someone
              senior, hold your glass slightly lower than theirs.
            </p>
          </FeatureItem>
          <FeatureItem title="🍽️ Sharing, Not Serving" theme="gray">
            <p>
              Dishes are shared, so take modest portions and leave enough
              for others — but do not be shy either. It is polite to take
              the piece nearest to you rather than reaching across the table
              for the best piece, and to turn the lazy Susan slowly, never
              spinning it while someone is serving themselves.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 点菜指南 -->
      <section class="section">
        <h2 class="section-title">How to Order Like a Local</h2>
        <p class="section-text">
          Ordering in a Chinese restaurant can feel daunting — menus are long,
          dishes are unfamiliar, and everything is designed to be shared. A
          few practical rules make it simple:
        </p>
        <p class="section-text">
          <strong>Order family-style, not one dish each.</strong> The table
          orders together and shares everything. As a rule of thumb, order
          one dish per person, plus one extra — three people order four
          dishes, five people order six — along with rice for the table. That
          usually gives enough variety without waste.
        </p>
        <p class="section-text">
          <strong>Aim for contrast.</strong> Pick dishes that differ from
          each other: one meat, one vegetable, one seafood if you eat it, one
          soup, and a spread of cooking methods — one steamed, one stir-fried,
          one braised. If everything on the table is fried and brown, the
          meal will feel heavy; if everything is mild, it will feel dull.
        </p>
        <p class="section-text">
          <strong>Start mild, then go spicy.</strong> Order the gentle dishes
          first in your mind — the steamed fish, the greens — and add one or
          two bold ones, such as mapo tofu or kung pao chicken, rather than
          making the whole meal a chilli challenge. Your palate will thank
          you, and you will actually taste the mild dishes.
        </p>
        <p class="section-text">
          <strong>Ask what is good today.</strong> "What do you recommend?"
          is the most useful sentence in any restaurant, in any language.
          Seasonal dishes, the chef's specialities, and the dishes other
          tables are eating are usually the best choices — and staff are
          generally delighted to be asked.
        </p>
        <p class="section-text">
          <strong>Speak up about dietary needs.</strong> Vegetarian dishes
          are plentiful — Buddhist vegetarian cooking is an old tradition —
          but do say clearly what you cannot eat, since stocks and sauces
          may contain meat or seafood. Common allergens such as peanuts,
          shellfish, and gluten (in soy sauce) appear often; a written note
          in Chinese, prepared in advance, is worth more than a spoken
          explanation if your Chinese is limited.
        </p>
        <p class="section-text">
          <strong>Paying the bill.</strong> In China, the host pays — and
          arguing over the bill is a ritual in itself, with friends
          playfully competing for the honour. If you are the guest, let your
          host pay; if you are the host, insist. Splitting the bill evenly
          is common among friends in big cities, but the default is that
          one person treats the table.
        </p>
      </section>

      <!-- 海外与节日 -->
      <section class="section">
        <h2 class="section-title">Chinese Food in China — and Beyond</h2>
        <p class="section-text">
          Eating in China itself is the best education, and it is not
          expensive: small neighbourhood restaurants serve excellent food at
          modest prices, and some of the best meals in the country are found
          at street stalls and in markets rather than in grand dining rooms.
          Breakfast is a world of its own — soy milk and fried dough sticks,
          steamed buns, congee, and noodles — and night markets come alive
          after dark with grilled skewers, pancakes, and snacks.
        </p>
        <p class="section-text">
          Outside China, Chinese food has adapted to local tastes for more
          than a century, and the result varies widely. In many Western
          cities, the "Chinese takeaway" menu — sweet and sour pork, chow
          mein, egg fried rice — is a genuine local tradition in its own
          right, but it is not the same as the food of China. If you want the
          closer thing, look for restaurants that serve a regional menu, that
          are busy with Chinese diners, and that offer dishes you do not
          recognise — those are usually the most authentic choices on the
          menu.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "Food is not over-refined, and minced meat is not over-fine."
          <template #author>— Confucius, Analects (食不厌精，脍不厌细)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Chinese Food Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "Chinese Food",
  title:
    "Chinese Food: A Beginner's Guide | Chinese Culture Guide",
  description:
    "Chinese food for beginners — how a Chinese meal is built around fan and cai, famous dishes to try first, the five flavours, dining etiquette, and how to order family-style with confidence.",
  ogTitle: "Chinese Food: A Beginner's Guide (中国菜)",
  ogDescription:
    "Famous dishes, the structure of a Chinese meal, table etiquette and ordering tips — a beginner's guide to eating Chinese food well",
  ogType: "article",
  ogImage: "/assets/images/chinese-food.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Food: A Beginner's Guide",
  twitterDescription:
    "Famous dishes, the structure of a Chinese meal, table etiquette and ordering tips — a beginner's guide to eating Chinese food well",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Chinese Food: A Beginner's Guide",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Chinese Food: A Beginner's Guide",
        description:
          "A beginner's guide to Chinese food: how a Chinese meal is built around fan and cai, famous dishes to try first, the five flavours, dining etiquette, and how to order family-style",
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
