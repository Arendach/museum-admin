<template>
  <Wrapper :loaded="loadedTags && loadedArticle">
    <CForm id="editArticle">
      <InputText label="Slug" :item="article" name="slug"></InputText>
      <InputLang label="Назва статті" :item="article" name="title"></InputLang>
      <TextareaLang label="Короткий опис" :item="article" name="short_description"></TextareaLang>
      <EditorLang label="Опис" :item="article" name="description"></EditorLang>
      <MultiSelect
        label="Теги статті"
        :options="mapMultiSelect(tags)"
        :selected="mapMultiSelect(article.tags)"
        name="tags"
      ></MultiSelect>
      <Checkbox name="is_active" label="Активна" :value="article.is_active"></Checkbox>
      <Checkbox name="is_popular" label="Популярна" :value="article.is_popular"></Checkbox>
      <CButton color="primary" @click="updateArticle">Зберегти</CButton>
    </CForm>
  </Wrapper>
</template>

<script>
import InputLang from '@/components/InputLang'
import TextareaLang from '@/components/TextareaLang'
import EditorLang from '@/components/EditorLang'
import MultiSelect from '@/components/MultiSelect'
import Api from '@/lib/Api'
import Wrapper from '@/components/Wrapper'
import Checkbox from "@/components/Checkbox";
import InputText from "@/components/InputText";

export default {
  name: 'EditForm',
  components: {
    InputText,
    Checkbox,
    InputLang,
    TextareaLang,
    EditorLang,
    MultiSelect,
    Wrapper,
  },
  data() {
    return {
      article: {},
      tags: [],
      loadedArticle: false,
      loadedTags: false,
    }
  },
  beforeMount() {
    this.loadArticle()
    this.loadTags()
  },
  methods: {
    loadArticle() {
      Api.get(`/article/${this.$route.params.id}`).then((res) => {
        this.article = res.data
        this.loadedArticle = true
      })
    },
    loadTags() {
      Api.get(`/tags`).then((res) => {
        this.tags = res.data
        this.loadedTags = true
      })
    },
    updateArticle() {
      let form = document.querySelector('#editArticle')
      let data = this.serialize(form)

      Api.put(`/article/${this.article.id}`, data)
        .then(() => this.successToast('Дані збережено'))
        .catch(err => this.showErrors(err))
    },
  },
}
</script>
