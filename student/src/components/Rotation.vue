<template>
  <!-- banner图 -->
  <div class="rotation">
    <van-swipe :autoplay="3000" :show-indicators="false" @change="onChange">
      <van-swipe-item v-for="(image, index) in monitorBanner" :key="index" >
        <img :src="image.picUrl" class="image" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{monitorBanner.length}}</div>
    </van-swipe>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "rotation",
  data() {
    return {
      current: 0,
    };
  },
  computed: {
    ...mapGetters("banner", ["monitorBanner"])
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="scss" scope>
.rotation {
  .image {
    width: 100%;
    height: 45vw;
    max-height: 345.6px;
    margin-top: 10px;
  }
}
</style>