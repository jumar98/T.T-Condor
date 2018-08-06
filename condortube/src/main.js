// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//Import modules like vue, App, router
//jquery, bootstrap and bootstrap css

import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery';
global.jquery = jquery;
let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';

//Set in the global config, productionTip to 
//false, to prevent the production tips
Vue.config.productionTip = false

//Use event bus aproach to manage events 
//across components
window.eventBus = new Vue({});

/*
  Create vue instances, specify main 
  component, the template, the element
  id and the routes
*/  
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
