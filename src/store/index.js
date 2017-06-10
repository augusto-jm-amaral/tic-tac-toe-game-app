import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  name: null,
  messages: [],
  gameState: 'STARTING',
  letter: null,
  wins: 0,
  loses: 0,
  players: null,
  adversaryName: null,
  isConnected: false,
  turn: false,
  board: new Array(9)
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
