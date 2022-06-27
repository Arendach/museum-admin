<template>
  <DefaultTable
    edit-route="peoples.edit"
    add-route="peoples.add"
    url="/peoples"
    :header="header"
    :body="body"
    :filters="filters"
  ></DefaultTable>
</template>

<script>
import DefaultTable from '@/components/DefaultTable'

export default {
  name: 'Peoples',
  components: {
    DefaultTable,
  },
  methods: {
    header: () => ['ID', 'Імя', 'Країна'],
    body: (item) => [item.id, item.name, (item.country?.title ?? 'Не обрано')],
    filters: () => [
      {type: 'input', term: 'is', field: 'id'},
      {type: 'input', term: 'like', field: 'title'},
      {type: 'select', term: 'is', field: 'country_id', options: 'countries'},
    ]
  },
}
</script>
