<template>
  <DefaultTable
    url="/articles"
    :header="header"
    :body="body"
    :filters="filters"
    edit-route="articles.edit"
    add-route="articles.add"
  ></DefaultTable>
</template>

<script>
import AddButton from "@/components/buttons/AddButton"
import DefaultTable from "@/components/DefaultTable"

export default {
  name: 'Articles',
  data() {
    return {
      header: () => [
        'ID',
        'Заголовок',
        'Slug',
        'Автор',
        'Теги'
      ],
      body: (item) => [
        item.id,
        item.title,
        item.slug,
        this.displayAuthor(item),
        this.displayTags(item)
      ],
      filters: () => [
        {type: 'input', field: 'id', term: 'is'},
        {type: 'input', field: 'title', term: 'like'},
        {type: 'input', field: 'slug', term: 'like'},
        null,
        null,
      ]
    }
  },
  components: {
    DefaultTable,
    AddButton,
  },
  methods: {
    displayAuthor(item) {
      return `<a href="${item.user.url}">${item.user.name}</a>`
    },
    displayTags(item) {
      return item.tags.map((tag) => `<a :href="${tag.url}" class="btn btn-success btn-sm">${tag.title}</a>`).join(' ')
    }
  },
}
</script>
