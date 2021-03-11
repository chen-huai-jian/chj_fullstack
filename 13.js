/***Set 和 Map */

// 1. set 基本用法
// 数组去重
// const array = [1,2,3,4,3,2,3]
// const demo01 =  [...new Set(array)]

// console.log(demo01);
// // 字符串去重
// const demo02 = [...new Set('hehheheh')].join('')
// console.log(demo02);


// set 中NAN是相等的  注意！！  空对象是不等的


/**Set实例的属性和方法 */

//  constructor  size返回Set实例的成员总数

// add(value)  添加某个值
// delete(value)  删除某个值，返回布尔值，表示是否删除成功
// has(value) 返回布尔值，表示是否为Set的成员
// clear() 清楚所有的成员，没有返回值

// Array.from() 可以将Set结构转为数组

// Set结构没有键名只有键值，所以keys方法与values方法的行为完全一致


// let a = new Set([1,2,3,4])
// let b = new Set([4,5,6])

// let union = Array.from(new Set([...a, ...b]))
// console.log(union);



/**WeakSet */

// 成员只能是对象，不能是其他类型的值

// 和WeakMap一样吗、，不可遍历

// 可以new 创建WeakSet数据结构

// WeakSet 三种方法  add , delete , value
// 无size 属性，不可遍历

/****Map */

// 实例的属性和方法

// size 属性
// Map.prototyoe.set   set方法设置键名key对应的键值为value

// let map = new Map()
//   .set(1, 'a')
//   .set(2, 'b')
//   .set(3, 'c');

//   console.log(map);

// console.log([...map]);

// console.log([...map.keys()]);

// console.log([...map.entries()]);

// console.log([...map.values()]);


// Map.prototype.get(key)

// Map.prototype.has(key) 

// Map.prototype.delete(key)

// Map.prototype.clear()

/**与其他数据结构的互相转换 */

// 1. Map 转为数组，， 用扩展运算符

// 2. 数组 转为 Map

// 3. Map 转为 对象

// 4. 对象转为Map

// 5. Map 转为JSON

// 6. JSON 转为Map


/**WeakMap */

// 只接受对象作为键名(null) 除外， 不接受其他类型的值作为键名

// 四个方法可用  get() , set() , has() , delete()


// 应用 1. DOM节点作为键名 2. 部署私有属性


