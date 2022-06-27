<template>
  <DefaultTable
    delete-url="/weapons"
    url="/weapons"
    edit-route="weapons.edit"
    add-route="weapons.add"
    :header="header"
    :body="body"
    :filters="filters"
  />
</template>

<script>
import DefaultTable from "@/components/DefaultTable"
import AddButton from "@/components/buttons/AddButton"

export default {
  name: 'List',
  components: {AddButton, DefaultTable},
  data() {
    return {
      header: () => ['ID', 'Назва', 'Slug'],
      body: (item) => [item.id, this.displayTitle(item), item.slug],
      filters: () => [
        {type: 'input', field: 'id', term: 'is'},
        {type: 'input', field: 'title', term: 'like'},
        {type: 'input', field: 'slug', term: 'like'},
      ]
    }
  },
  methods: {
    displayTitle(item) {
      return `<a href="${item.url}">${item.title}</a>`
    }
  }
}
</script>
