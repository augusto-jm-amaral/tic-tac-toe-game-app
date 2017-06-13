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
      state.messages.push({
        sender: 'Game',
        message: 'Starting the game, you start!'
      })
      state.letter = 'X'
    } else {
      state.messages.push({
        sender: 'Game',
        message: 'Starting the game, Your opponent starts!'
      })
      state.letter = 'O'
    }
    state.gameState = GAME_STATE.PLAYING
    payload.commit(types.NEW_GAME, {turn: payload.turn})
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
  [types.NEW_GAME] (state, payload) {
    console.log('new game')

    if (payload.hasOwnProperty('turn')) {
      state.turn = payload.turn
    }

    Vue.set(state, 'board', new Array(9))
  },
  [types.WIN] (state, { commit }) {
    state.wins++

    state.messages.push({
      sender: 'Game',
      message: 'You win!'
    })

    state.messages.push({
      sender: 'Game',
      message: 'A new game will start again in a moment...'
    })

    setTimeout(() => {
      commit(types.NEW_GAME, { turn: false })
    }, 3000)
  },
  [types.LOSE] (state, { commit }) {
    state.losses++

    state.messages.push({
      sender: 'Game',
      message: 'You lost try again!'
    })
    state.messages.push({
      sender: 'Game',
      message: 'A new game will start again in a moment...'
    })

    setTimeout(() => {
      commit(types.NEW_GAME, { turn: true })
    }, 3000)
  },
  [types.A_TIE] (state, { commit }) {
    state.messages.push({
      sender: 'Game',
      message: 'There was a draw!'
    })

    state.messages.push({
      sender: 'Game',
      message: 'A new game will start again in a moment...'
    })

    setTimeout(() => {
      commit(types.NEW_GAME, { })
    }, 3000)
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
      commit(types.WIN, { commit })
    } else {
      if (verifyATie(state.plays)) {
        commit(types.A_TIE, { commit })
      }
    }
  },
  [types.DRAW] (state, {index, letter, commit}) {
    Vue.set(state.board, index, letter)
    state.plays++
    state.turn = true

    if (verifyGameOver(state.board)) {
      commit(types.LOSE, { commit })
    } else {
      if (verifyATie(state.plays)) {
        commit(types.A_TIE, { commit })
      }
    }
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
  [types.ENTER_GAME] (state, { name, socket, router }) {
    state.name = name
    socket.emit('starting', { name })
    router.push('/gameroom')
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
