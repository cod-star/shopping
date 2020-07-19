<template>
   <div class="goods">
     <goods-list-item v-for="item in goods"/>
    {{goods}}
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
    type: Array,
    default(){
      return []
    }
  }
}
</script>

<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  /* 宽度不要设置死，要设置百分比 */
  justify-content: space-around;
}
  
</style>