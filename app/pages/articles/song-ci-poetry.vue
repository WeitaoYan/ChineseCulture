<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Song Ci Poetry</h1>
      <p class="page-subtitle">
        Sòngcí — Lyrics Written to Music in the Song Dynasty
      </p>
      <PageMeta>
        <MetaItem>🎵 Poetry Set to Music</MetaItem>
        <MetaItem>🌕 Su Shi &amp; the Mid-Autumn Moon</MetaItem>
        <MetaItem>🌸 Li Qingzhao, Poet of Longing</MetaItem>
        <MetaItem>⚔️ Songs of Patriotism</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/song-ci-poetry.png"
      altText="Elegant Song dynasty scene of a scholar-poet writing lyrics by a riverside pavilion at dusk, with willow trees and distant mountains"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Song ci poetry</strong> (宋词, Sòngcí) is the great lyric
          poetry of the Song dynasty (960–1279) — poems written to be sung.
          If Tang poetry is China's golden age of verse, Song ci is its golden
          age of song: words fitted to melodies, with lines that stretch and
          shrink to follow the music, full of longing, moonlight, parting,
          and patriotism.
        </p>
        <p class="section-text">
          The form began in the Tang dynasty, when entertainers in the cities
          sang lyrics to popular tunes, but it was in the Song that ci became
          the art form of everyone from emperors to courtesans. Su Shi wrote
          ci about the moon over the Mid-Autumn Festival; Li Qingzhao wrote
          ci about losing her husband and her country; Xin Qiji wrote ci that
          reads like a battle cry. Their lines are still memorised by
          schoolchildren today — and some are still sung.
        </p>
        <p class="section-text">
          This page follows on from the site's
          <NuxtLink to="/articles/tang-poetry">Tang Poetry</NuxtLink> page.
          Tang shi and Song ci are the two peaks of classical Chinese poetry,
          and the best way to understand ci is to see how it grew out of —
          and broke away from — the poetry of the Tang.
        </p>
      </section>

      <!-- 什么是词 -->
      <section class="section">
        <h2 class="section-title">What Is Ci? How It Differs from Tang Shi</h2>
        <p class="section-text">
          Tang shi (唐诗) is built on regularity: most poems use lines of five
          or seven syllables, arranged in strict patterns of four or eight
          lines, with rhymes and tones fixed by rule. Ci throws that regularity
          away. A ci poem is written to a tune pattern called a
          <em>cipai</em> (词牌) — a melody with its own fixed number of lines,
          its own pattern of long and short lines, and its own rhyme scheme.
          The poet chooses a tune, then fits words to it.
        </p>
        <p class="section-text">
          The result looks very different on the page. Where a Tang poem
          marches in even lines, a ci poem ripples: a one-syllable line may be
          followed by a line of seven or eight, then a short line of three.
          That uneven rhythm is the sound of singing — the words bend to the
          melody the way a singer's voice rises and falls.
        </p>
        <p class="section-text">
          Ci also differs in mood. Tang poetry often speaks in a grand,
          public voice — of frontiers, of empire, of history. Ci speaks more
          often in a private voice: a lover waiting at a window, a traveller
          drinking alone, a poet gazing at the moon and thinking of someone
          far away. That intimacy is part of why ci has stayed so close to
          Chinese hearts for a thousand years.
        </p>
        <p class="section-text">
          Ci comes in two main lengths. Short lyrics, <em>xiaoling</em>
          (小令), run to around fifty characters or fewer and often capture a
          single moment or feeling. Long lyrics, <em>manci</em> (慢词), can
          run to over a hundred characters, with room for a story, a scene,
          and a slow change of feeling. The masters of the Song wrote both —
          and each made the form their own.
        </p>
      </section>

      <!-- 南北宋 -->
      <section class="section">
        <h2 class="section-title">Northern Song &amp; Southern Song: Two Moods</h2>
        <p class="section-text">
          The Song dynasty falls into two halves, and ci changed with it. The
          Northern Song (960–1127) had its capital at Kaifeng (then called
          Bianjing), a great commercial city full of restaurants, theatres,
          and singing houses. Ci flourished there as entertainment — elegant,
          witty, and often written for performance. Liu Yong, the most popular
          ci writer of the early Northern Song, spent his life among the
          singers and musicians of the capital, and his lyrics were sung in
          every pleasure quarter.
        </p>
        <p class="section-text">
          In 1127, the Jurchen Jin dynasty captured Kaifeng, and the Song
          court fled south to Hangzhou, beginning the Southern Song
          (1127–1279). The mood of ci darkened with the loss. Poets wrote of
          a lost homeland in the north, of a country cut in half, of
          longing for what could not be recovered. Li Qingzhao lived through
          the fall herself and wrote some of the most heartbreaking lyrics in
          the language. Xin Qiji, born in the occupied north, spent his life
          dreaming of winning it back. The ci of the Southern Song is, more
          than anything, the poetry of exile and memory.
        </p>
      </section>

      <!-- 四位大师 -->
      <section class="section">
        <h2 class="section-title">Four Masters of Ci</h2>
        <p class="section-text">
          Hundreds of poets wrote ci in the Song, but four stand above the
          rest — each with a voice nobody else could imitate:
        </p>
        <FeatureGrid>
          <FeatureItem title="🌕 Su Shi (苏轼, 1037–1101)" theme="gold">
            <p>
              The great all-rounder of the Northern Song — poet, calligrapher,
              painter, statesman. Su Shi lifted ci from entertainment into
              serious literature, writing about philosophy, history, and
              friendship as well as love. His most famous ci, written to the
              tune "Prelude to Water Melody" (水调歌头) for the Mid-Autumn
              Festival of 1076, opens with the question everyone still quotes:
              "When will the moon be clear and bright?" (明月几时有). It ends
              with his wish for his faraway brother: "I wish us a long life,
              and to share the moon's beauty, though a thousand miles apart"
              (但愿人长久，千里共婵娟).
            </p>
          </FeatureItem>
          <FeatureItem title="🌸 Li Qingzhao (李清照, 1084–c. 1155)" theme="red">
            <p>
              The greatest woman poet in Chinese history. In her youth she
              wrote bright, playful lyrics about outings and wine; after the
              fall of Kaifeng and the death of her husband, her ci turned to
              grief and loss. Her late masterpiece, written to the tune
              "Sound after Sound" (声声慢), opens with a stammer of sorrow
              that has no equal in Chinese poetry: "Seeking, seeking,
              searching, searching" (寻寻觅觅，冷冷清清，凄凄惨惨戚戚).
            </p>
          </FeatureItem>
          <FeatureItem title="⚔️ Xin Qiji (辛弃疾, 1140–1207)" theme="blue">
            <p>
              A soldier-poet of the Southern Song, born under Jurchen rule in
              the north. He crossed south to fight for the recovery of lost
              territory, and his ci burns with that ambition. In "Breaking
              Formation" (破阵子), he dreams of battle: "Drunk, I pick up the
              lamp to look at my sword; dreaming, I hear the bugles in the
              camps" (醉里挑灯看剑，梦回吹角连营). His lyrics made ci a vehicle
              for patriotism and heroic feeling.
            </p>
          </FeatureItem>
          <FeatureItem title="🎶 Liu Yong (柳永, c. 987–c. 1053)" theme="green">
            <p>
              The people's poet of the Northern Song, famous in his lifetime
              for lyrics sung in the entertainment quarters of Kaifeng. His
              masterpiece, "The Sound of Rain at the Bell" (雨霖铃), describes
              a farewell at dusk: "Where shall I wake from wine tonight? By
              willows on the bank, in the waning moon and morning breeze"
              (今宵酒醒何处？杨柳岸，晓风残月). The image of the willow bank
              and the waning moon has become the classic picture of parting in
              Chinese culture.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 著名词牌 -->
      <section class="section">
        <h2 class="section-title">Famous Tune Patterns (Cipai)</h2>
        <p class="section-text">
          Every ci poem is written to a tune pattern, and some patterns became
          famous because of the poems written to them. The pattern sets the
          length, the line breaks, and the rhyme — the poet supplies the
          words. A few cipai are now inseparable from their greatest poems:
        </p>
        <FeatureGrid>
          <FeatureItem title="🌕 Prelude to Water Melody (水调歌头)" theme="gold">
            <p>
              A long lyric pattern, best known through Su Shi's Mid-Autumn
              Festival poem of 1076 — the "When will the moon be clear and
              bright?" lyric. The pattern's slow, spacious rhythm suits
              reflection, and later poets returned to it whenever they wanted
              to write about the moon, distance, and longing.
            </p>
          </FeatureItem>
          <FeatureItem title="🌊 Remembering the Maiden (念奴娇)" theme="blue">
            <p>
              Another long pattern, famous for Su Shi's "Reminiscence of Red
              Cliffs" (念奴娇·赤壁怀古), written in 1082 at the site of the
              great battle of 208 CE. Gazing at the river where the Three
              Kingdoms fleets once burned, Su Shi turns history into a
              meditation on time: "The great river flows east, its waves
              washing away the heroes of a thousand years."
            </p>
          </FeatureItem>
          <FeatureItem title="🎶 Sound after Sound (声声慢)" theme="red">
            <p>
              A pattern of repeated, echoing sounds, made unforgettable by Li
              Qingzhao's late lyric of grief, opening with "Seeking, seeking,
              searching, searching." The doubled words in the title itself —
              sound after sound — mirror the poem's stammering sorrow.
            </p>
          </FeatureItem>
          <FeatureItem title="🔔 The Sound of Rain at the Bell (雨霖铃)" theme="green">
            <p>
              A slow, mournful pattern that Liu Yong used for his farewell
              lyric at dusk — the willow bank, the waning moon, the morning
              breeze. Its name comes from a tune said to have been composed
              for the Tang emperor Xuanzong, and its sound has meant parting
              ever since.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          One more pattern deserves a note: "The River Runs Red"
          (满江红), the tune of the famous patriotic lyric beginning "My hair
          bristles with anger" (怒发冲冠) — traditionally attributed to the
          Song general Yue Fei (岳飞), though scholars debate the attribution.
          Whether or not Yue Fei wrote it, the poem became the classic
          expression of loyalty to a fallen homeland, and Chinese
          schoolchildren still recite it today.
        </p>
      </section>

      <!-- 主题 -->
      <section class="section">
        <h2 class="section-title">Themes: Longing, Patriotism &amp; Nature</h2>
        <p class="section-text">
          Three themes return again and again in Song ci. The first is
          longing — for a lover, a friend, a home, a time that has passed.
          Because ci was born as song, it keeps the voice of someone speaking
          to an absent person: the moon becomes a messenger between people a
          thousand miles apart, and a single willow branch carries a whole
          farewell.
        </p>
        <p class="section-text">
          The second is patriotism. After 1127, ci became the language in
          which the Southern Song mourned its lost north. Xin Qiji's battle
          dreams, Li Qingzhao's grief for a fallen capital, and the many
          poems written on the anniversary of lost cities all use the
          intimate form of ci to carry a public sorrow — which is why they
          still move readers today.
        </p>
        <p class="section-text">
          The third is nature, seen not as scenery but as feeling. In ci, the
          moon is never just the moon: it is the light that falls on lovers
          and on lonely travellers alike. Falling blossoms mark the passing
          of youth; autumn rain marks the passing of a dynasty. Su Shi's
          moon, Li Qingzhao's autumn, Liu Yong's willows — these images
          became a shared vocabulary, so that a later poet needed only a
          single phrase to call up a whole world of feeling.
        </p>
      </section>

      <!-- 影响 -->
      <section class="section">
        <h2 class="section-title">Legacy: Why Song Ci Still Matters</h2>
        <p class="section-text">
          Song ci never faded. In the centuries after the Song, poets kept
          writing to the old tune patterns, and scholars compiled great
          anthologies of ci just as they had for Tang poetry. Today, the
          lyrics of Su Shi and Li Qingzhao are memorised in Chinese schools
          alongside Tang poems, and their lines turn up in songs, films, and
          everyday conversation — Su Shi's Mid-Autumn wish is quoted every
          year at the festival itself.
        </p>
        <p class="section-text">
          Ci also travelled beyond China. Its combination of strict musical
          form and deep personal feeling influenced poetry in Korea, Japan,
          and Vietnam, and modern translators have carried it around the
          world. And because ci was written to be sung, it is still sung:
          modern musicians regularly set Song ci to new melodies, so that a
          poem written nine hundred years ago can still be heard as a song
          today — which is exactly what it was written to be.
        </p>
        <p class="section-text">
          Together with Tang poetry, Song ci forms the twin peaks of classical
          Chinese verse: Tang shi for grandeur and regularity, Song ci for
          music and feeling. To read one without the other is to hear only
          half the song.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "I wish us a long life, and to share the moon's beauty, though a
          thousand miles apart."
          <template #author>— Su Shi, "Prelude to Water Melody" (但愿人长久，千里共婵娟)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Song Ci Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "Song Ci Poetry",
  title:
    "Song Ci Poetry | Sòngcí — Lyrics Written to Music — Chinese Culture Guide",
  description:
    "Song ci poetry (宋词) — lyrics written to music in the Song dynasty: how ci differs from Tang shi, the tune patterns, Su Shi, Li Qingzhao, Xin Qiji, and Liu Yong, and why their songs are still sung today.",
  ogTitle: "Song Ci Poetry (宋词)",
  ogDescription:
    "Lyrics written to music in the Song dynasty — Su Shi's moon, Li Qingzhao's longing, Xin Qiji's battle dreams, and the songs that still echo today",
  ogType: "article",
  ogImage: "/assets/images/song-ci-poetry.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Song Ci Poetry",
  twitterDescription:
    "Song ci (宋词) — the lyrics of the Song dynasty, from Su Shi and Li Qingzhao to Xin Qiji and Liu Yong",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Song Ci Poetry (宋词)",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Song Ci Poetry",
        description:
          "A guide to Song ci poetry (宋词): lyrics written to music in the Song dynasty, how ci differs from Tang shi, the tune patterns, and the masters Su Shi, Li Qingzhao, Xin Qiji, and Liu Yong",
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
