<template>
<!-- 文章总页 -->
  <div class="articleList">
   <div>
     <router-view></router-view>
   </div>
  </div>
</template>
<script>
export default {
  name: "articleList",
  data() {
    return {
      
    };
  },
  methods: {
  }
};
</script>
<style lang="scss" scope>
.articleList{
  max-width: 768px;
  margin: 0 auto;
}
</style>
