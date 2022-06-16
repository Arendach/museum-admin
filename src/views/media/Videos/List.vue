<template>
  <table class="table table-bordered">
    <thead>
    <tr>
      <th>Назва</th>
      <th>Відео</th>
      <th>Тип</th>
      <th></th>
    </tr>
    <tr>
      <td>
        <input type="text" class="form-control" placeholder="Введіть частину назви" v-model="term">
      </td>
      <td></td>
      <td>
        <select class="form-control" v-model="type">
          <option :value="null">Вибрати тип</option>
          <option value="youtube">Відео з youtube</option>
          <option value="default">Відео з сервера</option>
        </select>
      </td>
      <td></td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="video in videos">
      <td>{{ video.title }}</td>
      <td>{{ video.path }}</td>
      <td>{{ video.type }}</td>
      <td>
        <EditButton :to="{name: 'videos.edit', params: {id: video.id}}"></EditButton>
        <DeleteButton :url="`/videos/${video.id}`"></DeleteButton>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import Api from "@/lib/Api"
import EditButton from "@/components/buttons/EditButton";
import DeleteButton from "@/components/buttons/DeleteButton";

export default {
  name: 'List',
  components: {DeleteButton, EditButton},
  data() {
    return {
      term: '',
      type: '',
      isLoaded: false,
      videos: [],
      time: 0
    }
  },
  mounted() {
    this.loadVideos()
  },
  watch: {
    term() {
      this.loadVideos()
    },
    type() {
      this.loadVideos()
    }
  },
  methods: {
    loadVideos() {
      this.timer(() => {

        let body = {filters: []}

        if (this.term) {
          body.filters.push({
            field: 'title',
            term: 'like',
            value: this.term
          })
        }

        if (this.type) {
          body.filters.push({
            field: 'type',
            value: this.type
          })
        }

        Api.get(`/videos`, body)
          .then(res => this.videos = res.data)
          .catch(res => this.showErrors(res))
          .finally(() => this.isLoaded = true)
      })
    },
    timer(callback) {
      clearTimeout(this.time)
      this.time = setTimeout(callback, 500)
    }
  }
}
</script>
