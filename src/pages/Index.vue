<template lang="pug">
q-page.q-pa-xl
  .row
    component(:is="'Helloworld'")
  .row
    MarketComponent(:market-detail="marketDetail")
  .row
    q-btn(@click="() => { this.marketDetail.setKey('0x'+Math.random()) }") Click me
</template>

<script>
import { defineComponent } from 'vue'
import Helloworld from '~/components/Helloworld.vue'
import MarketComponent from '~/components/Marketplace/MarketComponent.vue'
import Marketplace  from '~/models/Marketplace'
export default defineComponent({
  name: 'PageIndex',
  components: {
    Helloworld,
    MarketComponent
  },
  data () {
    return {
      marketDetail: new Marketplace('key', '0x01', 'Market lorem', 'authorities')
    }
  }
})
</script>
