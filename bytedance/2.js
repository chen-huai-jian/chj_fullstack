// 不要追求完美,上岸就好
// 写好类似leetcode 函数，测试用例 ， 期待的答案
// 提供36 为的表达
function getNums36 () {
  var nums36 = [];
  for (var i = 0; i < 36; i++){
    if (i >= 0 && i <= 9) {
      nums36.push(i)
    } else {
      nums36.push(String.fromCharCode(i+87))
    }
  }
  console.log(nums36);
  return nums36;
}
function scale36 (n) {
  const arr = [];
  var nums36 = getNums36();
  while (n) {
    // 动态
    var res = n % 36;
    console.log(res,'++++++');
    arr.unshift(nums36[res]);
    // 进位
    n = parseInt(n / 36);
    console.log(n ,'------');
  }
  return arr 
  // 单独的功能函数  
  // 36 进制数  0-9 a-f   36  ->  a-z

}
console.log(scale36(37)); // 10