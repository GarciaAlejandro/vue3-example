<template lang='pug'>
div
  q-btn(
    @click='toggle'
  ) Open Modal
  teleport(to="body")
    div(v-show="show" class="modal" @click="show = false")
      CustomSpinner

</template>
<script>
import CustomSpinner from '~/components/common/CustomSpinner.vue'
export default {
  name: 'Modal',
  components: {
    CustomSpinner
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>
<style lang='sass' scoped>
.modal
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  color: white
  background: rgba(0, 0, 0, 0.5)
  z-index: 9999
  text-align: center
  // align vertical center
  display: flex
  align-items: center
  justify-content: center
  // align horizontal center
  // display: flex
  // align-items: center
  // justify-content: center
  // // align vertical center
</style>
