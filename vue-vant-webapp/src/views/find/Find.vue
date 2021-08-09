<template>
<div class="qf-find">

  <div class="left">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        v-for='item in cateArr'
        :key='item._id'
        :title="item.cate_zh"
      />
    </van-sidebar>
  </div>

  <div class="right">
    <!-- 当没有数据时 -->
    <NoData :width='80' :show='inNull' />
    <!-- 有数据时 -->
    <van-grid column-num='3' :border='false'>
      <van-grid-item
        v-for='item in cache[activeKey]'
        :key='item._id'
      >
        <template>
          <div class="f-grid-item">
            <img :src="$img.baseImg+item.img" alt=""/>
            <div v-text='item.name'></div>
          </div>
        </template>
      </van-grid-item>
    </van-grid>
  </div>

  <QfTabbar />
</div>
</template>

<script>
import { QfTabbar, NoData } from '@/components'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Find',
  components: {
    QfTabbar,
    NoData
  },
  data: ()=>({
    activeKey: 0,
    cateArr: []
  }),
  computed: {
    ...mapState('good', ['cache']),
    payload() {
      // 给actions方法使用
      return {
        k: this.activeKey,
        cate: this.cateArr[this.activeKey].cate
      }
    },
    inNull() {
      // 判断每次activeKey变化时，后端是否有返回数据
      // 当没有数据时，显示 NoData 组件
      const arr = this.cache[this.activeKey]
      return arr && arr.length===0 // undefined、false、true
    }
  },
  watch: {
    activeKey() {
      // const params = { cate: this.cateArr[this.activeKey].cate }
      // this.$api.fetchGoodList(params).then(res=>{
      //   this.goodArr = res.list
      // })
      // 当左右品类发生变化时：
      // 我要判断vuex中的cache是否有对应的缓存数据？
      if(!this.cache[this.activeKey]) {
        // 如果没有，再触发actions调接口
        // const payload = {
        //   k: this.activeKey,
        //   cate: this.cateArr[this.activeKey].cate
        // }
        this.getGoodsOfCate(this.payload)
      }
      // 如果有，直接取出来使用
    }
  },
  // 在async函数中，必须用到await关键字
  // 把两个异步任务，变成有先后顺序的同步任务
  mounted() {
    // 【使用vuex做缓存的写法】
    // const res = await this.$api.fetchCates({})
    // this.cateArr = res.list
    // this.getGoodsOfCate(this.payload)

    // 【不使用vuex做缓存的写法】
    // const params = { cate: this.cateArr[0].cate }
    // this.$api.fetchGoodList(params).then(res=>{
    //   console.log('当前品类下的商品列表', res)
    //   this.goodArr = res.list
    // })
    // const payload = {
    //   k: this.activeKey,
    //   cate: this.cateArr[this.activeKey].cate
    // }
  },
  async activated() {
    const res = await this.$api.fetchCates({})
    this.cateArr = res.list
    // const params = { cate: this.cateArr[0].cate }
    // this.$api.fetchGoodList(params).then(res=>{
    //   console.log('当前品类下的商品列表', res)
    //   this.goodArr = res.list
    // })
    // const payload = {
    //   k: this.activeKey,
    //   cate: this.cateArr[this.activeKey].cate
    // }
    this.getGoodsOfCate(this.payload)
  },
  deactivated() {
    this.clearCache()
  },
  methods: {
    ...mapActions('good', ['getGoodsOfCate']),
    ...mapMutations('good', ['clearCache'])
  },
  beforeDestroy() {
    // 使用matutions方法清缓存
    this.clearCache()
  }
}
</script>

<style lang="scss" scoped>

$w: 2.13rem;

.qf-find {
  position: relative;
  width: 100%;
  height: 100%;
  .left {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 1.6rem;
    width: $w;
    overflow-y: auto;
    overflow-x: hidden;
    .van-sidebar-item--select {
      color: red;
    }
    .van-sidebar-item--select::before {
      width: 0;
      height: 0;
    }
  }
  .right {
    position: absolute;
    left: $w;
    top: 0;
    bottom: 1.6rem;
    right: 0;
    overflow: auto;
    background-color: white;
    .f-grid-item {
      img {
        display: block;
        margin: 0 auto;
        width: 1.87rem;
        height: 1.87rem;
      }
      font-size: .32rem;
      text-align: center;
      color: #333333;
    }
  }
}
</style>
