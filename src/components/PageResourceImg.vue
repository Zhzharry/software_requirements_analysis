<script setup>
import { computed } from 'vue'
import PlaceholderImage from './PlaceholderImage.vue'

const props = defineProps({
  /** 图片 URL（由 pageImage / pageImageAt 等生成） */
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  ratio: { type: String, default: '16 / 9' },
  imgClass: { type: String, default: '' },
})

const hasSrc = computed(() => Boolean(props.src))
</script>

<template>
  <img
    v-if="hasSrc"
    :src="src"
    :alt="alt"
    class="pri-img"
    :class="imgClass"
    :style="{ aspectRatio: ratio }"
    loading="lazy"
    decoding="async"
  />
  <PlaceholderImage v-else :ratio="ratio" :alt="alt" :class="imgClass" />
</template>

<style scoped>
.pri-img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  background: #eee;
}
</style>
