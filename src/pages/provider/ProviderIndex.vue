<template lang='pug'>
div.q-pa-xl
  .text-h4 Provider / Inject example
  q-input(v-model='username'  outlined label="Variable to send to Injector")
  ProviderExample(firstName='John', lastName='Doe')
</template>
<script>
import { provide, readonly, ref } from 'vue'
import ProviderExample from '~/components/provider/ProviderExample.vue'

export default {
  name: 'ProviderIndex',
  components: {
    ProviderExample
  },
  setup () {
    const username = ref('')
    const text = ref('String readonly from Injector')
    function updateUsername (value) {
      username.value = value
    }
    provide('username', {username, updateUsername})
    provide('text', readonly(text))

    return {
      username
    }
  }
}
</script>
<style lang='styl'>

</style>
