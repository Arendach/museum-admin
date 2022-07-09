<template>
  <DefaultTable
    url="/pages"
    :header="header"
    :body="body"
    :filters="filters"
    edit-route="pages.edit"
    add-route="pages.add"
    :show-delete-button="false"
  ></DefaultTable>
</template>

<script>
import DefaultTable from "@/components/DefaultTable"

export default {
  name: 'Articles',
  data() {
    return {
      header: () => [
        'ID',
        'Заголовок',
        'Slug',
      ],
      body: (item) => [
        item.id,
        this.displayTitle(item),
        item.slug,
      ],
      filters: () => [
        {type: 'input', field: 'id', term: 'is'},
        {type: 'input', field: 'title', term: 'like'},
        {type: 'input', field: 'slug', term: 'like'},
      ]
    }
  },
  components: {DefaultTable},
  methods: {
    displayTitle(item) {
      return `<a target="_blank" href="${item.url}">${item.title}</a>`
    }
  }
}
</script>
