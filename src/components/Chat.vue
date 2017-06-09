<template>
  <div class="row">
    <div class="card">
      <div class="card-content white-text teal">
        <span class="card-title">Chat</span>
      </div>
      <div class="card-action" ref="chatBody">
        <p v-for="message of messages">
          <span>{{message.sender}}:</span>
          {{message.message}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'chat',
  data () {
    return {
    }
  },
  computed: mapState([
    'messages'
  ]),
  watch: {
    messages (val) {
      setTimeout(() => {
        this.$refs.chatBody.scrollTop = (this.$refs.chatBody.scrollHeight - this.$refs.chatBody.clientHeight)
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>


.card {
  min-height: 340px;
  max-height: 340px;
  
  .card-action {
    position: relative;
    overflow-y: scroll;
    min-height: 250px;
    max-height: 250px;
    p {
      span {
        font-weight: 700;
      }
    }
  }
}
</style>
