<template>
   <tab-bar>
      <tab-bar-item path='/home' activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/home.png"  alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/homeactive.png"  alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor="pink">
         <img slot="item-icon" src="~assets/img/tabbar/wenj.png"  alt="" />
          <img slot="item-icon-active" src="~assets/img/tabbar/wenjactive.png"  alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item >
      <tab-bar-item path='/cart' activeColor="pink">
         <img slot="item-icon" src="~assets/img/tabbar/gouwu.png"  alt="" />
          <img slot="item-icon-active" src="~assets/img/tabbar/gouwuactive.png"  alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/ren.png"  alt="" />
         <img slot="item-icon-active" src="~assets/img/tabbar/renactive.png"  alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>

import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name:"MainTab",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>