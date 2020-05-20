<template>
  <!-- 搜索结果文章缩略图 -->
  <div class="articleResult">
    <div class="allSource">
      <div v-for="source in monitorArticle" :key="source.id" class="source">
          <div @click="articleDetails()">
            <div class="sourceStyle">
              <div class="sourceContent">
                <img :src="source.cover" alt />
                <div class="sourceName">
                  <p>{{source.title}}</p>
                </div>
              </div>
              <div class="sourceBrief">
                <p class="teacherIntro">{{source.content}}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "articleResult",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("searchArticle", ["monitorArticle"])
  },methods: {
          ...mapMutations("article", ["changeResultId"]),
        articleDetails() {
      // this.changeResultId(id);
      this.$router.push("/articleData/articleDetails");
    },

  }
};
</script>

<style lang="scss" scoped>
.articleResult {
  .allSource {
    width: 100%;
    .sourceStyle {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      padding-bottom: 5px;
      img {
        width: 339px;
        height: 200px;
      }
      p {
        margin: 0;
      }
      .sourceName {
        min-height: 31px;
        font-size: 10px;
        display: flex;
        align-items: center;
      }
      .sourceBrief {
        max-width: 339px;
        font-size: 12px;
        padding-left: 5px;
        .teacherIntro {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }
  }

  a {
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    color: #000;
  }
}
</style>