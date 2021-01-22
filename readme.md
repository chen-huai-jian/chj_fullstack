# 史上最强工作流套件  webpack  企业级开发套件
完整的通知整个开发流程



1. parcel    webpack
    parcel  约定    index.html 默认以作为入口   .styl  .ts
    webpack   入口   js 文件  entry  output

    一个企业级开发传送带
    富士康  
    webpack 编译的


    entry -> module (css | jsx? | png | vue)   ->  output   





    npm init -y
    npm i webpack
    npm i webpack-dev-server    // webpack  一样的功能，拿到  
    webpack.config.js           // 配置     http dev server  
    npm install -D webpack-cli
    npm run build

    "build": "webpack --mode=develoment"
    "build": "webpack --mode=production"    让代码更干净


    npm i -D style-loader
    npm i -D css-loader
    npm run build