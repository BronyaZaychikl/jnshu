<template>
<!-- 视频评价 -->
  <div class="comment">
    <div class="commentNum">
      <p>全部评论({{result.oneStar+result.twoStar+result.threeStar+result.fourStar+result.fiveStar}})</p>
      <p>好评度{{good}}</p>
    </div>
    <div class="commentType">
      <span>好评({{result.fourStar+result.fiveStar}})</span>
      <span>中评({{result.twoStar+result.threeStar}})</span>
      <span>差评({{result.oneStar}})</span>
    </div>
    <!-- 缺少评论接口没写,上面的星星也要改 -->
    <div v-for="per in person" :key="per.id" class="personList">
      <div class="personAll">
        <div class="peronName">
          <img :src="per.img" alt />
          <p>{{per.name}}</p>
          <el-rate v-model="per.value" disabled :colors="colors"  ></el-rate>
        </div>
        <p>时间{{per.time}}</p>
      </div>
      <p
        class="perCom"
        :class="{'perComment':per.word}"
        @click="per.word=!per.word"
      >{{per.personalComment}}</p>
      <span class="del">删除</span>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "comment",
  data() {
    return {
      num: {
        good: 9,
        second: 2,
        bad: 0
      },

      good: "98%",
      word: true,
      colors: { 1: "#99A9BF", 4: "#F7BA2A", 5: "#f00" },
      person: [
        {
          id: 1,
          img: "",
          name: "李白",
          value: 3,
          time: "2019-9-9",
          word: true,
          del: false,
          personalComment:
            "真的是非常感谢无偿提供课源的老师!对于我这种自学的人来说真的是帮助太大了!对于快要高考但是数学还是几十分的一位同学，我强烈给她的的安利"
        },
        {
          id: 2,
          img: "",
          name: "李白",
          value: 5,
          time: "2019-9-9",
          word: true,
          del: false,
          personalComment:
            "真的是非常感谢无偿提供课源的老师!对于我这种自学的人来说真的是帮助太大了!对于快要高考但是数学还是几十分的一位同学，我强烈给她的的安利"
        }
      ]
    };
  },
  methods: {
        ...mapState("video", ["result"]),
  }
};
</script>
<style lang="scss" scope>
.comment {
  .commentNum {
    display: flex;
    font-size: 12px;
    padding: 10px 0;
    p {
      padding: 0 20px;
      margin: 0;
    }
  }
  .commentType {
    font-size: 10px;
    border-bottom: 1px solid #d7d7d7;
    padding: 15px 0;
    span {
      border: 1px solid #000;
      border-radius: 15px;
      padding: 3px 7px;
      margin: 20px;
    }
  }
  .personList {
    border-bottom: 1px solid #d7d7d7;
    position: relative;
    padding:0 15px 15px;
    .personAll {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      .peronName {
        display: flex;
        align-items: center;
        .el-rate{
            height: 17.6px;
        }
        img {
          width: 23px;
          height: 23px;
          border: 1px solid #000;
          border-radius: 50%;
        }
        p {
          margin: 0 5px;
          
        }
      }
    }
    .perCom {
      font-size: 12px;
    }
    .perComment {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .del {
      position: absolute;
      font-size: 12px;
      bottom: 0;
      right: 20px;
    }
  }
}
</style>