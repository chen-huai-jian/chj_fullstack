# js 常考考点

- 要加一个用户怎么办

    ES6 / 红宝书 / 你不知道的JavaScript  LeetCode
    单线程的语言，数据通信相关的  vue/react  不学
1. npm init -y
2. npm i json-server
    来个命令行，怎么 启动db.json成后台数据源？
    http server    3000/users  db.json  做为数据源
    提供出来访问  后台准备好了
    http GET http://localhost:3000/uers     users[]
    POST  保存表单  name -> http://localhost:3000/uers
3. db.json  数据文件
    json 是js前端和后端通信的数据文件
- promise  五星  异步

- postman 可以用来做http访问代理
    POST  那是再方便不过

- 前端 + 后端
    live-server   http 前端服务
    json-server 后端数据  3000
    前端和后端要数据通信 怎么做？
    前端拉取后端的数据

    get 3000   /users
    post 3000 /users 

- ajax 的表达一下
    js最重要的考点 XMLHttpRequest
    1. 是历史性的突破 ,带来前端主动请求数据的能力，微博Ajax应用
        前端更主动， ajax + DOM  页面变得丰富，动态
    2. http://localhost:3000/users  一切皆资源  Restfull
        数据资源 GET path / users 请求动作 []
        POST 新增的 / users {name : "王嘉新"}
    3. XMLHttpRequest   ActiveXObject("Microsoft.XMLHTTP")
        但是这叫浏览器的嗅探  if  else 
        let httpRequest ;  http 协议  Request Response
        - 创建好对象
        - .open('GET','http://localhost:3000/users',true) 打开一个请求通道
            .send()  这个请求真的就发送了
            .onreadystatechange
            XMLHttpRequest.Done 完成了
            JSON.parse(httpRequest.responseText)   返回的数据
            json 数组 -> html 数组 map `<li>${user.id} - ${user.name}</li> `).join('')
                                        
                                   


                npm init -y
                npm i json-server
                npm run server:json   //运行端口
                json-server --watch db.json