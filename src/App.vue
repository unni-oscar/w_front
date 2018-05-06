<template>
  <div id="app">
    <!-- <header-app></header-app> -->
    <!-- <router-view name='default_page'/> -->
    <component v-bind:is="layout"></component>
    Layout used: <strong>{{ layout }} </strong>
  </div>
</template>

<script>

import Default from './components/layouts/Default.vue'
import UserLayout from './components/layouts/User.vue'

export default {
  name: 'App',
  computed: {
    layout () {
      return this.$store.getters.layout
    },
    currentUser () {
      return this.$store.getters.token
    }
  },
  components: {
    'default': Default,
    'user': UserLayout
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
