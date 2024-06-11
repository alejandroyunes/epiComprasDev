import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
import App from './App.vue'
import router from './router'
import { createGtm } from '@gtm-support/vue-gtm'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig(config))

app.mount('#app')

app.use(
  createGtm({
    id: 'GTM-MH2FQW5F',
    defer: false,
    compatibility: false,
    // nonce: '1234',
    enabled: true,
    debug: true,
    loadScript: false,
    vueRouter: router,
    // ignoredViews: ['homepage'],
    trackOnNextTick: false
  })
)
