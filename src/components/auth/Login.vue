<template>

  <div class='mt-4 col-8 offset2'>
    <div class='card'>
      <div class='card-header'>Login</div>
      <div class='card-body'>
        <form @submit.prevent="validateBeforeSubmit">
            <p class="text-danger" v-if="isAuthError">{{ isAuthError }}</p>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
                </div>
                <p v-show="errors.has('email')" class="text-danger"><i class="fas fa-exclamation-circle"></i> {{ errors.first('email') }}</p>
              </div>
              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input name="password" v-model="password" v-validate="'required|min:5'" :class="{'input': true, 'is-danger': errors.has('password') }" type="password" placeholder="Password">
                </div>
                <p v-show="errors.has('password')" class="text-danger"> <i class="fas fa-exclamation-circle"></i> {{ errors.first('password') }}</p>
              </div>

              <div class="form-group row">
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
        </form>
      </div>
    </div>
  </div>

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
