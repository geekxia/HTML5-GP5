<template>
<div>
  <div>
    <input type="text" v-model='word' @keyup.enter='search("search")' />
    <button @click='search("prev")'>上一页</button>
    <button @click='search("next")'>下一页</button>
  </div>

  <div v-for='item in list' :key='item.id' class="row">
    <div
    v-text='item.name'
    @click='skipToDetail(item.id)'
    ></div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      word: '张杰',
      page: 1
    }
  },
  computed: {
    ...mapState('test', ['username']),
    ...mapState('music', ['list'])
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions('music', ['emitGetMusicList']),
    init() {
      const str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=63624623361564309&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E6%9D%B0&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
      // api.fetchQqList({})
      // this.$api.fetchQqList({})
      var params = {}
      str.split('&').map(ele=>{
        const arr = ele.split('=')
        params[arr[0]] = arr[1]
      })
      // params.w = decodeURI(params.w)
      params.w = this.word
      params.p = this.page
      this.emitGetMusicList(params)
    },
    search(arg) {
      switch (arg) {
        case "search":
          this.page = 1
          break
        case "next":
          this.page++
          break
        case "prev":
          if(this.page===1) {
            alert("已经是第一页")
          } else {
            this.page--
          }
          break
        default:
      }
      // 触发
      this.init()
    },
    skipToDetail(id) {
      // 【编程式路由】
      // 1-使用path字段进行跳转
      this.$router.push('/find/detail/'+id)
      // 2-使用alias别名进行跳转
      // this.$router.push('/fd')
      // 3-使用name命名路由进行跳转
      // this.$router.push({name: 'fd'})

      // <router-link to='/find/detail'></router-link>
      // <router-link :to='{alias:"/fd"}'></router-link>
      // <router-link :to="{ name: 'fd'}"></router-link>
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  text-align: center;
  line-height: 45px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
</style>
