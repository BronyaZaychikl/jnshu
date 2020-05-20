// 搜索结果文章
import axios from 'axios'
const searchArticle = {
    namespaced: true,  //这里使用了命名空间
    state: {
        result: [],
        search: {},
        
        
    },
    //Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样
    //getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    getters: {
        monitorArticle:state=>state.result
    },
    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，此时里面的必须是同步函数
    mutations: {
        changeResult(state, data) {
            state.result = data;
        },
        changeSearch(state, data) {
            state.search = data
        },
        
         
    },
    //Action 提交的是 mutation，而不是直接变更状态。并且Action 可以包含任意异步操作。
    actions: {
        //context是state的父级
        studyList(context) {
            axios({
                method: 'get',
                url: 'a/list/study',
                data: {
                    type: context.state.search.type,
                    title: context.state.search.title,
                    grade: context.state.search.grade,
                    status: 1,
                }
            }).then(res => {
                window.console.log(res);
                context.commit('changeResult', res.data.data)
                window.console.log(context.state.result);
            }).catch(err => {
                window.console.log(err);
            })
        },
    }
};

export default searchArticle;

