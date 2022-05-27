<template>
  <DefaultTable url="/quotes" :header="header" :body="body"></DefaultTable>
</template>

<script>
import DefaultTable from '@/components/DefaultTable'

export default {
  name: 'Quotes',
  components: { DefaultTable },
  methods: {
    header: () => ['ID', 'Цитата', 'Автор'],
    body: (item) => [item.id, item.title, item.people.name],
  },
}
</script>
