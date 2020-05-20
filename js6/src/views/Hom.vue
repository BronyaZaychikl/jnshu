<template>
  <div id="hom">
    <nav>
      <p class="nav-top">萝卜多后台管理系统</p>
      <div @click="showOneClick" class="nav-one">
        <img src="../assets/pen.png" class="img-left" />
        <p>后台管理</p>
        <img src="../assets/arrleft.png" class="img-right" v-if="!showOne" />
        <img src="../assets/arrbottom.png" class="img-right" v-if="showOne" />
      </div>
      <div v-show="showOne">
        <router-link to="/hom/role" class="link">模块管理</router-link>
        <router-link to="/hom/role">角色管理</router-link>
        <router-link to="/hom/role">密码修改</router-link>
        <router-link to="/hom/role">账户管理</router-link>
      </div>

      <div @click="showTwoClick" class="nav-one">
        <img src="../assets/pen.png" class="img-left" />
        <p>信息管理</p>
        <img src="../assets/arrleft.png" class="img-right" v-if="!showTwo" />
        <img src="../assets/arrbottom.png" class="img-right" v-if="showTwo" />
      </div>
      <div v-show="showTwo">
        <router-link to>公司列表</router-link>
        <router-link to>职位列表</router-link>
      </div>
      <div @click="showThrClick" class="nav-one">
        <img src="../assets/pen.png" class="img-left" />
        <p>内容管理</p>
        <img src="../assets/arrleft.png" class="img-right" v-if="!showThr" />
        <img src="../assets/arrbottom.png" class="img-right" v-if="showThr" />
      </div>
      <div v-show="showThr">
        <router-link to="/hom/pass">Article列表</router-link>
      </div>
    </nav>
    <header>
      <div class="head">
        <p>管理员</p>
        <span>|</span>
        <p class="span-border">admin</p>
        <span>|</span>
        <router-link to="/">
          <img src="../assets/off.png" @click="onLoad" />
        </router-link>
      </div>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
export default {
  name: "hom",
  data() {
    return {
      showOne: false,
      showTwo: false,
      showThr: false
    };
  },
  methods: {
    onLoad() {
      this.$store.commit("changeLogin", "0");
    },
    showOneClick() {
      this.showOne = !this.showOne;
      this.showTwo = false;
      this.showThr = false;
    },
    showTwoClick() {
      this.showTwo = !this.showTwo;
      this.showOne = false;
      this.showThr = false;
    },
    showThrClick() {
      this.showThr = !this.showThr;
      this.showOne = false;
      this.showTwo = false;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  margin-left: 250px;
  .head {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 5px 0;
    background-color: #f4f4f4;

    p {
      margin: 0;
      padding: 0 10px;
    }
    img {
      padding: 5px;
      margin: 0 10px;
    }
  }
}
nav {
  float: left;
  width: 250px;
  a {
    display: block;
    text-align: center;
    color: rgb(20, 243, 68);
    text-decoration: none;
  }
  p {
    color: rgb(224, 238, 23);
    text-align: center;
    margin: 0;
    padding: 20px;
  }
  .nav-top {
    font-size: 20px;
    font-weight: bold;
  }
  .nav-one {
    position: relative;
    background-color: #f00;
    width: 100%;
    font-weight: bold;

    .img-left {
      position: absolute;
      top: 50%;
      left: 40px;
      margin-top: -8px;
    }
    .img-right {
      position: absolute;
      top: 50%;
      right: 20px;
      margin-top: -8px;
    }
  }
}
main {
  margin-left: 250px;
  min-height: 95.5vh;
  background-color: #fff;
}
</style>
