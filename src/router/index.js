import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '../components/Home'
import PortfolioSelect from '../components/PortfolioSelect'
import  WorkHistory from '../components/WorkHistory.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [{
        path: '/',
        component: PortfolioSelect,
        name: 'portfolio-select'
      },
      {
        path: 'work-history',
        component: WorkHistory,
        name: 'work-history'
      },
      //   {
      //     path: 'projects',
      //     component: Project
      //   },
      //   {
      //     path: 'certifications',
      //     component: Certification
      //   }
    ]
  }]
})
