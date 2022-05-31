<template>
  <div class="mb-15" style="margin-bottom: 15px">
    <label class="form-label">{{ label }}</label>
    <VueSelect
      @option:selected="onSelectedOption"
      autocomplete="on"
      :searchable="true"
      :options="items"
      :reduce="item => item.id"
      :label="labelField"
      :placeholder="placeholder"
      v-model="selectedOption"
    ></VueSelect>
    <input type="hidden" :value="selectedOption" :name="name">
  </div>
</template>

<script>
import VueSelect from "vue-select"

export default {
  name: 'VSelect',
  props: {
    options: {
      type: Array,
      default: []
    },
    name: {
      type: String
    },
    label: {
      type: String,
      default: '',
    },
    reduce: {
      type: Function,
      default: item => item.id
    },
    labelField: {
      type: String,
      default: 'title'
    },
    nullable: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: 'Нічого не обрано'
    },
    value: {
      type: [Number, String],
      default: null
    }
  },
  components: {VueSelect},
  data(){
    return {
      items: [],
      selectedOption: null
    }
  },
  methods: {
    onSelectedOption(option){
      this.selectedOption = option.id
    }
  },
  beforeMount() {
    this.selectedOption = this.value
    if (this.nullable) {
      this.items.push({id: null, title: 'Нічого не обрано'})
    }

    this.options.forEach(option => this.items.push(option))
  }
}
</script>

<style>
.vs__dropdown-toggle{
  background-color: #fff;
}
</style>
