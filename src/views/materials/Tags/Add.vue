<template>
  <AddForm
    :fields="fields"
    edit-route="tags.edit"
    url="/tags"
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
        {component: 'InputLang', name: 'title', label: 'Назва тегу'},
      ]
    }
  }
}
</script>
