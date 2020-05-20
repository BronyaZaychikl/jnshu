<template>
  <div id="serach">
    <form action>
      <span>发布时间</span>
      <div class="block">
        <span class="demonstration">创建日期</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" ></el-date-picker>
      </div>
      <span>-</span>
      <div class="block">
        <span class="demonstration">修改日期</span>
        <el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <span>类型</span>
      <el-select v-model="type" placeholder="全部">
        <el-option
          v-for="types in option"
          :key="types.value"
          :label="types.label"
          :value="types.value"
        ></el-option>
      </el-select>
      <span>状态</span>
      <el-select v-model="statu" placeholder="全部">
        <el-option
          v-for="statu in status"
          :key="statu.value"
          :label="statu.label"
          :value="statu.value"
        ></el-option>
      </el-select>
      <el-button type="danger">清空</el-button>
      <el-button type="success" @cl="search">搜索</el-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "serach",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: "",
      value2: "",
      option: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "首页Banner"
        },
        {
          value: "选项3",
          label: "找职位Banner"
        },
        {
          value: "选项4",
          label: "找精英Banner"
        },
        {
          value: "选项5",
          label: "行业大图"
        }
      ],
      type: "",
      status: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "上线"
        },
        {
          value: "选项3",
          label: "草稿"
        },
      ],
      statu: "",       
      searchName:{
        id:'',
        title:'',
        author:'',
        createAt:'',
        updateAt:'',
        type:'',
        status:''
      }
    };
  },
  methods: {
      search(type) {
        let url = '/api/a/article/search'
        axios.get(url,{params: {createAt:this.value1,updateAt:this.value2}})
          .then(res => {
            if (res.status === 200) {
              this.lists = res.data.data.articleList;
              this.searchName = {};
            }
          })
      },
  }
};
</script>
