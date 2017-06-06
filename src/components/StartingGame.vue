<template>
  <div class="container">
    <form v-on:submit.prevent="submitName">
        <h2>{{msg}}</h2>
        <input placeholder="Name" ref="name" required>
        <button type="submit">Let's go!</button>
        <h3> {{playersOnline}} Players playing!</h3>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Constants from '../constants'

export default {
  name: 'startingGame',
  data () {
    return {
      msg: 'Welcome to Vue.js Tic-Tac-Toe'
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
<style scoped>

</style>
