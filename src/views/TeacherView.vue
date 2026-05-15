<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import PageResourceImg from '../components/PageResourceImg.vue'
import { PAGE_DIR, pageImage, pageImageAt } from '../utils/pageResource.js'
import ItheimaWwwPageChrome from '../components/ItheimaWwwPageChrome.vue'

const highlights = [
  { title: '课程研发团队', desc: '10年+技术经验、带项目研发团队' },
  { title: '专职教学团队', desc: '985/211学历、大厂工作经验' },
  { title: '标准化AI教学', desc: '标准化授课，追求极致高效学习' },
  { title: '教学成果斐然', desc: '30万+学生实现高起点就业' },
]

const teachers = [
  {
    name: '张老师',
    role: '系统分析师',
    lines:
      '中国CR机器人教育培训委员会委员。中国开放原子开源基金会银牌讲师，广东省人力资源与社会保障厅师资培训基地人工智能、区块链技术专家讲师。',
  },
  {
    name: '李老师',
    role: '高级架构师',
    lines: '曾任职一线互联网企业，10年+大型分布式系统与微服务架构经验，参与企业级课程研发与技术攻坚。',
  },
  {
    name: '王老师',
    role: '技术专家',
    lines: '深耕 Java 与云原生方向，擅长将复杂技术以案例化、图表化方式呈现，注重学员分析与落地能力。',
  },
  {
    name: '赵老师',
    role: '教研总监',
    lines: '主导多门企业级项目课设计与迭代，熟悉人才需求调研与课程体系搭建。',
  },
  {
    name: '刘老师',
    role: '全栈讲师',
    lines: '前后端与 AI 应用结合教学，项目驱动授课，强调「听得懂、练得会、用得上」。',
  },
  {
    name: '陈老师',
    role: '大数据专家',
    lines: '大数据平台与实时计算方向，具备丰富的数据仓库与可视化项目交付经验。',
  },
]

const pageSize = 4
const carouselStart = ref(0)
const visibleTeachers = computed(() => {
  const start = carouselStart.value
  return teachers.slice(start, start + pageSize)
})

function carouselPrev() {
  carouselStart.value = Math.max(0, carouselStart.value - 1)
}

function carouselNext() {
  carouselStart.value = Math.min(teachers.length - pageSize, carouselStart.value + 1)
}

const filterStandards = [
  { title: '1. 标准化研发人才画像', desc: '大厂背景、10年+技术经验、大型项目经验' },
  { title: '2. 多维面试（五面）', desc: '背景调查、技术360°鉴定、新课题设计、课程随机演绎、职业定位及发展规划' },
  { title: '3. 研究院小组诊断测评', desc: '教育情怀、价值观、进取精神、培养潜力' },
  { title: '4. 全链路面试流程监控', desc: 'CEO审核、信息存档' },
]
</script>

<template>
  <div class="tp">
    <ItheimaWwwPageChrome active-nav="teacher">
      <section class="tp__hero" aria-label="师资主视觉">
        <div class="tp__hero-bg" aria-hidden="true" />
        <div class="container tp__hero-inner">
          <div class="tp__hero-copy">
            <p class="tp__hero-line1">擅用AI与时俱进</p>
            <p class="tp__hero-line2">精技术 会讲课 懂教学</p>
            <p class="tp__hero-sub">来自产业一线的工程师教师队伍</p>
          </div>
          <div class="tp__hero-photo">
            <PageResourceImg
              :src="pageImage(PAGE_DIR.P05, 'p05-hero-01.webp')"
              alt="师资力量主视觉"
              ratio="21 / 9"
            />
          </div>
        </div>
      </section>

      <section class="tp__strip">
        <div class="container tp__strip-inner">
          <article v-for="(h, i) in highlights" :key="i" class="tp__strip-item">
            <h2 class="tp__strip-h">{{ h.title }}</h2>
            <p class="tp__strip-p">{{ h.desc }}</p>
          </article>
        </div>
      </section>

      <main class="tp__main">
        <div class="container">
          <section class="tp__block">
            <h2 class="tp__h2">10年+技术经验 重量级课程研发团队</h2>
            <p class="tp__lead">
              课程研发团队由来自阿里、百度、华为、腾讯、京东、中科院等一线互联网公司或研究机构工程师组成，平均从业经验超过10年。
            </p>
            <p class="tp__lead tp__lead--2">
              能准确知晓企业真实用人需求，并与华为、阿里云、京东、百度等联合开发课程，学完即可满足企业用人需求。
            </p>

            <div class="tp__carousel">
              <button type="button" class="tp__car-btn tp__car-btn--prev" aria-label="上一组" @click="carouselPrev">‹</button>
              <div class="tp__car-view">
                <div class="tp__car-track">
                  <article v-for="(t, ti) in visibleTeachers" :key="`${carouselStart}-${ti}`" class="tp__tcard">
                    <div class="tp__tcard-photo">
                      <PageResourceImg
                        :src="pageImageAt(PAGE_DIR.P05, 'p05-teacher', carouselStart + ti)"
                        :alt="t.name"
                        ratio="3 / 4"
                      />
                    </div>
                    <h3 class="tp__tcard-name">{{ t.name }}</h3>
                    <p class="tp__tcard-role">{{ t.role }}</p>
                    <p class="tp__tcard-bio">{{ t.lines }}</p>
                    <button type="button" class="tp__tcard-btn">试听TA的课程</button>
                  </article>
                </div>
              </div>
              <button type="button" class="tp__car-btn tp__car-btn--next" aria-label="下一组" @click="carouselNext">›</button>
            </div>
          </section>

          <section class="tp__block tp__block--gray">
            <h2 class="tp__h2">白马程序员专职课研人才 · 16级筛选标准（节选）</h2>
            <p class="tp__lead">
              教研工作是保障基础教育质量的重要支撑。坚持从源头严控教研师资质量，制定严格的筛选及考核体系，打造一支高素质专业化的教研队伍。
            </p>
            <div class="tp__standards">
              <article v-for="(s, si) in filterStandards" :key="si" class="tp__std-card">
                <h4>{{ s.title }}</h4>
                <p>{{ s.desc }}</p>
              </article>
            </div>
            <p class="tp__footnote">
              完整流程与更多板块见原站
              <a href="https://www.itheima.com/teacher.html?hm-pc-dh$spk" target="_blank" rel="noopener noreferrer">itheima.com/teacher.html</a>
            </p>
          </section>
        </div>
      </main>
    </ItheimaWwwPageChrome>

    <footer class="tp__foot">
      <div class="container tp__foot-inner">
        <RouterLink to="/">返回官网首页（原型）</RouterLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.tp {
  min-height: 100vh;
  background: #fff;
  color: #333;
}

.tp__hero {
  position: relative;
  color: #fff;
  overflow: hidden;
}

.tp__hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(125deg, #d41414 0%, #b01010 45%, #9a0c0c 100%);
}

.tp__hero-bg::before {
  content: '';
  position: absolute;
  inset: -20% -10%;
  background: radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(0, 0, 0, 0.08) 0%, transparent 45%);
  pointer-events: none;
}

.tp__hero-bg::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40%;
  background: repeating-linear-gradient(
    -8deg,
    transparent,
    transparent 30px,
    rgba(255, 255, 255, 0.03) 30px,
    rgba(255, 255, 255, 0.03) 31px
  );
  pointer-events: none;
}

.tp__hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr minmax(200px, 42%);
  gap: 24px;
  align-items: center;
  padding: 36px 16px 40px;
}

@media (max-width: 900px) {
  .tp__hero-inner {
    grid-template-columns: 1fr;
  }
}

.tp__hero-line1 {
  margin: 0 0 8px;
  font-size: clamp(22px, 3.5vw, 34px);
  font-weight: 900;
  letter-spacing: 0.06em;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  color: #fffef0;
}

.tp__hero-line2 {
  margin: 0 0 14px;
  font-size: clamp(26px, 4.5vw, 42px);
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
}

.tp__hero-sub {
  margin: 0;
  font-size: 16px;
  opacity: 0.95;
}

.tp__hero-photo :deep(.ph__img) {
  width: 100%;
  border-radius: 8px;
  border: 3px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

.tp__strip {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
}

.tp__strip-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  padding: 0;
}

@media (max-width: 900px) {
  .tp__strip-inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .tp__strip-inner {
    grid-template-columns: 1fr;
  }
}

.tp__strip-item {
  padding: 22px 18px;
  border-right: 1px solid #e8e8e8;
}

.tp__strip-item:last-child {
  border-right: none;
}

@media (max-width: 900px) {
  .tp__strip-item:nth-child(2n) {
    border-right: none;
  }
}

.tp__strip-h {
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 800;
  color: #111;
}

.tp__strip-p {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  color: #666;
}

.tp__main {
  padding: 36px 0 48px;
  background: #fafafa;
}

.tp__block {
  margin-bottom: 28px;
  padding: 28px 22px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.tp__block--gray {
  background: #f7f7f7;
}

.tp__h2 {
  margin: 0 0 14px;
  font-size: 22px;
  text-align: center;
  font-weight: 800;
  color: #111;
}

.tp__lead {
  margin: 0 auto 12px;
  max-width: 920px;
  font-size: 14px;
  line-height: 1.75;
  color: #555;
  text-align: center;
}

.tp__lead--2 {
  margin-bottom: 28px;
}

.tp__carousel {
  display: flex;
  align-items: stretch;
  gap: 8px;
  margin-top: 8px;
}

.tp__car-btn {
  flex: 0 0 40px;
  align-self: center;
  height: 100px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  font-size: 32px;
  line-height: 1;
  color: #999;
  cursor: pointer;
  border-radius: 4px;
}

.tp__car-btn:hover {
  background: #eee;
  color: #c8161d;
}

.tp__car-view {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.tp__car-track {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media (max-width: 1024px) {
  .tp__car-track {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .tp__car-track {
    grid-template-columns: 1fr;
  }
}

.tp__tcard {
  text-align: center;
  padding: 16px 12px 20px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background: #fafafa;
}

.tp__tcard-photo :deep(.ph__img) {
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  border-radius: 6px;
}

.tp__tcard-name {
  margin: 12px 0 4px;
  font-size: 17px;
}

.tp__tcard-role {
  margin: 0 0 10px;
  font-size: 13px;
  color: #c8161d;
  font-weight: 600;
}

.tp__tcard-bio {
  margin: 0;
  font-size: 12px;
  line-height: 1.55;
  color: #555;
  text-align: left;
  min-height: 4.5em;
}

.tp__tcard-btn {
  margin-top: 14px;
  padding: 8px 18px;
  border: 1px solid #c8161d;
  background: #fff;
  color: #c8161d;
  font-size: 13px;
  cursor: pointer;
  border-radius: 4px;
}

.tp__tcard-btn:hover {
  background: #fff5f5;
}

.tp__standards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 20px;
}

@media (max-width: 640px) {
  .tp__standards {
    grid-template-columns: 1fr;
  }
}

.tp__std-card {
  padding: 14px 16px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
}

.tp__std-card h4 {
  margin: 0 0 8px;
  font-size: 14px;
  color: #111;
}

.tp__std-card p {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: #666;
}

.tp__footnote {
  margin: 20px 0 0;
  font-size: 12px;
  color: #888;
  text-align: center;
}

.tp__footnote a {
  color: #2a7fff;
}

.tp__foot {
  padding: 20px 16px;
  background: #2b2b2b;
  color: #aaa;
  font-size: 13px;
  text-align: center;
}

.tp__foot-inner a {
  color: #8cf;
}
</style>
