import {createStore} from 'vuex'
import common from '@/store/common'
import breadcrumbs from "@/store/breadcrumbs"
import Api from "@/lib/Api";

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    countries: [],
  },
  mutations: {
    toggleSidebar: (state) => state.sidebarVisible = !state.sidebarVisible,
    toggleUnfoldable: (state) => state.sidebarUnfoldable = !state.sidebarUnfoldable,
    updateSidebarVisible: (state, payload) => state.sidebarVisible = payload.value,
    setCountries: (state, countries) => state.countries = countries
  },
  getters: {
    countries: (state) => state.countries
  },
  actions: {
    loadCountries({commit}) {
      Api.get('/countries').then(result => commit('setCountries', result.data))
    }
  },
  modules: {
    common,
    breadcrumbs,
  },
})
