<template>
  <div class="article-list">
      <div v-for="(item,index) in articleList" v-bind:key="index" class="article-item">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
              <el-button style="font-size: 30px;" type="text" @click="checkArticle(index)">{{item.title}}</el-button>
              <el-button style="float: right; padding: 1px 0" type="text" @click="checkArticle(index)">查看详情 ></el-button>
          </div>
          <div>
            <span>{{timeFormat(item.time)}}</span>
            <br>
              <span>赞{{item.good}}</span>
              <span>踩{{item.dislike}}</span>
          </div>
            
        </el-card>
      </div>
      <articleDetail class="article-detail" :article="articleInfo" :supportStatus="supportInfo"></articleDetail>
  </div>

</template>

<script>
  import {datetimeFormat} from '@/utils/formatutil.js';
  import articleDetail from './detail.vue';
  import $ from 'jquery';
  import {post} from '@/utils/request.js';
  import {mapGetters} from 'vuex';
export default {
  name: 'Article',
  props: ['articleList'],
  data() {
    return{
      articleInfo:[],
      supportInfo:[]
    }

  },
  
  computed:{
    ...mapGetters(['userInfo'])
  },
  mounted() {
    
  },
  components:{
    articleDetail
  },
  onbeforeunload() {
    
  },
  methods: {
    checkArticle:function(index){
        
      let that = this;
      
      let msg = {
        
        userName : that.userInfo.userName,
        articleId : that.articleList[index].id
      };
      post(that.urlUtil.webGetSupportStatus,msg).then(function(res){
        
        if(res.data.status == 0){
          if(res.data.data == null){
            that.supportInfo = {
              supportFlag : 0,
              dislikeFlag : 0
            }
          }else{
            if(res.data.data.status == 1){
              that.supportInfo = {
              supportFlag : 1,
              dislikeFlag : 0
              }
            }else{
              that.supportInfo = {
              supportFlag : 0,
              dislikeFlag : 1
              }
            }
          }
        }
      })
      this.articleInfo = this.articleList[index];
      $('.article-detail').slideDown(100)
    },
    timeFormat(dateTime){
      return datetimeFormat(dateTime,'yyyy-MM-dd HH:mm')
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
</style>
