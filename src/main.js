// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Components
import Intro from './components/Intro'
import SideNav from './components/SideNav'
import Portfolio from './components/Portfolio'
import Masonry from './components/Masonry'


//Third party components
import VueStrap from 'vue-strap'
import VideoBg from 'vue-videobg'

Vue.config.productionTip = false

//Global components
Vue.component('app-sidenav', SideNav)
Vue.component('app-masonry', Masonry)
Vue.component('app-portfolio', Portfolio)
Vue.component('app-intro', Intro)
Vue.component('video-bg', VideoBg)

Vue.use(VueStrap)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App, SideNav, Masonry
  }
})
