import Vue from 'vue'
import Vuex from 'vuex'
// import { getCurrentUser } from '../helpers/auth'
Vue.use(Vuex)
// const user = getCurrentUser()

export const store = new Vuex.Store({
  state: {
    layout: 'default',
    currentUser: localStorage.getItem('current-user') || null,
    loading: false,
    isLoggedIn: false,
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    setLayout (state, payload) {
      state.layout = payload
    },
    login (state) {
      state.loading = true
      state.isLoggedIn = false
    },
    logout (state) {
      localStorage.removeItem('current-user')
      localStorage.removeItem('token')
      state.currentUser = null
      state.token = ''
      state.loading = true
      state.isLoggedIn = false
    },
    loginSuccess (state, payload) {
      state.loading = false
      state.isLoggedIn = true
      // state.currentUser = Object.assign({}, payload.user, {token: payload.token})
      localStorage.setItem('current-user', JSON.stringify(payload.user))
      state.currentUser = localStorage.getItem('current-user')
      localStorage.token = state.token = payload.token
    },
    loginFailed (state, payload) {
      state.loading = false
    }
  },
  getters: {
    layout (state) {
      return state.layout
    },
    currentUser (state) {
      return state.currentUser
    },
    isLoading (state) {
      return state.loading
    },
    isLoggedIn (state) {
      return state.isLoggedIn
    },
    token (state) {
      return state.token
    }
  },
  actions: {
    login (context) {
      context.commit('login')
    },
    logout (context) {
      context.commit('logout')
    }
  }
})
