<template>
  <div class="articles-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">Cultural Articles</h1>
      <p class="page-subtitle">
        Explore in-depth articles about Chinese traditions, history, and culture
      </p>
    </div>

    <!-- 文章列表 -->
    <div class="articles-grid">
      <article
        v-for="article in filteredArticles"
        :key="article.id"
        class="article-card"
        itemscope
        itemtype="https://schema.org/Article"
      >
        <div class="article-image" itemprop="image">
          <NuxtLink :to="`/articles/${article.slug}`" itemprop="url">
            <img
              :src="article.image"
              :alt="article.title"
              itemprop="name"
              loading="lazy"
            />
          </NuxtLink>
          <div class="article-tags" role="navigation" aria-label="Article tags">
            <NuxtLink
              v-for="tag in article.tags"
              :key="tag"
              :to="`/articles?tag=${tag}`"
              class="tag-link"
            >
              <span class="tag-badge">
                {{ tag }}
              </span>
            </NuxtLink>
          </div>
        </div>
        <div class="article-content">
          <h3 class="article-title" itemprop="headline">
            <NuxtLink :to="`/articles/${article.slug}`">
              {{ article.title }}
            </NuxtLink>
          </h3>
          <p class="article-excerpt" itemprop="description">
            {{ article.excerpt }}
          </p>
          <div class="article-meta">
            <span class="article-readtime" itemprop="timeRequired">
              {{ article.readtime }} min read
            </span>
          </div>
        </div>
      </article>
    </div>

    <!-- 分页 -->
    <div class="pagination">
      <button
        class="page-btn prev-btn"
        :disabled="currentPage <= 1"
        @click="goToPage(currentPage - 1)"
      >
        ← Previous
      </button>

      <div class="page-numbers">
        <button
          v-for="page in totalPages"
          :key="page"
          class="page-num"
          :class="{ active: page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
      </div>

      <button
        class="page-btn next-btn"
        :disabled="currentPage >= totalPages"
        @click="goToPage(currentPage + 1)"
      >
        Next →
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "content",
  title: "Chinese Cultural Articles | Explore Traditions & History",
  description:
    "Discover authentic Chinese cultural articles covering traditions, festivals, history, and heritage. Learn about Forbidden City, Spring Festival, dumplings, and more.",
  ogTitle: "Chinese Cultural Articles",
  ogDescription:
    "Explore authentic Chinese cultural articles covering traditions, festivals, history, and heritage",
  ogType: "website",
  ogImage: "/assets/images/building.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Chinese Cultural Articles",
  twitterDescription:
    "Explore authentic Chinese cultural articles covering traditions, festivals, history, and heritage",
  robots: "index,follow",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "preload", as: "image", href: "/assets/images/building.png" }],
  title: "Chinese Cultural Articles",
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Chinese Cultural Articles",
        description:
          "Collection of articles about Chinese traditions, history, and cultural heritage",
      }),
    },
  ],
});

// 文章每页数量
const PER_PAGE = 9;

// 从路由参数获取当前选中的标签和页码
const route = useRoute();
const currentTag = computed(() => route.query.tag || "all");
const currentPage = computed(() => {
  const p = parseInt(route.query.page);
  return p > 0 ? p : 1;
});

// 文章数据
const articles = [
  {
    id: 1,
    title: "Forbidden City",
    slug: "forbidden-city",
    tags: ["history", "architecture"],
    readtime: 8,
    image: "/assets/images/forbidden-city.png",
    excerpt:
      "Explore the fascinating history of China's imperial palace, from its construction in the 15th century to its role as a UNESCO World Heritage Site today.",
  },
  {
    id: 2,
    title: "Laba Festival",
    slug: "laba-festival",
    tags: ["traditions", "cuisine", "festival"],
    readtime: 7,
    image: "/assets/images/laba-congee.png",
    excerpt:
      "Discover the Laba Festival, a traditional Chinese celebration of porridge, gratitude, and community spirit.",
  },
  {
    id: 3,
    title: "Counting the Nines",
    slug: "counting-the-nines",
    tags: ["traditions", "philosophy", "festival"],
    readtime: 7,
    image: "/assets/images/counting-the-nines.png",
    excerpt:
      "Counting the Nines is an ancient Chinese tradition of tracking winter's progress by counting 81 days in nine sets of nine, beginning from the Winter Solstice.",
  },
  {
    id: 4,
    title: "Spring Festival",
    slug: "spring-festival",
    tags: ["traditions", "festival", "family"],
    readtime: 9,
    image: "/assets/images/spring-festival-reunion-dinner.png",
    excerpt:
      "Discover the Spring Festival, China's most important celebration of family, tradition, and renewal.",
  },
  {
    id: 5,
    title: "Dumplings",
    slug: "dumplings",
    tags: ["traditions", "cuisine", "family"],
    readtime: 8,
    image: "/assets/images/jiaozi.png",
    excerpt:
      "Discover the cultural significance and tradition of Chinese dumplings, a symbol of warmth, reunion, and heritage.",
  },
  {
    id: 6,
    title: "How to Make Laba Congee",
    slug: "laba-congee",
    tags: ["cuisine", "recipe", "traditions"],
    readtime: 6,
    image: "/assets/images/congee.png",
    excerpt:
      "Complete guide to making traditional Laba Congee, a nutritious and symbolic Chinese porridge eaten during the Laba Festival.",
  },
  {
    id: 7,
    title: "The Terracotta Army",
    slug: "terracotta-army",
    tags: ["history", "archaeology", "culture"],
    readtime: 8,
    image: "/assets/images/terracotta-army.png",
    excerpt:
      "Discover the Terracotta Army, an awe-inspiring collection of thousands of life-sized sculptures built to protect China's First Emperor in the afterlife.",
  },
  {
    id: 8,
    title: "The Great Wall",
    slug: "great-wall",
    tags: ["history", "architecture", "culture"],
    readtime: 7,
    image: "/assets/images/greatwall.png",
    excerpt:
      "Explore the Great Wall of China, the world's most iconic symbol of defense and perseverance spanning over 2,000 years of history.",
  },
  {
    id: 9,
    title: "Xiaonian Festival",
    slug: "xiaonian-festival",
    tags: ["traditions", "festival", "family"],
    readtime: 7,
    image: "/assets/images/xiaonian.png",
    excerpt:
      "Discover the Xiaonian Festival, the 'Little New Year' that marks the beginning of Spring Festival preparations in China.",
  },
  {
    id: 10,
    title: "Po Wu: Breaking the Fifth",
    slug: "po-wu",
    tags: ["traditions", "festival", "wealth"],
    readtime: 7,
    image: "/assets/images/po-wu.png",
    excerpt:
      "Discover Po Wu, the fifth day of Chinese New Year that marks the transition from celebration to prosperity through symbolic cleansing and welcoming wealth.",
  },
  {
    id: 11,
    title: "Yuanxiao Festival: Sweet Lantern Celebration",
    slug: "yuanxiao-festival",
    tags: ["traditions", "festival", "food"],
    readtime: 7,
    image: "/assets/images/yuanxiao.png",
    excerpt:
      "Discover the Yuanxiao Festival, China's sweet lantern celebration marking the end of Chinese New Year with glowing lanterns, sweet treats, and romantic traditions.",
  },
  {
    id: 12,
    title: "Longtaitou Festival",
    slug: "longtaitou-festival",
    tags: ["traditions", "festival", "agriculture"],
    readtime: 8,
    image: "/assets/images/longtaitou.png",
    excerpt:
      "Discover the Longtaitou Festival, when the dragon raises its head to bring spring rains and mark the beginning of the farming year in China.",
  },
  {
    id: 13,
    title: "Qingming Festival",
    slug: "qingming-festival",
    tags: ["traditions", "festival", "family"],
    readtime: 10,
    image: "/assets/images/qingming-festival.png",
    excerpt:
      "Discover Qingming Festival (Tomb-Sweeping Day), a meaningful Chinese tradition of honoring ancestors while celebrating spring with family outings, kite flying, and traditional foods.",
  },
  {
    id: 14,
    title: "Dragon Boat Festival",
    slug: "dragon-boat-festival",
    tags: ["traditions", "festival", "family"],
    readtime: 10,
    image: "/assets/images/dragon-boat-festival.png",
    excerpt:
      "Discover Dragon Boat Festival (Duanwu Festival), an exciting Chinese celebration featuring dragon boat races, zongzi dumplings, and ancient traditions honoring the poet Qu Yuan.",
  },
  {
    id: 15,
    title: "Five Elements",
    slug: "five-elements",
    tags: ["philosophy", "traditions", "culture"],
    readtime: 8,
    image: "/assets/images/five-elements.png",
    excerpt:
      "Discover the Five Elements (Wuxing), the fundamental principles of Chinese philosophy covering Wood, Fire, Earth, Metal, and Water, and their generating and controlling cycles.",
  },
  {
    id: 16,
    title: "Mid-Autumn Festival",
    slug: "mid-autumn-festival",
    tags: ["traditions", "festival", "family"],
    readtime: 10,
    image: "/assets/images/mid-autumn.jpg",
    excerpt:
      "Discover the Mid-Autumn Festival, a traditional Chinese celebration of the full moon, mooncakes, and family reunion.",
  },
  {
    id: 17,
    title: "Chinese Zodiac",
    slug: "chinese-zodiac",
    tags: ["traditions", "culture", "philosophy"],
    readtime: 10,
    image: "/assets/images/chinese-zodiac.jpg",
    excerpt:
      "Discover the Chinese Zodiac, a 12-year cycle of animal signs that influence personality, relationships, and cultural traditions in Chinese culture.",
  },
  {
    id: 18,
    title: "Qixi Festival",
    slug: "qixi-festival",
    tags: ["traditions", "festival", "romance"],
    readtime: 8,
    image: "/assets/images/qixi.jpg",
    excerpt:
      "Discover Qixi Festival, Chinese Valentine's Day celebrating the legendary love of Cowherd and Weaver Girl.",
  },
  {
    id: 19,
    title: "Double Ninth Festival",
    slug: "chongyang-festival",
    tags: ["traditions", "festival", "family"],
    readtime: 9,
    image: "/assets/images/chongyang-festival.jpg",
    excerpt:
      "Discover Double Ninth Festival (Chongyang Jie), a traditional Chinese celebration of honoring elders, climbing mountains, and viewing chrysanthemums on the 9th day of the 9th lunar month.",
  },
  {
    id: 20,
    title: "Shangsi Festival",
    slug: "shangsi-festival",
    tags: ["traditions", "festival", "spring"],
    readtime: 8,
    image: "/assets/images/shangsi-festival.jpg",
    excerpt:
      "Discover Shangsi Festival (上巳节), an ancient Chinese spring celebration of purification rituals, flower viewing, and floating wine cups on the 3rd day of the 3rd lunar month.",
  },
  {
    id: 21,
    title: "Chinese Calligraphy",
    slug: "chinese-calligraphy",
    tags: ["traditions", "culture", "art"],
    readtime: 10,
    image: "/assets/images/chinese-calligraphy.jpg",
    excerpt:
      "Discover the art of Chinese calligraphy (书法), a 3,000-year tradition of brush and ink. Explore the Five Major Script Styles, the Four Treasures of the Study, and legendary masters like Wang Xizhi.",
  },
  {
    id: 22,
    title: "Chinese Tea Culture",
    slug: "chinese-tea-culture",
    tags: ["traditions", "culture", "cuisine"],
    readtime: 10,
    image: "/assets/images/chinese-tea-culture.jpg",
    excerpt:
      "Discover Chinese tea culture (茶文化), a 5,000-year tradition of tea, ceremony, and philosophy. Explore the Six Types of Chinese Tea, the art of Gongfu Cha, and the legendary Tea Horse Road.",
  },
  {
    id: 23,
    title: "Yin & Yang · I Ching",
    slug: "yin-yang-i-ching",
    tags: ["philosophy", "culture", "traditions"],
    readtime: 12,
    image: "/assets/images/yin-yang-i-ching.jpg",
    excerpt:
      "Discover Yin-Yang philosophy and the I Ching (Book of Changes), the ancient Chinese systems of cosmology, divination, and wisdom that have shaped Eastern thought for over 3,000 years.",
  },
  {
    id: 24,
    title: "Temple of Heaven",
    slug: "temple-of-heaven",
    tags: ["history", "architecture", "culture"],
    readtime: 10,
    image: "/assets/images/temple-of-heaven.png",
    excerpt:
      "Explore the Temple of Heaven (Tiantan), the magnificent Ming Dynasty ceremonial complex where emperors prayed for good harvests and communicated with Heaven.",
  },
  {
    id: 25,
    title: "Winter Solstice",
    slug: "winter-solstice",
    tags: ["traditions", "festival", "cuisine"],
    readtime: 10,
    image: "/assets/images/winter-solstice.png",
    excerpt:
      "Discover the Winter Solstice (冬至), a major Chinese festival celebrating the shortest day of the year with dumplings, tangyuan, family gatherings, and ancient traditions.",
  },
  {
    id: 26,
    title: "Chinese Zhusuan Culture",
    slug: "zhusuan-culture",
    tags: ["culture", "traditions", "philosophy"],
    readtime: 10,
    image: "/assets/images/zhusuan-culture.png",
    excerpt:
      "Discover Chinese zhusuan (珠算), the ancient art of abacus calculation. Explore 1,800 years of suanpan history, mental abacus techniques, and its UNESCO-recognized cultural heritage.",
  },
  {
    id: 27,
    title: "Zhongyuan Festival",
    slug: "zhongyuan-festival",
    tags: ["traditions", "festival", "culture"],
    readtime: 12,
    image: "/assets/images/zhongyuan-festival.png",
    excerpt:
      "Discover Zhongyuan Festival (Ghost Festival), the traditional Chinese observance of the 7th lunar month when the gates of the underworld open and spirits roam the earth.",
  },
  {
    id: 28,
    title: "The Chinese Lunar Calendar",
    slug: "chinese-lunar-calendar",
    tags: ["traditions", "philosophy", "culture"],
    readtime: 10,
    image: "/assets/images/chinese-lunar-calendar.png",
    excerpt:
      "Explore the science and beauty of the traditional Chinese Lunar Calendar (nongli), its lunisolar mechanics, leap months, the 24 solar terms, and the sexagenary cycle.",
  },
  {
    id: 29,
    title: "Spring Festival Customs",
    slug: "spring-festival-customs",
    tags: ["traditions", "festival", "family", "culture"],
    readtime: 15,
    image: "/assets/images/spring-festival-customs.png",
    excerpt:
      "A complete guide to Chinese New Year traditions — from the Legend of Nian and the story behind upside-down Fu, to the symbolism of every dish at the reunion dinner, and a day-by-day guide through all 15 days of celebration.",
  },
  {
    id: 30,
    title: "Confucius & Confucianism",
    slug: "confucius",
    tags: ["philosophy", "culture", "history"],
    readtime: 12,
    image: "/assets/images/confucius.png",
    excerpt:
      "Discover Confucius (孔子) and Confucianism (儒家), the philosophy that shaped Chinese civilization for 2,500 years. Explore his life, the Five Constant Virtues, the Four Books & Five Classics, and his enduring global legacy.",
  },
  {
    id: 31,
    title: "The Silk Road",
    slug: "silk-road",
    tags: ["history", "culture", "architecture"],
    readtime: 12,
    image: "/assets/images/silk-road.png",
    excerpt:
      "Discover the Silk Road (丝绸之路), the 1,500-year-old network of trade routes connecting China with the world. Explore Zhang Qian's journey, Dunhuang's Mogao Caves, and the exchange of goods and ideas that shaped civilizations.",
  },
  {
    id: 32,
    title: "Peking Opera",
    slug: "peking-opera",
    tags: ["culture", "art", "traditions"],
    readtime: 12,
    image: "/assets/images/peking-opera.png",
    excerpt:
      "Discover Peking Opera (京剧), China's most celebrated performing art. Explore the Four Roles, face painting symbolism, the Four Skills of performance, legendary repertoire, and the legacy of Mei Lanfang.",
  },
  {
    id: 33,
    title: "Traditional Chinese Medicine",
    slug: "traditional-chinese-medicine",
    tags: ["philosophy", "culture", "traditions"],
    readtime: 12,
    image: "/assets/images/traditional-chinese-medicine.png",
    excerpt:
      "Discover Traditional Chinese Medicine (中医), the ancient healing art based on Qi, Yin-Yang, and the Five Elements. Explore herbal medicine, acupuncture, cupping, dietary therapy, and the wisdom of the Huangdi Neijing.",
  },
  {
    id: 34,
    title: "Chinese Mythology",
    slug: "chinese-mythology",
    tags: ["culture", "traditions", "history"],
    readtime: 12,
    image: "/assets/images/chinese-mythology.png",
    excerpt:
      "Discover Chinese Mythology (中国神话) — from Pangu's creation and Nüwa mending the sky to the Monkey King, the Eight Immortals, dragons, and the Four Symbols. Explore the stories that shaped Chinese civilization.",
  },
  {
    id: 35,
    title: "The Mogao Caves of Dunhuang",
    slug: "mogao-caves",
    tags: ["history", "art", "culture"],
    readtime: 10,
    image: "/assets/images/mogao-caves.png",
    excerpt:
      "Discover the Mogao Caves (莫高窟), the world's greatest treasure of Buddhist art on the Silk Road. Explore 1,000 years of cave temples, the hidden Library Cave, flying apsaras murals, and Digital Dunhuang preservation.",
  },
  {
    id: 36,
    title: "Mooncake",
    slug: "mooncake",
    tags: ["cuisine", "culture", "traditions"],
    readtime: 12,
    image: "/assets/images/mooncake.png",
    excerpt:
      "Discover the mooncake (月饼), the iconic pastry of China's Mid-Autumn Festival. Explore its history, regional styles, gifting traditions, and a step-by-step recipe to make it at home.",
  },
  {
    id: 37,
    title: "The Eight Immortals Cross the Sea",
    slug: "eight-immortals-crossing-the-sea",
    tags: ["culture", "traditions", "philosophy"],
    readtime: 10,
    image: "/assets/images/eight-immortals-crossing.png",
    excerpt:
      "Discover the legend of the Eight Immortals crossing the sea (八仙过海) — eight Daoist immortals, eight magic treasures, and the living Chinese idiom that celebrates everyone showing their own special power.",
  },
  {
    id: 38,
    title: "The Four Great Inventions",
    slug: "four-great-inventions",
    tags: ["history", "culture", "traditions"],
    readtime: 10,
    image: "/assets/images/four-great-inventions.png",
    excerpt:
      "Paper, printing, the compass, and gunpowder — four technologies first developed in China, from Cai Lun's paper in 105 CE to Bi Sheng's movable type in the 1040s, that reshaped writing, learning, navigation, and warfare around the world.",
  },
  {
    id: 39,
    title: "The Twenty-Four Solar Terms",
    slug: "twenty-four-solar-terms",
    tags: ["traditions", "philosophy", "culture"],
    readtime: 10,
    image: "/assets/images/twenty-four-solar-terms.png",
    excerpt:
      "The Twenty-Four Solar Terms divide the sun's yearly path into 24 fifteen-degree steps — from Beginning of Spring to Major Cold — guiding Chinese farming, festivals, and food for over two thousand years, and inscribed by UNESCO as Intangible Cultural Heritage in 2016.",
  },
  {
    id: 40,
    title: "Taoism & Laozi",
    slug: "taoism-laozi",
    tags: ["philosophy", "culture", "history"],
    readtime: 12,
    image: "/assets/images/taoism-laozi.png",
    excerpt:
      "Taoism's heart is the Dao — the Way — as taught by Laozi in the Tao Te Ching's 81 chapters: live by wu wei (effortless action), keep yin and yang in balance, and follow the grain of things rather than fighting it.",
  },
  {
    id: 41,
    title: "Buddhism in China",
    slug: "buddhism-in-china",
    tags: ["philosophy", "culture", "history"],
    readtime: 12,
    image: "/assets/images/buddhism-in-china.png",
    excerpt:
      "Buddhism arrived from India via the Silk Road in the Han dynasty (1st century CE) and, through translators like Kumarajiva and Xuanzang and the Tang-dynasty golden age, became unmistakably Chinese — producing Chan (Zen) and Pure Land, the cave temples of Mogao, Longmen, and Yungang.",
  },
  {
    id: 42,
    title: "Chinese Painting",
    slug: "chinese-painting",
    tags: ["culture", "art", "traditions"],
    readtime: 10,
    image: "/assets/images/chinese-painting.png",
    excerpt:
      "Discover Chinese painting (中国画), the art of ink and brush from Han tomb silk to Song masters — shan shui landscapes, literati painting, and the bond between painting, calligraphy, and poetry.",
  },
  {
    id: 43,
    title: "Chinese Porcelain",
    slug: "chinese-porcelain",
    tags: ["culture", "art", "history"],
    readtime: 10,
    image: "/assets/images/chinese-porcelain.png",
    excerpt:
      "Discover Chinese porcelain (瓷器), from Eastern Han celadon and the Song dynasty's Five Great Kilns to blue-and-white ware and Jingdezhen, the porcelain capital whose wares travelled the world.",
  },
  {
    id: 44,
    title: "Tang Poetry",
    slug: "tang-poetry",
    tags: ["culture", "history", "traditions"],
    readtime: 10,
    image: "/assets/images/tang-poetry.png",
    excerpt:
      "Tang poetry (唐诗) is the golden age of Chinese verse in the Tang dynasty (618–907), when the civil service exam, a cosmopolitan Chang'an, and poets like Li Bai, Du Fu, Wang Wei, and Bai Juyi produced nearly 49,000 surviving poems — still memorized by Chinese schoolchildren today.",
  },
  {
    id: 45,
    title: "Hanfu: Traditional Chinese Clothing",
    slug: "hanfu",
    tags: ["culture", "traditions", "art"],
    readtime: 10,
    image: "/assets/images/hanfu.png",
    excerpt:
      "Hanfu (汉服) is the traditional dress of the Han Chinese — crossed collar, wide sleeves, sash, and layered robes — evolving through the Han, Tang, Song, and Ming dynasties, fading under Qing rule, and now worn again by young people in a modern revival.",
  },
  {
    id: 46,
    title: "The Four Great Classical Novels",
    slug: "four-great-classical-novels",
    tags: ["culture", "history", "traditions"],
    readtime: 12,
    image: "/assets/images/four-great-classical-novels.png",
    excerpt:
      "Four masterpieces that shaped Chinese storytelling — Romance of the Three Kingdoms, Water Margin, Journey to the West, and Dream of the Red Chamber — from the Peach Garden oath and the 108 outlaws of Liangshan Marsh to the Monkey King's pilgrimage and the Jia family's Grand View Garden.",
  },
  {
    id: 47,
    title: "Song Ci Poetry",
    slug: "song-ci-poetry",
    tags: ["culture", "history", "traditions"],
    readtime: 10,
    image: "/assets/images/song-ci-poetry.png",
    excerpt:
      "Song ci (宋词) — lyrics written to be sung in the Song dynasty (960–1279): how ci broke away from Tang shi with uneven lines fitted to tune patterns, and how Su Shi, Li Qingzhao, Xin Qiji, and Liu Yong made it the poetry of moonlight, longing, and patriotism.",
  },
  {
    id: 48,
    title: "Tai Chi",
    slug: "tai-chi",
    tags: ["philosophy", "culture", "traditions"],
    readtime: 10,
    image: "/assets/images/tai-chi.png",
    excerpt:
      "Tai chi (太极) is China's slow, flowing martial art and moving meditation — born in 17th-century Chenjiagou, shaped into five family styles, and practiced by millions today as a UNESCO-recognized tradition of balance, relaxation, and yin-yang in motion.",
  },
  {
    id: 49,
    title: "Chinese Kung Fu",
    slug: "kung-fu",
    tags: ["culture", "traditions", "history"],
    readtime: 10,
    image: "/assets/images/kung-fu.png",
    excerpt:
      "Chinese kung fu (功夫) is skill earned through long, patient effort — from the warrior monks of Shaolin Temple and the northern and southern styles to modern wushu and Bruce Lee, who carried it from Hong Kong cinema to the whole world in the 1970s.",
  },
  {
    id: 50,
    title: "Chinese Silk",
    slug: "chinese-silk",
    tags: ["culture", "art", "history"],
    readtime: 10,
    image: "/assets/images/chinese-silk.png",
    excerpt:
      "Discover Chinese silk (丝绸), five thousand years of sericulture from the legend of Leizu to the Four Great Embroideries — the thread that dressed emperors, carried paintings, and gave the Silk Road its name.",
  },
  {
    id: 51,
    title: "Qipao: The Elegant Cheongsam",
    slug: "qipao",
    tags: ["culture", "traditions", "art"],
    readtime: 10,
    image: "/assets/images/qipao.png",
    excerpt:
      "The qipao (旗袍), the elegant cheongsam — from Manchu banner robes to the fitted dress of 1920s–1930s Shanghai, with its mandarin collar, frog buttons, and side slits, and how it differs from hanfu.",
  },
  {
    id: 52,
    title: "The Eight Great Cuisines of China",
    slug: "eight-great-cuisines",
    tags: ["cuisine", "culture", "traditions"],
    readtime: 10,
    image: "/assets/images/eight-great-cuisines.png",
    excerpt:
      "The Eight Great Cuisines of China (八大菜系) — Shandong, Sichuan, Cantonese, Jiangsu, Fujian, Hunan, Anhui and Zhejiang — eight regional schools, each shaped by its own landscape and climate, from Sichuan's numbing mala to Cantonese freshness.",
  },
  {
    id: 53,
    title: "The Summer Palace",
    slug: "summer-palace",
    tags: ["history", "architecture", "culture"],
    readtime: 10,
    image: "/assets/images/summer-palace.png",
    excerpt:
      "The Summer Palace (颐和园) in Beijing — Qianlong's Qingyi Garden, destroyed in 1860 and rebuilt by Empress Dowager Cixi, home to Kunming Lake, Longevity Hill, the 728-metre Long Corridor and the Marble Boat, a UNESCO World Heritage Site since 1998.",
  },
  {
    id: 54,
    title: "Hotpot: China's Communal Feast — History, Broths and How to Eat It",
    slug: "chinese-hotpot",
    tags: ["cuisine", "culture", "traditions"],
    readtime: 10,
    image: "/assets/images/chinese-hotpot.png",
    excerpt:
      "Hotpot (火锅) — China's communal feast: from nomad legends and Qing-dynasty copper pots to Chongqing's fiery mala and the modern yuanyang pot, with broths, dipping sauces and how to eat it.",
  },
  {
    id: 55,
    title: "Chinese Food: A Beginner's Guide to Dishes, Flavours and Dining Etiquette",
    slug: "chinese-food",
    tags: ["cuisine", "culture", "traditions"],
    readtime: 10,
    image: "/assets/images/chinese-food.png",
    excerpt:
      "Chinese food — a beginner's guide to the country's most famous dishes, how a meal is structured, the five flavours, table etiquette and how to order, from Peking duck to mapo tofu.",
  },
  {
    id: 56,
    title: "Mahjong: How to Play China's 19th-Century Tile Game",
    slug: "mahjong",
    tags: ["culture", "traditions", "art"],
    readtime: 10,
    image: "/assets/images/mahjong.png",
    excerpt:
      "Mahjong (麻将) — how to play China's 19th-century tile game: the tiles, the rules, the winning hands, and how a parlour pastime became a worldwide social game.",
  },
  {
    id: 57,
    title: "Acupuncture: History, How It Works and What the Evidence Says",
    slug: "acupuncture",
    tags: ["culture", "traditions", "history"],
    readtime: 10,
    image: "/assets/images/acupuncture.png",
    excerpt:
      "Acupuncture (针灸) — from stone needles and the Huangdi Neijing to UNESCO heritage status: how it works, what the evidence actually says, and where cupping fits in.",
  },
  {
    id: 58,
    title: "Bubble Tea (Boba): From 1980s Taiwan to a Global Craze",
    slug: "bubble-tea-boba",
    tags: ["cuisine", "culture", "traditions"],
    readtime: 10,
    image: "/assets/images/bubble-tea-boba.png",
    excerpt:
      "Bubble tea (珍珠奶茶, boba) — born in 1980s Taiwan, now the world's most-searched tea: the invention debate, the pearls, the flavours, and how a night-market drink went global.",
  },
  {
    id: 59,
    title: "Bao Buns: The Pillowy Steamed Buns Taking Over the World",
    slug: "bao-buns",
    tags: ["cuisine", "culture", "traditions"],
    readtime: 10,
    image: "/assets/images/bao-buns.png",
    excerpt:
      "Bao buns (包子) — the pillowy steamed buns taking over the world: leavened dough, shengjianbao, char siu bao and gua bao, and how they differ from dumplings.",
  },
  {
    id: 60,
    title: "Feng Shui: The Ancient Art of Arranging Space for Luck and Balance",
    slug: "feng-shui",
    tags: ["culture", "traditions", "philosophy"],
    readtime: 10,
    image: "/assets/images/feng-shui.png",
    excerpt:
      "Feng shui (风水) — the ancient art of arranging space for luck and balance: qi, the luopan compass, the Bagua, and how the old rules meet modern homes and skylines.",
  },
  {
    id: 61,
    title: "Dim Sum and Yum Cha: China's Bite-Sized Breakfast Tradition",
    slug: "dim-sum-yum-cha",
    tags: ["cuisine", "culture", "traditions"],
    readtime: 10,
    image: "/assets/images/dim-sum-yum-cha.png",
    excerpt:
      "Dim sum and yum cha (饮茶) — China's bite-sized breakfast tradition: har gow, siu mai and cheung fun, the teahouse ritual, and the finger-tapping thank-you.",
  },
  {
    id: 62,
    title: "The Best Places to Visit in China: A First-Timer's Guide for 2027",
    slug: "best-places-to-visit-in-china",
    tags: ["travel", "culture", "history"],
    readtime: 10,
    image: "/assets/images/best-places-to-visit-in-china.png",
    excerpt:
      "The best places to visit in China — a first-timer's guide for 2027: Shanghai, Zhangjiajie, Chengdu, Guilin and Chongqing, with the classic icons linked, not repeated, and how to string them into one trip.",
  },
  {
    id: 63,
    title:
      "Do You Need a Visa for China in 2027? Visa-Free Entry and the 240-Hour Transit Rule Explained",
    slug: "china-visa-free-entry-guide",
    tags: ["travel", "culture", "traditions"],
    readtime: 10,
    image: "/assets/images/china-visa-free-entry-guide.png",
    excerpt:
      "Do you need a visa for China in 2027? The 30-day visa-free entry for 48 countries runs to 31 December 2026 with no extension announced as of 6 November 2026 — plus the 240-hour transit rule, who needs a visa, and where to check the official list.",
  },
  {
    id: 64,
    title: "When Is the Best Time to Visit China? A Month-by-Month Guide",
    slug: "best-time-to-visit-china",
    tags: ["travel", "culture", "traditions"],
    readtime: 10,
    image: "/assets/images/best-time-to-visit-china.png",
    excerpt:
      "When is the best time to visit China? A month-by-month guide: spring and autumn are best, the crowds to avoid, and what each season is good for, from Harbin's ice to Yunnan's spring.",
  },
  {
    id: 65,
    title:
      "China in 10 Days: The First-Timer's Itinerary (Beijing, Xi'an, Chengdu and Shanghai)",
    slug: "china-itinerary-10-days",
    tags: ["travel", "culture", "history"],
    readtime: 10,
    image: "/assets/images/china-itinerary-10-days.png",
    excerpt:
      "China in 10 days — the first-timer's itinerary: Beijing, Xi'an, Chengdu and Shanghai, with day-by-day plans, what to budget, and the classic stops linked, not repeated.",
  },
  {
    id: 66,
    title:
      "Shanghai Travel Guide: The Bund, the Old City and Modern China in 3 Days",
    slug: "shanghai-travel-guide",
    tags: ["travel", "culture", "architecture"],
    readtime: 10,
    image: "/assets/images/shanghai-travel-guide.png",
    excerpt:
      "Shanghai in 3 days — the Bund, the Old City and Yu Garden, the French Concession and Lujiazui's towers: China's biggest city, where old and new stand across the river from each other.",
  },
  {
    id: 67,
    title:
      "Zhangjiajie: The Real Avatar Mountains — Wulingyuan, Tianmen and the Glass Bridge",
    slug: "zhangjiajie-avatar-mountains",
    tags: ["travel", "culture", "history"],
    readtime: 10,
    image: "/assets/images/zhangjiajie-avatar-mountains.png",
    excerpt:
      "Zhangjiajie — the real Avatar Mountains: Wulingyuan's quartzite pillars, Tianmen Mountain and the glass bridge, three separate places, three tickets, and how to tell them apart.",
  },
  {
    id: 68,
    title: "Chengdu: Giant Pandas, Teahouses and China's Slowest Big City",
    slug: "chengdu-pandas-teahouses",
    tags: ["travel", "culture", "traditions"],
    readtime: 10,
    image: "/assets/images/chengdu-pandas-teahouses.png",
    excerpt:
      "Chengdu — giant pandas, teahouses and China's slowest big city: the panda base at dawn, gaiwan tea in People's Park, and day trips to Leshan, Dujiangyan and Sanxingdui.",
  },
  {
    id: 69,
    title:
      "Chongqing: China's 8D City — Hongyadong, the Monorail Through a Building and Hotpot at Its Source",
    slug: "chongqing-8d-city-guide",
    tags: ["travel", "culture", "architecture"],
    readtime: 10,
    image: "/assets/images/chongqing-8d-city-guide.png",
    excerpt:
      "Chongqing — China's 8D city: Hongyadong glowing over the river, the monorail through a building, mountain streets stacked in layers, and hotpot where it was born.",
  },
];

// 过滤文章 + 分页逻辑 (按 id 倒序，最新在前)
const filteredByTag = computed(() => {
  const filtered =
    currentTag.value === "all"
      ? articles
      : articles.filter((article) => article.tags.includes(currentTag.value));
  return filtered.slice().reverse();
});

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredByTag.value.length / PER_PAGE)),
);

const filteredArticles = computed(() => {
  // 如果当前页码超出了筛选后的总页数，自动回到第1页
  if (currentPage.value > totalPages.value) {
    navigateTo({
      query: { ...route.query, page: undefined },
      replace: true,
    });
    return filteredByTag.value.slice(0, PER_PAGE);
  }
  const start = (currentPage.value - 1) * PER_PAGE;
  return filteredByTag.value.slice(start, start + PER_PAGE);
});

// 翻页时重置到顶部
function goToPage(page) {
  if (page < 1 || page > totalPages.value) return;
  navigateTo({
    query: { ...route.query, page: page > 1 ? page : undefined },
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
.articles-page {
  max-width: 100%;
}

/* 页面头部 */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid rgba(166, 44, 33, 0.1);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-weight: 400;
}

/* 文章列表 */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.article-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.article-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .article-image img {
  transform: scale(1.05);
}

.article-tags {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.tag-badge {
  background-color: #a62c21;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.article-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.article-title a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;
}

.article-title a:hover {
  color: #a62c21;
}

.article-excerpt {
  color: #666;
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  flex: 1;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #888;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.article-readtime {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 分页 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.page-btn {
  padding: 0.8rem 1.5rem;
  border: 2px solid rgba(166, 44, 33, 0.2);
  background-color: white;
  border-radius: 8px;
  color: #555;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.page-btn:hover:not(:disabled) {
  border-color: #a62c21;
  color: #a62c21;
  transform: translateY(-2px);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 页码按钮 */
.page-numbers {
  display: flex;
  gap: 0.4rem;
}

.page-num {
  width: 2.6rem;
  height: 2.6rem;
  border: 2px solid rgba(166, 44, 33, 0.15);
  background-color: white;
  border-radius: 8px;
  color: #555;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-num:hover {
  border-color: #a62c21;
  color: #a62c21;
  transform: translateY(-2px);
}

.page-num.active {
  background-color: #a62c21;
  border-color: #a62c21;
  color: white;
  box-shadow: 0 2px 8px rgba(166, 44, 33, 0.3);
}

.tag-link {
  text-decoration: none;
  display: inline-block;
}

.tag-link:hover {
  transform: translateY(-1px);
}
/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .articles-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .article-content {
    padding: 1.2rem;
  }

  .article-title {
    font-size: 1.2rem;
  }

  .tag-badge {
    font-size: 0.6rem;
  }

  /* 分页移动端适配 */
  .pagination {
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .page-btn {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  .page-num {
    width: 2.2rem;
    height: 2.2rem;
    font-size: 0.85rem;
  }
}
</style>
