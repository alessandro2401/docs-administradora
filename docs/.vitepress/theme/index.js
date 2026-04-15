import DefaultTheme from 'vitepress/theme'
import AuthGuard from './AuthGuard.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(AuthGuard, null, {
      default: () => h(DefaultTheme.Layout)
    })
  }
}
