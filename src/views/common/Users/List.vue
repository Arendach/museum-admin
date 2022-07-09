<template>
  <DefaultTable
    url="/users"
    :header="header"
    :body="body"
    :filters="filters"
    edit-route="users.edit"
    add-route="users.add"
  />
</template>

<script>
import DefaultTable from "@/components/DefaultTable"

export default {
  name: 'Articles',
  data() {
    return {
      header: () => [
        'ID',
        'Імя',
        'Email',
        'Зареєстрований',
        'Останній раз заходив',
      ],
      body: (item) => [
        item.id,
        item.name,
        item.email,
        item.created_at,
        item.updated_at,
      ],
      filters: () => [
        {type: 'input', field: 'id', term: 'is'},
        {type: 'input', field: 'title', term: 'like'},
        {type: 'input', field: 'email', term: 'like'},
        {type: 'input', field: 'slug', term: 'like'},
        null,
      ]
    }
  },
  components: {DefaultTable}
}
</script>
