<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
export default {
  name:"app",
  provide(){
    return{
    reload:this.reload
    };
  },
  data(){
    return{
      style:'',
      isRouterAlive:true
    };
  },
  methods: {
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true;
      })
    }
  },
};

</script>

<style lang="scss">
#app {
    width: 100vw;
  min-height: 100vh;
  background: url(./assets/bgc.jpg) center no-repeat;
  background-size: cover;

}
.btn {
  display: inline-block;
  border: none;
  background-color: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background-color: #666;
}
</style>
