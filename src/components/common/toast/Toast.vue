<template>
  <div class="toast-bar" v-show="isShow">
   <div>{{message}}</div> 
  </div>
</template>
<script>
export default {
  name:'Toast',
  // props: {
  //   type: String,
  //   default: ''
  // },
  // show: {
  //   type: Boolean,
  //   default: false
  // },
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message,duration) {
     this.isShow = true;
     this.message = message

     setTimeout(() =>{
       this.isShow = false
       this.message = ""
     },duration)
    }
  },
}
</script>
<style scoped>
.toast-bar{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 8px 10px;

  color: #fff;
  background: rgba(0, 0,0, 0.7);

  z-index: 9999;
}


</style>