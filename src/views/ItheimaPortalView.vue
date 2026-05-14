<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import PlaceholderImage from '../components/PlaceholderImage.vue'
import LoginDemoModal from '../components/LoginDemoModal.vue'
import { useDemoAuth } from '../composables/useDemoAuth.js'
import { COLLEGE_BUPT_URL } from '../navigation.js'

const showLogin = ref(false)
const { user, isLoggedIn, logout } = useDemoAuth()

const topMenus = [
  { label: '精品课程', to: '/map/22' },
  { label: '师资力量', to: '/teacher', blank: true },
  { label: '开班详情', to: '/school', blank: true },
  { label: '学费价格', to: '/price', blank: true },
  { label: '就业服务', to: '/service', blank: true },
  { label: '报考大学', external: COLLEGE_BUPT_URL },
  { label: '免费教程', to: '/map/22' },
]

const heroSidebarCats = [
  'AI智能应用开发',
  'AI大模型（Python）',
  'AI鸿蒙开发',
  'JavaEE',
  '前端与移动开发',
  'Python+大数据',
  '软件测试',
  '嵌入式',
]

const quickLinks = [
  { label: '就业薪资', to: '/price' },
  { label: '实战项目', to: '/map/22' },
  { label: '学员社区', to: '/yun' },
  { label: '关于白马', to: '/yun' },
]

const journeyCards = [
  {
    title: '新手入门',
    desc: '零基础体系化培养，快速建立学习信心与职业认知。',
  },
  {
    title: '专业提升',
    desc: '对标企业真实场景，强化项目实战与工程化能力。',
  },
  {
    title: '在职进阶',
    desc: '弹性学习节奏，助力在职人群平滑转型热门方向。',
  },
]

const subjectTabs = [
  'AI智能应用开发',
  'AI大模型开发',
  'AI后端开发',
  'AI鸿蒙开发',
  'AI嵌入式',
  'AI测试',
  'AI运维',
  'AI设计',
]

const activeSubject = ref(0)

const classRows = [
  { city: '北京昌平', date: '2026-05-18', status: '报名中' },
  { city: '上海校区', date: '2026-05-22', status: '报名中' },
  { city: '深圳校区', date: '2026-05-28', status: '可插班' },
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
          <div class="portal__logo-mark" aria-hidden="true" />
          <div>
            <h1 class="portal__logo-title">白马程序员</h1>
            <p class="portal__logo-sub">好口碑IT培训机构</p>
          </div>
        </div>
        <p class="portal__slogan">70%学员来自口碑推荐</p>
        <div class="portal__head-actions">
          <div class="portal__location" title="校区选择（示意）">
            <svg class="portal__pin" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              />
            </svg>
            <span>全国中心</span>
          </div>
          <div class="portal__account">
            <template v-if="isLoggedIn">
              <span class="portal__hello">你好，{{ user }}</span>
              <button type="button" class="portal__btn-logout" @click="logout">退出</button>
            </template>
            <button v-else type="button" class="portal__btn-login" @click="showLogin = true">登录</button>
          </div>
        </div>
      </div>

      <div class="portal__nav-wrap">
        <div class="container portal__nav-inner">
          <nav class="portal__menus" aria-label="官网主导航">
            <template v-for="(m, i) in topMenus" :key="i">
              <a
                v-if="m.external"
                class="portal__menu-item"
                :class="{ 'portal__menu-item--pill': i === 0 }"
                :href="m.external"
                target="_blank"
                rel="noopener noreferrer"
              >{{ m.label }}</a>
              <RouterLink
                v-else-if="m.to"
                class="portal__menu-item"
                :class="{ 'portal__menu-item--pill': i === 0 }"
                :to="m.to"
                :target="m.blank ? '_blank' : undefined"
                :rel="m.blank ? 'noopener noreferrer' : undefined"
              >{{ m.label }}</RouterLink>
              <span v-else class="portal__menu-item">{{ m.label }}</span>
            </template>
          </nav>
        </div>
      </div>
    </header>

    <LoginDemoModal v-model:open="showLogin" />

    <section class="portal__hero" aria-label="首屏">
      <div class="portal__hero-deco" aria-hidden="true" />
      <div class="container portal__hero-layout">
        <aside class="portal__hero-side" aria-label="学科分类">
          <ul>
            <li v-for="(c, i) in heroSidebarCats" :key="i">{{ c }}</li>
          </ul>
        </aside>
        <div class="portal__hero-main">
          <p class="portal__hero-brandline">
            <span class="portal__hero-ai">AI</span>
            <span class="portal__hero-cz">传智AI</span>
          </p>
          <h2 class="portal__hero-title">一站式「AI+行业应用」职业技能培训</h2>
          <p class="portal__hero-sub">
            实战化 / 场景化 / 轻量化教学 · 零基础轻松入门AI+热门行业
          </p>
          <div class="portal__hero-actions">
            <RouterLink class="portal__btn portal__btn--primary" to="/yun" target="_blank" rel="noopener noreferrer">
              进入视频库
            </RouterLink>
            <RouterLink class="portal__btn portal__btn--ghost" to="/teacher" target="_blank" rel="noopener noreferrer">
              教研团队
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="portal__quick">
      <div class="container portal__quick-inner">
        <div class="portal__quick-links">
          <RouterLink
            v-for="(q, i) in quickLinks"
            :key="i"
            class="portal__quick-a"
            :to="q.to"
          >
            <span class="portal__quick-ico" aria-hidden="true" />
            {{ q.label }}
          </RouterLink>
        </div>
        <div class="portal__quick-cards">
          <div v-for="(j, i) in journeyCards" :key="i" class="portal__journey-card">
            <div>
              <h3 class="portal__journey-title">{{ j.title }}</h3>
              <p class="portal__journey-desc">{{ j.desc }}</p>
            </div>
            <span class="portal__journey-arrow" aria-hidden="true">›</span>
          </div>
        </div>
      </div>
    </section>

    <section class="portal__hot">
      <div class="container">
        <h2 class="portal__hot-title">热门精品课程 开启你的逆袭之路</h2>
        <div class="portal__hot-tabs" role="tablist">
          <button
            v-for="(t, i) in subjectTabs"
            :key="i"
            type="button"
            class="portal__hot-tab"
            :class="{ 'portal__hot-tab--active': activeSubject === i }"
            role="tab"
            :aria-selected="activeSubject === i"
            @click="activeSubject = i"
          >
            <span class="portal__hot-tab-ico" aria-hidden="true" />
            <span class="portal__hot-tab-text">{{ t }}</span>
          </button>
        </div>
      </div>
    </section>

    <section class="portal__showcase">
      <div class="container">
        <div class="portal__course-card">
          <div class="portal__course-strip">
            <p class="portal__course-strip-k">20-50K</p>
            <p class="portal__course-strip-label">月均薪资参考</p>
            <p class="portal__course-strip-num">14200元</p>
            <p class="portal__course-strip-note">示例数据</p>
            <div class="portal__course-strip-icon" aria-hidden="true" />
          </div>
          <div class="portal__course-body">
            <div class="portal__course-top">
              <div>
                <h3 class="portal__course-h3">{{ subjectTabs[activeSubject] }}</h3>
                <p class="portal__course-lead">
                  从基础语法到企业级项目交付，覆盖主流技术栈与AI应用落地能力。
                </p>
              </div>
              <div class="portal__course-sidebtns">
                <RouterLink to="/teacher" class="portal__mini-btn" target="_blank" rel="noopener noreferrer">师资力量</RouterLink>
                <RouterLink to="/map/22" class="portal__mini-btn" target="_blank" rel="noopener noreferrer">课程大纲</RouterLink>
                <button type="button" class="portal__trial-btn">申请免费试听</button>
              </div>
            </div>
            <div class="portal__course-mid">
              <div class="portal__flow">
                <div class="portal__flow-step">
                  <span class="portal__flow-d">35天</span>
                  <span class="portal__flow-t">基础强化</span>
                </div>
                <span class="portal__flow-arrow">→</span>
                <div class="portal__flow-step">
                  <span class="portal__flow-d">50天</span>
                  <span class="portal__flow-t">项目实战</span>
                </div>
                <span class="portal__flow-arrow">→</span>
                <div class="portal__flow-step">
                  <span class="portal__flow-d">进阶</span>
                  <span class="portal__flow-t">就业辅导</span>
                </div>
              </div>
            </div>
            <div class="portal__course-bottom">
              <div class="portal__adv">
                <h4 class="portal__adv-h">课程优势</h4>
                <ul>
                  <li>大厂级项目案例与代码规范</li>
                  <li>阶段性测评与个性化学习路径</li>
                  <li>就业指导与模拟面试（示意）</li>
                </ul>
              </div>
              <div class="portal__open-table-wrap">
                <h4 class="portal__adv-h">开班信息</h4>
                <table class="portal__open-table">
                  <thead>
                    <tr>
                      <th>校区</th>
                      <th>开班日期</th>
                      <th>状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, i) in classRows" :key="i">
                      <td>{{ row.city }}</td>
                      <td>{{ row.date }}</td>
                      <td><span class="portal__status">{{ row.status }}</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="portal__section">
      <div class="container">
        <h2 class="portal__h2">学生风采 · 30万+学员逆袭（占位）</h2>
        <PlaceholderImage ratio="1200 / 320" />
      </div>
    </section>

    <section class="portal__cta-banner" aria-label="品牌主张">
      <div class="container portal__cta-inner">
        打造懂业务、懂行业方案、懂AI的智能软件开发人才
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
  --portal-red: var(--color-primary, #c8161d);
  --portal-red-dark: var(--color-primary-dark, #a11218);
  --portal-hero-blue: #e3f2fd;
  --portal-hero-blue2: #f0f7ff;
  --portal-text: #1a1a1a;
  --portal-muted: #666;
  min-height: 100vh;
  background: #fff;
  color: var(--portal-text);
}

.portal__notice {
  background: #eceff1;
  font-size: 12px;
  padding: 7px 0;
  color: #555;
}

.portal__notice-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}

.portal__head {
  background: #fff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}

.portal__head-inner {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px 24px;
  padding: 14px 0 12px;
}

@media (max-width: 900px) {
  .portal__head-inner {
    grid-template-columns: 1fr;
    justify-items: start;
  }

  .portal__slogan {
    order: 3;
    width: 100%;
    text-align: left;
  }
}

.portal__brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: nowrap;
  flex-shrink: 0;
  min-width: max-content;
}

.portal__logo-mark {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(145deg, #ff6b6b 0%, var(--portal-red) 45%, var(--portal-red-dark) 100%);
  box-shadow: 0 4px 12px rgba(200, 22, 29, 0.35);
}

.portal__logo-title {
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  color: var(--portal-red);
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.portal__logo-sub {
  margin: 2px 0 0;
  font-size: 12px;
  color: #888;
  white-space: nowrap;
}

.portal__slogan {
  margin: 0;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: #333;
}

.portal__head-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}

.portal__location {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.portal__pin {
  color: var(--portal-red);
  flex-shrink: 0;
}

.portal__account {
  display: flex;
  align-items: center;
  gap: 10px;
}

.portal__hello {
  font-size: 13px;
  color: #333;
}

.portal__btn-login {
  padding: 7px 20px;
  border: none;
  border-radius: 6px;
  background: var(--portal-red);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(200, 22, 29, 0.25);
}

.portal__btn-login:hover {
  filter: brightness(1.05);
}

.portal__btn-logout {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
  cursor: pointer;
}

.portal__nav-wrap {
  border-top: 1px solid #f0f0f0;
  background: #fff;
}

.portal__nav-inner {
  padding-bottom: 0;
}

.portal__menus {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 4px 8px;
  min-height: 44px;
}

.portal__menu-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  color: #222;
  text-decoration: none;
  border-radius: 8px 8px 0 0;
  transition: color 0.15s, background 0.15s;
}

.portal__menu-item:hover {
  color: var(--portal-red);
}

.portal__menu-item--pill {
  background: var(--portal-red);
  color: #fff !important;
  font-weight: 700;
  box-shadow: 0 -2px 12px rgba(200, 22, 29, 0.2);
}

.portal__menu-item--pill:hover {
  color: #fff !important;
  filter: brightness(1.05);
}

.portal__hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(125deg, #d6ecff 0%, var(--portal-hero-blue) 35%, var(--portal-hero-blue2) 70%, #fff 100%);
  padding: 28px 0 40px;
}

.portal__hero-deco {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 120% 80% at 90% 20%, rgba(99, 179, 237, 0.25), transparent 50%),
    radial-gradient(circle at 15% 80%, rgba(147, 197, 253, 0.35), transparent 40%),
    radial-gradient(circle at 70% 60%, rgba(186, 230, 253, 0.4), transparent 35%);
  opacity: 0.9;
}

.portal__hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 24px;
  align-items: start;
}

@media (max-width: 768px) {
  .portal__hero-layout {
    grid-template-columns: 1fr;
  }

  .portal__hero-side {
    max-width: 100%;
  }
}

.portal__hero-side {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  box-shadow: 0 8px 28px rgba(30, 80, 140, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.9);
  padding: 12px 0;
}

.portal__hero-side ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.portal__hero-side li {
  padding: 10px 16px;
  font-size: 13px;
  color: #333;
  border-left: 3px solid transparent;
  cursor: default;
}

.portal__hero-side li:hover {
  background: rgba(255, 255, 255, 0.9);
  border-left-color: var(--portal-red);
  color: var(--portal-red);
}

.portal__hero-main {
  padding: 8px 8px 8px 0;
}

.portal__hero-brandline {
  margin: 0 0 12px;
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.portal__hero-ai {
  font-size: 36px;
  font-weight: 900;
  color: #1565c0;
  letter-spacing: 0.05em;
}

.portal__hero-cz {
  font-size: 18px;
  font-weight: 700;
  color: #1976d2;
}

.portal__hero-title {
  margin: 0 0 12px;
  font-size: clamp(22px, 3.2vw, 32px);
  font-weight: 800;
  line-height: 1.35;
  color: #0d2137;
}

.portal__hero-sub {
  margin: 0 0 22px;
  font-size: 15px;
  color: #455a64;
  max-width: 560px;
}

.portal__hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.portal__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.15s;
}

.portal__btn--primary {
  background: var(--portal-red);
  color: #fff;
  border: none;
  box-shadow: 0 4px 14px rgba(200, 22, 29, 0.35);
}

.portal__btn--primary:hover {
  transform: translateY(-1px);
}

.portal__btn--ghost {
  background: #fff;
  color: var(--portal-red);
  border: 1px solid rgba(200, 22, 29, 0.45);
}

.portal__btn--ghost:hover {
  background: #fff5f5;
}

.portal__quick {
  background: #fff;
  padding: 28px 0 32px;
  border-bottom: 1px solid #f0f0f0;
}

.portal__quick-inner {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 28px;
  align-items: stretch;
}

@media (max-width: 900px) {
  .portal__quick-inner {
    grid-template-columns: 1fr;
  }
}

.portal__quick-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 16px;
}

.portal__quick-a {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  padding: 8px 0;
}

.portal__quick-a:hover {
  color: var(--portal-red);
}

.portal__quick-ico {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(145deg, #ffe8e8, #ffc9c9);
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(200, 22, 29, 0.12);
}

.portal__quick-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 768px) {
  .portal__quick-cards {
    grid-template-columns: 1fr;
  }
}

.portal__journey-card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 18px 18px 20px;
  background: #fafbfc;
  border-radius: 12px;
  border: 1px solid #eee;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s, border-color 0.2s;
  cursor: default;
}

.portal__journey-card:hover {
  border-color: rgba(200, 22, 29, 0.25);
  box-shadow: 0 8px 24px rgba(200, 22, 29, 0.08);
}

.portal__journey-title {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 800;
  color: #1a1a1a;
}

.portal__journey-desc {
  margin: 0;
  font-size: 13px;
  color: var(--portal-muted);
  line-height: 1.55;
}

.portal__journey-arrow {
  font-size: 28px;
  font-weight: 300;
  color: var(--portal-red);
  line-height: 1;
}

.portal__hot {
  padding: 36px 0 20px;
  background: #fff;
}

.portal__hot-title {
  margin: 0 0 24px;
  text-align: center;
  font-size: clamp(20px, 2.5vw, 26px);
  font-weight: 800;
  color: #1a1a1a;
}

.portal__hot-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 20px;
}

.portal__hot-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px 6px 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #555;
  min-width: 88px;
  border-radius: 10px;
  transition: color 0.15s, background 0.15s;
}

.portal__hot-tab:hover {
  color: var(--portal-red);
}

.portal__hot-tab--active {
  color: var(--portal-red);
}

.portal__hot-tab-ico {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(160deg, #ff8a8a 0%, var(--portal-red) 50%, var(--portal-red-dark) 100%);
  box-shadow: 0 6px 16px rgba(200, 22, 29, 0.35);
}

.portal__hot-tab--active .portal__hot-tab-ico {
  transform: scale(1.06);
}

.portal__hot-tab-text {
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  max-width: 100px;
}

.portal__showcase {
  padding: 8px 0 40px;
  background: #fff;
}

.portal__course-card {
  display: grid;
  grid-template-columns: 140px 1fr;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(15, 40, 80, 0.1);
  border: 1px solid #eee;
  background: #fff;
}

@media (max-width: 768px) {
  .portal__course-card {
    grid-template-columns: 1fr;
  }

  .portal__course-strip {
    flex-direction: row !important;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px !important;
  }
}

.portal__course-strip {
  background: linear-gradient(180deg, #e53935 0%, var(--portal-red) 40%, var(--portal-red-dark) 100%);
  color: #fff;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
}

.portal__course-strip-k {
  margin: 0;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 0.02em;
}

.portal__course-strip-label {
  margin: 0;
  font-size: 11px;
  opacity: 0.9;
}

.portal__course-strip-num {
  margin: 8px 0 0;
  font-size: 20px;
  font-weight: 800;
}

.portal__course-strip-note {
  margin: 0;
  font-size: 11px;
  opacity: 0.75;
}

.portal__course-strip-icon {
  margin-top: auto;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.35);
}

.portal__course-body {
  padding: 22px 24px 24px;
}

.portal__course-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.portal__course-h3 {
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 800;
  color: #1a1a1a;
}

.portal__course-lead {
  margin: 0;
  font-size: 14px;
  color: var(--portal-muted);
  max-width: 480px;
  line-height: 1.55;
}

.portal__course-sidebtns {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
  min-width: 140px;
}

.portal__mini-btn {
  display: block;
  text-align: center;
  padding: 8px 12px;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fafafa;
  text-decoration: none;
  color: #333;
}

.portal__mini-btn:hover {
  border-color: var(--portal-red);
  color: var(--portal-red);
}

.portal__trial-btn {
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  background: linear-gradient(180deg, #ff7043, #e64a19);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(230, 74, 25, 0.35);
}

.portal__trial-btn:hover {
  filter: brightness(1.05);
}

.portal__course-mid {
  margin-bottom: 22px;
  padding: 16px;
  background: linear-gradient(90deg, #f5f9ff 0%, #fff 100%);
  border-radius: 10px;
  border: 1px solid #e3eef8;
}

.portal__flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 8px;
  justify-content: center;
}

.portal__flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 20px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  min-width: 120px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.portal__flow-d {
  font-size: 15px;
  font-weight: 800;
  color: #1565c0;
}

.portal__flow-t {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

.portal__flow-arrow {
  color: #90caf9;
  font-size: 20px;
  font-weight: 700;
}

.portal__course-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

@media (max-width: 700px) {
  .portal__course-bottom {
    grid-template-columns: 1fr;
  }
}

.portal__adv-h {
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: 800;
  color: #1a1a1a;
}

.portal__adv ul {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  color: var(--portal-muted);
  line-height: 1.7;
}

.portal__open-table-wrap {
  min-width: 0;
}

.portal__open-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.portal__open-table th,
.portal__open-table td {
  padding: 10px 12px;
  text-align: left;
  border: 1px solid #eee;
}

.portal__open-table th {
  background: #fafafa;
  font-weight: 700;
}

.portal__status {
  color: var(--portal-red);
  font-weight: 700;
}

.portal__section {
  padding: 36px 0;
  background: #fafafa;
}

.portal__h2 {
  margin: 0 0 20px;
  font-size: 20px;
  font-weight: 800;
}

.portal__muted {
  font-size: 12px;
  color: #888;
  line-height: 1.5;
}

.portal__cta-banner {
  background: linear-gradient(90deg, var(--portal-red-dark) 0%, var(--portal-red) 45%, #d32f2f 100%);
  padding: 28px 16px;
  text-align: center;
}

.portal__cta-inner {
  margin: 0;
  font-size: clamp(16px, 2.2vw, 22px);
  font-weight: 800;
  color: #fff;
  line-height: 1.45;
  letter-spacing: 0.02em;
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
  color: var(--portal-red);
}
</style>
