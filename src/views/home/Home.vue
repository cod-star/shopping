<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
      <swpier>
        <swiper-item :v-for="item in banners">

        </swiper-item>
      </swpier>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home.js'
// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'compoments/common/swiiper/SwiperItem'
import {SwiperItem,Swiper} from 'components/common/swiper'
 
export default {
  name:"Home",
  components: {
    NavBar,
    SwiperItem,
    Swiper
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
      this.barnners = res.data.banners.list
      this.recommends = res.data.recommends.list
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