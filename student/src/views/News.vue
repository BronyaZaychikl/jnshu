<template>
<!-- 消息中心 -->
  <div class="news">
    <nav>
      <img src="../assets/images/视频介绍/u289.svg" alt />
      <p class="name">消息中心</p>
      <p class="del">清空</p>
    </nav>
    <div class="type">
      <router-link to="/else/news">系统通知</router-link>
      <router-link to="/else/news/elseNews">其他消息</router-link>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scope>
.news {
  nav {
     position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 50px;
    width: 100%;
    height: 44px;
    background-color: #f19c34;
    .name{
      font-weight: bold;
    }
    img{
      margin-left: 10px;
      padding: 6.5px;
    }
    .del{
      margin-right: 10px;
      font-size: 10px;

    }
    p {
      margin: 0;
    }
  }
  .type {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
      margin-top: 90px;
    a {
      color: #000;
      text-decoration: none;
      margin: 0 10px;
      -webkit-tap-highlight-color: transparent;
    }
  }
}
</style>