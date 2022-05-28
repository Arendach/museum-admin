export default {
  namespaced: true,
  state() {
    return {
      crumbs: []
    }
  },
  mutations: {
    setCrumbs: (state, crumbs) => state.crumbs = crumbs
  },
  getters: {
    crumbs: (state) => state.crumbs,
  },
}
