<script setup>
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="100%" height="100%" fill="#ececec" stroke="#d0d0d0" stroke-width="2"/>
  <text x="400" y="225" text-anchor="middle" dominant-baseline="middle" fill="#888888" font-size="28" font-family="Microsoft YaHei, sans-serif">请插入图片</text>
</svg>`
const src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`

defineProps({
  ratio: { type: String, default: '16 / 9' },
  alt: { type: String, default: '请插入图片' },
})
</script>

<template>
  <figure class="ph">
    <img class="ph__img" :src="src" :alt="alt" :style="{ aspectRatio: ratio }" />
  </figure>
</template>

<style scoped>
.ph {
  margin: 0;
  width: 100%;
}
.ph__img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  background: #eee;
}
</style>
