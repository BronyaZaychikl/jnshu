<template>
<!-- 搜索页 -->
  <div class="search">
    <div class="keyWord">
<searchOnly></searchOnly>
    </div>
    <main>
      <div class="sorry" v-if="sorry">
        <p>抱歉，没有发现的相关内容</p>
        <p>换个关键词试试吧</p>
      </div>
      <div class="record">
        <p>搜索记录</p>
        <p>清空</p>
      </div>
      <div class="recordWord">
        <span v-for="(record, index) in searchRecord" :key="index">{{record}}</span>
      </div>
    </main>
  </div>
</template>
<script>
import searchOnly from '../components/SearchOnly'
export default {
  name: "search",
  components:{
    searchOnly
  },
  data() {
    return {
      sorry: false,
      searchRecord: [
        "名师提优",
        "名师提优",
        "名师提优",
        "名师提优",
        "名师提优",
        "名师提优",
        "名师提优",
        "名师提优",
        "名师提优",
        "名师提优",
        "名师提优",
        "名师提优"
      ]
    };
  },
  
};
</script>

<style lang="scss" scope>
.search {
 
  main {
    .sorry {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
    }
    .record {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }
    .recordWord {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      padding: 0 0px;
      span {
        font-size: 8px;
        margin: 5px;
        padding: 0 5px;
        color: #7f7f7f;
        background-color: #e3e3e3;
        border: 1px solid #7f7f7f;
        border-radius: 5px;
      }
    }
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