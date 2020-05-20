<template>
  <div id="pass">
    <form action>
      <span class="spans">发布时间</span>
      <div class="top-form">
        <div class="block">
          <span class="demonstration spans">创建日期</span>
          <el-date-picker
            v-model="starAt1"
            type="date"
            :picker-options="starttime"
            value-format="timestamp"
            placeholder="选择日期"
          ></el-date-picker>
        </div>
        <span class="spans">—</span>
        <div class="block">
          <span class="demonstration spans">修改日期</span>
          <el-date-picker
            v-model="endAt1"
            type="date"
            :picker-options="endTime"
            value-format="timestamp"
            placeholder="选择日期"
          ></el-date-picker>
        </div>
      </div>
      <span class="spans spanType">类型</span>
      <el-select v-model="type.value" placeholder="全部">
        <el-option
          v-for="types in type"
          :key="types.value"
          :label="types.label"
          :value="types.value"
        ></el-option>
      </el-select>
      <span class="spans spanType">状态</span>
      <el-select v-model="status.value" placeholder="全部">
        <el-option
          v-for="status1 in status"
          :key="status1.value"
          :label="status1.label"
          :value="status1.value"
        ></el-option>
      </el-select>
      <el-button type="danger" @click="cleared()">清空</el-button>
      <el-button type="success" @click="search()">搜索</el-button>
    </form>
    <div class="mode-top">
      <p>模块管理</p>
      <router-link to="/hom/increase">
        <input type="button" value="+新增" />
      </router-link>
    </div>
    <table>
      <tr>
        <th>id</th>
        <th>图片</th>
        <th>标题</th>
        <th>创建者</th>
        <th>发布时间</th>
        <th>修改时间</th>
        <th>类型</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      <tr v-for="list in lists" :key="list.id">
        <td>{{list.id}}</td>
        <td>
          <img :src="list.img" alt class="img-width" />
        </td>
        <td>{{list.title}}</td>
        <td>{{list.author}}</td>
        <td>{{time(list.createAt)}}</td>
        <td>{{time(list.updateAt)}}</td>
        <td>{{passType(list.type)}}</td>
        <td>{{passStatus(list.status)}}</td>

        <div class="butt">
          <td>
            <input
              type="button"
              :value="clickStatus(list.status)"
              @click="shelf(list.id,list.status)"
            />
          </td>
          <td>
            <router-link to="/hom/edit">
              <input type="button" value="编辑" @click="getId(list.id)" />
            </router-link>
          </td>
          <td>
            <input type="button" value="删除" @click="passDelete(list.id)" />
          </td>
        </div>
      </tr>
    </table>
    <el-pagination
      background
      :page-count="page.count"
      :total="page.total"
      layout="prev, pager, next,jumper"
      :current-page.sync="page.pageNo"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "pass",
  //vue刷新页面添加的，刷新页面的代码是在App.vue
  inject: ["reload"],
  data() {
    return {
      //开始时间
      starttime: {
        disabledDate: time => {
          if (this.endAt1) {
            return time.getTime() > new Date(this.endAt1).getTime();
          } else {
            // 不能大于当前日期
            return time.getTime() > Date.now();
          }
        }
      },
      // 结束时间
      endTime: {
        disabledDate: time => {
          if (this.starAt1) {
            return (
              time.getTime() < new Date(this.starAt1).getTime() // 加-8.64e7则表示包括当天
            );
          }
        }
      },
      page: {
        total: 10,
        count: 1,
        size: 10,
        pageNo: 1
      },
      lists: [],
      starAt1: "",
      endAt1: "",
      type: [
        {
          value: "",
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
      ],
      status: [
        {
          value: "",
          label: "全部"
        },
        {
          value: 1,
          label: "草稿"
        },
        {
          value: 2,
          label: "上线"
        }
      ]
    };
  },
  //获取列表
  created() {
    this.pages(this.page.pageNo);
    
  },
  methods: {
    //vuex
    getId(id) {
      this.$store.commit("changeId", id);
    },
    //分页
    pages(number) {
      this.axios({
        url: `a/article/search/?page=${number}&size=${this.page.size}`,
        method: "get",
        data: {}
      }).then(res => {
        console.log(res);
        this.lists = res.data.data.articleList;
        this.page.total = res.data.data.total;
      });
    },
    handleCurrentChange(val) {
      this.pages(val);
    },

    //进行上下线
    shelf(id, status) {
      const _this=this
      const r = confirm("确定修改？");
      if (r) {
        status = status == 1 ? 2 : 1;
        this.axios({
          url: "a/u/article/status",
          method: "put",
          params: {
            id: id,
            status: status
          }
        }).then(res => {
          for (let i = 0; i < _this.lists.length; i++) {
            if (_this.lists[i].id == id) {
              _this.lists[i].status = _this.lists[i].status == 1 ? 2 : 1;
            }
          }
        });
      }
    },
    //搜索（查找）
    search() {
      if (this.endAt1 != 0) {
        this.endAt1 += 8.64e7-1;
      }
      this.axios({
        url: "a/article/search",
        method: "get",
        params: {
          startAt: this.starAt1,
          endAt: this.endAt1,
          type: this.type.value,
          status: this.status.value
        }
      }).then(res => {
        // console.log(res);
        this.lists = res.data.data.articleList;
        this.page.total = res.data.data.total;
      });
    },
    //清除查找
    cleared() {
      this.reload();
    },
    //删除
    passDelete(id) {
      const r = confirm("确定删除？");
      if (r) {
        this.axios
          .delete(`a/u/article/${id}`)
          // .delete("/api/a/u/article/"+id)等同于上面的es6模板语法
          .then(res => {
            // console.log(res);
            this.lists = this.lists.filter(list => list.id !== id);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    //转义后台数据
    passType(passtype) {
      const type = passtype;
      if (type == 0) {
        return "首页banner";
      } else if (type == 1) {
        return "找职位banner";
      } else if (type == 2) {
        return "找精英banner";
      } else if (type == 3) {
        return "行业大图";
      } else {
        return "没这个选项";
      }
    },
    passStatus(passstatus) {
      const sta = passstatus;
      if (sta == 1) {
        return "草稿";
      } else if (sta == 2) {
        return "上线";
      } else {
        return "没这个选项";
      }
      return 1;
    },
    clickStatus(click) {
      const sta = click;
      if (sta == 2) {
        return "下线";
      } else if (sta == 1) {
        return "上线";
      } else {
        return "没这个选项";
      }
      return 1;
    },
    //转义时间戳
    time(listTime) {
      const date = new Date(listTime);
      const year = date.getFullYear();
      const month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      const hour =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      const minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      const seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }
  }
};
</script>

<style lang="scss">
#pass {
  padding: 20px;
  box-sizing: border-box;

  .top-form {
    display: flex;
    padding: 10px 0;
  }
  .spans {
    padding: 0 15px;
  }
  .el-pagination {
    margin: 10px 0;
  }
  .el-button {
    float: right;
    margin: 0 20px;
  }
  .mode-top {
    position: relative;
    height: 50px;
    border: 1px solid #ddd;
    p {
      padding: 13px;
      margin: 0;
      font-weight: bold;
    }
    input[type="button"] {
      position: absolute;
      right: 20px;
      top: 50%;
      margin-top: -14px;
      background-color: #fff;
      border: 1px solid #333;
      outline: none;
    }
  }
  .spanType {
    margin-right: 30px;
  }
  table {
    width: 100%;
    tr {
      border: 1px solid #ddd;
      .butt {
        display: flex;
        justify-content: space-around;
        height: 80.4px;
        padding: 27px 0;
        input[type="button"] {
          outline: none;
          background-color: #fff;
          border: none;
          color: rgb(8, 79, 231);
        }
      }
      td {
        text-align: center;
        .img-width {
          width: 120px;
          height: 80px;
        }
      }
      th {
        text-align: center;
      }
    }
  }
}
</style>