<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">
        Acupuncture: History and What the Evidence Says
      </h1>
      <p class="page-subtitle">
        Zhēnjiǔ — Needles, Meridians, and Two Thousand Years of Practice
      </p>
      <PageMeta>
        <MetaItem>🪡 Needles Since the Han Dynasty</MetaItem>
        <MetaItem>🌀 Qi and the Meridians</MetaItem>
        <MetaItem>🔬 What the Evidence Says</MetaItem>
        <MetaItem>🏺 Cupping &amp; Moxibustion</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/acupuncture.png"
      altText="A practitioner in traditional robes holding fine needles beside a bronze acupuncture figure in an old Chinese medicine clinic"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- Google 广告位 -->
      <GoogleAd />
      <!-- 简介 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Acupuncture</strong> (针灸, Zhēnjiǔ — literally "needle
          and moxibustion") is one of the oldest healing practices still
          in use anywhere in the world. Fine needles are inserted at
          specific points on the body, along channels known as meridians,
          to restore the flow of <em>qi</em> (气), the vital energy of
          <NuxtLink to="/articles/traditional-chinese-medicine"
            >traditional Chinese medicine</NuxtLink
          >. For more than two thousand years
          it has been part of everyday healthcare in China — and in the
          last fifty years it has spread to clinics, hospitals, and
          research laboratories around the globe.
        </p>
        <p class="section-text">
          Acupuncture is also one of the most studied traditional
          practices in modern medicine, and one of the most debated. Its
          history is well documented, its theory is elegant, and its
          popularity is beyond question. What science can say about how
          well it works — and for what — is a more careful story, and
          this article tells it that way: the history and the ideas
          first, then the evidence as it stands today, without promises.
          This article is for cultural and educational purposes only and
          is not medical advice.
        </p>
      </section>

      <!-- 历史 -->
      <section class="section">
        <h2 class="section-title">A History of Needles</h2>
        <p class="section-text">
          The story of acupuncture begins long before written records.
          Archaeologists have found polished stone needles in China
          dating back thousands of years, and tradition links these
          <em>bian shi</em> (砭石, stone probes) to the earliest forms of
          needling — pressing or piercing the skin to relieve pain. By the
          time of the Han dynasty, the practice had a theory, a map of
          the body, and a classic text to carry it.
        </p>
        <p class="section-text">
          That text is the <em>Huangdi Neijing</em> (黄帝内经, "The Yellow
          Emperor's Inner Canon"), compiled during the Han dynasty, circa
          2nd century BCE. Presented as a dialogue between the legendary
          Yellow Emperor and his physician, it sets out the core ideas of
          traditional Chinese medicine: qi, yin and yang, the five
          phases, and the network of meridians through which qi flows.
          Medical texts buried in the Mawangdui tombs — sealed in 168 BCE
          and excavated in the 1970s — describe eleven channels running
          through the body, showing that the meridian system was already
          taking shape in the early Han.
        </p>
        <p class="section-text">
          A landmark came in the Song dynasty. In 1026, the imperial
          physician Wang Weiyi cast two life-size bronze figures, each
          marked with 354 acupuncture points and covered in wax. Students
          were tested by covering the figure in wax and water: if a needle
          struck the right point, water would seep out. The bronze figures
          turned acupuncture from a master's oral teaching into a
          standardized, examinable subject, and one of them survives in
          museums today.
        </p>
        <p class="section-text">
          Acupuncture travelled early to Korea and Japan, where it
          developed its own schools, and reached Europe in the 17th
          century through missionaries and traders — though it remained a
          curiosity there for centuries. Its modern global spread began in
          the 1970s, after reports of acupuncture used for surgical
          pain relief in China drew worldwide attention. In 2010, UNESCO
          inscribed acupuncture and moxibustion on the Representative List
          of the Intangible Cultural Heritage of Humanity.
        </p>
      </section>

      <!-- 理论 -->
      <section class="section">
        <h2 class="section-title">Qi, Meridians, and Points</h2>
        <p class="section-text">
          Acupuncture makes sense only inside the worldview of
          traditional Chinese medicine. In that framework, health is not
          the absence of a single broken part but the balanced flow of
          energy and substances through the whole body. These are the
          ideas every student of acupuncture learns first:
        </p>
        <FeatureGrid>
          <FeatureItem title="🌀 Qi (气)" theme="gold">
            <p>
              The vital energy that animates the body. Qi is said to flow
              through the meridians, warming, nourishing, and defending
              the body. Illness, in this view, is qi that is blocked,
              deficient, or flowing the wrong way — and the needle's job
              is to restore its movement.
            </p>
          </FeatureItem>
          <FeatureItem title="🗺️ Meridians (经络, Jīngluò)" theme="blue">
            <p>
              The network of channels along which qi travels, linking the
              body's surface to its internal organs. There are twelve main
              meridians, each associated with an organ such as the lung,
              liver, or kidney, plus eight extra channels. The meridian
              map is acupuncture's anatomy.
            </p>
          </FeatureItem>
          <FeatureItem title="📍 Acupoints (穴位, Xuéwèi)" theme="red">
            <p>
              Specific points along the meridians where qi gathers and
              where a needle can influence it. Classical texts name
              hundreds of points; the Song-dynasty bronze figure marked
              354 of them. Each point has a name, a location, and
              traditional indications for its use.
            </p>
          </FeatureItem>
          <FeatureItem title="☯️ Yin and Yang (阴阳)" theme="gray">
            <p>
              The paired opposites — dark and light, cold and hot, rest
              and activity — whose balance defines health. Diagnosis in
              traditional medicine is often framed as finding which side
              of a pair has tipped out of balance, and treatment as
              restoring it.
            </p>
          </FeatureItem>
          <FeatureItem title="🌱 Five Phases (五行, Wǔxíng)" theme="green">
            <p>
              Wood, fire, earth, metal, and water — five processes that
              generate and restrain one another, each linked to organs,
              seasons, emotions, and flavours. The five phases give
              practitioners a language for how a problem in one part of
              the body may affect another.
            </p>
          </FeatureItem>
          <FeatureItem title="🔍 Diagnosis" theme="yellow">
            <p>
              Before any needle, the practitioner looks, listens, asks,
              and feels — examining the tongue, taking the pulse at both
              wrists, and asking about sleep, digestion, and mood. The
              aim is a pattern diagnosis: not just a disease name, but a
              description of how this person's balance has shifted.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 治疗过程 -->
      <section class="section">
        <h2 class="section-title">How a Treatment Works</h2>
        <p class="section-text">
          A typical acupuncture session is quiet and unhurried. After a
          consultation and diagnosis, the patient lies down, and the
          practitioner inserts very fine, sterile, single-use needles —
          far thinner than the needles used for injections — at a
          selection of points, usually between a handful and about
          twenty. The needles are left in place for roughly twenty to
          forty minutes while the patient rests, and the practitioner may
          gently twirl them or apply a small electric current
          (electroacupuncture). Many patients report a dull ache, a
          tingling, or a sense of heaviness around the needle, a feeling
          traditionally called <em>deqi</em> (得气, "arrival of qi").
        </p>
        <p class="section-text">
          A course of treatment usually means several sessions, often once
          or twice a week. Acupuncture is almost always combined with
          other parts of
          <NuxtLink to="/articles/traditional-chinese-medicine"
            >traditional Chinese medicine</NuxtLink
          >: herbal formulas,
          dietary advice, massage (<em>tuina</em>), and moxibustion —
          the burning of dried mugwort near the skin to warm a point,
          the <em>jiu</em> (灸) in the word <em>zhenjiu</em>. In a Chinese
          hospital today, acupuncture clinics sit alongside departments
          of modern medicine, and patients may receive both.
        </p>
        <p class="section-text">
          How acupuncture might work in modern scientific terms is still
          an open question. Researchers have proposed several mechanisms:
          that needling triggers the release of the body's own
          pain-relieving chemicals such as endorphins, that it influences
          how the nervous system processes pain signals, and that it
          affects blood flow and inflammation around the needle. None of
          these explanations is settled, and the traditional account in
          terms of qi and meridians does not map onto structures
          recognized in modern anatomy. That gap — between a practice
          refined over centuries and a mechanism still being worked out —
          is at the heart of the scientific debate.
        </p>
      </section>

      <!-- 证据 -->
      <section class="section">
        <h2 class="section-title">What the Evidence Says</h2>
        <p class="section-text">
          Acupuncture is one of the most researched complementary
          therapies in the world, with thousands of clinical trials and
          many systematic reviews behind it. The overall picture that
          emerges from those reviews is mixed and modest — real signals
          for some conditions, weak or inconclusive evidence for many
          others, and an ongoing argument about how much of the effect
          comes from the needling itself:
        </p>
        <FeatureGrid>
          <FeatureItem title="🩹 Chronic Pain" theme="green">
            <p>
              The strongest evidence is for some types of chronic pain.
              Large reviews of individual patient data have found
              acupuncture associated with modest pain relief for chronic
              back pain, neck pain, osteoarthritis of the knee, and
              chronic headache and migraine prevention — with benefits
              that appear to persist for months after treatment.
            </p>
          </FeatureItem>
          <FeatureItem title="🤢 Nausea and Vomiting" theme="blue">
            <p>
              Acupuncture at the wrist point known as P6 (Neiguan) has
              evidence supporting it for reducing nausea and vomiting
              after surgery and during chemotherapy. A 1997 consensus
              statement by the US National Institutes of Health noted
              acupuncture may be useful as an adjunct treatment for these
              conditions, as well as for postoperative dental pain.
            </p>
          </FeatureItem>
          <FeatureItem title="📋 Official Recognition" theme="gold">
            <p>
              In 2021, the UK's National Institute for Health and Care
              Excellence (NICE) recommended acupuncture as an option for
              chronic primary pain. In the United States, the Food and
              Drug Administration has regulated acupuncture needles as
              medical devices since 1996, and the World Health
              Organization's ICD-11 classification, adopted in 2019,
              includes a chapter on traditional medicine.
            </p>
          </FeatureItem>
          <FeatureItem title="❓ The Placebo Question" theme="gray">
            <p>
              Much of the debate turns on sham acupuncture — needles
              placed at non-points or that do not pierce the skin. In
              many trials, real acupuncture outperforms no treatment, but
              the gap between real and sham acupuncture is small. Some
              researchers read this as evidence that the specific points
              matter little; others argue that even sham needling is an
              active treatment, and that the trials understate the real
              effect.
            </p>
          </FeatureItem>
          <FeatureItem title="⚠️ Limited Evidence" theme="red">
            <p>
              For many conditions acupuncture is used for — from
              infertility and smoking cessation to depression and weight
              loss — the evidence is limited or inconclusive, often
              because trials have been small or of low quality. Reviews
              commonly conclude that more rigorous, larger studies are
              needed before firm claims can be made.
            </p>
          </FeatureItem>
          <FeatureItem title="🔎 How to Read the Claims" theme="yellow">
            <p>
              A reasonable summary, as of today: acupuncture has
              moderate, replicated evidence for a few specific uses,
              chiefly some chronic pain and nausea; for most other claims
              the evidence is thin. It is best understood as a
              complementary therapy — something used alongside, not
              instead of, conventional care — and anyone considering it
              for a health problem should discuss it with a clinician.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 拔罐 -->
      <section class="section">
        <h2 class="section-title">Cupping: Acupuncture's Close Cousin</h2>
        <p class="section-text">
          Cupping (拔罐, <em>báguàn</em>) is often offered in the same
          clinic as acupuncture, and the two are old companions. In
          cupping, a cup — traditionally bamboo or horn, today usually
          glass or plastic — is placed on the skin and suction is created
          inside it, either with a flame or a pump, pulling the skin
          gently upward. The cups are left in place for several minutes
          or moved across oiled skin in a sliding technique. The practice
          is recorded in China as early as the 4th century, in Ge Hong's
          <em>Handbook of Prescriptions for Emergencies</em>, which
          describes using cupping with animal horns.
        </p>
        <p class="section-text">
          In traditional terms, cupping is said to draw out stagnation
          and restore the flow of qi and blood, and it is used for muscle
          pain, stiffness, and colds. Its most visible effect is the
          round, reddish marks it leaves on the skin, which look dramatic
          but usually fade within days — they became a talking point
          worldwide when Olympic swimmers appeared with them in 2016.
        </p>
        <p class="section-text">
          The evidence for cupping is thinner than for acupuncture. Some
          reviews suggest it may help with musculoskeletal pain, but the
          studies are generally small and of low quality, and reviews
          conclude that firm conclusions are not yet possible. Like
          acupuncture, it should not be presented as a proven treatment:
          the honest description is that it is a long-standing
          traditional practice whose benefits are still being tested.
        </p>
      </section>

      <!-- 安全 -->
      <section class="section">
        <h2 class="section-title">Safety and Finding a Practitioner</h2>
        <p class="section-text">
          When performed by a trained practitioner using sterile,
          single-use needles, acupuncture is generally considered
          low-risk. The most common side effects are minor: slight
          bleeding or bruising where a needle was placed, temporary
          soreness, or light-headedness. Serious adverse events are rare,
          but they do occur — most notably infection from non-sterile
          needles, or, very rarely, injury to the lung when needles are
          placed over the chest. This is why regulation matters: in many
          countries acupuncture is a licensed profession, and
          practitioners are required to train for years and follow strict
          hygiene standards.
        </p>
        <p class="section-text">
          Anyone considering acupuncture should look for a licensed or
          registered practitioner, ask about their training, and make sure
          single-use needles are used. People with bleeding disorders,
          those taking blood-thinning medication, pregnant people, and
          anyone with a pacemaker (relevant for electroacupuncture) should
          discuss it with a clinician first. And the same rule applies as
          with any complementary therapy: it should complement, not
          replace, treatment for a serious condition, and a practitioner
          who promises a cure is one to walk away from.
        </p>
        <p class="section-text">
          Whatever the verdict of future research, acupuncture's place in
          Chinese culture is secure. It is a practice that has carried
          the ideas of qi, balance, and the body's own capacity to heal
          through two millennia of Chinese life — from the stone needles
          of prehistory to the bronze figures of the Song dynasty, to the
          clinics of modern Beijing and the hospitals of the West.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "The superior physician treats disease before it arises."
          <template #author>— Attributed to the Huangdi Neijing (治未病)</template>
        </QuoteBox>
      </section>
    </div>

    <!-- AI 趣味测验 -->
    <CultureQuiz title="Acupuncture Quiz" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  breadcrumb: "Acupuncture",
  title:
    "Acupuncture: History and What the Evidence Says | Chinese Culture Guide",
  description:
    "Acupuncture (针灸) — two thousand years of Chinese needle therapy: its Han-dynasty origins and the Song bronze figure, qi and the meridians, how a treatment works, what modern evidence does and does not show, cupping, and safety.",
  ogTitle: "Acupuncture: History and What the Evidence Says (针灸)",
  ogDescription:
    "From Han-dynasty texts to modern clinical trials: the history, theory, and evidence for acupuncture — plus cupping and safety",
  ogType: "article",
  ogImage: "/assets/images/acupuncture.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Acupuncture",
  twitterDescription:
    "From Han-dynasty texts to modern clinical trials: acupuncture's history, theory, and evidence",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Acupuncture: History and What the Evidence Says (针灸)",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Acupuncture: History and What the Evidence Says",
        description:
          "A guide to acupuncture (针灸): its history from the Huangdi Neijing to the Song-dynasty bronze figure, the theory of qi and meridians, how treatment works, what modern evidence shows, cupping, and safety",
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
