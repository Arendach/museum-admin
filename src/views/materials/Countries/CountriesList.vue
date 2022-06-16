<template>
  <AddButton route="countries.add" label="Додати нову країну"></AddButton>
  <DefaultTable
    edit-route="countries.edit"
    delete-url="/country"
    url="/countries"
    :header="header"
    :body="body"
    :filters="filters"
  ></DefaultTable>
</template>

<script>
import DefaultTable from "@/components/DefaultTable";
import AddButton from "@/components/buttons/AddButton";

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
        null,
        {field: 'title', type: 'input', term: 'like'},
        {field: 'code', type: 'input', term: 'is'},
        null
      ]
    }
  }
}
</script>
