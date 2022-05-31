<template>
  <Wrapper :loaded="true">
    <CForm id="createCountry">
      <InputLang label="Назва" name="title"></InputLang>
      <InputText label="Slug" name="slug"></InputText>
      <InputText label="Код" name="code"></InputText>
      <VSelect label="Відношення" :options="statuses" :nullable="false" name="status"></VSelect>
      <EditorLang label="Опис" name="description"></EditorLang>
      <CButton color="primary" @click="createCountry">Зберегти</CButton>
    </CForm>
  </Wrapper>
</template>

<script>
import InputLang from '@/components/InputLang'
import InputText from "@/components/InputText";
import EditorLang from "@/components/EditorLang";
import VSelect from "@/components/VSelect";
import Api from '@/Api'
import Wrapper from "@/components/Wrapper";

export default {
  name: 'AddForm',
  components: {
    InputLang,
    VSelect,
    InputText,
    EditorLang,
    Wrapper
  },
  data() {
    return {
      statuses: [
        {id: 'friend', title: 'Дружнє'},
        {id: 'enemy', title: 'Вороже'},
        {id: 'neutral', title: 'Нейтральне'},
      ]
    }
  },
  methods: {
    createCountry() {
      let data = this.serialize(document.querySelector('#createCountry'))

      Api.post('/country', data).then(() => {
        this.successToast('Дані збережено')
        this.$router.push({name: 'countries.list'})
      })
    },
  }
}
</script>
