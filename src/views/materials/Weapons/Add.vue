<template>
  <AddForm
    url="/weapons"
    edit-route="weapons.edit"
    :fields="fields"
    :tabs="false"
  />
</template>

<script>
import AddForm from "@/components/Functional/AddForm"

export default {
  name: 'Add',
  components: {AddForm},
  data() {
    return {
      fields: [
        {component: 'InputText', name: 'slug', label: 'Slug'},
        {component: 'InputLang', name: 'title', label: 'Назва'},
        {component: 'EditorLang', name: 'description', label: 'Опис'},
        {component: 'InputText', name: 'date', label: 'Перше впоминання'},
        {component: 'MultiSelect', name: 'countries', label: 'Країни використовують', options: 'countries'},
      ]
    }
  }
}
</script>
