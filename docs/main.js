// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import DemoBlock from './components/demo-block'
// import MContainer from '@/index'
import MContainer from '@/../index'
import MButton from 'vue-m-button'
import 'vue-m-button/dist/css/default.css'

Vue.use(MContainer)
Vue.use(MButton)
// console.log(MContainer)
Vue.component('DemoBlock', DemoBlock)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
