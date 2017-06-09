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
<!--     <header>
      <nav>
        <div class="brand">
          <img src="../assets/logo.png" width="30" height="30"> 
          Tic-Tac-Toe in Vue.js
        </div>
        <ul>
          <li>Game Room - {{gameState}}</li>
          <li>Players Online {{playersOnline}}</li>
        </ul>  
      </nav>
    </header> -->
<!--     <main>
    </main> -->
<!--     <footer>
      @Augusto 2017
    </footer> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Board from './Board.vue'
import Chat from './Chat.vue'

export default {
  name: 'gameRoom',

  data () {
    return {

    }
  },
  components: {
    Board,
    Chat
  },
  computed: {
    ...mapGetters({
      playersOnline: 'currentPlayersOnline',
      gameState: 'currentGameState'
    })
  },
  methods: {
    // gameStateMessage
  }
}
</script>
<style lang="scss" scoped>

  // $header-backgroundcolor: rgba(#8de892, .4);

  // header {
  //   background-color: $header-backgroundcolor;

  //   nav {
  //     padding: 10px;
  //     display: flex;
  //     vertical-align: middle;
  //     justify-content: space-between;

  //     .brand {
  //       display: flex;
  //       margin-right: 10px;
  //       font-size: 1.2em;
  //       font-weight: 700;
  //       display: flex;
  //       align-items: center;

  //     }

  //     ul {
  //       list-style-type: none;
  //       display:table-row;

  //       li {
  //         display: table-cell;
  //       }
  //     }
  //   }
  // }
</style>
