import Api from '@/Api'

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
  }),
  mutations: {
    setItems: (state, items) => (state.items = items),
    setMeta: (state, meta) => (state.meta = meta),
    setLinks: (state, links) => (state.links = links),
    setUrl: (state, url) => (state.url = url),
    setPage: (state, page) => (state.page = page),
    setTableHeader: (state, tableHeader) => (state.tableHeader = tableHeader),
    setTableBody: (state, tableBody) => (state.tableBody = tableBody),
    setIsLoaded: (state, isLoaded) => (state.isLoaded = isLoaded),
  },
  actions: {
    async loadItems({ commit, getters }) {
      commit('setIsLoaded', false)
      await Api.get(`${getters.url}?page=${getters.page}`).then((res) => {
        commit('setItems', res.data)
        commit('setMeta', res.meta)
        commit('setLinks', res.links)
        commit('setIsLoaded', true)
      })
    },
    mapTableHeader({ commit }, callback) {
      commit('setTableHeader', callback())
    },
    mapTableBody({ commit, getters }, callback) {
      commit('setTableBody', getters.items.map(callback))
    },
  },
  getters: {
    items: (state) => state.items,
    meta: (state) => state.meta,
    links: (state) => state.links,
    url: (state) => state.url,
    page: (state) => state.page,
    tableHeader: (state) => state.tableHeader,
    tableBody: (state) => state.tableBody,
    isLoaded: (state) => state.isLoaded,
  },
}
