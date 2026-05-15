<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import PageResourceImg from '../components/PageResourceImg.vue'
import { PAGE_DIR, pageImageIdPart } from '../utils/pageResource.js'
import { getGongjuTool } from '../data/gongjuTools.js'

const route = useRoute()
const tool = computed(() => getGongjuTool(route.params.id))
</script>

<template>
  <SiteHeader />
  <main v-if="tool" class="gt">
    <div class="container gt__inner">
      <nav class="gt__crumb" aria-label="面包屑">
        <RouterLink to="/gongju">学习工具</RouterLink>
        <span class="gt__sep">＞</span>
        <span>{{ tool.crumbCat }}</span>
        <span class="gt__sep">＞</span>
        <span class="gt__end">{{ tool.name }}</span>
      </nav>

      <header class="gt__head">
        <div class="gt__thumb">
          <PageResourceImg
            :src="pageImageIdPart(PAGE_DIR.P13, 'p13', route.params.id, 'icon')"
            :alt="tool.name"
            ratio="1"
          />
        </div>
        <div class="gt__head-body">
          <h1 class="gt__title">{{ tool.name }}</h1>
          <ul class="gt__meta">
            <li><strong>软件大小：</strong>{{ tool.size }}</li>
            <li><strong>应用平台：</strong>{{ tool.platform }}</li>
            <li>
              <strong>软件类型：</strong>{{ tool.toolType }}
              <span class="gt__dl-count">{{ tool.downloadsLine }}</span>
            </li>
          </ul>
          <div class="gt__actions">
            <button type="button" class="gt__btn gt__btn--primary">立即下载</button>
            <button type="button" class="gt__btn gt__btn--ghost">收藏工具</button>
          </div>
        </div>
      </header>

      <section class="gt__section" aria-labelledby="intro-h">
        <h2 id="intro-h" class="gt__h2">软件介绍</h2>
        <div class="gt__intro">
          <p v-for="(p, i) in tool.introParas" :key="i" class="gt__p">{{ p }}</p>
        </div>
      </section>

      <section v-if="tool.related?.length" class="gt__section" aria-labelledby="rel-h">
        <h3 id="rel-h" class="gt__h3">相关工具推荐</h3>
        <ul class="gt__related">
          <li v-for="(r, ri) in tool.related" :key="ri">
            <RouterLink v-if="r.id !== route.params.id" class="gt__related-a" :to="`/gongju/${r.id}`">&gt; {{ r.title }}</RouterLink>
            <span v-else class="gt__related-cur">&gt; {{ r.title }}</span>
          </li>
        </ul>
        <p class="gt__consult">获取更多相关资源 <button type="button" class="gt__link">点击咨询</button></p>
      </section>

      <section v-if="tool.courses?.length" class="gt__section" aria-labelledby="course-h">
        <div class="gt__course-head">
          <h2 id="course-h" class="gt__h2">相关课程推荐</h2>
          <span class="gt__more">更多&gt;&gt;</span>
        </div>
        <ul class="gt__course-list">
          <li v-for="(c, ci) in tool.courses" :key="ci" class="gt__course-item">
            <PageResourceImg
              :src="pageImageIdPart(PAGE_DIR.P13, 'p13', route.params.id, 'course')"
              :alt="c.title"
              ratio="120 / 68"
              img-class="gt__course-thumb"
            />
            <div>
              <p class="gt__course-name">{{ c.title }}</p>
              <p class="gt__course-meta">{{ c.level }} · {{ c.learners }}人学习 · {{ c.score }}</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
  <main v-else class="gt gt--missing">
    <div class="container gt__inner">
      <p>未找到该工具。</p>
      <RouterLink to="/gongju">返回学习工具</RouterLink>
    </div>
  </main>
  <SiteFooter />
</template>

<style scoped>
.gt {
  background: #f5f5f5;
  min-height: 50vh;
}

.gt__inner {
  max-width: 960px;
  padding: 20px 16px 48px;
}

.gt--missing {
  padding: 40px 16px;
  text-align: center;
}

.gt__crumb {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}

.gt__crumb a {
  color: #2a7fff;
  text-decoration: none;
}

.gt__crumb a:hover {
  text-decoration: underline;
}

.gt__sep {
  margin: 0 6px;
  color: #999;
}

.gt__end {
  color: #333;
  font-weight: 600;
}

.gt__head {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 24px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  margin-bottom: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.gt__thumb {
  width: 120px;
  flex-shrink: 0;
}

.gt__thumb :deep(.ph__img) {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.gt__head-body {
  flex: 1;
  min-width: 200px;
}

.gt__title {
  margin: 0 0 14px;
  font-size: 26px;
  font-weight: 800;
  color: #111;
}

.gt__meta {
  margin: 0 0 18px;
  padding: 0;
  list-style: none;
  font-size: 14px;
  line-height: 1.8;
  color: #444;
}

.gt__dl-count {
  margin-left: 8px;
  color: var(--color-muted, #666);
}

.gt__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.gt__btn {
  padding: 10px 28px;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid transparent;
}

.gt__btn--primary {
  background: var(--color-primary, #c8161d);
  color: #fff;
  border-color: var(--color-primary, #c8161d);
}

.gt__btn--primary:hover {
  filter: brightness(1.05);
}

.gt__btn--ghost {
  background: #fff;
  color: var(--color-primary, #c8161d);
  border-color: var(--color-primary, #c8161d);
}

.gt__btn--ghost:hover {
  background: #fff5f5;
}

.gt__section {
  margin-bottom: 28px;
  padding: 22px 24px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
}

.gt__h2 {
  margin: 0 0 14px;
  font-size: 18px;
  font-weight: 700;
  color: #111;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--color-primary, #c8161d);
}

.gt__h3 {
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 700;
  color: #222;
}

.gt__p {
  margin: 0 0 14px;
  font-size: 15px;
  line-height: 1.85;
  color: #333;
}

.gt__p:last-child {
  margin-bottom: 0;
}

.gt__related {
  margin: 0 0 12px;
  padding-left: 1.1em;
  font-size: 14px;
}

.gt__related-a {
  color: #2a7fff;
  text-decoration: none;
}

.gt__related-a:hover {
  text-decoration: underline;
}

.gt__related-cur {
  color: #666;
}

.gt__consult {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.gt__link {
  padding: 0;
  border: none;
  background: none;
  color: #2a7fff;
  text-decoration: underline;
  cursor: pointer;
  font-size: inherit;
}

.gt__course-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.gt__more {
  font-size: 13px;
  color: #888;
}

.gt__course-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.gt__course-item {
  display: flex;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px dashed #e0e0e0;
}

.gt__course-thumb {
  width: 120px;
  flex-shrink: 0;
}

.gt__course-thumb :deep(.ph__img) {
  width: 120px;
  height: auto;
}

.gt__course-name {
  margin: 0 0 6px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.45;
}

.gt__course-meta {
  margin: 0;
  font-size: 12px;
  color: #888;
}
</style>
