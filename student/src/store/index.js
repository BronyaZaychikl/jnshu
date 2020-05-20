import Vue from 'vue'
import Vuex from 'vuex'
//引入的modules模块
import result from './modules/Result'
import searchVideo from './modules/SearchVideo'
import searchArticle from './modules/SearchArticle'
import video from './modules/Video'
import banner from './modules/Banner'
import news from './modules/News'
import articleContent from './modules/ArticleContent'
import article from './modules/Article'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token: '123',
    // userInfo: {
    //   userId: 0,
    //   userName: '',
    //   roleId: 0,
    //   roleName: ''
    // },
    // initialInfo: {
    //   menuList: [],
    //   functionList: [],
    //   projectNodeList: []
    // }
  },
  mutations: {
    // setToken(state, token) {
    //   state.token = token
    // },
    // setUserInfo(state, userInfo) {
    //   state.userInfo = userInfo
    // }
  },
  actions: {
  },
  //这里填写我们引入的module模块
  modules: {
    result,
    searchVideo,
    searchArticle,
    video,
    banner,
    news,
    articleContent,
    article
  }
})
