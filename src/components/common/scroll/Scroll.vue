
<template>
  <div class="wrapper" ref="wrapper">
    <div class="conter">
      <slot></slot>
    </div>
  </div>
  
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
   pullUpLoad:{
     type: Boolean,
     default: false
   }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    // 2.监听滚动得位置
    this.scroll.on('scroll',(position) => {
      // console.log(position);
      this.$emit('scroll',position)
    })

  //  3.监听到底部 下拉加载
  if(this.pullUpLoad){
     this.scroll.on('pullingUp',() => {
      //  监听滚动底部
      this.$emit('pullingUp')
     })
  }
 

  },
  methods: {
    // 返回顶部
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    refresh(){
    //  加载图片后刷新
      this.scroll && this.scroll.refresh()
   },
  //  下拉加载后结束
   finishPullUp(){
     this.scroll && this.scroll.finishPullUp()
   }
  },
}
</script>