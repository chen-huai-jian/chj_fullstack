/**属性的简洁表示法 */

// 简写对象的方法不能用于构造函数



/**属性名表达式 */

// ES6 允许字面量定义对象时 ，表达式放在方括号内

// let obj = {
//     ['h' + 'ello']() {
//         return 'hi';
//     }
// };
// console.log(obj.hello());

/// 注意  属性名表达式 与 简洁表达式不可同时使用 ， 否则报错

/// 注意  属性名如果是一个对象，默认会自动转为字符串[Object Object]

// const keyA = {a:1}
// const keyB = {b : 1};
// const myObject = {
//     [keyA] : 'valueA',
//     [keyB] : 'valueB'
// }
// console.log(myObject);


/**方法的name属性 */


/**属性的可枚举性和遍历 */

/**属性的遍历
 * （1）for...in

for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

（2）Object.keys(obj)

Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

（3）Object.getOwnPropertyNames(obj)

Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

（4）Object.getOwnPropertySymbols(obj)

Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

（5）Reflect.ownKeys(obj)

Reflect.ownKeys返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
 */

/**super 关键字 */

// super 关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错



/**对象的扩展运算符 */

// 解构赋值是浅拷贝
// 扩展运算符的解构赋值，不能继承自原型对象的属性



/***链判断运算符 ?. */

// 使用?. 判断左侧是否为undefined 和 null ，如果是，就不运算了，返回undefined


// 注意 ， 短路机制
// 注意， 不可new，右侧不能有模板字符串,左侧不能为super，不可用于 赋值运算符左侧



/**null 判断运算符 ?? */