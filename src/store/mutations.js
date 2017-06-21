import Vue from 'vue'
import * as types from './types'
import Constants from '../constants'

export default {
  [types.START]: startGame,
  [types.WAIT]: waitGame,
  [types.PLAYERS_ONLINE]: playerOnline,
  [types.NEW_GAME]: newGame,
  [types.WIN]: youWin,
  [types.LOSE]: youLose,
  [types.A_TIE]: aTie,
  [types.PLAYED]: played,
  [types.DRAW]: draw,
  [types.SEND_MESSAGE]: sendMessage,
  [types.ENTER_GAME]: enterGame,
  SOCKET_CONNECT (state) {
    state.isConnected = true
  },
  SOCKET_DISCONNECT (state) {
    state.isConnected = false
  }
}

let verifyATie = (plays) => {
  return plays >= 9
}

let verifyGameOver = (board) => {
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

let startGame = (state, payload) => {
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
  state.gameState = Constants.GAME_STATE.PLAYING
  payload.commit(types.NEW_GAME, {turn: payload.turn})
}

let waitGame = (state, payload) => {
  state.gameState = Constants.GAME_STATE.WAITING
  state.turn = false

  state.messages.push({
    sender: 'Game',
    message: 'Waiting other player...'
  })
}

let playerOnline = (state, { value }) => {
  state.players = value
}

let newGame = (state, payload) => {
  console.log('new game')

  if (payload.hasOwnProperty('turn')) {
    state.turn = payload.turn
  }

  Vue.set(state, 'board', new Array(9))
}

let youWin = (state, { commit }) => {
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
}

let aTie = (state, { commit }) => {
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
}

let youLose = (state, payload) => {
  state.losses++
}

let played = (state, { index, socket, commit }) => {
  state.turn = false
  Vue.set(state.board, index, `${state.letter}`)
  state.plays++
  let letter = state.letter

  socket.emit(Constants.EVENTS_EMIT.PLAYER, {
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
}

let draw = (state, {index, letter, commit}) => {
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
}

let sendMessage = (state, { message, socket, sender }) => {
  state.messages.push({
    sender,
    message
  })

  if (socket) {
    socket.emit(Constants.EVENTS_EMIT.PLAYER, {
      type: types.SEND_MESSAGE,
      name,
      message
    })
  }
}

let enterGame = (state, { name, socket, router }) => {
  state.name = name
  socket.emit('starting', { name })
  router.push('/gameroom')
}
