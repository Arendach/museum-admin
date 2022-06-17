<template>
  <Wrapper :loaded="isLoaded" v-if="isLoaded">
    <CForm id="editForm">
      <Tabs>
        <Tab v-for="tab in tabFields" :name="tab.title">
          <div v-for="field in tab.items">
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
              :options="mapMultiSelect(dynamic(field.options))"
              :selected="mapMultiSelect(item[field.name])"
            ></MultiSelect>
            <PictureField
              v-else-if="field.component === 'PictureField'"
              :picture="item[field.name]"
              :label="field.label"
              :model="field.model"
              :id="item.id"
            ></PictureField>
            <Checkbox
              v-else-if="field.component === 'Checkbox'"
              :label="field.label"
              :name="field.name"
              :value="item[field.name]"
            ></Checkbox>
            <VSelect
              v-else-if="field.component === 'VSelect'"
              :label="field.label"
              :name="field.name"
              :options="dynamic(field.options)"
              :value="item[field.name]"
            ></VSelect>
            <div v-else-if="field.component === 'ReactiveComponent'">
              <component :is="field.reactive"></component>
            </div>
          </div>
        </Tab>
      </Tabs>
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
import PictureField from "@/components/PictureField"
import {mapGetters} from "vuex"
import {Tabs, Tab} from "vue3-tabs-component"
import Checkbox from "@/components/Checkbox"
import VSelect from "@/components/VSelect"

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
    },
    tabs: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Checkbox,
    PictureField,
    EditorLang,
    InputText,
    InputLang,
    Wrapper,
    MultiSelect,
    VSelect,
    Tabs,
    Tab,
  },
  data() {
    return {
      item: {},
      isLoaded: false,
    }
  },
  computed: {
    ...mapGetters(['countries', 'tags']),
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
      let data = this.serialize(document.querySelector('#editForm'))

      Api.put(`${this.url}/${this.$route.params.id}`, data)
        .then(() => this.successToast('Дані збережено'))
        .catch(err => this.showErrors(err))
    },
  },
}
</script>