<template>
<!-- 注：要给 .qf-home 加上绝对定位 -->
<div
  class="qf-home"
  @scroll='top=$event.srcElement.scrollTop'
  ref='home'>

  <!-- 下拉刷新功能是van-pull-refresh给的 -->
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

    <!-- 通知栏 -->
    <van-notice-bar
      left-icon="volume-o"
      :scrollable="false"
      background='#232326'
      color='#ffffff'
      mode="closeable"
    >
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
        <van-swipe-item>五一优惠活动</van-swipe-item>
        <van-swipe-item>六一优惠活动</van-swipe-item>
        <van-swipe-item>七一优惠活动</van-swipe-item>
      </van-swipe>
    </van-notice-bar>

    <!-- 搜索 -->
    <van-search
      shape="round"
      background="#CD2525"
      :placeholder="tip"
      show-action
      disabled
    >
      <template #action>
        <div class="login" @click="skipToLogin">登录</div>
      </template>
      <template #left>
        <img :src="$img.searchIcon" alt="">
      </template>
    </van-search>

    <!-- 轮播图 start -->
    <van-swipe
      class="qf-swipe"
      :autoplay="3000"
      indicator-color='#CD2525'
    >
      <van-swipe-item v-for="item in images" :key="item.id">
        <img v-lazy="item.src" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 start -->

    <!-- 商品列表 start -->
    <div class="good-list">
      <!-- 触底加载是van-list提供的功能 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check='false'
      >
        <div class="row" v-for='i in rowLen' :key='i'>
          <GoodItem :good='goodArr[2*i-2] || {}' />
          <GoodItem :good='goodArr[2*i-1] || {}' />
        </div>
      </van-list>
    </div><!-- 商品列表 end -->

  </van-pull-refresh>
  <QfTabbar />
</div>
</template>

<script>

import {
  QfTabbar,
  GoodItem
} from '@/components'

export default {
  name: 'Home',
  components: {
    QfTabbar,
    GoodItem
  },
  data() {
    return {
      tips: [
        { id: 1, text: '金龙鱼调和油' },
        { id: 2, text: '云南白药' },
        { id: 3, text: '华为手机' }
      ],
      images: [
        { id: 1, desc: '广告', src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/167622/11/1190/261481/5ff5425aE6ee25504/4efef6d28e9c3d03.jpg!cr_1125x445_0_171!q70.jpg.dpg' },
        { id: 2, desc: '广告', src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/157384/34/10243/142483/603fc3d1Ece893dc5/d5d3cff3622655e3.jpg!q70.jpg.dpg' },
        { id: 3, desc: '广告', src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166065/15/9078/107572/6040a3f6Eb03d9c78/5d4fbf3ecd501912.jpg!cr_1125x445_0_171!q70.jpg.dpg'}
      ],
      goodArr: [],
      refreshing: false, // 在下拉过程中它是true，当它是true时无法进行第二次下拉
      loading: false, // 当滚动条抵达小于offset时它是true，当它是true时无法进行第二次触底
      finished: false, // 当后端返回的商品列表为空，没有数据时
      page: 1,
      top: 0       // 用户实时记录滚动条的位置
    }
  },
  computed: {
    tip() {
      return this.tips[Math.floor(Math.random()*3)].text
    },
    // 用goodArr长度的一半，来循环一行一行的商品
    rowLen() {
      return Math.floor(this.goodArr.length/2)
    }
  },
  mounted() {
    this.init()
  },
  activated() {
    console.log('home activated')
    // 当页面再次被激活时，手动地（Ref操作）把页面滚动到上一次被记录的位置
    this.$refs.home.scrollTop = this.top
  },
  deactivated() {
    console.log('home deactivated')
  },
  methods: {
    init() {
      const params = {
        size: 6,
        page: this.page
      }
      this.$api.fetchGoodList(params).then(res=>{
        console.log('商品列表', res)
        // 触底加载，把得到的新数组合并到旧数组中
        if (this.page===1) {
          this.goodArr = res.list
          // 解决“下拉刷新”不回弹的问题
          this.refreshing = false
          // 数据库又有数据了
          this.finished = false
        } else {
          this.goodArr = [...this.goodArr, ...res.list]
          // 解决触底加载第二次不起作用的问题
          this.loading = false
          // 提示数据库没有符合要求的数据了
          if(this.goodArr.length>=res.total) this.finished = true
        }
      })
    },
    skipToLogin() {
      // this.$router.push('/login')
    },
    // 当下拉刷新时触发
    onRefresh() {
      console.log('触发下拉刷新')
      this.page = 1
      this.init()
    },
    // 当滚动条抵达指定位置时触
    onLoad() {
      console.log('触底了，准备调下一页的数据')
      this.page++
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-home {
  // 用于支持页面的scroll事件
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  padding-bottom: 1.6rem;
  .notice-swipe {
    height: .53rem;
    line-height: .53rem;
  }
  .login {
    color: white;
  }
  .qf-swipe.van-swipe {
    height: 3.87rem;
    width: 9.33rem;
    margin: .13rem auto;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: .27rem;
    }
  }
  .good-list {
    .row {
      display: flex;
      box-sizing: border-box;
      padding: 0 .13rem;
    }
  }
}
</style>
