<template>
  <EditForm :fields="fields" url="/users" :tabs="true"></EditForm>
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
            {component: 'InputText', name: 'name', label: 'Імя', required: true},
            {component: 'InputText', name: 'email', label: 'Email', hint: 'Використовується для входу', required: true},
            {component: 'PasswordField', hint: 'Пароль не менше 8ми символів'}
          ]
        },
      ]
    }
  }
}
</script>
