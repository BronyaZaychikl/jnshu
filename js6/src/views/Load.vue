<template>
  <div>
    <main>
      <form class="main" @submit.prevent="load">
        <p class="top-word">欢迎登录</p>
        <div class="main-word">
          <div class="word">
            <img src="../assets/people.png" class="img-one" />
            <div class="bar"></div>
            <input type="text" placeholder="用户名" id="name" v-model="name" />
          </div>
          <div class="word">
            <img src="../assets/clock.png" class="img-two" />
            <div class="bar"></div>
            <input type="password" placeholder="密码" id="pwd" v-model="pwd" />
          </div>
        </div>
        <input type="submit" value="登录" id="loading" />
        <p>{{typ}}</p>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pwd: "",
      typ: ""
    };
  },
  methods: {
    load() {
      if (this.name && this.pwd) {
        this.axios({
          url: "a/login",
          method: "post",
          data: "name=" + this.name + "&pwd=" + this.pwd,
          emulateJSON: true
        })
          .then(res => {
            if (res.data.message == "success") {
              console.log(res);
              this.$store.commit('changeLogin','100')  //登录后改变登录状态 isLogin = 100  
              this.$router.push("/hom");
            } else {
              this.typ = res.data.message;
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        alert("账号密码都得写啊");
      }
    }
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
main {
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 290px;
    padding: 20px;
    margin-left: -220px;
    margin-top: -155px;
    background-color: #d0d3d9;
    text-align: center;
    .top-word {
      font-size: 20px;
      padding: 20px 0;
    }
    .main-word {
      display: flex;
      flex-flow: column nowrap;
      .word {
        display: flex;
        align-items: center;
        width: 90%;
        margin: 5px auto;
        background-color: #fff;
        .img-one {
          padding: 7.5px 7px;
        }
        .img-two {
          padding: 7px 8.5px;
        }
        .bar {
          width: 2px;
          height: 17px;
          margin: 0 10px;
          background-color: #e8e8e8;
        }
        input {
          width: 100%;
          height: 30px;
          font-size: 14px;
          margin: 5px 0;
          border: none;
          outline: none;
        }
      }
    }

    input[type="submit"] {
      width: 360px;
      height: 40px;
      margin-top: 20px;
      background-color: #03a9f4;
      border: none;
      outline: none;
    }
  }
}
</style>>

