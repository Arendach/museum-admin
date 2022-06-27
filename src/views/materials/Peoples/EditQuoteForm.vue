<template>
  <Wrapper :loaded="quote.id !== undefined">
    <CForm id="editQuote">
      <InputLang label="Цитата" name="title" :item="quote"></InputLang>
      <input type="hidden" name="people_id" :value="quote.people_id"/>
      <CButton color="primary" @click="updateQuote">Зберегти</CButton>
    </CForm>
  </Wrapper>
</template>

<script>
import InputLang from '@/components/InputLang'
import Api from '@/lib/Api'
import Wrapper from '@/components/Wrapper'

export default {
  name: 'EditQuoteForm',
  components: {InputLang, Wrapper},
  data() {
    return {
      quote: {},
    }
  },
  mounted() {
    this.loadQuote()
  },
  methods: {
    updateQuote() {
      let data = this.serialize(document.querySelector('#editQuote'))

      Api.put(`/quotes/${this.$route.params.quote_id}`, data).then(() => {
        this.successToast('Дані збережено')
        this.$router.push({name: 'peoples.edit', params: {id: this.quote.people_id}})
      })
    },
    loadQuote() {
      Api.get(`/quotes/${this.$route.params.quote_id}`).then(result => this.quote = result.data)
    }
  },
}
</script>
