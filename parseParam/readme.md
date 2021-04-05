http://localhost:8080?a=1&b=2&c=3&a=4&keyword=%E6%89%8B%E6%9C%BA

1. {} 收集url 中所有的数据  
2. ？ split()
3. = 切割一下
4. {} key:value
5. a  出现过两次 ？ 
6. keyword  是一个被编码过后的， 中文


- 围绕着URL 的考题有很多
   1. 从输入url到看到页面，发生了什么？  越详细越好
   2. 跨域  协议: 域名/路径/"端口?  查询字符串组成
   3. http/https  http2  区别
   4. 如何解析查询字符串为对象

- 如何解析查询字符串为对象 
   1. ？ 后面的查询字符

   ```js
   /.+\?(.+)$/.exec(url)[0];
   ```

   正则？(.+) 匹配的单元， 
   \?  转义  
   exec 执行这个正则表达式  $1  就是结果  [0]

- 切割= 后形成的key:value  使用es6 的数据解构  很nice
   当然之前使用 test 来验证正确性也是OK的
   1. a= 1 ,a=4 两项  被覆盖?  a=[1,4]
      ```js
         // if(key in paramsObj)   // 老土
         if (paramsObj.hasOwnProperty(key)) {
            paramsObj[key] = [].concat(paramsObj[key], val);
            // 有图有真相  [].concat 可以把两个值拼接组成数组 
            ![]() 
         } else {
            paramsObj[key] = val;
         } 
      ```
   2. decode  keyword中文会被编码  需要解码过程 

- 解析查询参数的过程  有几个规则  
   值都需要decode  重复出现的key组成数据，只有key没有值的 默认为 true；

- 想去名企， 做总结，写文章，讨论  

