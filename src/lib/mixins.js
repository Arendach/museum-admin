import config from '@/lib/config'
import formSerialize from '@/lib/serialize'
import FormErrorHandler from '@/lib/form-error-handler'

export default {
  methods: {
    apiUrl(path) {
      return `${process.env.VUE_APP_API_URL}${path}`
    },
    config(key) {
      return config[key]
    },
    serialize(form) {
      return formSerialize(form)
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
    }
  },
}
