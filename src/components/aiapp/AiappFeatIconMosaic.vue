<script setup>
defineProps({
  /** gold | green | blue | red — 与特色卡 data-tone 一致 */
  tone: { type: String, required: true },
})
</script>

<template>
  <!-- 学费价格：叠条 + 圆点 -->
  <svg v-if="tone === 'gold'" class="mosaic" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="feat-bg-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffd56b" />
        <stop offset="100%" stop-color="#e6a800" />
      </linearGradient>
    </defs>
    <rect width="44" height="44" rx="8" fill="url(#feat-bg-gold)" />
    <rect x="7" y="24" width="30" height="5" rx="2" fill="#fff" fill-opacity="0.38" />
    <rect x="9" y="17" width="26" height="5" rx="2" fill="#fff" fill-opacity="0.48" />
    <rect x="11" y="10" width="22" height="5" rx="2" fill="#fff" fill-opacity="0.58" />
    <circle cx="33" cy="11" r="4.5" fill="#fff" fill-opacity="0.45" />
    <rect x="6" y="32" width="12" height="3" rx="1" fill="#fff" fill-opacity="0.25" />
  </svg>

  <!-- 课程优势：阶梯层叠 -->
  <svg v-else-if="tone === 'green'" class="mosaic" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="feat-bg-green" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#5ecf8a" />
        <stop offset="100%" stop-color="#1fa85a" />
      </linearGradient>
    </defs>
    <rect width="44" height="44" rx="8" fill="url(#feat-bg-green)" />
    <path d="M6 34 L22 18 L38 34 Z" fill="#fff" fill-opacity="0.18" />
    <rect x="8" y="22" width="28" height="12" rx="3" fill="#fff" fill-opacity="0.28" />
    <rect x="11" y="14" width="22" height="10" rx="3" fill="#fff" fill-opacity="0.4" />
    <circle cx="22" cy="11" r="4" fill="#fff" fill-opacity="0.5" />
  </svg>

  <!-- AI 项目实战：网格 + 连接点 -->
  <svg v-else-if="tone === 'blue'" class="mosaic" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="feat-bg-blue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6eb6ff" />
        <stop offset="100%" stop-color="#1a6fd4" />
      </linearGradient>
    </defs>
    <rect width="44" height="44" rx="8" fill="url(#feat-bg-blue)" />
    <g fill="#fff" fill-opacity="0.35">
      <rect x="9" y="9" width="7" height="7" rx="1.5" />
      <rect x="18.5" y="9" width="7" height="7" rx="1.5" />
      <rect x="28" y="9" width="7" height="7" rx="1.5" />
      <rect x="9" y="18.5" width="7" height="7" rx="1.5" />
      <rect x="18.5" y="18.5" width="7" height="7" rx="1.5" />
      <rect x="28" y="18.5" width="7" height="7" rx="1.5" />
    </g>
    <path
      d="M12.5 28 L22 34 L31.5 28"
      stroke="#fff"
      stroke-opacity="0.55"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12.5" cy="27" r="2.5" fill="#fff" fill-opacity="0.65" />
    <circle cx="22" cy="34" r="2.5" fill="#fff" fill-opacity="0.65" />
    <circle cx="31.5" cy="27" r="2.5" fill="#fff" fill-opacity="0.65" />
  </svg>

  <!-- 就业薪资：柱状 + 上行三角 -->
  <svg v-else class="mosaic" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="feat-bg-red" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ff8a8a" />
        <stop offset="100%" stop-color="#e02020" />
      </linearGradient>
    </defs>
    <rect width="44" height="44" rx="8" fill="url(#feat-bg-red)" />
    <rect x="9" y="26" width="5" height="10" rx="1" fill="#fff" fill-opacity="0.4" />
    <rect x="16" y="20" width="5" height="16" rx="1" fill="#fff" fill-opacity="0.48" />
    <rect x="23" y="14" width="5" height="22" rx="1" fill="#fff" fill-opacity="0.55" />
    <rect x="30" y="22" width="5" height="14" rx="1" fill="#fff" fill-opacity="0.42" />
    <path d="M22 6 L28 14 L16 14 Z" fill="#fff" fill-opacity="0.55" />
  </svg>
</template>

<style scoped>
.mosaic {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
