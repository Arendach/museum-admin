<template>
  <button class="btn btn-danger btn-sm" title="Видалити" @click="handle">
    <CIcon :icon="cilX"></CIcon>
  </button>
</template>
<script>
import { CIcon } from '@coreui/icons-vue'
import { cilX } from '@coreui/icons'
import Api from '@/Api'

export default {
  props: ['url'],
  name: 'DeleteButton',
  setup() {
    return { cilX }
  },
  components: { CIcon },
  methods: {
    handle() {
      this.$swal({
        icon: 'warning',
        title: 'Видалити?',
        text: 'Ви впевнені що хочете видалити цей елемент?',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Так, видалити!',
      }).then((result) => {
        if (result.isConfirmed) {
          Api.delete(this.url)
            .then(() => this.successToast('Видалено'))
            .catch(() => this.errorToast('Виникла помилка!'))
        }
      })
    },
  },
}
</script>
