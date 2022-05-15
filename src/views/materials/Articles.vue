<template>
  <Wrapper :loaded="isLoaded">
    <div style="text-align: right; margin-bottom: 15px">
      <button class="btn btn-primary">Створити статтю</button>
    </div>
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
        <tr v-for="article in articles.data" :key="article.id">
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
            <RouterLink :to="`/articles/edit/${article.id}`">
              <button class="btn btn-primary btn-sm" title="Редагувати">
                <CIcon :icon="cilPen"></CIcon>
              </button>
            </RouterLink>
            <button class="btn btn-danger btn-sm" title="Видалити">
              <CIcon :icon="cilX"></CIcon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <LaravelVuePagination
      :data="articles"
      @pagination-change-page="getArticles"
    ></LaravelVuePagination>
  </Wrapper>
</template>

<script>
import { CIcon } from '@coreui/icons-vue'
import { cilPen, cilX } from '@coreui/icons'
import { RouterLink } from 'vue-router'
import Wrapper from '@/components/Wrapper'
import Api from '@/Api'
import LaravelVuePagination from 'laravel-vue-pagination'

export default {
  name: 'Articles',
  data() {
    return {
      isLoaded: false,
      articles: {},
    }
  },
  components: {
    Wrapper,
    CIcon,
    RouterLink,
    LaravelVuePagination,
  },
  setup() {
    return {
      cilPen,
      cilX,
    }
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    getArticles(page = 1) {
      Api.get(`/articles?page=${page}`).then((response) => {
        this.articles = response
        this.isLoaded = true
      })
    },
  },
}
</script>
