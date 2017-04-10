import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home }
  ]
})
