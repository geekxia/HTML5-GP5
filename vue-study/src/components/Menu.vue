<template>
<div class="qf-menu">
  <!-- 声明式路由 -->
  <span v-for='nav in routes' :key='nav.id'>
    <router-link
      v-text='nav.text'
      :to='nav.path'
      tag='span'
      exact-active-class='on'
      v-if='nav.isNav'
      exact
    >
    </router-link>
  </span>

</div>
</template>

<script>
import { routes } from '../router.js'

export default {
  data() {
    return {
      routes: routes.filter(ele=>ele.isNav)
    }
  }
}
</script>
<style lang="scss" scoped>
.qf-menu {
  display: flex;
  &>span {
    flex: 1;
    text-align: center;
    line-height: 45px;
    border: 1px solid #ccc;
    cursor: pointer;
    &>span{
      display: block;
      width: 100%;
      height: 100%;
    }
    &>span.on{
      background-color: orange;
      color: white;
    }
  }
}
</style>
