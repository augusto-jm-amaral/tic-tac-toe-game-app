<template>
  <div class="container">

    <div class="row">
      <div class="col s12 m6 offset-m3">
        <div class="card">
  <!--         <div class="card-header">
          </div> -->
          <div class="card-content white-text teal">
            <h4 class="title">{{msg}}</h4>
            <!-- <span class="card-title">Card Title</span> -->
  <!--           <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p> -->
          </div>
          <div class="card-action">
  <!--           <a href="#">This is a link</a>
            <a href="#">This is a link</a> -->
            <form class="row" v-on:submit.prevent="submitName">
              <div class="col s12">
              </div>
              <div class="input-field col s8">
                <input id="name" ref="name" type="text" class="validate" required>
                <label for="name">Name</label>
              </div>
              <div class="col s4 btn-container">
                <button class="btn waves-effect waves-light" type="submit" name="action">Let's go!
                  <i class="material-icons right">send</i>
                </button>
              </div>
              <div class="col s12">
                <h5 class="players-counter"> 
                  <i class="small material-icons">supervisor_account</i> 
                  {{playersOnline}} Players playing!
                </h5>
              </div>
                <!-- <button type="submit">Let's go!</button> -->
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Constants from '../constants'

export default {
  name: 'startingGame',
  data () {
    return {
      msg: 'Welcome to Tic-Tac-Toe in Vue.js'
    }
  },
  computed: {
    ...mapGetters({
      playersOnline: 'currentPlayersOnline'
    })
  },
  methods: {
    submitName () {
      this.$store.dispatch('enterGame', {
        name: this.$refs.name.value
      })
      this.$socket.emit(Constants.EMIT.STARTING, { name })
      this.$router.push('/gameroom')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container {
    margin-top: 10vh;

    .title {
      font-weight: 500;
      text-align: center;
    
    }

    .btn-container {
      margin-top: 1rem;

    }

    .players-counter {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      
      i {
        margin-right: 10px;
      }
    }
  }
</style>
