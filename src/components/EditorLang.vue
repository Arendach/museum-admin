<template>
  <div class="editor-container">
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
    <div
      v-for="lang in languages"
      :key="lang.key"
      v-show="lang.key === selected"
    >
      <ckeditor
        v-model="this.editorData[lang.key]"
        :editor="editor"
        :config="editorConfig"
      ></ckeditor>
    </div>
    <input
      type="hidden"
      v-for="lang in languages"
      :key="lang.key"
      v-model="this.editorData[lang.key]"
      :name="name + lang.postfix"
    />
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import UploadAdapter from "@/lib/UploadAdapter"

export default {
  name: 'EditorLang',
  props: {
    label: {
      type: [String],
    },
    item: {
      type: [Object],
      default: {}
    },
    name: {
      type: [String],
    },
  },
  data() {
    return {
      editor: ClassicEditor,
      selected: 'ua',
      languages: [],
      editorConfig: {
        placeholder: 'Enter text',
        extraPlugins: [this.uploader]
      },
      editorData: {},
    }
  },
  watch: {
    item: function () {
      this.setEditorData()
    },
  },
  beforeMount() {
    this.languages = this.config('languages')
    this.setEditorData()
  },
  methods: {
    setEditorData() {
      for (let lang of this.languages) {
        this.editorData[lang.key] = this.item[this.name + lang.postfix]
      }
    },
    uploader(editor) {
      return editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new UploadAdapter(loader)
      }
    },
  },
}
</script>

<style>
.editor-container {
  margin-bottom: 15px;
}
</style>
