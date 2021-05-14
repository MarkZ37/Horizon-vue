<template>
  <div class="article-detail-con">
    <div class="close-bar">
        <el-button type="danger" @click="closeDetail()" class="close-btn">
            <i class="el-icon-close"></i>
        </el-button>
    </div>
    <div>
      <div class="title-con">{{article.title}}</div>
      <div class="time-con">{{timeFormat(article.time)}}</div>
      <div class="author-con">{{article.nickname}}</div>
      <el-divider></el-divider>
      <div class="article-con" v-html="article.article"></div>
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
    },
    
  },
  
}

</script>

<style>
  .article-detail-con{
    /* padding: 10px; */
    display: none;
    position: fixed;
    z-index: 1000;
    margin:auto;
left:0;
right:0;
top:0;
bottom:0;
    width: 1050px;
    height: 625px;
    background-color: white;
    
    overflow: scroll;
    
  }
  .close-bar{
    width: 1050px;
    /* height: 50px; */
    position: fixed;
    float: right;
    background-color: whitesmoke;
  }
  .close-btn{
    border-radius: 0;
    float: right;
  }
  .title-con{
    margin-top: 45px;
  }
  .title-con{
    text-align: center;
    font-size: 35px;
    font-weight: 700;
  }
  .author-con{
    text-align: right;
  }
  .time-con{
    text-align: right;
  }
  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
  .article-con img{
    width: 80%;
    margin: 5px auto;
    display: block;

  }
  
</style>
