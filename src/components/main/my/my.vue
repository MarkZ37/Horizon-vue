<template>
  <div>
      <div class="about-con">
          <div class="avatar"></div>
          <div class="nickName">{{nickName}}</div>
      </div>
      <div class="emo-con">
        <el-button type="primary" round @click="changeEmo()">{{emo}}</el-button>
        <div class="emos-con">心情盒子
          <ul class="emos-list">
            <li v-for="(item,i) in emoList">
              <button class="emos-item" @click="chooseEmo(i)">{{item}}</button>
            </li>
          </ul>
          <div class="close-emos">
            <el-button type="primary" round plain class="emos-sure" @click="sureEmos()">确认</el-button>
            <el-button type="danger" round plain class="emos-cancel" @click="closeEmos()">取消</el-button>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
  import $ from 'jquery'
export default {
  name: 'My',
  data() {
    return{
      nickName: '弛哥弛哥弛哥弛',
      emo: '此时心情',
      emoList: ["心情1","心情2","心情3","心情4","心情5","心情6","心情7","心情8","心情9","心情10",
      "心情1","心情2","心情3","心情4","心情5","心情6","心情7","心情8","心情9","心情10","心情11"]
    }

  },
  methods: {
    //加载数据
    loadData:function(){
      //获取用户信息
      //获取心情列表
      //设置数据
    },
    changeEmo:function(){
      $('.emos-con').slideDown(200);
    },
    sureEmos:function(){
      if(localStorage.getItem("emosIndex") != null){
        console.log("心情选择了："+localStorage.getItem("emosIndex"));
        this.emo = this.emoList[localStorage.getItem("emosIndex")]
      }else{
        console.log("无心情选择");
      }
      $('.emos-con').slideUp(200);
    },
    closeEmos:function(){
      $('.emos-con').slideUp(200);
    },
    chooseEmo:function(index){
      localStorage.setItem("emosIndex",index)
      console.log(index)
    }
  },
  
}

</script>

<style>
  @import url("my.css");
  
</style>
