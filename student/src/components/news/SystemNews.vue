<template>
  <div class="systemNews">
    <div class="system" v-for="sys in monitorNews" :key="sys.userMsgid">
      <div class="systemContent">
        <div class="systemName">
          <p>{{sys.msgType}}</p>
          <p>{{sys.releaseTime}}</p>
        </div>
        <p>删除</p>
      </div>
      <div class="systemWord">
        <p>{{sys.title}}</p>
        <div class="systemMore">查看详情>></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "systemNews",
  computed: {
    ...mapGetters("news", ["monitorNews"]),
  },
  data() {
    return {
    };
  },  created() {
    this.systemNews();
    window.console.log(this.news);
  },
  methods: {
    ...mapActions("news", ["systemNews"]),
  },

};
</script>

<style lang="scss" scoped>
.systemNews {
  .system {
    padding: 10px 20px;
    border-top: 1px solid #aaa;
    .systemContent {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      .systemName {
        display: flex;
        p {
          padding: 0 10px;
        }
      }
    }
    .systemWord {
      position: relative;
      width: 100%;
      height: 60px;
      border: 1px solid #aaa;
      border-radius: 5px;
      font-size: 10px;
      p {
        padding-left: 5px;
      }
      .systemMore {
        position: absolute;
        bottom: 5px;
        right: 10px;
      }
    }
  }
}
</style>