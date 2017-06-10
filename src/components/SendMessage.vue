<template>
  <div class="row">
    <form class="col input-field s12">
      <i class="material-icons prefix">mode_edit</i>
      <textarea ref="textMessage" id="icon_prefix2" class="materialize-textarea" @keyup.enter="sendMessage"></textarea>
      <label for="icon_prefix2">Message</label>
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
    'name'
  ]),
  methods: {
    sendMessage () {
      let message = this.$refs.textMessage.value
      this.$store.dispatch('sendMessage', {
        sender: this.name,
        socket: this.$socket,
        message
      })
      this.$refs.textMessage.value = ''
    }
  }
}
</script>
<style lang="scss" scoped>
  .col {
    padding: 0 0;
  }
</style>
