# 首页react实战， 可学之处

- loading 组件打造过程
   页面状态， 要在列表(空/ API 后有)， 加一个loading状态
   1. reducer 中加一个enterLoading true
      action CHANGE_ENTER_LOADING
   2. 请求列表时，改成false 

   3. loading使用styled-component + animation-delay 打造方法
   4. ？：显示与不显示

   - 列表的打造
      1. 数据源