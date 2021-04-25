<template>
  <div class="page-con">
    <!-- <h3>app</h3> -->
    <router-view></router-view>
  
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
    
  },
  
}
</script>

<style>
  
  html,body,#app{
    height: 100%;
    padding: 0;
    /* min-width: 1300px; */
    background: 'url(' + require('./assets/img/back.jpg') + ')';
    background-repeat:'no-repeat';
    background-size:'100% 100%';
    width:'100%';
    height:'100%';
  }
  .page-con{
    height: 100%;
  }
</style>
