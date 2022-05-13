<template>
  <CRow>
    <CCol :xs="12">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Заголовок</th>
            <th scope="col">Автор</th>
            <th scope="col">Створено</th>
            <th scope="col">Теги</th>
            <th scope="col">Дії</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <th scope="row">
              <a :href="article.url">
                {{ article.title }}
              </a>
            </th>
            <td>
              {{ article.user.name }}
            </td>
            <td>{{ article.created_at }}</td>
            <td>
              <span v-for="tag in article.tags" :key="tag.id">
                <a :href="tag.url" class="btn btn-success btn-sm">
                  {{ tag.title }}
                </a>
              </span>
            </td>
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
import { ref } from 'vue'
import { CIcon } from '@coreui/icons-vue'
import { cilPen, cilX } from '@coreui/icons'

export default {
  name: 'Articles',
  data() {
    return {
      articles: [],
    }
  },
  components: {
    CIcon,
  },
  setup() {
    const activeKey = ref(1)
    const flushActiveKey = ref(1)

    return {
      activeKey,
      flushActiveKey,
      cilPen,
      cilX,
    }
  },
  mounted() {
    this.loadArticles()
  },
  methods: {
    loadArticles() {
      fetch('http://museum.online/api/articles')
        .then((res) => res.json())
        .then((res) => (this.articles = res.data))
    },
  },
}
</script>
