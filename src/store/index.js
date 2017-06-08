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
  // letter: null,
  letter: 'X',
  wins: 0,
  lose: 0,
  players: null,
  adversaryName: null,
  isConnected: false,
  turn: false,
  board: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
