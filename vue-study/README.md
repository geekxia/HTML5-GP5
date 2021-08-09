# 环境

* 安装node.js，建议安装 v12
```
node -v
npm -v
```
* 安装[淘宝镜像](https://cnpmjs.org/)
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
* 安装脚手架
```
cnpm install @vue/cli
```
* 创建Vue项目
```
vue create vue-study
cd vue-study
npm run serve
```
* 如果项目丢包了、跑不起来了，怎么办？
```
# 先删除所有 node_modules 包
cnpm install
```

## 路由

```
cnpm install vue-router -S
# -S 表示安装成功，将其记录在package.json
```
* Vue.use(VueRouter)
* new VueRouter({routes: [{path, component}]})
* 在main.js中，使用router选项挂载路由
* 在App.vue中使用 <router-view>来显示匹配成功的组件
* 把这三个问题想明白了，你就知道vue-router怎么安装？
  * 一条一条路由规则是如何定义的？常用字段path/component
  * 在Vue项目中，有哪些方式可以改变url？（两种方式）
  * 当url发生变化，它所匹配对应的Vue组件，放在哪里进行显示呢？（<router-view>）

## 状态管理

* Vue技术栈中，几乎都是使用Vuex这个强大的状态管理工具。
* 如何理解状态管理？什么是状态呢？在应用程序中，所谓“状态”就是数据。
* 应用程序中，为什么要使用状态管理工具？因为现代化的互联网产品，基本上都是由动态数据组成的，数据复杂且庞大，我们需要科学地高效地管理这些数据，以提高代码的可维护性。
* Vuex，它是基于Flux数据架构思想而来的。
* Vuex，不是Vue架构中必须的，你可以不使用。但是，Vuex是数据管理的终极解决方案。
* Vuex在工作中具体有哪些作用呢？1、任何组件之间的数据共享；2、用于数据缓存。


## devtools的安装

* 下载别人打包好的devtools：GitHub地址打开，大家可以下载我代码中的vue-devtools文件夹。
* 解压，放在电脑硬盘上的任意地方。
* 打开谷歌浏览器->设置->扩展程序->打开“开发者模式”->加载已解压的扩展程序->选择你刚刚下载的devtools文件包
* 关闭浏览器，重新打开浏览器，在浏览器右上角的“扩展程序”中即可看到devtools图标。
