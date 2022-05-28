<template>
  <div style="text-align: right; margin-bottom: 24px">
    <router-link :to="{name: 'peoples.add'}" class="btn btn-primary">
      Додати нову людину
    </router-link>
  </div>

  <DefaultTable edit-route="peoples.edit" url="/peoples" :header="header" :body="body"></DefaultTable>
</template>

<script>
import DefaultTable from '@/components/DefaultTable'

export default {
  name: 'Peoples',
  components: {
    DefaultTable,
  },
  methods: {
    header: () => ['ID', 'Імя'],
    body: (item) => [item.id, item.name],
  },
}
</script>
