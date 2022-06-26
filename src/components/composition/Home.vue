<template lang='pug'>
div {{counter.counter}}
</template>
<script>
import { ref, reactive } from 'vue'
export default {
  name: 'UserRepositories',
  setup () {
    const text = ref('Hello World')
    const obj = reactive({ counter: 0})

    setInterval(() => obj.counter++, 1000)
    return {
      text,
      counter: obj
    }
  }
}
</script>
<style lang='styl'>

</style>
