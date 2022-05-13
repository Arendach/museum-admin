<template>
  <CRow>
    <CCol :xs="12">
      <CForm>
        <CFormInput
          type="text"
          label="Назва статті"
          placeholder="Введіть назву статті"
          text="Must be 8-20 characters long."
          :value="article.title"
        />
        <CButton color="primary" @click="updateArticle">Зберегти</CButton>
      </CForm>
    </CCol>
  </CRow>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'EditForm',
  data() {
    return {
      article: {
        title: '',
      },
    }
  },
  beforeMount() {
    this.loadArticle()
  },
  setup() {
    const activeKey = ref(1)
    const flushActiveKey = ref(1)

    return {
      activeKey,
      flushActiveKey,
    }
  },
  methods: {
    loadArticle() {
      fetch(this.apiUrl(`/article/${this.$route.params.id}`))
        .then((res) => res.json())
        .then((res) => (this.article = res.data))
    },
    updateArticle() {
      fetch('http://museum.online/admin/article/update/1')
    },
  },
}
</script>
