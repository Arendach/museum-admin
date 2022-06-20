import config from '@/lib/config'
import {serialize, jsonToQuery} from '@/lib/serialize'
import FormErrorHandler from '@/lib/form-error-handler'

export default {
  data(){
    return {
      timerStore: null
    }
  },
  methods: {
    apiUrl(path) {
      return `${process.env.VUE_APP_API_URL}${path}`
    },
    config(key) {
      return config[key]
    },
    serialize(form) {
      return serialize(form)
    },
    jsonToQuery(data){
      return jsonToQuery(data)
    },
    successToast(message, options) {
      options = typeof options === 'object' ? options : {}
      options.position = 'top-right'
      options.duration = 5000
      this.$toast.success(message, options)
    },
    errorToast(message, options) {
      options = typeof options === 'object' ? options : {}
      options.position = 'top-right'
      options.duration = 5000
      this.$toast.error(message, options)
    },
    mapMultiSelect(items) {
      return items.map((item) => {
        return {id: item.id, title: item.title}
      })
    },
    showErrors(response) {
      this.errorToast('Виникла помилка! Дані не збережено!')
      response.json().then(res => {
        return FormErrorHandler(res)
      })
    },
    timer(callback) {
      clearTimeout(this.timerStore)
      this.timerStore = setTimeout(callback, 700)
    }
  },
}
