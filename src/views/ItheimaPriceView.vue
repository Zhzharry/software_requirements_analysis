<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import ItheimaWwwPageChrome from '../components/ItheimaWwwPageChrome.vue'
import PageResourceImg from '../components/PageResourceImg.vue'
import { PAGE_DIR, pageImage } from '../utils/pageResource.js'

const subjectTabs = [
  { id: 'aiapp', label: 'AI智能应用开发' },
  { id: 'llm', label: 'AI大模型开发' },
  { id: 'hm', label: 'AI鸿蒙开发' },
  { id: 'emb', label: 'AI嵌入式+机器人' },
  { id: 'ops', label: 'AI运维' },
  { id: 'test', label: 'AI测试' },
  { id: 'design', label: 'AI设计' },
  { id: 'video', label: 'AI视频创作运营' },
]

const activeTab = ref('aiapp')

const trialCardCopy = {
  aiapp: {
    title: 'AI智能应用开发',
    sub: '企业用人需求旺盛，Java 生态与 AI 应用结合培养新质人才。',
    hours: '9天',
    points: '83+项',
    quiz: '1次',
    desc: '课程将传统面授与 AI 项目实战结合，帮助学员建立可落地的工程思维与工具链。',
    trialTitle: '入门试学班',
    oldPrice: '598',
    newPrice: '28',
    bonus: '报名即可获赠 私人定制学习计划+职业发展规划',
  },
  llm: {
    title: 'AI大模型开发（Python）',
    sub: '大模型应用与 Agent 开发方向，对标一线岗位能力模型。',
    hours: '试学阶段',
    points: '60+项',
    quiz: '1次',
    desc: '覆盖 Python 基础、模型调用、RAG 与微调入门等企业常见技术栈。',
    trialTitle: '入门试学班',
    oldPrice: '598',
    newPrice: '28',
    bonus: '报名即可获赠 学习路线规划与能力测评报告。',
  },
  default: {
    title: '白马精品学科',
    sub: '多学科全国开班，具体课纲与周期以各校区公布为准。',
    hours: '详询校区',
    points: '详询',
    quiz: '—',
    desc: '标准化授课流程与 AI 教辅结合，支持试听与到校参观。',
    trialTitle: '入门试学班',
    oldPrice: '598',
    newPrice: '28',
    bonus: '报名可享学前规划与占座优先通道（原型示意）。',
  },
}

const card = computed(() => {
  const id = activeTab.value
  if (id === 'aiapp') return trialCardCopy.aiapp
  if (id === 'llm') return trialCardCopy.llm
  return { ...trialCardCopy.default, title: subjectTabs.find((t) => t.id === id)?.label ?? trialCardCopy.default.title }
})

/** 参考原站价格模块整理，便于表格展示 */
const priceSections = [
  {
    subject: 'AI智能应用开发',
    rows: [
      { classType: '入门试学班', city: '所有城市', tuition: '598元', promo: '6月1日前报名享首次就读优惠价28元' },
      { classType: '高手班', city: '北京、上海、广州、深圳', tuition: '24980元', promo: '济南，合肥首期优惠1000元' },
      { classType: '高手班', city: '其他城市', tuition: '23980元', promo: '—' },
    ],
  },
  {
    subject: 'AI大模型开发（Python）',
    rows: [
      { classType: '入门试学班', city: '所有城市', tuition: '598元', promo: '6月1日前报名享首次就读优惠价28元' },
      { classType: '高手班', city: '北京、上海、广州深圳、杭州', tuition: '27980元', promo: '限时优惠1000元；研究生学历学费补贴1000元；985或211高校本科学历学费补贴600元' },
      { classType: '高手班', city: '武汉、合肥、成都南京、郑州', tuition: '26980元', promo: '—' },
      { classType: '极速就业班', city: '西安、济南', tuition: '21980元', promo: '—' },
    ],
  },
  {
    subject: 'AI鸿蒙开发',
    rows: [
      { classType: '入门试学班', city: '所有城市', tuition: '598元', promo: '6月1日前报名享首次就读优惠价28元' },
      { classType: '就业班', city: '所有城市', tuition: '18980元', promo: '—' },
    ],
  },
  {
    subject: 'AI嵌入式+机器人开发',
    rows: [
      { classType: '入门试学班', city: '所有城市', tuition: '598元', promo: '6月1日前报名享首次就读优惠价28元；进班送价值98元限量大礼包（开发板+元器件+电烙铁等）' },
      { classType: '就业班', city: '北京、上海、深圳、武汉', tuition: '23980元', promo: '武汉校区限时优惠1000元' },
    ],
  },
  {
    subject: 'AI运维',
    rows: [
      { classType: '入门试学班', city: '所有城市', tuition: '598元', promo: '6月1日前报名享首次就读优惠价28元' },
      { classType: '就业班', city: '北京、上海、广州、杭州', tuition: '20980元', promo: '限时优惠1000元；成都校区首期优惠1000元' },
      { classType: '就业班', city: '郑州、武汉、成都', tuition: '19980元', promo: '—' },
    ],
  },
]

const faqChunks = [
  ['报名学习注意事项？', '对学历有要求吗？', '课程培训费用是多少？', '可以申请免费试听课吗？'],
  ['什么是基础班、就业班？', '零基础可以学好吗？', '毕业找不到工作怎么办？', '课程需要多久能学完？'],
  ['二三线城市就业怎么样？', '上课时间怎么安排？', '可以去哪些企业就职？', '哪个课程比较火，前景好？'],
]
</script>

<template>
  <div class="prc">
    <ItheimaWwwPageChrome active-nav="price">
      <section class="prc__hero" aria-label="学费主视觉">
        <div class="prc__hero-bg" aria-hidden="true" />
        <div class="container prc__hero-inner">
          <h1 class="prc__hero-h1">全国各校区各学科 学费汇总</h1>
          <button type="button" class="prc__hero-btn">如何获得学费优惠？ &gt;</button>
        </div>
      </section>

      <section class="prc__zone">
        <div class="container">
          <PageResourceImg
            v-if="pageImage(PAGE_DIR.P07, 'p07-banner-01.webp')"
            class="prc__optional-banner"
            :src="pageImage(PAGE_DIR.P07, 'p07-banner-01.webp')"
            alt="学费优惠"
            ratio="1200 / 240"
          />
          <h2 class="prc__zone-title">
            <span class="prc__deco" aria-hidden="true"></span>
            新学员专区
            <span class="prc__deco" aria-hidden="true"></span>
          </h2>

          <div class="prc__tabs" role="tablist">
            <button
              v-for="t in subjectTabs"
              :key="t.id"
              type="button"
              role="tab"
              class="prc__tab"
              :class="{ 'prc__tab--on': activeTab === t.id }"
              :aria-selected="activeTab === t.id"
              @click="activeTab = t.id"
            >
              {{ t.label }}
            </button>
          </div>

          <div class="prc__card">
            <div class="prc__card-left">
              <div class="prc__card-icon" aria-hidden="true">&lt;/&gt;</div>
              <div class="prc__card-left-inner">
                <h3 class="prc__card-h">{{ card.title }}</h3>
                <p class="prc__card-sub">{{ card.sub }}</p>
                <ul class="prc__meta">
                  <li>课时: {{ card.hours }}</li>
                  <li>技术点: {{ card.points }}</li>
                  <li>测验: {{ card.quiz }}</li>
                </ul>
                <p class="prc__card-desc">{{ card.desc }}</p>
              </div>
            </div>
            <div class="prc__card-right">
              <p class="prc__trial-line">
                <span class="prc__trial-name">{{ card.trialTitle }}</span>
                <span class="prc__old">原价{{ card.oldPrice }}</span>
              </p>
              <p class="prc__price-line">首学仅需 <strong class="prc__price-num">{{ card.newPrice }}</strong> 元</p>
              <p class="prc__bonus">{{ card.bonus }}</p>
              <button type="button" class="prc__cta">优先占座 &gt;</button>
            </div>
          </div>
        </div>
      </section>

      <section class="prc__table-wrap">
        <div class="container">
          <h2 class="prc__table-title">2026年学费价格表</h2>
          <div class="prc__table-scroll">
            <table class="prc__table">
              <thead>
                <tr>
                  <th>学科</th>
                  <th>班级类型</th>
                  <th>城市</th>
                  <th>学费</th>
                  <th>优惠活动</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="sec in priceSections" :key="sec.subject">
                  <tr class="prc__tr-sec">
                    <td colspan="5">{{ sec.subject }}</td>
                  </tr>
                  <tr v-for="(r, ri) in sec.rows" :key="`${sec.subject}-${ri}`">
                    <td />
                    <td>{{ r.classType }}</td>
                    <td>{{ r.city }}</td>
                    <td class="prc__td-price">{{ r.tuition }}</td>
                    <td>{{ r.promo }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>

          <div class="prc__faq">
            <h3 class="prc__faq-h">常见问题</h3>
            <div v-for="(row, fi) in faqChunks" :key="fi" class="prc__faq-row">
              <button v-for="(q, qi) in row" :key="qi" type="button" class="prc__faq-q">{{ q }}</button>
            </div>
          </div>

          <p class="prc__footnote">
            数据结构与优惠说明参考原站
            <a href="https://www.itheima.com/pc/module/price/index.html?hm-pc-dh$hm-pc-dh$spk" target="_blank" rel="noopener noreferrer">白马程序员各学科学费价格表</a>
            （以官网最新公示为准）。
          </p>
        </div>
      </section>
    </ItheimaWwwPageChrome>

    <footer class="prc__foot">
      <div class="container prc__foot-inner">
        <RouterLink to="/">返回官网首页（原型）</RouterLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.prc {
  min-height: 100vh;
  background: #f0f4f8;
}

.prc__hero {
  position: relative;
  color: #fff;
  overflow: hidden;
  padding: 48px 16px 52px;
  text-align: center;
}

.prc__hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 40%, #1976d2 70%, #1e88e5 100%);
}

.prc__hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.15;
  background: radial-gradient(ellipse 80% 50% at 50% 0%, #fff 0%, transparent 55%),
    repeating-linear-gradient(-12deg, transparent, transparent 40px, rgba(255, 255, 255, 0.04) 40px, rgba(255, 255, 255, 0.04) 41px);
  pointer-events: none;
}

.prc__hero-inner {
  position: relative;
  z-index: 1;
}

.prc__hero-h1 {
  margin: 0 0 22px;
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.prc__hero-btn {
  display: inline-block;
  padding: 10px 28px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 999px;
  cursor: pointer;
}

.prc__hero-btn:hover {
  background: rgba(255, 255, 255, 0.22);
}

.prc__zone {
  padding: 32px 0 28px;
  background: #fff;
}

.prc__optional-banner {
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
}

.prc__zone-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0 0 22px;
  font-size: 20px;
  font-weight: 800;
  color: #222;
}

.prc__deco {
  width: 4px;
  height: 22px;
  background: linear-gradient(180deg, #ff9800, #ff6d00);
  border-radius: 2px;
}

.prc__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 22px;
}

.prc__tab {
  padding: 8px 14px;
  font-size: 13px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background: #f5f5f5;
  color: #333;
  cursor: pointer;
}

.prc__tab--on {
  background: linear-gradient(180deg, #1976d2 0%, #1565c0 100%);
  color: #fff;
  border-color: #1565c0;
  font-weight: 700;
}

.prc__card {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  max-width: 960px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(13, 71, 161, 0.15);
}

@media (max-width: 800px) {
  .prc__card {
    grid-template-columns: 1fr;
  }
}

.prc__card-left {
  position: relative;
  display: flex;
  gap: 16px;
  padding: 28px 22px 32px;
  background: linear-gradient(160deg, #0a3d62 0%, #0d47a1 55%, #1565c0 100%);
  color: #fff;
}

.prc__card-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.prc__card-h {
  margin: 0 0 10px;
  font-size: 22px;
  font-weight: 800;
}

.prc__card-sub {
  margin: 0 0 14px;
  font-size: 13px;
  opacity: 0.92;
  line-height: 1.5;
}

.prc__meta {
  margin: 0 0 14px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  font-size: 12px;
  opacity: 0.9;
}

.prc__card-desc {
  margin: 0;
  font-size: 13px;
  line-height: 1.65;
  opacity: 0.95;
}

.prc__card-right {
  padding: 28px 24px 32px;
  background: linear-gradient(145deg, #4fc3f7 0%, #29b6f6 45%, #039be5 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.prc__trial-line {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 800;
}

.prc__trial-name {
  margin-right: 10px;
}

.prc__old {
  font-size: 13px;
  font-weight: 500;
  text-decoration: line-through;
  opacity: 0.85;
}

.prc__price-line {
  margin: 0 0 12px;
  font-size: 16px;
}

.prc__price-num {
  font-size: 36px;
  font-weight: 900;
  margin: 0 4px;
}

.prc__bonus {
  margin: 0 0 18px;
  font-size: 13px;
  line-height: 1.55;
  opacity: 0.95;
}

.prc__cta {
  align-self: flex-start;
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(180deg, #ff9800 0%, #ff6d00 100%);
  border: none;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(255, 109, 0, 0.35);
}

.prc__table-wrap {
  padding: 28px 0 40px;
  background: #f0f4f8;
}

.prc__table-title {
  margin: 0 0 18px;
  text-align: center;
  font-size: 22px;
  font-weight: 800;
  color: #222;
}

.prc__table-scroll {
  overflow-x: auto;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.prc__table {
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  background: #fff;
  font-size: 13px;
}

.prc__table thead th {
  padding: 14px 12px;
  text-align: left;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(180deg, #ff9800 0%, #ff6d00 100%);
  border: 1px solid #f57c00;
}

.prc__table tbody td {
  padding: 10px 12px;
  border: 1px solid #e8e8e8;
  color: #444;
  vertical-align: top;
}

.prc__tr-sec td {
  background: #fff8e1;
  font-weight: 800;
  color: #e65100;
  padding: 12px;
}

.prc__td-price {
  font-weight: 700;
  color: #1565c0;
  white-space: nowrap;
}

.prc__faq {
  margin-top: 28px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.prc__faq-h {
  margin: 0 0 14px;
  font-size: 16px;
  font-weight: 800;
}

.prc__faq-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}

.prc__faq-q {
  padding: 8px 12px;
  font-size: 12px;
  border: 1px solid #e3eaf2;
  background: #fafcff;
  border-radius: 6px;
  color: #1565c0;
  cursor: pointer;
}

.prc__footnote {
  margin: 20px 0 0;
  font-size: 12px;
  color: #666;
  text-align: center;
  line-height: 1.6;
}

.prc__footnote a {
  color: #0d47a1;
}

.prc__foot {
  padding: 20px 16px;
  background: #2b2b2b;
  color: #aaa;
  font-size: 13px;
  text-align: center;
}

.prc__foot-inner a {
  color: #8cf;
}
</style>
