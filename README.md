# 中华文化传播平台 | Chinese Culture Hub

<div align="center">
  <img src="public/assets/images/forbidden-city.png" alt="故宫 - 中华传统文化瑰宝" width="800" />
</div>

## 📖 项目简介

本项目是一个专注于传播和展示**中华传统文化**的现代化数字平台。基于 [Nuxt 3](https://nuxt.com/) 框架构建，旨在通过结构化、可视化的方式，向全球用户介绍中国悠久的历史文化、哲学思想、传统节日、民俗风情、建筑艺术等丰富内容。

中华文明是世界上唯一没有中断的文明古国，拥有五千多年的悠久历史。本项目致力于将这些珍贵的文化遗产以现代化的数字形式呈现，让世界各地的读者能够更方便地了解和学习中华文化之美。

## 🎯 内容范畴

### 🏛️ 哲学与思想

中国古代哲学是中华文化的根基，深刻影响着中国人的思维方式和价值观念：

- **阴阳五行**（Yin-Yang & Five Elements）：探索宇宙万物变化的基本规律，包括金、木、水、火、土五种元素的相生相克关系
- **易经**（I Ching / Book of Changes）：中国最古老的经典之一，通过六十四卦揭示事物变化的哲理
- **儒家思想**：强调仁、义、礼、智、信，倡导和谐社会理念
- **道家哲学**：追求天人合一，崇尚自然无为

### 🎊 传统节日

中国节日承载着深厚的文化内涵和民族情感，大多数依据农历确定：

- **春节**（Spring Festival）：农历新年，最重要的传统节日，象征万象更新
- **元宵节**（Yuanxiao Festival）：正月十五，赏花灯、吃汤圆，庆祝团圆
- **清明节**（Qingming Festival）：祭奠祖先、踏青郊游的重要时节
- **端午节**（Dragon Boat Festival）：五月初五，赛龙舟、吃粽子，纪念屈原
- **七夕节**（Qixi Festival）：七月初七，中国传统的情人节
- **中元节**（Zhongyuan Festival）：七月十五，祭祀祖先、普度亡魂
- **中秋节**（Mid-Autumn Festival）：八月十五，赏月、吃月饼，寓意团圆美满
- **重阳节**（Chongyang Festival）：九月初九，登高望远、敬老尊贤
- **腊八节**（Laba Festival）：腊月初八，喝腊八粥，祈福迎祥
- **小年**（Xiaonian Festival）：祭灶王爷，扫尘准备过新年
- **冬至**（Winter Solstice）：北半球白昼最短的一天，吃饺子或汤圆

### 🐉 十二生肖与中国文化

**十二生肖**（Chinese Zodiac）是中国传统文化的重要组成部分，每个生肖动物都蕴含着独特的文化寓意：

- 鼠、牛、虎、兔、龙、蛇、马、羊、猴、鸡、狗、猪
- 每个生肖对应不同的性格特征和命运走向
- 与十二地支相结合，形成复杂的纪年体系

### 🍜 饮食文化

中国饮食文化博大精深，地域特色鲜明：

- **饺子**（Dumplings）：北方传统美食，除夕夜必吃，寓意团圆招财
- **腊八粥**（Laba Congee）：腊八节专用八宝粥，富含营养，象征丰收

### 🏯 建筑与文物

中国古代建筑和文物是中华文明的实物见证：

- **故宫**（Forbidden City）：明清两代皇家宫殿，世界最大的木质结构古建筑群
- **长城**（Great Wall）：人类建筑史上最宏伟的防御工程，中华民族的象征
- **兵马俑**（Terracotta Army）：秦始皇陵陪葬品，世界第八大奇迹
- **天坛**（Temple of Heaven）：明清皇帝祭天的场所，建筑造型独特

### 🎨 艺术与文化传承

- **书法**（Chinese Calligraphy）：中国独有的文字艺术，被誉为"无言的诗，无行的舞"
- **茶文化**（Chinese Tea Culture）：中国是茶的故乡，茶道文化源远流长
- **珠算**（Zhusuan / Chinese Abacus）：传统计算工具，世界级非物质文化遗产

### 🌿 节气与自然

- **数九寒天**（Counting the Nines）：从冬至开始每九天为一九，共九个九，共计八十一天，标志着最寒冷的时期

## 🛠️ 技术栈

本项目采用现代前端技术栈构建：

- **框架**: [Nuxt 4.3.0](https://nuxt.com/) - 基于 Vue 3 的全栈框架
- **语言**: [Vue 3.5.27](https://vuejs.org/) + TypeScript
- **路由**: vue-router 4.6.4
- **SEO**: [@nuxtjs/sitemap](https://sitemap.nuxt.dev/) - 自动生成站点地图
- **农历计算**: [tyme4ts](https://github.com/nextapps-de/tyme4ts) - 精确的中国日历转换
- **图像处理**: sharp 0.34.5 - 图片压缩与优化
- **部署**: 支持静态托管和 Node.js 服务端部署

## 🚀 开发指南

### 环境要求

- Node.js 16+
- npm / pnpm / yarn / bun 任意包管理器

### 安装依赖

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 开发服务器

启动本地开发服务器（http://localhost:3000）：

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### 构建与部署

构建生产版本：

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

生成静态站点：

```bash
# npm
npm run generate

# pnpm
pnpm generate

# yarn
yarn generate

# bun
bun run generate
```

预览生产构建：

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## 📁 项目结构

```
chinese-culture/
├── app/
│   ├── components/          # 可复用组件
│   │   ├── FeatureGrid.vue        # 特性网格布局
│   │   ├── FeatureItem.vue        # 特性项目卡片
│   │   ├── FeaturedImage.vue      # 特色图片组件
│   │   ├── FestivalDates.vue      # 节日日期可视化
│   │   ├── MetaItem.vue           # 元数据项
│   │   ├── PageMeta.vue           # 页面元信息
│   │   ├── QuoteBox.vue           # 引用文本框
│   │   ├── TheFooter.vue          # 页脚组件
│   │   └── TheNavbar.vue          # 导航栏
│   ├── layouts/             # 布局模板
│   │   ├── content.vue      # 内容页面布局
│   │   └── home.vue         # 首页布局
│   ├── pages/               # 路由页面
│   │   ├── index.vue        # 首页
│   │   ├── about.vue        # 关于页面
│   │   └── articles/        # 文化主题文章
│   │       ├── spring-festival.vue
│   │       ├── mid-autumn-festival.vue
│   │       └── ...          # 更多文化主题页面
│   └── app.vue              # 根组件
├── public/                  # 静态资源
│   ├── images/              # 图片资源
│   └── ...
├── scripts/                 # 构建脚本
│   ├── generate-sitemap-data.mjs
│   └── resize-image.sh
├── nuxt.config.ts           # Nuxt 配置
├── package.json             # 项目依赖
└── tsconfig.json            # TypeScript 配置
```

## 🎨 设计规范

### 色彩系统

- **中国红** (#a62c21)：代表吉祥、喜庆，用于标题和重点元素
- **金色** (#d4af37)：象征尊贵、富裕，用于装饰线条和高光
- **白色背景**：内容卡片使用纯白背景配浅灰阴影

### 响应式设计

- 桌面端（≥768px）：多列网格布局
- 移动端（<768px）：自动切换为单列堆叠布局
- 所有交互元素支持悬停动效反馈

## 📄 SEO 优化

本项目针对搜索引擎进行深度优化：

- 所有页面配置完整的 Open Graph 和 Twitter Card 标签
- 使用 JSON-LD 结构化数据（Schema.org）
- 动态生成的 sitemap.xml
- 语义化 HTML5 标签
- 图片懒加载与 alt 属性

## 🤝 贡献指南

欢迎对中华文化感兴趣的朋友们贡献内容！您可以通过以下方式参与：

1. **内容补充**：新增文化主题页面，丰富内容库
2. **翻译工作**：将页面翻译成其他语言，服务国际受众
3. **代码优化**：改进性能、修复 bug、优化体验
4. **设计建议**：提升视觉效果和用户体验

## 📚 参考资料

- [Nuxt 官方文档](https://nuxt.com/docs)
- [Vue 3 官方文档](https://vuejs.org/)
- [中国大百科全书（网络版）](http://www.zgbk.com/)
- [中国文化信息网](http://www.culturl.com/)

## 📜 许可证

本项目采用开源许可证，详见 [LICENSE](./LICENSE) 文件。

---

<div align="center">

**用现代科技传递中华文化的永恒魅力** 🏮

[报告问题](issues) · [请求功能](issues) · [查看示例](https://chinese-culture.example.com)

</div>

```

```
