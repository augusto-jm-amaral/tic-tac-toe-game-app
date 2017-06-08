<template>
  <div class="row">
    <div v-for="(item, index) of board" class="col s4">
      <div @click="played(index)" class="card waves-effect waves-teal scale-transition ">
        <div class="card-content black-text">
          <h1>{{item}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'board',
  data () {
    return {
    }
  },
  computed: mapState([
    'board',
    'turn'
  ]),
  methods: {
    played (index) {
      if (this.turn) {
        this.$store.dispatch('played', {
          socket: this.$socket,
          index
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .card {
    width: 100%;
    height: 9vw;

    h1 {
      text-align: center;
      font-weight: 700;
    }
  }
</style>
