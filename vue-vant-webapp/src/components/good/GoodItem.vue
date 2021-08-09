<template>
<div class="qf-good-item">
  <img :src='$img.baseImg+good.img' alt="" @touchstart='skipToDetail'>
  <div class="info">
    <span v-if='good.self'>[京]</span>
    <span v-text='good.name'></span>
  </div>
  <div class="bottom">
    <span>￥</span>
    <span v-text='good.price'></span>
    <span v-if='isSimilar'>看相似</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    good: { type: Object, required: true },
    isSimilar: { type: Boolean, required: false, default: false }
  },
  methods: {
    skipToDetail() {
      this.$router.push('/good/detail/'+this.good._id)
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-good-item {
  flex: 1;
  height: 7.07rem;
  border-radius: .21rem;
  overflow: hidden;
  background: white;
  margin: .13rem;
  &>img {
    display: block;
    height: 4.67rem;
    width: 100%;
  }
  &>.info {
    line-height: .53rem;
    height: 1.07rem;
    color: #1a1a1a;
    font-size: .35rem;
    padding: .11rem;
  }
  &>.bottom {
    font-size: .43rem;
    padding: .11rem;
  }
}
</style>
