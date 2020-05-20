// 文章详情，resultId在文章缩略图中，缩略图有两个，一个文章搜索结果缩略图，一个文章主页的缩略图，这个详情还没来得及弄接口
import axios from 'axios'
const article = {
    namespaced: true,  //这里使用了命名空间
    state: {
        result: [],
        resultId:1,
    },
    //Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样
    //getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    getters: {
        monitorNews:state=>state.result
    },
    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，此时里面的必须是同步函数
    mutations: {
        changeResult(state, data) {
            state.result = data;
        },
        changeResultId(state, data){
            state.resultId = data
        }
         
    },
    //Action 提交的是 mutation，而不是直接变更状态。并且Action 可以包含任意异步操作。
    actions: {
        //context是state的父级
        studyList(context) {
            axios.get('a/u/study',{
                params:{
                    id:context.state.resultId
                }
            }).then(res => {
                window.console.log(res);
                context.commit('changeResult', res.data)
                window.console.log(context.state.result.data);
            }).catch(err => {
                window.console.log(err);
            })
        },
    }
};

export default article;

