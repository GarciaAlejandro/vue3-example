<template lang='pug'>
.text-h6 Child component [Receiving data from Provider]
div {{fullName}}
div(class="clickable" @click="updateUsername('Updated from child component')") Injector: {{username}}
div(class="clickable" @click="text = 'attempt to change the value'") Readonly [check console] {{text}}

</template>
<script>
import { inject } from 'vue'
import {  computed, toRefs } from 'vue'
export default {
  name: 'ProviderExample',
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
    const {username, updateUsername } = inject('username')
    const text = inject('text')
    const fullName = computed(() => {
      return `computed full name: ${firstName.value} ${lastName.value}`
    })
    return {
      fullName,
      username,
      updateUsername,
      text
    }
  }
}
</script>
<style lang='sass' scoped>
.clickable
  cursor: pointer
  &:hover
    color: red
</style>
