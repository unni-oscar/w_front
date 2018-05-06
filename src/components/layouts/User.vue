<template>
  <div>
    <header-app></header-app>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '../Header.vue'
export default {
  name: 'User',
  components: {
    'header-app': Header
  }
}
</script>
