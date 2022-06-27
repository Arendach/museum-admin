<template>
  <AddForm
    :fields="fields"
    edit-route="articles.edit"
    url="/articles"
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
        {component: 'TextareaLang', name: 'short_description', label: 'Короткий опис'},
        {component: 'EditorLang', name: 'description', label: 'Опис'},
        {component: 'MultiSelect', name: 'tags', label: 'Теги', options: 'tags'},
        {component: 'Checkbox', name: 'is_active', label: 'Активна'},
        {component: 'Checkbox', name: 'is_popular', label: 'Популярна'},
      ]
    }
  }
}
</script>
