<template>
  <main>
    <form v-on:submit.prevent="submitName">
        <h2>{{msg}}</h2>
        <input placeholder="Name" ref="name" required>
        <button type="submit">Let's go!</button>
        <h3> {{playersOnline}} Players online!</h3>
    </form>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

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
      console.log(this.$refs.name.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
