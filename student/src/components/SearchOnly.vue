<template>
<!-- 搜索栏 -->
<div class="searchOnly">
  <van-search
  v-model="title"
  placeholder="请输入搜索关键词"
  show-action
  shape="round"
  @search="onSearch"
>
  <div slot="action" @click="onSearch">搜索</div>
</van-search>
</div>
</template>

<script>
export default {
name:'searchOnly',
data () {
    return {
        title:'',
    }
},
methods: {
    onSearch(){
        //写搜索的接口和传递参数
    }
}
}
</script>

<style>

</style>