<script setup>
import { RouterLink } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import PlaceholderImage from '../components/PlaceholderImage.vue'

/** 左侧「热门学科」——原型中均指向本页 /map/22，当前页高亮「AI智能应用开发」 */
const MAP_ROUTE = '/map/22'

const sidebarSubjects = [
  { key: 'ai-java', label: 'AI智能应用开发', active: true },
  { key: 'ai-py', label: 'AI大模型开发（Python）' },
  { key: 'hm', label: 'AI鸿蒙开发' },
  { key: 'embed', label: 'AI嵌入式+机器人开发' },
  { key: 'fe', label: '前端开发' },
  { key: 'bigdata', label: 'AI大数据开发' },
  { key: 'ops', label: 'AI运维' },
  { key: 'test', label: 'AI测试' },
  { key: 'design', label: 'AI设计' },
  { key: 'video', label: 'AI视频创作与直播运营' },
  { key: 'cpp', label: 'C/C++' },
  { key: 'pm', label: '产品经理' },
  { key: 'clip', label: '拍摄剪辑+短视频制作' },
  { key: 'pmp', label: 'PMP项目管理认证' },
  { key: 'cross', label: '跨境电商' },
  { key: 'go', label: 'Go语言与区块链' },
  { key: 'bd', label: '大数据' },
  { key: 'php', label: 'PHP工程师' },
  { key: 'android', label: 'Android+物联网' },
  { key: 'ios', label: 'iOS' },
  { key: 'dotnet', label: '.NET' },
]

const roadmapSteps = [
  { main: 'Java基础', sub: 'Java SE基础' },
  { main: 'Java Web', sub: 'JavaWeb框架' },
  { main: '单体项目', sub: '《苍穹外卖》项目实战' },
  { main: '微服务', sub: 'Spring Cloud（微服务开发学这一套就够了）' },
  { main: '企业级项目', sub: '《学成在线》在线教育→《白马头条》新闻资讯' },
  { main: '面试专题', sub: 'Java大厂面试' },
]

const advancementChain =
  'JDK8-15新特性 → 编程强化 → 数据库强化 → 安全框架SpringSecurity → 报表技术 → 模板引擎VelocityTools → 工作流Activiti7 …'

const phases = [
  {
    title: '阶段一 Java基础',
    intro:
      'Java基础是入行Java、应对Java程序员面试需掌握的知识。好的开始等于成功的一半。本部分推荐四套精品Java基础入门课（任选其一即可）：',
    courses: [
      {
        name: 'Java入门到起飞，含斯坦福大学练习题+力扣算法题+大厂java面试题',
        meta: 'Java基础 · 快速入门',
        learners: '1070090',
        date: '2022.04.27',
        hot: true,
        summary:
          '面向0基础；从0到进阶到起飞；练习侧重分析型讲解；综合项目贴合企业开发；PPT讲解；第二阶段含源码分析、JVM、数据结构、算法与NIO手写非阻塞tomcat等。',
      },
      {
        name: 'Java+AI智能辅助编程，Java零基础入门到大牛一套通关',
        meta: 'Java+AI智能辅助编程',
        learners: '309977',
        date: '2024.07.31',
        summary: '基于主流AI讲解Java，全阶段AI赋能，案例丰富，含GUI与Java小游戏开发。',
      },
      {
        name: 'Java小白零基础自学快速入门，一套超哇塞的Java基础课程',
        meta: 'Java小白零基础自学快速入门',
        learners: '231615',
        date: '2023.01.06',
        summary: '知识点编排循序渐进，落地实际案例，阶段性小项目巩固。',
      },
      {
        name: 'Java零基础入门到精通',
        meta: 'Java零基础入门到精通',
        learners: '689140',
        date: '2021.12.31',
        summary: '知识讲解详细；图形方式演示代码与分析逻辑。',
      },
    ],
  },
  {
    title: '阶段二 Java Web框架',
    intro: '深入讲解JavaWeb核心技术，学完可制作中小型网站和企业管理系统等。',
    courses: [
      {
        name: 'JavaWeb开发教程，实现javaweb企业开发全流程',
        meta: 'JavaWeb核心编程',
        learners: '876769',
        date: '2023.03.21',
        summary:
          '前后端分离、SpringBoot 全流程：需求分析—表结构—接口文档—实现—测试—联调。',
      },
    ],
  },
  {
    title: '阶段三 单体项目开发',
    intro: '通过单体项目综合应用所学，提升需求分析、接口设计、编码与调试能力。',
    courses: [
      {
        name: 'Java项目实战《苍穹外卖》，基于SpringBoot+SSM企业级项目实战',
        meta: '【服务行业】苍穹外卖',
        learners: '821605',
        date: '2023.07.05',
        summary: '理论与实践并重，适合具备 Java Web、Spring、MyBatis、MySQL、Maven 基础的学员。',
      },
    ],
  },
  {
    title: '阶段四 微服务',
    intro: '汇集热门微服务框架，增加中级程序员知识储备。',
    courses: [
      {
        name: 'MybatisPlus快速入门高效掌握',
        meta: 'MybatisPlus',
        learners: '98412',
        date: '2023.08.30',
        summary: '简化单表CRUD，只做增强不做修改。',
      },
      {
        name: 'Java微服务SpringCloud+RabbitMQ+Docker+Redis+搜索+分布式',
        meta: '微服务框架全套',
        learners: '301020',
        date: '2021.08.11',
        summary:
          'Spring Cloud Alibaba、RabbitMQ、Docker、Redis、Elasticsearch 等一网打尽；实用篇、进阶篇与面试篇。',
      },
    ],
  },
  {
    title: '阶段五 企业级项目实战',
    intro: '选择真实、紧贴企业需要的项目课，沉浸不同阶段与规模的项目实战。',
    courses: [
      {
        name: 'Java项目企业级微服务实战《学成在线》',
        meta: '【在线教育】学成在线',
        learners: '252225',
        date: '2023.01.13',
        summary:
          'Spring Cloud 微服务：Nginx、SpringBoot、Spring Cloud、MyBatis-Plus、MQ、Redis、Elasticsearch 等。',
      },
      {
        name: 'Java项目实战微服务项目《白马头条》开发全套视频教程',
        meta: '【资讯项目】白马头条',
        learners: '424679',
        date: '2023.06.13',
        summary: 'SpringBoot + Spring Cloud + Nacos 等企业级微服务架构。',
      },
    ],
  },
  {
    title: '阶段六 面试专题课',
    intro: '以企业大厂真实高频Java面试真题为主干。',
    courses: [
      {
        name: 'Java面试专题视频教程（含大厂高频面试真题）',
        meta: '2023版 Java大厂面试',
        learners: '261645',
        date: '2023.04.18',
        summary:
          'Redis、MySQL、框架、微服务、消息中间件、数据结构、集合源码、多线程、JVM、设计模式、高并发等。',
      },
      {
        name: 'Java面试大厂名企高频真题视频教程',
        meta: '2021版 Java大厂面试',
        learners: '116971',
        date: '2022.05.20',
        summary: '精选试题、深挖底层、数据结构可视化。',
      },
    ],
  },
]

const crossLinks = [
  { label: '视频库首页', to: '/yun' },
  { label: '教研团队', to: '/teacher' },
  { label: '直播公开课', to: '/open' },
  { label: '技术文章', to: '/jishu' },
  { label: '学习工具', to: '/gongju' },
  { label: '产品经理路线图', to: '/map/96' },
]
</script>

<template>
  <SiteHeader />
  <main class="jm">
    <div class="jm__shell">
      <aside class="jm__aside" aria-label="热门学科视频教程">
        <div class="jm__aside-head">热门学科视频教程</div>
        <nav class="jm__aside-nav">
          <RouterLink
            v-for="s in sidebarSubjects"
            :key="s.key"
            class="jm__aside-link"
            :class="{ 'jm__aside-link--active': s.active }"
            :to="MAP_ROUTE"
          >
            <span class="jm__aside-label">{{ s.label }}</span>
            <span class="jm__aside-arrow" aria-hidden="true">›</span>
          </RouterLink>
        </nav>
      </aside>

      <div class="jm__main">
        <nav class="jm__crumb" aria-label="面包屑">
          <RouterLink class="jm__crumb-a" to="/yun">首页</RouterLink>
          <span class="jm__crumb-sep">/</span>
          <RouterLink class="jm__crumb-a" to="/yun">视频教程</RouterLink>
          <span class="jm__crumb-sep">/</span>
          <span>AI智能应用开发</span>
        </nav>

        <section class="jm__hero-card">
          <div class="jm__hero-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 36V12l16-8 16 8v24l-16 8-16-8z" stroke="#0052cc" stroke-width="2" fill="#e8f1ff" />
              <circle cx="24" cy="22" r="5" fill="#ff6600" />
            </svg>
          </div>
          <div class="jm__hero-text">
            <h1 class="jm__hero-title">AI智能应用开发从入门到精通全套视频教程</h1>
            <p class="jm__hero-sub">6个月0基础 → 年薪30w 自学必备干货，含全套视频+源码资料</p>
          </div>
          <button type="button" class="jm__hero-dl">
            <span class="jm__hero-dl-ico" aria-hidden="true">⬇</span>
            一键下载 以下课程
          </button>
        </section>

        <section class="jm__roadmap-block" aria-label="学习路线概要">
          <ul class="jm__bullet-list">
            <li v-for="(s, i) in roadmapSteps" :key="i" class="jm__bullet-item">
              <span class="jm__bullet-dot" aria-hidden="true" />
              <span class="jm__bullet-main">{{ s.main }}</span>
              <span class="jm__bullet-sub">{{ s.sub }}</span>
            </li>
          </ul>
          <p class="jm__advance">
            以上技术，足以支撑找一份好的Java开发工作。如想工作后再提升，还可继续学习：
            <span class="jm__advance-chain">{{ advancementChain }}</span>
          </p>
          <button type="button" class="jm__roadmap-cta">2026版 AI智能应用开发学习路线图 点击查看</button>
        </section>

        <section v-for="(ph, pi) in phases" :key="pi" class="jm__phase">
          <h2 class="jm__phase-pill">{{ ph.title }}</h2>
          <p class="jm__phase-intro">{{ ph.intro }}</p>
          <ul class="jm__course-list">
            <li v-for="(c, ci) in ph.courses" :key="ci" class="jm__course">
              <div class="jm__course-thumb">
                <PlaceholderImage ratio="16 / 10" />
              </div>
              <div class="jm__course-mid">
                <h3 class="jm__course-title-row">
                  <span v-if="c.hot" class="jm__hot">HOT</span>
                  <span class="jm__course-name">{{ c.name }}</span>
                </h3>
                <p class="jm__course-meta-line">{{ c.meta }}</p>
                <p class="jm__course-sum">{{ c.summary }}</p>
              </div>
              <div class="jm__course-aside">
                <time class="jm__course-date" :datetime="c.date">{{ c.date.replace(/\./g, '.') }}</time>
                <span class="jm__course-views" title="学习人数">
                  <span class="jm__eye" aria-hidden="true">👁</span>
                  {{ c.learners }}
                </span>
                <button type="button" class="jm__start">开始学习</button>
              </div>
            </li>
          </ul>
        </section>

        <section class="jm__more">
          <h2 class="jm__phase-pill">阶段七 Java知识点</h2>
          <p class="jm__phase-intro">可以根据自己的学习进度学习相应知识点教程。</p>
          <p class="jm__muted">
            Java SE / JavaWeb / MySQL / Maven / Git / SSM / MybatisPlus / Spring Boot / Dubbo / SpringCloud / Redis / Docker …（完整清单见原站）
          </p>
        </section>

        <footer class="jm__cross">
          <RouterLink
            v-for="(x, xi) in crossLinks"
            :key="xi"
            class="jm__cross-link"
            :to="x.to"
            target="_blank"
            rel="noopener noreferrer"
          >{{ x.label }}</RouterLink>
        </footer>
      </div>

      <RouterLink class="jm__float" :to="MAP_ROUTE">
        <span class="jm__float-mascot" aria-hidden="true">🐵</span>
        <span class="jm__float-box">
          AI智能应用学习路线图
          <span class="jm__float-go">点击查看 &gt;</span>
        </span>
      </RouterLink>
    </div>
  </main>
  <SiteFooter />
</template>

<style scoped>
.jm {
  --jm-blue: #0052cc;
  --jm-orange: #ff6600;
  --jm-bg: #f4f4f4;
  background: var(--jm-bg);
  min-height: 60vh;
}

.jm__shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 16px 40px;
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 16px 20px;
  align-items: start;
  position: relative;
}

@media (max-width: 900px) {
  .jm__shell {
    grid-template-columns: 1fr;
  }

  .jm__aside {
    position: static !important;
  }
}

.jm__aside {
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
  position: sticky;
  top: 12px;
}

.jm__aside-head {
  background: linear-gradient(180deg, #0066dd 0%, var(--jm-blue) 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  padding: 12px 8px;
}

.jm__aside-nav {
  display: flex;
  flex-direction: column;
}

.jm__aside-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 12px;
  font-size: 13px;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.15s, color 0.15s;
}

.jm__aside-link:hover {
  background: #f5f9ff;
  color: var(--jm-blue);
}

.jm__aside-link--active {
  background: #e8f2ff;
  color: var(--jm-blue);
  font-weight: 600;
}

.jm__aside-arrow {
  color: var(--jm-blue);
  font-size: 16px;
  opacity: 0;
}

.jm__aside-link--active .jm__aside-arrow {
  opacity: 1;
}

.jm__main {
  min-width: 0;
}

.jm__crumb {
  font-size: 13px;
  color: #888;
  margin-bottom: 12px;
}

.jm__crumb-a {
  color: var(--jm-blue);
  text-decoration: none;
}

.jm__crumb-a:hover {
  text-decoration: underline;
}

.jm__crumb-sep {
  margin: 0 6px;
}

.jm__hero-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  padding: 20px 20px 20px 16px;
  margin-bottom: 16px;
}

@media (max-width: 720px) {
  .jm__hero-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .jm__hero-dl {
    justify-self: stretch;
  }
}

.jm__hero-title {
  margin: 0 0 8px;
  font-size: clamp(17px, 2.2vw, 22px);
  font-weight: 800;
  color: var(--jm-orange);
  line-height: 1.35;
}

.jm__hero-sub {
  margin: 0;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

.jm__hero-dl {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  background: linear-gradient(180deg, #ff8833 0%, var(--jm-orange) 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(255, 102, 0, 0.35);
}

.jm__hero-dl:hover {
  filter: brightness(1.05);
}

.jm__roadmap-block {
  background: #fff;
  border-radius: 8px;
  padding: 16px 18px 18px;
  margin-bottom: 20px;
  border: 1px solid #eee;
}

.jm__bullet-list {
  list-style: none;
  margin: 0 0 14px;
  padding: 0;
}

.jm__bullet-item {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.5;
}

.jm__bullet-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--jm-blue);
  flex-shrink: 0;
  margin-top: 6px;
}

.jm__bullet-main {
  font-weight: 700;
  color: #222;
}

.jm__bullet-sub {
  color: #666;
  font-size: 13px;
}

.jm__advance {
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 1.65;
  color: #444;
}

.jm__advance-chain {
  color: var(--jm-blue);
}

.jm__roadmap-cta {
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(180deg, #ff8833 0%, var(--jm-orange) 100%);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(255, 102, 0, 0.25);
}

.jm__roadmap-cta:hover {
  filter: brightness(1.03);
}

.jm__phase {
  margin-bottom: 28px;
}

.jm__phase-pill {
  display: inline-block;
  margin: 0 0 12px;
  padding: 6px 18px;
  border-radius: 999px;
  background: linear-gradient(90deg, #0070e0 0%, var(--jm-blue) 100%);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
}

.jm__phase-intro {
  margin: 0 0 14px;
  font-size: 14px;
  color: #666;
  line-height: 1.65;
}

.jm__course-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.jm__course {
  display: grid;
  grid-template-columns: 168px minmax(0, 1fr) auto;
  gap: 14px;
  align-items: start;
  padding: 16px 0;
  border-bottom: 1px solid #e8e8e8;
  background: #fff;
  margin-bottom: 2px;
}

@media (max-width: 800px) {
  .jm__course {
    grid-template-columns: 1fr;
  }

  .jm__course-aside {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    border-left: none;
    padding-left: 0;
  }
}

.jm__course-thumb {
  width: 168px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #eee;
}

.jm__course-thumb :deep(.ph__img) {
  width: 100%;
  display: block;
}

.jm__course-title-row {
  margin: 0 0 6px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.45;
  color: #222;
}

.jm__hot {
  display: inline-block;
  margin-right: 6px;
  padding: 1px 5px;
  border-radius: 2px;
  background: #ff4d4f;
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  vertical-align: 2px;
}

.jm__course-meta-line {
  margin: 0 0 8px;
  font-size: 12px;
  color: #888;
}

.jm__course-sum {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  color: #555;
}

.jm__course-aside {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  min-width: 120px;
  padding-left: 8px;
  border-left: 1px dashed #e0e0e0;
}

.jm__course-date {
  font-size: 13px;
  color: #888;
}

.jm__course-views {
  font-size: 13px;
  color: #666;
}

.jm__eye {
  margin-right: 4px;
  opacity: 0.85;
}

.jm__start {
  padding: 8px 18px;
  border: 1px solid var(--jm-orange);
  border-radius: 4px;
  background: #fff;
  color: var(--jm-orange);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.jm__start:hover {
  background: #fff8f2;
}

.jm__more {
  margin-bottom: 20px;
}

.jm__muted {
  margin: 0;
  color: #888;
  font-size: 13px;
  line-height: 1.6;
}

.jm__cross {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
  padding-top: 8px;
  border-top: 1px dashed #ddd;
}

.jm__cross-link {
  font-size: 13px;
  color: var(--jm-blue);
  text-decoration: none;
}

.jm__cross-link:hover {
  text-decoration: underline;
}

.jm__float {
  position: fixed;
  right: 12px;
  bottom: 120px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  text-decoration: none;
  max-width: 120px;
}

@media (max-width: 900px) {
  .jm__float {
    display: none;
  }
}

.jm__float-mascot {
  font-size: 36px;
  line-height: 1;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
}

.jm__float-box {
  display: block;
  padding: 12px 10px;
  background: linear-gradient(180deg, #ff8833 0%, var(--jm-orange) 100%);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.45;
  border-radius: 6px;
  box-shadow: 0 4px 14px rgba(255, 102, 0, 0.35);
  text-align: center;
}

.jm__float-go {
  display: block;
  margin-top: 6px;
  font-weight: 600;
  font-size: 11px;
  opacity: 0.95;
}
</style>
