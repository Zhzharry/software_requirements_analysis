<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import PlaceholderImage from '../components/PlaceholderImage.vue'
import LoginDemoModal from '../components/LoginDemoModal.vue'
import { useDemoAuth } from '../composables/useDemoAuth.js'
import { COLLEGE_BUPT_URL } from '../navigation.js'

const showLogin = ref(false)
const { user, isLoggedIn, logout } = useDemoAuth()

/** 与官网导航相近的一级入口；有 to 的为可点击链接 */
const topMenus = [
  { label: '精品课程', to: '/map/22' },
  { label: '师资力量', to: '/teacher', blank: true },
  { label: '开班详情', to: '/school', blank: true },
  { label: '学费价格', to: '/price', blank: true },
  { label: '就业服务', to: '/service', blank: true },
  /** 外站：北京邮电大学官网（不仿站，直接跳转） */
  { label: '报考大学', external: COLLEGE_BUPT_URL },
  { label: '免费教程', to: '/map/22' },
]

const subjectCols = [
  'AI智能应用开发',
  'AI大模型开发（Python）',
  'AI鸿蒙开发',
  'AI嵌入式+机器人开发',
  'AI运维',
  'AI测试',
  '跨境电商运营',
  'AI设计',
  'AI视频创作与直播运营',
  '微短剧拍摄剪辑',
  'AI大数据开发',
  '前端开发',
]
</script>

<template>
  <div class="portal">
    <div class="portal__notice">
      <div class="container portal__notice-inner">
        <span>A股上市公司传智教育（股票代码 003032）旗下高端IT教育品牌</span>
        <span>全国咨询/投诉热线：400-618-4000 · 举报邮箱：mc@itcast.cn</span>
      </div>
    </div>

    <header class="portal__head">
      <div class="container portal__head-inner">
        <div class="portal__brand">
          <PlaceholderImage ratio="160 / 48" />
          <div>
            <h1 class="portal__logo-title">黑马程序员</h1>
            <p class="portal__logo-sub">好口碑IT培训机构</p>
          </div>
        </div>
        <div class="portal__head-right">
          <nav class="portal__menus" aria-label="官网主导航">
            <template v-for="(m, i) in topMenus" :key="i">
              <a
                v-if="m.external"
                class="portal__menu-item portal__menu-item--link"
                :href="m.external"
                target="_blank"
                rel="noopener noreferrer"
              >{{ m.label }}</a>
              <RouterLink
                v-else-if="m.to"
                class="portal__menu-item portal__menu-item--link"
                :to="m.to"
                :target="m.blank ? '_blank' : undefined"
                :rel="m.blank ? 'noopener noreferrer' : undefined"
              >{{ m.label }}</RouterLink>
              <span v-else class="portal__menu-item">{{ m.label }}</span>
            </template>
          </nav>
          <div class="portal__account">
            <template v-if="isLoggedIn">
              <span class="portal__hello">你好，{{ user }}</span>
              <button type="button" class="portal__btn-logout" @click="logout">退出</button>
            </template>
            <button v-else type="button" class="portal__btn-login" @click="showLogin = true">登录</button>
          </div>
        </div>
      </div>
    </header>

    <LoginDemoModal v-model:open="showLogin" />

    <section class="portal__hero" aria-label="首屏">
      <PlaceholderImage ratio="21 / 8" />
      <div class="container portal__hero-cap">
        <p class="portal__hero-tag">全面拥抱AI · 培养新质人才</p>
        <p class="portal__hero-lead">黑马程序员 AI+全程赋能教学 · 大厂深度合作 · 人才培养模式</p>
        <div class="portal__hero-actions">
          <RouterLink class="portal__btn portal__btn--primary" to="/yun" target="_blank" rel="noopener noreferrer">
            进入视频库（yun 原型）
          </RouterLink>
          <RouterLink class="portal__btn" to="/teacher" target="_blank" rel="noopener noreferrer">教研团队</RouterLink>
        </div>
      </div>
    </section>

    <section class="portal__section">
      <div class="container">
        <h2 class="portal__h2">精品学科体系（示意）</h2>
        <div class="portal__subject-grid">
          <div v-for="(s, i) in subjectCols" :key="i" class="portal__subject-card">
            <PlaceholderImage ratio="16 / 9" />
            <p class="portal__subject-name">{{ s }}</p>
            <span class="portal__muted">课程大纲 · 就业薪资 · 免费教程 · 教研团队</span>
          </div>
        </div>
      </div>
    </section>

    <section class="portal__section portal__section--muted">
      <div class="container">
        <h2 class="portal__h2">学生风采 · 30万+学员逆袭（占位）</h2>
        <PlaceholderImage ratio="1200 / 320" />
      </div>
    </section>

    <section class="portal__section">
      <div class="container">
        <h2 class="portal__h2">课程研发 · 五库模式（占位）</h2>
        <p class="portal__muted">
          高度对接企业需求、课程实时迭代；亿元级专职课研团队（文案占位，完整布局见原站
          <a href="https://www.itheima.com/?spk" target="_blank" rel="noopener noreferrer">itheima.com</a>
          ）。
        </p>
      </div>
    </section>

    <footer class="portal__footer">
      <div class="container">
        <p>传智教育（股票代码003032）旗下高端IT教育品牌</p>
        <p class="portal__muted">江苏传智播客教育科技股份有限公司 · 苏ICP备16007882号-1 · 苏公网安备32132202000574号</p>
        <RouterLink class="portal__footer-link" to="/yun">视频教程库原型 /yun</RouterLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.portal {
  min-height: 100vh;
  background: #fff;
  color: #333;
}

.portal__notice {
  background: #f5f5f5;
  font-size: 12px;
  padding: 8px 0;
  color: #555;
}

.portal__notice-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}

.portal__head {
  border-bottom: 1px solid #eee;
  padding: 16px 0;
}

.portal__head-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.portal__head-right {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 24px;
}

.portal__account {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.portal__hello {
  font-size: 14px;
  color: #333;
}

.portal__btn-login {
  padding: 8px 22px;
  border: none;
  border-radius: 4px;
  background: var(--color-primary);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.portal__btn-login:hover {
  filter: brightness(1.06);
}

.portal__btn-logout {
  padding: 6px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  font-size: 13px;
  cursor: pointer;
}

.portal__btn-logout:hover {
  background: #f5f5f5;
}

.portal__brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.portal__logo-title {
  margin: 0;
  font-size: 22px;
  color: var(--color-primary);
}

.portal__logo-sub {
  margin: 4px 0 0;
  font-size: 13px;
  color: #888;
}

.portal__menus {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
}

.portal__menu-item {
  font-size: 14px;
  cursor: default;
}

.portal__menu-item:hover {
  color: var(--color-primary);
}

.portal__menu-item--link {
  text-decoration: none;
  color: inherit;
}

.portal__menu-item--link:hover {
  color: var(--color-primary);
}

.portal__hero {
  position: relative;
}

.portal__hero :deep(.ph__img) {
  width: 100%;
  display: block;
}

.portal__hero-cap {
  padding: 24px 16px 32px;
}

.portal__hero-tag {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}

.portal__hero-lead {
  margin: 0 0 16px;
  font-size: 14px;
  color: #555;
}

.portal__hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.portal__btn {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  text-decoration: none;
  font-size: 14px;
}

.portal__btn--primary {
  background: var(--color-primary);
  color: #fff;
}

.portal__section {
  padding: 36px 0;
}

.portal__section--muted {
  background: #fafafa;
}

.portal__h2 {
  margin: 0 0 20px;
  font-size: 20px;
}

.portal__subject-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.portal__subject-card {
  border: 1px solid #eee;
  padding: 10px;
  background: #fff;
}

.portal__subject-name {
  margin: 10px 0 6px;
  font-weight: 600;
  font-size: 14px;
}

.portal__muted {
  font-size: 12px;
  color: #888;
  line-height: 1.5;
}

.portal__footer {
  padding: 28px 16px;
  background: #2b2b2b;
  color: #aaa;
  font-size: 13px;
  text-align: center;
}

.portal__footer-link {
  display: inline-block;
  margin-top: 12px;
  color: #8cf;
}

.portal__footer a {
  color: var(--color-primary);
}
</style>
