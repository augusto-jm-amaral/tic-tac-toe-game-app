import Vue from 'vue'
import * as types from './types'

const GAME_STATE = {
  STARTING: 'STARTING',
  PLAYING: 'PLAYING',
  WAITING: 'WAITING'
}

export default {
  [types.START] (state, payload) {
    if (payload.turn) {
      state.turn = true
      state.messages.push({
        sender: 'Game',
        message: 'Starting the game, you start!'
      })
    } else {
      state.turn = false
      state.messages.push({
        sender: 'Game',
        message: 'Starting the game, Your opponent starts!'
      })
    }
  },
  [types.WAIT] (state, payload) {
    state.gameState = GAME_STATE.WAITING

    state.messages.push({
      sender: 'Game',
      message: 'Waiting other player...'
    })
  },
  [types.PLAYERS_ONLINE] (state, { value }) {
    state.players = value
  },
  [types.LOSE] (state, payload) {
    state.lose++
  },
  [types.RECEIVE_MESSAGE] (state, payload) {

  },
  [types.PLAYED] (state, {index, socket}) {
    Vue.set(state.board, index, `${state.letter}`)
    state.turn = false
  },
  [types.DRAW] (state, payload) {

  },
  [types.WIN] (state, payload) {
    state.wins++
  },
  [types.SEND_MESSAGE] (state, { message }) {
    state.messages.push(message)
  },
  [types.ENTER_GAME] (state, { name, socket }) {
    state.name = name
  },
  SOCKET_CONNECT (state) {
    state.isConnected = true
  },
  SOCKET_DISCONNECT (state) {
    state.isConnected = false
  }
}
