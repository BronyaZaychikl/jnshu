import Vue from 'vue';
import Router from 'vue-router';
import Load from './views/Load.vue';
import store from './store'
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Load,
    },
    {
      path: '/hom',
      component: () => import('./views/Hom.vue'),
      name: 'hom',
      meta: {
        auth: true// 设置当前路由需要校验 
      },
      children: [
        {
          path: '',
          component: () => import('./components/Back.vue'),
        },
        {
          path: 'pass',
          component: () => import('./components/Pass.vue'),
        },
        {
          path: 'increase',
          component: () => import('./components/Increase.vue'),
        },
        {
          path: 'edit',
          component: () => import('./components/Edit.vue'),
        },

        {
          path: 'role',
          component: () => import('./components/Role.vue'),
        },
      ]
    },
  ],
});
router.beforeEach((to, from, next) => {

  if (to.matched.some(m => m.meta.auth)) {

    // 对路由进行验证     
    if(store.state.isLogin==100)  { // 已经登陆       
      next()   // 正常跳转到设置好的页面     
    }
    else {
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({ path: '/', query: { Rurl: to.fullPath } })
    }
  } else {
    next()
  }
})
export default router;