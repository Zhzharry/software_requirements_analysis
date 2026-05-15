<script setup>
import { PROJECT_LOGO_URL, PROJECT_LOGO_ALT } from '../assets/brand.js'

defineProps({
  /** header：顶栏横条 | mark：门户圆标 | compact：路线图顶栏 | avatar：顶栏用户位小图 */
  variant: {
    type: String,
    default: 'header',
    validator: (v) => ['header', 'mark', 'compact', 'avatar'].includes(v),
  },
})
</script>

<template>
  <img
    class="brand-logo"
    :class="`brand-logo--${variant}`"
    :src="PROJECT_LOGO_URL"
    :alt="PROJECT_LOGO_ALT"
  />
</template>

<style scoped>
.brand-logo {
  display: block;
  object-fit: contain;
  flex-shrink: 0;
}

.brand-logo--header {
  width: auto;
  height: 48px;
  max-width: 140px;
}

.brand-logo--compact {
  width: auto;
  height: 40px;
  max-width: 120px;
}

.brand-logo--mark {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(200, 22, 29, 0.25);
}

.brand-logo--avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
