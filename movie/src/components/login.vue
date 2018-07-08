<template>
 <p class="login">
  <el-tabs v-model="activeName" @tab-click="handleClick">
   <el-tab-pane label="登录" name="first">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
     <el-form-item label="名称" prop="Name">
      <el-input v-model="ruleForm.Name"></el-input>
     </el-form-item>
     <el-form-item label="密码" prop="Password">
      <el-input type="password" v-model="ruleForm.Password" auto-complete="off"></el-input>
     </el-form-item>
     <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
     </el-form-item>
    </el-form>
   </el-tab-pane>
   <el-tab-pane label="注册" name="second">
    <register></register>
   </el-tab-pane>
  </el-tabs>
 </p>
</template>
<script>
import register from '@/components/register'
import axios from '../axios.js'
export default {
 data() {
  var validatePass = (rule, value, callback) => {
   if (value === '') {
    callback(new Error('请输入密码'));
   } else {
    if (this.ruleForm.checkPass !== '') {
     this.$refs.ruleForm.validateField('checkPass');
    }
    callback();
   }
  };
  return {
   activeName: 'first',
   ruleForm: {
    Name: '',
    Password: '',
    checkPass: '',
   },
   rules: {
    Name: [
     { required: true, message: '请输入您的名称', trigger: 'blur' },
     { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
    ],
    Password: [
     { required: true, validator: validatePass, trigger: 'blur' }
    ]
   },
  };
 },
 methods: {
  //选项卡切换
  handleClick(tab, event) {
  },
  //重置表单
  resetForm(formName) {
   this.$refs[formName].resetFields();
  },
  //提交表单
  submitForm(formName) {
   this.$refs[formName].validate((valid) => {
    if (valid) {
     axios.userLogin(this.ruleForm)
      .then(({ data }) => {
   //账号不存在
   //账号存在
      if (data.Code == '200') {
       this.$message({
        message: data.Msg
       });
    //拿到返回的token和username，并存到store
       let token = data.Id;
       let username = this.ruleForm.Name;
       this.$store.dispatch('UserLogin', token);
       this.$store.dispatch('UserName', username);
    //跳到目标页
       this.$router.push('Home');


      } else {
        this.$message({
          message: data.Msg
        });
      }
     });
    } else {
     console.log('error submit!!');
     return false;
    }
   });
  },
 },
 components: {
  register
 }
}
</script>
<style>
.login {
 width: 400px;
 margin: 0 auto;
}
#app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 margin-top: 60px;
}
.el-tabsitem {
 text-align: center;
 width: 60px;
}
</style>