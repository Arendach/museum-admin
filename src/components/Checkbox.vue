<template>
  <div class="form-check mb-15">
    <input class="form-check-input" type="checkbox" :checked="isChecked" :id="name + 'checkbox'" @change="update">
    <input type="hidden" :name="inputName" :value="hiddenValue">
    <label class="form-check-label" :for="name + 'checkbox'" :class="{'text-primary': isChecked}">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Активний'
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
    wrapper: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      isChecked: false,
      hiddenValue: 0,
    }
  },
  computed: {
    inputName(){
      return this.wrapper
        ? `${this.wrapper}[${this.name}]`
        : this.name
    }
  },
  beforeMount() {
    this.isChecked = this.value
    this.hiddenValue = this.value ? 1 : 0
  },
  methods: {
    update() {
      this.isChecked = !this.isChecked
      this.hiddenValue = this.isChecked ? 1 : 0
    }
  },
}
</script>
