<template>
  <div class="input-container">
    <div class="row">
      <div class="col-6">
        <label class="form-label">{{ label }}</label>
      </div>
      <div class="col-6" style="text-align: right">
        <span
          v-for="lang in languages"
          :key="lang.key"
          :class="{
            active: lang.key === selected,
            btn: true,
            'btn-sm': true,
            'btn-outline-primary': true,
          }"
          @click="selected = lang.key"
        >
          <img style="width: 15px" :src="`/flags/${lang.key}.svg`" />
        </span>
      </div>
    </div>
    <input
      v-for="lang in languages"
      v-show="lang.key === selected"
      :key="lang.key"
      type="text"
      class="form-control"
      :name="name + lang.postfix"
      :value="item[name + lang.postfix]"
    />
  </div>
</template>

<script>
export default {
  name: 'InputLang',
  props: ['label', 'item', 'name'],
  data() {
    return {
      selected: 'ua',
      languages: [],
    }
  },
  mounted() {
    this.languages = this.config('languages')
  },
}
</script>

<style>
.input-container {
  margin-bottom: 15px;
}
</style>
