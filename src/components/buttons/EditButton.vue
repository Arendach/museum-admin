<template>
  <RouterLink :to="to">
    <button class="btn btn-primary btn-sm" title="Редагувати">
      <CIcon :icon="cilPen"></CIcon>
    </button>
  </RouterLink>
</template>
<script>
import { CIcon } from '@coreui/icons-vue'
import { cilPen } from '@coreui/icons'

export default {
  props: ['to'],
  name: 'EditButton',
  setup() {
    return { cilPen }
  },
  components: { CIcon },
}
</script>
