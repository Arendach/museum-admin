<template>
  <DefaultTable
    edit-route="countries.edit"
    add-route="countries.add"
    url="/countries"
    :header="header"
    :body="body"
    :filters="filters"
  ></DefaultTable>
</template>

<script>
import DefaultTable from "@/components/DefaultTable"
import AddButton from "@/components/buttons/AddButton"

export default {
  name: 'CountriesList',
  components: {DefaultTable, AddButton},
  methods: {
    header() {
      return ['ID', 'Назва', 'Код', 'Slug']
    },
    body(item) {
      return [item.id, item.title, item.code, item.slug]
    },
    filters() {
      return [
        {field: 'id', type: 'input', term: 'is'},
        {field: 'title', type: 'input', term: 'like'},
        {field: 'code', type: 'input', term: 'is'},
        {field: 'slug', type: 'input', term: 'like'},
      ]
    }
  }
}
</script>
