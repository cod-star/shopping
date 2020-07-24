<template>
   <div class="goods-list">
     <goods-list-item v-for="item in goods" :goods-item="item"/>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'


export default {
  name:'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
       type: Array,
       default(){
       return []
    }
    }
   
  }
}
</script>

<style>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  /* 宽度不要设置死，要设置百分比 */
  justify-content: space-around;
  padding: 2px;
}
  
</style>