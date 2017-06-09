<template>
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-content white-text" v-bind:class="">
          Your Turn
        </div>
        <div class="card-action">
          <span>1</span>
          <span>you x opponent</span>
          <span>0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'scoreBoard',
  data () {
    return {
      blue: true,
      red: false,
      green: false
    }
  },
  computed: mapState([
    'turn'
  ])
}
</script>
<style lang="scss" scoped>
  .col {
    padding: 0 0;
  }
</style>
