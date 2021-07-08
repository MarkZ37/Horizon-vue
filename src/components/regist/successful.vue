<template>
  <div class="page-con">
    
      <div class="congratulations-title">恭喜你，注册成功</div>
      <div>
        <el-button type="primary" @click="goToMain()" class="back-to-main-btn">返回首页</el-button>
      </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      
    }

  },
  methods: {
    goToMain: function(){
      this.$router.push('/');
    }
  },
  
}
</script>

<style>
  .congratulations-title{
    text-align: center;
    font-size: 40px;
  }
  .back-to-main-btn{
    margin: 10px auto;
    display: block;
  }
  .banner-img{
    width: 100%;
  }
</style>
