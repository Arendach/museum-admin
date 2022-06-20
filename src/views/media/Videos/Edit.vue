<template>
  <EditForm url="/videos" :fields="fields" :tabs="false"></EditForm>
</template>

<script>
import EditForm from "@/components/Functional/EditForm"

export default {
  name: 'Edit',
  components: {EditForm},
  data() {
    return {
      fields: [
        {component: 'InputLang', name: 'title', label: 'Назва'},
        {component: 'EditorLang', name: 'description', label: 'Опис'},
        {component: 'InputText', name: 'source', label: 'Джерело (url)'},
        {component: 'InputLang', name: 'source_title', label: 'Джерело (текст)'},
      ]
    }
  }
}
</script>
