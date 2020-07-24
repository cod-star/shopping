<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view/></keep-alive>
    <main-tab></main-tab>
    
  </div>
</template>

<script>

import MainTab from 'components/content/maintab/MainTab'


export default {
  name: 'App',
  components: {
    MainTab
  }
}
</script>

<style scoped>
 @import "./assets/css/base.css";
</style>
