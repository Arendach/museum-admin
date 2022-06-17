<template>
  <Wrapper :loaded="true">
    <CForm id="createForm">
      <Tabs>
        <Tab v-for="tab in tabFields" :name="tab.title">
          <div v-for="field in tab.items">
            <InputLang
              v-if="field.component === 'InputLang'"
              :label="field.label"
              :name="field.name"
            ></InputLang>
            <EditorLang
              v-else-if="field.component === 'EditorLang'"
              :label="field.label"
              :name="field.name"
            ></EditorLang>
            <InputText
              v-else-if="field.component === 'InputText'"
              :label="field.label"
              :name="field.name"
            ></InputText>
            <MultiSelect
              v-else-if="field.component === 'MultiSelect'"
              :label="field.label"
              :options="mapMultiSelect(dynamic(field.options))"
              :selected="[]"
              name="countries"
            ></MultiSelect>
          </div>
        </Tab>
      </Tabs>
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
  props: {
    url: {
      type: String,
      required: true
    },
    backRoute: {
      type: String,
      required: true
    },
    fields: {
      type: Array,
      default: [],
    },
    tabs: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    InputText,
    MultiSelect,
    EditorLang,
    InputLang,
    Wrapper
  },
  computed: {
    ...mapGetters(['countries']),
    tabFields() {
      if (!this.tabs) {
        return [
          {
            title: 'Основна інформація',
            items: this.fields
          }
        ]
      }

      return this.fields
    }
  },
  methods: {
    create() {
      let data = this.serialize(document.querySelector('#createForm'))

      Api.post(this.url, data)
        .then(() => {
          this.successToast('Дані збережено')
          this.$router.push({name: this.backRoute})
        })
        .catch(err => this.showErrors(err))
    },
    dynamic(field) {
      return this[field]
    }
  }
}
</script>
