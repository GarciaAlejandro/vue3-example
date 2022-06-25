<template lang='pug'>
#container.q-pa-xl
  Helloworld(:msg="'Hello World!'")
</template>
<script>
// import Helloworld from '~/components/Helloworld.vue'
import {defineAsyncComponent} from 'vue'
const Helloworld = defineAsyncComponent(() => import('~/components/Helloworld.vue'))
export default {
  name: 'AsyncComponent',
  components: {
    Helloworld
  },

  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang='styl'>

</style>
