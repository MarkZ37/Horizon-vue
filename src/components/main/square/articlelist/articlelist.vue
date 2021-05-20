<template>
    <div class="article-list">
        <div v-for="(item,index) in articleList" v-bind:key="index" class="article-item">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix">
                    <el-button style="font-size: 30px;" type="text" @click="checkArticle(index)">{{item.title}}</el-button>
                    <el-button style="float: right; padding: 1px 0" type="text" @click="checkArticle(index)">查看详情 ></el-button>
                </div>
                <div>
                    <span class="article-info-tag">{{timeFormat(item.time)}}</span>
                    <el-button type="text" @click="goToUserMain(index)" class="article-info-tag">{{item.nickname}}</el-button>
                </div>
            
            </el-card>
        </div>
    
        <articleDetail class="article-detail" :article="articleInfo"></articleDetail>
    </div>

</template>

<script>
  import {datetimeFormat} from '@/utils/formatutil.js';
  import articleDetail from './detail.vue';
  import $ from 'jquery'
export default {
  name: 'ArticleList',
  props:['articleList'],
  data() {
    return{
      articleInfo:[]
    }

  },
  
  computed:{
    
  },
  mounted() {
    
  },
  components:{
    articleDetail
  },
  onbeforeunload() {
    
  },
  methods: {
    checkArticle(index){
        console.log(this.articleList[index].id);
        
        this.articleInfo = this.articleList[index];
        $('.article-detail').slideDown(100)
    },
    timeFormat(dateTime){
      return datetimeFormat(dateTime,'yyyy-MM-dd HH:mm')
    },
    goToUserMain(index){
      let that = this;
      console.log(that.articleList[index].username)
      
      that.$router.push({
          name: 'UserMain',
          params: {
            userName: that.articleList[index].username
          }  
        })
        // that.$router.push('/usermain')
    }
  },
  
}

</script>

<style>
  .article-list{
      width: 900px;
      margin: 20px auto;
  }
  .article-item{
      margin: 10px auto;
  }
  .article-info-tag{
    display: block;
  }
</style>
