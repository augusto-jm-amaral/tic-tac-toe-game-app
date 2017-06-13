/* eslint-disable */
/* The event names socket.io can not be camelcase */
import * as types from './types'

export const socket_gameEvent = ({ commit }, payload) => {
  switch (payload.type) {
    case types.START:
      commit(types.START, { commit, ...payload})
      break
    case types.WAIT:
      commit(types.WAIT, { commit, ...payload})
      break
    case types.PLAYERS_ONLINE:
      commit(types.PLAYERS_ONLINE, { commit, ...payload})
      break
  }
}

/* Receive player events */
export const socket_playerEvent = ({ commit }, payload) => {
  switch (payload.type) {
    case types.LOSE:
      commit(types.LOSE, payload)
      break
    case types.SEND_MESSAGE:
      commit(types.SEND_MESSAGE, payload)
      break
    // case types.PLAYED:
    //   commit(types.PLAYED, payload)
    //   break
    case types.DRAW:
      commit(types.DRAW, { commit, ...payload})
      break
  }
}

export const win = ({ commit }, payload) => {
  commit(types.WIN, { commit, ...payload})
}

export const lose = ({ commit }, payload) => {
  commit(types.ENTER_GAME, { commit, ...payload})
}

export const played = ({ commit }, payload) => {
  commit(types.PLAYED, { commit, ...payload })
}

export const sendMessage = ({ commit }, payload) => {
  commit(types.SEND_MESSAGE, payload)
}

export const enterGame = ({ commit }, payload) => {
  commit(types.ENTER_GAME, payload)
}

