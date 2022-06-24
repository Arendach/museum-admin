<template>
  <CAccordion class="mb-15" :active-item-key="accordion">
    <CAccordionItem :item-key="1">
      <CAccordionHeader>Додати нове відео</CAccordionHeader>
      <CAccordionBody>
        <div class="input-container">
          <label class="form-label">Оберіть відео</label>
          <input type="file" class="form-control mb-15" @change="changeFiles" :disabled="isUploading">
        </div>

        <div class="input-container">
          <label class="form-label">Назва</label>
          <input type="text" class="form-control mb-15" v-model="title" :disabled="isUploading">
        </div>

        <CButton @click="upload" color="primary" :disabled="isUploading">
          <span v-if="isUploading">
            <CSpinner color="success" component="span" size="sm" variant="grow"/> Відбувається завантаження, зачекайте
          </span>
          <span v-else>Завантажити відео і зберегти</span>
        </CButton>

      </CAccordionBody>
    </CAccordionItem>
    <CAccordionItem :item-key="2">
      <CAccordionHeader>Прикріпити існуюче відео</CAccordionHeader>
      <CAccordionBody>
        <div class="input-container">
          <input
            v-model="searchQuery"
            type="text"
            class="form-control"
            placeholder="Почніть пошук ввівши назву"
            @input="searchVideos"
          >
          <hr>
          <CListGroup>
            <CListGroupItem v-for="video in searched" class="searched-video" @click="attachVideo(video)">
              {{ video.title }}
            </CListGroupItem>
          </CListGroup>
        </div>
      </CAccordionBody>
    </CAccordionItem>
    <CAccordionItem :item-key="3">
      <CAccordionHeader>Список відео</CAccordionHeader>
      <CAccordionBody>
        <div v-for="video in list" v-if="list.length" class="video-item">
          <router-link :to="{name: 'videos.edit', params: {id: video.id}}">
            {{ video.title }}
          </router-link>
        </div>
        <div v-else>
          <h3 style="text-align: center">
            Тут порожньо
          </h3>
        </div>
      </CAccordionBody>
    </CAccordionItem>
  </CAccordion>
</template>

<script>

import Api from '@/lib/Api'

export default {
  name: 'VideoField',
  props: {
    modelId: {
      type: [String, Number],
      default: null
    },
    model: {
      type: String,
      default: null
    },
    videos: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      isUploading: false,
      file: null,
      title: null,
      list: [],
      accordion: 3,
      searchQuery: '',
      searched: []
    }
  },
  mounted() {
    this.list = this.videos
  },
  methods: {
    changeFiles(event) {
      this.file = event.target.files[0] || null
    },
    upload(event) {
      event.preventDefault()

      if (!this.file) return alert('Оберіть файл для загрузки')
      if (!this.title) return alert('Введіть назву відео')

      this.isUploading = true

      let data = new FormData

      data.append('video', this.file)
      data.append('title', this.title)

      if (this.model && this.modelId) {
        data.append('model', this.model)
        data.append('id', this.modelId)
      }

      fetch(this.apiUrl('/videos/upload'), {
        method: 'POST',
        body: data,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
        },
      })
        .then(res => res.json())
        .then(res => {
          this.successToast('Відео успішно завантажене')
          this.file = null
          this.title = ''
          this.accordion = 2
          this.list.push(res.data)
          this.isUploading = false
        })
    },
    searchVideos(event) {
      this.timer(() => {
        let query = event.target.value
        let exclude = this.list.map(video => video.id)

        let data = {
          filters: [
            {
              field: 'title',
              term: 'like',
              value: query,
            },
            {
              field: 'id',
              term: 'not in',
              value: exclude
            }
          ]
        }

        Api.get('/videos', data)
          .then(res => this.searched = res.data)
          .catch(() => this.errorToast('Ой! Щось пішло не так :('))
      })
    },
    attachVideo(video) {
      let data = {
        id: this.modelId,
        model: this.model,
        video_id: video.id,
      }

      Api.put('/videos/attach', data)
        .then(res => {
          this.successToast('Відео вдало прикріплено!')
          this.videos.push(video)
          this.searched = []
          this.searchQuery = ''
        })
    }
  }
}
</script>

<style scoped>
.video-item {
  border-bottom: 1px solid black;
  padding: 10px;
}

.video-item:last-child {
  border-bottom: none;
}

.searched-video {
  cursor: pointer;
}

.searched-video:hover {
  font-weight: bold;
}
</style>
