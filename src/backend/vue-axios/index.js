import Vue from 'vue'
// can use Vue.axios.get/ this.axios.get & this.$http.get with vue-axios
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)

const API_URL = process.env.API_URL || 'http://sal.test/api'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer ' + localStorage.token
  }
})
