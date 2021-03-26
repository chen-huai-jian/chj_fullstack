// app的创建以及基本配置
// es6 -> module typescript => js
import express from 'express';
import postRouter from '../post/post.router'
import {defaultErrorHandler} from './app.middleware'
const app = express();
const bodyParser = require("body-parser");
// app 处于伺服状态  eventEmitter
// body 处理要加中间件  bodyParser 专门打理表单
app.use(bodyParser.urlencoded());

// 中间件来打理
// 所有的路由在这里汇总
app.use(
   // 文章模块的路由
   postRouter,
   // 用户路由  
   //  ...  
)
// 处理各种错误  
app.use(defaultErrorHandler);

export default app;