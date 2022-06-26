<template lang='pug'>
.text-h4.q-py-md Computed Example
div {{firstName}} {{lastName}}
div {{fullName}}

</template>
<script>
import { ref, computed } from 'vue'
export default {
  name: 'UserRepositories',
  setup () {
    const firstName = ref('John')
    const lastName = ref('Doe')
    const fullName = computed(() => {
      return `computed full name: ${firstName.value} ${lastName.value}`
    })
    return {
      firstName,
      lastName,
      fullName
    }
  }
}
</script>
<style lang='styl'>

</style>
