<template>
  <div class="app">
    <router-view></router-view>
    <keep-alive>
      <router-view name='alive'></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route(to, from) {
      console.log('to', to)
      console.log('from', from)
    }
  }
}
</script>

<style lang='scss'>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(247, 247, 247, 1);
}
.app {
  height: 100%;
  width: 100%;
}
[v-cloak] {
  display: none;
}

// 解决购物车checkbox左右居中问题
.van-checkbox {
  text-align: center;
}
.van-checkbox__icon {
  margin: 0 auto;
}
</style>
