<template>
  <div v-if="!isAuthenticated" class="login-overlay">
    <div class="login-card">
      <div class="logo-area">
        <div class="logo-icon">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="white">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
        </div>
        <h1>MUTUAL</h1>
        <p>Administradora Mutual — Documentação</p>
      </div>
      <div class="access-badge">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        Acesso restrito a usuários autorizados
      </div>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>E-MAIL</label>
          <div class="input-wrapper">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <input v-model="email" type="email" placeholder="seu@email.com.br" required />
          </div>
        </div>
        <div class="form-group">
          <label>SENHA</label>
          <div class="input-wrapper">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••••••" required />
          </div>
        </div>
        <button type="submit" :disabled="loading" class="btn-login">
          {{ loading ? 'Verificando...' : 'Entrar no Portal' }}
        </button>
        <div v-if="error" class="error-msg">{{ error }}</div>
      </form>
      <p class="footer-text">Administradora Mutual — Acesso exclusivo para usuários autorizados.</p>
    </div>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const AUTHORIZED_USERS = [
  { email: 'alessandro@pizzolatto.com.br', password: 'Mmb@2026br$', name: 'Alessandro Pizzolatto' },
  { email: 'junio.tosta@alphanacional.com.br', password: 'Mmb@2026br$', name: 'Junio Tosta' },
  { email: 'adriele.roque@grupommb.com', password: 'Mmb@2026br$', name: 'Adriele Roque' },
]

const STORAGE_KEY = 'mutual_auth_session'

const isAuthenticated = ref(false)
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const error = ref('')
const loading = ref(false)

onMounted(() => {
  try {
    const data = sessionStorage.getItem(STORAGE_KEY)
    if (data) {
      const session = JSON.parse(data)
      if (session?.user?.email) {
        const ok = AUTHORIZED_USERS.some(u => u.email.toLowerCase() === session.user.email.toLowerCase())
        if (ok) isAuthenticated.value = true
      }
    }
  } catch {}
})

async function handleLogin() {
  error.value = ''
  loading.value = true
  await new Promise(r => setTimeout(r, 400))
  const found = AUTHORIZED_USERS.find(
    u => u.email.toLowerCase() === email.value.trim().toLowerCase() && u.password === password.value
  )
  if (found) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ user: { email: found.email, name: found.name }, timestamp: new Date().toISOString() }))
    isAuthenticated.value = true
  } else {
    error.value = 'E-mail ou senha incorretos.'
  }
  loading.value = false
}
</script>

<style scoped>
.login-overlay {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #1565c0 100%);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999; padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.login-card {
  background: white; border-radius: 16px; padding: 2.5rem 2rem;
  width: 100%; max-width: 420px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.logo-area { text-align: center; margin-bottom: 2rem; }
.logo-icon {
  width: 64px; height: 64px; background: #1a237e; border-radius: 12px;
  display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;
}
.logo-area h1 { font-size: 1.5rem; font-weight: 700; color: #1a237e; letter-spacing: 0.05em; margin: 0; }
.logo-area p { font-size: 0.8rem; color: #666; letter-spacing: 0.05em; margin-top: 0.25rem; }
.access-badge {
  display: flex; align-items: center; gap: 0.5rem;
  background: #f0f4ff; border: 1px solid #c5cae9; border-radius: 8px;
  padding: 0.75rem 1rem; margin-bottom: 1.5rem; font-size: 0.875rem; color: #3949ab; font-weight: 500;
}
.form-group { margin-bottom: 1.25rem; }
.form-group label { display: block; font-size: 0.75rem; font-weight: 700; color: #333; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.5rem; }
.input-wrapper { position: relative; display: flex; align-items: center; }
.input-wrapper svg { position: absolute; left: 0.875rem; color: #999; pointer-events: none; }
.input-wrapper input {
  width: 100%; padding: 0.75rem 0.875rem 0.75rem 2.75rem;
  border: 2px solid #e0e0e0; border-radius: 8px; font-size: 0.9rem; color: #333; outline: none;
}
.input-wrapper input:focus { border-color: #1a237e; }
.btn-login {
  width: 100%; padding: 0.875rem; background: #1a237e; color: white; border: none;
  border-radius: 8px; font-size: 0.9rem; font-weight: 700; letter-spacing: 0.08em;
  text-transform: uppercase; cursor: pointer; margin-top: 0.5rem;
}
.btn-login:disabled { background: #9fa8da; cursor: not-allowed; }
.error-msg {
  background: #ffebee; border: 1px solid #ef9a9a; border-radius: 8px;
  padding: 0.75rem 1rem; color: #c62828; font-size: 0.85rem; margin-top: 1rem; text-align: center;
}
.footer-text { text-align: center; font-size: 0.75rem; color: #999; margin-top: 1.5rem; }
</style>
