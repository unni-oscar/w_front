<template>

  <div class='mt-4 col-8 offset2'>
    <div class='card'>
      <div class='card-header'>Register</div>
      <div class='card-body'>
        <form @submit.prevent="validateBeforeSubmit">
            <p class="text-danger" v-if="error">{{ error }}</p>
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
                  <button type="submit" class="btn btn-primary">Sign Up</button>
                </div>
              </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import { register } from '../../helpers/auth'
import $ from 'jquery'
export default {
  name: 'Register',
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
        if (result) {
          this.doRegister()
        }
      })
    },
    doRegister () {
      const app = this
      // Start: Register section
      register({ email: this.email, password: this.password })
        .then((res) => {
          this.$router.push('/register-success')
        })
        .catch((error) => {
          if (error.response.status === 422 && typeof error.response.data === 'object' && error.response.data) {
            $.each(error.response.data.errors, function (field, messages) {
              app.errors.add(field, messages[0])
            })
          } else if (error.response.status === 500 && error.response.data.success === false) {
            this.error = error.response.data.message
          }
        })
        // End: Register section
    }
  }
}
</script>
