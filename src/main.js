import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 作为总线
Vue.prototype.$bus = new Vue()

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
