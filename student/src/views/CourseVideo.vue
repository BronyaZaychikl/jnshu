<template>
  <!-- 搜索结果视频 -->
  <div class="courseVideo">
    <div class="sort">
      <p :class="{'sortClick':sortClick==1}" @click="sortClick=1">全部</p>
      <p :class="{'sortClick':sortClick==2}" @click="sortClick=2">最热</p>
      <p :class="{'sortClick':sortClick==3}" @click="sortClick=3">销量</p>
      <p :class="{'sortClick':sortClick==4}" @click="sortClick=4">免费</p>
    </div>
    <p class="sourceNum">共12条相关内容</p>
    <thumbnail></thumbnail>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

import thumbnail from "../components/Thumbnail.vue";
export default {
  name: "courseVideo",
  components: {
    thumbnail
  },
  data() {
    return {
      sortClick: 1,
      video: {
        type: 20,
        title: "光",
        grade: 11,

      }
    };
  },

  methods: {
    ...mapMutations("searchVideo", ["changeSearch"]),
        ...mapMutations("result", ["changeResult"]),
    ...mapActions("searchVideo", ["studyList"])
  },
  created() {
    this.changeSearch(this.video);
    this.changeResult(this.video.type);
    this.studyList();
  }
};
</script>

<style lang="scss" scope>
.courseVideo {
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