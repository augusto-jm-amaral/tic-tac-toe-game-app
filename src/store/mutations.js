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
    state.board = new Array(9)
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
  [types.PLAYED] (state, { index, socket, commit }) {
    state.turn = false
    Vue.set(state.board, index, `${state.letter}`)
    state.plays++
    let letter = state.letter

    socket.emit(EVENTS_EMIT.PLAYER, {
      type: types.DRAW,
      letter,
      index
    })

    if (verifyGameOver(state.board)) {
      commit(types.WIN, {})
    } else {
      if (verifyATie(state.plays)) {
        commit(types.A_TIE, {})
      }
    }
  },
  [types.DRAW] (state, {index, letter, commit}) {
    Vue.set(state.board, index, letter)
    state.plays++

    if (verifyGameOver(state.board)) {
      commit(types.LOSE, {})
    } else {
      if (verifyATie(state.plays)) {
        commit(types.A_TIE, {})
      } else {
        state.turn = true
      }
    }
  },
  [types.WIN] (state, payload) {
    state.wins++
  },
  [types.LOSE] (state, payload) {
    state.losses++
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

function verifyATie (plays) {
  return plays >= 9
}

function verifyGameOver (board) {
  let matches = ['XXX', 'OOO']

  let rows = [
    board[0] + board[1] + board[2],
    board[3] + board[4] + board[5],
    board[6] + board[7] + board[8],
    board[0] + board[4] + board[8],
    board[2] + board[4] + board[6],
    board[0] + board[3] + board[6],
    board[1] + board[4] + board[7],
    board[2] + board[5] + board[8]
  ]

  for (var i = 0; i < rows.length; i++) {
    if (rows[i] === matches[0] || rows[i] === matches[1]) {
      return true
    }
  }
  return false
}
