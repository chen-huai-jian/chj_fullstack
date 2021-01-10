# 字节h5面试题之Drap and Drap
 良好的用户体验
1. 基础要扎实  ，体现在细节，能力增长的梯度
2. 比较复杂的特效


## github 拖拽上传功能

1. 给要拖拽的元素，加一个draggable
    为了让鼠标更真实，加一个 cursor :move

2. 拖拽元素显示在上空
3. drag 有三个事件，
    JS 在前端是基于事件的语言  Event 机制  495
    on + 495  DOM Event level
    - dragstart
    - drag
    - dragend

     drop 异步
     - dragenter  开始进入 border dashed
        classList.add
     - dragover   多次
     - leave 离开  classList.remove

     drap + drop 良好用户真体验模拟的API 比较复杂
     draggable = true  属性
     dragstart drag dragend
     dragenter dragover dragleave + drop 
     阻止默认行为，evetn.preventDefault()
     oFom  submit  

作业：请完成拖回去

   