<template>
  <div class="input-container">
    <label class="form-label">
      <span v-if="required" class="text-danger">*</span>
      {{ label }}
      <span class="hint" v-if="hint" v-c-tooltip="hint"> ? </span>
    </label>
    <input :name="name" type="password" class="form-control">
    <div class="invalid-feedback" :id="name + '_invalid'"></div>
  </div>

  <div class="input-container">
    <label class="form-label">Підтвердіть пароль</label>
    <input :name="`${name}_confirmation`" type="password" class="form-control">
    <div class="invalid-feedback" :id="name + '_confirmation_invalid'"></div>
  </div>
</template>

<script>
export default {
  name: 'PasswordField',
  props: {
    label: {
      type: String,
      default: 'Пароль'
    },
    name: {
      type: String,
      default: 'password'
    },
    required: {
      type: Boolean,
      default: false,
    },
    hint: {
      type: String,
      default: null,
    }
  },
}
</script>

<style>
.input-container {
  margin-bottom: 15px;
}
</style>
