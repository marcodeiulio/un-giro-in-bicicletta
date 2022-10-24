import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/castrocaro',
    name: 'Castrocaro',
    // route level code-splitting
    // this generates a separate chunk (route.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "route" */ '../views/Castrocaro.vue')
  },
  {
    path: '/bertinoro',
    name: 'Bertinoro',
    // route level code-splitting
    // this generates a separate chunk (route.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "route" */ '../views/Bertinoro.vue')
  },
  {
    path: '/villafranca',
    name: 'Villafranca',
    // route level code-splitting
    // this generates a separate chunk (route.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "route" */ '../views/Villafranca.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
