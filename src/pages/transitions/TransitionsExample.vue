<template lang='pug'>
.q-pa-xl
  q-btn(
    color='primary',
    @click="show = !show"
  ) Menu
  transition(name='fade' :duration="1000")
    Menu(v-show="show")
</template>
<script>
import Menu from '~/components/transitions/Menu.vue'
export default {
  name: 'TransitionsExample',
  components: {
    Menu
  },
  data () {
    return {
      show: false
    }
  },
  methods: {

  }
}
</script>
<style lang='sass'>
@import '~/css/app.sass'
</style>
