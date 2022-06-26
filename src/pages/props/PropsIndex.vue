<template lang='pug'>
div.q-pa-xl
  .text-h4 Props Example
  q-input(v-model="firstNameInput" @keyup="changeFirstName" label="Enter first name" outlined)
  PropsExample(:first-name="firstName", last-name='Doe')
</template>
<script>
import {ref} from 'vue'
import PropsExample from '~/components/props/PropsExample.vue'
export default {
  name: 'PropsIndex',
  components: {
    PropsExample
  },
  setup () {
    const firstName = ref('John')
    const firstNameInput = ref('')
    const changeFirstName = () => {
      firstName.value = firstNameInput.value
    }
    return {
      firstName,
      firstNameInput,
      changeFirstName
    }
  }
}
</script>
<style lang='styl'>

</style>
