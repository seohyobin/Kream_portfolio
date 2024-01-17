const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (WrapComponent) => {

  WrapComponent.use(
    "/JSP",
    createProxyMiddleware({
      "target":"http://janeseo0530.cafe24.com",
      changeOrigin: true
    })
  )
  WrapComponent.use(
    "/kream",
    createProxyMiddleware({
      "target":"http://janeseo0530.cafe24.com",
      changeOrigin: true
    })
  )
  

}