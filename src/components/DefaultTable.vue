<template>
  <AddButton
    v-if="editRoute !== null"
    :route="addRoute"
    label="Новий ресурс"
  ></AddButton>

  <table class="table table-bordered">
    <thead>
    <tr>
      <th scope="col" v-for="title in tableHeader" :key="title">
        {{ title }}
      </th>
      <th scope="col" class="actions">Дії</th>
    </tr>
    <tr>
      <td v-for="filter in tableFilters">
        <input
          v-if="filter !== null && filter.type === 'input'"
          :placeholder="filter.placeholder || 'Почніть вводити'"
          type="text"
          class="form-control"
          @input="changeFilter(filter.field, $event.target.value)"
        >
        <VueSelect
          v-else-if="filter !== null && filter.type === 'select'"
          @option:selected="changeFilter(filter.field, $event.id)"
          @option:deselected="changeFilter(filter.field, null)"
          autocomplete="on"
          :searchable="true"
          :options="typeof filter.options === 'string' ? getOptions(filter.options) : filter.options"
          :reduce="item => item.id"
          :placeholder="filter.placeholder || 'Оберіть варіант'"
          label="title"
        />
      </td>
    </tr>
    </thead>
    <tbody v-if="isLoaded">
    <tr v-for="(row, i) in tableBody" :key="i" v-if="tableBody.length">
      <td
        v-for="(col, j) in row"
        :key="j"
        v-html="typeof col === 'function' ? col(row) : col"
      />
      <td class="actions">
        <RouterLink :to="{name: editRoute, params: {id: row[0]}}">
          <button class="btn btn-primary btn-sm" title="Редагувати">
            <CIcon :icon="cilPen"></CIcon>
          </button>
        </RouterLink>
        <DeleteButton :url="`${url}/${row[0]}`" @deleted="deleteItem(row[0])"></DeleteButton>
      </td>
    </tr>
    <tr v-if="!tableBody.length">
      <td :colspan="tableHeader.length + 1" class="empty-row">
        Тут пусто :(
      </td>
    </tr>
    </tbody>
    <tbody v-else>
    <tr>
      <td :colspan="tableHeader.length + 1">
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
  <LaravelVuePagination
    :data="{ links, meta }"
    @pagination-change-page="paginationChangePage"
  ></LaravelVuePagination>
</template>

<script>
import LaravelVuePagination from 'laravel-vue-pagination'
import {mapActions, mapGetters, mapMutations} from 'vuex'
import {cilPen, cilX} from '@coreui/icons'
import Wrapper from '@/components/Wrapper'
import DeleteButton from "@/components/buttons/DeleteButton"
import AddButton from "@/components/buttons/AddButton"
import VueSelect from "vue-select"
import _ from 'lodash'

export default {
  name: 'DefaultTable',
  props: {
    url: {
      type: String,
      required: true
    },
    header: {
      type: Function,
      default: () => ['ID', 'Назва'],
    },
    body: {
      type: Function,
      default: (item) => [item.id, item.title],
    },
    editRoute: {
      type: [String, Object]
    },
    addRoute: {
      type: String,
      default: null,
    },
    filters: {
      type: Function,
      default: () => [null, null]
    }
  },
  components: {
    LaravelVuePagination,
    Wrapper,
    DeleteButton,
    AddButton,
    VueSelect,
  },
  setup() {
    return {
      cilPen,
      cilX,
    }
  },
  data() {
    return {
      time: null
    }
  },
  computed: {
    ...mapGetters({
      tableHeader: 'common/tableHeader',
      tableBody: 'common/tableBody',
      tableFilters: 'common/tableFilters',
      links: 'common/links',
      meta: 'common/meta',
      isLoaded: 'common/isLoaded',
      tags: 'tags',
      countries: 'countries',
    }),
  },
  mounted() {
    this.setUrl(this.url)
    this.mapTableHeader(this.header)
    this.mapTableFilters(this.filters)
    this.reRender(1)
  },
  methods: {
    ...mapActions({
      loadItems: 'common/loadItems',
      mapTableHeader: 'common/mapTableHeader',
      mapTableBody: 'common/mapTableBody',
      mapTableFilters: 'common/mapTableFilters',
      deleteItem: 'common/deleteItem'
    }),
    ...mapMutations({
      setPage: 'common/setPage',
      setUrl: 'common/setUrl',
      mapBodyCallback: 'common/mapBodyCallback',
      setTableFilters: 'common/setTableFilters',
    }),
    paginationChangePage(page) {
      this.reRender(page)
    },
    async reRender(page = null) {
      if (page !== null) this.setPage(page)
      await this.loadItems()
      await this.mapBodyCallback(this.body)
      await this.mapTableBody()
    },
    changeFilter(field, value) {
      this.setTableFilters(
        this.tableFilters.map(item => {
          if (_.isObject(item) && item.field === field) item.value = value
          return item
        })
      )

      this.timer(() => this.reRender())
    },
    timer(callback) {
      clearTimeout(this.time)
      this.time = setTimeout(callback, 500)
    },
    getOptions(field){
      let options = this.dynamic(field)
      return [
        {id: null, title: 'Оберіть варіант'},
        ...options
      ]
    },
    dynamic(field) {
      return this[field]
    }
  },
}
</script>

<style scoped>
.actions {
  width: 85px;
}

.table {
  background-color: #fff;
}

.empty-row{
  text-align: center;
  font-size: 20px;
}
</style>
