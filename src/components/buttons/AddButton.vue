<template>
  <div class="add_button">
    <router-link :to="{name: route}" class="btn btn-primary">
      {{ label }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AddButton',
  props: {
    route: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: 'Додати'
    }
  }
}
</script>

<style scoped>
.add_button{
  text-align: right;
  margin-bottom: 24px
}
</style>
