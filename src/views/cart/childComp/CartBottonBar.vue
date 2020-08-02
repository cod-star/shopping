<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button class="check-button" :is-checked="isCheckAll" @click.native="checkAll"/>
      <span>全选</span>
    </div>
    <div class="totoal-price">合计:{{totoalPrice}}</div>
    <div class="calculate" @click="calcClick">去计算({{checkLength}})</div>
  </div>
  
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottonBar",
  components: {
    CheckButton,
  },
  computed: {
    totoalPrice() {
      return  "￥"+ this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength(){
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isCheckAll(){
    //  return !(this.$store.state.cartList.filter(item => !item.checked).length)
    if(this.$store.state.cartList.length === 0) return false
     return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkAll(){
      if(this.isCheckAll){
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        })
      }else{
         this.$store.state.cartList.forEach(item => {
          item.checked = true
        })
      }
    },
    calcClick(){
      if(!this.isCheckAll){
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  },
};
</script>
<style scoped>
.bottom-bar {
  display: flex;
  position: relative;
  bottom: -430px;
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #eee;
  font-size: 14px;
}

.check-all {
  display: flex;
  align-items: center;
  margin-left: 15px;
  width: 70px;
}

.check-button {
  width: 22px;
  height: 22px;
  line-height: 22px;
  margin-right: 8px;
}

.totoal-price{
  margin-left: 15px;
  flex: 1;
}

.calculate{
  width: 90px;
  background: red;
  text-align: center;
  color: #fff;
}
</style>