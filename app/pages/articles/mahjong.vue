<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">
        Mahjong: How to Play China's 19th-Century Tile Game
      </h1>
      <p class="page-subtitle">
        Májiàng — Four Players, 144 Tiles, One Perfect Hand
      </p>
      <PageMeta>
        <MetaItem>🀄 144 Tiles &amp; Three Suits</MetaItem>
        <MetaItem>🏮 Born in Qing-Dynasty China</MetaItem>
        <MetaItem>🎲 Draw, Discard &amp; Meld</MetaItem>
        <MetaItem>🌍 Played Around the World</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/mahjong.png"
      altText="Four people playing mahjong around a wooden table covered with ivory tiles, under red lanterns in a traditional Chinese room"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Mahjong</strong> (麻将, Májiàng) is China's great game of
          tiles — a four-player contest of memory, pattern, and nerve that
          has filled family living rooms, teahouses, and festival gatherings
          for well over a century. On the table it looks like a small city
          of ivory dominoes: rows of tiles standing in walls, hands
          arranging and rearranging themselves, and every few seconds the
          sharp click of a tile laid down. Underneath that noise is a game
          of real depth, closer to rummy or poker than to pure luck.
        </p>
        <p class="section-text">
          A standard set holds 144 tiles. Each player builds a hand of 13
          tiles, drawing and discarding in turn, aiming to complete four
          sets and a pair — the classic winning hand of 14 tiles. The
          rules are simple enough to learn in an evening, but the game
          rewards a sharp eye: which tiles are already gone, what your
          opponents are collecting, and when to abandon a plan that is no
          longer working. That balance of luck and judgement is why mahjong
          has travelled from 19th-century China to tables all over the
          world, and why it is still, above all, a social game — played
          face to face, over tea, usually with family.
        </p>
      </section>

      <!-- 起源 -->
      <section class="section">
        <h2 class="section-title">Origins in Qing-Dynasty China</h2>
        <p class="section-text">
          Mahjong's exact birthplace is one of those questions historians
          still argue about, but the broad outline is agreed. The game
          emerged in China in the mid-19th century, during the Qing
          dynasty, most likely in the region around Ningbo and Shanghai on
          the east coast. It probably grew out of earlier Chinese card
          games, and its name may come from <em>máquè</em> (麻雀,
          "sparrow") — an old nickname for the game, said to evoke the
          chattering sound of the tiles, or the sparrow's quick, darting
          movements.
        </p>
        <p class="section-text">
          From the coast, mahjong spread quickly through China's cities in
          the late 19th and early 20th centuries, carried by merchants,
          officials, and travellers. By the 1920s it had reached the
          United States, where the businessman Joseph Babcock popularized
          a simplified, romanized version under the spelling
          "Mah-Jongg" — and a craze followed, with mahjong sets becoming a
          fashionable import. The game took root wherever Chinese
          communities settled, and each place reshaped it: new scoring,
          new tiles, new house rules.
        </p>
        <p class="section-text">
          In China itself, mahjong became part of the rhythm of family
          life, above all at Lunar New Year, when relatives gather for
          long sessions that can run late into the night. In 1998,
          China's sports authorities published a standardized set of
          official rules, and mahjong is now also played as an organized
          competitive game, with national and international tournaments.
          Yet for most players it remains what it has always been: a game
          for the table at home.
        </p>
      </section>

      <!-- 牌 -->
      <section class="section">
        <h2 class="section-title">The Tiles</h2>
        <p class="section-text">
          A standard 144-tile set is built from three numbered suits,
          honor tiles, and a small group of bonus tiles. Learning to read
          them is the first step — and the designs, with their bamboo
          stalks, circles, and Chinese characters, are part of the game's
          charm:
        </p>
        <FeatureGrid>
          <FeatureItem title="🀇 Characters (万, Wàn)" theme="red">
            <p>
              The suit of ten thousand. Each tile shows the Chinese
              character for ten thousand (萬) above a number character from
              one to nine. It is the most obviously "Chinese" of the suits,
              and the one new players usually learn to read first.
            </p>
          </FeatureItem>
          <FeatureItem title="🎋 Bamboo (条, Tiáo)" theme="green">
            <p>
              Also called sticks. The tiles show rows of bamboo stalks, one
              to nine of them. The one of bamboo is traditionally decorated
              as a bird — often a sparrow, a nod to the game's old name.
            </p>
          </FeatureItem>
          <FeatureItem title="🔴 Dots (筒, Tǒng)" theme="blue">
            <p>
              Also called circles or wheels. The tiles show rings, from one
              to nine, arranged in patterns that range from a single bold
              circle to elaborate geometric designs.
            </p>
          </FeatureItem>
          <FeatureItem title="🧭 Winds (风, Fēng)" theme="gold">
            <p>
              Four tiles for the four directions — east, south, west, and
              north — each marked with its Chinese character (东, 南, 西,
              北). The winds also decide who deals first and who sits
              where: east is the dealer, and the seat winds rotate.
            </p>
          </FeatureItem>
          <FeatureItem title="🐉 Dragons (箭, Jiàn)" theme="red">
            <p>
              Three honor tiles: the red dragon (中, "centre"), the green
              dragon (發, "prosperity"), and the white dragon (白, "white"),
              which is often left blank. Dragons are powerful tiles,
              prized for the points they bring.
            </p>
          </FeatureItem>
          <FeatureItem title="🌸 Flowers &amp; Seasons" theme="yellow">
            <p>
              Eight bonus tiles — four flowers (plum, orchid, chrysanthemum,
              bamboo) and four seasons (spring, summer, autumn, winter).
              They are not used in melds: when you draw one, you set it
              aside, reveal it for a small bonus, and draw a replacement.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 玩法流程 -->
      <section class="section">
        <h2 class="section-title">How a Game Flows</h2>
        <p class="section-text">
          A game begins with the tiles shuffled face down and built into
          four walls, two tiles high, arranged in a square. Each player
          takes 13 tiles — the dealer takes 14, since the dealer starts by
          discarding one. Play then moves counter-clockwise: on your turn
          you draw a tile from the wall and discard one, keeping your hand
          at 13 tiles. The rhythm is simple, but every discard is a small
          decision — and a small gift of information to your opponents.
        </p>
        <p class="section-text">
          The goal is to complete your hand before anyone else does, by
          forming sets called melds. There are three kinds, and knowing
          them is knowing the game:
        </p>
        <FeatureGrid>
          <FeatureItem title="📏 Chow (吃, Chī)" theme="blue">
            <p>
              A sequence of three tiles in the same suit in numerical order
              — for example, 3-4-5 of bamboo. A chow can only be claimed
              from the discard of the player on your left, which makes it
              the most restrictive meld.
            </p>
          </FeatureItem>
          <FeatureItem title="👥 Pung (碰, Pèng)" theme="red">
            <p>
              Three identical tiles, such as three 7s of dots. You may call
              a pung on a tile discarded by any player, announcing it
              aloud — the word itself is part of the sound of the game.
            </p>
          </FeatureItem>
          <FeatureItem title="💎 Kong (杠, Gàng)" theme="gold">
            <p>
              Four identical tiles. A kong is declared openly, and the
              player draws a replacement tile from the end of the wall. It
              is the rarest meld, and in many rules it earns bonus points.
            </p>
          </FeatureItem>
          <FeatureItem title="🏆 The Winning Hand" theme="green">
            <p>
              A complete hand is four melds and a pair — 14 tiles in all.
              The winning tile may be drawn from the wall or claimed from
              an opponent's discard. The winner calls out, lays the hand
              down, and the table scores it.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          Because a discarded tile can be claimed by another player, you
          are never just building your own hand: you are also watching
          three others. Skilled players track which tiles have already
          been discarded, remember what each opponent has revealed, and
          choose discards that are least likely to complete a rival's
          hand. A single careless discard can hand someone the game.
        </p>
      </section>

      <!-- 计分 -->
      <section class="section">
        <h2 class="section-title">Winning and Scoring</h2>
        <p class="section-text">
          Scoring is where mahjong's many regional variants differ most.
          In most versions, the winner's hand is worth points based on
          its pattern: simple hands score little, while rare
          combinations — all one suit, all pungs, or a hand made entirely
          of honor tiles — score much more. Some hands are so rare that
          they carry special names and large bonuses, such as the
          "thirteen orphans," a hand made of one of each terminal and
          honor tile plus a duplicate of one of them.
        </p>
        <p class="section-text">
          Many casual games are played for small stakes or for points
          alone, and the money is beside the point. What matters at a
          family table is the running tally across rounds, the dealer's
          advantage, and the house rules everyone has agreed before the
          first tile is drawn. In competitive play under the standardized
          Chinese official rules, hands are scored with a fixed table of
          point values, which makes games comparable across tables and
          tournaments.
        </p>
        <p class="section-text">
          Whatever the scoring system, one thing is constant: the winner
          is usually the player who balanced patience and speed best —
          who knew when to keep building toward a big hand and when to
          settle for a quick, modest win before someone else got there
          first.
        </p>
      </section>

      <!-- 世界各地 -->
      <section class="section">
        <h2 class="section-title">Mahjong Around the World</h2>
        <p class="section-text">
          Mahjong never stayed still. As it travelled, each region kept
          the core — four players, draw and discard, four sets and a pair
          — and changed the details. The result is a family of games that
          feel familiar to any mahjong player, yet play quite differently:
        </p>
        <FeatureGrid>
          <FeatureItem title="🇨🇳 Chinese Official" theme="red">
            <p>
              The standardized rules published in China in 1998. Complex
              scoring with a fixed table of hand patterns, no gambling
              element in tournament play, and an emphasis on skill over
              luck. Used in international competition.
            </p>
          </FeatureItem>
          <FeatureItem title="🇭🇰 Hong Kong (Cantonese)" theme="gold">
            <p>
              Fast, simple, and widely played in southern China and
              overseas Chinese communities. Scoring is based on
              <em>fan</em> (points), with a low minimum to win, which
              makes for quick, lively games.
            </p>
          </FeatureItem>
          <FeatureItem title="🇯🇵 Japanese Riichi" theme="blue">
            <p>
              Japan's version, with its own distinctive rules: the
              <em>riichi</em> declaration, a bet that you are one tile
              from winning, and the <em>dora</em> bonus tiles. It has a
              large competitive scene and a strong online following.
            </p>
          </FeatureItem>
          <FeatureItem title="🇺🇸 American Mahjong" theme="green">
            <p>
              The version Babcock introduced in the 1920s, later
              standardized by the National Mah Jongg League. It uses
              jokers, a yearly published card of valid hands, and racks
              instead of walls — quite different from the Chinese game.
            </p>
          </FeatureItem>
          <FeatureItem title="🌏 Other Variants" theme="gray">
            <p>
              There are many more: Taiwanese mahjong plays with 16 tiles
              per hand, Singaporean mahjong adds animal tiles, and
              Filipino, Vietnamese, and Korean versions each have their
              own twists. Every variant is a local answer to the same
              game.
            </p>
          </FeatureItem>
          <FeatureItem title="💻 Mahjong Online" theme="yellow">
            <p>
              Today millions play on phones and computers, against
              strangers or with friends. Online play has made it easier
              than ever to learn — the software handles the scoring — but
              many players still say the real game needs a table, four
              chairs, and the sound of the tiles.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 文化 -->
      <section class="section">
        <h2 class="section-title">Mahjong in Chinese Culture</h2>
        <p class="section-text">
          In China, mahjong is far more than a pastime. It is the sound
          of the Lunar New Year, when families clear the dining table and
          play through the holiday. It is the afternoon teahouse, where
          regulars hold the same seats for years. It is a way for
          grandparents and grandchildren to spend time together, and a
          game where a sharp-eyed teenager can beat an elder — and hear
          about it for the rest of the evening. Alongside
          <NuxtLink to="/articles/tai-chi">tai chi</NuxtLink> in the
          morning park and <NuxtLink to="/articles/kung-fu">kung fu</NuxtLink>
          in the training hall, mahjong belongs to the everyday leisure
          culture that fills China's parks, teahouses, and family rooms.
        </p>
        <p class="section-text">
          The game has also entered the language. The tiles themselves
          carry auspicious meanings — the green dragon's 發 (prosperity),
          the red dragon's 中 (centre, or "to hit the mark") — and the
          shuffle of the tiles is often described as the sound of
          sparrows chattering. Mahjong appears in films, novels, and
          songs as shorthand for home, for family, and for the quick
          wits of ordinary people. The 2000s hit film
          <em>Crazy Stone</em> and countless television dramas have used
          the mahjong table as the place where characters reveal who they
          really are.
        </p>
        <p class="section-text">
          There is a saying among players: <em>牌品如人品</em> — the way
          you play your tiles shows the kind of person you are. Grace in
          defeat, honesty in the count, and generosity with beginners are
          all part of the game. Mahjong, at its best, is a small school
          of character disguised as an evening's entertainment.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "The way you play your tiles shows the kind of person you are."
          <template #author>— Chinese saying (牌品如人品)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Mahjong Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "Mahjong",
  title:
    "Mahjong: How to Play China's 19th-Century Tile Game | Chinese Culture Guide",
  description:
    "Mahjong (麻将) — the four-player Chinese tile game from the Qing dynasty: its 19th-century origins, the 144 tiles, how a game flows, melds and scoring, regional variants from Hong Kong to Japan, and its place in Chinese family life.",
  ogTitle: "Mahjong (麻将) — How to Play China's Tile Game",
  ogDescription:
    "Four players, 144 tiles, one perfect hand — the history, the tiles, and the rules of mahjong, China's great social game",
  ogType: "article",
  ogImage: "/assets/images/mahjong.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Mahjong",
  twitterDescription:
    "Four players, 144 tiles, one perfect hand — the history, tiles, and rules of mahjong",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Mahjong: How to Play China's 19th-Century Tile Game (麻将)",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Mahjong: How to Play China's 19th-Century Tile Game",
        description:
          "A guide to mahjong (麻将), the Chinese tile game: its Qing-dynasty origins, the 144 tiles, how a game flows, melds and scoring, regional variants, and its role in Chinese culture",
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
