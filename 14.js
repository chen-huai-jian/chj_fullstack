/**Proxy 用于修改某些操作的默认行为 */

// 作为构造函数，Proxy接收两个参数

var proxy = new Proxy(target, handler);

// new Proxy()表示生成一个Proxy实例，
// target参数表示所要拦截的目标对象，
// handler参数也是一个对象，用来定制拦截行为。
// 

/* Proxy 支持的拦截操作 */


// get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
// set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
// has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
// deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
// ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
// getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
// defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
// preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
// getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
// isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
// setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
// apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
// construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。


/**Proxy 实例的方法 */

// get() 用于拦截某个属性的读取属性

// set() 用来拦截某个属性的赋值操作，可以接受四个参数 依次为目标对象，属性名，属性值，Proxy实例本身(可选)

// apply() 方法拦截函数的调用，call和apply , 接收三个参数，分别目标对象，目标对象的上下文对象（this ） 和目标对象的参数数组

// has() 方法接收两个参数，分别为目标对象和需查询的属性名。

// constructor() 拦截new命令， 三个参数(target:目标对象，args：构造函数的参数数组，newTarget：创造实例对象是，new命令作用的构造函数)

// deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。

// defineProperty()方法拦截了Object.defineProperty()操作。

// getOwnPropertyDescriptor()方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined。


/**getPrototypeOf()方法主要用来拦截获取对象原型。具体来说，拦截下面这些操作。
        *Object.prototype.__proto__
        *Object.prototype.isPrototypeOf()
        *Object.getPrototypeOf()
        *Reflect.getPrototypeOf()
        *instanceof*/


// isExtensible()方法拦截Object.isExtensible()操作。

/**ownKeys()方法用来拦截对象自身属性的读取操作。具体来说，拦截以下操作。
        Object.getOwnPropertyNames()
        Object.getOwnPropertySymbols()
        Object.keys()
        for...in循环
 */


// preventExtensions()方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。


// setPrototypeOf()方法主要用来拦截Object.setPrototypeOf()方法。

// Proxy.revocable()方法返回一个可取消的 Proxy 实例。

// 