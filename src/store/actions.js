/* eslint-disable */
/* The event names socket.io can not be camelcase */
import * as types from './mutation-types'

export const socket_gameEvent = ({ commit }, payload) => {
  switch (payload.type) {
    case types.START_GAME:
      commit(types.START_GAME, payload)
      break
    case types.WAIT_GAME:
      commit(types.WAIT_GAME, payload)
      break
  }
}

/* Receive player events */
export const socket_playerEvent = ({ commit }, payload) => {
  switch (payload.type) {
    case types.LOSE:
      commit(types.LOSE, payload)
      break
    case types.RECEIVE_MESSAGE:
      commit(types.RECEIVE_MESSAGE, payload)
      break
    case types.PLAYED:
      commit(types.PLAYED, payload)
      break
    case types.DRAW:
      commit(types.DRAW, payload)
      break
  }
}

export const win = ({ commit }, payload) => {
  commit(types.WIN, payload)
}

export const sendMessage = ({ commit }, payload) => {
  commit(types.SEND_MESSAGE, payload)
}

export const setName = ({ commit }, payload) => {
  commit(types.SET_NAME, payload)
}
