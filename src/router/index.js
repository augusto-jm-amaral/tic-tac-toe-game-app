import Vue from 'vue'
import Router from 'vue-router'
import StartingGame from '@/components/StartingGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Starting',
      component: StartingGame
    }
  ],
  mode: 'history'
})
