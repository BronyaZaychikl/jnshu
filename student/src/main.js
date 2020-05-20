import Vue from 'vue'
//异步
import './plugins/axios'
import App from './App.vue'
// 路由
import router from './router'
// vuex
import store from './store'
// element组件
import ElementUI from 'element-ui';
import './assets/style/theme/index.css';
// vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
// quill富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//vue组件库
import VueGnComponents from "vue-gn-components";
import "vue-gn-components/lib/style/index.css";
Vue.use(VueGnComponents)

Vue.config.productionTip = false
Vue.use(ElementUI);// element组件
Vue.use(Vant);// vant组件
Vue.use(VueQuillEditor)// quill富文本编辑器

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})