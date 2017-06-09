<template>
  <div class="container">
    <div class="row">
      <div class="col s6 offset-s1">
        <Board></Board>
      </div>
      <div class="col s4 offset-s1">
        <Chat></Chat>
      </div>
    </div>
    <div class="row">
      <div class="col s6 offset-s1">
        <SendMessage></SendMessage>
      </div>
      <div class="col s4 offset-s1">
        <ScoreBoard></ScoreBoard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Board from './Board.vue'
import Chat from './Chat.vue'
import ScoreBoard from './ScoreBoard.vue'
import SendMessage from './SendMessage.vue'

export default {
  name: 'gameRoom',

  data () {
    return {

    }
  },
  components: {
    Board,
    Chat,
    ScoreBoard,
    SendMessage
  },
  computed: {
    ...mapGetters({
      playersOnline: 'currentPlayersOnline',
      gameState: 'currentGameState'
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
