<template>
  <EditForm :fields="fields" url="/pages" :tabs="true"></EditForm>
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
            {component: 'Checkbox', name: 'is_active', label: 'Активна'},
          ]
        },
        {
          title: 'Зображення',
          items: [
            {component: 'PictureField', model: 'Article', name: 'picture'}
          ]
        },
        {
          title: 'Відеогалерея',
          items: [
            {component: 'VideoField', name: 'videos', model: 'Article'}
          ]
        },
        {
          title: 'СЕО',
          items: [
            {component: 'SeoField'}
          ]
        }
      ]
    }
  }
}
</script>
