export const currentPlayersOnline = state => {
  return state.players ? state.players : 0
}

export const currentGameState = state => {
  return state.gameState
}
