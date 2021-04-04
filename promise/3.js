// exector 执行器的实现
// 状态转移
// thenable
// 如何让执行器决定状态转移的处理
class Promise {
   constructor(exector) {
      this.state = 'pending'; // 初始化未完成状态
      // 成功的值
      this.value = undefined;
      // 失败的原因
      this.reason = undefined;
      // 异步任务会把 结果交给resolve
      this.onRejectedCallbacks = [];
      this.onResolvedCallbacks = [];
      let resolve = value => {
         // console.log(value, '--------');
         if (this.state == 'pending') {
            console.log('fulfilled 状态被执行');
            this.value = value;
            this.state = 'fulfilled';
            // onfulFilled 执行一下?  记忆
            this.onResolvedCallbacks.forEach(fn => fn())
         }
      };
      let reject = reason => {
         if (this.state == 'pending') {
            console.log('reject 状态被执行');
            this.state = 'rejected';
            this.reason = reason;
            this.onRejectedCallbacks.forEach(fn => fn())
         }
      };
      try {
         exector(resolve, reject);
      } catch (err) {
         reject(err);
      }
   }
   // 当前promise解决了，完成了状态转移，把控制权交出来
   then (onFulfilled, onRejected) {
      console.log('then的方法');
      // 状态为fulfilled时， 传入成功后的回调， 将执行权转移
      if (this.state == 'fulfilled') {
         console.log('onFulfilled,------');
         onFulfilled(this.value);
      }
      // 状态为rejected 时，传入失败的回调
      if (this.state == 'rejected') {
         onRejected(this.reason)
      }
      // 定义一个数组进行状态转移
      if (this.state == 'pending') {
         this.onResolvedCallbacks.push(() => {
            onFulfilled(this.value)
         })
         this.onRejectedCallbacks.push(() => {
            onRejected(this.reason)
         })
      }
   }
}

new Promise((resolve, reject) => {
   // 将花时间比较多的任务封装起来，已实现异步变同步
   setTimeout(() => {
      //    console.log(0);
      resolve(10);
      // throw new Error('出错了');
   }, 1000);
}).then( data => {  // then方法同步执行，状态还没转移
   console.log(data,'++++++');
});
