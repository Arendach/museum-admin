<template>
  <EditForm :fields="fields" url="/articles" :tabs="true"></EditForm>
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
            {component: 'TextareaLang', name: 'short_description', label: 'Короткий опис'},
            {component: 'EditorLang', name: 'description', label: 'Опис'},
            {component: 'MultiSelect', name: 'tags', label: 'Теги', options: 'tags'},
            {component: 'Checkbox', name: 'is_active', label: 'Активна'},
            {component: 'Checkbox', name: 'is_popular', label: 'Популярна'},
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
      ]
    }
  }
}
</script>
