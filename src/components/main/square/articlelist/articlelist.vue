<template>
  <div>
    
        <ul 
          class="infinite-list article-list-con" 
          v-infinite-scroll="loadArticle" 
          style="overflow:auto;height: 720px;" 
          infinite-scroll-distance="1800"
          infinite-scroll-delay="1000"
          >
          <li v-for="(item,index) in articleList" v-bind:key="index" class="infinite-list-item article-list-item">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                  <el-button style="font-size: 30px;" type="text" @click="checkArticle(index)">{{item.title}}</el-button>
                  <el-button style="float: right; padding: 1px 0" type="text" @click="checkArticle(index)">查看详情 ></el-button>
              </div>
              <div>
                  <span class="article-info-tag">{{timeFormat(item.time)}}</span>
                  <el-button type="text" @click="goToUserMain(index)" class="article-info-tag">{{item.nickname}}</el-button>
                  <br>
                  <span>赞{{item.good}}</span>
                  <span>踩{{item.dislike}}</span>
              </div>
          
          </el-card>
          </li>
        </ul>
    
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
  name: 'ArticleList',
  // props:['articleList'],
  data() {
    return{
      articleList:[],
      pageNum : 1,
      pages : 0,
      isLastPage : false,
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
    checkArticle(index){
      let that = this;
      console.log(this.articleList[index].id);
      let msg = {
        
        userName : that.userInfo.userName,
        articleId : that.articleList[index].id
      };
      post(that.urlUtil.webGetSupportStatus,msg).then(function(res){
        console.log(res);
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
    },
    goToUserMain(index){
      let that = this;
      
      that.$router.push({
          name: 'UserMain',
          params: {
            userName: that.articleList[index].username
          }  
        })

    },
    loadArticle(){
      console.log('加载更多');
      let that = this;
      
      
      if(!that.isLastPage){
        let msg = {
        userName: that.userInfo.userName,
        pageNum : that.pageNum
      }
        post(that.urlUtil.getArticle,msg).then(function(res){
        console.log(res.data.data)
        if(res.data.status == 0){
          that.isLastPage = res.data.data.isLastPage;
          that.articleList = that.articleList.concat(res.data.data.list);
          that.pageNum = res.data.data.pageNum + 1;
          
        }
        })
      }else{
        return;
      }
    },
    
  },
  
}

</script>

<style>
  .article-list-con{
      width: 900px;
      margin: 50px auto;
      
  }
  .article-list-item{
      margin: 10px auto;
  }
  .article-info-tag{
    display: block;
  }
</style>
