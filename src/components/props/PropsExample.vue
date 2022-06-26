<template lang='pug'>
div {{firstName}} {{lastName}}
div {{fullName}}

</template>
<script>
import {  computed, toRefs } from 'vue'
export default {
  name: 'UserRepositories',
  props: {
    firstName: {
      type: String,
      default: 'John'
    },
    lastName: {
      type: String,
      default: 'Doe'
    }
  },
  setup (props) {
    const {firstName, lastName} = toRefs(props)
    const fullName = computed(() => {
      return `computed full name: ${firstName.value} ${lastName.value}`
    })
    return {
      fullName
    }
  }
}
</script>
<style lang='styl'>

</style>
