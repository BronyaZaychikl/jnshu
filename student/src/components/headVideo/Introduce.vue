<template>
  <!-- 视频详情 -->
  <div class="introduce">
    <div class="nav">
      <div class="navName">
        <h5>{{result.title}}</h5>
        <span>{{result.buyCount}}学习</span>
        <span>好评{{result.likeCount}}</span>
      </div>
      <div class="navPrice">
        <span>{{priceType(result.price)}}</span>
        <span class="oldPrice">{{discountType(result.discount)}}</span>
      </div>
    </div>
    <div class="teacher">
      <img :src="result.avatar" alt />
      <p>{{result.author}}</p>
      <p>{{result.authorTitle}}</p>
    </div>
    <div class="intro">
      <p :class="{'teacherIntro':word==true}" @click="word=!word">{{result.authorIntr}}</p>
      <p>课程详情</p>
      <p>{{result.intr}}</p>
      <p>学习难点</p>
      <p>{{result.difficulty}}</p>
      <p>学习目标</p>
      <p>{{result.studyTarget}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "introduce",
  data() {
    return {
      word: true
    };
  },
  methods: {
    ...mapState("video", ["result"]),
    priceType(priceType) {
      const type = priceType;
      if (type == 0||type==null) {
        return "免费";
      } else {
        return "￥" + type;
      }
    },
    discountType(discountType) {
      const type = discountType;
      if (type == null) {
        return "";
      } else {
        return "￥" + type;
      }
    }
  }
};
</script>

<style lang="scss" scope>
.introduce {
  font-size: 12px;

  .nav {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    .navName {
      h5 {
        font-size: 14px;
        margin: 10px 0;
      }
      span {
        padding: 0 10px;
      }
    }
    .navPrice {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      .oldPrice {
        text-decoration: line-through;
        color: #7f7f7f;
      }
    }
  }
  .teacher {
    display: flex;
    align-items: center;
    img {
      width: 25px;
      height: 25px;
      border: 1px solid #000;
      border-radius: 50%;
      margin-left: 25px;
    }
    p {
      padding: 0 10px;
    }
  }
  .intro {
    padding: 0 20px;
    .teacherIntro {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
}
</style>