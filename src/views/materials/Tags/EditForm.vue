<template>
  <Wrapper :loaded="loadedTag">
    <CForm id="editTag">
      <InputText label="Slug" :item="tag" name="slug"></InputText>
      <InputLang label="Назва тега" :item="tag" name="title"></InputLang>
      <CButton color="primary" @click="updateTag">Зберегти</CButton>
    </CForm>
  </Wrapper>
</template>

<script>
import InputLang from '@/components/InputLang'
import Api from '@/lib/Api'
import Wrapper from '@/components/Wrapper'
import InputText from "@/components/InputText";

export default {
  name: 'EditForm',
  components: {
    InputText,
    InputLang,
    Wrapper,
  },
  data() {
    return {
      tag: [],
      loadedTag: false,
    }
  },
  beforeMount() {
    this.loadTag()
  },
  methods: {
    loadTag() {
      Api.get(`/tags/${this.$route.params.id}`).then((res) => {
        this.tag = res.data
        this.loadedTag = true
      })
    },
    updateTag() {
      let data = this.serialize(document.querySelector('#editTag'))

      Api.put(`/tags/${this.tag.id}`, data)
        .then(() => this.successToast('Дані збережено'))
        .catch(err => this.showErrors(err))
    },
  },
}
</script>
