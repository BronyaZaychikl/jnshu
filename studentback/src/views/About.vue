<template>
  <div class="about">
    <nav>
      <p class="navName">学渣乐园后台管理系统</p>
      <div>
        <p>管理员</p>
        <img src alt />
        <p>假装admin</p>
        <button>注销</button>
      </div>
    </nav>
    <div class="navLeft">
      <div @click="changeMain" class="navMian">
        <router-link to="/about">主页</router-link>
      </div>
      <div class="navButton" @click="changeOne">用户管理</div>
      <div class="navRole" v-show="showOne">
        <router-link to="/about/role">用户列表</router-link>
      </div>
      <div class="navButton" @click="changeTwo">内容管理</div>
      <div class="navRole" v-show="showTwo">
        <router-link to="/about/role">文章列表</router-link>
        <router-link to="/about/video">视频列表</router-link>
      </div>
      <div class="navButton" @click="changeThr">后台管理</div>
      <div class="navRole" v-show="showThr">
        <router-link to="/about/role">账号管理</router-link>
        <router-link to="/about/role">角色管理</router-link>
        <router-link to="/about/role">修改密码</router-link>
        <router-link to="/about/role">模块管理</router-link>
      </div>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      showOne: false,
      showTwo: false,
      showThr: false
    };
  },
  methods: {
    changeMain() {
      this.showOne = false;
      this.showTwo = false;
      this.showThr = false;
    },
    changeOne() {
      this.showOne = !this.showOne;
      this.showTwo = false;
      this.showThr = false;
    },
    changeTwo() {
      this.showOne = false;
      this.showTwo = !this.showTwo;
      this.showThr = false;
    },
    changeThr() {
      this.showOne = false;
      this.showTwo = false;
      this.showThr = !this.showThr;
    }
  }
};
</script>
<style lang="scss" scope>
.about {
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e3e3e3;
    border: 1px solid #000;
    .navName {
      padding-left: 50px;
    }
    div {
      width: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 50px;
    }
  }
  .navLeft {
    float: left;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 200px;
    border: 1px solid #000;
    margin-top: 5px;
    .navMian {
      width: 100%;
      a {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-bottom: 1px solid #000;
      }
    }

    .navButton {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-bottom: 1px solid #000;
    }
    .navRole {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      a {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-bottom: 1px solid #000;
      }
    }
  }
}
</style>
