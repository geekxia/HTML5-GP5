<template>
<div class="qf-good-detail">
  <QfNavbar :title="good.name" />
  <div class="info">
    <img :src="$img.baseImg+good.img" alt="">
    <div>
      <span v-text='good.name'></span>
      <span v-text='good.desc'></span>
    </div>
    <div v-cloak>{{good.price|rmb}}</div>
  </div>

  <!-- 加入购物车 -->
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
    <van-goods-action-icon icon="cart-o" text="购物车" />
    <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
    <van-goods-action-button type="warning" text="加入购物车" @click='addToCart' />
    <van-goods-action-button type="danger" text="立即败家" />
  </van-goods-action>
</div>
</template>

<script>

import { QfNavbar } from '@/components'

export default {
  data() {
    return {
      good: {}
    }
  },
  components: {
    QfNavbar
  },
  mounted() {
    // 取出动态路由中的路由参数
    const params = {
      id: this.$route.params.id
    }
    this.$api.fetchGoodDetail(params).then(res=>{
      console.log('商品详情', res)
      this.good = res
    })

  },
  methods: {
    addToCart() {
      // 验证是否已登录
      if(this.$verify.verifyToken()) {
        // 表单数据验证
        // 提交接口
        const data = {
          num: 1,
          id: this.good._id
        }
        this.$api.fetchAddToCart(data).then(res=>{
          console.log('加入购物车', res)
          this.$router.push('/cart')
        })
      }else{
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-good-detail {
  .info {
    padding: .33rem;
    box-sizing: border-box;
    font-size: .45rem;
    line-height: .6rem;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
