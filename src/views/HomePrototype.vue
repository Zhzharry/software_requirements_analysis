<script setup>
import { RouterLink } from 'vue-router'
import PlaceholderImage from '../components/PlaceholderImage.vue'
import SectionTitle from '../components/SectionTitle.vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

/** 各学科路线图 / 学科分类入口统一落到 Java 学习路线图页（对标 yun map/22） */
const MAP_JAVA_ROUTE = '/map/22'

/** Banner 左侧「学科分类」：每条拆成可点击学科名，均跳转 MAP_JAVA_ROUTE */
const heroCategoryRows = [
  { labels: ['AI智能应用开发', 'AI大模型开发（Python）'], trailingSlash: true },
  { labels: ['AI鸿蒙开发', 'AI嵌入式+机器人开发'], trailingSlash: true },
  { labels: ['前端开发', 'AI大数据开发', 'AI运维'], trailingSlash: true },
  { labels: ['AI测试', 'AI设计'], trailingSlash: true },
  { labels: ['AI视频创作与直播运营', 'C/C++'], trailingSlash: true },
  { placeholder: true },
]

const heroFloatActions = [
  { label: '全套视频资源 一键下载', tone: 'red' },
  { label: '试听名额 戳我抢占', tone: 'green' },
  { label: '意见建议', tone: 'yellow' },
]

const promoCards = [
  { title: '签到领福利', desc: '用户粉丝福利，等你领取' },
  { title: 'Java学习路线图', desc: '2025硬核来袭' },
  { title: '全日制统招大学', desc: '专注IT数字化应用型人才培养！' },
  { title: '技术社区', desc: '资源分享，技术讨论' },
]

const liveCourses = [
  { title: 'OpenClaw本地部署实战，0基础跑通部署玩转5大实战!', tag: '人工智能开发', learners: '17604人学习', date: '2026.03.10', courseId: '1002' },
  { title: '春晚AI视频特效是怎么做出来的？Seedance 2.0 实操案例', tag: '电商视觉设计', learners: '16626人学习', date: '2026.02.28', courseId: '1002' },
  { title: '手搓Clawdbot远程遥控实战，全球A十大风口技术解读，爬取万条招聘数据揭秘行情', tag: '人工智能开发', learners: '16635人学习', date: '2026.02.02', courseId: '1002' },
  { title: '2026最火Agent skills实战，自动实现金融数据分析+PPT制作', tag: '人工智能开发', learners: '16720人学习', date: '2026.01.27', courseId: '1002' },
  { title: 'ChatGPT 5.2 VS Gemini 3.0，五大案例实测谁是最强大模型', tag: '人工智能开发', learners: '16640人学习', date: '2025.12.17', courseId: '1002' },
  { title: 'AI工作流一键成片 批量制作爆款带货视频', tag: '新媒体+短视频直播运营', learners: '28567人学习', date: '2025.11.13', courseId: '1002' },
  { title: '人工智能项目实战 S15英雄联盟冠军预测', tag: '人工智能开发', learners: '26716人学习', date: '2025.11.07', courseId: '1002' },
  { title: '零基础嵌入式实战 旅游讲解仪项目解析', tag: 'C/C++', learners: '25973人学习', date: '2025.11.06', courseId: '1002' },
]

const freeCourses = [
  { tag: '【JavaEE】', title: 'Java入门到起飞，含斯坦福大学练习题+力扣算法题+大厂java面试题', learners: '1069924人学习', date: '2022.04.27', hot: true, courseId: '1002' },
  { tag: '【HTML&JS+前端】', title: '前端Web开发HTML5+CSS3+移动web视频教程，前端web入门首选白马程序员', learners: '615908人学习', date: '2023.04.04', hot: true, courseId: '1002' },
  { tag: '【JavaEE】', title: '全网首发AI+JavaWeb开发入门，Tlias教学管理系统项目实战全套视频教程', learners: '538591人学习', date: '2024.10.23', hot: true, courseId: '1002' },
  { tag: '【JavaEE】', title: 'Java+AI智能辅助编程，Java零基础入门到大牛一套通关', learners: '309916人学习', date: '2024.07.31', hot: true, courseId: '1002' },
  { tag: '【鸿蒙应用开发】', title: '鸿蒙HarmonyOS4.0应用开发从入门到实战', learners: '130423人学习', date: '2023.11.27', hot: true, courseId: '1002' },
  { tag: '【Python+大数据开发】', title: '大数据入门必会的Hadoop、Hive、云平台实战项目全套教程', learners: '371773人学习', date: '2023.03.14', hot: true, courseId: '1002' },
]

const roadmaps = [
  { title: 'AI智能应用开发', slogan: '世界第一编程语言' },
  { title: 'AI大模型开发（Python）', slogan: 'AI创新未来' },
  { title: 'AI鸿蒙开发', slogan: '鸿蒙生态千帆起，IT编程新风口' },
  { title: 'AI嵌入式+机器人开发', slogan: '机器人芯片时代，软硬件工程师大有可为' },
  { title: '前端开发', slogan: 'IT互联网的半壁江山' },
  { title: 'AI大数据开发', slogan: '万能编程语言，贯穿数据始终' },
  { title: 'AI运维', slogan: '打造互联网时代的IT金领' },
  { title: 'AI测试', slogan: '软件质量的捍卫者' },
  { title: 'AI设计', slogan: '打造全链路设计师' },
  { title: 'AI视频创作与直播运营', slogan: '撬动短视频市场千亿红利' },
]

const tools = [
  {
    name: '通义灵码',
    desc: '通义灵码，是阿里云出品的一款基于通义大模型的智能编码辅助工具，提供行级/函数级实时续写、自然语言生成代码、单元测试生成、代码注释生成、代码解释、研发智能问答、异常报错排查等能力，并针对阿里云 SDK/OpenAPI 的使用场景调优，助力开发者编码。',
    downloads: '367人已下载',
  },
  {
    name: 'NodeJS',
    desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，使得 V8 在非浏览器环境下能够更好地运行。前端工程师使用的诸多框架、库以及工具大多都是基于 Node.js 的，因此要学习和使用这些框架、库以及工具的首要条件就是要先安装 Node.js。',
    downloads: '2698人已下载',
  },
  {
    name: 'Typora——Markdown 编辑器和阅读器',
    desc: 'Typora 是一款支持实时预览的 Markdown 文本编辑器，支持文档目录结构、图片、表格、列表等诸多文档格式，功能强大，上手方便。',
    downloads: '10151人已下载',
  },
  {
    name: 'Google Chrome',
    desc: 'Google Chrome 是由 Google 开发的一款设计简单、高效的 Web 浏览工具。',
    downloads: '2690人已下载',
  },
]

const articles = [
  { day: '11', ym: '2023-05', title: '【产品经理】怎样才能尽快从开发岗转到产品经理岗位？', cat: '产品经理', views: '141418人' },
  { day: '11', ym: '2023-05', title: '【产品经理】怎么画好软件产品原型图？', cat: '产品经理', views: '232903人' },
  { day: '11', ym: '2023-05', title: '【产品经理】如何考核产品经理的绩效？', cat: '产品经理', views: '125568人' },
  { day: '11', ym: '2023-05', title: '【产品经理】产品经理怎样活着走出需求评审会', cat: '产品经理', views: '126017人' },
  { day: '11', ym: '2023-05', title: '【产品经理】产品经理入门书籍有哪些？', cat: '产品经理', views: '138710人' },
]

const reviews = [
  { name: '红豆杉', role: '前端开发', text: '只用了一个月的时间，学习html＋css＋js已经找到了工作，工资虽说不多，但是已经算入行了，改变了我的生活圈子和职业轨迹，坐标深圳，感谢白马程序员，支持白马程序员！' },
  { name: '涩涩狸', role: 'Java工程师', text: '欠白马程序员一套学费钱，家里底子薄，只能自学，看教程，现在有了稳定的工作，也成家了，希望白马程序员越走越远，出新教程的时候别忘了给我来一份。' },
  { name: '墨雨萧尘', role: 'Java工程师', text: '哈哈，我自学的找到工作了，深圳，学的java，感谢白马程序员的老师们，特别是毕老师那忽大忽小的讲课声，多次把我从睡梦中叫醒。' },
  { name: '秋雨寂庭', role: 'Python爱好者', text: '我现在比较高兴的是掌握了一套自学的方法，每次听完Python老师的课程，我就反复的去做去想今天所讲的知识点和项目，按照老师教的方法后，我明显的感觉我的编程概括能力提高了，能让自己去深入的理解一些项目，在自我成长的路上，我最想感谢的就是白马程序员！' },
]
</script>

<template>
  <SiteHeader />

  <main>
    <section class="hero-banner" aria-label="首屏推广">
      <div class="hero-banner__bg">
        <PlaceholderImage ratio="16 / 6" />
      </div>
      <div class="container hero-banner__layout">
        <aside class="hero-banner__side" aria-label="学科分类">
          <h2 class="hero-banner__side-title">
            <span class="hero-banner__side-ico" aria-hidden="true">▦</span>
            学科分类
          </h2>
          <p v-for="(row, i) in heroCategoryRows" :key="i" class="hero-banner__side-line">
            <template v-if="row.placeholder">
              <span class="hero-banner__side-placeholder">请输入文本</span>
            </template>
            <template v-else>
              <template v-for="(label, li) in row.labels" :key="li">
                <RouterLink
                  class="hero-banner__side-link"
                  :to="MAP_JAVA_ROUTE"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{ label }}</RouterLink>
                <span v-if="li < row.labels.length - 1"> / </span>
              </template>
              <span v-if="row.trailingSlash"> /</span>
            </template>
          </p>
        </aside>
        <div class="hero-banner__center">
          <span class="hero-banner__badge hero-banner__badge--red">7天征服AI大模型核心</span>
          <h1 class="hero-banner__headline">神经网络 深度学习</h1>
          <p class="hero-banner__sub">保姆级教学+无痛学习+全程高能+拒绝枯燥</p>
        </div>
        <aside class="hero-banner__float" aria-label="快捷入口">
          <button v-for="(a, i) in heroFloatActions" :key="i" type="button" class="hero-banner__float-item" :data-tone="a.tone">
            <PlaceholderImage ratio="1" class="hero-banner__float-ico" />
            <span class="hero-banner__float-text">{{ a.label }}</span>
          </button>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container promo">
        <article v-for="(c, i) in promoCards" :key="i" class="promo__card">
          <PlaceholderImage ratio="280 / 120" />
          <h3 class="promo__title">{{ c.title }}</h3>
          <p class="promo__desc">{{ c.desc }}</p>
        </article>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <SectionTitle title="近期热门直播公开课" />
        <div class="grid-live">
          <RouterLink
            v-for="(c, i) in liveCourses"
            :key="i"
            class="card-live card-live--link"
            :to="`/course/${c.courseId}`"
          >
            <PlaceholderImage ratio="16 / 9" />
            <h3 class="card-live__title">{{ c.title }}</h3>
            <div class="card-live__meta">
              <span class="card-live__learners">{{ c.learners }}</span>
              <span class="card-live__date">{{ c.date }}</span>
            </div>
            <span class="card-live__tag">{{ c.tag }}</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionTitle title="免费课程推荐" />
        <div class="grid-free">
          <RouterLink
            v-for="(c, i) in freeCourses"
            :key="i"
            class="card-free card-free--link"
            :to="`/course/${c.courseId}`"
          >
            <div class="card-free__thumb-wrap">
              <span v-if="c.hot" class="card-free__badge">热门</span>
              <PlaceholderImage ratio="16 / 9" />
            </div>
            <h3 class="card-free__title"><em class="card-free__tag">{{ c.tag }}</em>{{ c.title }}</h3>
            <div class="card-free__meta">
              <span>{{ c.learners }}</span>
              <span>{{ c.date }}</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <SectionTitle title="各学科学习路线图" />
        <div class="grid-road">
          <RouterLink
            v-for="(r, i) in roadmaps"
            :key="i"
            class="card-road card-road--link"
            :to="MAP_JAVA_ROUTE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlaceholderImage ratio="220 / 120" />
            <h3 class="card-road__title">{{ r.title }}</h3>
            <p class="card-road__slogan">{{ r.slogan }}</p>
            <span class="card-road__link">查看学习路线</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="split__col">
          <SectionTitle title="热门学习工具" />
          <ul class="tool-list">
            <li v-for="(t, i) in tools" :key="i" class="tool-list__item">
              <PlaceholderImage ratio="64 / 64" class="tool-list__icon" />
              <div class="tool-list__text">
                <h4 class="tool-list__name">{{ t.name }}</h4>
                <p class="tool-list__desc">{{ t.desc }}</p>
                <span class="tool-list__dl">{{ t.downloads }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="split__col">
          <SectionTitle title="近期技术文章" />
          <ul class="article-list">
            <li v-for="(a, i) in articles" :key="i" class="article-list__item">
              <div class="article-list__date">
                <span class="article-list__day">{{ a.day }}</span>
                <span class="article-list__ym">{{ a.ym }}</span>
              </div>
              <div class="article-list__body">
                <h4 class="article-list__title">{{ a.title }}</h4>
                <div class="article-list__meta">
                  <span>{{ a.cat }}</span>
                  <span>浏览{{ a.views }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <SectionTitle title="用户评价" :show-more="false" />
        <div class="grid-review">
          <blockquote v-for="(r, i) in reviews" :key="i" class="review">
            <div class="review__head">
              <PlaceholderImage ratio="1" class="review__avatar" />
              <div>
                <strong class="review__name">{{ r.name }}</strong>
                <span class="review__role">{{ r.role }}</span>
              </div>
            </div>
            <p class="review__text">{{ r.text }}</p>
          </blockquote>
        </div>
      </div>
    </section>
  </main>

  <SiteFooter />
</template>

<style scoped>
.hero-banner {
  position: relative;
  color: #eaf3ff;
  overflow: hidden;
}

.hero-banner__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-banner__bg :deep(.ph) {
  position: relative;
  z-index: 0;
  height: 100%;
}

.hero-banner__bg :deep(.ph__img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.55);
}

.hero-banner__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(105deg, rgba(10, 24, 48, 0.92) 0%, rgba(20, 50, 90, 0.55) 45%, rgba(8, 20, 40, 0.35) 100%);
  pointer-events: none;
}

.hero-banner__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(200px, 260px) 1fr auto;
  gap: 20px;
  align-items: stretch;
  min-height: 320px;
  padding: 24px 16px 28px;
}

@media (max-width: 960px) {
  .hero-banner__layout {
    grid-template-columns: 1fr;
  }

  .hero-banner__float {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

.hero-banner__side {
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 16px 14px;
  align-self: start;
}

.hero-banner__side-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  white-space: nowrap;
}

.hero-banner__side-ico {
  display: inline-flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  border-radius: 2px;
  font-size: 12px;
}

.hero-banner__side-line {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 1.65;
  color: #dbe7f7;
}

.hero-banner__side-link {
  color: inherit;
  text-decoration: none;
}

.hero-banner__side-link:hover {
  color: #fff;
  text-decoration: underline;
}

.hero-banner__side-placeholder {
  opacity: 0.65;
}

.hero-banner__center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  padding: 12px 8px;
  text-shadow: 0 0 24px rgba(80, 160, 255, 0.45);
}

.hero-banner__badge {
  display: inline-block;
  align-self: flex-start;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
}

.hero-banner__badge--red {
  background: var(--color-primary);
  color: #fff;
}

.hero-banner__headline {
  margin: 0;
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #fff;
}

.hero-banner__sub {
  display: inline-block;
  align-self: flex-start;
  margin: 0;
  padding: 6px 14px;
  border: 1px solid rgba(120, 190, 255, 0.85);
  border-radius: 999px;
  font-size: 14px;
  color: #e8f4ff;
  background: rgba(0, 40, 80, 0.35);
}

.hero-banner__float {
  display: flex;
  flex-direction: column;
  gap: 0;
  align-self: stretch;
  background: #fff;
  color: #333;
  border-radius: 8px 0 0 8px;
  overflow: hidden;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.12);
  min-width: 168px;
}

.hero-banner__float-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 14px;
  border: none;
  border-bottom: 1px solid #eee;
  background: #fff;
  text-align: left;
  cursor: default;
  font-size: 13px;
  line-height: 1.35;
}

.hero-banner__float-item:last-child {
  border-bottom: none;
}

.hero-banner__float-item[data-tone='red'] {
  color: var(--color-primary);
}

.hero-banner__float-item[data-tone='green'] {
  color: #1a9c5c;
}

.hero-banner__float-item[data-tone='yellow'] {
  color: #c78a00;
}

.hero-banner__float-ico {
  width: 32px;
  flex-shrink: 0;
}

.hero-banner__float-ico :deep(.ph__img) {
  width: 32px;
  height: 32px;
}

.hero-banner__float-text {
  flex: 1;
}

.promo {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media (max-width: 960px) {
  .promo {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .promo {
    grid-template-columns: 1fr;
  }
}

.promo__title {
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;
}

.promo__desc {
  margin-top: 4px;
  font-size: 13px;
  color: var(--color-muted);
}

.grid-live {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.card-live--link {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 8px;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.card-live--link:hover {
  border-color: #eee;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}

@media (max-width: 1024px) {
  .grid-live {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .grid-live {
    grid-template-columns: 1fr;
  }
}

.card-live__title {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-live__meta {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--color-muted);
}

.card-live__learners {
  color: var(--color-primary);
}

.card-live__tag {
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
  color: var(--color-muted);
}

.grid-free {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card-free--link {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--color-border);
  padding: 10px;
  background: #fff;
  transition: box-shadow 0.15s;
}

.card-free--link:hover {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

@media (max-width: 900px) {
  .grid-free {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .grid-free {
    grid-template-columns: 1fr;
  }
}

.card-free__thumb-wrap {
  position: relative;
}

.card-free__badge {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 1;
  background: var(--color-primary);
  color: #fff;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 2px;
}

.card-free__title {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.45;
}

.card-free__tag {
  font-style: normal;
  color: var(--color-primary);
  margin-right: 4px;
}

.card-free__meta {
  margin-top: 8px;
  font-size: 12px;
  color: var(--color-muted);
  display: flex;
  gap: 12px;
}

.grid-road {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

@media (max-width: 1100px) {
  .grid-road {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .grid-road {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card-road {
  border: 1px solid var(--color-border);
  padding: 10px;
  background: #fafafa;
}

.card-road--link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.card-road--link:hover {
  border-color: var(--color-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.card-road__title {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
}

.card-road__slogan {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-muted);
}

.card-road__link {
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
  color: var(--color-primary);
  cursor: default;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: start;
}

@media (max-width: 900px) {
  .split {
    grid-template-columns: 1fr;
  }
}

.tool-list__item {
  display: flex;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px dashed var(--color-border);
}

.tool-list__item:last-child {
  border-bottom: none;
}

.tool-list__icon {
  flex-shrink: 0;
  width: 64px;
}

.tool-list__icon :deep(.ph__img) {
  width: 64px;
  height: 64px;
  object-fit: cover;
}

.tool-list__name {
  font-size: 15px;
  margin-bottom: 4px;
}

.tool-list__desc {
  font-size: 13px;
  color: var(--color-muted);
  margin-bottom: 6px;
}

.tool-list__dl {
  font-size: 12px;
  color: #999;
}

.article-list__item {
  display: flex;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.article-list__date {
  flex-shrink: 0;
  width: 48px;
  text-align: center;
  border: 1px solid var(--color-border);
  padding: 6px 4px;
  background: #fafafa;
}

.article-list__day {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-primary);
}

.article-list__ym {
  font-size: 11px;
  color: var(--color-muted);
}

.article-list__title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
}

.article-list__meta {
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-muted);
  display: flex;
  gap: 12px;
}

.grid-review {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (max-width: 720px) {
  .grid-review {
    grid-template-columns: 1fr;
  }
}

.review {
  margin: 0;
  padding: 16px;
  border: 1px solid var(--color-border);
  background: #fafafa;
  border-radius: 4px;
}

.review__head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.review__avatar {
  width: 48px;
  flex-shrink: 0;
}

.review__avatar :deep(.ph__img) {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.review__name {
  display: block;
  font-size: 15px;
}

.review__role {
  font-size: 12px;
  color: var(--color-muted);
}

.review__text {
  font-size: 13px;
  color: #444;
  line-height: 1.6;
}
</style>
