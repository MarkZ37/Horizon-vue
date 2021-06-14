<template>
    <div>
      <div class="user-info-con">
        <div class="avatar-con">
          <div class="avatar"></div>
        </div>
        <div class="nickname-con">{{nickName}}</div>
        <div v-if="isSelfFlag" class="follow-btn-con">
          <div v-if="isFollowedFlag">
            <el-button type="info" class="follow-btn" @click="cancelFollowUser()">已关注</el-button>
          </div>
          <div v-else>
            <el-button type="primary" class="follow-btn" round @click="followUser()">关注</el-button>
          </div>
        </div>
      </div>
      <articleCard :articleList="userArticleList"></articleCard>
    </div>

</template>

<script>
  
  import $ from 'jquery';
  import {mapGetters} from 'vuex';
  import {post} from '@/utils/request.js';
  import {datetimeFormat} from '@/utils/formatutil.js'
  import articleCard from './articlelist/articlelist.vue'

export default {
  name: 'UserMain',
  
  data() {
    return{
        nickName : '',
        isSelfFlag : 1,//1不是本人，0是本人
        isFollowedFlag : 0,//1已关注，0未关注
        userArticleList : [],
    }

  },
  
  computed:{
    ...mapGetters(['otherUserInfo','userInfo'])
  },
  mounted() {
    this.loadUserInfo();
    
  },
  onbeforeunload() {
    this.loadUserInfo();
    
  },
  components:{
    articleCard
  },
  methods: {
    timeFormat(dateTime){
      return datetimeFormat(dateTime,'yyyy-MM-dd HH:mm')
    },
    /**************************初始化加载***********************************/
    loadUserInfo(){
        let that = this;
        
        let msg = {
            selfUserName : that.userInfo.userName,
            otherUserName : that.$route.params.userName ? that.$route.params.userName : that.otherUserInfo.otherUserName
        };
        post(that.urlUtil.webGetOtherUserInfo,msg).then(function(res){
            
            if(res.data.status == 0){
                that.$store.commit('setOtherUserInfo',res.data.data);
                that.nickName = that.otherUserInfo.nickName
                that.setPageInfo();
            }else{
                that.$message.error('获取失败');
            }
        })

    },
    setPageInfo(){
      this.setAvatar();
      this.isSelfJudge();
      this.isFollowJudge();
      this.loadUserArticle();
    },
    setAvatar:function(avatarUrl){
      let that = this;
      $('.avatar').css("background-image", "url("+that.otherUserInfo.avatarUrl+")")
    },
    isSelfJudge(){
      let that = this;
      console.log(that.userInfo.userName +" "+ that.otherUserInfo.otherUserName)
      if(that.userInfo.userName == that.otherUserInfo.otherUserName){
        console.log('是本人')
        that.isSelfFlag = 0;
      } else{
        console.log('不是本人')
        that.isSelfFlag = 1;
      }
    },
    isFollowJudge(){
      let that = this;
      let msg = {
        selfUserName : that.userInfo.userName,
        otherUserName : that.otherUserInfo.otherUserName
      }
      post(that.urlUtil.isFollowJudge,msg).then(function(res){
        console.log(res)
        if(res.data.status == 0){
          that.isFollowedFlag = 1
        }else{
          that.isFollowedFlag = 0
        }
      })
    },
    loadUserArticle(){
      let that = this;
      let msg = {
        userName : that.otherUserInfo.otherUserName
      };
      post(that.urlUtil.getUserArticle,msg).then(function(res){
        console.log(res)
        if(res.data.status == 0){
          that.userArticleList = res.data.data
        }
      })
    },

    /**************************关注处理***********************************/
    //关注
    followUser(){
      let that = this;
      
      let msg = {
        selfUserName : that.userInfo.userName,
        otherUserName : that.otherUserInfo.otherUserName
      }
      post(that.urlUtil.followUser,msg).then(function(res){
        console.log(res)
        if(res.data.status == 0){
          that.$message.success('关注成功');
          that.isFollowedFlag = 1
        }else{
          that.$message.error('关注失败');
        }
      })
      
    },
    //取消关注
    cancelFollowUser(){
      let that = this;
      let msg = {
        selfUserName : that.userInfo.userName,
        otherUserName : that.otherUserInfo.otherUserName
      }
      post(that.urlUtil.cancelFollowUser,msg).then(function(res){
        console.log(res)
        if(res.data.status == 0){
          that.isFollowedFlag = 0
          that.$message('已取消关注');
        }else{
          that.$message.error(res.data.message);
        }
      })
      
    }
  },
  
  
}

</script>

<style>
    @import url("usermain.css");
</style>
