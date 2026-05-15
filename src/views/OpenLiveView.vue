<script setup>
import { RouterLink } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import PageResourceImg from '../components/PageResourceImg.vue'
import { PAGE_DIR, pageImageAt } from '../utils/pageResource.js'

const subjectFilters = ['全部', 'Java', 'HTML&JS+前端', 'Python+大数据开发', '人工智能开发', '产品经理']
const directionFilters = ['全部', '入门', '零基础', '精品公开课', '就业指导', '前景分析']
const levelFilters = ['全部', '初级', '中级', '高级']

const courses = [
  { title: 'OpenClaw本地部署实战，0基础跑通部署玩转5大实战!', learners: '17610', date: '2026.03.10', courseId: '1002' },
  { title: '春晚AI视频特效是怎么做出来的？Seedance 2.0 实操案例', learners: '16629', date: '2026.02.28', courseId: '1002' },
  { title: '手搓Clawdbot远程遥控实战，全球A十大风口技术解读，爬取万条招聘数据揭秘行情', learners: '16636', date: '2026.02.02', courseId: '1002' },
  { title: '2026最火Agent skills实战，自动实现金融数据分析+PPT制作', learners: '16721', date: '2026.01.27', courseId: '1002' },
  { title: 'ChatGPT 5.2 VS Gemini 3.0，五大案例实测谁是最强大模型', learners: '16642', date: '2025.12.17', courseId: '1002' },
  { title: 'AI工作流一键成片 批量制作爆款带货视频', learners: '28573', date: '2025.11.13', courseId: '1002' },
]
</script>

<template>
  <SiteHeader />
  <main class="open">
    <div class="container open__inner">
      <h1 class="open__title">免费直播公开课</h1>
      <div class="open__filters">
        <div class="open__row">
          <span class="open__label">学科分类：</span>
          <button v-for="(s, i) in subjectFilters" :key="i" type="button" class="open__chip" :class="{ 'open__chip--on': i === 0 }">{{ s }}</button>
        </div>
        <div class="open__row">
          <span class="open__label">课程方向：</span>
          <button v-for="(s, i) in directionFilters" :key="i" type="button" class="open__chip" :class="{ 'open__chip--on': i === 0 }">{{ s }}</button>
        </div>
        <div class="open__row">
          <span class="open__label">难度等级：</span>
          <button v-for="(s, i) in levelFilters" :key="i" type="button" class="open__chip" :class="{ 'open__chip--on': i === 0 }">{{ s }}</button>
        </div>
      </div>
      <div class="open__sort">
        <button type="button" class="open__sort-btn open__sort-btn--on">最新</button>
        <button type="button" class="open__sort-btn">最热</button>
      </div>
      <ul class="open__list">
        <li v-for="(c, i) in courses" :key="i" class="open__item">
          <RouterLink class="open__item-link" :to="`/course/${c.courseId}`">
            <div class="open__thumb">
              <PageResourceImg
                :src="pageImageAt(PAGE_DIR.P09, 'p09-live', i)"
                :alt="c.title"
                ratio="16 / 9"
              />
            </div>
            <div class="open__body">
              <h2 class="open__course-title">{{ c.title }}</h2>
              <p class="open__meta"><strong>{{ c.learners }}</strong> 人学习 · {{ c.date }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <nav class="open__pager" aria-label="分页">
        <button type="button" class="open__page open__page--on">1</button>
        <button type="button" class="open__page">2</button>
        <button type="button" class="open__page">3</button>
        <span class="open__ellipsis">…</span>
        <button type="button" class="open__page">49</button>
        <button type="button" class="open__next">下一页</button>
        <span class="open__jump">跳转页</span>
        <input class="open__input" type="text" inputmode="numeric" placeholder="请输入文本" />
        <button type="button" class="open__go">确定</button>
      </nav>
    </div>
  </main>
  <SiteFooter />
</template>

<style scoped>
.open__inner {
  padding: 24px 16px 40px;
}

.open__title {
  font-size: 22px;
  margin: 0 0 20px;
}

.open__filters {
  border: 1px solid var(--color-border);
  padding: 16px;
  background: #fafafa;
  margin-bottom: 16px;
}

.open__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.open__row:last-child {
  margin-bottom: 0;
}

.open__label {
  font-size: 13px;
  color: #333;
  min-width: 5em;
}

.open__chip {
  padding: 4px 10px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 12px;
  cursor: default;
}

.open__chip--on {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.open__sort {
  margin-bottom: 16px;
}

.open__sort-btn {
  padding: 6px 18px;
  margin-right: 8px;
  border: 1px solid var(--color-border);
  background: #fff;
  cursor: default;
}

.open__sort-btn--on {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.open__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.open__item {
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border);
}

.open__item-link {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 16px;
  text-decoration: none;
  color: inherit;
}

.open__item-link:hover .open__course-title {
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .open__item-link {
    grid-template-columns: 1fr;
  }
}

.open__course-title {
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.45;
}

.open__meta {
  margin: 0;
  font-size: 13px;
  color: var(--color-muted);
}

.open__meta strong {
  color: var(--color-primary);
}

.open__pager {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  font-size: 13px;
}

.open__page {
  min-width: 32px;
  padding: 6px 8px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: default;
}

.open__page--on {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.open__next,
.open__go {
  padding: 6px 12px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: default;
}

.open__input {
  width: 48px;
  padding: 4px 6px;
  border: 1px solid #ccc;
}

.open__ellipsis {
  color: #999;
}
</style>
