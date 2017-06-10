import Vue from 'vue'
import * as types from './types'

const GAME_STATE = {
  STARTING: 'STARTING',
  PLAYING: 'PLAYING',
  WAITING: 'WAITING'
}

const EVENTS_EMIT = {
  PLAYER: 'playerEvent',
  GAME: 'gameEvent'
}

export default {
  [types.START] (state, payload) {
    if (payload.turn) {
      state.turn = true
      state.messages.push({
        sender: 'Game',
        message: 'Starting the game, you start!'
      })
      state.letter = 'X'
    } else {
      state.turn = false
      state.messages.push({
        sender: 'Game',
        message: 'Starting the game, Your opponent starts!'
      })
      state.letter = 'O'
    }
    state.gameState = GAME_STATE.PLAYING
  },
  [types.WAIT] (state, payload) {
    state.gameState = GAME_STATE.WAITING
    state.turn = false

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
  // [types.RECEIVE_MESSAGE] (state, payload) {

  // },
  [types.PLAYED] (state, {index, socket}) {
    Vue.set(state.board, index, `${state.letter}`)
    state.turn = false
    let letter = state.letter
    socket.emit(EVENTS_EMIT.PLAYER, {
      type: types.DRAW,
      letter,
      index
    })
  },
  [types.DRAW] (state, {index, letter}) {
    Vue.set(state.board, index, letter)
    state.turn = true
  },
  [types.WIN] (state, payload) {
    state.wins++
  },
  [types.SEND_MESSAGE] (state, { message, socket, sender }) {
    state.messages.push({
      sender,
      message
    })

    if (socket) {
      socket.emit(EVENTS_EMIT.PLAYER, {
        type: types.SEND_MESSAGE,
        name,
        message
      })
    }
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
