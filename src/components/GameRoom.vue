<template>
  <div ref="container" class="container">
    <div class="row blur"></div>
<!--     <div class="row">
      <div class="col s6 offset-s1">
        <div class="row">
          <div class="col s12">
            <ScoreBoard></ScoreBoard>
          </div>
          <div class="col s12">
            <Board></Board>
          </div>
        </div>
      </div>
      <div class="col s4 offset-s1">
        <div class="row">
          <div class="col s12">
            <Chat></Chat>
          </div>
          <div class="col s12">
            <SendMessage></SendMessage>
          </div>
        </div>
      </div>
    </div> -->
    <WaitDots></WaitDots>
    <EnterModal></EnterModal>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import Board from './Board.vue'
// import Chat from './Chat.vue'
// import ScoreBoard from './ScoreBoard.vue'
// import SendMessage from './SendMessage.vue'
import EnterModal from '@/components/EnterModal.vue'
import WaitDots from '@/components/WaitDots.vue'

export default {
  name: 'gameRoom',
  data () {
    return {
    }
  },
  components: {
    // Board,
    // Chat,
    // ScoreBoard,
    // SendMessage
    EnterModal,
    WaitDots
  },
  computed: {
    // ...mapGetters({
    //   playersOnline: 'currentPlayersOnline',
    //   gameState: 'currentGameState'
    // })
  },
  mounted () {
    // this.$refs.linkModalEnterGame.click()
  }
}
</script>
<style lang="scss">

  .container {
    // height: 100%;
    // width: 100%;
    // position: absolute;
    // z-index: 1;
    transition: filter .2s ease;

    .blur {
      filter: blur(2px);
    }
  }

</style>
