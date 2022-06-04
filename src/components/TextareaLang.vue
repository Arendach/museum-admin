<template>
  <div class="textarea-container">
    <div class="row">
      <div class="col-6">
        <label class="form-label">{{ label }}</label>
      </div>
      <div class="col-6" style="text-align: right">
        <span
          v-for="lang in languages"
          :key="lang.key"
          :class="{active: lang.key === selected}"
          class="btn btn-sm btn-outline-primary"
          @click="selected = lang.key"
        >
          <img style="width: 15px" :src="`/flags/${lang.key}.svg`"/>
        </span>
      </div>
    </div>
    <textarea
      v-for="lang in languages"
      v-show="lang.key === selected"
      :key="lang.key"
      type="text"
      class="form-control"
      v-model="this.editData[lang.key]"
    ></textarea>
    <input
      type="hidden"
      v-for="lang in languages"
      :key="lang.key"
      v-model="this.editData[lang.key]"
      :name="name + lang.postfix"
    />
    <div v-show="lang.key === selected" v-for="lang in languages">
      <div class="invalid-feedback" :id="name + lang.postfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextareaLang',
  props: {
    label: {
      type: String
    },
    item: {
      type: Object,
      default: {}
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      selected: 'ua',
      languages: [],
      editData: {}
    }
  },
  beforeMount() {
    this.languages = this.config('languages')
    this.setEditorData()
  },
  watch: {
    item: function () {
      this.setEditorData()
    },
  },
  methods: {
    setEditorData() {
      for (let lang of this.languages) {
        this.editData[lang.key] = this.item[this.name + lang.postfix]
      }
    },
  },
}
</script>

<style>
.textarea-container {
  margin-bottom: 15px;
}
</style>
