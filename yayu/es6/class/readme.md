- es6 class 与 es5 构造函数 + prototype 有什么关联?
    语法糖  那些？ 

- babel babel  的使命就来了
    es6 class 不停的更新，每个版本的意义
    node 10  node 15 
    运行的环境就不一样
    babel 负责
    js 的运行环境太复杂了， 不是单纯的Chrome， IE ，360 ， QQ，支持不同的版本，node 的不同版本， 怎么办？
    babel 解决这些，写出来的



- 一线公司问 ？
    Es6 class 关键字实现除了刚刚讲的，有什么不一样的地方吗？
    - ES6 class 构造函数在constructor上
        - 只能被new，不能作为普通函数执行
        - 如果要你去设计的话？ 怎么实现呢?
        - Person.prototype 不可枚举
            Object.keys()
            Object.getOwnpropertyNames() 可调用
        - ES6 还有比ES5 实现更丰富的地方
            - ES6 里声明的属性的时候有个高级的写法?
        - 手写一个babel  手写es6 的转义代码
            babel 也是可以写出来的

1. babel js 转义器   帮助 ES6 class => es5 function