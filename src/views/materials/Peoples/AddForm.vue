<template>
  <CForm id="createPeople">
    <InputLang label="Імя" name="name"></InputLang>
    <CButton color="primary" @click="createPeople">Зберегти</CButton>
  </CForm>
</template>

<script>
import InputLang from '@/components/InputLang'
import Api from '@/Api'

export default {
  name: 'AddForm',
  components: { InputLang },
  methods: {
    createPeople() {
      let form = document.querySelector('#createPeople')
      let data = this.serialize(form)

      Api.post('/people/create', data).then(() => {
        this.successToast('Дані збережено')
        this.$router.push('/peoples')
      })
    },
  },
}
</script>
