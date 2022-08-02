import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import MainRoom from '../components/MainRoom'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/room',
    name: 'room',
   component: MainRoom,
  }
]

const router = new VueRouter({
  routes
})

export default router
