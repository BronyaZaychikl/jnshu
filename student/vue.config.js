module.exports = {
    devServer: {
        proxy: {
            '/api': {    // search为转发路径
                target: 'http://39.105.38.138:8080/',  // 目标地址
                ws: true, // 是否代理websockets
                changeOrigin: true ,  // 设置同源  默认false，是否需要改变原始主机头为目标URL, 
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }              
            }
        }
    },
    publicPath: './',
};