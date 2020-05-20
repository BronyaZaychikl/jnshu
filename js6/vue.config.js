module.exports = {
    devServer: {
        proxy: {
            '/api': {    // search为转发路径
                target: 'http://dev.admin.carrots.ptteng.com/',  // 目标地址
                ws: true, // 是否代理websockets
                changeOrigin: true ,  // 设置同源  默认false，是否需要改变原始主机头为目标URL, 
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }              
            }
        }
    }
};
// module.exports = {
//     devServer: {
//         open: true,
//         host: 'localhost',
//         port: 8080,
//         https: false,
//         //以上的ip和端口是我们本机的;下面为需要跨域的
//         proxy: {//配置跨域
//             '/api': {
//                 target: 'http://dev.admin.carrots.ptteng.com/',//这里后台的地址模拟的;应该填写你们真实的后台接口
//                 ws: true,
//                 changOrigin: true,//允许跨域
//                 pathRewrite: {
//                     '^/api': ''//请求的时候使用这个api就可以
//                 }
//             }
            
//         }
//     }
// }