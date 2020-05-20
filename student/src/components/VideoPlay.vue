<template>
  <!-- 视频播放 -->
  <div class="videoPlay">
    <div id="mse"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Player from "xgplayer";
export default {
  name: "videoPlay",
  data() {
    return {};
  },
  methods: {
    ...mapState("video", ["result"])
  },
  mounted() {
    const play = new Player({
      id: "mse",
      autoplay: false,
      url:
        "//s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4",
      playsinline: true,
      whitelist: [""],
      //  videoInit: true,获取第一帧作为封面，可惜的是移动端无效
      poster: "",
      volume: 1,
      fluid: true,
      playbackRate: [0.5, 1, 1.5, 2]
    });
    play.config.url = this.result.video;
    window.console.log(play.config.url);
  }
};
</script>

<style lang="scss" scope>
</style>