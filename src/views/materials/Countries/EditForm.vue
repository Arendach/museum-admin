<template>
  <Wrapper :loaded="country.title !== undefined">
    <CForm id="editCountry">
      <InputLang label="Назва" :item="country" name="title"></InputLang>
      <InputText label="Slug" :item="country" name="slug"></InputText>
      <InputText label="Код" :item="country" name="code"></InputText>
      <VSelect name="status" label="Відношення" :value="country.status" :options="statuses" :nullable="false"></VSelect>
      <EditorLang label="Опис" :item="country" name="description"></EditorLang>
      <CButton color="primary" @click="updateCountry">Зберегти</CButton>
    </CForm>
  </Wrapper>
</template>

<script>
import InputLang from '@/components/InputLang'
import Api from '@/Api'
import Wrapper from '@/components/Wrapper'
import EditorLang from "@/components/EditorLang";
import InputText from "@/components/InputText";
import VSelect from "@/components/VSelect";

export default {
  name: 'EditForm',
  components: {
    InputLang,
    Wrapper,
    EditorLang,
    InputText,
    VSelect,
  },
  data() {
    return {
      country: {},
      statuses: [
        {id: 'friend', title: 'Дружнє'},
        {id: 'enemy', title: 'Вороже'},
        {id: 'neutral', title: 'Нейтральне'},
      ]
    }
  },
  beforeMount() {
    this.loadCountry()
  },
  methods: {
    loadCountry() {
      Api.get(`/country/${this.$route.params.id}`).then(res => this.country = res.data)
    },
    updateCountry() {
      let data = this.serialize(document.querySelector('#editCountry'))

      Api.put(`/country/${this.country.id}`, data).then(() => this.successToast('Дані збережено'))
    }
  },
}
</script>
