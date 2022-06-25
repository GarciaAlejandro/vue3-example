<template lang='pug'>
#container
  q-card(class="bg-primary text-white")
    q-card-section {{title}}
    q-card-section
      .row.q-col-gutter-lg
        .col-6 {{marketDetail.getKey()}}
        .col-6 {{marketDetail.id}}
        .col-6 {{marketDetail.label}}
        .col-6 {{marketDetail.authorities}}
</template>
<script>
import { Market } from '~/models/Market'
export default {
  name: 'MarketComponent',
  props: {
    marketDetail: {
      type: Market,
      required: true
    },
    title: {
      type: String,
      default: 'Market'
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang='sass' scoped>
#container
  min-width: 200px
  min-height: 200px
  font-size: 18px
</style>
