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
  lose: 0,
  players: null,
  adversaryName: null,
  isConnected: false
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
