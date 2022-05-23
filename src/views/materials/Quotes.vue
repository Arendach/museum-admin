<template>
  <DefaultTable url="/quotes" :header="header" :body="body"></DefaultTable>
</template>

<script>
import DefaultTable from '@/components/DefaultTable'
import { compile } from 'vue'

export default {
  name: 'Quotes',
  components: { DefaultTable },
  methods: {
    header: () => ['ID', 'Цитата', 'Автор'],
    body: (item) => [
      item.id,
      item.title,
      compile(`<RouterLink to="/peoples/1">test</RouterLink>`),
    ],
  },
}
</script>
