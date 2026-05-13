<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import PlaceholderImage from '../components/PlaceholderImage.vue'

const pmTabs = ['视频教程', '技术解析', '配套源码', '学习笔记', '学习工具', '学习交流']

const phases = [
  {
    title: '阶段一 产品基础',
    intro: '初级产品经理的必备技能，能够基于需求完成产品对应的流程、结构和原型设计。',
    courses: [
      {
        name: '产品经理基础入门',
        meta: '产品经理零基础入门到精通',
        learners: '236490',
        date: '2022.05.20',
        summary:
          '在一个团队中，不同的角色要明确自己该做的事；产品经理要理解自己是谁、在团队中应起的作用是什么。本视频可以让你能够基于需求完成产品对应的流程、结构和原型设计。',
      },
    ],
  },
  {
    title: '阶段二 项目实战',
    intro: '进阶为中级产品的核心能力，能够基于公司业务分析需求，完成主流 C 端与 B 端项目设计。',
    courses: [
      {
        name: '内容项目实战',
        meta: '产品经理内容项目实战',
        learners: '372905',
        date: '2022.05.20',
        summary:
          '以产品经理入门课为核心，通过内容生产、审核分发、内容消费、画像标签等内容项目实战训练，建立对产品工作流程的完整认知。',
      },
      {
        name: '广告投放系统',
        meta: '产品经理广告投放系统项目实战',
        learners: '138816',
        date: '2022.05.20',
        summary:
          '以广告投放系统实战案例，通过广告商、广告投放、素材管理等介绍 B 端产品经理与 B 端产品。',
      },
      {
        name: 'BI系统',
        meta: '产品经理实战BI系统开发全剖析',
        learners: '81907',
        date: '2021.12.27',
        summary:
          'BI 系统定位于分析及诊断各业务侧平台的综合健康程度与潜在风险预判；涉及事件分析、漏斗分析、留存分析与路径分析等。',
      },
    ],
  },
  {
    title: '阶段三 技能进阶',
    intro: '中高级产品能力：运营策划、数据分析、项目管理与商业分析等。',
    courses: [
      {
        name: '产品运营基础',
        meta: '产品经理进阶技能运营策略与营销实战',
        learners: '357303',
        date: '2022.05.20',
        summary: '策略产品经理系统性指导，顺应精细化发展与规模化扩张需求。',
      },
      {
        name: '数据分析',
        meta: '产品经理实用进阶技能数据分析',
        learners: '127815',
        date: '2022.05.20',
        summary: '按数据分析步骤讲解需求阶段去伪存真、上线后验证与迭代的基础知识。',
      },
    ],
  },
  {
    title: '阶段四 面试求职',
    intro: '独立完成产品梳理、规划与功能设计，完善简历并拿到心仪 Offer。',
    courses: [
      {
        name: '简历撰写',
        meta: '产品经理面试求职简历撰写及注意事项',
        learners: '412632',
        date: '2022.05.20',
        summary: '优秀简历、STAR 法则、招聘需求解析、投递技巧等。',
      },
      {
        name: '面试策略',
        meta: '如何用产品思维快速斩获offer',
        learners: '410132',
        date: '2022.05.20',
        summary: '用产品思维完成投简历与面试全流程。',
      },
      {
        name: '职业规划',
        meta: '产品经理求职职业发展通道',
        learners: '395717',
        date: '2022.05.20',
        summary: '工作流程梳理、公司业务梳理、热门行业分析与晋升路线规划。',
      },
    ],
  },
]
</script>

<template>
  <SiteHeader />
  <main class="pm">
    <div class="pm__banner">
      <PlaceholderImage ratio="1200 / 200" />
    </div>
    <div class="container pm__inner">
      <nav class="pm__crumb" aria-label="面包屑">视频教程 <span class="pm__crumb-sep">/</span> 产品经理</nav>
      <h1 class="pm__title">产品经理精品教程</h1>
      <div class="pm__toolbar">
        <div class="pm__tabs">
          <button v-for="(t, i) in pmTabs" :key="i" type="button" class="pm__tab" :class="{ 'pm__tab--on': i === 0 }">{{ t }}</button>
        </div>
        <div class="pm__dl">
          <PlaceholderImage ratio="320 / 48" />
          <span class="pm__dl-text">一键下载 · 以下课程</span>
        </div>
      </div>
      <div class="pm__roadmap-tip">
        <span>学习路线图</span>
        <button type="button" class="pm__linkish">点击查看一张图搞定 产品经理</button>
      </div>

      <section v-for="(ph, pi) in phases" :key="pi" class="pm__phase">
        <h2 class="pm__phase-title">{{ ph.title }}</h2>
        <p class="pm__phase-intro">{{ ph.intro }}</p>
        <ul class="pm__course-list">
          <li v-for="(c, ci) in ph.courses" :key="ci" class="pm__course">
            <div class="pm__course-media">
              <PlaceholderImage ratio="16 / 9" />
            </div>
            <div class="pm__course-body">
              <h3 class="pm__course-name">{{ c.name }}</h3>
              <p class="pm__course-meta">{{ c.meta }} · {{ c.learners }}人已学 · {{ c.date }}</p>
              <p class="pm__course-sum">{{ c.summary }}</p>
              <button type="button" class="pm__start">开始学习</button>
            </div>
          </li>
        </ul>
      </section>

      <section class="pm__more">
        <h2 class="pm__phase-title">阶段五 产品经理知识点</h2>
        <p class="pm__phase-intro">可以根据自己的学习进度学习相应知识点教程。</p>
        <p class="pm__muted">请输入文本</p>
      </section>
    </div>
  </main>
  <SiteFooter />
</template>

<style scoped>
.pm__banner :deep(.ph__img) {
  width: 100%;
  display: block;
}

.pm__inner {
  padding: 24px 16px 40px;
}

.pm__crumb {
  font-size: 13px;
  color: var(--color-muted);
  margin-bottom: 8px;
}

.pm__crumb-sep {
  margin: 0 6px;
}

.pm__title {
  font-size: 22px;
  margin: 0 0 16px;
}

.pm__toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
}

.pm__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pm__tab {
  padding: 8px 14px;
  border: 1px solid var(--color-border);
  background: #fafafa;
  cursor: default;
  font-size: 13px;
}

.pm__tab--on {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: #fff5f5;
}

.pm__dl {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pm__dl :deep(.ph) {
  width: 160px;
}

.pm__dl-text {
  font-size: 13px;
  color: var(--color-muted);
}

.pm__roadmap-tip {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #fafafa;
  border: 1px dashed var(--color-border);
  margin-bottom: 28px;
  font-size: 14px;
}

.pm__linkish {
  border: none;
  background: none;
  color: var(--color-primary);
  cursor: default;
  text-decoration: underline;
  font-size: 14px;
}

.pm__phase {
  margin-bottom: 32px;
}

.pm__phase-title {
  font-size: 18px;
  border-left: 4px solid var(--color-primary);
  padding-left: 10px;
  margin: 0 0 8px;
}

.pm__phase-intro {
  margin: 0 0 16px;
  font-size: 14px;
  color: var(--color-muted);
  line-height: 1.6;
}

.pm__course-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.pm__course {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border);
}

@media (max-width: 720px) {
  .pm__course {
    grid-template-columns: 1fr;
  }
}

.pm__course-name {
  margin: 0 0 6px;
  font-size: 16px;
}

.pm__course-meta {
  margin: 0 0 8px;
  font-size: 12px;
  color: var(--color-muted);
}

.pm__course-sum {
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.55;
  color: #444;
}

.pm__start {
  padding: 6px 16px;
  border: 1px solid var(--color-primary);
  background: #fff;
  color: var(--color-primary);
  cursor: default;
  font-size: 13px;
}

.pm__more {
  padding-top: 8px;
}

.pm__muted {
  color: var(--color-muted);
  font-size: 13px;
}
</style>
