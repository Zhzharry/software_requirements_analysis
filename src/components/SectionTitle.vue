<script setup>
defineProps({
  title: { type: String, required: true },
  moreText: { type: String, default: '查看更多 >' },
  showMore: { type: Boolean, default: true },
})
</script>

<template>
  <div class="section-title-row">
    <h2 class="section-title">{{ title }}</h2>
    <span v-if="showMore" class="section-more">{{ moreText }}</span>
  </div>
</template>
