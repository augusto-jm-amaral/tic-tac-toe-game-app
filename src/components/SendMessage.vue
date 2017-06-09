<template>
  <div class="row">
    <form class="col input-field s12">
<!--       <div class="row">
        <div class="input-field col s6"> -->
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
          <label for="icon_prefix2">First Name</label>
<!--         </div>
      </div> -->
    </form>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'sendMessage',
  data () {
    return {
    }
  },
  computed: mapState([
    'gameState'
  ])
}
</script>
<style lang="scss" scoped>
  .col {
    padding: 0 0;
  }
</style>
