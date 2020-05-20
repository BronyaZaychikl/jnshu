import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
  //state里面只放置全局需要共用的属性
  state: {
    vueId:'',
    vueData:{},
    isLogin:0 //初始时候给一个 isLogin=0 表示用户未登录
  },
  //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，此时里面的必须是同步函数
  mutations: {
    changeId(state,payload){
state.vueId=payload;
    },
    changeLogin(state,data){
      state.isLogin = data;
    }
  },
  //Action 提交的是 mutation，而不是直接变更状态。并且Action 可以包含任意异步操作。
  actions: {
    //context是state的父级，这里需要这么写,这个是随便写的，其实没有用到
    edit(context){
      axios({
        method: 'post',
      url: `/a/article/${context.state.vueId}`,
      })
      .then(res=>{
        // context.state.vueData=res.data.data.articleList;
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
    }

  },
  //Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样
  //getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
  getters: {
  }
});
