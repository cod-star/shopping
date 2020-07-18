<template>
  <swpier>
    <swiper-item :v-for="item in banners">
      <a :href="item.link">
        <img :src="item.img" alt />
      </a>
    </swiper-item>
  </swpier>
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