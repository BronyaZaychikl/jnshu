<template>
  <!-- 文章主页 -->
  <div class="articleContent">
    <div class="keyWord">
      <span>年级选择</span>
      <router-link to="/search">
        <searchOnly></searchOnly>
      </router-link>
    </div>
    <rotation></rotation>
    <main>
      <articleSee></articleSee>
    </main>
    <footer>
      <div class="foot">
        <img src="../assets/images/首页/u238.svg" alt />
        <p>首页</p>
      </div>
      <div class="foot">
        <img src="../assets/images/首页/u243.svg" alt />
        <p>学习</p>
      </div>
      <div class="foot">
        <img src="../assets/images/首页/u242.svg" alt />
        <p>论坛</p>
      </div>
      <div class="foot">
        <img src="../assets/images/首页/u241.svg" alt />
        <p>我的</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import rotation from "../components/Rotation.vue";
import articleSee from "../components/ArticleSee.vue";
import searchOnly from "../components/SearchOnly";
export default {
  name: "articleContent",
  components: {
    rotation,
    articleSee,
    searchOnly
  },
  data() {
    return {
      page: null,
      grade:11,
    };
  },
  methods: {
    ...mapActions("banner", ["bannerArticle"]),
    ...mapActions("articleContent", ["studyList"]),
    ...mapMutations('articleContent',["changeSearch"])
  },
  created() {
    this.bannerArticle();
    this.studyList();
    this.changeSearch(this.grade);
  },
};
</script>
<style lang="scss" >
.articleContent {
  .keyWord {
    display: flex;
    align-items: center;
  }

  .van-swipe {
    position: relative;
    padding-bottom: 10px;
    .custom-indicator {
      position: absolute;
      right: 10px;
      bottom: 15px;
      padding: 2px 5px;
      font-size: 8px;
      border-radius: 8px;
      color: #fff;
      background-color: #7f7f7f;
    }
  }
  main {
    padding-top: 10px;
    border-top: 1px solid #aaa;
    margin-bottom: 50px;
  }

  footer {
    position: fixed;
    bottom: 0;
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 0 5%;
    background-color: #e3e3e3;
    .foot {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      p {
        margin: 0;
        font-size: 12px;
      }
    }
  }
}
</style>