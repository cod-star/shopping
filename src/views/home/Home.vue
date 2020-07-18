<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
      <home-swiper :banners="banners"></home-swiper>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'


import {getHomeMultidata} from 'network/home.js'
// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'compoments/common/swiiper/SwiperItem'

 
export default {
  name:"Home",
  components: {
    NavBar,
    
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
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
  
}
</script>

<style>

.home-nav{
  background-color: var(--color-tint);
  color: white;
}
  
</style>