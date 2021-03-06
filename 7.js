// function log(x, y = "world" ) {
//     console.log(x,y);

// }
// log('Hello')
// log('Hello','china')
// 函数的length属性

// 指定默认值，length属性失真

// 设置可参数默认值，会形成独立作用域,有实参是实参,无便指向外层,不会往里走

// let x = 2; 
// function f(y = x) {
//     console.log(x);
    
//     console.log(y);
// }

// f()


// function add(...values) {
//     let sum = 0;
//     console.log(values);
    
//     for (var val of values) {
//       sum += val;
//       console.log(sum);
//     }
  
//     return sum;
//   }
  
//   add(2, 5, 3)


// rest函数只能放在参数末尾，length属性对它无效



// console.log( {} == false);

// const numbers = (...values) => values.unshift(6);
// console.log(numbers(1,2,3,4,5))
 
/**箭头函数 注意点*/
// 1. this指向定义时的对象，
// 2. 不可new
// 3. 不可用arguments ， 可用rest参数
// 4. 不可yield

// 箭头函数没有this
// 对象的属性建议按传统方法来，否则易出错


/**尾递归 */

// function digui(n,total) {
//     console.log(total);
//     if(n === 1) return total;
//     return digui(n-1,n*total);
// }
// digui(5,1)


// function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
//     console.log(ac2);
//     if( n <= 1 ) {return ac2};
  
//     return Fibonacci2 (n - 1, ac2, ac1 + ac2);
//   }
//   Fibonacci2(5)



// function factorial(n, total = 1) {
//     console.log(total);
//     console.log(n);
    
//     if (n === 1) return total;
//     return factorial(n - 1, n * total);
//   }
  
//   factorial(5)


