<template>
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="名称" prop="Name">
   <el-input v-model="ruleForm.Name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="Password">
   <el-input type="password" v-model="ruleForm.Password" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
   <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
   <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
   <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
 </el-form>
</template>
<script>
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
  var validatePass2 = (rule, value, callback) => {
   if (value === '') {
    callback(new Error('请再次输入密码'));
   } else if (value !== this.ruleForm.Password) {
    callback(new Error('两次输入密码不一致!'));
   } else {
    callback();
   }
  };
  return {
   activeName: 'second',
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
    ],
    checkPass: [
     { required: true, validator: validatePass2, trigger: 'blur' }
    ],
   }
  };
 },
 methods: {
  submitForm(formName) {
   this.$refs[formName].validate((valid) => {
    if (valid) {
     axios.userRegister(this.ruleForm)
      .then(({data}) => {
        this.$message({
         message: data.Msg
        });
     })
    } else {
     console.log('error submit!!');
     return false;
    }
   });
  },
  resetForm(formName) {
   this.$refs[formName].resetFields();
  }
 }
}
</script>
