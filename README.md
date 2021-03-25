- umijs  阿里当家开发框架
  antd 组件库

- 约定优先
  pages 
  .umirc.ts 配置

- 自动生成代码
  yarn add @umijs/preset-ui -D
  .umirc.ts {
    dva:{},
    antd:{}
  }
  .env
  UMI_UI=1

- 未来是很多人一起做开发,
  可能使用同样的类名， 再类名后产生一个随机数




npx @umijs/create-umi-app
yarn
yarn add @umijs/preset-ui -D
