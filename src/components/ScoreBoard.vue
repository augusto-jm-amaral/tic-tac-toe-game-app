<template>
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-content white-text" v-bind:class="getColorBoardState">
          {{getStateMessage}}
        </div>
        <div class="card-action">
          <span>{{wins}}</span>
          <span>you x opponent</span>
          <span>{{losses}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'scoreBoard',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'turn',
      'wins',
      'losses'
    ]),
    ...mapGetters([
      'getStateMessage',
      'getColorBoardState'
    ])
  }
}
</script>
<style lang="scss" scoped>
  .col {
    padding: 0 0;

    .card-content{
      font-weight: 700;
      font-size: 1.5em;
    }

    .card-action {
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span{
        &:first-child{
          font-size: 2em;

        }

        &:last-child{
          font-size: 2em;
        }
      }
    }
  }
</style>
