import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from '@/mixins'
import CKEditor from '@ckeditor/ckeditor5-vue'
import Toaster from '@meforma/vue-toaster'
import VueSweetalert2 from 'vue-sweetalert2'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.use(CKEditor)
app.use(Toaster)
app.use(VueSweetalert2)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.mixin(mixins)

app.mount('#app')
