- react 入门学习

1. 父子传值
    - 创建子组件，父组件引入
    - 在父组件的jsx中引入组件，标签上写上属性
    - 子组件的jsx中 this.props.属性 即传值成功
2. 调用父组件的方法
    - 父组件的标签上定义好  方法名字并绑定父组件中的方法  deleteItem={this.deleteItem.bind(this)}
    - 子组件标签绑定好事件名  onClick={this.handleClick}
    - 子组件方法中获取  this.props.deleteItem(this.props.index)

3. 单向数据流
    - 父组件传递的数据， 子组件只能使用，不能修改
    - 若要改变，就要调用父组件的方法来修改

4. PropTypes 校验
    - 子组件中进行
    - 首先子组件import 引入下  import PropTypes from 'prop-types';
    - 组件名.protypes = {传过来的所有数据类型}
    - 注意小驼峰与大驼峰
        - PropTypes.element 确保传递给组件中的children中只包含一个元素
        - defaultProps 定义默认值

5. ref 
    - 操作dom

6. 生命周期函数
    - constructor 构造函数，是es6的语法，不是react 的
    - componentWillMount  挂载虚拟dom之前，调用的
    - render  组件挂载中  state 或 props 改变就会自动执行
    - componentDidMount   组件挂载完成

    - shouldComponentUpdate  组件更新时，， 注意要返回一个布尔值才有效
    - componentWillUpdate   
    - componentDidUpdate  
    
    - 子组件才有用
    - componentWillReceiveProps  组件第一次存在于DOm 中，函数是不会被执行的，存在于dom 中，才会被执行
    - componentWillUnmount  组件将要被删除