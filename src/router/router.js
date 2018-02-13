import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/state'
import { CHANGE_LOADING } from '../store/mutation-type'
Vue.use(Router)
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')

const router = new Router({
  routes: [{
    path: '',
    name: 'home',
    component: home,
    meta: { showTabbar: true }
  }]
})
router.beforeEach(function (to, from, next) {
  store.commit(CHANGE_LOADING, { isLoading: true })
  next()
})
router.afterEach(function (to) {
  store.commit(CHANGE_LOADING, { isLoading: false })
})
export default router
