<template>
<!-- 搜索总页-->
  <div class="home">
    <router-link to="/search">搜索</router-link>
    <router-link to="/result">搜索结果</router-link>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
<style lang="scss">
 html{
   margin: 0;
 }
 body{
   margin: 0 auto;
 }
</style>