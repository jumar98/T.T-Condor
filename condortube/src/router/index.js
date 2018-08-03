//Import modules and component main
import Vue from 'vue'
import Router from 'vue-router'
import CondorTubeDashboard from '@/components/CondorTubeDashboard'

//Set Router module to use on vue 
Vue.use(Router)

//Define routes and set component 
//foreach route
export default new Router({
  routes: [
    {
      path: '/',
      name: 'CondorTubeDashboard',
      component: CondorTubeDashboard
    }
  ]
})
