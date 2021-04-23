
const { h } = require('snabbdom')
// 返回VNode 比html字符串有什么好处？
{/* <div id="app"></div> 前端才生成组件  蜘蛛是拿不到内容的 */}
// 性能 
// HTML VNode 内存 对象 ssr 放进服务器端渲染  React Native App 开发成为可能  
// 只渲染成html 的话只是前端   返回的是虚拟节点的话，就扩大了服务端的能力，会提升SEO，Virtual DOM 可以做各种开发， 
const MyComponent = props => {
  return h('h1', props.title, [
    h('span', {style: {fontWeight: 'bold'}}, 'This is blod')
  ]) 
}

console.log(MyComponent({ title:'hello'}));