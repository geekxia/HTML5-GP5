(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[812],{7812:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});var u=n(9301);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=a(n);return t=o?(t=a(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==r(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var o=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(r,u.Component);var t,e,n,o=i(r);function r(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(t=o.call(this,t)).state={count:1,num:1},console.log("----------------constructor"),t}return t=r,n=[{key:"getDerivedStateFromProps",value:function(){return console.log("--------------getDerivedStateFromProps"),null}}],(e=[{key:"componentDidMount",value:function(){console.log("----------------componentDidMount")}},{key:"shouldComponentUpdate",value:function(t,e){var n=this.state.count;return console.log("----------------shouldComponentUpdate"),e.count!==n}},{key:"componentDidUpdate",value:function(){var t=this;console.log("----------------componentDidUpdate"),this.state.count<10&&setTimeout(function(){t.setState(function(t){return{count:t.count+1}})},1e3)}},{key:"componentWillUnmount",value:function(){console.log("----------------componentWillUnmount")}},{key:"render",value:function(){var t=this,e=this.state.count;return console.log("----------------render"),u.createElement(u.Fragment,null,[u.createElement("div",{key:1},u.createElement("h1",null,"测试生命周期(1)")),u.createElement("div",{key:2},u.createElement("h1",null,"测试生命周期(2)")),"hello world"],u.createElement("h1",null,e),u.createElement("button",{onClick:function(){return t.setState(function(t){return{count:t.count+1}})}},"自增Count"),u.createElement("button",{onClick:function(){return t.setState(function(t){return{num:t.num+1}})}},"自增Num"),u.createElement("hr",null),u.createElement("h1",null,this.props.test))}}])&&c(t.prototype,e),n&&c(t,n),r}()}}]);