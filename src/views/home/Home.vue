<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-cortal :title="['流行','新款','精选']" @tabClick="TabCortal"
     ref="tabControl1" class="tab-control" 
     v-show="isTabFixed"/>
    <scroll class="content" ref="scroll"
     :probe-type="3" 
     @scroll="contentScroll"
     :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiper="swiperImageLoad"/>
      <recommend-view :recommends="recommends"></recommend-view>
      <home-feature />
      <tab-cortal :title="['流行','新款','精选']" ref="tabControl2"
       @tabClick="TabCortal"/>
      <goods-list :goods="showGoods"/> 
    </scroll>
    <!-- 监听组件的原生事件 -->
    <better-top @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import HomeFeature from "./childComps/HomeFeature";

import NavBar from "components/common/navbar/NavBar";
import TabCortal from "components/content/tabcortal/TabCortal";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BetterTop from "components/content/betterTop/BetterTop";

import {getHomeMultidata, getHomeGoods} from "network/home.js";


import {itemListenerMixin} from 'common/mixin.js'

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    HomeFeature,
    NavBar,
    TabCortal,
    GoodsList,
    Scroll,
    BetterTop
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  destroyed() {
    this.$bus.off('itemImageLoad', this.homeImageLister)
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    // this.$refs.scroll.refresh()
  },
  deactivated() {
    // 1.获取滚动高度
    this.saveY = this.$refs.scroll.scroll.y

  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

   
  },
  mounted() {
   
  },
  methods: {
    // 网络请求的
    // 封装
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // this.reslut = res;
        // console.log(res);
        this.banners = res.data.banner.list;
        // console.log(this.banners);
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        // 老师接口已经改
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 完成下拉加载
        // this.$refs.scroll.finishPullUp()
      });
    },

    // 事件监听的方法
    TabCortal(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 让nav保持一致
      if(this.$refs.tabControl1 !== undefined){
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      }
       
    },
     
    //  返回顶部
    backClick() {
      // 直接运用这个scroll得方法
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 获取滚动位置 显示箭头的
    contentScroll(position) {
      // 1.显示箭头的
      this.isShow = (-position.y) > 700;
      // console.log(position);

      // 2.决定tabControl 是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop

    },
    // 加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    // 监听轮播图加载完
    swiperImageLoad(){
        // 2.获取tabControl的offsetTop
      // 所有组件都有一个$el 可以获取元素
     this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop

    }
   
  }
};
</script>

<style>
#home {
  /* padding-top: 44px; */
  /* 视口高度 */
  position: relative;
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;

/* 原生滚动 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.content {
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px; */
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control{
  position: relative;
  z-index: 9;
}
</style>