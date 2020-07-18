<template>
  <swiper>
    <!-- 解决 1.在v-for 后添加 :key='item'
        <li v-for="i in list" :key="i">-->
    <swiper-item v-for="item in banners" :key='item'>
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>
<script>

import {SwiperItem,Swiper} from 'components/common/swiper'

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }

  },
  components: {
    SwiperItem,
    Swiper
  }
};
</script>
<style>
</style>