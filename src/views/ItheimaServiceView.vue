<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import PlaceholderImage from '../components/PlaceholderImage.vue'
import ItheimaWwwPageChrome from '../components/ItheimaWwwPageChrome.vue'

const journeyCards = [
  {
    phase: '入学前服务',
    tone: 'blue',
    title: '专业职业咨询',
    bullets: [
      '多维度学前测评，了解学生综合能力',
      '结合学生的实际情况，制定详细的职业规划',
      '针对性深入了解学生情况，全面规划教学计划',
    ],
  },
  {
    phase: '在校学习期',
    tone: 'white',
    title: '带着就业目标教学',
    bullets: [
      '培训学生从基础知识到实操技能、提升学生职业观及协作精神',
      '培养学生学习力+沟通力+创新力、强化学生经验积累+解决问题的能力',
      '专业化的名师团、高效含金量的课程；标准化授课流程、信息化的教辅平台',
    ],
  },
  {
    phase: '学后求职期',
    tone: 'blue',
    title: '为学生就业拓展机会和渠道',
    bullets: [
      '就业指导课程 > 1V1简历指导 > 阶段试水面试 > 提前体验职场',
      '阶段交叉面试 > 及时心理辅导 > 1V1模拟面试 > 学生拿到满意的offer',
      '与大厂合作，链接HR资源，为学生搭建就业直通车',
    ],
  },
  {
    phase: '就业入职后',
    tone: 'orange',
    title: '【好师父】就业平台',
    bullets: [
      '对学生进行跟踪回访，加速学生适应职场',
      '稳定学生在岗工作能力，适时进行技能提升',
      '安排专业就业老师跟进学生就业情况',
    ],
  },
]

const courseTabs = ['基础入门课', '技术进阶课', '实战项目课', '就业指导课']
const activeTab = ref(0)

const courseTabCopy = [
  '我们注重让学生的能力提升变得可见可感，课程内容严谨不失深度，确保知识传递高效且准确。',
  '我们强调培训的实用性，设计的场景紧密贴合实际工作需求，真正做到学以致用。',
  '秉承「授人以渔」的教学理念，不仅传授知识，更教会学习方法。',
  '培训内容兼具精确性、实用性、通用性与高效性，确保学员能掌握核心技能，适应多变的技术环境。',
]

const fiveLibs = [
  '与一线大厂共享资源，引领行业的信息库',
  '来自华为、IBM等大牛团队组成的研发人才库',
  '前沿热门课题为主，具备前瞻性及实用性的课题研究库',
  '「大厂级」深度真项目，覆盖行业热门领域的项目库',
  '基于市场主流技术研发，应对职场技术难题的解决方案库',
]

const sixLevels = [
  '主流技术攻坚',
  '搭建项目库',
  '输出解决方案',
  '模块化课程设计',
  '学习行为数据测量与分析',
  '搭建学习效果模型',
]

const sampleOffers = [
  { subject: 'JavaEE学科', name: '张同学', salary: '40000', unit: '元/月', company: '入职：河南观**化传播' },
  { subject: '鸿蒙应用开发学科', name: '徐同学', salary: '29000', unit: '元/月', company: '入职：上海易**信息' },
  { subject: '人工智能学科', name: '李同学', salary: '28600', unit: '元/月', company: '入职：山东灵**息' },
  { subject: 'Python+大数据学科', name: '黄同学', salary: '24000', unit: '元/月', company: '入职：跨**运集团' },
]
</script>

<template>
  <div class="svc">
    <ItheimaWwwPageChrome active-nav="service">
      <section class="svc__hero" aria-label="就业服务主视觉">
        <div class="svc__hero-media">
          <PlaceholderImage ratio="21 / 7" />
        </div>
        <div class="svc__hero-mask" aria-hidden="true" />
        <div class="container svc__hero-copy">
          <h1 class="svc__hero-h1">坚持以学生为中心，以就业为导向</h1>
          <p class="svc__hero-sub">全面提升求职竞争力 帮助学生变身「职场精英」</p>
        </div>
      </section>

      <section class="svc__block svc__block--white">
        <div class="container">
          <h2 class="svc__h2">一站式就业服务体系</h2>
          <p class="svc__lead">
            针对不同阶段提供具有针对性、个性化的就业服务，协助支持黑马程序员学生的职业提升
          </p>

          <div class="svc__journey">
            <template v-for="(card, i) in journeyCards" :key="card.phase">
              <article class="svc__jcard" :class="`svc__jcard--${card.tone}`">
                <h3 class="svc__jphase">{{ card.phase }}</h3>
                <h4 class="svc__jtitle">{{ card.title }}</h4>
                <ul class="svc__jlist">
                  <li v-for="(b, bi) in card.bullets" :key="bi">{{ b }}</li>
                </ul>
                <div class="svc__jcard-ph">
                  <PlaceholderImage ratio="16 / 10" />
                </div>
              </article>
              <span v-if="i < journeyCards.length - 1" class="svc__jarrow" aria-hidden="true">→</span>
            </template>
          </div>

          <div class="svc__cta-row">
            <button type="button" class="svc__btn svc__btn--orange">查看学生就业情况</button>
            <button type="button" class="svc__btn svc__btn--blue">详细就业服务体系</button>
          </div>
        </div>
      </section>

      <section class="svc__block svc__block--gray">
        <div class="container">
          <h2 class="svc__h2 svc__h2--red">课程好才有就业好</h2>
          <p class="svc__lead">
            与华为、阿里云、科大讯飞、京东物流、IBM等2000余家企业达成深度合作；汇聚产教资源，促进资源共享，制定教学评价标准，开发专业核心课程与企业最新项目实操实训。
          </p>

          <div class="svc__course-panel">
            <div class="svc__course-left">
              <h3 class="svc__course-h3">将就业拆解到课程周期中的每个阶段</h3>
              <p class="svc__course-tip">提前制定课程阶段所对应的就业技能和知识重点，严格把控落实</p>
              <div class="svc__course-tabs">
                <button
                  v-for="(t, ti) in courseTabs"
                  :key="t"
                  type="button"
                  class="svc__course-tab"
                  :class="{ 'svc__course-tab--on': activeTab === ti }"
                  @click="activeTab = ti"
                >
                  {{ t }}
                </button>
              </div>
              <p class="svc__course-p">{{ courseTabCopy[activeTab] }}</p>
              <p class="svc__course-p">
                提前制定课程阶段所对应的就业技能和知识重点，严格把控落实，让学习路径与岗位能力模型对齐（原型示意）。
              </p>
            </div>
            <div class="svc__course-right">
              <PlaceholderImage ratio="4 / 3" />
            </div>
          </div>
        </div>
      </section>

      <section class="svc__block svc__block--white">
        <div class="container">
          <h2 class="svc__h2 svc__h2--deep">打造实用优质课程的秘诀</h2>

          <div class="svc__secret">
            <div class="svc__secret-col">
              <h3 class="svc__secret-label">五库模式</h3>
              <ol class="svc__secret-ol">
                <li v-for="(line, li) in fiveLibs" :key="li">{{ line }}</li>
              </ol>
            </div>
            <div class="svc__secret-plus" aria-hidden="true">+</div>
            <div class="svc__secret-col">
              <h3 class="svc__secret-label">六级研发流程</h3>
              <ol class="svc__secret-ol svc__secret-ol--six">
                <li v-for="(line, si) in sixLevels" :key="si">{{ line }}</li>
              </ol>
            </div>
          </div>
          <p class="svc__secret-foot">
            从产品、开发、测试上线全程辅导，搭建成熟课研闭环，高效研发项目，全面提升课程质量
          </p>
          <div class="svc__cta-row">
            <button type="button" class="svc__btn svc__btn--orange">获取详细课程大纲</button>
            <button type="button" class="svc__btn svc__btn--blue">了解研发全过程</button>
          </div>
        </div>
      </section>

      <section class="svc__block svc__block--offers">
        <div class="container">
          <h2 class="svc__h2">有口皆碑的就业好</h2>
          <p class="svc__lead">
            已累计培养30多万数字化人才，与2000家一线企业建立了深度招聘合作关系，为学生在全国内寻找工作开拓渠道。
          </p>
          <h3 class="svc__subh">学生 Offer 战绩（示例）</h3>
          <div class="svc__offer-grid">
            <article v-for="(o, oi) in sampleOffers" :key="oi" class="svc__offer-card">
              <p class="svc__offer-subj">{{ o.subject }}</p>
              <p class="svc__offer-name">{{ o.name }}</p>
              <p class="svc__offer-salary"><em>{{ o.salary }}</em>{{ o.unit }}</p>
              <p class="svc__offer-co">{{ o.company }}</p>
            </article>
          </div>
          <div class="svc__cta-row">
            <button type="button" class="svc__btn svc__btn--orange">更多就业数据</button>
            <button type="button" class="svc__btn svc__btn--outline">更多学生评价</button>
          </div>
        </div>
      </section>

      <p class="svc__ref">
        完整版块见原站
        <a href="https://www.itheima.com/service.html?hm-pc-dh$hm-pc-dh$hm-pc-dh$spk" target="_blank" rel="noopener noreferrer">黑马程序员就业服务</a>
      </p>
    </ItheimaWwwPageChrome>

    <footer class="svc__foot">
      <div class="container svc__foot-inner">
        <RouterLink to="/">返回官网首页（原型）</RouterLink>
        <span class="svc__foot-note">本地路径为 <code>/service</code>（浏览器不支持中文路径「就业服务」）</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.svc {
  min-height: 100vh;
  background: #fff;
  color: #333;
}

.svc__hero {
  position: relative;
  text-align: center;
  color: #fff;
  overflow: hidden;
}

.svc__hero-media {
  position: relative;
}

.svc__hero-media :deep(.ph__img) {
  width: 100%;
  display: block;
  min-height: 200px;
  object-fit: cover;
}

.svc__hero-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(230, 0, 18, 0.82) 0%, rgba(230, 80, 30, 0.75) 50%, rgba(255, 120, 40, 0.7) 100%);
  pointer-events: none;
}

.svc__hero-copy {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 900px;
  padding: 0 16px;
  z-index: 1;
}

.svc__hero-h1 {
  margin: 0 0 12px;
  font-size: clamp(22px, 3.8vw, 34px);
  font-weight: 900;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.25);
  line-height: 1.3;
}

.svc__hero-sub {
  margin: 0;
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 600;
  opacity: 0.98;
}

.svc__block {
  padding: 40px 0 44px;
}

.svc__block--white {
  background: #fff;
}

.svc__block--gray {
  background: #f5f8fc;
}

.svc__block--offers {
  background: linear-gradient(180deg, #fafcff 0%, #eef4fb 100%);
}

.svc__h2 {
  margin: 0 0 12px;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  color: #333;
}

.svc__h2--red {
  color: #e60012;
}

.svc__h2--deep {
  color: #0a4d8c;
}

.svc__lead {
  margin: 0 auto 28px;
  max-width: 920px;
  text-align: center;
  font-size: 14px;
  line-height: 1.75;
  color: #666;
}

.svc__journey {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 8px 6px;
  margin-bottom: 28px;
}

.svc__jcard {
  flex: 1 1 200px;
  max-width: 260px;
  border-radius: 10px;
  padding: 18px 16px 14px;
  position: relative;
  overflow: hidden;
  border: 1px solid #e0e8f0;
}

.svc__jcard--blue {
  background: linear-gradient(165deg, #0d6efd 0%, #004a99 100%);
  color: #fff;
  border-color: transparent;
}

.svc__jcard--white {
  background: #fff;
  color: #333;
}

.svc__jcard--orange {
  background: linear-gradient(165deg, #ff7043 0%, #e60012 100%);
  color: #fff;
  border-color: transparent;
}

.svc__jphase {
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 800;
}

.svc__jcard--white .svc__jphase {
  color: #0066cc;
}

.svc__jtitle {
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: 700;
  opacity: 0.95;
}

.svc__jlist {
  margin: 0 0 12px;
  padding-left: 18px;
  font-size: 12px;
  line-height: 1.55;
}

.svc__jcard-ph {
  margin: 0 -6px -6px;
  border-radius: 6px;
  overflow: hidden;
  opacity: 0.85;
}

.svc__jcard-ph :deep(.ph__img) {
  max-height: 100px;
  object-fit: cover;
}

.svc__jarrow {
  align-self: center;
  color: #0066cc;
  font-size: 22px;
  font-weight: 700;
  padding: 0 2px;
}

@media (max-width: 1100px) {
  .svc__jarrow {
    display: none;
  }
}

.svc__cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
}

.svc__btn {
  padding: 11px 26px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 999px;
  cursor: pointer;
}

.svc__btn--orange {
  background: linear-gradient(180deg, #ff9800 0%, #ff6d00 100%);
  color: #fff;
}

.svc__btn--blue {
  background: linear-gradient(180deg, #1e88e5 0%, #0066cc 100%);
  color: #fff;
}

.svc__btn--outline {
  background: #fff;
  color: #0066cc;
  border: 2px solid #0066cc;
}

.svc__course-panel {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 38%);
  gap: 24px;
  align-items: start;
  background: #f0f7ff;
  border-radius: 12px;
  padding: 24px 22px 28px;
  border: 1px solid #d6e6f7;
}

@media (max-width: 900px) {
  .svc__course-panel {
    grid-template-columns: 1fr;
  }
}

.svc__course-h3 {
  margin: 0 0 8px;
  font-size: 17px;
  font-weight: 800;
  color: #0a3d62;
}

.svc__course-tip {
  margin: 0 0 14px;
  font-size: 13px;
  color: #555;
}

.svc__course-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.svc__course-tab {
  padding: 8px 14px;
  font-size: 13px;
  border-radius: 6px;
  border: 1px solid #90caf9;
  background: #fff;
  color: #0066cc;
  cursor: pointer;
  font-weight: 600;
}

.svc__course-tab--on {
  background: linear-gradient(180deg, #42a5f5 0%, #1976d2 100%);
  color: #fff;
  border-color: #1976d2;
}

.svc__course-p {
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.7;
  color: #444;
}

.svc__course-right :deep(.ph__img) {
  width: 100%;
  border-radius: 8px;
  border: 2px solid #fff;
  box-shadow: 0 6px 20px rgba(0, 80, 160, 0.12);
}

.svc__secret {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 16px 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.svc__secret-col {
  flex: 1 1 280px;
  max-width: 420px;
}

.svc__secret-label {
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 800;
  color: #0066cc;
}

.svc__secret-ol {
  margin: 0;
  padding-left: 22px;
  font-size: 13px;
  line-height: 1.75;
  color: #1565c0;
}

.svc__secret-plus {
  flex: 0 0 auto;
  font-size: 48px;
  font-weight: 300;
  color: #90caf9;
  line-height: 1;
  padding-top: 36px;
}

.svc__secret-foot {
  margin: 20px auto 20px;
  max-width: 880px;
  text-align: center;
  font-size: 13px;
  color: #666;
  line-height: 1.65;
}

.svc__subh {
  margin: 8px 0 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  color: #333;
}

.svc__offer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 24px;
}

@media (max-width: 900px) {
  .svc__offer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .svc__offer-grid {
    grid-template-columns: 1fr;
  }
}

.svc__offer-card {
  background: #fff;
  border-radius: 10px;
  padding: 16px 14px;
  border: 1px solid #e3ecf5;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.svc__offer-subj {
  margin: 0 0 6px;
  font-size: 12px;
  color: #888;
}

.svc__offer-name {
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 800;
}

.svc__offer-salary {
  margin: 0 0 8px;
  font-size: 14px;
  color: #e60012;
}

.svc__offer-salary em {
  font-style: normal;
  font-size: 22px;
  font-weight: 900;
}

.svc__ref {
  margin: 0;
  padding: 16px 16px 28px;
  text-align: center;
  font-size: 12px;
  color: #888;
  background: #fafafa;
}

.svc__ref a {
  color: #1565c0;
}

.svc__foot {
  padding: 18px 16px;
  background: #2b2b2b;
  color: #aaa;
  font-size: 13px;
  text-align: center;
}

.svc__foot-inner {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}

.svc__foot-inner a {
  color: #8cf;
}

.svc__foot-note {
  font-size: 11px;
  opacity: 0.85;
}

.svc__foot-note code {
  font-size: 11px;
  background: #444;
  padding: 2px 6px;
  border-radius: 4px;
  color: #ddd;
}
</style>
