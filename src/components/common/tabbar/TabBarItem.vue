<template>
  <div class="tab-bar-item"  @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
     <div :style="activeStyle"><slot name="item-text"></slot></div>
     <!-- <img src="" alt="">
     <div>首页</div> -->
    </div>
</template>
<script>
export default {
  name: 'abBarItem',
  props: {
    // 不能写死，从别处传来，类型为 String
        path: String,
        activeColor: {
          type: String,
          default: 'red'
        }
      },
  data() {
    return {
      // isActive:true,
    }
  },
  computed: {
    // 判断是否是活跃的路径
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1

    },
    activeStyle(){
      // 是否激活，动态绑定颜色
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      // console.log('hhh');
      // 点击出现那个页面
      this.$router.push(this.path)
    }
  },
}
</script>

<style>
  
  .tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top:3px;
  vertical-align: middle;
}
.tab-bar-item img{
  width: 30px;
  height: 25px;
  vertical-align: middle;
 
}


</style>