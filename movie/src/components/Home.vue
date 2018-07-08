<template>
  <div>
    <div class="container" id="Home">
      <div class="left">
        <UserInfo></UserInfo>
        <UserMenu></UserMenu>

        <div class="content">
          <ul>
            <li v-for="(item,index) in indents" :key="item._id">
              {{ index + 1 }}.{{ item.Filmname }}
              <el-button @click="view_Indent(index)">查看</el-button>
            </li>
          </ul>
        </div>

      </div>
    </div>
</div>
</template>
<script>
import axios from '../axios.js'
import UserInfo from './UserInfo.vue'
import UserMenu from './userMenu.vue'
export default {
 name: 'Home',
 data () {
  return {
   indents:[],
  }
 },
 components: {
    UserInfo: UserInfo,
    UserMenu: UserMenu
  },

 created(){
  axios.getIndent(this.$store.state.username).then((response) => {
   if(response.Code === 200){
    indents = response.data.Data;
    this.$router.push('/login');
    //并且清除掉这个token
    this.$store.dispatch('UserLogout');
   }else{
    //成功了就把data.result里的数据放入users，在页面展示
    this.indents = response.data.indents;
   }
  })
 }, 
 methods:{
  view_Indent(index, event){
   
  },
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
h1, h2 {
 font-weight: normal;
}
ul {
 list-style-type: none;
 padding: 0;
}
li {
 display: inline-block;
 margin: 0 10px;
}
a {
 color: #42b983;
}
.hello {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 width: 400px;
 margin: 60px auto 0 auto;
}
.container{padding-top: 40px; width:1170px; margin: 0 auto; padding-bottom: 20px; overflow: hidden;}
.left{display: inline-block;}
.content{background: #fff;vertical-align: top; display: inline-block; width: 650px; height: 935px; margin-left: 20px; overflow-y: auto;overflow: hidden;}
.content-main{margin: 20px; text-align: left;}
</style>