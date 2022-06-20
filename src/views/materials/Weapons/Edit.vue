<template>
<EditForm url="/weapons" :fields="fields" :tabs="true"/>
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
          title: 'Основна інформація',
          items: [
            {component: 'InputText', name: 'slug', label: 'Slug'},
            {component: 'InputLang', name: 'title', label: 'Назва'},
            {component: 'EditorLang', name: 'description', label: 'Опис'},
            {component: 'InputText', name: 'date', label: 'Перше впоминання'},
            {component: 'MultiSelect', name: 'countries', label: 'Країни використовують', options: 'countries'},
          ]
        },
        {
          title: 'Зображення',
          items: [
            {component: 'PictureField', name: 'picture', label: 'Зображення', model: 'Weapon'}
          ]
        },
        {
          title: 'Відеоматеріали',
          items: [
            {component: 'VideoField', name: 'videos', model: 'Weapon'}
          ]
        }
      ]
    }
  }
}
</script>
