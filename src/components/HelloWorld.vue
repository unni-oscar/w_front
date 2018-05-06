<template>
  <div>
      Welcome to our homepage
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  beforeCreate () {
    this.$store.commit('setLayout', 'default')
  }
}
</script>
