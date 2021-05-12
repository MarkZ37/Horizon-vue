<template>
  <div class="article-detail-con">
    <div class="close-bar">
        <el-button type="danger" @click="closeDetail()" class="close-btn">
            <i class="el-icon-close"></i>
        </el-button>
    </div>
  </div>

</template>

<script>
  import {datetimeFormat} from '@/utils/formatutil.js'
  import $ from 'jquery';

export default {
  name: 'Detail',
  props: ['article'],
  data() {
    return{
        
    }

  },
  
  computed:{
    
  },
  mounted() {
    
  },
  onbeforeunload() {
    
  },
  methods: {
    timeFormat(dateTime){
      return datetimeFormat(dateTime,'yyyy-MM-dd HH:mm')
    },
    closeDetail(){
        $('.article-detail-con').slideUp(200)
    }
  },
  
}

</script>

<style>
    .article-detail-con{
        display: none;
        position: fixed;
        z-index: 1000;
        top: 70px;
        width: 950px;
        height: 625px;
        background-color: white;
        margin: 0 auto;
    }
    .close-bar{
      width: 100%;
      height: 50px;
  }
  .close-btn{
      border-radius: 0;
      float: right;
  }
  
</style>
