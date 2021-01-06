const dogs = new Map();
const friends = new Map();
friends.set('黄志乾','华灯初上');
friends.set('何江涛','鸡毛');

// 遍历它 key value
friends.forEach((key,val)=> console.log(val,key))
for (const [key,val] of friends){
    console.log(key,val);
}

const [a,b] = [1,2];
// const {} = {"a":1,"b":2 };//?
console.log(a,b);