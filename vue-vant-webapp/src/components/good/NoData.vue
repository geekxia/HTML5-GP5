<template>
<div class="qf-no-data" v-show='show'>
  <img
    :style='[{width:width+"px", height: width+"px"}]'
    :src="$img.noData" />
  <div>暂无数据</div>
</div>
</template>

<script>
export default {
  props: {
    width: { type: Number, required: false, default: 120 },
    show: { type: Boolean, required: false, default: false }
  }
}
</script>

<style lang="scss" scoped>
.qf-no-data {
  width: 50%;
  margin: .33rem auto;
  text-align: center;
  color: #666;
  line-height: .8rem;
  font-size: .51rem;
  &>img {
    display: block;
    margin: 0 auto;
  }

}
</style>
