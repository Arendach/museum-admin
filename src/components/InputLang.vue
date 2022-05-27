<template>
  <div class="input-container">
    <div class="row">
      <div class="col-6">
        <label class="form-label">{{ label }}</label>
      </div>
      <div class="col-6" style="text-align: right">
        <span
          v-for="lang in languages"
          :key="lang.key"
          :class="{
            active: lang.key === selected,
            btn: true,
            'btn-sm': true,
            'btn-outline-primary': true,
          }"
          @click="selected = lang.key"
        >
          <img style="width: 15px" :src="`/flags/${lang.key}.svg`"/>
        </span>
      </div>
    </div>
    <div v-for="lang in languages">
      <div
        :id="name + lang.postfix"
        v-show="lang.key === selected"
        class="form-control"
        contenteditable="true"
        @input="updateItem(name + lang.postfix)"
      >{{ item[name + lang.postfix] }}
      </div>
    </div>

    <input
      v-for="field in fields"
      :key="field.name"
      :name="field.name"
      :value="field.value"
      type="hidden">
  </div>
</template>

<script>
export default {
  name: 'InputLang',
  props: {
    label: String,
    item: {
      type: Object,
      default: {}
    },
    name: String
  },
  data() {
    return {
      selected: 'ua',
      languages: [],
      fields: [],
    }
  },
  mounted() {
    this.languages = this.config('languages')
    this.languages.forEach(lang => {
      this.fields.push({
        name: `${this.name}${lang.postfix}`,
        value: this.item[`${this.name}${lang.postfix}`] ?? ''
      })
    })
  },
  methods: {
    updateItem(item) {
      let content = this.$el.querySelector(`#${item}`).innerHTML

      this.fields.map(field => {
        if (field.name === item) field.value = content

        return field
      })
    }
  }
}
</script>

<style>
.input-container {
  margin-bottom: 15px;
}
</style>
