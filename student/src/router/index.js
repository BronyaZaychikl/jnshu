import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '白'
    },
    children: [
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/Search.vue')
      },
      {
        path: 'result',
        name: 'result',
        component: () => import('../views/Result.vue'),
        children: [
          {
            path: '',
            name: 'courseVideo',
            component: () => import('../views/CourseVideo.vue')
          },
          {
            path: 'teachAssistant',
            name: 'teachAssistant',
            component: () => import('../views/TeachAssistant.vue')
          },
        ]
      },
    ]
  },
  {
    path: '/articleData',
    name: 'articleData',
    component: () => import('../views/ArticleData.vue'),
    children: [
      {
        path: '',
        name: 'articleContent',
        component: () => import('../views/ArticleContent.vue'),
      }, 
      {
        path: 'articleDetails',
        name: 'articleDetails',
        component: () => import('../views/ArticleDetails.vue')
      }
    ]
  },
  {
    path: '/headVideo',
    name: 'headVideo',
    component: () => import('../views/HeadVideo.vue'),
    children: [
      {
        path: '',
        name: 'introduce',
        meta: {
          title: '青'
        },
        component: () => import('../components/headVideo/Introduce.vue'),
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('../components/headVideo/Comment.vue'),
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('../components/headVideo/Recommend.vue'),
      },
    ]
  },
  {
    path: '/else',
    name: 'else',
    meta: {
      title: '紫'
    },
    component: () => import('../views/Else.vue'),
    children: [
      {
        path: 'perComment',
        name: 'perComment',
        component: () => import('../views/PerComment.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/News.vue'),
        children: [
          {
            path: '',
            name: 'systemNews',
            component: () => import('../components/news/SystemNews.vue'),
          },
          {
            path: 'elseNews',
            name: 'elseNews',
            component: () => import('../components/news/ElseNews.vue'),
          },
        ]
      },
    ]
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '莫得页面'
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
