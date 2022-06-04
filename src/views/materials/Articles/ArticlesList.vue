<template>
  <Wrapper :loaded="isLoaded">
    <AddButton route="articles.add" label="Нова стаття"></AddButton>

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
            <EditButton :to="{name: 'articles.edit', params: {id: article.id}}"></EditButton>
            <DeleteButton :url="`/article/${article.id}`" @deleted="deletedArticle(article.id)"></DeleteButton>
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
import { RouterLink } from 'vue-router'
import Wrapper from '@/components/Wrapper'
import Api from '@/lib/Api'
import LaravelVuePagination from 'laravel-vue-pagination'
import AddButton from "@/components/buttons/AddButton";
import EditButton from "@/components/buttons/EditButton";
import DeleteButton from "@/components/buttons/DeleteButton";

export default {
  name: 'Articles',
  data() {
    return {
      isLoaded: false,
      articles: {},
    }
  },
  components: {
    DeleteButton,
    EditButton,
    AddButton,
    Wrapper,
    RouterLink,
    LaravelVuePagination,
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
    deletedArticle(id) {
      this.articles.data = this.articles.data.filter(article => article.id !== id)
    }
  },
}
</script>
