<template>
  <div class="page-con">
    <div class="regist-con">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-ruleForm" size="medium" label-position="left">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input type="text" v-model="ruleForm.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密  码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" v-model="ruleForm.checkPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idNumber">
          <el-input type="text" v-model="ruleForm.idNumber" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="btn-con">
          <el-button type="primary" @click="regist('ruleForm')">注册</el-button>
          
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      ruleForm: {
          username: '',
          password: '',
          checkPassword: '',
          nickname: '',
          idNumber: ''
        },
        rules: {
          username: [
            { required: true, message: '输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '输入密码', trigger: 'blur' }
          ],
          checkPassword: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          nickname: [
            { required: true, message: '输入昵称', trigger: 'blur' }
          ],
          idNumber: [
          { required: true, message: '输入身份证号', trigger: 'blur' }
          ]
        }
    }

  },
  methods: {
    regist: function(){
      let that = this
      if(that.ruleForm.username.length && that.ruleForm.password.length && that.ruleForm.checkPassword.length && that.ruleForm.nickname.length){
        if(that.ruleForm.password == that.ruleForm.checkPassword){
          console.log(that.ruleForm.username+" "+that.ruleForm.password+" "+that.ruleForm.checkPassword)
          //发送注册请求

          let msg = {
            account:that.ruleForm.username,
            password:that.ruleForm.password,
            nickname:that.ruleForm.nickname,
            idNumber:that.ruleForm.idNumber
          };
          that.$axios({
            method: 'post',
            url:'/api/user/webregist',
            data:msg
          })
          .then(function(res){
            console.log(res)
          })
          //跳转
          this.$router.push('/regist/successful')
        }else{
          alert('密码与确认密码不相符')
        }
        // this.$router.push('/')
      }else{
        alert('请完善信息')
      }
    },
  },
  
}
</script>

<style>
  @import url("./regist.css");
  
</style>
