<template>
  <router-view />
</template>

<script>
import {mapActions} from "vuex"

export default {
  name: 'App',
  mounted() {
    this.loadCountries()
    this.loadTags()
  },
  methods: mapActions(['loadCountries', 'loadTags']),
  beforeMount() {
    if (!window.localStorage.getItem('access_token')){
      this.$router.push({name: 'auth.login'})
    }
  }
}
</script>

<style lang="scss">
@import 'styles/style';
</style>
