restful 的替代品
来自于 facebook 良心出品的查询方案 2015 年

json-server
缺点？
基于 restful 的概念， 一切皆资源
url + action
db.json 资源中心
./results list 请求到了

数据库里， 还是 db.json 一起被查出来， select \*
多好多我们不要的数据， select name， sex from user
基础上， 设计了 graphql 查询设计语言

1.  你要什么，设计查询方案，就得到什么
2.  合并传统后端在那些数据的时候要连 n 张表进行查询，一次就够了

- 启动 graphql
  1.  express
  2.  加入 graphql 中间件， 每次查询 graphql 都会介入
      graphqlHTTP playload
  3.  schema hero + rootValue
      就有了
  4.  graphql 可以省去很多的请求浪费
  5.  前端可以自己决定用那些字段
