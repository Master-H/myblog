
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');
const route = require('koa-route');
const  bodyParser = require('koa-bodyparser');
const { PORT } = process.env;
const serverPort = PORT ? PORT : 8088;

const main = serve('../umits/dist');
const get = ctx => {
  ctx.response.body = {
    method:'get'
  }
};
const post = ctx => {
  console.log('ctx.request.body',ctx.request.body);
  ctx.response.body = {
    method:'post'
  }
};

app.use(bodyParser());
app.use(main);
app.use(route.get('/get', get));
app.use(route.post('/post', post));

app.listen(serverPort,() =>{
  console.log(`当前服务：122.51.96.112 域名：www.hxyblog.com `);
});
