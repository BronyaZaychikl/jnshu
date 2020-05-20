"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = '/api/'

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control检查跨站点访问控制
};

const _axios = axios.create(config);
// 拦截请求
_axios.interceptors.request.use(
  config=> {   
     // Do something before request is sent在发出请求前做点什么
    // console.log(config);
    // let t = cookies.get('t')
    // if (t) {
    //   config.headers.t = t
    // } else {
    //   router.replace({path: '/login'})
    // }
    return config;
  },
 error=>{
    // Do something with request error处理请求错误
    return Promise.reject(error);
  }
);

// Add a response interceptor添加响应拦截器
// 即拦截响应
_axios.interceptors.response.use(
  response=> {
    // Do something with response data处理响应数据
    // console.log(response)
    return response;
  },
  error=> {
    // Do something with response error处理响应错误
    // console.log(err);
    // if (err.response) {
    //   switch (err.response.status) {
    //     case 401:
    //       // 这里写清除token的代码
    //       router.replace({
    //         path: 'login',
    //         query: {redirect: router.currentRoute.fullPath} // 登录成功后跳入浏览的当前页面
    //       })
    //   }
    // }
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
