<template>
  <div class="container-fluid main-container">
      <side-link></side-link>
      <main-app></main-app>
  </div>
</template>
<script>
import SideBar from './SideBar.vue'
import MainView from './Main.vue'
import UserLayout from './layouts/User.vue'
export default {
  name: 'FirstRoute',
  beforeCreate () {
    this.$store.commit('setLayout', 'user')
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'main-app': MainView,
    'side-link': SideBar,
    'user-layout': UserLayout
  }
}
</script>
