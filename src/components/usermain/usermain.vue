<template>
    <div>usermain</div>

</template>

<script>
  
  import $ from 'jquery';
  import {mapGetters} from 'vuex';
  import {post} from '@/utils/request.js';
  import {datetimeFormat} from '@/utils/formatutil.js'

export default {
  name: 'UserMain',
  
  data() {
    return{
        
    }

  },
  
  computed:{
    ...mapGetters(['otherUserInfo','userInfo'])
  },
  mounted() {
    
    this.loadUserInfo()
  },
  onbeforeunload() {
      
    this.loadUserInfo()
  },
  methods: {
    timeFormat(dateTime){
      return datetimeFormat(dateTime,'yyyy-MM-dd HH:mm')
    },
    loadUserInfo(){
        
        let that = this;
        
        let msg = {
            selfUserName : that.userInfo.userName,
            otherUserName : that.$route.params.userName ? that.$route.params.userName : that.otherUserInfo.otherUserName
        };
        post(that.urlUtil.webGetOtherUserInfo,msg).then(function(res){
            console.log(res)
            if(res.data.status == 0){
                that.$store.commit('setOtherUserInfo',res.data.data);
            }else{
                that.$message.error('获取失败');
            }
        })
    }
  },
  
}

</script>

<style>
    @import url("usermain.css");
</style>
