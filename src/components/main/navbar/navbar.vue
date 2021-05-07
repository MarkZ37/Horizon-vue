<template>
  <div class="page-con">
    <el-menu :default-active="activePath" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
      activePath: ''
    }

  },
  computed: {
    
  },
  mounted() {
    this.activeCompute();
  },
  methods: {
    handleSelect(key,keyPath) {
      this.$emit('update:active',key)
    },
    activeCompute() {
      
      if (this.$route.path === "/main/square") {
        this.activePath = "square";
      }else if (this.$route.path === "/main/follow") {
        this.activePath = "follow";
      }else{
        this.activePath = "my";
      }
    }
  },
  
}
</script>

<style>
  
  
</style>
