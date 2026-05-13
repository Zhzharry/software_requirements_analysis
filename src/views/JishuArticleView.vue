<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import PlaceholderImage from '../components/PlaceholderImage.vue'
import { getJishuArticle } from '../data/jishuArticles.js'

const route = useRoute()
const article = computed(() => getJishuArticle(route.params.id))
</script>

<template>
  <SiteHeader />
  <main v-if="article" class="art">
    <div class="container art__inner">
      <nav class="art__crumb" aria-label="面包屑">
        <RouterLink to="/">首页</RouterLink>
        <span class="art__crumb-sep">/</span>
        <RouterLink to="/yun" target="_blank" rel="noopener noreferrer">视频教程</RouterLink>
        <span class="art__crumb-sep">/</span>
        <RouterLink to="/jishu">技术文章</RouterLink>
        <span class="art__crumb-sep">/</span>
        <span class="art__crumb-end">{{ article.cat }}</span>
      </nav>

      <article>
        <h1 class="art__title">{{ article.title }}</h1>
        <div class="art__meta">
          <span>来源：黑马程序员</span>
          <span>浏览{{ article.views }}人</span>
          <time :datetime="article.date">{{ article.date.replace(/-/g, '.') }}</time>
        </div>

        <div class="art__body">
          <template v-for="(b, i) in article.blocks" :key="i">
            <p v-if="b.type === 'p'" class="art__p" v-html="b.html" />
            <h3 v-else-if="b.type === 'h3'" class="art__h3">{{ b.text }}</h3>
            <table v-else-if="b.type === 'table'" class="art__table">
              <thead>
                <tr>
                  <th v-for="(h, hi) in b.headers" :key="hi">{{ h }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, ri) in b.rows" :key="ri">
                  <td v-for="(c, ci) in row.cells" :key="ci">{{ c }}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </div>

        <div class="art__actions">
          <button type="button" class="art__fav">收藏文章</button>
        </div>

        <p v-if="article.prev" class="art__prev">
          上一篇：
          <RouterLink v-if="article.prev.id" class="art__prev-a" :to="`/jishu/${article.prev.id}`">{{ article.prev.title }}</RouterLink>
          <span v-else>{{ article.prev.title }}</span>
        </p>

        <section v-if="article.related?.length" class="art__related" aria-labelledby="rel-h">
          <h2 id="rel-h" class="art__sec-title">相关阅读</h2>
          <ul class="art__related-list">
            <li v-for="(r, ri) in article.related" :key="ri" class="art__related-li">
              <RouterLink v-if="r.id" class="art__related-a" :to="`/jishu/${r.id}`">&gt; {{ r.title }}</RouterLink>
              <span v-else class="art__related-span">&gt; {{ r.title }}</span>
            </li>
          </ul>
          <p class="art__consult">获取更多相关资源 <button type="button" class="art__linkish">点击咨询</button></p>
        </section>

        <section v-if="article.courses?.length" class="art__courses" aria-labelledby="course-h">
          <div class="art__courses-head">
            <h2 id="course-h" class="art__sec-title">相关课程推荐</h2>
            <span class="art__more">更多&gt;&gt;</span>
          </div>
          <ul class="art__course-list">
            <li v-for="(c, ci) in article.courses" :key="ci" class="art__course-item">
              <PlaceholderImage ratio="120 / 68" class="art__course-thumb" />
              <div>
                <p class="art__course-name">{{ c.title }}</p>
                <p class="art__course-meta">{{ c.level }} · {{ c.learners }}人学习 · {{ c.score }}</p>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </div>
  </main>
  <main v-else class="art art--missing">
    <div class="container art__inner">
      <p>未找到该文章。</p>
      <RouterLink to="/jishu">返回技术文章列表</RouterLink>
    </div>
  </main>
  <SiteFooter />
</template>

<style scoped>
.art {
  background: #f5f5f5;
  min-height: 50vh;
}

.art__inner {
  max-width: 900px;
  padding: 20px 16px 48px;
}

.art--missing {
  padding: 40px 16px;
  text-align: center;
}

.art__crumb {
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
}

.art__crumb a {
  color: #2a7fff;
  text-decoration: none;
}

.art__crumb a:hover {
  text-decoration: underline;
}

.art__crumb-sep {
  margin: 0 6px;
  color: #999;
}

.art__crumb-end {
  color: #333;
}

.art__title {
  margin: 0 0 14px;
  font-size: 24px;
  line-height: 1.45;
  font-weight: 800;
  color: #111;
}

.art__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 13px;
  color: #666;
}

.art__body {
  background: #fff;
  padding: 28px 24px 32px;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.art__p {
  margin: 0 0 16px;
  font-size: 15px;
  line-height: 1.85;
  color: #333;
}

.art__h3 {
  margin: 22px 0 12px;
  font-size: 17px;
  font-weight: 700;
  color: #111;
}

.art__table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 24px;
  font-size: 14px;
  border: 1px solid #ddd;
}

.art__table th,
.art__table td {
  border: 1px solid #ddd;
  padding: 10px 12px;
  text-align: left;
}

.art__table thead th {
  background: #f7f7f7;
  font-weight: 700;
}

.art__table tbody td:first-child {
  font-weight: 600;
  color: #222;
}

.art__actions {
  margin: 20px 0 8px;
}

.art__fav {
  padding: 8px 20px;
  border: 1px solid var(--color-primary, #c8161d);
  background: #fff;
  color: var(--color-primary, #c8161d);
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

.art__fav:hover {
  background: #fff5f5;
}

.art__prev {
  margin: 20px 0 0;
  font-size: 14px;
  color: #555;
}

.art__prev-a {
  color: #2a7fff;
  text-decoration: none;
}

.art__prev-a:hover {
  text-decoration: underline;
}

.art__related {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e5e5e5;
}

.art__sec-title {
  margin: 0 0 14px;
  font-size: 18px;
  font-weight: 700;
  color: #111;
}

.art__related-list {
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
}

.art__related-li {
  margin-bottom: 10px;
  font-size: 14px;
}

.art__related-a {
  color: #2a7fff;
  text-decoration: none;
}

.art__related-a:hover {
  text-decoration: underline;
}

.art__related-span {
  color: #555;
}

.art__consult {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.art__linkish {
  padding: 0;
  border: none;
  background: none;
  color: #2a7fff;
  text-decoration: underline;
  cursor: pointer;
  font-size: inherit;
}

.art__courses {
  margin-top: 32px;
}

.art__courses-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--color-primary, #c8161d);
}

.art__more {
  font-size: 13px;
  color: #888;
}

.art__course-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.art__course-item {
  display: flex;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px dashed #ddd;
}

.art__course-thumb {
  flex-shrink: 0;
  width: 120px;
}

.art__course-thumb :deep(.ph__img) {
  width: 120px;
  height: auto;
}

.art__course-name {
  margin: 0 0 6px;
  font-size: 14px;
  line-height: 1.45;
  font-weight: 600;
}

.art__course-meta {
  margin: 0;
  font-size: 12px;
  color: #888;
}
</style>
