<template>
  <div>
    <div class="cover-con">
      <img src="../../../assets/img/back.jpg" alt="">
      <div class="cover-info">
        <span class="cover-title">Horizon</span>
        <span class="cover-text">March to the border. March to the sea.</span>
      </div>
    </div>
      <articleList :articleList="mainArticleInfo"></articleList>
  </div>

</template>

<script>
  import articleList from './articlelist/articlelist.vue';
  import {post} from '@/utils/request.js';
  import {mapGetters} from 'vuex';

export default {
  name: 'Square',
  data() {
    return{
      mainArticleInfo:[]
    }

  },
  computed:{
    ...mapGetters(['userInfo','mainArticle'])
  },
  components:{
    articleList
  },
  mounted() {
    this.loadArticle();
  },
  onbeforeunload(){
    this.loadArticle();
  },
  methods: {
    loadArticle:function(){
      
      let that = this;
      
      let msg = {
        userName: that.userInfo.userName
      }
      post(that.urlUtil.getArticle,msg).then(function(res){
        console.log(res.data.data)
        if(res.data.status == 0){
          that.$store.commit('setMainArticle',res.data.data)
          that.setArticle(res.data.data)
        }
      })
    },
    setArticle:function(articles){
      let that = this;
      that.mainArticleInfo = articles
    }
  },
  
}
</script>

<style>
  @import url("square.css");
  
</style>
