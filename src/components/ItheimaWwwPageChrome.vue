<script setup>
import { RouterLink } from 'vue-router'
import PlaceholderImage from './PlaceholderImage.vue'
import { COLLEGE_BUPT_URL } from '../navigation.js'

defineProps({
  /** 当前高亮：teacher | school | price | service */
  activeNav: { type: String, default: '' },
})

const centers = ['北京昌平', '北京顺义', '上海', '广州', '深圳', '武汉', '郑州', '西安', '长沙', '济南', '南京', '杭州', '成都', '合肥']

const mainNav = [
  { key: 'teacher', label: '师资力量', to: '/teacher' },
  { key: 'school', label: '开班详情', to: '/school' },
  { key: 'price', label: '学费价格', to: '/price' },
  { key: 'service', label: '就业服务', to: '/service' },
  { key: 'college', label: '报考大学', external: COLLEGE_BUPT_URL },
]
</script>

<template>
  <div class="iwc">
    <div class="iwc__notice">
      <div class="container iwc__notice-inner">
        <span>A股上市公司传智教育（股票代码 003032）旗下高端IT教育品牌</span>
        <span class="iwc__hotline">全国咨询/投诉热线：400-618-4000</span>
      </div>
    </div>

    <header class="iwc__brand">
      <div class="container iwc__brand-inner">
        <RouterLink to="/" class="iwc__logo-block">
          <PlaceholderImage ratio="160 / 48" class="iwc__logo" />
          <div class="iwc__logo-text">
            <strong class="iwc__logo-name">白马程序员</strong>
            <span class="iwc__logo-sub">好口碑IT培训机构</span>
          </div>
        </RouterLink>
        <p class="iwc__slogan">70%学员来自口碑推荐</p>
        <div class="iwc__loc">
          <span class="iwc__loc-pin" aria-hidden="true">📍</span>
          <span class="iwc__loc-label">全国中心</span>
          <select class="iwc__loc-select" aria-label="选择校区">
            <option v-for="(c, i) in centers" :key="i" :value="c">{{ c }}</option>
          </select>
        </div>
      </div>
    </header>

    <nav class="iwc__nav" aria-label="官网主导航">
      <div class="container iwc__nav-inner">
        <template v-for="(n, i) in mainNav" :key="i">
          <a
            v-if="n.external"
            class="iwc__nav-a"
            :href="n.external"
            target="_blank"
            rel="noopener noreferrer"
          >{{ n.label }}</a>
          <RouterLink
            v-else-if="n.to"
            class="iwc__nav-a"
            :class="{ 'iwc__nav-a--on': activeNav === n.key }"
            :to="n.to"
          >{{ n.label }}</RouterLink>
          <span v-else class="iwc__nav-a iwc__nav-a--muted">{{ n.label }}</span>
        </template>
      </div>
    </nav>

    <slot />
  </div>
</template>

<style scoped>
.iwc {
  min-height: 100vh;
  background: #fff;
  color: #333;
}

.iwc__notice {
  background: #fff;
  font-size: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  color: #555;
}

.iwc__notice-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}

.iwc__hotline {
  font-weight: 600;
}

.iwc__brand {
  padding: 14px 0 12px;
  border-bottom: 1px solid #eee;
}

.iwc__brand-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 24px;
  justify-content: space-between;
}

.iwc__logo-block {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
  flex-wrap: nowrap;
}

.iwc__logo {
  flex-shrink: 0;
}

.iwc__logo :deep(.ph__img) {
  width: 160px;
  max-height: 48px;
  object-fit: contain;
}

.iwc__logo-text {
  min-width: max-content;
}

.iwc__logo-name {
  display: block;
  font-size: 22px;
  color: #c8161d;
  white-space: nowrap;
}

.iwc__logo-sub {
  font-size: 12px;
  color: #888;
  white-space: nowrap;
}

.iwc__slogan {
  margin: 0;
  flex: 1;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: #333;
  min-width: 200px;
}

.iwc__loc {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.iwc__loc-pin {
  color: #c8161d;
}

.iwc__loc-label {
  font-size: 14px;
  font-weight: 600;
}

.iwc__loc-select {
  padding: 6px 10px;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 120px;
}

.iwc__nav {
  background: #fafafa;
  border-bottom: 1px solid #e5e5e5;
}

.iwc__nav-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 28px;
  padding: 12px 0;
  font-size: 15px;
}

.iwc__nav-a {
  text-decoration: none;
  color: #333;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
}

.iwc__nav-a:hover {
  color: #c8161d;
}

.iwc__nav-a--on {
  color: #c8161d;
  font-weight: 700;
  border-bottom-color: #c8161d;
}

.iwc__nav-a--muted {
  cursor: default;
  color: #666;
}
</style>
