// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import axios from './backend/vue-axios'

Vue.config.productionTip = false

// Setting the baseUrl for all the requests
// axios.defaults.baseURL = 'http://sal.test/api'
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = store.state.currentUser
  if (requiresAuth && !currentUser) {
    next('/login?redirect=' + to.path)
  } else if (to.path === '/login' && currentUser) {
    next('/')
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
