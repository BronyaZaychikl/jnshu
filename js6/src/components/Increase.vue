<template>
  <div id="increase">
    <div class="editStyle">
      <p class="styleTop">新增Article</p>
      <div>
        <span class="span spanType">类型</span>
        <el-select v-model="type.value" placeholder="请选择">
          <el-option v-for="item in type" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div>
        <span class="span">标题名称</span>
        <input type="text" v-model="obj.title" class="inputText"/>
      </div>
      <div>
        <span class="span">跳转链接</span>
        <input type="text" v-model="obj.url" class="inputText"/>
      </div>
      <span class="span">富文本</span>
      <div class="edit_container">
        <quill-editor
          v-model="obj.content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        ></quill-editor>
      </div>
      <div>
        <div>
        <span class="span">配图</span>
        </div>
        <el-upload
          action="/api/a/u/img/{module}"
          list-type="picture-card"
          :on-success="handleAvatarSuccess"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <div>
       <el-button type="success"  @click="addImg(2)" >立即上线</el-button>
        <el-button type="success"  @click="addImg(1)" >存为草稿</el-button>
        <router-link to="/hom/pass">
         <el-button type="danger"  >取消</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "increase",
  data() {
    return {
      editorOption: {
        theme: "snow"
      },
      imageUrl: "",
      imgUrl: "",
      obj: {
        title: "",
        status: "",
        img: "this.dialogImageUrl",
        url: ""
      },
      type: [
        {
          value: "all",
          label: "全部"
        },
        {
          value: 0,
          label: "首页banner"
        },
        {
          value: 1,
          label: "找职位banner"
        },
        {
          value: 2,
          label: "找精英banner"
        },
        {
          value: 3,
          label: "行业大图"
        }
      ]
    };
  },
  created() {
    this.axios({
      url: "a/article/search/",
      method: "get",
      data: {}
    }).then(res => {
      this.obj = res.data.data.articleList;
    });
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    saveHtml: function(event) {
      alert(this.content);
    },

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.imgUrl = res.data.url;
    },
    handleRemove(file, fileList) {},
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    addImg(num) {
      const r = confirm("确定增加？");
      if (r) {
        this.axios({
          url: "a/u/article",
          method: "post",
          data:
            "title=" +
            this.obj.title +
            "&type=" +
            this.type.value +
            "&status=" +
            num +
            "&img=" +
            this.imgUrl +
            "&url=" +
            this.obj.url +
            "&content=" +
            this.obj.content
        })
          .then(res => {
            this.$router.push("/hom/pass");
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
    // showPng(source) {
    //   var file = source;
    //   if (window.FileReader) {
    //     var fr = new FileReader();
    //     fr.onloadend = function(e) {
    //       document.getElementById("file").src = e.target.result;
    //     };
    //     fr.readAsDataURL(file);
    //   }
    // },
  }
};
</script>

<style lang="scss" >
#increase {
  position: relative;
  padding-top: 30px;
  .editStyle {
    margin: 0 auto;
    width: 95%;
    height: 90%;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    .styleTop {
      padding: 20px;
      border-bottom: 1px solid #d3d3d3;
    }
  }
  .el-upload--picture-card {
    width: 100%;
  }
  .el-upload-list__item {
    width: 100%;
    height: 100%;
  }
  .span {
    padding: 5px 20px;
  }
  input {
    margin: 10px;
  }
  .inputText{
    width: 80%;
  }
  .spanType{
    margin-right: 30px;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .ql-toolbar.ql-snow {
    max-height: 40px;
  }
  .ql-editor {
    min-height: 150px;
  }
  .el-button + .el-button{
    margin: 20px;
  }
}
</style>