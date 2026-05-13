<script setup>
import { RouterLink } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import PlaceholderImage from '../components/PlaceholderImage.vue'
import { getAllGongjuTools } from '../data/gongjuTools.js'

const tools = getAllGongjuTools()
</script>

<template>
  <SiteHeader />
  <main class="gj">
    <div class="container gj__inner">
      <div class="gj__head">
        <h1 class="gj__title">热门学习工具</h1>
        <span class="gj__more">查看更多 &gt;</span>
      </div>
      <div class="gj__grid">
        <article v-for="t in tools" :key="t.id" class="gj__card">
          <RouterLink class="gj__card-link" :to="`/gongju/${t.id}`">
            <PlaceholderImage ratio="280 / 140" />
          </RouterLink>
          <h2 class="gj__name">
            <RouterLink class="gj__name-link" :to="`/gongju/${t.id}`">{{ t.name }}</RouterLink>
          </h2>
          <span class="gj__tag">{{ t.tag }}</span>
          <p class="gj__desc">{{ t.desc }}</p>
          <div class="gj__foot">
            <RouterLink class="gj__dl" :to="`/gongju/${t.id}`">查看详情</RouterLink>
            <span class="gj__num">{{ t.downloads }}</span>
          </div>
        </article>
      </div>
    </div>
  </main>
  <SiteFooter />
</template>

<style scoped>
.gj__inner {
  padding: 24px 16px 40px;
}

.gj__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 8px;
}

.gj__title {
  margin: 0;
  font-size: 20px;
}

.gj__more {
  font-size: 14px;
  color: var(--color-muted);
  cursor: default;
}

.gj__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 960px) {
  .gj__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .gj__grid {
    grid-template-columns: 1fr;
  }
}

.gj__card {
  border: 1px solid var(--color-border);
  padding: 12px;
  background: #fafafa;
}

.gj__name {
  margin: 10px 0 6px;
  font-size: 16px;
}

.gj__tag {
  display: inline-block;
  font-size: 12px;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.gj__desc {
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.55;
  color: #444;
}

.gj__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.gj__card-link {
  display: block;
  text-decoration: none;
}

.gj__name-link {
  color: inherit;
  text-decoration: none;
}

.gj__name-link:hover {
  color: var(--color-primary);
}

.gj__dl {
  display: inline-block;
  padding: 6px 14px;
  border: none;
  background: var(--color-primary);
  color: #fff;
  font-size: 13px;
  text-decoration: none;
  border-radius: 2px;
}

.gj__dl:hover {
  filter: brightness(1.06);
}

.gj__num {
  font-size: 12px;
  color: var(--color-muted);
}

</style>
