<template>
  <!-- 搜索结果 -->
  <div class="result">
    <div class="keyWord">
      <router-link to="/search">
        <searchOnly></searchOnly>
      </router-link>
    </div>

    <div class="choice">
      <router-link to="/result" :class="{'typeClick':page==20}" @click.native="page=20">课程</router-link>
      <router-link
        to="/result/teachAssistant"
        :class="{'typeClick':page==10}"
        @click.native="page=10"
      >文章</router-link>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import searchOnly from "../components/SearchOnly";
export default {
  name: "result",
  components: {
    searchOnly
  },

  data() {
    return {
      page: null
    };
  },
  computed: {
    ...mapGetters("result", ["monitorResult"]),
  },
  mounted() {
    this.page = this.monitorResult;
  }
};
</script>
<style lang="scss" scope>
.result {
  .choice {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    a {
      text-decoration: none;
      margin: 0 10px;
      -webkit-tap-highlight-color: transparent;
      color: #000;
      border-bottom: 1px solid #fff;
    }

    .typeClick {
      border-bottom: 1px solid #000;
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