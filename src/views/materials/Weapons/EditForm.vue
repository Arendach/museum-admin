<template>
  <Wrapper :loaded="isLoaded">
    <CForm id="editWeapon">
      <InputText label="Slug" :item="weapon" name="slug"></InputText>
      <InputLang label="Назва" :item="weapon" name="title"></InputLang>
      <EditorLang label="Опис" :item="weapon" name="description"></EditorLang>
      <MultiSelect
        label="Країни використовують"
        :options="mapMultiSelect(countries)"
        :selected="mapMultiSelect(weapon.countries)"
        name="countries"
      ></MultiSelect>
      <InputText label="Перше впоминання" :item="weapon" name="date"></InputText>
      <CButton color="primary" @click="update">Зберегти</CButton>
    </CForm>
  </Wrapper>
</template>

<script>
import InputLang from '@/components/InputLang'
import Api from '@/lib/Api'
import Wrapper from '@/components/Wrapper'
import InputText from "@/components/InputText"
import EditorLang from "@/components/EditorLang"
import MultiSelect from "@/components/MultiSelect"
import {mapGetters} from "vuex"

export default {
  name: 'EditForm',
  components: {
    EditorLang,
    InputText,
    InputLang,
    Wrapper,
    MultiSelect,
  },
  data() {
    return {
      weapon: [],
      isLoaded: false,
    }
  },
  computed: mapGetters(['countries']),
  beforeMount() {
    this.load()
  },
  methods: {
    load() {
      Api.get(`/weapons/${this.$route.params.id}`).then((res) => {
        this.weapon = res.data
        this.isLoaded = true
      })
    },
    update() {
      let data = this.serialize(document.querySelector('#editWeapon'))

      Api.put(`/weapons/${this.$route.params.id}`, data)
        .then(() => this.successToast('Дані збережено'))
        .catch(err => this.showErrors(err))
    },
  },
}
</script>
