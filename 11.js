/**Object.is() */

// 与 === 类似，存在两个不同，
// console.log(+0 === -0);

// console.log(NaN === NaN);

// console.log(Object.is( +0 , -0))
// console.log(Object.is( NaN, NaN))


/**Object.assign() */
// 用于对象的合并
// 第一个参数是 目标对象，后面的都是源对象


// 注意， 如果有同名属性，将会覆盖

// 参数不是对象，会转成对象， 转不来会报错， 例如null 和 undefined ， null 与 undefined 不在首参数会跳过

// 其他类型， 除了字符串会以数组的形式拷入对象，其他都没效果

// 属性名为 Symbol 值的属性，也会被Object.assign()拷贝。

// 注意 1. 浅拷贝   2. 同名属性 是替换 而不是添加 3. 数组的处理  4. 取值函数的处理


// 用途 1. 为对象添加属性，2. 为对象添加方法，3. 克隆对象 4. 合并对象 5. 为属性 指定默认值


/**Object.getOwnPropertyDescriptors() */

// 返回某个对象属性的描述对象（descriptor)



/**__proto__,Object.setPrototypeOf(),Object.getPrototypeOf() */

// 使用下面的Object.setPrototypeOf()（写操作）、
// Object.getPrototypeOf()（读操作）、
// Object.create()（生成操作）代替。


/**Object.keys()，Object.values()，Object.entries() */

// const obj = { foo: 'bar', baz: 42 };

// console.log(Object.values(obj));



/**Object.fromEntries()  */

// 将键值对的数据结构转为对象


