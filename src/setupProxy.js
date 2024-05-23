const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log("프록시 설정 파일이 로드되었습니다.");

  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8000",
      changeOrigin: true,
    })
  );

  app.use(
    "/api2",
    createProxyMiddleware({
      target: "https://openapi.naver.com",
      changeOrigin: true,
    })
  );
};
