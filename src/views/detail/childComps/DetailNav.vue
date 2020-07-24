<template>
  <div>
    <nav-bar >
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.png" alt="">
      </div>
      <div slot="center" class="title">
      <div v-for="(item ,index) in titles" 
      class="title-item"
       :class="{active: index === currentIndex}" @click="detailTitle(index)">
      {{item}}</div>
      </div></nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'DetailNav',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    detailTitle(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  },
}
</script>
<style>
.title{
  display: flex;
}
.title-item{
  flex: 1;
  font-size: 14px;
}
  .active{
  color: var(--color-high-text);
  }
  .back img{
    width: 20px;
    height: 20px;
    position: relative;
    top: 5px;

  }
</style>