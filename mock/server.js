var app = require('koa')();
var router = require('koa-router')();

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    console.log('首页 —— 广告（超值特惠）')
    this.body = homeAdData;
});

// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
