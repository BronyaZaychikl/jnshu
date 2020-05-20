<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/articleData">Else</router-link>
      <router-link to='/else/news'>news</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html{
  margin: 0;
}
</style>
