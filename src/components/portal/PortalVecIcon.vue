<script setup>
import { useId } from 'vue'

defineProps({
  /** salary | project | community | about | tab-ai | tab-llm | tab-code | tab-device | tab-chip | tab-check | tab-gear | tab-design | strip-trend */
  name: { type: String, required: true },
  size: { type: [Number, String], default: 36 },
})

const gradId = `portal-tab-${useId().replace(/:/g, '')}`
</script>

<template>
  <svg
    class="portal-vec"
    :width="size"
    :height="size"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient :id="gradId" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ff8a8a" />
        <stop offset="0.5" stop-color="#c8161d" />
        <stop offset="1" stop-color="#a11218" />
      </linearGradient>
    </defs>
    <!-- 就业薪资 -->
    <g v-if="name === 'salary'">
      <rect x="4" y="20" width="6" height="10" rx="1" fill="#c8161d" opacity="0.85" />
      <rect x="12" y="14" width="6" height="16" rx="1" fill="#c8161d" />
      <rect x="20" y="8" width="6" height="22" rx="1" fill="#ff6b6b" />
      <circle cx="26" cy="8" r="5" fill="#fff" stroke="#c8161d" stroke-width="1.5" />
      <path d="M24 8h4M26 6v4" stroke="#c8161d" stroke-width="1.2" stroke-linecap="round" />
    </g>

    <!-- 实战项目 -->
    <g v-else-if="name === 'project'">
      <rect x="5" y="8" width="26" height="20" rx="3" fill="#fff" stroke="#c8161d" stroke-width="1.8" />
      <path d="M5 14h26" stroke="#c8161d" stroke-width="1.5" />
      <circle cx="10" cy="11" r="1.5" fill="#ff6b6b" />
      <circle cx="14" cy="11" r="1.5" fill="#ffc107" />
      <circle cx="18" cy="11" r="1.5" fill="#4caf50" />
      <rect x="9" y="18" width="14" height="3" rx="1" fill="#e8f4fc" />
      <rect x="9" y="23" width="10" height="2" rx="1" fill="#c8161d" opacity="0.4" />
    </g>

    <!-- 学员社区 -->
    <g v-else-if="name === 'community'">
      <circle cx="12" cy="14" r="5" fill="#ffc9c9" stroke="#c8161d" stroke-width="1.5" />
      <circle cx="24" cy="14" r="5" fill="#ffe8e8" stroke="#c8161d" stroke-width="1.5" />
      <path d="M6 28c0-4 3.5-7 8-7h8c4.5 0 8 3 8 7" stroke="#c8161d" stroke-width="1.5" fill="#fff" />
      <circle cx="18" cy="12" r="4" fill="#c8161d" opacity="0.9" />
      <path d="M14 28c0-3 2-5 4-5s4 2 4 5" fill="#ffe8e8" stroke="#c8161d" stroke-width="1.2" />
    </g>

    <!-- 关于白马 -->
    <g v-else-if="name === 'about'">
      <circle cx="18" cy="18" r="12" fill="#fff" stroke="#c8161d" stroke-width="2" />
      <path d="M18 10v8l5 3" stroke="#c8161d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="18" cy="18" r="2" fill="#c8161d" />
    </g>

    <!-- 学科 Tab：AI -->
    <g v-else-if="name === 'tab-ai'">
      <rect width="36" height="36" rx="10" :fill="`url(#${gradId})`" />
      <circle cx="18" cy="14" r="4" fill="#fff" opacity="0.95" />
      <path d="M10 24h16M14 20h8" stroke="#fff" stroke-width="2" stroke-linecap="round" />
      <circle cx="12" cy="10" r="1.5" fill="#fff" />
      <circle cx="24" cy="10" r="1.5" fill="#fff" />
      <circle cx="18" cy="8" r="1.5" fill="#fff" />
    </g>

    <g v-else-if="name === 'tab-llm'">
      <rect width="36" height="36" rx="10" :fill="`url(#${gradId})`" />
      <rect x="10" y="10" width="16" height="4" rx="1" fill="#fff" opacity="0.9" />
      <rect x="10" y="16" width="16" height="4" rx="1" fill="#fff" opacity="0.75" />
      <rect x="10" y="22" width="16" height="4" rx="1" fill="#fff" opacity="0.55" />
    </g>

    <g v-else-if="name === 'tab-code'">
      <rect width="36" height="36" rx="10" :fill="`url(#${gradId})`" />
      <path d="M12 12l-4 6 4 6M24 12l4 6-4 6M20 10l-4 16" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </g>

    <g v-else-if="name === 'tab-device'">
      <rect width="36" height="36" rx="10" :fill="`url(#${gradId})`" />
      <rect x="12" y="8" width="12" height="20" rx="2" fill="#fff" />
      <circle cx="18" cy="24" r="1.5" fill="#c8161d" />
    </g>

    <g v-else-if="name === 'tab-chip'">
      <rect width="36" height="36" rx="10" :fill="`url(#${gradId})`" />
      <rect x="11" y="11" width="14" height="14" rx="2" fill="#fff" />
      <path d="M11 15H7M11 21H7M25 15h4M25 21h4M15 11V7M21 11V7M15 29v4M21 29v4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
    </g>

    <g v-else-if="name === 'tab-check'">
      <rect width="36" height="36" rx="10" :fill="`url(#${gradId})`" />
      <rect x="9" y="9" width="18" height="18" rx="3" fill="#fff" opacity="0.2" stroke="#fff" stroke-width="1.5" />
      <path d="M13 18l3 3 7-8" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    </g>

    <g v-else-if="name === 'tab-gear'">
      <rect width="36" height="36" rx="10" :fill="`url(#${gradId})`" />
      <circle cx="18" cy="18" r="6" fill="none" stroke="#fff" stroke-width="2" />
      <circle cx="18" cy="18" r="2.5" fill="#fff" />
      <path d="M18 8v3M18 25v3M8 18h3M25 18h3M11 11l2 2M23 23l2 2M11 25l2-2M23 13l2-2" stroke="#fff" stroke-width="1.8" stroke-linecap="round" />
    </g>

    <g v-else-if="name === 'tab-design'">
      <rect width="36" height="36" rx="10" :fill="`url(#${gradId})`" />
      <path d="M10 26c8-12 16-12 16 0" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" />
      <circle cx="14" cy="14" r="3" fill="#fff" />
      <circle cx="22" cy="18" r="2" fill="#fff" opacity="0.8" />
    </g>

    <!-- 薪资条装饰 -->
    <g v-else-if="name === 'strip-trend'">
      <rect x="6" y="22" width="5" height="8" rx="1" fill="#fff" opacity="0.5" />
      <rect x="14" y="16" width="5" height="14" rx="1" fill="#fff" opacity="0.75" />
      <rect x="22" y="10" width="5" height="20" rx="1" fill="#fff" />
      <path d="M8 12l10-6 10 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </g>

  </svg>
</template>

<style scoped>
.portal-vec {
  display: block;
  flex-shrink: 0;
}
</style>
