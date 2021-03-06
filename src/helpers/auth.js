import axios from '../backend/vue-axios'

/**
 *
 */
export function getCurrentUser () {
  const user = localStorage.getItem('current-user')
  if (!user) {
    return null
  } else {
    return user
  }
}

/**
 *
 * @param {*} credentials
 */
export function login (credentials) {
  return new Promise((resolve, reject) => {
    axios.post(
      '/login',
      credentials)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(err => {
        localStorage.removeItem('current-user')
        localStorage.removeItem('token')
        reject(err)
      })
  })
}

/**
 *
 * @param {*} credentials
 */
export function register (credentials) {
  return new Promise((resolve, reject) => {
    axios.post(
      '/register',
      credentials)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
