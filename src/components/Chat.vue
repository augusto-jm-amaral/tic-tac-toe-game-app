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
      // $(this.$refs.chatBody).scrollTo('100%')
      this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight + 20
      // console.log(this.$refs.chatBody.childNodes)
    }
  }
  // methods: {
  //   played (index) {
  //     if (this.turn) {
  //       this.$store.dispatch('played', {
  //         socket: this.$socket,
  //         index
  //       })
  //     }
  //   }
  // }
}
</script>
<style lang="scss" scoped>
.card {
  height: 29.2vw;
  
  .card-action {
    position: relative;
    height: 24vw;
    overflow-y: scroll;
    p {
      span {
        font-weight: 700;
      }
    }
  }
}
</style>
