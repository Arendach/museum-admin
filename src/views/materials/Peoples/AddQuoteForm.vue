<template>
  <CForm id="createQuote">
    <InputLang label="Цитата" name="title" :item="{}"></InputLang>
    <input type="hidden" name="people_id" :value="$route.params.id" />
    <CButton color="primary" @click="createQuote">Зберегти</CButton>
  </CForm>
</template>

<script>
import InputLang from '@/components/InputLang'
import Api from '@/lib/Api'

export default {
  name: 'AddQuoteForm',
  components: { InputLang },
  methods: {
    createQuote() {
      let form = document.querySelector('#createQuote')

      let data = this.serialize(form)

      Api.post('/quotes', data).then(() => {
        this.successToast('Дані збережено')
        this.$router.push(`/peoples/edit/${this.$route.params.id}`)
      })
    },
  },
}
</script>
