- 图片性能优化  ，我们想到了什么？ 减少http数，lazyload  throttle
    - 编解码   40kb
    data:img/jpg;base64, 文件头  base64 编码格式   /gj/文件内容
    Google 大量使用base64 格式，减少请求数， 是 最严重的页面性能的地方


    1. 网页性能优化
        - 精灵图片的优化技术    多张图（小图片， icon）合并到一张图去
            减少http请求
        - 历史  lazyload  scroll  +  API   ，减少一些执行次数  throttle
        - 现在有   base64  把发送请求的机会都没了   不是所有图片
            衡量，小一点的图片
            ？ 哪种方法 把图片展示
        - 大图的话，特别是头图， banner 图， 商品详情页的图片
            可以在 webp 格式下 减少20% 以下 ，而且 清晰度不受损，+ lazyload


- js 多线程的苗头   worker  推出有一段时间了， 但是没有成为主流
    是单线程，但是有多线程的能力    
    new Worker('js 文件')  单独运行，不会阻塞主线程
    - 有哪些事情不能做
    1. 跟dom 相关的事情不能做 
        js 是css/HTML 的第三者 
        worker 不能和主线程同时操作同一个元素
        








            npm init -y
            npm i webp-converter
            node .\index.js