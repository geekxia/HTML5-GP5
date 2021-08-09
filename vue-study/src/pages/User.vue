<template>
<div class="user">
  <div class="tabs">
    <router-link
      tag='span'
      to='/user/article'
      exact-active-class='on'
    >
      我的作品
    </router-link>
    <router-link
      tag='span'
      to='/user/collection'
      exact-active-class='on'
    >
      我的收藏
    </router-link>
  </div>
  <router-view></router-view>
  <h1>
    <span>我的</span>
    <span v-text='username'></span>
    <br>
    <input type="text" v-model='newName'>
    <button @click='changeUserName'>改变用户名</button>
    <br>
    <button @click='changeUserNameAsync'>调接口修改用户名</button>
  </h1>

</div>
</template>

<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'User',
  data() {
    return {
      newName: ''
    }
  },
  computed: {
    ...mapState('test', ['username']),
    ...mapGetters('test', ['unLength'])
  },
  methods: {
    ...mapMutations('test', ['changeUN']),
    ...mapActions('test', ['fetchUN']),
    changeUserName() {
      // 需求：是修改state中的username
      // 这种直接修改state的做法，是不建议的
      // this.$store.state.username = this.newName
      // this.$store.commit('changeUN', this.newName)
      this.changeUN(this.newName)
      this.newName = ''
    },
    changeUserNameAsync() {
      // this.$store.dispatch('fetchUN', {token: 'token'})
      this.fetchUN({token: 'token'})
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  width: 80%;
  margin: 0 auto;
  .tabs {
    line-height: 60px;
    text-align: center;
    display: flex;
    margin-top: 30px;
    &>span {
      flex: 1;
      border: 1px solid #ccc;
      cursor: pointer;
    }
    &>span.on {
      color: red;
    }
  }
}
</style>
