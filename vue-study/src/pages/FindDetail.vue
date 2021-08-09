<template>
<div class="detail">
  <h1>我是商品详情页</h1>
  <!-- <h1>我的商品ID是：<span v-text='id'></span></h1> -->
  <h1>我的商品ID是-<span v-text='$route.params.id'></span></h1>

</div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted() {
    console.log('$route', this.$route)
    console.log('props id', this.id)
    // 使用id调接口，获取更加完整的商品详情
  }
}
</script>

<style lang="scss" scoped>
.detail {
  line-height: 80px;
  text-align: center;
}
</style>
