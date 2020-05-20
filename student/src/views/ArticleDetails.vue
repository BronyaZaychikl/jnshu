<template>
  <!-- 文章详情 -->
  <div class="articleDetails">
    <main>
      <h4>{{article.name}}</h4>
      <span>作者：{{article.who}}</span>
      <span>发布时间：{{article.time}}</span>
      <quill></quill>
      <div class="choice">
        <img src="../assets/images/文章详情/u628.svg" alt />
        <span>{{article.good}}</span>
        <img src="../assets/images/文章详情/u626.svg" alt />
        <span>{{article.store}}</span>
      </div>
    </main>
    <div class="message">
      <articleMessage></articleMessage>
    </div>

    <footer>
      <input type="text" />
      <p>发送</p>
    </footer>
  </div>
</template>

<script>
import quill from "../components/Quill.vue";
import articleMessage from "../components/ArticleMessage.vue";
export default {
  name: "articleDetails",
  components: {
    quill,
    articleMessage
  },
  data() {
    return {
      article: {
        name: "战争哀歌有感",
        who: "修正源",
        time: "今天20:00",
        img: {
          one: "",
          two: ""
        },
        good: 123,
        store: 120
      },
    };
  }
};
</script>

<style lang="scss" scoped>
.articleDetails {
  position: relative;
  main {
    position: relative;
    h4 {
      text-align: center;
    }
    span {
      font-size: 10px;
      padding: 0 18px;
    }
    .choice {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        padding: 0 10px;
        font-size: 14px;
      }
    }
  }
  .message {
    margin-bottom: 50px;
  }
  footer {
    position: fixed;
    display: flex;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 30px;
    background-color: #e3e3e3;
    input {
      width: 75%;
      border: none;
    }
    p {
      width: 25%;
      margin: 0;
      text-align: center;
    }
  }
}
</style>