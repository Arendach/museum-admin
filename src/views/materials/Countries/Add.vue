<template>
<AddForm
  edit-route="countries.edit"
  url="/countries"
  :fields="fields"
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
        {component: 'InputText', name: 'code', label: 'Код'},
        {component: 'InputLang', name: 'title', label: 'Назва'},
        {component: 'VSelect', name: 'status', label: 'Відношення', options: [
            {id: 'friend', title: 'Дружнє'},
            {id: 'enemy', title: 'Вороже'},
            {id: 'neutral', title: 'Нейтральне'},
          ]
        },
        {component: 'EditorLang', name: 'description', label: 'Опис'}
      ]
    }
  },
}
</script>
