created by xhf at 2021-03-09

# 技术选型

1、使用什么脚手架？@vue/cli
2、用什么框架？vue
3、使用什么UI组件库？vant
4、使用什么css预编译器？sass
5、用什么状态管理工具？vuex
6、用什么路由？vue-router
7、采用什么的CSS布局？rem


# 学习（实战）目标

1、把过去知识融会贯通、扎实基础
2、熟悉移动端开发的特点、注意事项、积累经验


# rem布局

在移动端写布局尺寸，不能使用px做单位。

px    绝对单位
em    相对单位，相对于最近的父级元素的font-size
rem   root em，相对于根节点的
```
<html>
  <body style='fx:30px'>
    <div style='fz:10px'>
      <div >
        <div style='width:2rem;'></div>
        <div style='width:2em;'></div>
      </div>
    </div>
  </body>
</html>
```
rem布局原理：实际上就是等比缩放。
具体怎么实现呢？
每次项目运行时，用js代码获取当前屏幕的总宽度width（单位是px）
手动地把html这个DOM根节点的font-size属性修改成 width/10
那么请问：当一个元素的宽度等于 5rem 时，请问元素宽度占屏幕的多少？
vscode中安装一个px转化rem的插件（配置一个基准比例），以后写代码可以自动地把px单位转化成rem单位。

# vant-ui组件库的安装

* cnpm i vant -S
* 配置babel.config.js 并重启项目
* 在main.js中导入组件，使用Vue.use()注入组件

# 项目总结

1、项目技术栈？（Vue/VueRouter/Vuex/Sass/Vant/Echart/百度地图）
2、负责哪些功能模块？（购物车模块、商品信息模块、个人中心、订单管理模块）
3、移动端性能方案优化？（代码角度、静态资源文件加速、Webpack）
4、SEO优化有哪些策略？（原则：把能静态化尽量静态化）
5、项目有什么难点和亮点？
6、项目总结与思考


# 【首页滚动条位置保留实现】

* 第1步：给 .qf-home 添加 position 定位
```
.qf-home {
  // 用于支持页面的scroll事件
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  padding-bottom: 1.6rem;
}
```
* 第2步：给 <div class='qf-home'> 绑定scroll事件
```
<div class='qf-home' @scroll='top=$event.srcElement.scrollTop'>
```
```
data() {
  return {
    top: 0    // 记录滚动条的滚动位置
  }
}
```
* 第3步：当页面再次被激活时，手动地（Ref操作）把页面滚动到上一次被记录的位置
```
activated() {
  console.log('home activated')
  // 给页面 <div class='qf-home' ref='home'>
  this.$refs.home.scrollTop = this.top
},
```
