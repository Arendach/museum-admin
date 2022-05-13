<template>
  <CRow>
    <CCol :xs="12">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Назва тегу</th>
            <th scope="col">Дії</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tag in tags" :key="tag.id">
            <th scope="row">
              <a :href="tag.url">
                {{ tag.title }}
              </a>
            </th>
            <td>{{ tag.created_at }}</td>
            <td>
              <button class="btn btn-primary btn-sm" title="Редагувати">
                <CIcon :icon="cilPen"></CIcon>
              </button>
              <button class="btn btn-danger btn-sm" title="Видалити">
                <CIcon :icon="cilX"></CIcon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </CCol>
  </CRow>
</template>

<script>
import { CIcon } from '@coreui/icons-vue'
import { cilPen, cilX } from '@coreui/icons'

export default {
  name: 'Tags',
  data() {
    return {
      tags: [],
    }
  },
  components: { CIcon },
  setup() {
    return {
      cilX,
      cilPen,
    }
  },
  mounted() {
    this.loadTags()
  },
  methods: {
    loadTags() {
      fetch('http://museum.online/api/tags')
        .then((res) => res.json())
        .then((res) => (this.tags = res.data))
    },
  },
}
</script>
