<script setup>
import { RouterLink } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import PageResourceImg from '../components/PageResourceImg.vue'
import { PAGE_DIR, pageImage } from '../utils/pageResource.js'
import { getAllJishuArticles } from '../data/jishuArticles.js'

const articles = getAllJishuArticles()

const cats = [
  '全部',
  'JavaEE',
  '鸿蒙应用开发',
  'HTML&JS+前端',
  'Python+大数据开发',
  '人工智能开发',
  'C/C++',
  'AI+设计',
  '软件测试',
  '产品经理',
]

const hotCourses = [
  { title: 'Java入门到起飞，含斯坦福大学练习题+力扣算法题+大厂java面试题', level: '初级', learners: '1070019', score: '5.0分' },
  { title: '鸿蒙HarmonyOS4.0应用开发从入门到实战', level: '初级', learners: '130463', score: '5.0分' },
  { title: 'Python教程，8天python从入门到精通', level: '初级', learners: '706704', score: '5.0分' },
]
</script>

<template>
  <SiteHeader />
  <main class="jishu">
    <div class="container jishu__inner">
      <h1 class="jishu__title">技术文章</h1>
      <div class="jishu__cats">
        <button v-for="(c, i) in cats" :key="i" type="button" class="jishu__cat" :class="{ 'jishu__cat--on': i === 0 }">{{ c }}</button>
      </div>
      <div class="jishu__sort">
        <button type="button" class="jishu__sort-btn jishu__sort-btn--on">最新</button>
        <button type="button" class="jishu__sort-btn">最热</button>
      </div>
      <ul class="jishu__list">
        <li v-for="a in articles" :key="a.id" class="jishu__item">
          <h2 class="jishu__art-title">
            <RouterLink class="jishu__art-link" :to="`/jishu/${a.id}`">{{ a.title }}</RouterLink>
          </h2>
          <p class="jishu__excerpt">{{ a.excerpt }}</p>
          <div class="jishu__meta">
            <span>{{ a.cat }}</span>
            <span>浏览{{ a.views }}人</span>
            <span>{{ a.date }}</span>
          </div>
        </li>
      </ul>
      <nav class="jishu__pager" aria-label="分页">
        <button type="button" class="jishu__page jishu__page--on">1</button>
        <button type="button" class="jishu__page">2</button>
        <button type="button" class="jishu__page">3</button>
        <span>…</span>
        <button type="button" class="jishu__page">56</button>
        <button type="button" class="jishu__next">下一页</button>
      </nav>

      <section class="jishu__hot">
        <h2 class="jishu__hot-title">热门课程推荐</h2>
        <ul class="jishu__hot-list">
          <li v-for="(h, i) in hotCourses" :key="i" class="jishu__hot-item">
            <RouterLink class="jishu__hot-link" to="/course/1002">
              <PageResourceImg
                :src="pageImage(PAGE_DIR.P10, 'p10-hot-thumb-01.webp')"
                alt=""
                ratio="120 / 68"
                img-class="jishu__hot-thumb"
              />
              <div>
                <p class="jishu__hot-name">{{ h.title }}</p>
                <p class="jishu__hot-meta">{{ h.level }} · {{ h.learners }}人学习 · {{ h.score }}</p>
              </div>
            </RouterLink>
          </li>
        </ul>
      </section>
    </div>
  </main>
  <SiteFooter />
</template>

<style scoped>
.jishu__inner {
  padding: 24px 16px 40px;
}

.jishu__title {
  font-size: 22px;
  margin: 0 0 16px;
}

.jishu__cats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.jishu__cat {
  padding: 6px 12px;
  border: 1px solid var(--color-border);
  background: #fafafa;
  font-size: 13px;
  cursor: default;
}

.jishu__cat--on {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.jishu__sort {
  margin-bottom: 16px;
}

.jishu__sort-btn {
  padding: 6px 16px;
  margin-right: 8px;
  border: 1px solid var(--color-border);
  background: #fff;
  cursor: default;
}

.jishu__sort-btn--on {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.jishu__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.jishu__item {
  padding: 18px 0;
  border-bottom: 1px solid var(--color-border);
}

.jishu__art-title {
  margin: 0 0 8px;
  font-size: 16px;
}

.jishu__art-link {
  color: #333;
  text-decoration: none;
}

.jishu__art-link:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.jishu__excerpt {
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.6;
  color: #555;
}

.jishu__meta {
  font-size: 12px;
  color: var(--color-muted);
  display: flex;
  gap: 16px;
}

.jishu__pager {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 24px 0 32px;
}

.jishu__page {
  min-width: 32px;
  padding: 6px 8px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: default;
}

.jishu__page--on {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.jishu__next {
  padding: 6px 12px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: default;
}

.jishu__hot-title {
  font-size: 18px;
  margin: 0 0 14px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--color-primary);
}

.jishu__hot-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.jishu__hot-item {
  padding: 12px 0;
  border-bottom: 1px dashed var(--color-border);
}

.jishu__hot-link {
  display: flex;
  gap: 12px;
  text-decoration: none;
  color: inherit;
}

.jishu__hot-link:hover .jishu__hot-name {
  color: var(--color-primary);
}

.jishu__hot-thumb {
  width: 120px;
  flex-shrink: 0;
}

.jishu__hot-thumb :deep(.ph__img) {
  width: 120px;
  height: auto;
}

.jishu__hot-name {
  margin: 0 0 6px;
  font-size: 14px;
  line-height: 1.4;
}

.jishu__hot-meta {
  margin: 0;
  font-size: 12px;
  color: var(--color-muted);
}
</style>
