<template>
  <!-- 视频缩略图 -->
  <div class="thumbnail">
    <div v-for="source in monitorVideo" :key="source.id" class="source">
      <div @click="headVideo()">
        <div class="sourceStyle">
          <img :src="source.cover" alt />
          <div class="sourceName">
            <p>{{source.title}}</p>
          </div>
          <div class="sourcePrice">
            <p>{{priceType(source.price)}}</p>
            <p class="oldPrice">{{discountType(source.discount)}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "thumbnail",
  data() {
    return {
    };
  },
  computed: {
     ...mapGetters("searchVideo", ["monitorVideo"])

  },
  methods: {
      ...mapMutations("video", ["changeResultId"]),
    //需要加id
    headVideo() {
      // this.changeResultId(id);
      this.$router.push("/headVideo");
    },
    priceType(priceType) {
      const type = priceType;
      if (type == 0) {
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
.thumbnail {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding-top: 15px;
  .source {
    width: 50%;
    .sourceStyle {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      padding-bottom: 5px;
      img {
        width: 153px;
        height: 84px;
      }
      p {
        margin: 0;
      }
      .sourceName {
        min-height: 31px;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .sourcePrice {
        font-size: 12px;
        display: flex;
        .oldPrice {
          text-decoration: line-through;
          color: #7f7f7f;
        }
      }
    }
  }
}
</style>