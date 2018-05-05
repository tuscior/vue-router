// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import customRouter from './plugin'

Vue.config.productionTip = false

const routes = {
  '/': () => import('./components/Home'),
  '/arts': () => import('./components/Arts')
}

Vue.use(customRouter, {
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
