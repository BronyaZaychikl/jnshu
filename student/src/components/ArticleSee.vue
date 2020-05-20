<template>
  <!-- 文章主页缩略图 -->
  <div class="articleSee">
    <div v-for="article in monitorArticle" :key="article.id">
        <div @click="articleDetails()" class="content">
          <img :src="article.cover" alt class="topImg" />
          <p class="contentName">{{article.title}}</p>
          <p class="contentDetails">{{article.content}}</p>
          <div class="contentBrowse">
            <img src="../assets/images/文章/u571.svg" alt />
            <span>{{article.browseCount}}</span>
            <img src="../assets/images/文章/u565.svg" alt />
            <span>{{article.likeCount}}</span>
            <img src="../assets/images/文章/u567.svg" alt />
            <span>{{article.commentCount}}</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "articleSee",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("articleContent", ["monitorArticle"])
  },
  methods: {
          ...mapMutations("article", ["changeResultId"]),
        articleDetails() {
      // this.changeResultId(id);
      this.$router.push("/articleData/articleDetails");
    },

  }
};
</script>

<style lang="scss" scoped>
.articleSee {
  .content {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    padding: 10px 20px;
    color: #000;
    border-bottom: 1px solid #aaa;
    .topImg {
      width: 100%;
      height: auto;
    }
    .contentName {
      font-size: 10px;
    }
    .contentDetails {
      font-size: 8px;
    }
    .contentBrowse {
      align-self: flex-end;
      display: flex;
      align-items: center;
      padding: 10px 0;
      font-size: 8px;
      span {
        margin: 0 10px 0 0;
      }
    }
  }
}
</style>