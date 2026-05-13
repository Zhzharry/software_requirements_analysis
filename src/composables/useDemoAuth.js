import { computed, readonly, ref } from 'vue'

const STORAGE_KEY = 'itheima-demo-user'

const user = ref(null)
let hydrated = false

function readStored() {
  try {
    return sessionStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeStored(name) {
  try {
    if (name) sessionStorage.setItem(STORAGE_KEY, name)
    else sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
}

export function useDemoAuth() {
  if (!hydrated && typeof sessionStorage !== 'undefined') {
    user.value = readStored()
    hydrated = true
  }

  function login(username) {
    const name = (username || '').trim() || '访客'
    user.value = name
    writeStored(name)
  }

  function logout() {
    user.value = null
    writeStored(null)
  }

  const isLoggedIn = computed(() => !!user.value)

  return {
    user: readonly(user),
    isLoggedIn,
    login,
    logout,
  }
}
