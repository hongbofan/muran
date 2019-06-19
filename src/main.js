import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/styles/reset.css'
import './assets/styles/common.css'
import  './assets/icon/iconfont.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
