<template>
  <Wrapper :loaded="isLoaded">
    <CForm id="editForm">
      <div v-for="field in fields">
        <InputText
          v-if="field.component === 'InputText'"
          :label="field.label"
          :item="item"
          :name="field.name"
        ></InputText>
        <InputLang
          v-else-if="field.component === 'InputLang'"
          :label="field.label"
          :item="item"
          :name="field.name"
        ></InputLang>
        <EditorLang
          v-else-if="field.component === 'EditorLang'"
          :label="field.label"
          :item="item"
          :name="field.name"
        ></EditorLang>
        <MultiSelect
          v-else-if="field.component === 'MultiSelect'"
          :label="field.label"
          :name="field.name"
          :options="mapMultiSelect(field.options)"
          :selected="mapMultiSelect(item[field.name])"
        ></MultiSelect>
      </div>
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
  props: {
    url: {
      type: String,
      required: true,
    },
    fields: {
      type: Array,
      default: []
    }
  },
  components: {
    EditorLang,
    InputText,
    InputLang,
    Wrapper,
    MultiSelect,
  },
  data() {
    return {
      item: {},
      isLoaded: false,
    }
  },
  computed: mapGetters(['countries']),
  beforeMount() {
    this.load()
  },
  methods: {
    dynamic(field) {
      return this[field]
    },
    load() {
      Api.get(`${this.url}/${this.$route.params.id}`).then((res) => {
        this.item = res.data
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
