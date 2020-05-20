<template>
  <div class="elseNews">
    <div class="elseContent" v-for="el in monitorNews" :key="el.userMsgId">
      <div class="elseDel">
        <div class="elseName">
          <img :src="el.photoUrl" alt />
          <p>{{el.userName}}</p>
          <p>今天{{el.createTime}}</p>
        </div>
        <p>删除</p>
      </div>
      <p>共{{el.totalLikeNum}}人赞了你的评论</p>
      <div class="elseWord">
        <p>{{el.comment}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "elseNews",
  computed: { 
    ...mapGetters("news", ["monitorNews"])
    
    },
  data() {
    return {};
  },
  methods: {
    ...mapActions("news", ["otherNews"]),
    ...mapState("news", ["news"])
  },
  created() {
    this.otherNews();
  }
};
</script>
<style lang="scss" scoped>
.elseNews {
  .elseContent {
    font-size: 10px;
    border-top: 1px solid #aaa;
    padding: 10px 20px;
    .elseDel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .elseName {
        display: flex;
        align-items: center;
        p {
          padding: 0 10px;
        }
        img {
          width: 25px;
          height: 25px;
          border: 1px solid #000;
          border-radius: 50%;
        }
      }
    }
    .elseWord {
      padding: 5px;
      border-radius: 10px;
      background-color: #e3e3e3;
    }
  }
}
</style>