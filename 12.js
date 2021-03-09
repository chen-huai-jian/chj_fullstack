/**Symbol */

// 第七种数据类型

// Symbol 函数不可new



/**Symbol.prototype.description */


// 实例属性  description    返回Symbol 的描述
// const sym = Symbol('foo');

// console.log(sym.description);  // foo


/**作为属性名的 Symbol */


// let mySymbol = Symbol();

// // 第一种写法
// let a = {};
// a[mySymbol] = 'Hello!';

// // 第二种写法
// let a = {
//   [mySymbol]: 'Hello!'
// };

// // 第三种写法
// let a = {};
// Object.defineProperty(a, mySymbol, { value: 'Hello!' });


// 对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。

/**实例：消除魔术字符串 */




/**属性名的遍历 */


//Symbol 作为属性名，遍历对象的时候，该属性不会出现在
// for...in、for...of循环中，也不会被Object.keys()、
// Object.getOwnPropertyNames()、JSON.stringify()返回。


// Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。

// Reflect.ownKeys()方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。



/**Symbol.for()，Symbol.keyFor() */

//Symbol.for()为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行


/**内置的 Symbol 值  */

// 1. Symbol.hasInstance 其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法
// 2. Symbol.isConcatSpreadable  等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。

// 3.Symbol.species属性，指向一个构造函数。

// 4. Symbol.match属性，指向一个函数。执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
// 5. Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。

// 6.Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。

// 7.Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。

// 8.Symbol.iterator属性，指向该对象的默认遍历器方法。

// 9.Symbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。

// 10. Symbol.toStringTag属性，指向一个方法。
// 在该对象上面调用Object.prototype.toString方法时，
// 如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。
// 可以用来定制[object Object]或[object Array]中object后面的那个字符串。

// 11. Symbol.unscopables属性，指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除。