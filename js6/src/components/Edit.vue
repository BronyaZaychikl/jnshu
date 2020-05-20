<template>
  <div id="edit">
    
    <div class="editStyle">
      <p class="styleTop">新增Article</p>
      <div>
        <span class="span spanType">类型</span>
        <el-select v-model="obj.type" placeholder="请选择">
          <el-option v-for="item in type" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div>
        <span class="span">标题名称</span>
        <input type="text" v-model="obj.title" class="inputText" />
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
        <div class="imageType">
          <span class="span">配图</span>
           <el-button type="warning" @click="delImg()">{{valueImg}}</el-button>
        </div>
        <img :src="this.obj.img" v-if="initialImg" class="viewImg" />
        <el-upload
          action="/api/a/u/img/{module}"
          list-type="picture-card"
          :on-success="handleAvatarSuccess"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          v-if="!initialImg"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <div>
        <el-button type="success"  @click="editData(2)" >立即上线</el-button>
        <el-button type="success"  @click="editData(1)" >存为草稿</el-button>
        <router-link to="/hom/pass">
          <el-button type="danger"  >取消</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit",
  props: {
    editID: "number"
  },
  data() {
    return {
      editorOption: {
        theme: "snow"
      },
      valueImg: "删除原本图片",
      initialImg: true,
      imageUrl: "",
      imgUrl: "",
      obj: {},
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
  //获取单个列表
  created() {
    // console.log(this.$store.state.vueId);
    this.axios
      .get(`/a/article/${this.$store.state.vueId}`)
      .then(res => {
        this.obj = res.data.data.article;
      })
      .catch(err => {
        console.log(err);
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

    delImg() {
      this.initialImg = !this.initialImg;
      if (!this.initialImg) {
        this.valueImg = "恢复原本图片";
      } else {
        this.valueImg = "删除原本图片";
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.imgUrl = res.data.url;
    },
    handleRemove(file, fileList) {},
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    editData(status) {
      if (this.initialImg == false) {
        this.obj.url = this.imgUrl;
      }
      const r = confirm("确定修改？");
      if (r) {
        this.axios({
          url: `/a/u/article/${this.$store.state.vueId}`,
          method: "put",
          params: {
            title: this.obj.title,
            status: status,
            img: this.obj.url,
            content: this.obj.content,
            url: this.obj.url,
            createAt: this.obj.createAt,
            type: this.obj.type
          }
        })
          .then(res => {
            this.$router.push("/hom/pass");
            // console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="scss" >
#edit {
  position: relative;
  padding-top: 30px;
  .editStyle{
  margin: 0 auto;
  width: 95%;
  height: 90%;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
.styleTop{
  padding: 20px;
  border-bottom: 1px solid #d3d3d3;
}
  }
  .imageType{
    padding: 10px 0;
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
  .viewImg {
    max-width: 100%;
  }
  .inputText{
    width: 80%;
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
  .spanType{
    margin-right: 30px;
  }
}
</style>