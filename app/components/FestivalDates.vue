<template>
  <div class="festival-dates-widget">
    <h3 class="widget-title">Festival Dates</h3>
    <p class="widget-subtitle">Recent and upcoming {{ festivalName }} dates</p>

    <div class="dates-grid">
      <div
        v-for="dateInfo in festivalDates"
        :key="dateInfo.year"
        :class="['date-item', { 'is-current': dateInfo.isCurrent }]"
      >
        <div class="date">
          {{ dateInfo.date }}
        </div>
        <div class="lunar-date">{{ dateInfo.lunarDate }}</div>
        <div class="days-until" v-if="dateInfo.daysUntil !== null">
          <span :class="dateInfo.daysUntil < 0 ? 'past' : 'future'">
            {{
              dateInfo.daysUntil === 0
                ? "Today!"
                : dateInfo.daysUntil > 0
                  ? `${dateInfo.daysUntil} days to go`
                  : `${Math.abs(dateInfo.daysUntil)} days ago`
            }}
          </span>
        </div>
      </div>
    </div>

    <div class="explanation">
      <p>
        Laba Festival is celebrated on the 8th day of the 12th lunar month each
        year.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LunarDay } from "tyme4ts";

// 定义节日名称和农历月份日期
const props = defineProps({
  festivalName: {
    type: String,
    default: "Laba Festival",
  },
  lunarMonth: {
    type: Number,
    default: 12,
  },
  lunarDay: {
    type: Number,
    default: 8,
  },
});

// 获取当前年份及前后几年的节日数据
const currentYear = new Date().getFullYear();
const festivalDates = computed(() => {
  const years = [];
  for (let i = currentYear - 1; i <= currentYear + 3; i++) {
    const gregorianDate = calculateGregorianDate(i);
    const date = new Date(
      gregorianDate.getYear(),
      gregorianDate.getMonth() - 1,
      gregorianDate.getDay(),
    );
    const isCurrent = i === currentYear;
    const now = new Date();
    const daysUntil = Math.ceil(
      (date.getMilliseconds() - now.getMilliseconds()) / (1000 * 60 * 60 * 24),
    );

    // 生成模拟的农历日期字符串
    const lunarDate = `Lunar ${props.lunarMonth}/${props.lunarDay}`;

    years.push({
      year: i,
      date: formatGregorianDate(date),
      lunarDate,
      isCurrent,
      daysUntil: i >= currentYear ? daysUntil : null,
    });
  }

  return years;
});

// 格式化公历日期
const formatGregorianDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// 计算公历日期
const calculateGregorianDate = (year: number) => {
  const lunarDay: LunarDay = LunarDay.fromYmd(
    year,
    props.lunarMonth,
    props.lunarDay,
  );
  return lunarDay.getSolarDay();
};
</script>

<style scoped>
.festival-dates-widget {
  background: linear-gradient(135deg, #fefefe, #f8f5f0);
  border: 1px solid #eae0d5;
  border-radius: 12px;
  padding: 1.8rem;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.widget-title {
  font-size: 1.4rem;
  color: #a62c21;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.widget-subtitle {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.dates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.date-item {
  background-color: white;
  border: 1px solid #e0d4ca;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.date-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.date-item.is-current {
  border-color: #a62c21;
  background-color: rgba(166, 44, 33, 0.05);
}

.year {
  font-weight: 700;
  color: #2c3e50;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.date {
  font-weight: 600;
  color: #a62c21;
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
}

.lunar-date {
  color: #666;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.days-until {
  font-size: 0.8rem;
  font-weight: 500;
}

.days-until .future {
  color: #27ae60;
}

.days-until .past {
  color: #e74c3c;
}

.explanation {
  border-top: 1px dashed #d6d0ca;
  padding-top: 1.2rem;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
}

@media (max-width: 768px) {
  .festival-dates-widget {
    padding: 1.2rem;
  }

  .dates-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.7rem;
  }

  .date-item {
    padding: 0.8rem;
  }
}
</style>
