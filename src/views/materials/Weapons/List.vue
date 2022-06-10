<template>
  <AddButton label="Нова зброя" route="weapons.add"/>
  <DefaultTable delete-url="/weapons" url="/weapons" edit-route="weapons.edit" :header="header" :body="body"/>
</template>

<script>
import DefaultTable from "@/components/DefaultTable";
import AddButton from "@/components/buttons/AddButton";

export default {
  name: 'List',
  components: {AddButton, DefaultTable},
  methods: {
    header: () => ['ID', 'Назва', 'Slug'],
    body: (item) => [item.id, item.title, item.slug]
  }
}
</script>
