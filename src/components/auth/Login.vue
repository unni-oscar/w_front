<template>
  <form @submit.prevent="validateBeforeSubmit">
      <h1>Sign in</h1>
      <p class="text-danger" v-if="isAuthError">{{ isAuthError }}</p>
      <label>Email</label>
      <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
      <p v-show="errors.has('email')" class="text-danger"><i class="fas fa-exclamation-circle"></i> {{ errors.first('email') }}</p>
      <label>Password</label>
      <input name="password" v-model="password" v-validate="'required|min:5'" :class="{'input': true, 'is-danger': errors.has('password') }" type="password" placeholder="Password">
      <p v-show="errors.has('password')" class="text-danger"> <i class="fas fa-exclamation-circle"></i> {{ errors.first('password') }}</p>
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
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        console.log(result)
        if (result) {
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
      })
    }
  }
}
</script>
