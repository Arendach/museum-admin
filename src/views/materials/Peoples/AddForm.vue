<template>
  <CForm id="createPeople">
    <InputLang label="Імя" name="name"></InputLang>
    <VSelect
      name="country_id"
      label="Країна"
      :options="countries"
    ></VSelect>
    <CButton color="primary" @click="createPeople">Зберегти</CButton>
  </CForm>
</template>

<script>
import InputLang from '@/components/InputLang'
import VSelect from "@/components/VSelect";
import Api from '@/lib/Api'
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'AddForm',
  components: {InputLang, VSelect},
  methods: {
    ...mapActions(['loadCountries']),
    createPeople() {
      let form = document.querySelector('#createPeople')
      let data = this.serialize(form)

      Api.post('/people/create', data).then(() => {
        this.successToast('Дані збережено')
        this.$router.push('/peoples')
      })
    },
  },
  beforeMount() {
    this.loadCountries()
  },
  computed: mapGetters(['countries'])
}
</script>
