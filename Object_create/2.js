// Object.create 返回一个新对象
// 抽象
const person = {
    isHuman : false,
    printIntroduction: function(){
        console.log('My name is ${this.name} Am I huamn ? ${this.isHuman}');
    }
}
function create (proto){
    function F() {}
    F.prototype = proto;
    return new F();
}

const me = create(person);
console.log(me.__proto__ == person);