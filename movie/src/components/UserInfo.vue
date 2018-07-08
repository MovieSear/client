//用户信息

<template>
<div class="info">
  <div class="portrait"><img src="../assets/portrait.jpg" width="60" height="60" /></div>

  <div class="user-info">
    <div class="uid" >用户名:{{$store.state.username}}</div>
    <el-button class="button" type="primary" @click="logout()"><span class="sclass">注销</span></el-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'UserInfo',
  data(){
    return {}
  },
  methods:{
  	logout(){
   //清除token
   this.$store.dispatch('UserLogout');
   if (!this.$store.state.token) {
    this.$router.push('/login')
    this.$message({
     message: '注销成功'
    })
   } else {
    this.$message({
     message: '注销失败'
    })
   }
  },
  }
}
</script>

<style scoped>
.info{width: 300px; height: 50px; text-align: left;margin-top: -50px;}
.portrait{width: 60px; height: 60px; overflow:hidden; -webkit-border-radius: 40px;
-moz-border-radius: 40px;
-ms-border-radius: 40px;
-o-border-radius: 40px;
border-radius: 40px; background-color: #CCCCCC; margin: 40px 18px 0 15px;}
.user-info{margin: 38px 0 0 0; vertical-align: top;}
.portrait, .user-info{display: inline-block;}
.uid{margin-top: 14px;font-size: 13px;}
.button{margin-top: 5px;margin-left: 10px; height: 15px; width: 50px; font-size: 10pt;line-height: 8px;}
.sclass{text-align: center; margin-left: -10px;}
</style>