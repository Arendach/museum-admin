<template>
  <Wrapper :loaded="true">
    <CForm id="createForm">
      <Tabs>
        <Tab v-for="tab in tabFields" :name="tab.title">
          <div v-for="field in tab.items">
            <InputText
              v-if="field.component === 'InputText'"
              :label="field.label"
              :name="field.name"
            />
            <InputLang
              v-else-if="field.component === 'InputLang'"
              :label="field.label"
              :name="field.name"
            />
            <EditorLang
              v-else-if="field.component === 'EditorLang'"
              :label="field.label"
              :name="field.name"
            />
            <MultiSelect
              v-else-if="field.component === 'MultiSelect'"
              :label="field.label"
              :name="field.name"
              :options="typeof field.options === 'object' ? field.options : dynamic(field.options)"
            />
            <PictureField
              v-else-if="field.component === 'PictureField'"
              :picture="{}"
              :label="field.label"
              :model="field.model"
              :id="item.id"
            />
            <Checkbox
              v-else-if="field.component === 'Checkbox'"
              :label="field.label"
              :name="field.name"
            />
            <VSelect
              v-else-if="field.component === 'VSelect'"
              :label="field.label"
              :name="field.name"
              :options="typeof field.options === 'object' ? field.options : dynamic(field.options)"
            />
            <TextareaLang
              v-else-if="field.component === 'TextareaLang'"
              :label="field.label"
              :name="field.name"
              :item="item"
            />
            <VideoField
              v-else-if="field.component === 'VideoField'"
              :videos="[]"
              :model="field.model"
              :model-id="item.id"
            />
            <SeoField
              v-else-if="field.component === 'SeoField'"
            />
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
import EditorLang from "@/components/EditorLang"
import MultiSelect from "@/components/MultiSelect"
import {mapGetters} from "vuex"
import InputText from "@/components/InputText"
import PictureField from "@/components/PictureField"
import Checkbox from "@/components/Checkbox"
import VSelect from "@/components/VSelect"
import TextareaLang from "@/components/TextareaLang"
import VideoField from "@/components/VideoField"
import SeoField from "@/components/fields/SeoField"

export default {
  name: 'AddForm',
  props: {
    url: {
      type: String,
      required: true
    },
    editRoute: {
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
  data() {
    return {
      item: {}
    }
  },
  components: {
    InputText,
    MultiSelect,
    EditorLang,
    InputLang,
    Wrapper,
    PictureField,
    Checkbox,
    VSelect,
    TextareaLang,
    VideoField,
    SeoField,
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
  methods: {
    create() {
      let data = this.serialize(document.querySelector('#createForm'))

      Api.post(this.url, data)
        .then((res) => {
          this.successToast('Дані збережено')
          this.$router.push({name: this.editRoute, params: {id: res.data.id}})
        })
        .catch(err => this.showErrors(err))
    },
    dynamic(field) {
      return this[field]
    }
  }
}
</script>
