<template>
  <div class="role">
    <div class="roleTop">
      <p>角色管理</p>
      <button>新增</button>
    </div>
    <table>
      <tr>
        <th>ID</th>
        <th>角色名</th>
        <th>创建人</th>
        <th>创建时间</th>
        <th>更新人</th>
        <th>更新时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="obj in object" :key="obj.id">
        <td>{{obj.id}}</td>
        <td>{{obj.name}}</td>
        <td>{{obj.creatName}}</td>
        <td>{{obj.creatAt}}</td>
        <td>{{obj.endName}}</td>
        <td>{{obj.endAt}}</td>
        <td>
          <button>编辑</button>

          <button>删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "role",
  data() {
    return {
      object: [
        {
          id: "1",
          name: "李白",
          creatName: "李墨",
          creatAt: "2019-10-22",
          endName: "李青",
          endAt: "2019-10-23"
        },
        {
          id: "2",
          name: "李白",
          creatName: "李墨",
          creatAt: "2019-10-22",
          endName: "李青",
          endAt: "2019-10-23"
        }
      ]
    };
  },
  methods: {
    // addRlole(){
    //   this.axios({
    //     url:'',
    //     mehtod:'',
    //     data:{
    //     }
    //   }).then(res=>{
    //     console.log(res);
    //   }).catch(err=>{
    //     console.log(err);
    //   });
    // }
  }
};
</script>

<style lang="scss" scope>
.role {
  margin: 20px auto;
  margin-left: 210px;
  padding: 10px;
  border: 1px solid #000;
  .roleTop {
    height: 45px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border: 1px solid #000;
    margin-bottom: 5px;
  }
  table {
    width: 100%;
    padding-bottom: 500px;
    border: 1px solid #000;
    border-collapse: collapse;

    tr {
      width: 100%;
      th {
        height: 40px;
        text-align: center;
        border-collapse: collapse;
        border: 1px solid #000;
      }
      td {
        height: 51px;
        text-align: center;
        border-collapse: collapse;
        border: 1px solid #000;
      }
    }
  }
}
</style>