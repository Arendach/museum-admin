<template>
  <AddButton label="Новий тег" route="tags.add"/>
  <DefaultTable delete-url="/tags" url="/tags" edit-route="tags.edit" :header="header" :body="body"/>
</template>

<script>
import DefaultTable from "@/components/DefaultTable";
import AddButton from "@/components/buttons/AddButton";

export default {
  name: 'TagsList',
  components: {AddButton, DefaultTable},
  methods: {
    header: () => ['ID', 'Назва', 'Slug'],
    body: (item) => [item.id, item.title, item.slug]
  }
}
</script>
