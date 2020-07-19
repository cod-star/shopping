<template>
 <div class="goods-item">
   <img :src="goodsItem.show.image" alt="">
   <div class="goods-info">
     <p>{{goodsItem.title}}</p>
     <span class="price">{{goodsItem.price}}</span>
     <span class="collect">{{goodsItem.cfet}}</span>
   </div>
 </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>