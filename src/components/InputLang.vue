<template>
  <div class="input-container">
    <div class="row">
      <div class="col-6">
        <label class="form-label">
          <span class="text-danger" v-if="required">*</span>
          {{ label }}
          <span class="hint" v-if="hint !== null" v-c-tooltip="hint"> ? </span>
        </label>
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
      <div v-show="lang.key === selected">
        <div class="invalid-feedback" :id="name + lang.postfix + '_invalid'"></div>
      </div>
    </div>

    <input
      v-for="field in fields"
      :key="field.name"
      :name="hiddenInputName(field.name)"
      :value="field.value"
      type="hidden">
  </div>
</template>

<script>
export default {
  name: 'InputLang',
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
    required: {
      type: Boolean,
      default: false,
    },
    wrapper: {
      type: String,
      default: null,
    },
    hint: {
      type: String,
      default: null,
    }
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
      let content = this.$el.querySelector(`#${item}`).innerText

      this.fields.map(field => {
        if (field.name === item) field.value = content

        return field
      })
    },
    hiddenInputName(name) {
      return this.wrapper ?
        `${this.wrapper}[${name}]`
        : name
    }
  }
}
</script>

<style>
.input-container {
  margin-bottom: 15px;
}

.hint {
  border-radius: 12px;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: #3891ff;
  text-align: center;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}
</style>
