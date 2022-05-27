<template>
  <Wrapper :loaded="people.name !== undefined">
    <Tabs>
      <Tab name="Інформація">
        <CForm id="editPeople">
          <InputLang label="Імя" :item="people" name="name"></InputLang>
          <CButton color="primary" @click="updatePeople">Зберегти</CButton>
        </CForm>
      </Tab>
      <Tab name="Цитати">
        <div style="text-align: right; margin-bottom: 24px">
          <router-link
            :to="`/peoples/edit/${$route.params.id}/quote/add`"
            class="btn btn-primary"
          >
            Додати цитату
          </router-link>
        </div>

        <table class="table table-bordered">
          <thead>
          <tr>
            <th>ID</th>
            <th>Цитата</th>
            <th class="actions">Дії</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="quote in people.quotes" :key="quote.id" v-if="people.quotes.length">
            <td>{{ quote.id }}</td>
            <td>{{ quote.title }}</td>
            <td class="actions">
              <EditButton to="/tst"></EditButton>
              <DeleteButton :url="`/quote/${quote.id}`" @deleted="deleteQuote(quote.id)"></DeleteButton>
            </td>
          </tr>
          <tr v-else>
            <td colspan="3" style="text-align: center" class="text-warning">
              В цієї людини немає цитат!
            </td>
          </tr>
          </tbody>
        </table>
      </Tab>
    </Tabs>
  </Wrapper>
</template>

<script>
import InputLang from '@/components/InputLang'
import Api from '@/Api'
import Wrapper from '@/components/Wrapper'
import {Tab, Tabs} from 'vue3-tabs-component'
import EditButton from '@/components/buttons/EditButton'
import DeleteButton from '@/components/buttons/DeleteButton'

export default {
  name: 'EditForm',
  components: {
    InputLang,
    Wrapper,
    Tabs,
    Tab,
    EditButton,
    DeleteButton,
  },
  data() {
    return {
      people: {},
    }
  },
  beforeMount() {
    this.loadPeople()
  },
  methods: {
    loadPeople() {
      Api.get(`/people/${this.$route.params.id}`).then((res) => {
        this.people = res.data
      })
    },
    updatePeople() {
      let data = this.serialize(document.querySelector('#editPeople'))

      Api.put(`/people/${this.people.id}`, data).then(() => this.successToast('Дані збережено'))
    },
    deleteQuote(id) {
      this.people.quotes = this.people.quotes.filter(quote => quote.id !== id)
    }
  },
}
</script>
