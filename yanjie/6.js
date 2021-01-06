function duplicateCount(text){
    var str = text.toLowerCase().split('').sort().join(' ');
    //请得到所有的数字
    // var word = '123-4560-666';
    // /\d+/  正则  判断字符串是佛符合规则
    // console.log(/\d+/.test(word));
    // console.log(word.match(/\d+/g));
    // 相邻的字符是一样的，
    //  \d 数字 [a-z] 取值范围
    // \n  之前匹配到的第几个小组
    // ([a-z])\1   相同的字符   (产生第一组)=>  RegExp.$1
    // var arr = str.match(/(.)\1+/g);
    console.log(str);
    // return arr.length;
}
console.log(duplicateCount('9824167456'));
console.log('aaa')