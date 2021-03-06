/**扩展运算符 */


// 1. 展开数组
// 2. 复制数组
// 3. 合并数组
// 4. 将字符串转为真正的数组



/**Array.from() */


// 将类数组 与 可遍历的对象  变为数组


// let demo = Array.from([1,2,3].map( x => (x * x) ))
// console.log(demo);

// let demo1 = [1,2,3];
// console.log(demo1.forEach(element => {
//    element = element + 11  
// }));


/**Array.of() */

// 1. 将一组值转为数组


// console.log(Array.from());
// console.log(Array.of("123"));

/**find() findIndex() */

// 第一个参数为 回调函数，可放三个参数

// 第二个参数 用来绑定this对象

/**fill()方法 */

// 填充的作用
// 三个参数，一 填充的值， 二 从哪位开始 三 在这位之前


/**includes() */
// Map 结构的has方法，是用来查找键名的，
    // 比如Map.prototype.has(key) 、
    // WeakMap.prototype.has(key) 、
    // Reflect.has(target, propertyKey) 。
// Set 结构的has方法，是用来查找值的，
    // 比如Set.prototype.has(value) 、
    // WeakSet.prototype.has(value) 。

/**flat()  */

// 将嵌套数组 拉平， 二维变一维数组
// 将子数组提取 放在原本的位置
// 默认只会拉一层，可以在()里规定拉几层 : flat(2)两层
// let demo = [1,2,3,[2,3,[5,6,7]]].flat(1)
// console.log(demo);

// 若不知道几层，但是要变成一维数组，可以用infinity作为参数


/**数组的空位 */
//  空位的值为undefined 