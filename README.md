面试的时候，可以吹水，

后端的node/api开发，restful
一切皆资源， 资源的状态转换，名词，不同的http动词来对应
但是，restful 虽然现在还是主流，已经有了代替方案，更高前端数据需求的Graphql来了
resyful 代码不太行， 代码洁癖

1. 将使用egg.js + mysql CRUD 做出来  RESUful /users  用户列表
  - mysql 驱动  plugins 非常好， 
  - mysql2 更方便我们驱动mysql
    sequelize cli 从生成表到数据迁移- > model 合成 
2. egg.js + graphql 做的更漂亮

- 以插件及配置的方式， 将sql的操作交给了sequelize 来处理
- 数据库创建
- 数据库迁移，建表，加种子数据，都不需要写sql
  加速，我们要会数据库，但是还是交给专业的数据库工程师DBA
  sequelize 可以让我们更加规范数据库的操作流程，且更加简单，
- sequelize-cli 规范数据库迁移的工作  
  命令行工具，写命令

- 数据库开发的时候，建表  加点假数据  模型文件  MVC 
  sequelize 规范  migrations  一切操作留下痕迹，以后有没有加字段，为什么要加  git 一样留下版本

- sequelize 有几步
  init:config 初始化得到配置文件
  init:migrations migratios 文件夹
  --name=init-users  数据库迁移， 加表，加字段 
  只要复制，创建表只要写  JSON 就可以


