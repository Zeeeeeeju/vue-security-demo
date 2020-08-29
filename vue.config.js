module.exports = {
    devServer: {
        host: 'localhost',
        port: 8081,
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}