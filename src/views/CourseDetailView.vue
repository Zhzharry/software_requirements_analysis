<script setup>
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import PlaceholderImage from '../components/PlaceholderImage.vue'
import { getCourseDetail } from '../data/courseDetails.js'

const route = useRoute()
const course = computed(() => getCourseDetail(route.params.id))

const tab = ref('syllabus')
const tabs = [
  { id: 'intro', label: '课程介绍' },
  { id: 'syllabus', label: '课程目录' },
  { id: 'comments', label: '课程评论' },
]

const activeLesson = ref(0)
</script>

<template>
  <SiteHeader />
  <main v-if="course" class="cd">
    <div class="container cd__wrap">
      <div class="cd__main">
        <h1 class="cd__title">{{ course.title }}<span class="cd__title-sub">{{ course.titleSuffix }}</span></h1>
        <div class="cd__bar">
          <span class="cd__date">更新日期：{{ course.updatedAt }}</span>
          <nav class="cd__crumb" aria-label="面包屑">
            <RouterLink to="/yun">视频教程</RouterLink>
            <span class="cd__sep">＞</span>
            <span>{{ course.crumb[1] }}</span>
          </nav>
        </div>

        <div class="cd__player">
          <PlaceholderImage ratio="16 / 9" />
          <button type="button" class="cd__play-btn" aria-label="播放">▶</button>
        </div>

        <div class="cd__tabs" role="tablist">
          <button
            v-for="t in tabs"
            :key="t.id"
            type="button"
            role="tab"
            class="cd__tab"
            :class="{ 'cd__tab--on': tab === t.id }"
            :aria-selected="tab === t.id"
            @click="tab = t.id"
          >{{ t.label }}</button>
        </div>

        <div v-show="tab === 'intro'" class="cd__panel">
          <div v-for="(b, i) in course.introBlocks" :key="i" class="cd__intro-block">
            <p class="cd__intro-label">{{ b.label }}</p>
            <p class="cd__intro-text">{{ b.text }}</p>
          </div>
        </div>

        <div v-show="tab === 'syllabus'" class="cd__panel cd__panel--syllabus">
          <ul class="cd__lessons">
            <li
              v-for="(line, i) in course.syllabus"
              :key="i"
              class="cd__lesson"
              :class="{ 'cd__lesson--on': i === activeLesson }"
              @click="activeLesson = i"
            >
              <span class="cd__lesson-ico" aria-hidden="true">▶</span>
              <span class="cd__lesson-txt">{{ line }}</span>
              <span class="cd__lesson-act">开始学习</span>
            </li>
          </ul>
          <p class="cd__more-chapters">更多章节请下载完整视频观看 &gt;&gt;</p>
        </div>

        <div v-show="tab === 'comments'" class="cd__panel">
          <p class="cd__score-line"><strong>综合评分 4.8</strong> · 13人已评分 · <button type="button" class="cd__link-btn">我也要评分</button></p>
          <p class="cd__hint">评论打分你觉得老师讲的怎么样？</p>
          <ul class="cd__comments">
            <li v-for="(c, i) in course.comments" :key="i" class="cd__comment">
              <div class="cd__comment-hd">
                <strong>{{ c.user }}</strong>
                <span class="cd__comment-like">{{ c.likes }}</span>
                <span class="cd__comment-date">{{ c.date }}</span>
              </div>
              <p class="cd__comment-body">{{ c.text }}</p>
              <p v-if="c.reply" class="cd__comment-reply">管理员回复：{{ c.reply }}</p>
            </li>
          </ul>
          <button type="button" class="cd__load-more">加载更多</button>
        </div>

        <section class="cd__related">
          <div class="cd__related-head">
            <h2 class="cd__h2">相关课程推荐</h2>
            <span class="cd__more-link">更多&gt;&gt;</span>
          </div>
          <ul class="cd__related-list">
            <li v-for="(r, ri) in course.relatedCourses" :key="ri" class="cd__related-li">
              <RouterLink class="cd__related-a" :to="`/course/${course.id}`">{{ r.title }}</RouterLink>
              <span class="cd__related-meta">{{ r.level }} · {{ r.learners }}人学习</span>
            </li>
          </ul>
        </section>
      </div>

      <aside class="cd__side">
        <div class="cd__res-box">
          <h3 class="cd__res-h">全套视频教程及资料</h3>
          <div class="cd__res-grid">
            <button v-for="(r, i) in course.resourceTiles" :key="i" type="button" class="cd__res-item" :data-tone="r.tone">
              <span class="cd__res-dot" />
              {{ r.label }}
            </button>
          </div>
        </div>
        <button type="button" class="cd__btn-dl">一键免费下载</button>
        <div class="cd__qr">
          <PlaceholderImage ratio="1" />
          <p class="cd__qr-tip">扫码关注，回复关键词，马上领取全套视频资源！</p>
        </div>
        <section class="cd__notice">
          <h3 class="cd__notice-h">课程须知</h3>
          <p class="cd__notice-p">{{ course.notice }}</p>
        </section>
        <div class="cd__stats">
          <span class="cd__stat"><span class="cd__stat-ico" aria-hidden="true">👤</span>{{ course.learnCount }}人已学习</span>
          <button type="button" class="cd__fav">☆ 收藏课程</button>
        </div>
        <div class="cd__share">
          <span class="cd__share-label">分享</span>
          <span class="cd__share-ico" title="微博">微</span>
          <span class="cd__share-ico" title="QQ空间">Q</span>
          <span class="cd__share-ico" title="微信">信</span>
        </div>
        <div class="cd__ad">
          <PlaceholderImage ratio="280 / 100" />
          <div class="cd__ad-cap">
            <span>大同数据科技职业学院</span>
            <button type="button" class="cd__ad-btn">快速领取</button>
          </div>
        </div>
      </aside>
    </div>
  </main>
  <main v-else class="cd cd--missing">
    <div class="container">
      <p>未找到该课程。</p>
      <RouterLink to="/yun">返回视频库</RouterLink>
    </div>
  </main>
  <SiteFooter />
</template>

<style scoped>
.cd {
  background: #f5f5f5;
  padding-bottom: 40px;
}

.cd__wrap {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 24px;
  align-items: start;
  padding-top: 20px;
}

@media (max-width: 960px) {
  .cd__wrap {
    grid-template-columns: 1fr;
  }
}

.cd__title {
  margin: 0 0 12px;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.45;
  font-weight: 800;
  color: #111;
}

.cd__title-sub {
  font-weight: 600;
  color: #555;
  margin-left: 6px;
}

.cd__bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 14px;
  font-size: 13px;
  color: #666;
}

.cd__crumb a {
  color: #2a7fff;
  text-decoration: none;
}

.cd__crumb a:hover {
  text-decoration: underline;
}

.cd__sep {
  margin: 0 4px;
  color: #999;
}

.cd__player {
  position: relative;
  background: #1a1a1a;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0;
}

.cd__player :deep(.ph__img) {
  width: 100%;
  display: block;
  opacity: 0.85;
}

.cd__play-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding-left: 6px;
}

.cd__tabs {
  display: flex;
  gap: 0;
  margin-top: 0;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-top: none;
}

.cd__tab {
  flex: 1;
  max-width: 140px;
  padding: 14px 12px;
  border: none;
  border-bottom: 3px solid transparent;
  background: #fafafa;
  font-size: 15px;
  color: #333;
  cursor: pointer;
}

.cd__tab--on {
  color: var(--color-primary, #c8161d);
  border-bottom-color: var(--color-primary, #c8161d);
  background: #fff;
  font-weight: 700;
}

.cd__panel {
  background: #fff;
  border: 1px solid #e5e5e5;
  border-top: none;
  padding: 20px 18px 24px;
  min-height: 120px;
}

.cd__panel--syllabus {
  background: #fafafa;
}

.cd__intro-block {
  margin-bottom: 16px;
}

.cd__intro-label {
  margin: 0 0 6px;
  font-weight: 700;
  font-size: 15px;
}

.cd__intro-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  color: #444;
  white-space: pre-line;
}

.cd__lessons {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cd__lesson {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 12px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  font-size: 14px;
}

.cd__lesson:hover {
  background: #fff;
}

.cd__lesson--on {
  background: #fff;
  border-left: 3px solid var(--color-primary, #c8161d);
  padding-left: 9px;
}

.cd__lesson--on .cd__lesson-ico {
  color: #333;
}

.cd__lesson-ico {
  flex-shrink: 0;
  color: #ccc;
  font-size: 12px;
}

.cd__lesson-txt {
  flex: 1;
  min-width: 0;
}

.cd__lesson-act {
  flex-shrink: 0;
  font-size: 12px;
  color: #2a7fff;
}

.cd__more-chapters {
  margin: 16px 0 0;
  font-size: 13px;
  color: #2a7fff;
  cursor: default;
}

.cd__score-line {
  margin: 0 0 10px;
  font-size: 14px;
}

.cd__link-btn {
  padding: 0;
  border: none;
  background: none;
  color: #2a7fff;
  cursor: pointer;
  text-decoration: underline;
  font-size: inherit;
}

.cd__hint {
  margin: 0 0 16px;
  color: #888;
  font-size: 13px;
}

.cd__comments {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cd__comment {
  padding: 14px 0;
  border-bottom: 1px dashed #e0e0e0;
}

.cd__comment-hd {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  font-size: 13px;
  margin-bottom: 8px;
}

.cd__comment-like {
  color: #999;
}

.cd__comment-date {
  margin-left: auto;
  color: #aaa;
  font-size: 12px;
}

.cd__comment-body {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

.cd__comment-reply {
  margin: 10px 0 0;
  padding: 10px 12px;
  background: #f7f7f7;
  font-size: 13px;
  color: #555;
  border-radius: 4px;
}

.cd__load-more {
  margin-top: 16px;
  padding: 8px 20px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  font-size: 13px;
}

.cd__related {
  margin-top: 28px;
  padding: 20px 18px;
  background: #fff;
  border: 1px solid #e5e5e5;
}

.cd__related-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--color-primary, #c8161d);
}

.cd__h2 {
  margin: 0;
  font-size: 17px;
}

.cd__more-link {
  font-size: 13px;
  color: #888;
}

.cd__related-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cd__related-li {
  padding: 10px 0;
  border-bottom: 1px dashed #eee;
  font-size: 14px;
}

.cd__related-a {
  color: #2a7fff;
  text-decoration: none;
}

.cd__related-a:hover {
  text-decoration: underline;
}

.cd__related-meta {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: #888;
}

.cd__side {
  position: sticky;
  top: 80px;
}

.cd__res-box {
  background: #f0f0f0;
  padding: 14px 12px;
  border-radius: 4px;
  margin-bottom: 14px;
}

.cd__res-h {
  margin: 0 0 12px;
  font-size: 15px;
  text-align: center;
  color: #333;
}

.cd__res-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.cd__res-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #fff;
  font-size: 13px;
  cursor: default;
  text-align: left;
}

.cd__res-dot {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  flex-shrink: 0;
}

.cd__res-item[data-tone='blue'] .cd__res-dot {
  background: #2a7fff;
}

.cd__res-item[data-tone='red'] .cd__res-dot {
  background: #e4393c;
}

.cd__res-item[data-tone='green'] .cd__res-dot {
  background: #1a9c5c;
}

.cd__res-item[data-tone='orange'] .cd__res-dot {
  background: #ff8800;
}

.cd__res-item[data-tone='purple'] .cd__res-dot {
  background: #8844cc;
}

.cd__btn-dl {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 14px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(180deg, #ff4040 0%, #c8161d 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(200, 22, 29, 0.35);
}

.cd__btn-dl:hover {
  filter: brightness(1.05);
}

.cd__qr {
  margin-bottom: 16px;
  text-align: center;
}

.cd__qr :deep(.ph) {
  max-width: 160px;
  margin: 0 auto;
}

.cd__qr-tip {
  margin: 8px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: #555;
}

.cd__notice {
  background: #fff;
  border: 1px solid #e8e8e8;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 14px;
}

.cd__notice-h {
  margin: 0 0 8px;
  font-size: 15px;
}

.cd__notice-p {
  margin: 0;
  font-size: 13px;
  line-height: 1.65;
  color: #555;
}

.cd__stats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 14px;
}

.cd__stat-ico {
  margin-right: 4px;
}

.cd__fav {
  padding: 0;
  border: none;
  background: none;
  color: #2a7fff;
  cursor: pointer;
  font-size: 14px;
}

.cd__share {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 13px;
  color: #666;
}

.cd__share-ico {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background: #eee;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: default;
}

.cd__ad {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #e5e5e5;
}

.cd__ad :deep(.ph__img) {
  width: 100%;
  display: block;
}

.cd__ad-cap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.65));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 13px;
}

.cd__ad-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background: #ff6600;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
}

.cd--missing {
  padding: 40px 16px;
  text-align: center;
}
</style>
