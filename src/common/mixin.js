export const itemListenerMixin = {
  mounted() {
     // 防抖
     const refresh = debounce(this.$refs.scroll.refresh,100)
     // 3.监听图片加载完成 对监听的事件进行保存
     this.homeImageLister = () => {
       refresh()
    }
    this.$bus.$on('itemImageLoad', this.homeImageLister)

  },
}