<template>
  <div class='qf'>

    <Menu />

    <!-- 用于承载url所匹配成功时对应的Vue组件 -->
    <!-- 命名视图：就是给 <router-view> 加个名字 -->
    <router-view></router-view>
    <div v-show='$route.path==="/home"' class="container">
      <div>
        <router-view name='map'></router-view>
      </div>
      <div>
        <router-view name='video'></router-view>
      </div>
      <div>
        <router-view name='echart'></router-view>
      </div>
      <div>
        <router-view name='canvas'></router-view>
      </div>
    </div>


  </div>
</template>

<script>

import Menu from './components/Menu.vue'

export default {
  components: {
    Menu
  },
  watch: {
    $route() {
      console.log('路由发生了变化')
    }
  },
  mounted() {
    console.log('$route', this.$route)
    console.log('$router', this.$router)
  }
}
</script>

<style lang='scss'>
html,body{padding: 0;margin: 0;}
.container {
  position: absolute;
  top: 45px;
  left: 0;
  bottom: 0;
  right: 0;
  &>div {
    border: 1px solid #ccc;
  }
  &>div:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    right: 50%;
    bottom: 50%;
  }
  &>div:nth-child(2) {
    position: absolute;
    top: 0;
    left: 50%;
    right: 0;
    bottom: 50%;
  }
  &>div:nth-child(3) {
    position: absolute;
    top: 50%;
    left: 0;
    right: 50%;
    bottom: 0;
  }
  &>div:nth-child(4) {
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
  }
}
</style>
