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
      '/user/signin',
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
