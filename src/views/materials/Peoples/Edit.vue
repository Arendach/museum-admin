<template>
  <Wrapper :loaded="people.name !== undefined">
    <Tabs>
      <Tab name="Інформація">
        <CForm id="editPeople">
          <InputLang
            label="Імя"
            :item="people"
            name="name"
          ></InputLang>

          <VSelect
            :options="countries"
            name="country_id"
            label="Країна"
            :value="people.country_id"
          ></VSelect>

          <CButton
            color="primary"
            @click="updatePeople"
          >
            Зберегти
          </CButton>
        </CForm>
      </Tab>
      <Tab name="Цитати">
        <div style="text-align: right; margin-bottom: 24px">
          <router-link
            :to="{name: 'peoples.quotes.add', params: {id: $route.params.id}}"
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
              <EditButton
                :to="{name: 'peoples.quotes.edit', params: {id: $route.params.id, quote_id: quote.id}}"></EditButton>
              <DeleteButton :url="`/quotes/${quote.id}`" @deleted="deleteQuote(quote.id)"></DeleteButton>
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
      <Tab name="Фото">
        <PictureField :id="people.id" model="People" :picture="people.picture"></PictureField>
      </Tab>
    </Tabs>
  </Wrapper>
</template>

<script>
import InputLang from '@/components/InputLang'
import Api from '@/lib/Api'
import Wrapper from '@/components/Wrapper'
import {Tab, Tabs} from 'vue3-tabs-component'
import EditButton from '@/components/buttons/EditButton'
import DeleteButton from '@/components/buttons/DeleteButton'
import VSelect from "@/components/VSelect"
import {mapGetters} from "vuex"
import PictureField from "@/components/PictureField"

export default {
  name: 'EditForm',
  components: {
    InputLang,
    Wrapper,
    Tabs,
    Tab,
    EditButton,
    DeleteButton,
    VSelect,
    PictureField,
  },
  data() {
    return {
      people: {},
    }
  },
  computed: mapGetters(['countries']),
  beforeMount() {
    this.loadPeople()
  },
  methods: {
    loadPeople() {
      Api.get(`/peoples/${this.$route.params.id}`).then((res) => {
        this.people = res.data
      })
    },
    updatePeople() {
      let data = this.serialize(document.querySelector('#editPeople'))

      Api.put(`/peoples/${this.people.id}`, data).then(() => this.successToast('Дані збережено'))
    },
    deleteQuote(id) {
      this.people.quotes = this.people.quotes.filter(quote => quote.id !== id)
    }
  },
}
</script>
