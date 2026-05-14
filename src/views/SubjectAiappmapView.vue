<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import PlaceholderImage from '../components/PlaceholderImage.vue'

/** 对标 https://yun.itheima.com/subject/aiappmap/index.html 横向路线图版式 */

const subjects = [
  'AI智能应用开发',
  'AI大模型开发（Python）',
  'AI鸿蒙开发',
  'AI嵌入式+机器人开发',
  'AI运维',
  'AI测试',
  '跨境电商运营',
  'AI设计',
  'AI视频创作与直播运营',
  'AI大数据开发',
  '前端开发',
  '产品经理',
  'AI智能应用开发（Java）',
]

const selectedSubject = ref(subjects[0])

const stages = [
  {
    num: '01',
    titleShort: 'AI应用编程基',
    title: 'AI应用编程基础',
    tone: 'b1',
    cards: [
      { title: '编程基础与环境', items: ['IntelliJ IDEA', 'Java入门', '基础语法', '编程思维'] },
      { title: '面向对象编程', items: ['面向对象设计思想', '抽象类', '分层开发原则'] },
    ],
  },
  {
    num: '03',
    titleShort: 'AI应用Web开',
    title: 'AI应用Web开发',
    tone: 'b2',
    cards: [
      { title: '前端技术栈', items: ['HTML+CSS+JS', 'Vue3', 'Vue工程化', 'ElementPlus'] },
      { title: 'Java后端技术栈', items: ['SpringBoot3', 'Spring核心', 'SpringBoot原理', 'MyBatis'] },
    ],
  },
  {
    num: '05',
    titleShort: 'AI大模型开发',
    title: 'AI大模型开发',
    tone: 'b3',
    cards: [
      {
        title: 'Python编程基础',
        items: ['Python基础语法', 'Python数据控制', 'Python数据结构与容器', 'Python函数与模块', 'Python面向对象编程'],
      },
      { title: 'AI与提示工程', items: ['零样本学习（Zero-shot）', '少样本学习（Few-shot）', '提示词工程', '思维链（Chain-of-Thought）'] },
    ],
  },
  {
    num: '06',
    titleShort: 'AI大模型微调',
    title: 'AI大模型微调基础',
    tone: 'b4',
    cards: [
      { title: 'AI大模型概念', items: ['神经元', '激活函数', '神经网络', '损失函数', '梯度下降算法'] },
      { title: '模型推理平台', items: ['Pipeline模型', 'HuggingFace', 'PEFT / LoRA 微调', '模型量化'] },
    ],
  },
  {
    num: '08',
    titleShort: '企业级微服务SCA',
    title: '企业级微服务SCA与AI',
    tone: 'b5',
    cards: [
      {
        title: '微服务核心组件',
        items: ['Nacos（注册中心、配置中心）', 'OpenFeign（服务调用）', 'Sentinel（流量控制、熔断降级）', '网关（路由、鉴权）', 'SpringCloudAlibaba & AI'],
      },
      { title: '分布式中间件', items: ['RabbitMQ', 'SpringAMQP', 'Redis高级', 'ElasticSearch'] },
    ],
  },
  {
    num: '10',
    titleShort: '多智能体协同',
    title: '多智能体协同中台项目',
    tone: 'orange',
    singleCard: true,
    cardTitle: 'AgentCenter',
    items: [
      'LangChain & LangGraph 框架构建',
      'SpringCloudGateway 统一网关',
      '通用智能体服务中台',
      'ToolCalling 整合业务深度集成',
      '大模型接入',
      'A2A 协议实现多智能体',
      '多种智能体架构模型',
      '基于 MCP 扩展 AI 模型能力',
      '会话记忆',
      '路由工作流智能体',
    ],
  },
]

const notes = [
  {
    title: '阶段一 AI应用编程基础',
    text: '掌握 Java 编程基础、面向对象思想、核心 API 与集合、多线程与网络编程，初步接触大模型调用，为后续 AI 应用开发打下基础。',
  },
  {
    title: '阶段三 AI应用Web开发',
    text: '掌握前后端全栈能力，包括 Vue3 前端、SpringBoot 后端、MySQL 与 Redis，具备企业级 Web 项目开发与部署能力。',
  },
  {
    title: '阶段五 AI大模型开发基础',
    text: '学习 Python 与 AI 场景工程，掌握提示词工程、LangChain 与向量检索，具备大模型基础应用开发能力。',
  },
  {
    title: '阶段六 AI大模型微调基础',
    text: '理解神经网络与推理平台，掌握 PEFT、LoRA 等微调及模型压缩量化，具备大模型定制优化能力。',
  },
  {
    title: '阶段八 企业级微服务 SCA 与 AI',
    text: '掌握 Nacos、OpenFeign、Sentinel、网关与 SpringCloud Alibaba 集成 AI，具备微服务架构设计与开发能力。',
  },
  {
    title: '阶段十 多智能体协同平台',
    text: '基于 LangGraph 与 SpringCloud 构建多智能体协同平台，实现路由、会话记忆、业务集成与大模型接入。',
  },
]
</script>

<template>
  <div class="aimap">
    <header class="aimap__head">
      <div class="container aimap__head-row">
        <RouterLink to="/" class="aimap__brand">
          <PlaceholderImage ratio="120 / 40" class="aimap__logo" />
          <div class="aimap__brand-text">
            <strong>白马程序员</strong>
            <span>www.itheima.com</span>
          </div>
        </RouterLink>
        <nav class="aimap__nav" aria-label="视频库导航">
          <RouterLink class="aimap__nav-a" to="/yun" target="_blank" rel="noopener noreferrer">视频库首页</RouterLink>
          <RouterLink class="aimap__nav-a" to="/map/22" target="_blank" rel="noopener noreferrer">免费视频教程</RouterLink>
          <span class="aimap__nav-a aimap__nav-a--active">学习路线图</span>
          <RouterLink class="aimap__nav-a" to="/open" target="_blank" rel="noopener noreferrer">直播公开课</RouterLink>
          <RouterLink class="aimap__nav-a" to="/gongju" target="_blank" rel="noopener noreferrer">学习工具</RouterLink>
        </nav>
        <label class="aimap__select-wrap">
          <span class="aimap__select-label">选择学科</span>
          <select v-model="selectedSubject" class="aimap__select">
            <option v-for="(s, i) in subjects" :key="i" :value="s">{{ s }}</option>
          </select>
        </label>
      </div>
    </header>

    <main class="aimap__main">
      <div class="container">
        <h1 class="aimap__title">白马程序员AI智能应用开发学习路线图（2026官方完整版）</h1>
        <p class="aimap__tagline">
          成为驾驭「企业级应用」与「AI智能系统构建」的下一代软件开发人才！
        </p>

        <div class="aimap__flow" role="region" aria-label="学习路线流程图">
          <template v-for="(st, si) in stages" :key="si">
            <div v-if="si > 0" class="aimap__arrow" aria-hidden="true">
              <svg width="22" height="56" viewBox="0 0 22 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10 L14 28 L6 46" stroke="#2a7fff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <section class="aimap__stage" :data-tone="st.tone">
              <header class="aimap__stage-head">
                <span class="aimap__stage-num" aria-hidden="true">{{ st.num }}</span>
                <div class="aimap__stage-titles">
                  <span class="aimap__stage-short">{{ st.titleShort }}</span>
                  <span class="aimap__stage-full">{{ st.title }}</span>
                </div>
              </header>
              <div class="aimap__stage-body">
                <template v-if="st.singleCard">
                  <article class="aimap__card aimap__card--wide">
                    <h3 class="aimap__card-h">{{ st.cardTitle }}</h3>
                    <ul class="aimap__list">
                      <li v-for="(it, ii) in st.items" :key="ii">{{ it }}</li>
                    </ul>
                  </article>
                </template>
                <template v-else>
                  <article v-for="(c, ci) in st.cards" :key="ci" class="aimap__card">
                    <h3 class="aimap__card-h">{{ c.title }}</h3>
                    <ul class="aimap__list">
                      <li v-for="(it, ii) in c.items" :key="ii">{{ it }}</li>
                    </ul>
                  </article>
                </template>
              </div>
            </section>
          </template>
        </div>

        <section class="aimap__explain" aria-labelledby="explain-h">
          <h2 id="explain-h" class="aimap__explain-h">学习路线图说明</h2>
          <div class="aimap__explain-grid">
            <p v-for="(n, ni) in notes" :key="ni" class="aimap__explain-p">
              <strong>{{ n.title }}：</strong>{{ n.text }}
            </p>
          </div>
        </section>
      </div>
    </main>

    <aside class="aimap__float" aria-label="快捷入口">
      <button type="button" class="aimap__float-btn">
        <span class="aimap__float-ico" aria-hidden="true">🎧</span>
        试听
      </button>
      <button type="button" class="aimap__float-btn">
        <span class="aimap__float-ico" aria-hidden="true">📝</span>
        报名
      </button>
    </aside>
  </div>
</template>

<style scoped>
.aimap {
  min-height: 100vh;
  background: #fafbfc;
  padding-bottom: 48px;
}

.aimap__head {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.aimap__head-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 24px;
  padding: 14px 16px;
  justify-content: space-between;
}

.aimap__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
  flex-wrap: nowrap;
  min-width: max-content;
}

.aimap__logo {
  flex-shrink: 0;
}

.aimap__logo :deep(.ph__img) {
  width: 120px;
  max-height: 40px;
  object-fit: contain;
}

.aimap__brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  min-width: max-content;
}

.aimap__brand-text strong {
  font-size: 17px;
  color: #c8161d;
  white-space: nowrap;
}

.aimap__brand-text span {
  font-size: 11px;
  color: #999;
  white-space: nowrap;
}

.aimap__nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 22px;
  flex: 1;
  justify-content: center;
  min-width: 0;
}

.aimap__nav-a {
  font-size: 15px;
  color: #333;
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  font-family: inherit;
}

.aimap__nav-a:hover {
  color: #c8161d;
}

.aimap__nav-a--active {
  font-weight: 700;
  color: #c8161d;
  border-bottom-color: #c8161d;
  cursor: default;
}

.aimap__select-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.aimap__select-label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.aimap__select {
  min-width: 180px;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
}

.aimap__main {
  padding-top: 28px;
}

.aimap__title {
  margin: 0 0 16px;
  font-size: clamp(20px, 2.6vw, 28px);
  font-weight: 800;
  color: #111;
  line-height: 1.35;
  text-align: center;
}

.aimap__tagline {
  margin: 0 auto 32px;
  max-width: 920px;
  padding: 12px 20px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  line-height: 1.55;
  border-radius: 999px;
  background: linear-gradient(90deg, #0d8f8a 0%, #12a89e 40%, #0d9a92 100%);
  box-shadow: 0 4px 14px rgba(13, 143, 138, 0.25);
}

.aimap__flow {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  gap: 0;
  overflow-x: auto;
  padding-bottom: 16px;
  margin: 0 -8px;
  scrollbar-width: thin;
}

.aimap__arrow {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  align-self: center;
  opacity: 0.9;
}

.aimap__stage {
  flex: 0 0 240px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  margin: 0 4px;
}

.aimap__stage-head {
  position: relative;
  padding: 14px 12px 16px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  color: #fff;
  min-height: 88px;
}

.aimap__stage[data-tone='b1'] .aimap__stage-head {
  background: linear-gradient(145deg, #2a8fff 0%, #156fd8 100%);
}

.aimap__stage[data-tone='b2'] .aimap__stage-head {
  background: linear-gradient(145deg, #5aa7ff 0%, #3b8ae8 100%);
}

.aimap__stage[data-tone='b3'] .aimap__stage-head {
  background: linear-gradient(145deg, #4b94e8 0%, #2a6fc4 100%);
}

.aimap__stage[data-tone='b4'] .aimap__stage-head {
  background: linear-gradient(145deg, #3d7fcc 0%, #1f5aa8 100%);
}

.aimap__stage[data-tone='b5'] .aimap__stage-head {
  background: linear-gradient(145deg, #2d5f99 0%, #143d6e 100%);
}

.aimap__stage[data-tone='orange'] .aimap__stage-head {
  background: linear-gradient(145deg, #ff8c42 0%, #ff6600 45%, #e85a00 100%);
}

.aimap__stage-num {
  position: absolute;
  right: 8px;
  top: 4px;
  font-size: 52px;
  font-weight: 900;
  line-height: 1;
  opacity: 0.18;
  pointer-events: none;
}

.aimap__stage-titles {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.aimap__stage-short {
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.aimap__stage-full {
  font-size: 11px;
  opacity: 0.92;
  line-height: 1.35;
}

.aimap__stage-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 10px 14px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
}

.aimap__card {
  padding: 10px 10px 12px;
  border: 1px solid #eee;
  border-radius: 6px;
  background: #fdfdfd;
}

.aimap__card--wide {
  flex: 1;
}

.aimap__card-h {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 700;
  color: #1a5aa0;
}

.aimap__stage[data-tone='orange'] .aimap__card-h {
  color: #c24100;
}

.aimap__list {
  margin: 0;
  padding-left: 1.1em;
  font-size: 12px;
  line-height: 1.55;
  color: #444;
}

.aimap__list li {
  margin-bottom: 3px;
}

.aimap__explain {
  margin-top: 40px;
  padding: 24px 20px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
}

.aimap__explain-h {
  margin: 0 0 16px;
  font-size: 18px;
  border-left: 4px solid #2a7fff;
  padding-left: 10px;
}

.aimap__explain-grid {
  display: grid;
  gap: 12px;
}

.aimap__explain-p {
  margin: 0;
  font-size: 13px;
  line-height: 1.65;
  color: #555;
}

.aimap__float {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 8px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid #eee;
  border-right: none;
  border-radius: 8px 0 0 8px;
  box-shadow: -2px 0 12px rgba(0, 0, 0, 0.06);
}

@media (max-width: 900px) {
  .aimap__float {
    top: auto;
    bottom: 80px;
    transform: none;
  }
}

.aimap__float-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 56px;
  padding: 10px 6px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
  color: #c8161d;
  font-weight: 600;
  cursor: pointer;
}

.aimap__float-btn:hover {
  background: #fff5f5;
}

.aimap__float-ico {
  font-size: 20px;
}
</style>
