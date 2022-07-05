<template>
  <EditForm
    url="/tags"
    :fields="fields"
    :tabs="true"
  />
</template>

<script>
import EditForm from "@/components/Functional/EditForm"

export default {
  name: 'Edit',
  components: {
    EditForm,
  },
  data() {
    return {
      fields: [
        {
          title: 'Основна інформація',
          items: [
            {component: 'InputText', name: 'slug', label: 'Slug'},
            {component: 'InputLang', name: 'title', label: 'Назва тегу'},
            {component: 'EditorLang', name: 'description', label: 'Опис'},
            {component: 'Checkbox', name: 'is_active', label: 'Активний'},
            {component: 'Checkbox', name: 'is_top', label: 'В топі'},
          ]
        },
        {
          title: 'Зображення',
          items: [
            {component: 'PictureField', model: 'Tag'}
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
  },
}
</script>
