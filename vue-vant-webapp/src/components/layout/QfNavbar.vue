<template>
<div class="qf-navbar">
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    @click-left='back'
    left-arrow>
    <template #right>
      <slot></slot>
    </template>
  </van-nav-bar>
</div>
</template>

<script>
export default {
  props: {
    title: { type:String, required: false, default: '标题' },
    leftText: { type: String, required: false, default: '' }
  },
  methods: {
    back() {
      this.$emit('back')  // 可以支持父组件传递一个字定义方法 back
      this.$router.back()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
