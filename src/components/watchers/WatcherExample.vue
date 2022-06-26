<template lang='pug'>
div {{'Using Reactive ' + obj.counter}}
div {{'Using Ref ' + counter}}
</template>
<script>
import { ref, reactive, watch } from 'vue'
export default {
  name: 'UserRepositories',
  setup () {
    const obj = reactive({ counter: 0})
    const counter = ref(0)
    setInterval(() => {
      obj.counter++
      counter.value++
    }, 1000)
    // Syntax when the variable is reactive. Use an arrow function
    watch( () => obj.counter,
      (newValue, oldValue) => {
        console.log('obj changed', newValue, oldValue)
      })
    // Syntax when the variable is ref. Use the name of the variable
    watch(counter,(newValue, oldValue) => {
      console.log('counter changed', newValue, oldValue)
    })
    return {
      obj,
      counter
    }
  }
}
</script>
<style lang='styl'>

</style>
