// // symbol
// // ES6 引入的新的原始数据类型Symbol ， 表示独一无二的值
// var sym1 = Symbol();
// var sym2 = Symbol('foo');
// var sym3 = Symbol('foo');
// console.log(sym2 == sym3);
// console.log(typeof sym1); // symbol

// // 1. 函数来创建， 原始数据类型  冲突的地方？  如何说明  函数用法上有什么区别
// // new Symbol();  // Symbol is not a constructor
// // 变量都是要分配内存空间的， 原始数据类型   找分配
// // 引用类型  堆
// // Symbol (字符串)？ 有何用？  做一个标识
// console.log(sym3.toString());

// // 2. Symbol 到底有何用？
// // 

// const {triangle} = require('cli-spinners')

var mySymbol = Symbol() // 初始化

var shapeType = { // 形状的类型  json object 
    triangle: 'Triangle', // 三角形
    square: 'Square' // 正方形
}

function getArea(shape, options) {
    var area = 0;
    switch (shape) {
        case shapeType.triangle:
            area = 0.5 * options.width * options.height;
            break;
        case shapeType.square:
            area = options.width * options.height;
            break;
    }
    return area;
}
console.log(getArea(shapeType.triangle, {
    width: 100,
    height: 100
}))

