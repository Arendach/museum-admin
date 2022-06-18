<template>
  <Wrapper :loaded="true">
    <CForm id="createArticle">
      <InputLang label="Назва статті" name="title"></InputLang>
      <TextareaLang label="Короткий опис" name="short_description"></TextareaLang>
      <MultiSelect label="Теги статті" :options="mapMultiSelect(tags)" name="tags"
      ></MultiSelect>
      <EditorLang label="Опис" name="description"></EditorLang>
      <Checkbox name="is_active" label="Активна" :value="false"></Checkbox>
      <Checkbox name="is_popular" label="Популярна" :value="false"></Checkbox>
      <CButton color="primary" @click="createArticle">Зберегти</CButton>
    </CForm>
  </Wrapper>
</template>

<script>
import InputLang from '@/components/InputLang'
import InputText from "@/components/InputText"
import EditorLang from "@/components/EditorLang"
import VSelect from "@/components/VSelect"
import Api from '@/lib/Api'
import Wrapper from "@/components/Wrapper"
import TextareaLang from "@/components/TextareaLang"
import MultiSelect from "@/components/MultiSelect"
import Checkbox from "@/components/Checkbox"

export default {
  name: 'AddForm',
  components: {
    Checkbox,
    MultiSelect,
    TextareaLang,
    InputLang,
    VSelect,
    InputText,
    EditorLang,
    Wrapper
  },
  data() {
    return {
      tags: []
    }
  },
  beforeMount() {
    this.loadTags()
  },
  methods: {
    createArticle() {
      let data = this.serialize(document.querySelector('#createArticle'))

      Api.post('/articles', data).then(() => {
        this.successToast('Дані збережено')
        this.$router.push({name: 'articles.list'})
      })
    },
    loadTags() {
      Api.get('/tags').then(r => this.tags = r.data)
    }
  }
}
</script>
