# 跨域 
   - 后端的跨域解决方案
   - JSONP json with padding
      https://photo.sina.cn/aj/index?page=1&cate=recommend
      同源机制 你不可以跨域



   1. 通过script  src 跨域  向sina 发出请求  http
      规避了js代码xhr   fetch 同源机制限制
      JSON  JS  代码能够使用 
   2. &callback = callback  //paddiing
      sina在页面上有一个callback的函数等待你的地调用  
      ；callback({"data":[{"a":}]})
   3. callback({})  JSON + padding 

   xhr/fetch  因运行在沙箱中的js同源机制 无法请求跨域sina 资源
   迂回到使用script标签 src属性 有跨域  资源的能力  http请求中带上&callback=callback 这个padding,
   sina 服务器就在json数据外面包一层callback函数，将这个带有padding的，可以在script得到后运行的函数，
   页面已准备好了这个函数，从而效果一样。 
