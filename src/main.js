// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import io from 'socket.io-client'

import App from './App'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(VueSocketIO, io('http://localhost:3000', {transports: ['websocket'], upgrade: false}), store)

sync(store, router)

// router.beforeEach((to, from, next) => {
//   console.log(router.app)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
