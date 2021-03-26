-  全栈 node + ts
   BATJTMD GO
- 数据库  
   端口通信  3306-》 3000
   node fs http  比较复杂  慢 

- MVC
   数据库 -> modle  ->  Controller -> Router(API) 
   post  
   someone -> http -> req(url) -> router -> controller -> Model -> mysql2(mysql的驱动，相当于翻译官)



- posts add 
   controller -> restful  路径
   mysql  post /posts
   - router 在哪里？ 迎宾  
   - controller  
   - model  service  彩礼

- 单点入口 

CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

- mysql 先建表 在操作  关系型数据库   sql
   mongodb 先上车   后补票  NOSQL  json  








   npm init -y
   yarn add typescript tsc-watch
   yarn add express @type/express

   "dev": "tsc-watch --onSuccess \"node dist/main.js\""

   安装 dotenv  .env 文件为了安全，不会上传到github上 , 应用的配置文件 