<template lang='pug'>
div Component Works! {{msg}}
</template>
<script>
export default {
  name: 'Helloworld',
  components: {

  },
  props: {
    msg: {
      type: String,
      default: 'Hello World!'
    }
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
