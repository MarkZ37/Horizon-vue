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
  mounted() {
    console.log(this.active)
    // this.$router.push(this.active)
  },
  methods: {

      
  },
  components: {
    "v-navbar": Navbar
  },
  watch: {
    active (newVal){
      console.log(this.active)
      this.$router.push({
        path: this.active
      })
    }
  }
  
}
</script>

<style>
  
  
</style>
