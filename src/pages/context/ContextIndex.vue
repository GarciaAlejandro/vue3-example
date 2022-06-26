<template lang='pug'>
div.q-pa-xl
  .text-h4 Context Example
  ContextExample(first-name='John', last-name='Doe' dense )
</template>
<script>
import ContextExample from '~/components/context/ContextExample.vue'
export default {
  name: 'ContextIndex',
  components: {
    ContextExample
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
