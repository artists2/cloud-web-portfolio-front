const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/auth', {
            target: 'http://localhost:9001',
            changeOrigin: true
        })
    );
};

