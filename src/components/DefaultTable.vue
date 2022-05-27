<template>
  <Wrapper :loaded="isLoaded">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th scope="col" v-for="title in tableHeader" :key="title">
          {{ title }}
        </th>
        <th scope="col" class="actions">Дії</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, i) in tableBody" :key="i">
        <td v-for="(col, j) in row" :key="j">
          {{ typeof col === 'function' ? col() : col }}
        </td>
        <td class="actions">
          <RouterLink :to="`${url}/edit/${row[0]}`">
            <button class="btn btn-primary btn-sm" title="Редагувати">
              <CIcon :icon="cilPen"></CIcon>
            </button>
          </RouterLink>
          <DeleteButton :url="`${url}/${row[0]}`" @create="create"></DeleteButton>
        </td>
      </tr>
      </tbody>
    </table>
    <LaravelVuePagination
      :data="{ links, meta }"
      @pagination-change-page="paginationChangePage"
    ></LaravelVuePagination>
  </Wrapper>
</template>

<script>
import LaravelVuePagination from 'laravel-vue-pagination'
import {mapActions, mapGetters, mapMutations} from 'vuex'
import {cilPen, cilX} from '@coreui/icons'
import Wrapper from '@/components/Wrapper'
import DeleteButton from "@/components/buttons/DeleteButton"

export default {
  name: 'DefaultTable',
  props: ['url', 'header', 'body'],
  components: {
    LaravelVuePagination,
    Wrapper,
    DeleteButton,
  },
  setup() {
    return {
      cilPen,
      cilX,
    }
  },
  computed: {
    ...mapGetters({
      tableHeader: 'common/tableHeader',
      tableBody: 'common/tableBody',
      links: 'common/links',
      meta: 'common/meta',
      isLoaded: 'common/isLoaded',
    }),
  },
  mounted() {
    this.setUrl(this.url)
    this.reRender(1)
  },
  methods: {
    ...mapActions({
      loadItems: 'common/loadItems',
      mapTableHeader: 'common/mapTableHeader',
      mapTableBody: 'common/mapTableBody',
    }),
    ...mapMutations({
      setPage: 'common/setPage',
      setUrl: 'common/setUrl',
      //deleteItem: 'common/deleteItem',
    }),
    create(item){
      alert(item)
    },
    paginationChangePage(page) {
      this.reRender(page)
    },
    async reRender(page) {
      this.setPage(page)
      await this.loadItems()
      await this.mapTableHeader(this.header)
      await this.mapTableBody(this.body)
    },
  },
}
</script>

<style scoped>
.actions {
  width: 85px;
}
</style>
