# 当你在浏览器输入了一个Url 后， 看到页面前发生了什么？


# 当你有了一台服务器后， 可以干什么？
    docker 一台物理主机，虚拟出来很多的云服务器
    - IP
        192.168.0.78   ？  提供什么服务？  可以看到网页呢？
        浏览器域名或IP 地址访问，https  www.baidu.com  -> ip
        centOS  7.6   ?  web  服务器,
        Nginx  是一个高性能的HTTp 和反向代理的web服务器

- putty 远程 ssh 连接 华为云服务器
    root  password
- web 服务   Nginx  安装
    安装Nginx的依赖






    yum -y install gcc  gcc-c++ autoconf pcre-devel make automake
    yum -y install wget httpd-tools vim
    yum list
    yum list | grep nginx  
    yum install nginx  下载nginx
    nginx -v    查看版本
    nginx 启动服务器
    ps aux | grep nginx 
    nginx -s stop  关闭