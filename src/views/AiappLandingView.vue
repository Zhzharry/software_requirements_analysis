<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import BrandLogo from '../components/BrandLogo.vue'
import PageResourceImg from '../components/PageResourceImg.vue'
import AiappGeomCollage from '../components/aiapp/AiappGeomCollage.vue'
import AiappFeatIconMosaic from '../components/aiapp/AiappFeatIconMosaic.vue'
import { PAGE_DIR, pageImage } from '../utils/pageResource.js'
import { TRAINING_CAMPAIGN_URL } from '../navigation.js'

const topLinks = ['免费教程', '原创书籍', '教研团队', '开班时间', '报名流程', '项目信息站', '技术社区']

const courseNav = ['课程介绍', '课程大纲', '学习经历', '就业薪资', '学前咨询']

const heroPills = ['行业应用业务方案能力', 'AI大模型应用能力', 'Agent智能体开发能力']

const featureCards = [
  {
    tone: 'gold',
    title: '学费价格',
    lines: ['首次就读享优惠价', '可申请在线试听'],
    hint: '5000元学费优惠',
  },
  {
    tone: 'green',
    title: '课程优势',
    lines: ['打破单一开发语言边界', '课程深度融汇AI之大成'],
    hint: '混合开发 + AI 赋能',
  },
  {
    tone: 'blue',
    title: 'AI项目实战',
    lines: ['主流技术栈企业级应用', 'AI全流程赋能开发'],
    hint: '企业级项目贯穿',
  },
  {
    tone: 'red',
    title: '就业薪资',
    lines: ['全国平均月薪20-50K', '应届生起薪14.2K'],
    hint: '数据来源于职友集等统计',
  },
]

const classRows = [
  { type: '入门体验班', date: '2026.03.15', status: '火热报名中' },
  { type: '入门体验班', date: '2026.04.12', status: '火热报名中' },
  { type: '精英实战班', date: '2026.04.20', status: '名额已满' },
  { type: '精英实战班', date: '2026.05.18', status: '火热报名中' },
  { type: '精英实战班', date: '2026.06.08', status: '火热报名中' },
]

const industries = [
  {
    key: 'finance',
    name: '金融行业',
    lead: '在金融行业中，AI协同构建一个完整的智能风控与投顾解决方案',
    diagramTitle: '金融风控与智能投顾系统',
    cards: [
      { t: '业务解决方案', d: '分析金融风控流程、合规要求、用户画像，设计整合数据源、模型和规则引擎的整体架构。' },
      { t: 'AI大模型应用', d: '开发基于大模型的交易异常检测、报告自动生成、客户问题解答等核心功能模块。' },
      { t: '智能体应用', d: '创建自主监控市场、分析风险、生成投资建议并执行合规检查的智能投顾Agent。' },
    ],
  },
  {
    key: 'medical',
    name: '医疗行业',
    lead: '在医疗健康领域，AI结合医学知识构建辅助诊断和个性化健康管理系统',
    diagramTitle: '医疗辅助诊断与健康管理',
    cards: [
      { t: '业务解决方案', d: '设计符合医疗规范的AI辅助诊断流程，整合影像数据、电子病历和临床指南。' },
      { t: 'AI大模型应用', d: '开发医学影像分析、病历摘要生成、药物相互作用检查等医疗AI功能。' },
      { t: '智能体应用', d: '构建个性化健康管理Agent，持续监测用户健康数据，提供预防建议并预警异常。' },
    ],
  },
  {
    key: 'mfg',
    name: '智能制造',
    lead: '在制造业中，AI协同实现产线智能化、质量自动化和供应链优化',
    diagramTitle: '智能制造与质量检测',
    cards: [
      { t: '业务解决方案', d: '规划智能工厂整体架构，设计从生产排程到质量控制的数字化流程。' },
      { t: 'AI大模型应用', d: '开发基于视觉的缺陷检测、设备故障预测、生产报告自动生成等AI模块。' },
      { t: '智能体应用', d: '创建自主调度资源、优化生产参数、协调物流的智能产线管理Agent。' },
    ],
  },
  {
    key: 'retail',
    name: '零售电商',
    lead: '在零售电商领域，AI结合构建全渠道智能零售和个性化购物体验',
    diagramTitle: '智能零售与个性化推荐',
    cards: [
      { t: '业务解决方案', d: '设计融合线上线下数据的智能零售方案，规划从库存到客户服务的全链路优化。' },
      { t: 'AI大模型应用', d: '开发商品描述生成、客户评论分析、智能客服对话等零售AI功能。' },
      { t: '智能体应用', d: '构建个性化购物助手Agent，理解用户偏好，自动比价、推荐商品并管理订单。' },
    ],
  },
  {
    key: 'elder',
    name: '智慧养老',
    lead: '在养老健康领域，AI协同构建智能化养老服务和健康监护系统',
    diagramTitle: '智慧养老与健康监护',
    cards: [
      { t: '业务解决方案', d: '设计老龄化智能服务方案，规划健康监测、紧急响应、社交陪伴的整合服务体系。' },
      { t: 'AI大模型应用', d: '开发健康数据分析、用药提醒生成、情感陪伴对话、异常行为识别等养老AI功能。' },
      { t: '智能体应用', d: '创建24小时健康监护Agent，监测老人健康状况，自动联系家人或医疗资源，提供日常陪伴。' },
    ],
  },
  {
    key: 'logistics',
    name: '物流运输',
    lead: '在物流运输行业，AI协同构建智能调度、路径优化和全链路可视化的物流系统',
    diagramTitle: '智慧物流与供应链优化',
    cards: [
      { t: '业务解决方案', d: '设计智能物流网络架构，规划仓储、运输、配送各环节的数字化协同方案。' },
      { t: 'AI大模型应用', d: '开发路径优化算法、货物识别分类、异常事件预测、客服自动应答等物流AI功能。' },
      { t: '智能体应用', d: '构建智能调度Agent，实时分析交通、天气、订单数据，自主调整配送计划并协调资源。' },
    ],
  },
  {
    key: 'edu',
    name: '教育领域',
    lead: '在教育领域，AI协同构建自适应学习系统和个性化教学方案',
    diagramTitle: '个性化教育与智能教学',
    cards: [
      { t: '业务解决方案', d: '设计个性化学习路径，规划智能教学平台架构，整合课程资源与评估体系。' },
      { t: 'AI大模型应用', d: '开发智能题库生成、作文自动批改、知识点答疑、学习内容推荐等教育AI功能。' },
      { t: '智能体应用', d: '创建个性化学习伙伴Agent，持续跟踪学习进度，动态调整教学策略，提供即时反馈。' },
    ],
  },
]

const activeIndustry = ref(0)
const currentIndustry = computed(() => industries[activeIndustry.value])
</script>

<template>
  <div class="aiapp">
    <header class="aiapp__top">
      <div class="container aiapp__top-inner">
        <RouterLink to="/" class="aiapp__brand-row">
          <BrandLogo variant="compact" />
          <p class="aiapp__brand-line">传智教育（股票代码 003032）旗下高端IT教育品牌</p>
        </RouterLink>
        <nav class="aiapp__top-nav" aria-label="顶部快捷">
          <span v-for="(l, i) in topLinks" :key="i" class="aiapp__top-link">{{ l }}</span>
        </nav>
      </div>
    </header>

    <div class="aiapp__course-head">
      <div class="container aiapp__course-head-inner">
        <p class="aiapp__course-tagline">70%学员来自口碑推荐 · AI智能应用开发</p>
        <nav class="aiapp__course-tabs" aria-label="课程子导航">
          <button v-for="(t, i) in courseNav" :key="i" type="button" class="aiapp__course-tab" :class="{ 'aiapp__course-tab--on': i === 0 }">{{ t }}</button>
        </nav>
      </div>
    </div>

    <section class="aiapp__hero" aria-label="主视觉">
      <div class="aiapp__hero-bg" aria-hidden="true" />
      <div class="container aiapp__hero-inner">
        <div class="aiapp__hero-copy">
          <h1 class="aiapp__hero-title">AI 智能应用开发</h1>
          <p class="aiapp__hero-sub">由 AI 时代软件开发王者，成为行业争抢 AI 应用人才</p>
          <div class="aiapp__hero-pills">
            <span v-for="(p, i) in heroPills" :key="i" class="aiapp__pill">{{ p }}</span>
          </div>
          <div class="aiapp__salary-ribbon" role="note">
            <span class="aiapp__salary-text">冲击年薪 30万+</span>
          </div>
          <div class="aiapp__hero-cta">
            <button type="button" class="aiapp__btn aiapp__btn--ghost">立即报名，锁定席位</button>
            <button type="button" class="aiapp__btn aiapp__btn--ghost">查看课程大纲</button>
          </div>
        </div>
        <div class="aiapp__hero-visual">
          <PageResourceImg
            :src="pageImage(PAGE_DIR.P15, 'p15-hero-01.webp')"
            alt="AI智能应用开发"
            ratio="16 / 11"
          />
        </div>
      </div>
    </section>

    <section class="aiapp__features">
      <div class="container aiapp__features-grid">
        <article v-for="(c, i) in featureCards" :key="i" class="aiapp__feat" :data-tone="c.tone">
          <div class="aiapp__feat-ico" aria-hidden="true">
            <AiappFeatIconMosaic :tone="c.tone" />
          </div>
          <h3 class="aiapp__feat-title">{{ c.title }} <span class="aiapp__chev">&gt;</span></h3>
          <p v-for="(line, li) in c.lines" :key="li" class="aiapp__feat-line">{{ line }}</p>
          <p class="aiapp__feat-hint">{{ c.hint }}</p>
        </article>
      </div>
    </section>

    <section class="aiapp__salary-note">
      <div class="container">
        <h2 class="aiapp__h2">行业薪资</h2>
        <p class="aiapp__note">数据来源于职友集等统计</p>
        <ul class="aiapp__bullets">
          <li>白马毕业学员就职AI应用开发岗位：广州校区平均薪资14052元，最高21000元；北京昌平校区平均14641元；深圳校区平均15624元等。</li>
          <li>AI智能应用核心岗位：一线城市年薪50-80万，资深算法工程师可达百万。北京AI开发工程师约63.9%岗位薪资在20-50K/月。</li>
          <li>泛AI岗位：具备AI工具经验的开发者薪资溢价明显，全栈工程师薪资中位数约28-45K/月。</li>
        </ul>
      </div>
    </section>

    <section class="aiapp__class" aria-labelledby="class-h">
      <div class="container">
        <h2 id="class-h" class="aiapp__class-h">开班信息</h2>
        <p class="aiapp__class-loc">校区：北京昌平</p>
        <div class="aiapp__table-wrap">
          <table class="aiapp__table">
            <thead>
              <tr>
                <th>班型</th>
                <th>开班日期</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, ri) in classRows" :key="ri">
                <td>{{ row.type }}</td>
                <td>{{ row.date }}</td>
                <td>
                  <span class="aiapp__status" :data-full="row.status === '名额已满'">{{ row.status }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="aiapp__industry" aria-labelledby="ind-h">
      <div class="container">
        <h2 id="ind-h" class="aiapp__ind-h">AI时代所有行业软件都会<br />结合 AI 全新升级</h2>
        <p class="aiapp__ind-lead">AI正在渗入每一行代码，全行业应用软件迎接「AI原生」时代</p>
        <div class="aiapp__ind-tabs" role="tablist">
          <button
            v-for="(ind, ii) in industries"
            :key="ind.key"
            type="button"
            role="tab"
            class="aiapp__ind-tab"
            :class="{ 'aiapp__ind-tab--on': ii === activeIndustry }"
            :aria-selected="ii === activeIndustry"
            @click="activeIndustry = ii"
          >{{ ind.name }}</button>
        </div>
        <div class="aiapp__ind-panel" role="tabpanel">
          <p class="aiapp__ind-copy">{{ currentIndustry.lead }}</p>
          <div class="aiapp__ind-body">
            <div class="aiapp__ind-diagram">
              <AiappGeomCollage variant="industry" :palette-index="activeIndustry" />
              <p class="aiapp__diagram-cap">{{ currentIndustry.diagramTitle }}</p>
            </div>
            <div class="aiapp__ind-cards">
              <article v-for="(card, ci) in currentIndustry.cards" :key="ci" class="aiapp__ind-card">
                <h4>{{ card.t }}</h4>
                <p>{{ card.d }}</p>
              </article>
            </div>
          </div>
          <div class="aiapp__ind-actions">
            <button type="button" class="aiapp__btn aiapp__btn--red">更多 AI 智能应用软件 &gt;</button>
            <button type="button" class="aiapp__btn aiapp__btn--blue">了解就业前景 &gt;</button>
          </div>
        </div>
      </div>
    </section>

    <section class="aiapp__talent" aria-labelledby="talent-h">
      <div class="aiapp__talent-bg" aria-hidden="true" />
      <div class="container aiapp__talent-inner">
        <h2 id="talent-h" class="aiapp__talent-h">
          AI时代，懂业务、懂行业方案、懂AI的<br />软件开发人才缺口大爆发
        </h2>
        <p class="aiapp__talent-sub">
          AI岗位人才需求激增而合格人才严重短缺，「AI智能应用开发」迎来高薪抢人热潮
        </p>
        <div class="aiapp__talent-grid">
          <div class="aiapp__talent-stats">
            <h3 class="aiapp__talent-h3">AI智能应用开发 · AI时代最大的人才红利！</h3>
            <div class="aiapp__stat-row">
              <div class="aiapp__stat">
                <span class="aiapp__stat-label">预计2027年全球AI市场</span>
                <strong class="aiapp__stat-num">9900亿美元</strong>
              </div>
              <div class="aiapp__stat">
                <span class="aiapp__stat-label">相关岗位需求缺口</span>
                <strong class="aiapp__stat-num">500万+</strong>
              </div>
              <div class="aiapp__stat">
                <span class="aiapp__stat-label">76%的AI智能应用岗位月薪</span>
                <strong class="aiapp__stat-num">￥15-50K</strong>
              </div>
            </div>
            <p class="aiapp__talent-footnote">数据来源于贝恩公司、领英数据、职友集等第三方统计</p>
            <p class="aiapp__talent-extra">含「AI技能」的简历获面试概率提升42%，薪资溢价达23%</p>
          </div>
          <div class="aiapp__talent-video">
            <div class="aiapp__video-frame">
              <AiappGeomCollage variant="section" />
              <span class="aiapp__video-cap">双轨能力 横扫高薪战场</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="aiapp__foot">
      <div class="container aiapp__foot-inner">
        <RouterLink class="aiapp__foot-a" to="/">返回白马程序员首页</RouterLink>
        <a class="aiapp__foot-a" :href="TRAINING_CAMPAIGN_URL" target="_blank" rel="noopener noreferrer">打开官网落地页（对照）</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.aiapp {
  --ai-deep: #0a1628;
  --ai-blue: #0d3a7a;
  --ai-orange: #ff6a00;
  --ai-orange2: #ff3d3d;
  background: #f5f6f8;
  min-height: 100vh;
}

.aiapp__top {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  font-size: 12px;
}

.aiapp__top-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 16px;
}

.aiapp__brand-row {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
}

.aiapp__brand-line {
  margin: 0;
  color: #666;
}

.aiapp__top-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
}

.aiapp__top-link {
  color: #333;
  cursor: default;
  white-space: nowrap;
}

.aiapp__course-head {
  background: #fff;
  border-bottom: 1px solid #eee;
}

.aiapp__course-head-inner {
  padding: 12px 16px 14px;
}

.aiapp__course-tagline {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 700;
  color: #c00;
}

.aiapp__course-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.aiapp__course-tab {
  padding: 6px 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fafafa;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
}

.aiapp__course-tab--on {
  border-color: var(--ai-blue);
  color: #fff;
  background: linear-gradient(180deg, #1a5fd4 0%, var(--ai-blue) 100%);
}

.aiapp__hero {
  position: relative;
  color: #fff;
  overflow: hidden;
}

.aiapp__hero-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, #061428 0%, var(--ai-blue) 45%, #0a2044 100%),
    repeating-linear-gradient(
      -12deg,
      transparent,
      transparent 40px,
      rgba(255, 255, 255, 0.02) 40px,
      rgba(255, 255, 255, 0.02) 41px
    );
}

.aiapp__hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1fr minmax(200px, 42%);
  gap: 28px;
  align-items: center;
  padding: 36px 16px 48px;
  z-index: 1;
}

@media (max-width: 900px) {
  .aiapp__hero-inner {
    grid-template-columns: 1fr;
  }
}

.aiapp__hero-title {
  margin: 0 0 12px;
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 900;
  letter-spacing: 0.06em;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
}

.aiapp__hero-sub {
  margin: 0 0 18px;
  font-size: 16px;
  line-height: 1.65;
  opacity: 0.95;
  max-width: 520px;
}

.aiapp__hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.aiapp__pill {
  padding: 8px 14px;
  border-radius: 4px;
  background: rgba(80, 160, 255, 0.25);
  border: 1px solid rgba(160, 210, 255, 0.45);
  font-size: 13px;
}

.aiapp__salary-ribbon {
  display: inline-block;
  margin-bottom: 22px;
  padding: 10px 28px;
  background: linear-gradient(90deg, #ff4040 0%, var(--ai-orange) 55%, #ffb347 100%);
  border-radius: 6px;
  box-shadow: 0 6px 20px rgba(255, 80, 0, 0.45);
  transform: rotate(-1deg);
}

.aiapp__salary-text {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.aiapp__hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.aiapp__btn {
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.aiapp__btn--ghost {
  background: rgba(0, 20, 50, 0.5);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.55);
}

.aiapp__btn--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
}

.aiapp__btn--red {
  background: linear-gradient(180deg, #ff5a4d 0%, #e02020 100%);
  color: #fff;
}

.aiapp__btn--blue {
  background: linear-gradient(180deg, #2a7fff 0%, var(--ai-blue) 100%);
  color: #fff;
}

.aiapp__hero-visual :deep(.ph__img) {
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.aiapp__features {
  margin-top: -20px;
  position: relative;
  z-index: 2;
  padding: 0 16px 28px;
}

.aiapp__features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

@media (max-width: 960px) {
  .aiapp__features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .aiapp__features-grid {
    grid-template-columns: 1fr;
  }
}

.aiapp__feat {
  background: #fff;
  border-radius: 8px;
  padding: 16px 16px 18px;
  border: 1px solid #ececec;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}

.aiapp__feat-ico {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.aiapp__feat-title {
  margin: 0 0 8px;
  font-size: 16px;
  color: #222;
}

.aiapp__chev {
  color: #999;
  font-weight: 400;
}

.aiapp__feat-line {
  margin: 0 0 4px;
  font-size: 13px;
  color: #555;
  line-height: 1.5;
}

.aiapp__feat-hint {
  margin: 8px 0 0;
  font-size: 12px;
  color: #888;
}

.aiapp__salary-note {
  padding: 28px 16px 8px;
}

.aiapp__h2 {
  margin: 0 0 8px;
  font-size: 18px;
  color: #222;
}

.aiapp__note {
  margin: 0 0 12px;
  font-size: 13px;
  color: #888;
}

.aiapp__bullets {
  margin: 0;
  padding-left: 1.2em;
  font-size: 13px;
  line-height: 1.7;
  color: #444;
}

.aiapp__bullets li {
  margin-bottom: 8px;
}

.aiapp__class {
  padding: 24px 16px 32px;
}

.aiapp__class-h {
  margin: 0 0 8px;
  font-size: 20px;
  color: #fff;
}

.aiapp__class-loc {
  margin: 0 0 14px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.88);
}

.aiapp__class .container {
  background: linear-gradient(180deg, #0f4a9e 0%, var(--ai-blue) 100%);
  border-radius: 8px;
  padding: 20px 20px 24px;
  box-shadow: 0 8px 24px rgba(13, 58, 122, 0.25);
}

.aiapp__table-wrap {
  overflow: auto;
}

.aiapp__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
}

.aiapp__table th,
.aiapp__table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.aiapp__table th {
  background: #f0f5ff;
  color: var(--ai-blue);
  font-weight: 700;
}

.aiapp__status[data-full='true'] {
  color: #999;
}

.aiapp__industry {
  padding: 32px 16px 40px;
  background: #fff;
}

.aiapp__ind-h {
  margin: 0 0 10px;
  font-size: 22px;
  line-height: 1.45;
  text-align: center;
  color: #111;
}

.aiapp__ind-lead {
  margin: 0 0 20px;
  text-align: center;
  font-size: 14px;
  color: #666;
}

.aiapp__ind-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
}

.aiapp__ind-tab {
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid #cce0ff;
  background: #f5f9ff;
  color: var(--ai-blue);
  font-size: 13px;
  cursor: pointer;
}

.aiapp__ind-tab--on {
  background: linear-gradient(180deg, #2a7fff 0%, var(--ai-blue) 100%);
  color: #fff;
  border-color: transparent;
}

.aiapp__ind-copy {
  margin: 0 0 18px;
  font-size: 15px;
  font-weight: 600;
  color: #222;
  text-align: center;
  line-height: 1.55;
}

.aiapp__ind-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 20px;
  align-items: start;
}

@media (max-width: 800px) {
  .aiapp__ind-body {
    grid-template-columns: 1fr;
  }
}

.aiapp__ind-diagram :deep(.geom) {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.aiapp__diagram-cap {
  margin: 8px 0 0;
  font-size: 13px;
  color: #666;
  text-align: center;
}

.aiapp__ind-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.aiapp__ind-card {
  padding: 14px 16px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background: #fafafa;
}

.aiapp__ind-card h4 {
  margin: 0 0 8px;
  font-size: 15px;
  color: var(--ai-blue);
}

.aiapp__ind-card p {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: #555;
}

.aiapp__ind-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 24px;
}

.aiapp__talent {
  position: relative;
  color: #fff;
  overflow: hidden;
  padding: 40px 16px 48px;
}

.aiapp__talent-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(125deg, #ff5a00 0%, var(--ai-orange2) 50%, #c41530 100%),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.03) 2px,
      rgba(255, 255, 255, 0.03) 4px
    );
  opacity: 1;
}

.aiapp__talent-bg::after {
  content: '01001101 01100001 01100011 01101000 01101001 01101110 01100101 00100000 01001100 01100101 01100001 01110010 01101110 01101001 01101110 01100111';
  position: absolute;
  inset: 0;
  font-family: ui-monospace, monospace;
  font-size: 11px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.08);
  word-break: break-all;
  padding: 20px;
  pointer-events: none;
}

.aiapp__talent-inner {
  position: relative;
  z-index: 1;
}

.aiapp__talent-h {
  margin: 0 0 12px;
  font-size: clamp(20px, 3vw, 28px);
  line-height: 1.45;
  text-align: center;
  font-weight: 900;
}

.aiapp__talent-sub {
  margin: 0 auto 28px;
  text-align: center;
  font-size: 14px;
  opacity: 0.95;
  max-width: 720px;
}

.aiapp__talent-grid {
  display: grid;
  grid-template-columns: 1fr minmax(240px, 38%);
  gap: 28px;
  align-items: center;
}

@media (max-width: 900px) {
  .aiapp__talent-grid {
    grid-template-columns: 1fr;
  }
}

.aiapp__talent-h3 {
  margin: 0 0 18px;
  font-size: 17px;
}

.aiapp__stat-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin-bottom: 16px;
}

.aiapp__stat {
  flex: 1 1 140px;
}

.aiapp__stat-label {
  display: block;
  font-size: 12px;
  opacity: 0.9;
  margin-bottom: 6px;
}

.aiapp__stat-num {
  font-size: 22px;
  font-weight: 900;
}

.aiapp__talent-footnote,
.aiapp__talent-extra {
  margin: 8px 0 0;
  font-size: 12px;
  opacity: 0.88;
  line-height: 1.5;
}

.aiapp__video-frame {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

.aiapp__video-frame :deep(.geom) {
  width: 100%;
  display: block;
}

.aiapp__video-cap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 14px 12px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
  font-size: 15px;
  font-weight: 800;
  text-align: center;
}

.aiapp__foot {
  background: #1a1a1a;
  color: #ccc;
  padding: 20px 16px;
}

.aiapp__foot-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  justify-content: center;
}

.aiapp__foot-a {
  color: #8cf;
  font-size: 14px;
}
</style>
