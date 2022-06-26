<template lang='pug'>
.row
  .col-12
    div Loading ...
  .col-12(v-if="loader === 'progress'")
    div(class="progress")
      div(class="color")
  .col-12(v-if="loader === 'atom'")
    div(class="loader q-ml-lg")
</template>
<script>
export default {
  name: 'CustomSpinner',
  components: {

  },
  data () {
    return {
      loader: 'progress'
    }
  },
  methods: {

  }
}
</script>
<style lang='sass' scoped>
@import '~/css/spinners-custom/progress.sass'
@import '~/css/spinners-custom/atom.sass'
</style>
