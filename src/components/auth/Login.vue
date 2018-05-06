<template>
  <form @submit.prevent="authenticate">
      <h1>Sign in</h1>
      <div class="alert alert-danger" v-if="isAuthError">{{ isAuthError }}</div>
      <label>Email</label>
      <input required v-model="email" type="text" name="email" id="email" placeholder="Email"/>
      <label>Password</label>
      <input required v-model="password" type="password" name="password" id="password" placeholder="Password"/>
      <hr/>
      <button type="submit">Login</button>
  </form>
</template>

<script>
import { login } from '../../helpers/auth'
export default {
  name: 'Login',
  computed: {
    isAuthError () {
      return this.error
    }
  },
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    authenticate () {
      this.$store.dispatch('login')
      login({email: this.email, password: this.password})
        .then((res) => {
          this.$store.commit('loginSuccess', res)
          this.$router.replace(this.$route.query.redirect || '/user')
        })
        .catch((error) => {
          this.$store.commit('loginFailed', {error})
          this.error = error.response.data.error
        })
    }
  }
}
</script>
