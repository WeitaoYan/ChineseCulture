<template>
  <div class="content-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <h1 class="page-title">The Chinese Lunar Calendar</h1>
      <p class="page-subtitle">Nónglì (农历) - The Lunisolar Cycle of Nature and Culture</p>
      <PageMeta>
        <MetaItem>🌙 Lunisolar System</MetaItem>
        <MetaItem>🐉 12 Zodiac Animals</MetaItem>
        <MetaItem>🌾 24 Solar Terms</MetaItem>
      </PageMeta>
    </div>

    <!-- 主图 -->
    <FeaturedImage
      imageSrc="/assets/images/chinese-lunar-calendar.png"
      altText="Artistic representation of the Chinese Lunar Calendar with glowing circular dial, zodiac signs, and traditional clouds"
    />

    <!-- 内容主体 -->
    <div class="content-body">
      <!-- 简介部分 -->
      <section class="section">
        <h2 class="section-title">Overview</h2>
        <p class="section-text">
          For millennia, time in China was measured not by a simple count of days, but by a delicate choreography of the Sun, the Moon, and the seasons. This system is known as the <strong>Chinese Lunar Calendar</strong> (农历, <em>nónglì</em>, literally "agricultural calendar"). Unlike the Western Gregorian calendar, which tracks only the Sun (solar), or the Islamic calendar, which tracks only the Moon (lunar), the traditional Chinese calendar is a <strong>lunisolar calendar</strong> (阴阳合历, <em>yīnyáng hélì</em>).
        </p>
        <p class="section-text">
          The Lunar Calendar remains the heartbeat of Chinese cultural life today. It determines the dates of traditional festivals such as the Spring Festival (Chinese New Year), the Mid-Autumn Festival, and the Dragon Boat Festival. It also embeds deep philosophical concepts, linking the passage of time to the cycles of Yin and Yang, the Five Elements, and the Chinese Zodiac.
        </p>
      </section>

      <!-- 互动日期转换器 -->
      <section class="section converter-section">
        <h2 class="section-title">Interactive Lunar Date Converter</h2>
        <p class="section-text">
          Choose any date from the solar (Gregorian) calendar to convert it into its traditional Chinese lunar calendar equivalent and reveal its rich astronomical and cultural data.
        </p>

        <div class="converter-widget">
          <div class="input-group">
            <label for="date-picker">Select Solar Date:</label>
            <input
              type="date"
              id="date-picker"
              v-model="selectedDate"
              class="date-input"
              min="1900-01-01"
              max="2100-12-31"
            />
          </div>

          <div class="result-card" v-if="lunarDetails">
            <div class="result-header">
              <div class="lunar-main-date">
                {{ lunarDetails.lunarStr }}
              </div>
              <div class="lunar-zodiac-badge">
                Year of the {{ lunarDetails.zodiacEn }}
              </div>
            </div>

            <div class="result-details">
              <div class="detail-row">
                <span class="detail-label">Gregorian Date:</span>
                <span class="detail-value">{{ lunarDetails.gregorianStr }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Lunar Month & Day:</span>
                <span class="detail-value">{{ lunarDetails.lunarMonthName }} ({{ lunarDetails.lunarMonth }}), Day {{ lunarDetails.lunarDayName }} ({{ lunarDetails.lunarDay }})</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Sexagenary (Ganzhi):</span>
                <span class="detail-value">
                  {{ lunarDetails.ganzhiYear }} Year,
                  {{ lunarDetails.ganzhiMonth }} Month,
                  {{ lunarDetails.ganzhiDay }} Day
                </span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Moon Phase:</span>
                <span class="detail-value">{{ lunarDetails.phase }} ({{ lunarDetails.phaseEn }})</span>
              </div>
              <div class="detail-row" v-if="lunarDetails.term">
                <span class="detail-label">Solar Term (节气):</span>
                <span class="detail-value term-highlight">{{ lunarDetails.term }} ({{ lunarDetails.termEn }})</span>
              </div>
              <div class="detail-row" v-if="lunarDetails.festival">
                <span class="detail-label">Festival (节日):</span>
                <span class="detail-value festival-highlight">{{ lunarDetails.festival }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 历法机制 -->
      <section class="section">
        <h2 class="section-title">The Lunisolar Mechanics</h2>
        <p class="section-text">
          How does the Chinese calendar reconcile the cycles of the Sun and the Moon? The mathematical beauty of the lunisolar calendar lies in its two primary components:
        </p>
        <FeatureGrid>
          <FeatureItem title="The Lunar Cycle (Yin)" theme="blue">
            <p>
              Each calendar month starts on the day of the <strong>new moon</strong> (朔, <em>shuò</em>), when the Moon is invisible. A lunar month is either 29 days (minor month, 小月) or 30 days (major month, 大月), matching the average lunar synodic cycle of 29.53 days. Because of this, the 15th day of each month always features a near-perfect full moon.
            </p>
          </FeatureItem>
          <FeatureItem title="The Solar Cycle (Yang)" theme="gold">
            <p>
              A pure lunar year of 12 months is only 354 days long—about 11 days shorter than the Earth's orbit around the Sun (365.24 days). Without adjustment, the months would drift across the seasons. To prevent this, the calendar inserts a <strong>leap month</strong> (闰月, <em>rùnyuè</em>) approximately every three years (specifically, 7 leap months in 19 years).
            </p>
          </FeatureItem>
        </FeatureGrid>
        <p class="section-text" style="margin-top: 1rem">
          When a leap month is added, the year has 13 months and is called a leap year (闰年). For example, if a leap month follows the 4th month, it is called the "Leap 4th Month" (闰四月). This mechanism ensures that the Lunar New Year always falls between January 21 and February 20, keeping it tied to the onset of spring.
        </p>
      </section>

      <!-- 24 节气 -->
      <section class="section">
        <h2 class="section-title">The 24 Solar Terms (二十四节气)</h2>
        <p class="section-text">
          To guide farmers through the agricultural year, ancient Chinese astronomers divided the Sun's annual path (the ecliptic) into 24 equal segments of 15 degrees. Each segment corresponds to a <strong>Solar Term</strong> (节气, <em>jiéqì</em>), lasting about 15 days.
        </p>
        <p class="section-text">
          These terms represent seasonal shifts, temperature changes, and natural phenomena. Because they track the Earth's orbit relative to the Sun, they align almost perfectly with the Western solar calendar (falling on the same Gregorian dates each year, plus or minus one day).
        </p>
        
        <div class="terms-grid">
          <div class="term-season-group spring-group">
            <h3 class="season-title">Spring (春)</h3>
            <ul class="terms-list">
              <li><strong>立春 (Lìchūn):</strong> Start of Spring (Feb 4–5)</li>
              <li><strong>雨水 (Yǔshuǐ):</strong> Rain Water (Feb 18–20)</li>
              <li><strong>惊蛰 (Jīngzhé):</strong> Awakening of Insects (Mar 5–6)</li>
              <li><strong>春分 (Chūnfēn):</strong> Spring Equinox (Mar 20–21)</li>
              <li><strong>清明 (Qīngmíng):</strong> Pure Brightness (Apr 4–5)</li>
              <li><strong>谷雨 (Gǔyǔ):</strong> Grain Rain (Apr 19–21)</li>
            </ul>
          </div>
          <div class="term-season-group summer-group">
            <h3 class="season-title">Summer (夏)</h3>
            <ul class="terms-list">
              <li><strong>立夏 (Lìxià):</strong> Start of Summer (May 5–6)</li>
              <li><strong>小满 (Xiǎomǎn):</strong> Lesser Fullness (May 20–22)</li>
              <li><strong>芒种 (Mángzhòng):</strong> Grain in Ear (Jun 5–7)</li>
              <li><strong>夏至 (Xiàzhì):</strong> Summer Solstice (Jun 21–22)</li>
              <li><strong>小暑 (Xiǎoshǔ):</strong> Lesser Heat (Jul 6–8)</li>
              <li><strong>大暑 (Dàshǔ):</strong> Greater Heat (Jul 22–24)</li>
            </ul>
          </div>
          <div class="term-season-group autumn-group">
            <h3 class="season-title">Autumn (秋)</h3>
            <ul class="terms-list">
              <li><strong>立秋 (Lìqiū):</strong> Start of Autumn (Aug 7–9)</li>
              <li><strong>处暑 (Chùshǔ):</strong> End of Heat (Aug 22–24)</li>
              <li><strong>白露 (Báilù):</strong> White Dew (Sep 7–9)</li>
              <li><strong>秋分 (Qiūfēn):</strong> Autumn Equinox (Sep 22–24)</li>
              <li><strong>寒露 (Hánlù):</strong> Cold Dew (Oct 8–9)</li>
              <li><strong>霜降 (Shuāngjiàng):</strong> Frost Descent (Oct 23–24)</li>
            </ul>
          </div>
          <div class="term-season-group winter-group">
            <h3 class="season-title">Winter (冬)</h3>
            <ul class="terms-list">
              <li><strong>立冬 (Lìdōng):</strong> Start of Winter (Nov 7–8)</li>
              <li><strong>小雪 (Xiǎoxuě):</strong> Lesser Snow (Nov 22–23)</li>
              <li><strong>大雪 (Dàxuě):</strong> Greater Snow (Dec 6–8)</li>
              <li><strong>冬至 (Dōngzhì):</strong> Winter Solstice (Dec 21–23)</li>
              <li><strong>小寒 (Xiǎohán):</strong> Lesser Cold (Jan 5–6)</li>
              <li><strong>大寒 (Dàhán):</strong> Greater Cold (Jan 20–21)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 干支与生肖 -->
      <section class="section">
        <h2 class="section-title">The Sexagenary Cycle and Zodiac</h2>
        <p class="section-text">
          In the traditional calendar, years are not simply numbered. Instead, they run in a repeating 60-year cycle called the <strong>Sexagenary Cycle</strong> (干支纪年, <em>gānzhī jǐnián</em>). This is formed by combining two sequences:
        </p>
        <div class="info-box stem-branch-box">
          <div class="column">
            <h4>10 Heavenly Stems (天干)</h4>
            <p>Representing the elements and yin-yang polarities:</p>
            <div class="list-tags">
              <span>甲 (Jiǎ)</span> <span>乙 (Yǐ)</span> <span>丙 (Bǐng)</span> <span>丁 (Dīng)</span> <span>戊 (Wù)</span>
              <span>己 (Jǐ)</span> <span>庚 (Gēng)</span> <span>辛 (Xīn)</span> <span>壬 (Rén)</span> <span>癸 (Guǐ)</span>
            </div>
          </div>
          <div class="column">
            <h4>12 Earthly Branches (地支)</h4>
            <p>Corresponding to the 12 Zodiac animals and hours of the day:</p>
            <div class="list-tags">
              <span>子 (Zǐ - Rat)</span> <span>丑 (Chǒu - Ox)</span> <span>寅 (Yín - Tiger)</span>
              <span>卯 (Mǎo - Rabbit)</span> <span>辰 (Chén - Dragon)</span> <span>巳 (Sì - Snake)</span>
              <span>午 (Wǔ - Horse)</span> <span>未 (Wèi - Goat)</span> <span>申 (Shēn - Monkey)</span>
              <span>酉 (Yǒu - Rooster)</span> <span>戌 (Xū - Dog)</span> <span>亥 (Hài - Pig)</span>
            </div>
          </div>
        </div>
        <p class="section-text" style="margin-top: 1rem">
          Combining the Stems and Branches creates pairs (e.g., <em>Jiǎzǐ</em> 甲子, <em>Yǐchǒu</em> 乙丑) up to 60 combinations. The year 2026 is the Year of <em>Bǐngwǔ</em> (丙午), representing the Yin Fire and Earthly Branch of the Horse. Thus, 2026 is the Year of the Fire Horse.
        </p>
      </section>

      <!-- 对比表格 -->
      <section class="section">
        <h2 class="section-title">Comparison: Lunar vs. Solar Calendars</h2>
        <div class="table-container">
          <table class="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Traditional Chinese Lunar (Nónglì)</th>
                <th>Gregorian (Solar / Western)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary Cycle</strong></td>
                <td>Lunisolar (cycles of both Moon & Sun)</td>
                <td>Solar (Earth's orbit around the Sun)</td>
              </tr>
              <tr>
                <td><strong>Month Basis</strong></td>
                <td>New Moon to New Moon (~29.5 days)</td>
                <td>Arbitrary length (28 to 31 days)</td>
              </tr>
              <tr>
                <td><strong>Year Length</strong></td>
                <td>~354 days (normal) or ~384 days (leap)</td>
                <td>365 days (normal) or 366 days (leap)</td>
              </tr>
              <tr>
                <td><strong>Leap Rule</strong></td>
                <td>Leap month (闰月) added ~7 times in 19 years</td>
                <td>Leap day (Feb 29) added every 4 years</td>
              </tr>
              <tr>
                <td><strong>Cultural Use</strong></td>
                <td>Traditional festivals, farming guides, horoscopes</td>
                <td>Civil administration, global business</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 主要节日 -->
      <section class="section">
        <h2 class="section-title">Major Festivals Determined by the Lunar Calendar</h2>
        <p class="section-text">
          Because traditional Chinese festivals are calculated using the Lunar Calendar, their Gregorian dates shift slightly every year. Here are the major celebrations:
        </p>
        <div class="festivals-links">
          <NuxtLink to="/articles/spring-festival" class="festival-card-link">
            <span class="fest-emoji">🧧</span>
            <span class="fest-name">Spring Festival</span>
            <span class="fest-lunar">1st Day of 1st Month</span>
          </NuxtLink>
          <NuxtLink to="/articles/yuanxiao-festival" class="festival-card-link">
            <span class="fest-emoji">🏮</span>
            <span class="fest-name">Lantern Festival</span>
            <span class="fest-lunar">15th Day of 1st Month</span>
          </NuxtLink>
          <NuxtLink to="/articles/longtaitou-festival" class="festival-card-link">
            <span class="fest-emoji">🐉</span>
            <span class="fest-name">Longtaitou Festival</span>
            <span class="fest-lunar">2nd Day of 2nd Month</span>
          </NuxtLink>
          <NuxtLink to="/articles/dragon-boat-festival" class="festival-card-link">
            <span class="fest-emoji">🛶</span>
            <span class="fest-name">Dragon Boat Festival</span>
            <span class="fest-lunar">5th Day of 5th Month</span>
          </NuxtLink>
          <NuxtLink to="/articles/mid-autumn-festival" class="festival-card-link">
            <span class="fest-emoji">🥮</span>
            <span class="fest-name">Mid-Autumn Festival</span>
            <span class="fest-lunar">15th Day of 8th Month</span>
          </NuxtLink>
          <NuxtLink to="/articles/chongyang-festival" class="festival-card-link">
            <span class="fest-emoji">⛰️</span>
            <span class="fest-name">Double Ninth Festival</span>
            <span class="fest-lunar">9th Day of 9th Month</span>
          </NuxtLink>
        </div>
      </section>
    </div>

    <!-- 引用 -->
    <QuoteBox>
      "观乎天文，以察时变；观乎人文，以化成天下 — Observe the patterns of heaven to understand the changes of season; observe the patterns of humanity to transform the world."
      <template #author>— Book of Changes (I Ching / 易经)</template>
    </QuoteBox>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { SolarDay } from 'tyme4ts';

definePageMeta({
  layout: "content",
  title: "The Chinese Lunar Calendar (Nongli) - Chinese Culture Explorer",
  description:
    "Explore the science and culture of the traditional Chinese Lunar Calendar (农历). Convert solar dates, learn about leap months, the 24 solar terms, and the sexagenary cycles.",
});

// 绑定当前公历日期
const selectedDate = ref(new Date().toISOString().split('T')[0]);

// 翻译映射表
const zodiacMap: Record<string, string> = {
  '鼠': 'Rat 🐭',
  '牛': 'Ox 🐂',
  '虎': 'Tiger 🐅',
  '兔': 'Rabbit 🐇',
  '龙': 'Dragon 🐉',
  '蛇': 'Snake 🐍',
  '马': 'Horse 🐎',
  '羊': 'Goat 🐐',
  '猴': 'Monkey 🐒',
  '鸡': 'Rooster 🐓',
  '狗': 'Dog 🐕',
  '猪': 'Pig 🐖'
};

const phaseMap: Record<string, string> = {
  '朔月': 'New Moon 🌑',
  '新月': 'New Moon 🌑',
  '蛾眉新月': 'Waxing Crescent 🌒',
  '蛾眉月': 'Waxing Crescent 🌒',
  '上弦月': 'First Quarter 🌓',
  '盈凸月': 'Waxing Gibbous 🌔',
  '望月': 'Full Moon 🌕',
  '满月': 'Full Moon 🌕',
  '亏凸月': 'Waning Gibbous 🌖',
  '下弦月': 'Third Quarter 🌗',
  '残月': 'Waning Crescent 🌘',
  '晦月': 'Dark Moon 🌑'
};

const termMap: Record<string, string> = {
  '立春': 'Start of Spring (Lìchūn) 🌱',
  '雨水': 'Rain Water (Yǔshuǐ) 🌧️',
  '惊蛰': 'Awakening of Insects (Jīngzhé) ⚡',
  '春分': 'Spring Equinox (Chūnfēn) 昼夜平分',
  '清明': 'Pure Brightness (Qīngmíng) 🌿',
  '谷雨': 'Grain Rain (Gǔyǔ) 🌾',
  '立夏': 'Start of Summer (Lìxià) ☀️',
  '小满': 'Lesser Fullness (Xiǎomǎn) 🌾',
  '芒种': 'Grain in Ear (Mángzhòng) 🌾',
  '夏至': 'Summer Solstice (Xiàzhì) ☀️',
  '小暑': 'Lesser Heat (Xiǎoshǔ) 🌡️',
  '大暑': 'Greater Heat (Dàshǔ) 🔥',
  '立秋': 'Start of Autumn (Lìqiū) 🍂',
  '处暑': 'End of Heat (Chùshǔ) 🍂',
  '白露': 'White Dew (Báilù) 💧',
  '秋分': 'Autumn Equinox (Qiūfēn) 昼夜平分',
  '寒露': 'Cold Dew (Hánlù) 🥶',
  '霜降': 'Frost Descent (Shuāngjiàng) ❄️',
  '立冬': 'Start of Winter (Lìdōng) ❄️',
  '小雪': 'Lesser Snow (Xiǎoxuě) ❄️',
  '大雪': 'Greater Snow (Dàxuě) ❄️',
  '冬至': 'Winter Solstice (Dōngzhì) 饺子/汤圆 🥟',
  '小寒': 'Lesser Cold (Xiǎohán) 🥶',
  '大寒': 'Greater Cold (Dàhán) 🥶'
};

const getFestivalInfo = (lunar: any) => {
  const m = lunar.month;
  const d = lunar.day;
  
  // 检查除夕 (前一天是否是春节)
  try {
    const nextDay = lunar.next(1);
    if (nextDay.month === 1 && nextDay.day === 1) {
      return 'Lunar New Year\'s Eve (Chúxī) 🏮';
    }
  } catch (e) {}

  const festivals: Record<string, string> = {
    '1-1': 'Spring Festival / Chinese New Year (Chūnjié) 🧧',
    '1-15': 'Lantern Festival (Yuánxiāojié) 🏮',
    '2-2': 'Longtaitou Festival / Dragon Raising Head (Lóngtáitóu) 🐉',
    '3-3': 'Shangsi Festival / Women\'s Day (Shàngsìjié) 🌸',
    '5-5': 'Dragon Boat Festival (Duānwǔjié) 🛶',
    '7-7': 'Qixi Festival / Chinese Valentine\'s Day (Qīxījié) 💑',
    '7-15': 'Zhongyuan Festival / Ghost Festival (Zhōngyuánjié) 👻',
    '8-15': 'Mid-Autumn Festival (Zhōngqiūjié) 🥮',
    '9-9': 'Double Ninth Festival (Chóngyángjié) ⛰️',
    '10-15': 'Xiayuan Festival (Xiàyuánjié) 🌊',
    '12-8': 'Laba Festival (Làbājié) 🥣',
    '12-23': 'Xiaonian Festival (Xiǎonián - North) 🧹',
    '12-24': 'Xiaonian Festival (Xiǎonián - South) 🧹',
  };

  return festivals[`${m}-${d}`] || null;
};

// 转换计算逻辑
const lunarDetails = computed(() => {
  if (!selectedDate.value) return null;
  
  try {
    const [y, m, d] = selectedDate.value.split('-').map(Number);
    const solar = SolarDay.fromYmd(y, m, d);
    const lunar = solar.getLunarDay();
    const month = lunar.getLunarMonth();
    const year = month.getLunarYear();
    
    // 干支支干
    const yearSixtyCycle = lunar.getYearSixtyCycle();
    const monthSixtyCycle = lunar.getMonthSixtyCycle();
    const daySixtyCycle = (typeof lunar.getSixtyCycle === 'function') 
      ? lunar.getSixtyCycle() 
      : ((typeof lunar.getSixtyCycleDay === 'function') ? lunar.getSixtyCycleDay() : null);

    // 生肖
    const earthBranch = yearSixtyCycle.getEarthBranch();
    const zodiacIndex = earthBranch.getZodiac().index;
    const zodiacNames = earthBranch.getZodiac().names;
    const zodiacName = zodiacNames[zodiacIndex];
    const zodiacEn = zodiacMap[zodiacName] || zodiacName;

    // 节气
    const term = solar.getTerm();
    const termName = term ? term.toString() : '';
    const termEn = termMap[termName] || '';

    // 月相
    const phaseStr = lunar.getPhase().toString();
    const phaseEn = phaseMap[phaseStr] || phaseStr;

    // 节日 (结合农历和公历/节气)
    let festival = getFestivalInfo(lunar);
    if (!festival && termName === '清明') {
      festival = 'Qingming Festival / Tomb-Sweeping Day (Qīngmíng) 🌿';
    }
    if (!festival && termName === '冬至') {
      festival = 'Winter Solstice / Dongzhi (Dōngzhì) 🥟';
    }

    return {
      gregorianStr: solar.toString(),
      lunarStr: lunar.toString(),
      lunarMonth: lunar.month,
      lunarDay: lunar.day,
      lunarMonthName: month.getName(),
      lunarDayName: lunar.getName(),
      ganzhiYear: yearSixtyCycle.toString(),
      ganzhiMonth: monthSixtyCycle.toString(),
      ganzhiDay: daySixtyCycle ? daySixtyCycle.toString() : 'Unknown',
      zodiacEn,
      phase: phaseStr,
      phaseEn,
      term: termName,
      termEn,
      festival
    };
  } catch (e) {
    console.error('Conversion Error:', e);
    return null;
  }
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
  border-bottom: 3px solid rgba(166, 44, 33, 0.1);
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
  color: #2c3e50;
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
  border-bottom: 2px solid rgba(166, 44, 33, 0.3);
}

.section-text {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.2rem;
  text-align: justify;
}

/* 互动日期转换器样式 */
.converter-section {
  background-color: #FAF6F0;
  border: 1px solid #E6DCD2;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

.converter-widget {
  margin-top: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  max-width: 320px;
}

.input-group label {
  font-weight: 600;
  color: #2c3e50;
}

.date-input {
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #E6DCD2;
  border-radius: 8px;
  outline: none;
  font-family: inherit;
  color: #2c3e50;
  background-color: white;
  transition: border-color 0.3s ease;
}

.date-input:focus {
  border-color: #a62c21;
}

/* 结果卡片 */
.result-card {
  background-color: white;
  border-radius: 12px;
  border: 1px solid #E6DCD2;
  box-shadow: 0 8px 30px rgba(166, 44, 33, 0.04);
  overflow: hidden;
  animation: fadeIn 0.4s ease-out;
}

.result-header {
  background: linear-gradient(135deg, #a62c21, #c0392b);
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.lunar-main-date {
  font-size: 1.6rem;
  font-weight: 700;
}

.lunar-zodiac-badge {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.result-details {
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
}

.detail-row {
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #F5EFEB;
  font-size: 1.05rem;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-label {
  width: 180px;
  font-weight: 600;
  color: #7f8c8d;
}

.detail-value {
  color: #2c3e50;
  font-weight: 500;
  flex: 1;
}

.term-highlight {
  color: #d35400;
  font-weight: 700;
}

.festival-highlight {
  color: #a62c21;
  font-weight: 700;
}

/* 节气网格 */
.terms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.term-season-group {
  background-color: white;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.spring-group { border-top: 4px solid #2ecc71; }
.summer-group { border-top: 4px solid #f1c40f; }
.autumn-group { border-top: 4px solid #e67e22; }
.winter-group { border-top: 4px solid #3498db; }

.season-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.terms-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.terms-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f9f9f9;
  font-size: 0.95rem;
  color: #555;
  display: flex;
  justify-content: space-between;
}

.terms-list li:last-child {
  border-bottom: none;
}

/* 天干地支信息盒 */
.stem-branch-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background-color: #FAF8F5;
  border: 1px solid #EAE0D5;
  padding: 2rem;
  border-radius: 8px;
}

.stem-branch-box h4 {
  font-size: 1.15rem;
  color: #a62c21;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.list-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.list-tags span {
  background-color: white;
  border: 1px solid #E5D5C5;
  color: #5d4037;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
}

/* 对比表格样式 */
.table-container {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #E5D5C5;
  font-size: 1rem;
}

.compare-table th {
  background-color: #F4EDE4;
  color: #2c3e50;
  font-weight: 700;
  padding: 1rem;
  border: 1px solid #E5D5C5;
  text-align: left;
}

.compare-table td {
  padding: 1rem;
  border: 1px solid #E5D5C5;
  color: #555;
}

.compare-table tr:nth-child(even) {
  background-color: #FAF8F5;
}

/* 节日链接卡片 */
.festivals-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.festival-card-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
}

.festival-card-link:hover {
  transform: translateY(-3px);
  border-color: rgba(166, 44, 33, 0.3);
  box-shadow: 0 8px 24px rgba(166, 44, 33, 0.08);
}

.fest-emoji {
  font-size: 2rem;
}

.fest-name {
  font-weight: 700;
  color: #2c3e50;
  font-size: 1.05rem;
  flex: 1;
}

.fest-lunar {
  font-size: 0.85rem;
  color: #888;
  background-color: #FAF4F3;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
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

  .converter-section {
    padding: 1.5rem;
  }

  .detail-row {
    flex-direction: column;
    gap: 0.3rem;
  }

  .detail-label {
    width: auto;
  }

  .result-header {
    padding: 1rem;
  }

  .result-details {
    padding: 1rem;
  }

  .stem-branch-box {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.2rem;
  }
}
</style>
