<template lang='pug'>
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
  setup (props, ctx) {
    // Context -> ctx
    // Contains attrs, emit, slots, expose
    // # ATTRS
    // attrs is a Vue instance property
    // it is a map of all attributes on the component. For example: dense, appears on the parent component but
    // not on the props of the child component.
    // # EMIT
    // emit is a Vue instance property
    // it is a map of all events on the component. For example: click
    // # SLOTS
    // slots is a Vue instance property
    // it is a map of all slots on the component. For example: default, default-header, default-footer
    // # EXPOSE
    // expose is a Vue instance property
    // it is a map of all exposed properties on the component. For example: $attrs, $emit, $slots, $expose
    console.log(ctx)
    const {firstName, lastName} = toRefs(props)
    const fullName = computed(() => {
      return `computed full name: ${firstName.value} ${lastName.value}`
    })
    ctx.expose({
      fullName
    })
    return {
      fullName
    }
  }
}
</script>
<style lang='styl'>

</style>
