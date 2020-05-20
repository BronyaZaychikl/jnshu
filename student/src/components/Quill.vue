<template>
<!-- 文章详情内的内容 -->
  <div class="edit_container">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @focus="onEditorFocus($event)"
    ></quill-editor>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      content: `<p>如同去年开花，今年我们才闻到花香。越南作家保宁先生1990年出版的长篇小说《战争哀歌》，直到29年后的今天，才被译介到中国，这委实有些无论邻家梨树上多大的果实，也都是一颗庸常小枣的感觉。相比欧美文学，既是一粒葡萄，也可以很快在中国放出桃梨之香的景况，这不仅让人觉得可笑，而且也让人觉得无奈后的合理。更何况，《战争之歌》作为一部了不得的战争小说，它能给中国文学——尤其从来都在中国文学中占有重镇地位的军事文学更多的路标和启示；给中国作家和读者，更多的亲近和异受。</p>
        <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt />
        <p>这种文学的迟到，对于保宁，对于《战争哀歌》，都不会影响作家和作品固有的成就与地位，而所受影响的，是中国的文学，尤其是中国军事文学的写作与创造。我作为一个有过26年军旅生涯的小说家，读完这部小说最为轰然的感受，就是倘若我们可以如80年代初中国作家李存葆的《高山下的花环》一经发表，就在同一时间被其译为越文一样，而在80年代末或晚时的90年代初，将其《战争哀歌》译为中文，那么，我们对越南文学的认识，就将不是今天这么封闭和短视；今天中国极端固步旧陈的军事文学，就一定不会这么保守、裹脚与滞后。甚至说，如果能够及时的译进保宁的《战争哀歌》，中国的军事文学，在那时或今天，都极为可能是一种新的景观和生气。</p>
        <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt />
        <p>如此间，也就在阅读的等待中，真诚的表达着对译者和越南文学及保宁的写作生之内心的敬意。想，倘是没有如夏露这样执着辛劳的翻译，我们至今，都将对越南文学停留在过往几十年前僵化陈旧的记忆上。会以为世界上除了中国和西域这两宅大户人家的几枝毛笔、众多钢笔外，世界上就再也没有笔墨纸张的写作了。也籍此，表达着自己为了写作的便利，一样狭隘地把《战争哀歌》放在东方战争小说中的比较、叙说的欠疚和愧意。因为，无论从哪个角度说，《战争哀歌》都是超越和外溢着这些意义的。都是世界文学中亚洲写作的一部罕见之稀品。</p>`,
      editorOption: {
          modules:{
            toolbar:[
            ]
          },
          theme:'snow'
      }
    };
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {

    onEditorFocus(event){ // 富文本获得焦点时的事件
  event.enable(false); // 在获取焦点的时候禁用
 }, 
   
  },

        
     
};
</script>

<style lang="scss" scope>
.edit_container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .ql-toolbar.ql-snow{
    display: none;
  }
     p{
      font-size: 12px;

     }
    .ql-container.ql-snow{
      border: none;
    }
}
</style>