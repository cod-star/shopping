<template>
    <scroll class="content" ref="scroll">
       <cart-item v-for="(item,index) in cartList" :key="index" :product="item"/>
    </scroll>
</template>

<script>
import {mapGetters} from 'vuex'

import Scroll from 'components/common/scroll/Scroll'


import CartItem from './CartItem'

export default {
  name:'CartList',
  components: {
     Scroll,
     CartItem,
    
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
.content{
  height:calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
  
</style>