
- 围绕着name 状态 两个组件开发实现 
    App 父组件   状态 name: defaultUserName
    <!-- this.state = { // Component 
        name: 'defaultUserName'
    } -->
    // react 16 魔法函数 方便   this.  this.setState........
    setName 相当于this.setState({})
    const [name, setName] = React.useState('defaultUserName') 

- react-router  @types/
/about
<Switch>
    path="/" exact
    path="/about"
    path="/about/:id"

    exact 完全一样

- 大型项目的边写风格
    compoentns 提供  index.tsx
    文档一样， 把这个目录的所有组件向外
    输出

- webpack 的优化
    1. entry 可以有多个入口
        引入的文件都可以打包到最后的output中
    2. bootstrap 引入是通过webpack 引入的 
        index.html app.tsx 不用引入
    3. vendor [router, react, react-router-dom]
        lib 不用反复编译， 
        组件是会变的
        不用反复去打包 lib,而业务每次都要打包

- react-router 路由的嵌套
    分级   两级到三级
    / -> Header Route / App   {props.children}
        / Albums   专辑页   Switch  只匹配一个
            / Albums/:id  某人专辑

- 应用的API 统一放在api/ 目录下













npm init -y
npm i webpack --save-dev
手动指定 webpack-cli 3.3.12 版本
npm i
npm i webpack-dev-server --save-dev
npm install css-loader style-loader file-loader url-loader html-webpack-plugin awesome-typescript-loader mini-css-extract-plugin --save-dev
npm i typescript --save-dev
npm install @babel/cli @babel/core @babel/preset-env @babel/polyfill —save-dev
babel-loader 版本也有问题 手动下
npm install babel-loader --save-dev

npm run start 

npm run build  打包生成dist文件
