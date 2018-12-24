import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button} from 'mint-ui'
import store from './store'
import NavHeader from './components/NavHeader/NavHeader.vue'
import Star from './components/Star/Star.vue'

Vue.component('NavHeader',NavHeader)
Vue.component('Star',Star)
Vue.component(Button.name,Button)

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
