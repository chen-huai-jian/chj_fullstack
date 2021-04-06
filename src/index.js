import { createElement, render, renderDOM } from './element';
import {diff} from './diff'
// DOM  ->  VIrtualDOM
// 内存之中创建  模拟真实dom的层次， 节点，属性， 子节点
// 树 递归的概念  最后节点是文本节点时， 就退出
// 相同的操作 1. 创建结点  2. 设置属性 3. 子节点

{
   /* <ul class="list">
   <li class="item">白敬亭</li>
   <li class="item">婷婷</li>
</ul>; */
}
// DOM 树的表达转换形式  递归  每一部分都有三个参数（标签，属性，子节点）
let virtualDOM = createElement(
   'ul',
   {
      class: 'list',
   },
   [
      createElement(
         'li',
         {
            class: 'item',
         },
         ['白敬亭']
      ),
      createElement(
         'li',
         {
            class: 'item',
         },
         ['婷婷']
      ),
   ]
);

// console.log(virtualDOM);
let el = render(virtualDOM);
console.log(el);

let virtualDOM2 = createElement(
   'ul',
   {
      class: 'list-group',
   },
   [
      createElement(
         'li',
         {
            class: 'item active',
         },
         ['七里香']
      ),
      createElement(
         'li',
         {
            class: 'item active',
         },
         ['七千年以后']
      ),
      createElement(
         'li',
         {
            class: 'item active',
         },
         ['菊花台']
      ),
   ]
);

renderDOM(el, document.getElementById('root'));
//补丁
let patches = diff(virtualDOM, virtualDOM2);
console.log(patches);