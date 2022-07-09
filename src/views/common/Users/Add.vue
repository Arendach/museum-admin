<template>
  <AddForm
    :fields="fields"
    edit-route="users.edit"
    url="/users"
  />
</template>

<script>
import AddForm from '@/components/Functional/AddForm'

export default {
  name: 'Add',
  components: {
    AddForm
  },
  data() {
    return {
      fields: [
        {component: 'InputText', name: 'name', label: 'Імя', required: true},
        {component: 'InputText', name: 'email', label: 'Email', required: true},
        {component: 'PasswordField', required: true, hint: 'Мінінум 8 символів'},
      ]
    }
  }
}
</script>
