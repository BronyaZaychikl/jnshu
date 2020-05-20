<template>
<!-- 视频推荐 -->
  <div class="recommend">
    <thumbnail></thumbnail>
  </div>
</template>

<script>
  import thumbnail from '../../components/Thumbnail.vue';
export default {
  name: "recommend",
        components: {
    thumbnail
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scope>
</style>