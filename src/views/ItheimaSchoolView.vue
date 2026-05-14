<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import PlaceholderImage from '../components/PlaceholderImage.vue'
import ItheimaWwwPageChrome from '../components/ItheimaWwwPageChrome.vue'

const findMode = ref('campus')

const steps = [
  { n: '01', title: '在线咨询', desc: '专属咨询老师1V1答疑' },
  { n: '02', title: '选择学科', desc: '综合考虑确定意向学科' },
  { n: '03', title: '来校参观', desc: '实地考察深入了解' },
  { n: '04', title: '学前测评', desc: '规划个性化学习路线' },
  { n: '05', title: '办理入学', desc: '缴费入学开始上课' },
]

const campuses = [
  { id: 'bjcp', label: '北京昌平', campusName: '北京昌平校区', address: '北京市昌平区建材城西路金燕龙办公楼一层（总部）', phone: '400-618-4000' },
  { id: 'bjsy', label: '北京顺义', campusName: '北京顺义校区', address: '北京市顺义区京顺路99号白马程序员（教学楼A栋）', phone: '400-618-4000' },
  { id: 'sh', label: '上海', campusName: '上海校区', address: '上海市浦东新区航头镇航都路18号万香创新港', phone: '400-618-4000' },
  { id: 'gz', label: '广州', campusName: '广州校区', address: '广东省广州市天河区珠吉路58号津安创意园', phone: '400-618-4000' },
  { id: 'sz', label: '深圳', campusName: '深圳校区', address: '深圳市宝安区石岩镇塘头一号路创维创新谷2#B栋南区 4-5层', phone: '400-618-4000' },
  { id: 'wh', label: '武汉', campusName: '武汉校区', address: '湖北省武汉市东湖高新技术开发区汽车电子产业园5号楼-1楼和3楼', phone: '400-618-4000' },
  { id: 'zz', label: '郑州', campusName: '郑州校区', address: '郑州市高新区长椿路11号国家大学科技园(西区)3号楼B座7楼', phone: '400-618-4000' },
  { id: 'xa', label: '西安', campusName: '西安校区', address: '西安市高新区科技五路和发智能大厦B座3层', phone: '400-618-4000' },
  { id: 'cs', label: '长沙', campusName: '长沙校区', address: '湖南省长沙市岳麓区东方红中路东方红大厦 3-4楼', phone: '400-618-4000' },
  { id: 'jn', label: '济南', campusName: '济南校区', address: '山东省济南市历下区茂岭山路2号普利商务中心5层', phone: '400-618-4000' },
  { id: 'nj', label: '南京', campusName: '南京校区', address: '江苏省南京市雨花台区三鸿路6号江苏国家数字出版基地2层', phone: '400-618-4000' },
  { id: 'hz', label: '杭州', campusName: '杭州校区', address: '浙江省杭州市钱塘区4号大街187号盛泰时代山', phone: '400-618-4000' },
  { id: 'cd', label: '成都', campusName: '成都校区', address: '成都市金牛区蜀西路58号精城国际1栋4楼', phone: '400-618-4000' },
  { id: 'hf', label: '合肥', campusName: '合肥校区', address: '安徽省合肥市蜀山区高新区华佗巷469号国科智安·智慧安全谷', phone: '400-618-4000' },
]

const selectedId = ref('bjcp')
const selectedCampus = computed(() => campuses.find((c) => c.id === selectedId.value) ?? campuses[0])

const panelTags = ['来校路线', '校区环境', '开班典礼', '视频说课']

const subjectOfferings = [
  'AI智能应用开发',
  'AI大模型开发（Python）',
  'AI鸿蒙开发',
  'AI嵌入式+机器人开发',
  'AI大数据开发',
  'AI运维',
  'AI测试',
  '跨境电商运营',
  'AI设计',
  'AI视频创作与直播运营',
]

const subjectKeys = [
  { id: 'aiapp', label: 'AI智能应用开发' },
  { id: 'llm', label: 'AI大模型开发（Python）' },
  { id: 'hm', label: 'AI鸿蒙开发' },
  { id: 'emb', label: 'AI嵌入式+机器人' },
  { id: 'ops', label: 'AI运维' },
  { id: 'test', label: 'AI测试' },
]

const selectedSubjectId = ref('aiapp')
</script>

<template>
  <div class="sch">
    <ItheimaWwwPageChrome active-nav="school">
      <section class="sch__hero" aria-label="开班主视觉">
        <div class="sch__hero-bg" aria-hidden="true" />
        <div class="container sch__hero-inner">
          <div class="sch__hero-copy">
            <p class="sch__hero-tag">学 AI 来白马</p>
            <h1 class="sch__hero-h1">立即报名，抢占AI黄金赛道</h1>
            <p class="sch__hero-sub">全国校区火热开班中~</p>
            <div class="sch__hero-cta">
              <button type="button" class="sch__btn sch__btn--white">抢先报名</button>
              <button type="button" class="sch__btn sch__btn--ghost">优先占座</button>
            </div>
          </div>
          <div class="sch__hero-media">
            <PlaceholderImage ratio="16 / 10" />
          </div>
        </div>
      </section>

      <section class="sch__flow" aria-labelledby="sch-flow-title">
        <div class="container sch__flow-inner">
          <h2 id="sch-flow-title" class="sch__flow-label">报名流程</h2>
          <div class="sch__flow-steps">
            <template v-for="(s, i) in steps" :key="s.n">
              <article class="sch__step">
                <span class="sch__step-num">{{ s.n }}</span>
                <h3 class="sch__step-title">{{ s.title }}</h3>
                <p class="sch__step-desc">{{ s.desc }}</p>
              </article>
              <span v-if="i < steps.length - 1" class="sch__step-arrow" aria-hidden="true">→</span>
            </template>
          </div>
        </div>
      </section>

      <section class="sch__dist">
        <div class="container">
          <h2 class="sch__dist-title">全国校区及学科开班分布</h2>
          <div class="sch__tabs" role="tablist">
            <button
              type="button"
              role="tab"
              class="sch__tab"
              :class="{ 'sch__tab--on': findMode === 'campus' }"
              :aria-selected="findMode === 'campus'"
              @click="findMode = 'campus'"
            >
              按校区查找
            </button>
            <button
              type="button"
              role="tab"
              class="sch__tab"
              :class="{ 'sch__tab--on': findMode === 'subject' }"
              :aria-selected="findMode === 'subject'"
              @click="findMode = 'subject'"
            >
              按学科查找
            </button>
          </div>

          <div v-if="findMode === 'campus'" class="sch__grid">
            <div class="sch__col sch__col--left">
              <div class="sch__campus-grid">
                <button
                  v-for="c in campuses"
                  :key="c.id"
                  type="button"
                  class="sch__campus-btn"
                  :class="{ 'sch__campus-btn--on': selectedId === c.id }"
                  @click="selectedId = c.id"
                >
                  <span class="sch__campus-icon" aria-hidden="true">◎</span>
                  <span>{{ c.label }}</span>
                </button>
              </div>
            </div>
            <div class="sch__col sch__col--right">
              <div class="sch__panel">
                <div class="sch__panel-head">
                  <label class="sch__sr-only" for="campus-select">当前校区</label>
                  <select id="campus-select" v-model="selectedId" class="sch__select">
                    <option v-for="c in campuses" :key="c.id" :value="c.id">{{ c.campusName }}</option>
                  </select>
                </div>
                <div class="sch__panel-tags">
                  <button v-for="(t, ti) in panelTags" :key="ti" type="button" class="sch__tag">{{ t }}</button>
                </div>
                <h3 class="sch__panel-h">| 开设学科及近期开班时间</h3>
                <div class="sch__pills">
                  <button v-for="(sub, si) in subjectOfferings" :key="si" type="button" class="sch__pill">{{ sub }}</button>
                </div>
                <div class="sch__addr">
                  <h4 class="sch__addr-h">校区地址</h4>
                  <p>地址：{{ selectedCampus.address }}</p>
                  <p>电话：{{ selectedCampus.phone }}</p>
                  <button type="button" class="sch__link-btn">进入分校站</button>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="sch__grid sch__grid--subj">
            <div class="sch__col sch__col--left">
              <p class="sch__aside-title">学科列表</p>
              <div class="sch__subj-list">
                <button
                  v-for="s in subjectKeys"
                  :key="s.id"
                  type="button"
                  class="sch__subj-item"
                  :class="{ 'sch__subj-item--on': selectedSubjectId === s.id }"
                  @click="selectedSubjectId = s.id"
                >
                  {{ s.label }}
                </button>
              </div>
            </div>
            <div class="sch__col sch__col--right">
              <div class="sch__panel">
                <h3 class="sch__panel-h">各城市分校及近期开班信息</h3>
                <p class="sch__panel-lead">
                  已选学科：<strong>{{ subjectKeys.find((x) => x.id === selectedSubjectId)?.label }}</strong>。可结合意向城市咨询开班计划、座位与试听安排。
                </p>
                <div class="sch__pills">
                  <span v-for="c in campuses.slice(0, 8)" :key="c.id" class="sch__pill sch__pill--static">{{ c.label }}</span>
                </div>
                <p class="sch__footnote">
                  原型结构参考
                  <a href="https://www.itheima.com/special/hmschool/index.shtml?hm-pc-dh$hm-pc-dh$spk" target="_blank" rel="noopener noreferrer">白马全国校区分布</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ItheimaWwwPageChrome>

    <div class="sch__float" role="complementary">和我们在线交流！</div>

    <footer class="sch__foot">
      <div class="container sch__foot-inner">
        <RouterLink to="/">返回官网首页（原型）</RouterLink>
        <span class="sch__foot-sep">·</span>
        <a href="https://www.itheima.com/special/hmschool/index.shtml?hm-pc-dh$hm-pc-dh$spk" target="_blank" rel="noopener noreferrer">原站对照</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.sch {
  min-height: 100vh;
  background: #f5f5f5;
}

.sch__hero {
  position: relative;
  color: #fff;
  overflow: hidden;
}

.sch__hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, #e02020 0%, #ff6b35 55%, #ff8f44 100%);
}

.sch__hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background: radial-gradient(circle at 15% 50%, #fff 0%, transparent 45%);
  pointer-events: none;
}

.sch__hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr minmax(180px, 38%);
  gap: 28px;
  align-items: center;
  padding: 40px 16px 44px;
}

@media (max-width: 900px) {
  .sch__hero-inner {
    grid-template-columns: 1fr;
  }
}

.sch__hero-tag {
  margin: 0 0 10px;
  font-size: 14px;
  opacity: 0.95;
}

.sch__hero-h1 {
  margin: 0 0 12px;
  font-size: clamp(24px, 4vw, 38px);
  font-weight: 900;
  line-height: 1.25;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.15);
}

.sch__hero-sub {
  margin: 0 0 22px;
  font-size: 17px;
  font-weight: 600;
}

.sch__hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.sch__btn {
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  border-radius: 999px;
  padding: 12px 28px;
  border: none;
}

.sch__btn--white {
  background: #fff;
  color: #e02020;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.sch__btn--ghost {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.85);
}

.sch__hero-media :deep(.ph__img) {
  width: 100%;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2);
}

.sch__flow {
  background: #fff;
  padding: 32px 0 36px;
  border-bottom: 1px solid #eee;
}

.sch__flow-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 28px;
  align-items: flex-start;
}

.sch__flow-label {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin: 0;
  padding: 8px 10px;
  background: #e02020;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.2em;
  border-radius: 4px;
  flex-shrink: 0;
}

.sch__flow-steps {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 8px 4px;
}

.sch__step {
  flex: 1 1 140px;
  max-width: 200px;
  padding: 18px 14px;
  background: linear-gradient(180deg, #f8fbff 0%, #eef4fc 100%);
  border-radius: 8px;
  border: 1px solid #dce6f2;
  box-shadow: 0 4px 12px rgba(30, 80, 140, 0.08);
  text-align: center;
}

.sch__step-num {
  display: block;
  font-size: 13px;
  font-weight: 800;
  color: #ff6b35;
  margin-bottom: 8px;
}

.sch__step-title {
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 800;
  color: #222;
}

.sch__step-desc {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: #666;
}

.sch__step-arrow {
  align-self: center;
  color: #bbb;
  font-size: 18px;
  padding: 0 2px;
}

@media (max-width: 1100px) {
  .sch__step-arrow {
    display: none;
  }
}

.sch__dist {
  padding: 36px 0 48px;
}

.sch__dist-title {
  margin: 0 0 20px;
  text-align: center;
  font-size: 22px;
  font-weight: 800;
  color: #222;
}

.sch__tabs {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 24px;
}

.sch__tab {
  padding: 12px 36px;
  font-size: 15px;
  font-weight: 700;
  border: 2px solid #ff8f44;
  background: #fff;
  color: #333;
  cursor: pointer;
}

.sch__tab:first-child {
  border-radius: 8px 0 0 8px;
}

.sch__tab:last-child {
  border-radius: 0 8px 8px 0;
  border-left: none;
}

.sch__tab--on {
  background: linear-gradient(180deg, #ff8f44 0%, #ff6b35 100%);
  color: #fff;
  border-color: #ff7a33;
}

.sch__grid {
  display: grid;
  grid-template-columns: minmax(200px, 320px) 1fr;
  gap: 20px;
  align-items: start;
}

@media (max-width: 900px) {
  .sch__grid {
    grid-template-columns: 1fr;
  }
}

.sch__campus-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

@media (max-width: 520px) {
  .sch__campus-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.sch__campus-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
  color: #888;
  font-size: 13px;
  cursor: pointer;
}

.sch__campus-btn--on {
  border-color: #ff6b35;
  background: linear-gradient(180deg, #fff8f3 0%, #ffe8dc 100%);
  color: #e02020;
  font-weight: 700;
}

.sch__campus-icon {
  font-size: 20px;
  line-height: 1;
}

.sch__panel {
  background: #fff;
  border-radius: 10px;
  padding: 20px 20px 24px;
  border: 1px solid #e8e8e8;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
}

.sch__panel-head {
  margin-bottom: 14px;
}

.sch__select {
  width: 100%;
  max-width: 280px;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.sch__panel-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.sch__tag {
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #ff8f44;
  background: #fff;
  color: #ff6b35;
  cursor: pointer;
}

.sch__panel-h {
  margin: 0 0 14px;
  font-size: 15px;
  font-weight: 800;
  color: #333;
}

.sch__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.sch__pill {
  padding: 8px 12px;
  font-size: 12px;
  border-radius: 6px;
  border: none;
  background: #fff3e8;
  color: #c45a12;
  cursor: pointer;
}

.sch__pill--static {
  cursor: default;
}

.sch__addr-h {
  margin: 0 0 8px;
  font-size: 14px;
}

.sch__addr p {
  margin: 0 0 6px;
  font-size: 13px;
  line-height: 1.6;
  color: #555;
}

.sch__link-btn {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 13px;
  border: 1px solid #e02020;
  background: #fff;
  color: #e02020;
  border-radius: 4px;
  cursor: pointer;
}

.sch__aside-title {
  margin: 0 0 12px;
  font-weight: 800;
  font-size: 14px;
}

.sch__subj-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sch__subj-item {
  text-align: left;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #fff;
  font-size: 13px;
  cursor: pointer;
}

.sch__subj-item--on {
  border-color: #ff6b35;
  background: #fff8f3;
  color: #e02020;
  font-weight: 700;
}

.sch__panel-lead {
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 1.65;
  color: #555;
}

.sch__footnote {
  margin: 16px 0 0;
  font-size: 12px;
  color: #888;
}

.sch__footnote a {
  color: #1565c0;
}

.sch__float {
  position: fixed;
  right: 16px;
  bottom: 24px;
  z-index: 20;
  padding: 12px 14px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  font-size: 13px;
  color: #333;
  border: 1px solid #eee;
}

.sch__foot {
  padding: 20px 16px;
  background: #2b2b2b;
  color: #aaa;
  font-size: 13px;
  text-align: center;
}

.sch__foot-inner a {
  color: #8cf;
}

.sch__foot-sep {
  margin: 0 8px;
  opacity: 0.5;
}

.sch__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
