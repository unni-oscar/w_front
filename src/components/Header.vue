<template>
  <!-- <div><router-link to="/">Home</router-link> | Login | Logout | Register | <router-link to="/firstroute">First Route</router-link>
  </div> -->

<nav class="navbar navbar-default navbar-static-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">SiteName</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact Us</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
                <li v-if="isLoggedIn"><a  href="#" v-on:click="logout">Logout</a></li>
                <li v-if="!isLoggedIn"><router-link to="/signup">Register</router-link></li>
                <li><router-link to="/user">Dashboard</router-link></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
</template>
<script>
export default {
  computed: {
    isLoggedIn () {
      return this.$store.getters.token
    }
    // getToken () {
    //   return this.$store.getters.token || null
    // }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({path: '/login'})
    }
  }
}
</script>
