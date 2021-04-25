<template>
  <div class="page-con">
    <el-menu :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="square">广场</el-menu-item>
        <el-menu-item index="follow">我的关注</el-menu-item>
        <el-menu-item index="my">我的</el-menu-item>
      </el-menu>
  </div>

</template>

<script>
export default {
  name: 'Navbar',
  props: {
    active: {
      type: String,
      required: true
    }
  },
  data() {
    return{
      
    }

  },
  methods: {
    handleSelect(key,keyPath) {
      this.$emit('update:active',key)
    }
  },
  mounted() {
    // this.active = window.location.pathname;
    // console.log(window.location.pathname)
  },
}
</script>

<style>
  
  
</style>
