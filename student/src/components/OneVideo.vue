<template>
  <!-- 单行视频列表,收藏和浏览用 -->
  <div class="oneVideo">
    <div class="videoList" v-for="(list, index) in videoList" :key="index">
      <div class="listName">
        <img :src='list.img' alt />
        <p>{{list.name}}</p>
      </div>
      <div class="listPrice">
        <p>￥{{list.price}}</p>
        <p class="old">￥{{list.oldPrice}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "oneVideo",
  data() {
    return {
      videoList: [
        {
          name: "书名1",
          img: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          price: 201,
          oldPrice: 501
        },
        {
          name: "书名2",
          img: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          price: 202,
          oldPrice: 502
        },
        {
          name: "书名3",
          img: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          price: 203,
          oldPrice: 503
        },
        {
          name: "书名4",
          img: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          price: 204,
          oldPrice: 504
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.oneVideo {
  p {
    margin: 0;
  }
  .videoList {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    border-bottom: 1px solid #aaa;
    .listName {
      display: flex;
      img {
        width: 90px;
        height: 60px;
        margin: 0 10px;
      }
    }
    .listPrice {
      display: flex;
      flex-flow: column nowrap;
      .old {
        text-decoration: line-through;
      }
    }
  }
}
</style>