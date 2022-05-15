<template>
  <CRow>
    <CCol :xs="12" v-if="isLoaded">
      <slot></slot>
    </CCol>
    <CCol :xs="12" v-else>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Wrapper',
  props: {
    loaded: {
      type: Boolean,
    },
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  created() {
    this.isLoaded = this.loaded
  },
  watch: {
    loaded(value) {
      this.isLoaded = value
    },
  },
}
</script>
