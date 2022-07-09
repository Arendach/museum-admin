<template>
  <div class="input-container">
    <label class="form-label">
      <span class="text-danger" v-if="required">*</span>
      {{ label }}
      <span class="hint" v-if="hint !== null" v-c-tooltip="hint"> ? </span>
    </label>
    <input :name="name" :value="item[name]" type="text" class="form-control">
    <div class="invalid-feedback" :id="name + '_invalid'"></div>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    label: {
      type: String,
      required: true,
    },
    item: {
      type: Object,
      default: {}
    },
    name: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style>
.input-container {
  margin-bottom: 15px;
}
</style>
