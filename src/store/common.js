import Api from '@/lib/Api'
import _ from "lodash"

export default {
  namespaced: true,
  state: () => ({
    isLoaded: true,
    page: 1,
    url: '',
    items: [],
    meta: {},
    links: {},
    tableHeader: [],
    tableBody: [],
    tableFilters: [],
    mapBodyCallback: (item) => []
  }),
  mutations: {
    setItems: (state, items) => (state.items = items),
    setMeta: (state, meta) => (state.meta = meta),
    setLinks: (state, links) => (state.links = links),
    setUrl: (state, url) => (state.url = url),
    setPage: (state, page) => (state.page = page),
    setTableHeader: (state, tableHeader) => (state.tableHeader = tableHeader),
    setTableBody: (state, tableBody) => (state.tableBody = tableBody),
    setTableFilters: (state, tableFilters) => state.tableFilters = tableFilters,
    setIsLoaded: (state, isLoaded) => (state.isLoaded = isLoaded),
    mapBodyCallback: (state, callback) => state.mapBodyCallback = callback,
    deleteItem: (state, id) => state.items = state.items.filter(item => item.id !== id)

  },
  actions: {
    async loadItems({commit, getters}) {
      commit('setIsLoaded', false)

      let page = getters.page
      let filters = getters.tableFilters
        .filter(item => item !== null && item.value !== null && item.value !== '')
        .map(({field, term, value}) => ({field, term, value}))

      await Api.get(`${getters.url}`, {page, filters}).then((res) => {
        commit('setItems', res.data)
        commit('setMeta', res.meta)
        commit('setLinks', res.links)
        commit('setIsLoaded', true)
      })
    },
    mapTableHeader({commit}, callback) {
      commit('setTableHeader', callback())
    },
    mapTableBody({commit, getters}) {
      commit('setTableBody', getters.items.map(getters.mapBodyCallback))
    },
    mapTableFilters({commit}, callback) {
      commit('setTableFilters', callback().map(item => {
        if (_.isObject(item)) item.value = null
        return item
      }))
    },
    deleteItem({commit, dispatch, getters}, id) {
      commit('deleteItem', id)
      dispatch('mapTableBody', getters.mapBodyCallback)
    }
  },
  getters: {
    items: (state) => state.items,
    meta: (state) => state.meta,
    links: (state) => state.links,
    url: (state) => state.url,
    page: (state) => state.page,
    tableHeader: (state) => state.tableHeader,
    tableBody: (state) => state.tableBody,
    tableFilters: (state) => state.tableFilters,
    isLoaded: (state) => state.isLoaded,
    mapBodyCallback: (state) => state.mapBodyCallback
  },
}
