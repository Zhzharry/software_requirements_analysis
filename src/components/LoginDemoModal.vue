<script setup>
import { ref, watch } from 'vue'
import { useDemoAuth } from '../composables/useDemoAuth.js'

const props = defineProps({
  open: { type: Boolean, default: false },
})

const emit = defineEmits(['update:open'])

const { login } = useDemoAuth()

const username = ref('')
const password = ref('')
const error = ref('')

watch(
  () => props.open,
  (v) => {
    if (v) {
      error.value = ''
      username.value = ''
      password.value = ''
    }
  },
)

function close() {
  emit('update:open', false)
}

function onSubmit() {
  error.value = ''
  if (!username.value.trim()) {
    error.value = '请输入用户名（示例：任意昵称即可）'
    return
  }
  login(username.value)
  emit('update:open', false)
}
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="login-dim" role="presentation" @click.self="close" />
    <div
      v-if="open"
      class="login-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-demo-title"
    >
      <h2 id="login-demo-title" class="login-dialog__h">登录（示例）</h2>
      <p class="login-dialog__tip">演示用：输入任意用户名即可登录，密码不校验。</p>
      <form class="login-dialog__form" @submit.prevent="onSubmit">
        <label class="login-dialog__label">
          <span>用户名</span>
          <input v-model="username" type="text" class="login-dialog__input" autocomplete="username" placeholder="例如：张三" />
        </label>
        <label class="login-dialog__label">
          <span>密码</span>
          <input
            v-model="password"
            type="password"
            class="login-dialog__input"
            autocomplete="current-password"
            placeholder="示例中可不填"
          />
        </label>
        <p v-if="error" class="login-dialog__err">{{ error }}</p>
        <div class="login-dialog__actions">
          <button type="button" class="login-dialog__btn login-dialog__btn--ghost" @click="close">取消</button>
          <button type="submit" class="login-dialog__btn login-dialog__btn--primary">登录</button>
        </div>
      </form>
    </div>
  </Teleport>
</template>

<style scoped>
.login-dim {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.45);
}

.login-dialog {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 201;
  width: min(400px, calc(100vw - 32px));
  margin: 0;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  background: #fff;
}

.login-dialog__h {
  margin: 0 0 8px;
  font-size: 18px;
  color: #222;
}

.login-dialog__tip {
  margin: 0 0 18px;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

.login-dialog__form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.login-dialog__label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  color: #444;
}

.login-dialog__input {
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

.login-dialog__input:focus {
  outline: 2px solid rgba(200, 22, 29, 0.25);
  border-color: var(--color-primary, #c8161d);
}

.login-dialog__err {
  margin: 0;
  font-size: 13px;
  color: #c00;
}

.login-dialog__actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 4px;
}

.login-dialog__btn {
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: #fff;
}

.login-dialog__btn--ghost:hover {
  background: #f5f5f5;
}

.login-dialog__btn--primary {
  border-color: var(--color-primary, #c8161d);
  background: var(--color-primary, #c8161d);
  color: #fff;
}

.login-dialog__btn--primary:hover {
  filter: brightness(1.05);
}
</style>
