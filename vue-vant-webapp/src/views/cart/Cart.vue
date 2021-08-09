<template>
<div class="qf-cart">

  <QfNavbar title="购物车">
    <template>
      <van-icon name="search" size="18" />
    </template>
  </QfNavbar>

  <NoData :show='isNull' />

  <!-- 购物车列表 -->
  <div v-show='list.length>0'>
    <van-swipe-cell v-for='(item, index) in list' :key='item._id'>
      <van-row type='flex' align='center'>
        <!-- 这是每一行的checkbox -->
        <van-col span="4">
          <van-checkbox v-model="item.checked" @click='rowClick' />
        </van-col>
        <van-col span="20">
          <van-card
            :num="item.num"
            :price="item.good && item.good.price"
            :desc="item.good && item.good.desc"
            :title="item.good && item.good.name"
            class="goods-card"
            :thumb="$img.baseImg+(item.good && item.good.img)"
          >
            <template #footer>
              <van-button @click='changeNum(item,index, false)' size="mini">-</van-button>
              <van-button @click='changeNum(item,index, true)' size="mini">+</van-button>
            </template>
          </van-card>
        </van-col>
      </van-row>
      <!-- 删除 -->
      <template #right>
        <van-button
          @click='delConfirm(item,index)'
          square
          text="删除"
          type="danger"
          class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>


  <!-- 提交栏 -->
  <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit">
    <!-- 这是全选的checkbox -->
    <van-checkbox v-model="full" @click='fullClick'>全选</van-checkbox>
    <template #tip>
      <div class="addr">
        <div v-if='addr.length>0'>
          <span v-text='defAddr.receiver'></span>
          ：
          <span v-text='defAddr.addr'></span>
          <span class="upd-addr" @touchstart='skipToAddr'>修改默认地址>></span>
        </div>
        <div v-else>
          <span>你还没有添加地址，</span>
          <a @touchstart.prevent='skipToAddr'>请添加地址</a>
        </div>
      </div>
    </template>
  </van-submit-bar>
</div>
</template>

<script>
import { QfNavbar, NoData } from '@/components'
export default {
  name: 'Cart',
  data() {
    return {
      full: false,
      list: [],
      addr: [],   // 地址
      isNull: false
    }
  },
  components: {
    QfNavbar,
    NoData
  },
  computed: {
    total() {
      let t = 0
      this.list.map(ele=>{
        if(ele.checked) t += ele.num*ele.good.price*100
      })
      return t
    },
    defAddr() {
      // 筛选出当前用户的默认地址
      return this.addr.find(ele=>ele.primary)
    }
  },
  // 使用监听器，虽然好用，但也要小心
  // 1、如果监听是复杂的引用数据，有可能无法监听
  // 2、如果多个声明式变量或计算属性，形成了彼此依赖的关系，监听器可能也没有办法
  watch: {
    // list() {},
    // full() {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$api.fetchCartList({}).then(res=>{
        this.list = res.list || []
        this.addr = res.addr
        this.isNull = (this.list.length===0)
        // 当重新init时，都要回归到false(不全选)
        this.full = false
      })
    },
    isFull() {
      // 用于控制“全选”按钮的状态
      let count = 0
      this.list.map(ele=>{
        if(ele.checked) count++
      })
      this.full = this.list.length === count
      if(count===0) this.init()
    },
    // 点击“每行的checkbox”时
    rowClick() {
      this.isFull()
    },
    // 点击“全选按钮checkobx”时
    fullClick() {
      this.list.map((ele,idx)=>{
        this.list[idx].checked = this.full
      })
      // this.$forceUpdate()
      this.list = JSON.parse(JSON.stringify(this.list))
    },
    delConfirm(item,index) {
      this.$dialog.confirm({
        title: '警告',
        message: `你确定要删除${item.good.name}吗？`
      }).then(()=>{
        // 调接口、删除商品
        const params = {
          id: item._id
        }
        this.$api.fetchCartDel(params).then(()=>{
          // 删除成功
          // this.init()
          this.list.splice(index, 1)
          this.isFull()
        })
      })
    },
    changeNum(item,index,flag) {
      if(!flag && item.num===1) {
        return this.$dialog.alert({
          title: '警告',
          message: '不能等于0'
        })
      }
      const data = {
        id: item._id,
        num: flag ? ++item.num : --item.num
      }
      this.$api.fetchCartUpdate(data).then(()=>{
        // this.list[index].num++
        console.log('数据更新成功')
      })
    },
    onSubmit() {
      // 提交购物车
      let ids = ''
      this.list.map(ele=>{
        if(ele.checked) ids+=(';'+ele._id)
      })
      const data = {
        ids,
        addr_id: this.defAddr._id   // 是地址的_id
      }
      if(!ids) {
        return this.$dialog.alert({
          title: '警告',
          message: '请选择要提交的商品'
        })
      }
      // 如果没有默认地址，要求用户选择默认地址
      if(!this.defAddr) {
        return this.$dialog.alert({
          title: '警告',
          message: '请添加默认地址'
        })
      }
      this.$api.fetchCartSubmit(data).then(()=>{
        this.init()
      })
    },
    skipToAddr() {
      this.$router.push('/user/addr')
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-cart {
  padding-bottom: 2rem;
  .delete-button {
    height: 100%;
  }
  .van-card {
    background: white;
    padding-left: 0;
  }
  .van-swipe-cell {
    background-color: white;
    border-bottom: 1px solid #eee;
  }
  .van-button {
    padding: .07rem .2rem;
  }
  .addr {
    vertical-align: middle;
    overflow: hidden;
    .van-checkbox.pri {
      display: inline-block;
    }
    span {
      display: inline-block;
      line-height: 1.07rem;
      padding-left: .11rem;
    }
    span.upd-addr {
      float: right;
    }
  }
}
</style>
