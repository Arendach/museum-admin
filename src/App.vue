<template>
  <router-view />
</template>

<script>
import {mapActions} from "vuex"

export default {
  name: 'App',
  mounted() {
    this.loadCountries()
  },
  methods: mapActions(['loadCountries'])
}
</script>

<style lang="scss">
@import 'styles/style';
</style>
