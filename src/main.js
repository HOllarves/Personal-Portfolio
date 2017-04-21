// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Components
import Intro from './components/Intro'
import SideNav from './components/SideNav'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Masonry from './components/Masonry'


//Third party components
import VueStrap from 'vue-strap'
import VideoBg from 'vue-videobg'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

//Global components
Vue.component('app-sidenav', SideNav)
Vue.component('app-masonry', Masonry)
Vue.component('app-portfolio', Portfolio)
Vue.component('app-intro', Intro)
Vue.component('app-about', About)
Vue.component('video-bg', VideoBg)

Vue.use(VueStrap)
Vue.use(VueScrollTo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App, SideNav, Masonry
  }
})
