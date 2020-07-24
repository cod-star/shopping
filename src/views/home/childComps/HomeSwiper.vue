<template>
  <swiper>
    <!-- 解决 1.在v-for 后添加 :key='item'
        <li v-for="i in list" :key="i">-->
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt=""  @load="imageLoad">
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
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    SwiperItem,
    Swiper
  },
  methods: {
    imageLoad(){
      if(!this.isLoad){
        // 只要加载一张
         this.$emit('swiper')
         this.isLoad = true
      }
     
    }
  },
};
</script>
<style>
</style>