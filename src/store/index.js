import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import  actions from './actions'
import getters from './getter'

// 1.安装插件
Vue.use(Vuex)

// 2.创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  // mutations中每一个方法尽可能完成的事件比较单一
  mutations,
  actions,
  getters
})

// 3.挂载vue实例
export default store