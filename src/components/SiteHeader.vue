<script setup>
import { RouterLink } from 'vue-router'
import PlaceholderImage from './PlaceholderImage.vue'
import {
  mainNavItems,
  TRAINING_LANDING_TO,
  trainingMegaMenuItems,
} from '../navigation.js'

const searchTypes = ['视频教程']

/** 悬停菜单内左侧红色图标路径（按索引轮换） */
function megaIconSvg(i) {
  const v = i % 5
  const paths = [
    'M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l5.5 3.4v6.8L12 17.8l-5.5-3.4v-6.8L12 4.2zM11 9h2v6h-2V9z',
    'M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v4l3 3-1.4 1.4L11 11.2V7h2z',
    'M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2z',
    'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 2.1L6.5 8.4v7.2L12 18.9l5.5-3.3V8.4L12 5.1z',
    'M9 21h6v-2H9v2zm3-19C8.6 2 6 4.6 6 8h12c0-3.4-2.6-6-6-6zm6 8H9v8h12v-8z',
  ]
  return paths[v]
}
</script>

<template>
  <header class="site-head">
    <div class="site-head__bar site-head__bar--light">
      <div class="container site-head__bar-inner">
        <RouterLink to="/" class="site-head__brand site-head__brand--link">
          <PlaceholderImage ratio="140 / 48" class="site-head__logo" />
          <div class="site-head__brand-text">
            <strong class="site-head__brand-name">白马程序员</strong>
            <span class="site-head__brand-url">www.itheima.com</span>
          </div>
          <span class="site-head__sep" aria-hidden="true" />
          <span class="site-head__lib">视频库</span>
        </RouterLink>
        <div class="site-head__search" role="search">
          <label class="visually-hidden" for="search-type">搜索类型</label>
          <select id="search-type" class="site-head__select" name="type">
            <option v-for="(opt, i) in searchTypes" :key="i" :value="opt">{{ opt }}</option>
          </select>
          <input class="site-head__input" type="search" placeholder="请输入关键词" autocomplete="off" />
          <button type="button" class="site-head__search-btn" aria-label="搜索">⌕</button>
        </div>
        <div class="site-head__account">
          <PlaceholderImage ratio="1" class="site-head__user-ico" />
          <span class="site-head__login">登录</span>
        </div>
      </div>
    </div>
    <nav class="site-head__bar site-head__bar--nav" aria-label="主导航">
      <div class="container site-head__nav-inner">
        <template v-for="(item, i) in mainNavItems" :key="i">
          <div v-if="item.label === '培训课程' && !item.to" class="site-head__mega-wrap">
            <span class="site-head__nav-item site-head__nav-item--mega">{{ item.label }}</span>
            <div class="site-head__mega" role="menu" aria-label="培训课程分类">
              <div class="container site-head__mega-inner">
                <div class="site-head__mega-grid">
                  <RouterLink
                    v-for="(c, ci) in trainingMegaMenuItems"
                    :key="ci"
                    class="site-head__mega-card"
                    :to="TRAINING_LANDING_TO"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                  >
                    <span class="site-head__mega-ico" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                        <path fill="#e4393c" :d="megaIconSvg(ci)" />
                      </svg>
                    </span>
                    <span class="site-head__mega-label">{{ c.label }}</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
          <a
            v-else-if="item.external"
            class="site-head__nav-item site-head__nav-item--link"
            :href="item.external"
            target="_blank"
            rel="noopener noreferrer"
          >{{ item.label }}</a>
          <RouterLink
            v-else-if="item.to"
            class="site-head__nav-item site-head__nav-item--link"
            :to="item.to"
            target="_blank"
            rel="noopener noreferrer"
          >{{ item.label }}</RouterLink>
          <span v-else class="site-head__nav-item">{{ item.label }}</span>
        </template>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.site-head {
  position: sticky;
  top: 0;
  z-index: 30;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}

.site-head__bar--light {
  background: #fff;
  color: #333;
  border-bottom: 1px solid #e8e8e8;
}

.site-head__bar-inner {
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 72px;
  flex-wrap: wrap;
}

.site-head__brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  flex-wrap: nowrap;
}

.site-head__brand--link {
  text-decoration: none;
  color: inherit;
}

.site-head__logo {
  flex-shrink: 0;
}

.site-head__logo :deep(.ph__img) {
  width: 140px;
  max-height: 48px;
  object-fit: contain;
}

.site-head__brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  flex-shrink: 0;
  min-width: max-content;
}

.site-head__brand-name {
  font-size: 20px;
  color: var(--color-primary);
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.site-head__brand-url {
  font-size: 12px;
  color: #999;
  white-space: nowrap;
}

.site-head__sep {
  width: 1px;
  height: 36px;
  background: #ddd;
  flex-shrink: 0;
}

.site-head__lib {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
  writing-mode: horizontal-tb;
  flex-shrink: 0;
}

.site-head__search {
  flex: 1;
  display: flex;
  align-items: stretch;
  min-width: 200px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ccc;
  border-radius: 2px;
  overflow: hidden;
  background: #fafafa;
}

.site-head__select {
  border: none;
  border-right: 1px solid #ddd;
  padding: 0 10px;
  font-size: 14px;
  background: #fff;
  color: #333;
  cursor: default;
}

.site-head__input {
  flex: 1;
  border: none;
  padding: 0 12px;
  font-size: 14px;
  min-width: 0;
  background: transparent;
}

.site-head__input:focus {
  outline: none;
}

.site-head__search-btn {
  width: 44px;
  border: none;
  background: var(--color-primary);
  color: #fff;
  font-size: 18px;
  cursor: default;
}

.site-head__account {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.site-head__user-ico {
  width: 28px;
}

.site-head__user-ico :deep(.ph__img) {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.site-head__login {
  font-size: 14px;
  color: #333;
  cursor: default;
}

.site-head__bar--nav {
  background: #1c2f50;
  color: #fff;
  position: relative;
}

.site-head__nav-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}

.site-head__nav-item {
  padding: 10px 2px;
  cursor: default;
  white-space: nowrap;
  flex: 0 0 auto;
}

.site-head__nav-item--link {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.site-head__nav-item:hover,
.site-head__nav-item--link:hover {
  color: #ffb4b4;
}

.site-head__mega-wrap {
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
}

.site-head__mega-wrap:hover .site-head__nav-item--mega {
  color: #ffb4b4;
}

.site-head__mega {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  padding: 16px 0 24px;
  background: #f4f5f7;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  border-top: 1px solid #e2e4e8;
  z-index: 100;
}

.site-head__mega::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  height: 10px;
}

.site-head__mega-wrap:hover .site-head__mega {
  display: block;
}

.site-head__mega-inner {
  max-width: 1200px;
}

.site-head__mega-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px 14px;
}

@media (max-width: 1100px) {
  .site-head__mega-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .site-head__mega-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.site-head__mega-card {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 56px;
  padding: 10px 14px;
  background: #fff;
  border-radius: 6px;
  text-decoration: none;
  color: #222;
  font-size: 14px;
  border: 1px solid #ececee;
  transition: box-shadow 0.15s ease, transform 0.15s ease, border-color 0.15s ease;
}

.site-head__mega-card:hover {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  border-color: #ddd;
  transform: translateY(-2px);
}

.site-head__mega-ico {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.site-head__mega-ico svg {
  display: block;
}

.site-head__mega-label {
  line-height: 1.4;
  font-weight: 500;
}
</style>
