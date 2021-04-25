<template>
  <div  :style="backgroundDiv">
    <router-view></router-view>
    <div class="title-con">
      <div class="title">Beyond The</div>
      <div class="title" id="main-title">HORIZON</div>
      <div class="title">There`s A Realm of The Free</div>
    </div>
    <div class="login-con">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-ruleForm" size="medium" label-position="left">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密  码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="btn-con">
          <el-button type="primary" @click="login('ruleForm')">登陆</el-button>
          <el-button @click="goRegist()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return{
      backgroundDiv: {
        backgroundImage:'url(' + require('../assets/img/back.jpg') + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%',
        width:'100%',
        height:'100%'
      },
      ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '输入密码', trigger: 'blur' }
          ]
        }
    }

  },
  methods: {
    
    login: function(){
      if(this.ruleForm.username.length && this.ruleForm.password.length){
        console.log(this.ruleForm.username+" "+this.ruleForm.password)
        this.$router.replace('/main/square')
      }else{
        alert('请完善信息')
      }
    },
    goRegist: function(){
      this.$router.push('/regist')
    }
    
  },
  
}
</script>

<style scope>
  @import url("../assets/style/index.css");
  
</style>
