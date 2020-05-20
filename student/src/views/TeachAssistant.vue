<template>
<!-- 搜索结果文章 -->
  <div class="teachAssistant">
    <div class="sort">
      <p :class="{'sortClick':sortClick==1}" @click="sortClick=1">全部</p>
      <p :class="{'sortClick':sortClick==2}" @click="sortClick=2">最热</p>
      <p :class="{'sortClick':sortClick==3}" @click="sortClick=3">销量</p>
      <p :class="{'sortClick':sortClick==4}" @click="sortClick=4">免费</p>
    </div>
    <p class="sourceNum">共12条相关内容</p>
<articleResult></articleResult>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import articleResult from '../components/ArticleResult'
export default {
  name: "teachAssistant",
  components:{
    articleResult
  },
  data() {
    return {
      sortClick: 1,
      article: {
        type: 10,
        title: "光",
        grade: 11,

      },

    };
  },
  methods: {
    ...mapMutations("searchArticle", ["changeSearch"]),
            ...mapMutations("result", ["changeResult"]),
    ...mapActions("searchArticle", ["studyList"])
  },
  created() {
    this.changeSearch(this.article);
    this.changeResult(this.article.type);
    this.studyList();
  }

};
</script>

<style lang="scss" scope>
.teachAssistant {
  .sort {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
    p {
      font-size: 12px;
      margin: 10px 5px;
      border-radius: 5px;
      padding: 0 3px;
    }
    .sortClick {
      background-color: #000;
      color: #fff;
    }
  }
  .sourceNum {
    font-size: 8px;
    color: #555;
  }
}
</style>