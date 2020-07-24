<template>
  <!-- 判断是否有值 -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.info-title {
  /* overflow: hidden; */
  /* 使文字多余的字体隐藏成 ... */
  /* text-overflow: ellipsis;
  white-space: nowrap; */
  font-size: 16px;
  margin-top: 15px;
  padding:0 5px 10px 5px;
  font-weight: 800;
  color: black;
  text-indent: 1em;
}
.info-price{
  position: relative;
  margin-bottom: 20px;
}

.n-price{
  font-size: 18px;
  color: deeppink;
  padding:0 5px;
  
}

.o-price{
  text-decoration:line-through;
   padding:0 5px;
   font-size: 12px;
}

.discount{
  background: deeppink;
  border-radius: 10px;
  padding: 3px;
  color: white;
  font-size: 14px;
 
}

.info-other{
  display: flex;
  margin-bottom: 20px;
  text-align: center;
  font-size: 14px;
}
.info-other span{
  flex: 1;
}
.info-service{
  display: flex;
 
}

.info-service-item{
  flex: 1;
  font-size: 13px;
   text-align: center;
}

.info-service-item img{
  width: 18px;
  height: 18px;
}
</style>