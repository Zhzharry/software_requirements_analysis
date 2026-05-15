<script setup>
import { computed } from 'vue'

const props = defineProps({
  /** industry：行业区示意；section：双轨能力示意 */
  variant: { type: String, default: 'industry' },
  /** 行业 Tab 索引，用于换一组强调色 */
  paletteIndex: { type: Number, default: 0 },
})

const accents = ['#1565c0', '#00897b', '#6a1b9a', '#c62828', '#ef6c00', '#2e7d32', '#455a64']
const accent = computed(() => accents[props.paletteIndex % accents.length])
</script>

<template>
  <!-- 行业：抽象「阶段 → 中台 → 三块能力」 -->
  <svg
    v-if="variant === 'industry'"
    class="geom geom--industry"
    viewBox="0 0 400 300"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="400" height="300" fill="#eef3f9" rx="10" />
    <rect x="10" y="10" width="380" height="280" fill="none" :stroke="accent" stroke-opacity="0.12" stroke-width="2" rx="8" />

    <g opacity="0.9">
      <rect x="28" y="28" width="76" height="40" :fill="accent" fill-opacity="0.28" rx="6" />
      <rect x="118" y="28" width="76" height="40" :fill="accent" fill-opacity="0.22" rx="6" />
      <rect x="208" y="28" width="76" height="40" :fill="accent" fill-opacity="0.26" rx="6" />
      <rect x="298" y="28" width="76" height="40" :fill="accent" fill-opacity="0.2" rx="6" />
    </g>

    <path
      d="M66 78 L66 108 M154 78 L154 108 M246 78 L246 108 M336 78 L336 108 M66 108 L200 138 M154 108 L200 138 M246 108 L200 138 M336 108 L200 138"
      :stroke="accent"
      stroke-opacity="0.45"
      stroke-width="2"
      fill="none"
    />

    <circle cx="200" cy="148" r="22" :fill="accent" fill-opacity="0.35" />
    <circle cx="200" cy="148" r="10" fill="#fff" fill-opacity="0.85" />

    <path
      d="M200 170 L200 198 M200 198 L92 228 M200 198 L200 228 M200 198 L308 228"
      :stroke="accent"
      stroke-opacity="0.4"
      stroke-width="2"
      fill="none"
    />

    <rect x="40" y="210" width="104" height="68" :fill="accent" fill-opacity="0.15" rx="8" stroke="#fff" stroke-width="2" />
    <rect x="148" y="210" width="104" height="68" :fill="accent" fill-opacity="0.12" rx="8" stroke="#fff" stroke-width="2" />
    <rect x="256" y="210" width="104" height="68" :fill="accent" fill-opacity="0.18" rx="8" stroke="#fff" stroke-width="2" />

    <circle cx="64" cy="232" r="6" :fill="accent" fill-opacity="0.55" />
    <circle cx="200" cy="232" r="6" :fill="accent" fill-opacity="0.55" />
    <circle cx="336" cy="232" r="6" :fill="accent" fill-opacity="0.55" />

    <rect x="260" y="42" width="48" height="14" rx="3" fill="#fff" fill-opacity="0.5" />
    <rect x="48" y="120" width="36" height="10" rx="2" :fill="accent" fill-opacity="0.25" />
  </svg>

  <!-- 双轨能力：双通道 + 交汇 + 播放感三角 -->
  <svg
    v-else
    class="geom geom--section"
    viewBox="0 0 320 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="aiappgeom-sec-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1a237e" stop-opacity="0.92" />
        <stop offset="55%" stop-color="#311b92" stop-opacity="0.88" />
        <stop offset="100%" stop-color="#880e4f" stop-opacity="0.85" />
      </linearGradient>
    </defs>
    <rect width="320" height="200" fill="url(#aiappgeom-sec-bg)" rx="10" />

    <rect x="14" y="52" width="292" height="22" rx="11" fill="#fff" fill-opacity="0.12" />
    <rect x="14" y="126" width="292" height="22" rx="11" fill="#fff" fill-opacity="0.12" />

    <rect x="24" y="58" width="72" height="10" rx="5" fill="#ffab40" fill-opacity="0.85" />
    <rect x="224" y="58" width="72" height="10" rx="5" fill="#69f0ae" fill-opacity="0.75" />

    <rect x="24" y="132" width="88" height="10" rx="5" fill="#80d8ff" fill-opacity="0.8" />
    <rect x="208" y="132" width="88" height="10" rx="5" fill="#ea80fc" fill-opacity="0.75" />

    <circle cx="160" cy="100" r="36" fill="#fff" fill-opacity="0.14" />
    <circle cx="160" cy="100" r="26" fill="#fff" fill-opacity="0.2" />
    <path d="M152 88 L152 112 L176 100 Z" fill="#fff" fill-opacity="0.9" />

    <g fill="#fff" fill-opacity="0.35">
      <rect x="22" y="22" width="40" height="6" rx="2" />
      <rect x="258" y="22" width="40" height="6" rx="2" />
      <rect x="22" y="172" width="52" height="6" rx="2" />
      <rect x="246" y="172" width="52" height="6" rx="2" />
    </g>

    <path
      d="M48 74 L48 46 L78 46 M272 74 L272 46 L242 46 M48 126 L48 154 L78 154 M272 126 L272 154 L242 154"
      stroke="#fff"
      stroke-opacity="0.2"
      stroke-width="1.5"
      fill="none"
    />
  </svg>
</template>

<style scoped>
.geom {
  display: block;
  width: 100%;
  height: auto;
  vertical-align: top;
}

.geom--industry {
  aspect-ratio: 4 / 3;
}

.geom--section {
  aspect-ratio: 16 / 10;
}
</style>
