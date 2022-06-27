<template>
  <EditForm url="/countries" :fields="fields" :tabs="true"/>
</template>

<script>
import EditForm from "@/components/Functional/EditForm"

export default {
  name: 'Edit',
  components: {EditForm},
  data() {
    return {
      fields: [
        {
          title: 'Основана інформація',
          items: [
            {component: 'InputText', name: 'slug', label: 'Slug'},
            {component: 'InputText', name: 'code', label: 'Код'},
            {component: 'InputLang', name: 'title', label: 'Назва'},
            {
              component: 'VSelect',
              name: 'status',
              label: 'Відношення',
              options: [
                {id: 'friend', title: 'Дружнє'},
                {id: 'enemy', title: 'Вороже'},
                {id: 'neutral', title: 'Нейтральне'}
              ]
            },
            {component: 'EditorLang', name: 'description', label: 'Опис'}
          ]
        },
        {
          title: 'Сео',
          items: [
            {component: 'SeoField'}
          ]
        }
      ]
    }
  }
}
</script>
