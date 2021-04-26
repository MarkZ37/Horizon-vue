<template>
  <div class="page-con">
      注册成功
      <el-button type="primary" @click="goToMain()">返回首页</el-button>
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

</style>
