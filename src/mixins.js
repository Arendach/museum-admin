import config from '@/config'
import serialize from 'form-serialize'

export default {
  methods: {
    apiUrl(path) {
      return `${process.env.VUE_APP_API_URL}${path}`
    },
    config(key) {
      return config[key]
    },
    serialize(form) {
      return serialize(form, { hash: true })
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
        return { id: item.id, title: item.title }
      })
    },
  },
}
