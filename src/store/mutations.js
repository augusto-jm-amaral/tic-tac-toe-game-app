import * as types from './mutation-types'

export default {
  [types.START_GAME] (state, payload) {

  },
  [types.WAIT_GAME] (state, payload) {

  },
  [types.LOSE] (state, payload) {
    state.lose++
  },
  [types.RECEIVE_MESSAGE] (state, payload) {

  },
  [types.PLAYED] (state, payload) {

  },
  [types.DRAW] (state, payload) {

  },
  [types.WIN] (state, payload) {
    state.wins++
  },
  [types.SEND_MESSAGE] (state, { message }) {
    state.messages.push(message)
  },
  [types.SET_NAME] (state, { name }) {
    state.name = name
  },
  SOCKET_CONNECT (state) {
    state.isConnected = true
  },
  SOCKET_DISCONNECT (state) {
    state.isConnected = false
  }
}
