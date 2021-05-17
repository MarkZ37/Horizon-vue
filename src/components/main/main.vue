<template>
  <div class="main-page">
    <v-navbar :active.sync="active"></v-navbar>
    <router-view></router-view>
    
  <vue-particles
    color="#dedede"
    :particleOpacity="0.7"
    :particlesNumber="100"
    shapeType="star"
    :particleSize="4"
    linesColor="#FFFFFF"
    :linesWidth="2"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
    class="starfield"
  >
  </vue-particles>
  </div>

</template>

<script>
  import Navbar from "./navbar/navbar"
export default {
  name: 'Main',
  data() {
    return{
      active: 'square'
    }

  },
  // computed: {
  

  // },
  mounted() {
    
  },
  methods: {

      
  },
  components: {
    "v-navbar": Navbar
  },
  watch: {
    active (newVal){
      
      this.$router.push({
        path: this.active
      })
    }
  }
  
}
</script>

<style>
  .main-page{
    /* margin-top: 90px; */
  }
  .starfield{
	position:fixed;/*设置定位*/
	top:0;
	left:0;
  width: 100%;
  height: 100%;
	z-index:-1;/*使画布基于最低层*/
	background:#0e1729;/*画布背景色*/
}
  
</style>
