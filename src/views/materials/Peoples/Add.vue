<template>
  <AddForm
    url="/peoples"
    edit-route="peoples.edit"
    :fields="fields"
    :tabs="false"
  ></AddForm>
</template>

<script>
import AddForm from "@/components/Functional/AddForm"

export default {
  name: 'Add',
  components: {AddForm},
  data() {
    return {
      fields: [
        {component: 'InputLang', name: 'name', label: 'Імя'},
        {component: 'VSelect', name: 'country_id', label: 'Країна', options: 'countries'},
      ]
    }
  }
}
</script>
