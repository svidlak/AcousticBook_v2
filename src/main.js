import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueCookie  from 'vue-cookie'
import VueLocalStorage from 'vue-localstorage'
 
Vue.use(VueLocalStorage)
Vue.use(VueResource)
Vue.use(VueCookie)

new Vue({
  el: '#app',
  render: h => h(App)
})
