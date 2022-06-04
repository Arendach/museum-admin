<template>
  <Wrapper :loaded="true">
    <CForm id="createTag">
      <InputLang label="Назва тегу" name="title"></InputLang>
      <CButton color="primary" @click="createTag">Зберегти</CButton>
    </CForm>
  </Wrapper>
</template>

<script>
import InputLang from '@/components/InputLang'
import Api from '@/lib/Api'
import Wrapper from "@/components/Wrapper";

export default {
  name: 'AddForm',
  components: {
    InputLang,
    Wrapper
  },

  methods: {
    createTag() {
      let data = this.serialize(document.querySelector('#createTag'))

      Api.post('/tags', data)
        .then(() => {
          this.successToast('Дані збережено')
          this.$router.push({name: 'tags.list'})
        })
        .catch(err => this.showErrors(err))
    }
  }
}
</script>
