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
  methods: mapActions(['loadCountries', 'loadTags'])
}
</script>

<style lang="scss">
@import 'styles/style';
</style>
