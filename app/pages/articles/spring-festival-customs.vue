<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Spring Festival Customs</h1>
      <p class="page-subtitle">A Complete Guide to Chinese New Year Traditions</p>
      <PageMeta>
        <MetaItem>🧧 Legends &amp; Folklore</MetaItem>
        <MetaItem>🏮 Day-by-Day Guide</MetaItem>
        <MetaItem>🐉 Must-Know Taboos</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/spring-festival-customs.png"
      altText="Vibrant Spring Festival decorations with red lanterns, spring couplets, and paper cuttings celebrating Chinese New Year traditions"
    />

    <!-- 内容主体 -->
    <div class="content-body">

      <!-- 年兽传说 -->
      <section class="section">
        <h2 class="section-title">The Legend of Nian: Why We Celebrate</h2>
        <p class="section-text">
          Long ago, a fearsome beast called <strong>Nian (年兽)</strong> emerged from the mountains every New Year's Eve to terrorize villages, devouring crops, livestock, and even villagers. Nian had a huge horned head, a lion-like mane, sharp fangs, and a massive body that could crush roofs in a single stamp.
        </p>
        <p class="section-text">
          One year, the villagers noticed Nian was terrified of three things: the color red, bright firelight, and loud noises. An old man in tattered robes — actually a celestial being in disguise — demonstrated that by pasting red paper on doors, burning bamboo in a crackling fire, and wearing a red robe, Nian could be driven away permanently. From that night on, the tradition of decorating with red, lighting firecrackers, and staying up all night was born.
        </p>
        <p class="section-text">
          The word <strong>Guo Nian (过年)</strong> — "passing the year" — literally carries this original meaning: surviving the monster's attack and celebrating another year of life. Over centuries, the fear transformed into joy, and Guo Nian became the greatest celebration in Chinese culture.
        </p>
      </section>

      <!-- 春联门神福字 -->
      <section class="section">
        <h2 class="section-title">Spring Couplets, Door Gods &amp; the Upside-Down Fu</h2>
        <p class="section-text">
          The most visible sign that Spring Festival has arrived is the explosion of red decorations adorning every doorway. Each element has its own story and purpose.
        </p>
        <FeatureGrid>
          <FeatureItem title="Spring Couplets — 春联" theme="red">
            <p>
              Two vertical strips of red paper with poetic couplets flank the door, plus a shorter horizontal banner across the top. The right-side strip (from the reader's perspective) is the "upper couplet" (上联), the left is the "lower couplet" (下联). The verses express wishes for prosperity, health, and happiness in the coming year. The tradition traces back to the <strong>Taofu (桃符)</strong> — peachwood plaques inscribed with the names of mythical door guardians — which the ancient Zhou dynasty believed could ward off evil spirits.
            </p>
          </FeatureItem>
          <FeatureItem title="Door Gods — 门神" theme="red">
            <p>
              The fierce-looking images of <strong>Shen Tu (神荼)</strong> and <strong>Yu Lei (郁垒)</strong>, later replaced by Generals <strong>Qin Qiong (秦琼)</strong> and <strong>Yuchi Jingde (尉迟恭)</strong> from the Tang dynasty, are pasted on doors to scare away evil. Legend says Emperor Taizong of Tang was haunted by nightmares of ghosts, so his two most loyal generals stood guard outside his bedchamber — and the emperor slept peacefully. To spare his generals the nightly duty, he had their portraits painted on his doors instead. Thus the Door God tradition was born.
            </p>
          </FeatureItem>
          <FeatureItem title="The Upside-Down Fu — 倒福" theme="red">
            <p>
              The Chinese character <strong>福 (fú)</strong>, meaning "blessing" or "good fortune," is pasted upside-down on doors and windows. Why? Because the word for "upside-down" (<strong>倒, dào</strong>) sounds identical to the word for "arrive" (<strong>到, dào</strong>). So when a visitor sees the upside-down Fu and remarks, "Your Fu is upside-down!" they are actually saying: "<strong>Your good fortune has arrived!</strong>" Visitors often play along, calling out "Fu dao le!" — deliberately ambiguous between "the blessing is upside-down" and "the blessing has arrived."
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 压岁钱 -->
      <section class="section">
        <h2 class="section-title">Hongbao &amp; Yasuinian: The Red Envelope Tradition</h2>
        <p class="section-text">
          The custom of giving red envelopes (红包, hongbao) filled with money is one of the most beloved Spring Festival traditions. But it began not as a gift of wealth, but as a protective charm for children.
        </p>
        <p class="section-text">
          An ancient legend tells of a demon called <strong>Sui (祟)</strong> that would creep into children's bedrooms on New Year's Eve and touch their heads while they slept, causing them to fall ill or develop fevers. To protect their children, parents began wrapping eight copper coins in red paper and placing them under children's pillows. The coins were said to be the transformed form of eight Taoist immortals who had the power to vanquish Sui. When Sui approached, the coins would flash with golden light, scaring the demon away.
        </p>
        <p class="section-text">
          This protective money was called <strong>压祟钱 (yāsuì qián)</strong> — "money to suppress Sui." Over time, the character 祟 (suì, evil spirit) was replaced by the homophone 岁 (suì, year), transforming the name into <strong>压岁钱 (yāsuì qián)</strong> — "New Year money." What was once a protective amulet became a symbol of blessings and good fortune from elders to the young. Today, digital hongbao on WeChat and Alipay have taken this centuries-old tradition into the 21st century, with billions of virtual red envelopes exchanged every Spring Festival.
        </p>
      </section>

      <!-- 年夜饭寓意 -->
      <section class="section">
        <h2 class="section-title">The Reunion Dinner: Every Dish Tells a Story</h2>
        <p class="section-text">
          The New Year's Eve dinner is the most important meal of the year. Families travel across the country to sit together for this feast. But the food on the table is not random — each dish carries a symbolic meaning, and the names often rely on clever homophones for their auspicious power.
        </p>
        <FeatureGrid>
          <FeatureItem title="Fish — 鱼 (yú)" theme="gold">
            <p>
              "May there be surplus year after year" (<strong>年年有余</strong>). The word for fish (鱼, yú) sounds identical to the word for "surplus" (余, yú). A whole fish — head and tail intact — is always served, symbolizing a good beginning and end for the coming year. Crucially, the fish is the last dish served and should be left partially uneaten, "saving" some surplus for the next year.
            </p>
          </FeatureItem>
          <FeatureItem title="Dumplings — 饺子 (jiǎozi)" theme="gold">
            <p>
              Shaped like ancient Chinese silver ingots (元宝, yuanbao), dumplings represent wealth and prosperity. Their name also echoes the turning point of the year, as the character 饺 (jiǎo) relates to 交 (jiāo) — "to meet or exchange" — marking the transition from one year to the next at midnight. Families often hide a coin in one dumpling, and whoever finds it will have especially good luck in the new year.
            </p>
          </FeatureItem>
          <FeatureItem title="Spring Rolls — 春卷 (chūnjuǎn)" theme="gold">
            <p>
              Golden, cylindrical spring rolls resemble gold bars. The "spring" in their name connects them to the Spring Festival itself, symbolizing the arrival of a new season of prosperity. Their crispy golden exterior and rich filling make them a favorite symbol of wealth and renewal.
            </p>
          </FeatureItem>
          <FeatureItem title="Niangao — 年糕 (niángāo)" theme="gold">
            <p>
              "Year cake" made from glutinous rice — sticky, sweet, and layered. The name is a homophone for <strong>"year high" (年高)</strong>, meaning each year will be better than the last: children grow taller, careers reach higher, fortunes rise. The sticky texture also symbolizes family togetherness — once you eat it, you're bound to your family.
            </p>
          </FeatureItem>
          <FeatureItem title="Long Noodles — 长寿面 (chángshòu miàn)" theme="gold">
            <p>
              Extra-long wheat noodles symbolize longevity. The key is that each noodle should be a single, unbroken strand — the longer the better. Biting or cutting the noodles is considered bad luck, as it would "cut short" one's life. To eat them properly, you must slurp the entire strand into your mouth without breaking it.
            </p>
          </FeatureItem>
          <FeatureItem title="Tangyuan — 汤圆 (tāngyuán)" theme="gold">
            <p>
              Sweet glutinous rice balls served in soup, especially popular in southern China. Their round shape symbolizes <strong>family reunion and completeness</strong> (团圆, tuányuán). The name itself contains the word for "round" (圆, yuán), and eating them is an act of affirming that the family circle remains whole and unbroken.
            </p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 守岁 -->
      <section class="section">
        <h2 class="section-title">Shousui: Staying Up for the New Year</h2>
        <p class="section-text">
          On New Year's Eve, families stay awake well past midnight in a tradition called <strong>守岁 (shǒusuì)</strong> — "guarding the year." This custom has two layers of meaning.
        </p>
        <FeatureGrid>
          <FeatureItem title="Protecting Elders" theme="gold">
            <p>
              An old belief held that parents aged one year faster on New Year's Eve. By staying awake, children could "guard" their parents' remaining years and slow the passage of time. This reflects the deep Confucian value of filial piety — showing love and protection for one's parents by sacrificing sleep.
            </p>
          </FeatureItem>
          <FeatureItem title="Welcoming the New" theme="gold">
            <p>
              Staying awake until midnight is also a symbol of vitality and resilience — you are literally "seeing the old year out and the new year in." Those who fall asleep before midnight are said to risk having the Nian beast spirit creep in. Modern families fill the hours with the <strong>Spring Festival Gala (春晚, Chūnwǎn)</strong> — China's most-watched television program, broadcast since 1983.
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text">
          At the stroke of midnight, the sky erupts in fireworks and firecrackers. Families exchange blessings, children receive hongbao, and everyone eats dumplings or tangyuan — sealing the transition from the old year to the new.
        </p>
      </section>

      <!-- 每日年俗 -->
      <section class="section">
        <h2 class="section-title">Day-by-Day: A Guide to the 15 Days</h2>
        <p class="section-text">
          The Spring Festival does not end on New Year's Day. Each of the 15 days from New Year's Eve to the Lantern Festival has its own customs, meanings, and taboos.
        </p>
        <FeatureGrid>
          <FeatureItem title="NYE: Reunion &amp; Vigil" theme="red">
            <p><strong>除夕 (Chúxī)</strong> — The most important night. Family reunion dinner, pasting spring couplets, burning incense for ancestors, and staying up for shousui. Firecrackers at midnight.</p>
          </FeatureItem>
          <FeatureItem title="Day 1: Ancestors &amp; Elders" theme="red">
            <p><strong>大年初一</strong> — Wake up early, offer incense to ancestors, then visit the oldest family members. Children receive hongbao. No sweeping — you'd sweep away good luck. Eat vegetarian to start the year cleanly.</p>
          </FeatureItem>
          <FeatureItem title="Day 2: Married Daughters" theme="red">
            <p><strong>大年初二 (回娘家)</strong> — Married women return to visit their birth families with their husbands and children. This was historically the only day a married woman was expected to visit her own parents' home.</p>
          </FeatureItem>
          <FeatureItem title="Day 3: Rest at Home" theme="red">
            <p><strong>大年初三 (赤狗日)</strong> — Called "Red Dog Day," considered an unlucky day for socializing. It's believed that arguments are more likely, so families stay home, rest, and avoid conflict.</p>
          </FeatureItem>
          <FeatureItem title="Day 4: Welcome the Gods" theme="red">
            <p><strong>大年初四</strong> — The Kitchen God returns from heaven, where he reported on the family's behavior. Offer fresh food and incense to welcome him back. Prepare for the God of Wealth's arrival the next day.</p>
          </FeatureItem>
          <FeatureItem title="Day 5: Po Wu" theme="red">
            <p><strong>破五 (Pò Wǔ)</strong> — "Breaking the Fifth." After days of restrictions, today the taboos are lifted. Sweep the house, throw out accumulated garbage, and welcome the God of Wealth. Eat dumplings shaped like ingots.</p>
          </FeatureItem>
          <FeatureItem title="Day 6-14" theme="red">
            <p><strong>初六至十四</strong> — Day 6: businesses reopen. Day 7: everyone's birthday (人日, everyone turns one year older). Day 8: star-worshiping night. Day 9: offerings to the Jade Emperor. Day 10-14: preparing for Lantern Festival, making lanterns and guess-the-riddle cards.</p>
          </FeatureItem>
          <FeatureItem title="Day 15: Lantern Festival" theme="red">
            <p><strong>元宵节 (Yuánxiāo Jié)</strong> — The grand finale. Light lanterns, solve riddles, watch dragon dances, and eat tangyuan (sweet rice balls). This was also traditionally Chinese Valentine's Day, when young women could leave home to view lanterns unchaperoned.</p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 禁忌 -->
      <section class="section">
        <h2 class="section-title">The Taboos: What NOT to Do During Spring Festival</h2>
        <p class="section-text">
          The first few days of the new year are governed by strict rules of conduct. Breaking these taboos is believed to court bad luck for the entire year ahead.
        </p>
        <FeatureGrid>
          <FeatureItem title="🏠 No Sweeping or Taking Out Trash" theme="gray">
            <p>You might sweep away the family's good fortune. All cleaning must be done <em>before</em> New Year's Day. Trash is kept indoors until Day 5 (Po Wu).</p>
          </FeatureItem>
          <FeatureItem title="🔪 No Knives or Scissors" theme="gray">
            <p>Cutting things with sharp objects on New Year's Day is believed to "cut off" good fortune. Prepare all food in advance and avoid using scissors for cutting paper or thread.</p>
          </FeatureItem>
          <FeatureItem title="💧 No Washing Hair" theme="gray">
            <p>The word for hair (发, fà) is the same character as "to prosper" (发, fā). Washing your hair is thought to wash away your wealth. Similarly, avoid doing laundry on Day 1 and 2 — these are the birthday of the Water God.</p>
          </FeatureItem>
          <FeatureItem title="🚫 No Negative Words" theme="gray">
            <p>Avoid words associated with death, illness, poverty, or anything unlucky. Even saying the number "four" (四, sì — which sounds like death) is avoided. Instead of saying "I'm full" after a meal (吃饱了 — which includes the word for "finished/done"), people say "I've had enough" (吃好了).</p>
          </FeatureItem>
          <FeatureItem title="🚑 No Breaking Things" theme="gray">
            <p>Dropping or breaking a dish, glass, or mirror is a very bad omen. If it happens by accident, immediately say <strong>"岁岁平安" (suì suì píng ān)</strong> — "peace year after year" — which uses the homophone between 碎 (suì, broken) and 岁 (suì, year).</p>
          </FeatureItem>
          <FeatureItem title="💊 No Medicine" theme="gray">
            <p>Taking medicine on New Year's Day is believed to mean you'll be sick all year. Many people with chronic conditions still skip their medication on Day 1, despite health risks — a reminder of how deeply these superstitions run.</p>
          </FeatureItem>
          <FeatureItem title="💸 No Lending or Borrowing" theme="gray">
            <p>Lending money means you'll be lending all year. Borrowing means you'll be in debt all year. Pay off all debts before New Year's Day and avoid any financial transactions during the first few days.</p>
          </FeatureItem>
          <FeatureItem title="😡 No Arguments or Tears" theme="gray">
            <p>Crying or fighting on New Year's Day sets the tone for the entire year. Parents scold their children with extra patience, couples avoid sensitive topics, and everyone makes an extra effort to be cheerful, forgiving, and generous.</p>
          </FeatureItem>
        </FeatureGrid>
      </section>

      <!-- 文化意义 -->
      <section class="section">
        <h2 class="section-title">Why These Customs Matter</h2>
        <p class="section-text">
          At first glance, the Spring Festival's many customs — the monsters, the taboos, the specific foods with their sound-alike names — might seem like a collection of superstitions. But look deeper, and a beautiful pattern emerges.
        </p>
        <p class="section-text">
          Every tradition serves the same purpose: <strong>to begin the year with intention, gratitude, and hope.</strong> The taboos encourage mindfulness and self-restraint. The reunion dinner strengthens family bonds. The hongbao teaches generosity from elders to youth. The ancestors are honored, grudges are released, debts are settled, and homes are cleansed — so that the new year can start on a clean slate.
        </p>
        <p class="section-text">
          The Nian monster was never the real enemy. The real enemy was chaos, disconnection, and bad habits carried from one year into the next. Spring Festival customs were humanity's way of building a cultural firewall — a set of rituals powerful enough to reset the family's emotional and spiritual balance for another year.
        </p>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox gradientType="custom">
      "The Spring Festival is not merely a date on the calendar. It is a ritual of renewal — a time when families gather, debts are settled, old grudges forgiven, and the future welcomed with open arms and red lanterns."
      <template #author>— Traditional Chinese Saying</template>
    </QuoteBox>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title: "Spring Festival Customs - Chinese Culture Explorer",
  description:
    "Explore the rich traditions of Chinese New Year: the legend of Nian, spring couplets, hongbao, reunion dinner symbolism, and the complete day-by-day guide to 15 days of Spring Festival customs.",
  ogTitle: "Spring Festival Customs: A Complete Guide",
  ogDescription:
    "From Nian legend to Lantern Festival — dive deep into the stories behind every Chinese New Year tradition.",
  ogType: "article",
  ogImage: "/assets/images/spring-festival-customs.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Spring Festival Customs: Chinese New Year Traditions",
  twitterDescription:
    "The complete guide to Spring Festival customs: legends, food symbolism, taboos, and daily traditions.",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "preload", as: "image", href: "/assets/images/spring-festival-customs.png" }],
  title: "Spring Festival Customs - Chinese New Year Traditions",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Spring Festival Customs: A Complete Guide to Chinese New Year Traditions",
        description:
          "Explore Chinese New Year traditions from the Legend of Nian to the Lantern Festival — spring couplets, hongbao, food symbolism, daily customs, and taboos.",
        image: "/assets/images/spring-festival-customs.png",
        datePublished: "2026-01-01",
        author: {
          "@type": "Organization",
          name: "Chinese Culture Explorer",
        },
      }),
    },
  ],
});
</script>

<style scoped>
.content-page {
  max-width: 100%;
}

/* 页面头部 */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid rgba(212, 175, 55, 0.1);
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.page-subtitle {
  font-size: 1.4rem;
  color: #d4af37;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

/* 内容主体 */
.content-body {
  line-height: 1.8;
}

/* 章节样式 */
.section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(212, 175, 55, 0.3);
}

.section-text {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.2rem;
  text-align: justify;
}

.info-box {
  background-color: rgba(212, 175, 55, 0.1);
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .section-text {
    font-size: 1rem;
  }
}
</style>
