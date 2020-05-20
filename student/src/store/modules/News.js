// 消息中心
import axios from 'axios'
const news = {
    namespaced: true,  //这里使用了命名空间
    state: {
        news: [],


    },
    //Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样
    //getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    getters: {
        monitorNews:state=>state.news
    },
    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，此时里面的必须是同步函数
    mutations: {
        changeNews(state, data) {
            state.news = data;
        },

    },
    //Action 提交的是 mutation，而不是直接变更状态。并且Action 可以包含任意异步操作。
    actions: {
        //context是state的父级
        systemNews(context) {
            axios({
                method: 'get',
                url: 'a/u/messages/sys/list',
                
            }).then(res => {
                window.console.log(res);
                context.commit('changeNews', res.data.data)
                window.console.log(context.state.news);
            }).catch(err => {
                window.console.log(err);
            })
        },
        otherNews(context) {
            axios({
                method: 'get',
                url: 'a/u/messages/other/list',
                
            }).then(res => {
                window.console.log(res);
                context.commit('changeNews', res.data.data)
                window.console.log(context.state.news);
            }).catch(err => {
                window.console.log(err);
            })
        },
    }
};

export default news;

