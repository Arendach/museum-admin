<template>
  <div class="input-container">
    <label class="form-label">{{ label }}</label>
    <input :name="name" :value="item[name]" type="text" class="form-control">
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    label: String,
    item: {
      type: Object,
      default: {}
    },
    name: String
  },
}
</script>

<style>
.input-container {
  margin-bottom: 15px;
}
</style>
