<template>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>title</th>
        <th>path</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="video in videos">
        <td>{{ video.title }}</td>
        <td>{{ video.path }}</td>
        <td></td>
      </tr>
      </tbody>
    </table>
</template>

<script>
import Api from "@/lib/Api"

export default {
  name: 'VideoGallery',
  props: {
    model: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      videos: [],
      isLoaded: false,
    }
  },
  mounted() {
    this.loadVideos()
  },
  methods: {
    loadVideos() {
      Api.get(`/videos?id=${this.id}&model=${this.model}`)
        .then(res => this.videos = res.data)
        .catch(err => this.showErrors(err))
        .finally(() => this.isLoaded = true)
    }
  }
}
</script>
