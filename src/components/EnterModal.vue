<template>
  <div class="row enter-modal" v-bind:class="{ 'in': active }">
    <div class="col s12 m8 offset-m2">
      <div class="card">
        <div class="card-content white-text indigo">
          <h5 class="title">Welcome to Tic-Tac-Toe</h5>
        </div>
        <div class="card-action">
          <form class="row" v-on:submit.prevent="submitName">
            <div class="col s12">
            </div>
            <div class="input-field col s8">
              <input id="name" ref="name" type="text" class="validate" required>
              <label for="name">Name</label>
            </div>
            <div class="col s4 btn-container">
              <button class="btn waves-effect waves-light indigo" type="submit" name="action">Let's go!
                <i class="material-icons right">send</i>
              </button>
            </div>
            <div class="col s12">
              <h5 class="players-counter"> 
                <i class="small material-icons">supervisor_account</i> 
                {{playersOnline}} Players playing!
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'entarModal',
  data () {
    return {
      active: false
    }
  },
  methods: {
    submitName () {
      this.$store.dispatch('enterGame', {
        name: this.$refs.name.value,
        socket: this.$socket,
        router: this.$router
      })

      this.active = false
    }
  },
  computed: {
    ...mapGetters({
      playersOnline: 'currentPlayersOnline'
    })
  },
  mounted () {
    setTimeout(() => {
      this.active = true
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>

.enter-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  transition: all .4s cubic-bezier(.8, 0, 0, 1.2);
  opacity: 0;

  &.in {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);

  }

}

</style>
