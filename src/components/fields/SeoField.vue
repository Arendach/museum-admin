<template>
  <InputLang
    name="title"
    wrapper="seo"
    label="Title"
    :item="seo"
    hint="Мета тег title, заголовок сторінки в браузері"
  />

  <InputLang
    name="description"
    wrapper="seo"
    label="Description"
    :item="seo"
    hint="Мета тег description, опис сторінки для пошукових систем"
  />

  <InputLang
    name="keywords"
    wrapper="seo"
    label="Keywords"
    :item="seo"
    hint="Keywords або ключові слова, по них буде проводитися пошук, писати ключові слова через кому"
  />

  <Checkbox
    label="Index"
    name="is_index"
    wrapper="seo"
    :value="seo?.is_index ?? false"
  />

  <Checkbox
    label="Follow"
    name="is_follow"
    wrapper="seo"
    :value="seo?.is_follow ?? false"
  />
</template>

<script>
import InputLang from "@/components/InputLang"
import Checkbox from "@/components/Checkbox"

export default {
  name: 'SeoField',
  props: {
    item: {
      type: Object,
      default: {
        seo: null
      }
    },
  },
  computed: {
    seo() {
      if (this.item.seo !== null) {
        return this.item.seo
      }

      return {}
    }
  },
  components: {
    Checkbox,
    InputLang,
  }
}
</script>
