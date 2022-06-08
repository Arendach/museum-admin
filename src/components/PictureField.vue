<template>
  <div class="form-group mb-15">
    <label>Оберіть нове зображення</label>
    <input type="file" class="form-control" v-on:change="uploadPicture">
  </div>

  <div class="alert alert-info text-center" v-show="path">
    <img :src="path" :alt="alt" style="max-width: 100%;">
  </div>
</template>

<script>

export default {
  name: 'PictureField',
  props: {
    picture: {
      type: Object,
      default: {
        path: null,
        alt: null
      }
    },
    url: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      path: null,
      alt: null
    }
  },
  mounted() {
    this.path = this.picture?.path ?? ''
    this.alt = this.picture?.alt ?? ''
  },
  methods: {
    uploadPicture(event) {
      let picture = event.target.files[0]
      let data = new FormData

      data.append('picture', picture)

      fetch(this.apiUrl(this.url), {
        method: 'POST',
        body: data,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          //'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
        .then(res => res.json())
        .then(res => {
          this.path = res.data.path
          this.alt = res.data.alt
        })
    }
  }
}
</script>
