export default {
  /* state of the game */
  GAME: {
    STARTING: 'STARTING',
    PLAYING: 'PLAYING',
    WAITING: 'WAITING'
  },
  /* emit events types */
  EMIT: {
    WIN: 'WIN',
    SEND_MESSAGE: 'SEND_MESSAGE',
    SET_NAME: 'SET_NAME',
    PLAYED: 'PLAYED',
    DRAW: 'DRAW',
    STARTING: 'starting'
  },
  /* emit channel names  */
  EVENTS_EMIT: {
    PLAYER: 'playerEvent',
    GAME: 'gameEvent'
  },
  /* state the game */
  GAME_STATE: {
    STARTING: 'STARTING',
    PLAYING: 'PLAYING',
    WAITING: 'WAITING'
  },

  /* Game messages */
  MESSAGES: {
    STARTING_GAME: 'Starting the game'
  }
}
