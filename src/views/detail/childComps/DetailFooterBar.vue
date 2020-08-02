<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailFooterBar",
  data() {
    return {
      // isShouCang: false,
    };
  },
  computed: {
  
   
  },
  created() {
    // // 每次刷新页面获取本地存储购物车数据
    // let list = JSON.parse(localStorage.getItem("cartList")) || [];
    // if (list) {
    //   this.$store.commit("setCartList", list);
    // }
  },
  methods: {
    addCart() {
      // 点击添加到购物车
      this.$emit("addCart");
    },
    // starClick() {
    //   if (!this.isShouCang) {
    //     this.$toast("收藏成功");
    //     this.isShouCang = true;
    //   } else {
    //     this.$toast("已取消收藏");
    //     this.isShouCang = false;
    //   }
    // },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 49px;
  background: white;

  display: flex;
  text-align: center;
}
.bar-item{
  display: flex;
  flex: 1;
}

.bar-item>div{
  flex: 1;
}
.bar-left .text{
  font-size: 13px;
  color: black;
}

.bar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 3px;
  background-image: url('~assets/img/detail/icon.png');
}
.bar-left .service{
   background-position: 0 0;
   background-repeat: no-repeat;
}
.bar-left .shop{
   background-position: -30px 0;
   background-repeat: no-repeat;
}
.bar-left .select{
   background-position: -55px 0;
   background-repeat: no-repeat;
}

.bar-right{
  line-height: 49px;
}
.cart{
  background: yellow;
  /* padding: 0 2px; */
  color: black;
}
.buy{
  background: deeppink;
  color: white; 
}

</style>