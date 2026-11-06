<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">China in 10 Days: The First-Timer's Itinerary</h1>
      <p class="page-subtitle">
        Beijing, Xi'an, Chengdu and Shanghai — the Classic Route, Day by Day
      </p>
      <PageMeta>
        <MetaItem>🗓️ 10-Day Classic Route</MetaItem>
        <MetaItem>🏯 Beijing · Xi'an · Chengdu · Shanghai</MetaItem>
        <MetaItem>🚄 High-Speed Trains</MetaItem>
        <MetaItem>💰 Budget Guide Included</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/china-itinerary-10-days.png"
      altText="Panoramic illustration of a first-time China journey: the Great Wall, the Terracotta Army, a giant panda in Chengdu, and the Shanghai skyline"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>How many days do you need for China?</strong> For a first
          trip, <strong>10 days is the sweet spot</strong> — long enough to
          see the country's greatest hits without rushing, short enough to fit
          into a normal holiday. <strong>14 days is the gold standard</strong>:
          the same route at a human pace, with room for a detour to Guilin's
          karst mountains or an extra slow day in Chengdu. Less than a week,
          and you will spend most of it in transit; more than two weeks, and
          you are no longer on a first trip — you are exploring.
        </p>
        <p class="section-text">
          The route below is the classic first-timer's line:
          <strong>Beijing → Xi'an → Chengdu → Shanghai</strong>. It is the
          most-requested China itinerary among travel agencies — the classic
          Beijing–Xi'an–Guilin–Shanghai version alone drew more than 1,000
          private and small-group inquiries in 18 months to August 2026, and
          Guilin and Chengdu each drew more than 3,000 inquiries in the same
          period. It works because it is a journey through Chinese history in
          order: the imperial capital, the ancient capital, the laid-back
          southwest, and the futuristic east — connected by some of the
          fastest trains on Earth.
        </p>
        <p class="section-text">
          This guide gives you the route day by day, with the practical
          details first-timers actually need: how long to spend in each city,
          how to move between them, and what it costs. The great landmarks
          along the way — the Great Wall, the Forbidden City, the Terracotta
          Army — already have their own in-depth articles on this site, so
          they appear here as stops on the journey, linked rather than
          rewritten.
        </p>
      </section>

      <!-- 路线总览 -->
      <section class="section">
        <h2 class="section-title">The Classic Route at a Glance</h2>
        <p class="section-text">
          Ten days, four cities, three high-speed train rides. The shape of
          the trip:
        </p>
        <FeatureGrid>
          <FeatureItem title="🏯 Days 1–3: Beijing" theme="red">
            <p>
              The imperial capital. The Forbidden City and the Great Wall are
              the two unmissable sights, with the Temple of Heaven, the Summer
              Palace, and the hutong lanes filling the days between. Three full
              days is the minimum; Beijing rewards a fourth if you have it.
            </p>
          </FeatureItem>
          <FeatureItem title="⚔️ Days 4–5: Xi'an" theme="gold">
            <p>
              The ancient capital and the eastern end of the Silk Road. One
              full day for the Terracotta Army, one for the city wall, the
              Muslim Quarter, and the Big Wild Goose Pagoda. The overnight
              train from Beijing is a classic; the high-speed train takes
              about four to five hours.
            </p>
          </FeatureItem>
          <FeatureItem title="🐼 Days 6–7: Chengdu" theme="green">
            <p>
              The slow-down stop. Giant pandas in the morning, teahouses in
              the afternoon, and the best food in China in the evening. Two
              days here reset the pace of the trip — and Chengdu is the
              gateway to day trips such as the Leshan Giant Buddha.
            </p>
          </FeatureItem>
          <FeatureItem title="🌆 Days 8–10: Shanghai" theme="blue">
            <p>
              The finale. The Bund at dusk, the old city around Yu Garden,
              the French Concession's plane-tree streets, and the view from
              the Shanghai Tower. Three days lets you see both the historic
              city and the futuristic one — and do your souvenir shopping
              before flying home.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 北京 -->
      <section class="section">
        <h2 class="section-title">Days 1–3: Beijing — the Imperial Capital</h2>
        <p class="section-text">
          <strong>Day 1: The heart of the empire.</strong> Start at
          Tiananmen Square and the
          <NuxtLink to="/articles/forbidden-city">Forbidden City</NuxtLink>,
          the largest imperial palace complex in the world and the home of 24
          Ming and Qing emperors. Give it a full morning — it is bigger than
          it looks on the map. In the afternoon, climb Jingshan Park just
          north of the palace for the classic rooftop view over the golden
          tiles, then wander the hutong lanes and the lakes of Shichahai in
          the evening. Book Forbidden City tickets days ahead: daily visitor
          numbers are capped and they sell out, especially in the high season.
        </p>
        <p class="section-text">
          <strong>Day 2: The Great Wall.</strong> This is the day most
          travellers remember forever. The
          <NuxtLink to="/articles/great-wall">Great Wall</NuxtLink> has many
          sections; Mutianyu is the best choice for most first-timers —
          beautifully restored, less crowded than Badaling, with a cable car
          up and a toboggan down. Go early, take water and sun protection,
          and allow a full day including the drive. Back in the city, spend
          the evening at the
          <NuxtLink to="/articles/temple-of-heaven">Temple of Heaven</NuxtLink>,
          where locals practise tai chi and dance in the park at dusk.
        </p>
        <p class="section-text">
          <strong>Day 3: Palaces and lakes.</strong> Spend the morning at the
          <NuxtLink to="/articles/summer-palace">Summer Palace</NuxtLink>, the
          imperial garden of lakes and pavilions northwest of the centre —
          arrive when it opens to enjoy Kunming Lake before the crowds. The
          afternoon is for the things that make Beijing feel alive rather
          than monumental: the Lama Temple, the Confucius Temple next door,
          the 798 Art District if you like contemporary art, or simply a long
          lunch of Peking duck. In the evening, take the high-speed train to
          Xi'an or catch a late flight — the railway journey takes about four
          to five hours.
        </p>
      </section>

      <!-- 西安 -->
      <section class="section">
        <h2 class="section-title">Days 4–5: Xi'an — the Ancient Capital</h2>
        <p class="section-text">
          <strong>Day 4: The Terracotta Army.</strong> The
          <NuxtLink to="/articles/terracotta-army">Terracotta Army</NuxtLink>
          is about an hour's drive northeast of Xi'an, and it deserves a full
          morning. The three pits hold thousands of life-sized soldiers,
          each with a different face, standing in battle formation where they
          were buried with China's first emperor more than 2,000 years ago.
          Go early, hire the audio guide, and save Pit 1 — the great hall of
          soldiers — for last. In the afternoon, return to the city and walk
          or cycle the Ming-dynasty city wall, one of the best-preserved in
          China, then eat your way through the Muslim Quarter as the
          lanterns come on.
        </p>
        <p class="section-text">
          <strong>Day 5: The city itself.</strong> Xi'an was the capital of
          China for more than a thousand years, and the city still shows it.
          Visit the Big Wild Goose Pagoda — built in the Tang dynasty to hold
          Buddhist scriptures brought from India — and the Shaanxi History
          Museum, one of the best in the country, if you want the deep
          background. The Bell and Drum Towers mark the old city centre, and
          the Great Mosque, hidden down a lane in the Muslim Quarter, is one
          of the oldest in China. In the late afternoon, take the high-speed
          train to Chengdu, a journey of roughly four hours through the
          Qinling mountains.
        </p>
      </section>

      <!-- 成都 -->
      <section class="section">
        <h2 class="section-title">Days 6–7: Chengdu — Pandas, Teahouses, and Slow Living</h2>
        <p class="section-text">
          <strong>Day 6: Pandas in the morning.</strong> The Giant Panda
          Breeding Research Base opens early, and the pandas are most active
          in the cool of the morning — arrive when the gates open, around
          7:30 a.m., and head straight for the enclosures. By midday the
          animals are mostly asleep, so the afternoon belongs to the city:
          People's Park, where Chengdu's famous teahouse culture is on full
          display — locals playing mahjong, getting their ears cleaned, and
          drinking jasmine tea for hours. Our guide to
          <NuxtLink to="/articles/chinese-tea-culture">Chinese tea culture</NuxtLink>
          explains what you are looking at. In the evening, eat hotpot:
          Chengdu is its home, and our
          <NuxtLink to="/articles/chinese-hotpot">hotpot guide</NuxtLink>
          covers how to order and what to put in the pot.
        </p>
        <p class="section-text">
          <strong>Day 7: Choose your own Chengdu.</strong> The classic day
          trip is the Leshan Giant Buddha, the largest stone Buddha in the
          world, about two hours away — take the boat for the full view, or
          climb down the cliffside stairs for the close-up. Alternatively,
          stay in the city: the Wenshu Monastery and its vegetarian
          restaurants, the Wide and Narrow Alleys (Kuanzhai Xiangzi) for
          crafts and street food, or the Sanxingdui Museum, about an hour
          away, for the mysterious bronze masks of a kingdom older than the
          Terracotta Army. Fly or take the high-speed train to Shanghai in
          the evening — the flight is about two and a half hours, and the
          train, while longer, drops you in the city centre.
        </p>
      </section>

      <!-- 上海 -->
      <section class="section">
        <h2 class="section-title">Days 8–10: Shanghai — the Future, with an Old Soul</h2>
        <p class="section-text">
          <strong>Day 8: The Bund and the old city.</strong> Start in the Old
          City around Yu Garden — the Ming-dynasty garden and its maze of
          lanes are the most traditional corner of Shanghai, and the place to
          try soup dumplings (xiaolongbao) at their source. In the afternoon,
          cross to the Bund, the colonial-era waterfront, and watch the
          skyline of Pudong across the Huangpu River. Stay for dusk: the
          towers light up one by one, and the view from the Bund is the
          single most photographed scene in modern China.
        </p>
        <p class="section-text">
          <strong>Day 9: The modern city.</strong> Cross the river to Pudong
          and go up the Shanghai Tower — at 632 metres, one of the tallest
          buildings in the world — for the view over the whole city. Then
          come back down to earth in the French Concession: plane-tree-lined
          streets, art-deco villas, cafes, and boutiques, a world away from
          the towers. Tianzifang's craft lanes and the Propaganda Poster Art
          Centre (check opening days before you go) are the Concession's
          quirkiest corners.
        </p>
        <p class="section-text">
          <strong>Day 10: Last morning, departure.</strong> Keep the final
          morning light: a walk along the Bund in the early morning, when
          locals practise tai chi by the river; a last breakfast of shengjian
          (pan-fried buns) and soy milk; and souvenir shopping for tea,
          silk, or porcelain — the things China does best. Then head to
          Pudong or Hongqiao airport, or to the high-speed train station if
          you are continuing on. Most international flights leave in the
          afternoon or evening, so a morning in the city costs you nothing.
        </p>
      </section>

      <!-- 交通 -->
      <section class="section">
        <h2 class="section-title">Getting Around: Trains, Flights, and City Transport</h2>
        <p class="section-text">
          The high-speed train is the backbone of this itinerary — and one of
          the great experiences of travelling in China. The network runs over
          42,000 kilometres, with trains reaching 350 km/h, and the three
          intercity legs of this trip (Beijing–Xi'an, Xi'an–Chengdu,
          Chengdu–Shanghai by air or rail) are all comfortable and fast.
          Tickets go on sale 15 days ahead on 12306, the railway's official
          app, which now has an English version and accepts foreign
          passports; Trip.com is the usual alternative. Book the popular
          routes as soon as tickets open, especially around holidays, and
          arrive at the station with your passport — it is your ticket.
        </p>
        <p class="section-text">
          Within each city, the metro is the easiest way to move: Beijing,
          Xi'an, Chengdu, and Shanghai all have extensive, cheap, and
          English-signed networks. Taxis and ride-hailing (DiDi, which has an
          English version) fill the gaps, and the Maglev train from Pudong
          Airport to the city is a fun first taste of Chinese speed. One
          practical note: set up mobile payment (Alipay or WeChat Pay linked
          to a foreign card) before you arrive — it is how almost everything
          is paid for, from the metro to the market stall.
        </p>
      </section>

      <!-- 花费 -->
      <section class="section">
        <h2 class="section-title">How Much Does It Cost?</h2>
        <p class="section-text">
          <strong>All figures in this section are reference estimates only.</strong>
          Trip costs vary enormously by travel style, season, and where you
          book — published estimates for a mid-range China trip differ by
          two to three times between sources, so treat every number here as
          a rough guide, not a quote.
        </p>
        <p class="section-text">
          For a mid-range traveller — comfortable hotels, restaurant meals,
          high-speed trains between cities, and the main sights — a common
          reference range is about <strong>$100–200 per person per day</strong>,
          excluding international flights. On that basis, a 10-day trip lands
          roughly around $1,000–2,000 per person on the ground, and a
          commonly cited range for 14 days is about $1,400–5,000 per person
          excluding international flights, with the wide spread reflecting
          the difference between careful mid-range travel and a more
          comfortable pace. Budget travellers staying in hostels and eating
          at local restaurants can spend far less; luxury travellers can
          spend several times more.
        </p>
        <FeatureGrid>
          <FeatureItem title="🛏️ Accommodation" theme="blue">
            <p>
              The biggest variable. Mid-range hotels in the four cities
              typically run about $40–90 per night as a rough reference;
              hostels and budget hotels are far cheaper, and international
              five-star hotels start well above that. Book early in spring
              and autumn, when the good hotels fill up.
            </p>
          </FeatureItem>
          <FeatureItem title="🍜 Food" theme="red">
            <p>
              The best value in the trip. A filling local meal often costs
              only a few dollars, a good restaurant dinner perhaps $10–25 per
              person as a rough reference, and even a Peking duck dinner for
              two is modest by Western standards. Street food and breakfast
              stalls are the cheapest and often the most memorable meals.
            </p>
          </FeatureItem>
          <FeatureItem title="🚄 Transport" theme="green">
            <p>
              High-speed train legs between the four cities typically cost
              roughly $50–100 each as a rough reference, depending on the
              route and class; second class is comfortable and is what most
              travellers use. Metro rides cost well under a dollar, and a
              domestic flight from Chengdu to Shanghai is usually comparable
              to the train.
            </p>
          </FeatureItem>
          <FeatureItem title="🎫 Tickets &amp; Activities" theme="gold">
            <p>
              Sightseeing is reasonably priced. Major attractions typically
              charge the equivalent of about $5–25 as a rough reference —
              the Forbidden City and the Terracotta Army are at the upper end
              of that range, parks and temples at the lower end. The Shanghai
              Tower observatory is one of the pricier tickets. Budget roughly
              $10–25 per day for entries.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          The cheapest way to cut the cost of this trip is not to skip sights
          but to travel in the shoulder season: hotels drop sharply outside
          April–May and September–October, and the sights are quieter too.
          The most expensive mistake is the opposite — booking everything
          last-minute during Golden Week, when prices spike and the best
          rooms and train seats are already gone.
        </p>
      </section>

      <!-- 14 天 -->
      <section class="section">
        <h2 class="section-title">Stretching It to 14 Days: The Gold Standard</h2>
        <p class="section-text">
          If you have 14 days, do not just do the 10-day route more slowly —
          add a place the 10-day version has to skip. The best addition is
          <strong>Guilin and Yangshuo</strong>: two or three days between
          Xi'an and Chengdu, cruising the Li River past the karst peaks that
          appear on the 20-yuan banknote, cycling through the rice fields
          around Yangshuo, and watching the cormorant fishermen at dusk.
          Guilin is one of the most-requested destinations in China for a
          reason, and it is the one landscape on this list that nothing else
          in the world quite resembles.
        </p>
        <p class="section-text">
          Other good additions, one at a time: <strong>Zhangjiajie</strong>
          (two days for the sandstone pillars that inspired the floating
          mountains of Avatar — best in autumn), an extra day in
          <strong>Beijing</strong> for a second Great Wall section or a day
          trip to the Chengde Mountain Resort, or a slow day in
          <strong>Chengdu</strong> for the Dujiangyan irrigation system, a
          UNESCO-listed engineering marvel still in use after more than 2,000
          years. Fourteen days with one of these additions is, for most
          travellers, the best first trip to China there is.
        </p>
      </section>

      <!-- 实用提示 -->
      <section class="section">
        <h2 class="section-title">First-Timer Tips for the Road</h2>
        <p class="section-text">
          A few things that make the whole itinerary smoother.
          <strong>When to go:</strong> April–May or September–October are the
          best months for this route — see our month-by-month guide to
          <NuxtLink to="/articles/best-time-to-visit-china">the best time to visit China</NuxtLink>.
          Avoid Golden Week (1–7 October) and the May Day holiday if you can.
          <strong>Book ahead:</strong> the Forbidden City, the Terracotta
          Army, and the Shanghai Tower all cap daily visitors — reserve
          tickets as soon as your dates are fixed. <strong>Pack light but
          pack layers:</strong> the route crosses several climates, and the
          mountains are cooler than the cities.
          <strong>Carry your passport:</strong> you will need it for trains,
          hotels, and many attractions. And <strong>slow down in
          Chengdu:</strong> the city is the trip's rest day for a reason —
          travellers who rush it are the ones who wish they had stayed
          longer.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "Read ten thousand books, travel ten thousand li."
          <template #author>— Chinese proverb (读万卷书，行万里路)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="China in 10 Days Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "China in 10 Days: The First-Timer's Itinerary",
  title:
    "China in 10 Days: The First-Timer's Itinerary | Chinese Culture Guide",
  description:
    "China in 10 days: the classic first-timer's itinerary from Beijing to Xi'an, Chengdu and Shanghai — day by day, with high-speed train tips and a mid-range budget guide (about $100–200 per day, reference estimate only). 14 days is the gold standard.",
  ogTitle: "China in 10 Days: The First-Timer's Itinerary",
  ogDescription:
    "Beijing, Xi'an, Chengdu and Shanghai in 10 days — the classic first-timer's route, day by day, with trains, costs, and how to stretch it to 14 days.",
  ogType: "article",
  ogImage: "/assets/images/china-itinerary-10-days.png",
  twitterCard: "summary_large_image",
  twitterTitle: "China in 10 Days: The First-Timer's Itinerary",
  twitterDescription:
    "The classic first-timer's route — Beijing, Xi'an, Chengdu and Shanghai in 10 days, with a budget guide and the 14-day gold standard.",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title:
    "China in 10 Days: The First-Timer's Itinerary",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "China in 10 Days: The First-Timer's Itinerary",
        description:
          "A 10-day first-timer's itinerary for China: Beijing, Xi'an, Chengdu and Shanghai day by day, with high-speed train guidance, a mid-range budget guide of about $100–200 per day (reference estimate only), and how to extend the trip to 14 days",
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
