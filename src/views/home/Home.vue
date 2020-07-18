<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div> </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"></recommend-view>
    <home-feature/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import HomeFeature from './childComps/HomeFeature'


import {getHomeMultidata} from 'network/home.js';
// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'compoments/common/swiiper/SwiperItem'

 
export default {
  name:"Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFeature
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      // this.reslut = res;
      // console.log(res);
      this.banners = res.data.banner.list
      // console.log(this.banners);
      this.recommends = res.data.recommend.list
    })
  },
  
}
</script>

<style>

#home{
  padding-top: 44px;
}

.home-nav{
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
  
</style>