<template lang='pug'>
div.q-pa-md
  ChildComponent
</template>
<script>
import ChildComponent from '~/components/provider/ChildComponent.vue'
export default {
  name: 'ProviderExample',
  components: {
    ChildComponent
  }
}
</script>
<style lang='styl'>

</style>
