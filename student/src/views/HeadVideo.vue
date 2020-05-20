<template>
  <!-- 视频 -->
  <div class="headVideo">
    <main>
      <div class="topImg">
        <!-- 视频播放组件 -->
        <videoPlay></videoPlay>
      </div>
      <div class="videoFunction">
        <router-link
          :class="{'videoChange':sortClick==1}"
          @click.native="sortClick=1"
          to="/headVideo"
        >详情</router-link>
        <router-link
          :class="{'videoChange':sortClick==2}"
          @click.native="sortClick=2"
          to="/headVideo/comment"
        >评论</router-link>
        <router-link
          :class="{'videoChange':sortClick==3}"
          @click.native="sortClick=3"
          to="/headVideo/recommend"
        >相关推荐</router-link>
      </div>
      <div class="viedoContent">
        <router-view></router-view>
      </div>
      <div class="foot">
        <div class="footOne">
          <router-link to="/else/perComment" class="footLeft">
            <img src="../assets/images/视频介绍/u286.svg" alt />
            <span>点评</span>
          </router-link>

          <div class="footLeft">
            <img src="../assets/images/视频介绍/u285.svg" alt />
            <span>收藏</span>
          </div>
        </div>
        <p>立即购买</p>
        
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import videoPlay from "../components/VideoPlay.vue";
export default {
  name: "headVideo",
  components: {
    videoPlay
  },
  data() {
    return {
      sortClick: null
    };
  },
    methods: {
    ...mapActions("video", ["studyList"])
  },
    created() {
    this.studyList();
  }

};
</script>

<style lang="scss" scoped>
.headVideo {
  main {
    .topImg {
      position: relative;
      padding-top: 70px;
      .showImg {
        width: 100%;
      }
      .playImg {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -25px;
        margin-left: -25px;
      }
    }
    .videoFunction {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      box-shadow: 1px 1px 1px 1px #e2e2e2;
      a {
        color: #000;
        text-decoration: none;
        border-bottom: 1px solid #fff;
        margin: 5px 5%;
        padding: 5px 0;
      }
      .videoChange {
        border-bottom: 1px solid #000;
      }
    }
    .viedoContent {
      padding-bottom: 60px;
    }
    .foot {
      position: fixed;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f2f2f2;
      .footOne {
        display: flex;
        .footLeft {
          padding: 0 15px;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          color: #000;
          text-decoration: none;
        }
      }
      p {
        margin: 0;
        padding: 15px;
        font-size: 14px;
        color: #fff;
        background-color: #02a7f0;
      }
    }
  }
}
</style>>

