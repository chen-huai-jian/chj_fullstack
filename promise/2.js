// exector 执行器的实现
// 状态转移
// 如何让执行器决定状态转移的处理
class Promise {
   constructor(exector) {
      this.state = 'pending'; // 初始化未完成状态
      // 成功的值
      this.value = undefined;
      // 失败的原因
      this.reason = undefined;
      // 异步任务会把 结果交给resolve 
      let resolve = (value) => {
         console.log(value, '--------')
         if (this.state == 'pending') {
            console.log('fulfilled 状态被执行');
            this.value = value;
            this.state = 'fulfilled';
         }
      };
      let reject = (reason) => {
         if (this.state == 'pending') {
            console.log('reject 状态被执行');
            this.state = 'rejected';
            this.reason = reason;
         }
      };
      try {
         exector(resolve, reject);
      } catch(err) {
         reject(err)
      }
   }
   // then(){}
}

new Promise((resolve, reject) => {
   // 将花时间比较多的任务封装起来，已实现异步变同步
   setTimeout(() => {
   //    console.log(0);
      resolve(10);
      // throw new Error('出错了');
   }, 1000);
});

