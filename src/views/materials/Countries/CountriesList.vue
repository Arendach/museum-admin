<template>
  <AddButton route="countries.add" label="Додати нову людину"></AddButton>
  <DefaultTable edit-route="countries.edit" delete-url="/country" url="/countries" :header="header" :body="body"></DefaultTable>
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
    }
  }
}
</script>
