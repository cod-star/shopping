import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false

// 安装插件
Vue.use(toast)

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 懒加载 可以在后面加入占位符
Vue.use(VueLazyLoad)

// 作为总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
