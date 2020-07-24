<template>
 <div class="goods-item" @click="goodsItemClick">
   <img :src="showImage" alt="" @load="imageLoad">
   <div class="goods-info">
     <p>{{goodsItem.title}}</p>
     <span class="price">{{goodsItem.price}}</span>
     <span class="collect">{{goodsItem.cfav}}</span>
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
  },
  computed: {
     showImage(){
    return this.goodsItem.image || this.goodsItem.show.img
  }
  },
  methods: {
    imageLoad(){
       this.$bus.$emit('itemImageLoad')
      // if(this.$router.path.indexOf('/home')){
      //    this.$bus.$emit('homeitemImageLoad')
      // }else if(this.$router.path.indexOf('/detail')){
      //   this.$bus.$emit('detailitemImageLoad')
      // }
    },
    goodsItemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
 
}
</script>

<style>
.goods-item{
  padding-bottom: 40px;
  position: relative;
  width: 48%;

}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p{
  overflow: hidden;
  /* 使文字多余的字体隐藏成 ... */
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-item .price{
  color: red;
}
  
</style>