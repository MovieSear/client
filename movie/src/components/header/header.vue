<template>
  <div>
    <div class="v-header">

      <UserInfo></UserInfo>

      <div class="v-header-logo">
        <div class="v-load-title">
          <h3>北极光电影</h3>
          <div>查影讯，来ABTicket！</div>
        </div>
      </div>
      <div class="v-header-input">
        <input class="v-inp" type="text" v-model.trim="query" placeholder="请输入电影名" @keyup.enter="search"></input>
      </div>
    </div>
    <div class="v-nav-bar">
      <router-link to="/inTheaters" class="v-nav">正在热映</router-link>
      <router-link to="/comingSoon" class="v-nav">即将上映</router-link>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import UserInfo from '../UserInfo.vue'
  export default {
    data () {
      return {
        query: ''
      }
    },
    components: {
      UserInfo: UserInfo,
    },
    methods: {
      search: function () {
        this.$router.push({path: '/back',query:{name: this.query}})
      }
    }
  }
</script>

<style>
  .v-header {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    height: 60px;
    padding: 10px 20px;
    box-sizing: border-box;
  }
  .v-header-logo {
    flex: 1;
  }
  .v-header-logo > div {
    display: inline-block;
  }
  .v-header-logo > div:first-child img{
    height: 42px;
    width: 42px;
  }
  .v-header-logo > div:last-child {
    vertical-align: top;
  }
  .v-header-input {
    width: 100px;
    line-height: 100%;
  }
  .v-load-title h3 {
    font-size: 20px;
    font-weight: 700;
    color: #333;
  }
  .v-load-title div {
    font-size: 16px;
    color: #C0C0C0;
  }
  .v-nav-bar {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: #CC00CC;
  }
  .v-nav {
    flex: 1;
    text-align: center;
    text-decoration: none;
    height: 35px;
    line-height: 35px;
    font-size: 30px;
    color: #F8F8F8;
  }
  .v-inp {
    width: 100%;
    height: 40px;
    border-style: none;
    border-radius: 15px;
    padding-left: 10px;
  }
</style>