<template>
  <div>
    <v-navbar :active.sync="active"></v-navbar>
    <router-view></router-view>
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
  
  
</style>
