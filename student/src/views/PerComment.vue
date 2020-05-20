<template>
  <!-- 点评 -->
  <div class="perComment">
    <main>
      <p class="inquiry">您对本次课程满意吗?</p>
      <div class="course">
        <img :src="course.img" alt />
        <span>{{course.name}}</span>
        <span>{{course.occpation}}</span>
        <p>{{course.content}}</p>
      </div>
      <div class="evaluate">
        <el-rate v-model="value" :colors="colors" show-text></el-rate>
        <el-input
          class="text"
          type="textarea"
          placeholder="您的评价会激励我们做的更好"
          v-model="textarea"
          maxlength="200"
          rows="10"
          show-word-limit
        ></el-input>
      </div>
    </main>

    <footer>
      <div class="foot">提交评价</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "perComment",
  data() {
    return {
      colors: { 1: "#99A9BF", 3: "#F7BA2A", 5: "#f00" },
      course: {
        img:
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        name: "文桦",
        occpation: "高级数学讲师",
        content: "《函数模型及其应用》"
      },
      value: null,
      textarea: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.perComment {
  position: relative;
  main {
    box-shadow: 0 0 2px 2px #aaa;
    width: 95%;
    height: 450px;
    margin: 0 auto;
    padding: 10px 0;
    .inquiry {
      text-align: center;
      font-size: 12px;
      font-weight: bold;
      color: #555;
    }
    .course {
      width: 80%;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      border-radius: 5px;
      box-shadow: 1px 1px 2px 2px #e2e2e2;
      img {
        width: 25px;
        height: 25px;
        border: 1px solid #000;
        border-radius: 50%;
      }
      p {
        font-size: 12px;
      }
      span {
        font-size: 10px;
        padding: 0 10px;
      }
    }
    .evaluate {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      .el-rate {
        position: relative;
        padding: 20px 0;
      }
      .text {
        width: 300px;
        border-radius: 5px;
        box-shadow: 1px 1px 2px 2px #e2e2e2;
      }
    }
  }
  footer {
    margin-top: 100px;
    width: 100%;
    height: 40px;
    .foot {
      background-color: #aaa;
      width: 95%;
      height: 25px;
      border: 1px solid #aaa;
      border-radius: 15px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>>
