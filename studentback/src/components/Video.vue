<template>
  <div class="video">
    <nav>
      <p>视频新增</p>
    </nav>
    <main>
      <span>所属年级</span>
      <select v-model="value" placeholder="请选择">
        <option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></option>
      </select>
    </main>
  </div>
</template>

<script>
export default {
  name: "video",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  }
};
</script>

 <style lang="scss">
 .video{
     select{
         width: 113px;
         height: 30px;
     }
 }
</style>>

