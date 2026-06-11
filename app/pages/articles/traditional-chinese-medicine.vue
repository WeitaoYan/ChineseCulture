<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Traditional Chinese Medicine</h1>
      <p class="page-subtitle">
        Zhōng Yī — The Ancient Art of Healing in Harmony with Nature
      </p>
      <PageMeta>
        <MetaItem>🌿 Herbal Medicine</MetaItem>
        <MetaItem>⚡ Acupuncture</MetaItem>
        <MetaItem>☯️ Qi & Balance</MetaItem>
        <MetaItem>📜 Huangdi Neijing</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/traditional-chinese-medicine.png"
      altText="Traditional Chinese medicine setup with herbs, acupuncture model, and healing tools"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          <strong>Traditional Chinese Medicine</strong> (中医, Zhōng Yī) is one
          of the world's oldest continuous medical systems, with a recorded
          history spanning over <strong>2,500 years</strong>. Unlike the
          reductionist approach of Western medicine, TCM views the human body
          as a microcosm of the universe — an integrated system where health
          arises from balance, and disease from disharmony.
        </p>
        <p class="section-text">
          Rooted in the same philosophical foundations as Daoism and
          Confucianism, TCM encompasses a rich array of practices: herbal
          medicine, acupuncture, moxibustion, cupping, tui na massage, dietary
          therapy, and mind-body practices like qigong and tai chi. Today, it
          is practiced alongside modern medicine in hospitals across China and
          has gained growing recognition worldwide.
        </p>
      </section>

      <!-- 基本理论 -->
      <section class="section">
        <h2 class="section-title">The Theoretical Foundations</h2>
        <p class="section-text">
          TCM is built upon several interconnected theories that explain how
          the body works, how disease develops, and how to restore health:
        </p>
        <FeatureGrid>
          <FeatureItem title="Qì (气) — Vital Energy" theme="green">
            <p>
              Qi is the fundamental life force that flows through all living
              things. In the body, it circulates through channels called
              <strong>meridians</strong> (经脉). Health depends on abundant,
              smoothly flowing qi. Stagnation or deficiency of qi leads to
              illness.
            </p>
          </FeatureItem>
          <FeatureItem title="Yīn & Yáng (阴阳)" theme="gold">
            <p>
              The body is a dynamic balance of opposing forces. Yin
              represents cooling, nourishing, and structural aspects; Yang
              represents warming, activating, and functional aspects. Disease
              arises when Yin and Yang fall out of balance — too much heat
              (excess Yang) or too much cold (excess Yin).
            </p>
          </FeatureItem>
          <FeatureItem title="Five Elements (五行) Theory" theme="red">
            <p>
              The Five Elements — Wood (木), Fire (火), Earth (土), Metal (金),
              and Water (水) — correspond to specific organs, emotions,
              seasons, tastes, and colors. The generating and controlling
              cycles of the elements explain how different body systems
              interact and influence each other.
            </p>
          </FeatureItem>
          <FeatureItem title="Zàng-Fǔ (脏腑) Organ Theory" theme="blue">
            <p>
              The body's organs are divided into two categories: <em>Zang</em>
              (solid, yin organs: heart, liver, lungs, spleen, kidneys) and
              <em>Fu</em> (hollow, yang organs: stomach, intestines, bladder,
              gallbladder). Each organ has not only physical functions but
              also emotional and spiritual dimensions.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 四大经典 -->
      <section class="section">
        <h2 class="section-title">The Four Great Classics</h2>
        <FeatureGrid>
          <FeatureItem title="Huangdi Neijing (黄帝内经)" theme="gold">
            <p>
              <strong>Inner Canon of the Yellow Emperor</strong> — The
              foundational text of TCM, written around 2,200 years ago.
              Presented as a dialogue between the mythical Yellow Emperor and
              his physician Qi Bo, it covers anatomy, physiology, diagnosis,
              acupuncture, and the philosophical principles of health.
            </p>
          </FeatureItem>
          <FeatureItem title="Shanghan Lun (伤寒论)" theme="red">
            <p>
              <strong>Treatise on Cold Damage</strong> — Written by Zhang
              Zhongjing (张仲景) around 200 CE, this is the first systematic
              clinical manual in Chinese medicine. It classifies diseases into
              six stages and provides 113 herbal formulas still in use today.
            </p>
          </FeatureItem>
          <FeatureItem title="Shennong Bencao Jing (神农本草经)" theme="green">
            <p>
              <strong>Divine Farmer's Materia Medica</strong> — The earliest
              Chinese pharmacopoeia, compiled around 200 CE. It records 365
              medicinal substances classified into three tiers: superior
              (life-enhancing), middle (tonifying), and inferior (curative).
            </p>
          </FeatureItem>
          <FeatureItem title="Bencao Gangmu (本草纲目)" theme="blue">
            <p>
              <strong>Compendium of Materia Medica</strong> — Compiled by Li
              Shizhen (李时珍, 1518–1593), this monumental work catalogs 1,892
              medicinal substances with 11,096 prescriptions. It took 27 years
              to complete and remains the definitive reference of Chinese
              herbal medicine.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 诊断方法 -->
      <section class="section">
        <h2 class="section-title">The Four Diagnostic Methods (四诊)</h2>
        <p class="section-text">
          A TCM practitioner diagnoses illness through four classical methods,
          synthesizing observations to identify the pattern of disharmony:
        </p>
        <FeatureGrid>
          <FeatureItem title="Wàng (望) — Observation" theme="gold">
            <p>
              The doctor observes the patient's complexion, body type, and
              most importantly the <strong>tongue</strong>. Tongue diagnosis
              is a sophisticated art — the tongue's color, shape, coating,
              and moisture reveal the state of internal organs and the
              presence of heat, cold, or dampness.
            </p>
          </FeatureItem>
          <FeatureItem title="Wén (闻) — Listening & Smelling" theme="blue">
            <p>
              The quality of the patient's voice, breathing, and coughing
              provides diagnostic clues. The doctor also notes body odors and
              the smell of the breath, which can indicate internal conditions
              such as digestive stagnation or heat.
            </p>
          </FeatureItem>
          <FeatureItem title="Wèn (问) — Inquiry" theme="red">
            <p>
              A detailed interview covering the chief complaint, medical
              history, appetite, sleep, digestion, body temperature, sweat,
              bowel movements, urination, and for women, menstruation. TCM
              views all aspects of daily life as relevant to health.
            </p>
          </FeatureItem>
          <FeatureItem title="Qiè (切) — Palpation" theme="green">
            <p>
              <strong>Pulse diagnosis</strong> is the most iconic TCM skill.
              The doctor feels the pulse at three positions on each wrist
              with three levels of pressure (superficial, moderate, deep),
              assessing 28 distinct pulse qualities — wiry, slippery,
              thready, floating, sinking, and more.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 主要疗法 -->
      <section class="section">
        <h2 class="section-title">Therapeutic Modalities</h2>
        <FeatureGrid>
          <FeatureItem title="Herbal Medicine (中药)" theme="green">
            <p>
              The cornerstone of TCM treatment. Herbal formulas typically
              combine 4–12 ingredients in precise proportions, each serving a
              specific role: <em>emperor</em> (primary action), <em>minister</em>
              (supporting), <em>assistant</em> (harmonizing), and
              <em>envoy</em> (directing). Common herbs include ginseng (人参),
              astragalus (黄芪), licorice (甘草), and ginger (生姜).
            </p>
          </FeatureItem>
          <FeatureItem title="Acupuncture (针灸)" theme="red">
            <p>
              Thin needles are inserted at specific points along meridians to
              regulate the flow of qi. There are 361 main acupuncture points.
              Modern research shows acupuncture stimulates nerve endings,
              releases endorphins, and affects brain activity. It is
              recognized by the WHO for treating dozens of conditions.
            </p>
          </FeatureItem>
          <FeatureItem title="Moxibustion (艾灸)" theme="gold">
            <p>
              Burning dried mugwort (moxa) near the skin to warm specific
              acupuncture points or meridian areas. Used primarily for
              conditions of cold and deficiency — poor circulation, chronic
              pain, digestive weakness, and to turn breech babies in
              pregnancy.
            </p>
          </FeatureItem>
          <FeatureItem title="Cupping (拔罐)" theme="blue">
            <p>
              Heated glass cups are placed on the skin to create suction,
              increasing blood flow and loosening tight muscles. Made famous
              by Olympic athletes like Michael Phelps who sported circular
              cupping marks during competitions.
            </p>
          </FeatureItem>
          <FeatureItem title="Tuina (推拿)" theme="green">
            <p>
              Therapeutic Chinese massage combining acupressure, joint
              manipulation, and deep tissue work. Unlike Western massage
              which focuses on muscles, Tuina works on the body's meridian
              system to rebalance qi.
            </p>
          </FeatureItem>
          <FeatureItem title="Qigong (气功)" theme="gold">
            <p>
              A mind-body practice combining gentle movement, breath control,
              and meditation to cultivate and balance qi. Tai Chi (太极拳) is
              the most well-known form of qigong, practiced by millions for
              health, longevity, and stress reduction.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 食物与中医 -->
      <section class="section">
        <h2 class="section-title">Food as Medicine: Dietary Therapy</h2>
        <p class="section-text">
          In TCM, food is the first medicine. Every food has a thermal nature
          (hot, warm, neutral, cool, cold) and a flavor (sour, bitter, sweet,
          pungent, salty) that affects the body's balance. A common cold with
          chills calls for warming ginger and scallion soup; a fever calls for
          cooling mint and chrysanthemum tea.
        </p>
        <p class="section-text">
          The principle of "medicine and food share a common origin" (药食同源)
          means many kitchen ingredients — ginger, garlic, cinnamon, goji
          berries, dates, chrysanthemum — are also powerful medicines. A TCM
          dietary recommendation is tailored not just to the disease but to
          the individual's unique constitution.
        </p>
        <FeatureGrid>
          <FeatureItem title="Cooling Foods (寒凉)" theme="blue">
            <p>Watermelon, cucumber, mint, green tea, tofu. For conditions of excess heat — fever, inflammation, thirst.</p>
          </FeatureItem>
          <FeatureItem title="Warming Foods (温热)" theme="red">
            <p>Ginger, cinnamon, lamb, garlic, black pepper. For conditions of cold — chills, poor circulation, weak digestion.</p>
          </FeatureItem>
          <FeatureItem title="Neutral Foods (平性)" theme="green">
            <p>Rice, carrots, potatoes, mushrooms, chicken. Safe for daily consumption by most constitutions.</p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 全球影响 -->
      <section class="section">
        <h2 class="section-title">TCM in the Modern World</h2>
        <p class="section-text">
          Traditional Chinese Medicine has spread far beyond China's borders.
          Acupuncture is now offered in hospitals across Europe and North
          America. Chinese herbal medicine is studied by pharmaceutical
          companies searching for new drugs — the anti-malarial drug
          artemisinin, derived from the herb qinghao (Artemisia annua), won
          Tu Youyou the Nobel Prize in 2015.
        </p>
        <p class="section-text">
          The World Health Organization has recognized TCM as a formal medical
          system in its International Classification of Diseases (ICD-11).
          During the COVID-19 pandemic, TCM herbal formulas were officially
          recommended in China's treatment protocols, with studies suggesting
          they reduced symptom severity and recovery time.
        </p>
        <p class="section-text">
          Yet TCM faces challenges — standardization of herbal products,
          scientific validation of traditional theories, and integration with
          evidence-based medicine. The path forward lies not in replacing
          Western medicine but in finding the wisdom to combine both systems,
          drawing on the strengths of each.
        </p>
      </section>

      <!-- 引用 -->
      <section class="section">
        <QuoteBox>
          "The superior doctor prevents sickness. The mediocre doctor treats
          impending sickness. The inferior doctor treats full-blown sickness."
          <template #author>— Huangdi Neijing (黄帝内经), Inner Canon of the Yellow Emperor</template>
        </QuoteBox>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title:
    "Traditional Chinese Medicine | Zhōng Yī — Chinese Culture Guide",
  description:
    "Discover Traditional Chinese Medicine (中医), the ancient healing art based on Qi, Yin-Yang, and the Five Elements. Explore herbal medicine, acupuncture, cupping, dietary therapy, and the wisdom of the Huangdi Neijing.",
  ogTitle: "Traditional Chinese Medicine — The Ancient Art of Healing",
  ogDescription:
    "Explore the philosophy, diagnostics, and therapies of Traditional Chinese Medicine",
  ogType: "article",
  ogImage: "/assets/images/traditional-chinese-medicine.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Traditional Chinese Medicine",
  twitterDescription:
    "Explore the philosophy, diagnostics, and therapies of Traditional Chinese Medicine",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Traditional Chinese Medicine — The Ancient Art of Healing",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        name: "Traditional Chinese Medicine",
        description:
          "Comprehensive guide to Traditional Chinese Medicine (TCM), covering its philosophical foundations in Qi, Yin-Yang, and Five Elements, diagnostic methods, therapeutic modalities, classic texts, and modern global impact",
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
  border-bottom: 3px solid rgba(46, 125, 50, 0.15);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #2e7d32;
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
  color: #2e7d32;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(46, 125, 50, 0.15);
}

.section-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
}
</style>
