<template>
  <DefaultTable
    url="/tags"
    edit-route="tags.edit"
    add-route="tags.add"
    :header="header"
    :body="body"
    :filters="filters"
  />
</template>

<script>
import DefaultTable from "@/components/DefaultTable";
import AddButton from "@/components/buttons/AddButton";

export default {
  name: 'List',
  components: {AddButton, DefaultTable},
  methods: {
    header: () => ['ID', 'Назва', 'Slug'],
    body: (item) => [item.id, item.title, item.slug],
    filters: () => [
      {type: 'input', field: 'id', term: 'is'},
      {type: 'input', field: 'title', term: 'like'},
      {type: 'input', field: 'slug', term: 'like'},
    ]
  }
}
</script>
