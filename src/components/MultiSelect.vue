<template>
  <div class="multiselect-container">
    <label class="form-label">{{ label }}</label>
    <VueMultiselect
      v-model="value"
      :options="options"
      :multiple="multiple"
      label="title"
      track-by="id"
      :close-on-select="false"
      :clear-on-select="false"
    ></VueMultiselect>
    <input
      v-for="item in value"
      :key="item.id"
      type="hidden"
      :name="`${name}[]`"
      :value="item.id"
    />
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'

export default {
  name: 'MultiSelect',
  props: {
    options: {
      type: Array,
    },
    selected: {
      type: Array,
    },
    label: {
      type: String,
    },
    name: {
      type: String,
    },
    multiple: {
      type: Boolean,
      default: true,
    }
  },
  components: {
    VueMultiselect,
  },
  created() {
    this.value = this.selected
  },
  data() {
    return {
      value: {},
    }
  },
}
</script>

<style>
.multiselect-container {
  margin-bottom: 15px;
}
</style>
