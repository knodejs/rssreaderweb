import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'

Vue.use(Router)

import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'

function requireAuth( to, from, next) {
  if(!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior: () => ({ y: 0}),
  routes: [
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/logout', beforeEnter( to, from, next) {
      auth.logout()
      next('/')
    }},
    { path: '/', component: DashboardView }
  ]
})
