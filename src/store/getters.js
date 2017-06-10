export const currentPlayersOnline = state => {
  return state.players ? state.players : 0
}

export const currentGameState = state => {
  return state.gameState
}

export const getStateMessage = state => {
  if (state.gameState === 'WAITING') {
    return 'Waiting other player...'
  }

  if (state.turn) {
    return 'Your turn!'
  } else {
    return "Your oponent's turn"
  }
}

export const getColorBoardState = state => {
  if (state.gameState === 'WAITING') {
    return 'blue'
  }

  if (state.turn) {
    return 'green'
  } else {
    return 'red'
  }
}
