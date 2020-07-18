<template>
  <swiper>
    <swiper-item  v-for="item in banners">
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