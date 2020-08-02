<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 2.商品展示 -->
    <cart-list/>

    <!-- 3.底部汇总 -->
    <cart-botton-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComp/CartList'
import CartBottonBar from './childComp/CartBottonBar'

import {mapGetters} from 'vuex'

export default {
  name:"Cart",
  components: {
    NavBar,
    CartList,
    CartBottonBar
  },
  computed: {
    // 计算属性
    ...mapGetters(['cartLength'])
    // cartLength(){
    //   return this.$store.state.cartList.length
    // }
  },
  
}
</script>

<style scoped>
.cart{
  height: 100vh;
}

.nav-bar{
  background: var(--color-tint);
  color: #fff;
  font-weight: 700;
}

.cart-list{
  height: 100vh;
}
  
</style>