<template>
  <div class="follow-list-con">
      <el-container>
        
        <el-container>
          <el-aside width="200px">
            
            <div  :class = "isUserActive == index ? 'userActive' : 'user-list-item' " v-for="(item,index) in followList" v-bind:key="index" @click="chooseUser(index)">
              {{item.nickName}}
            </div>
          </el-aside>
          <el-main>
            <articleList :articleList="articles"></articleList>
          </el-main>
        </el-container>
      </el-container>
      
      
      
  </div>

</template>

<script>
  import $ from 'jquery';
  import {mapGetters} from 'vuex';
  import {post} from '@/utils/request.js';
  import articleList from './articlelist/articlelist.vue'
export default {
  name: 'Follow',
  data() {
    return{
      headerName : '全部',
      followList : [],
      isUserActive : 0,
      userIndex : 0,
      articles : []
    }

  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    this.loadFollowUserList();
  },
  components:
   {
    articleList
  },
  methods: {
    loadFollowUserList(){
      let that = this;
      console.log(that.userInfo.userName)
      let msg = {
        userName : that.userInfo.userName
      }
      post(that.urlUtil.getUserFollowList,msg).then(function(res){
        console.log(res)
        if(res.data.status == 0){
          that.followList = res.data.data;
          that.loadUserArticle();
        }
      })
      
    },
    chooseUser(index){
      console.log(index)
      let that = this;
      that.isUserActive = index;
      that.loadUserArticle();
    },
    loadUserArticle(){
      let that = this;
      console.log(that.followList)
      let msg = {
        userName : that.followList[that.isUserActive].flUserName
      }
      post(that.urlUtil.getUserArticle,msg).then(function(res){
        console.log(res)
        that.articles = res.data.data;
      })
    }
    
  },
  
}
</script>

<style>
  @import url("follow.css");
  
</style>
