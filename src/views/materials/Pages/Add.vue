<template>
  <AddForm
    :fields="fields"
    edit-route="pages.edit"
    url="/pages"
  />
</template>

<script>
import AddForm from '@/components/Functional/AddForm'
export default {
  name: 'Add',
  components: {
    AddForm
  },
  data() {
    return {
      fields: [
        {component: 'InputText', name: 'slug', label: 'Slug'},
        {component: 'InputLang', name: 'title', label: 'Назва'},
        {component: 'EditorLang', name: 'description', label: 'Опис'},
        {component: 'Checkbox', name: 'is_active', label: 'Активна'},
      ]
    }
  }
}
</script>
