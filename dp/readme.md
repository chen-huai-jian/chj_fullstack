算法中的最大占比动态规划  DP

思想， 建立感性认识， 具象去学习， 抽象不好学习

- 爬楼梯， 
   n阶楼梯 
   一阶或两阶   不同的方法到楼顶
   2. 两种 
   3. 3 f(1) + f(2)

   买一本小册， 记忆一些算法细节  geektime  算法
   自顶向下问题， 划分成子问题来解决的话， 树状结构， 请使用递归

两个关键特征
   1. 要求你给给出达成某个目的的解法个数
   2. 不要求给出每种算法对应的具体路径

   1. 定位到问题的终点， n阶台阶的走法 
   2. 站在这个终点，去考虑之前要做什么  
      
      
      还原了树状结构
      f(n)= f(n-1) + f(n+1)  // 顶部
      
- 有什么问题？ 

   递归
   1. 问题细化后解决方式类似，以树状结构自顶向下设计， 找到递归公式
   2. 要有退出条件
   3. 需要优化？ 用空间换时间

- 自顶向下解决问题的时候，那是动态规划  先记忆， 很难把握
   站在已知的角度上， 通过定位已知和未知的关系，一步步向前推导，求出未知的量

   读题 正确的想法  DP  最简单的DP 

   n = 1  n = 2 
   n = 3 , 3 
   n = 4 , 5 
   ,,  n?  1->n 循环

   n = 1, n=2 , i=3 -> n , 公司很明确， f(n)= f(n-1) + f(n-2)


- 动态规划是递归的下一站  
   1. 自下向上
   2. 发现公式， 基于递归  ，来找到规律，
      状态转移公式 
   之所以我们会放弃使用动态规划，选择递归来解决，是应为有些状态转移不明显


   不同面额的coins 和一个总金额  amount

   coins = [1,2,5]  amount =11;
   所需的最小银币个数
   动态 ？ 动态的思考解决方式， 最佳？
   最值的问题，一般是用DP 来解决

   自顶向下思考一下   
   11 ？ 最少的硬币数 
   上一次有多少钱 
   6   9  10 

   Math.min( f(n-5), f(n-2), f(n-1) ) +1
