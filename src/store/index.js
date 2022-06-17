import {createStore} from 'vuex'
import common from '@/store/common'
import breadcrumbs from "@/store/breadcrumbs"
import Api from "@/lib/Api";

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    countries: [],
    tags: [],
  },
  mutations: {
    toggleSidebar: (state) => state.sidebarVisible = !state.sidebarVisible,
    toggleUnfoldable: (state) => state.sidebarUnfoldable = !state.sidebarUnfoldable,
    updateSidebarVisible: (state, payload) => state.sidebarVisible = payload.value,
    setCountries: (state, countries) => state.countries = countries,
    setTags: (state, tags) => state.tags = tags,
  },
  getters: {
    countries: (state) => state.countries,
    tags: (state) => state.tags,
  },
  actions: {
    loadCountries({commit}) {
      Api.get('/countries').then(result => commit('setCountries', result.data))
    },
    loadTags({commit}) {
      Api.get('/tags').then(result => commit('setTags', result.data))
    }
  },
  modules: {
    common,
    breadcrumbs,
  },
})
