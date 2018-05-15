import axios from 'axios'

const API_URL = process.env.API_URL || 'http://w_back.test/api'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer ' + localStorage.token
  }
})
