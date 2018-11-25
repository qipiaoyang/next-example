### next.js 7.0服务端渲染demo

node版本： 10.0.0

yarn版本： 1.10.1

#### 安装启动
首先保证node版本是 10.0.0，然后我推荐大家使用yarn来安装依赖

```
	git clone https://github.com/qipiaoyang/next-example.git
	cd next-example
	yarn install
	yarn run dev ||  yarn run dev -p 80  //保证我们端口号是80端口
```

#### 打包部署

部署之前我们需要先通过 yarn run build 来进行打包，然后通过pm2来管理启动server.js

因为可能需要pm2来启动多个服务，所以这里我可以通过ecosystem.config.js来进行多项目多进程的配置

并且通过端口号以及环境变量来区分不同的项目，__注意，使用pm2启动node服务，尽量保证多个进程,单个进程服务cpu容易爆__
```
yarn run build
npm install pm2 -g
pm2 start
```

#### 目录结构

```
├─components	项目的共用组件
├─config	项目的配置文件
├─model	Model层
├─pages	各个页面存放的文件夹
├─service	service层
├─static	静态资源文件夹
├─styles	样式文件夹
│      index.less
│      _base.less
├─utils	工具类(request是封装的前端请求，withRmatch封装的redux中间件)
│      request.js
│      withRematch.js
├─babelrc	babel配置文件夹
├─ecosystem.config	pm2配置文件夹
├─next.config	next配置文件夹
├─package.json								
├─server.js	node服务启动文件
└─README
```