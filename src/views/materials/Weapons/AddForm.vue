<template>
  <Wrapper :loaded="true">
    <CForm id="createWeapon">
      <InputLang label="Slug" name="slug"></InputLang>
      <InputLang label="Назва" name="title"></InputLang>
      <EditorLang label="Опис" name="description"></EditorLang>
      <MultiSelect
        label="Країни використовують"
        :options="mapMultiSelect(countries)"
        :selected="[]"
        name="countries"
      ></MultiSelect>
      <InputText label="Перше впоминання" name="date"></InputText>
      <CButton color="primary" @click="create">Зберегти</CButton>
    </CForm>
  </Wrapper>
</template>

<script>
import InputLang from '@/components/InputLang'
import Api from '@/lib/Api'
import Wrapper from "@/components/Wrapper"
import EditorLang from "@/components/EditorLang";
import MultiSelect from "@/components/MultiSelect"
import {mapGetters} from "vuex"
import InputText from "@/components/InputText";

export default {
  name: 'AddForm',
  components: {
    InputText,
    MultiSelect,
    EditorLang,
    InputLang,
    Wrapper
  },
  computed: mapGetters(['countries']),
  methods: {
    create() {
      let data = this.serialize(document.querySelector('#createWeapon'))

      Api.post('/weapons', data)
        .then(() => {
          this.successToast('Дані збережено')
          this.$router.push({name: 'weapons.list'})
        })
        .catch(err => this.showErrors(err))
    }
  }
}
</script>
