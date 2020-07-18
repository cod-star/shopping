<template>
  <div class="tab-control">
    <div v-for="(item,index) in title"
     class="tab-cotrol-item" 
     :class="{active: index === currentIndex}" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>

  </div>
</template>
<script>
export default {
  name: 'TabCortal',
  props: {
    title: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index){
      this.currentIndex = index

    }
  },
}
</script>
<style>

.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  background: #fcfcfc;
}
.tab-cotrol-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active{
  color: var(--color-high-text);
  
}
.active span{
  border-bottom: 1px solid var(--color-high-text);
  margin-bottom:5px;
}
  
</style>