<template>
<EditForm url="/weapons" :fields="fields"/>
</template>

<script>
import EditForm from "@/components/Functional/EditForm"

export default {
  name: 'Edit',
  components: {EditForm},
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
