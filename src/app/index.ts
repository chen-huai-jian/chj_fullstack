// 返回一个app
// require common.js  
// ts  es6 模块化没有任何问题 
import express from 'express'; //  es6
// 引入路由模块
import postRouter from '../post/post.router';
const app = express();
// 启用一个中间件 资源在哪里  
app.use(
   postRouter  /* 文章路由 */
)

export default app;

