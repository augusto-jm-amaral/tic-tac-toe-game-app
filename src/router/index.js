import Vue from 'vue'
import Router from 'vue-router'
import StartingGame from '@/components/StartingGame'
import GameRoom from '@/components/GameRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Starting',
      component: StartingGame
    },
    {
      path: '/gameroom',
      name: 'GameRoom',
      component: GameRoom
    }
  ],
  mode: 'history'
})
