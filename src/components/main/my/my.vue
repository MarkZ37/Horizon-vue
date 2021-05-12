<template>
  <div>
      <div class="about-con">
          <div class="avatar-con" @click="changeAvatar()"></div>
          <el-upload
            class="avatar-uploader"
            :action="uploadImgUrl"
            name="file"
            :headers="myHeaders"
            :show-file-list="false"
            :on-success="avatarUploadSuccess"
            :on-error="uploadError"
            :before-upload="uploadImgBefore"
            accept='.jpg,.jpeg,.png,.gif'>
          </el-upload>
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
      
      <!-- 富文本编辑器 -->
      <div class="deploy-con">
        <el-input v-model="articleTitle" placeholder="标题" :change="titleChange()"></el-input>
        <el-upload
        class="quill-img"
        :action="uploadImgUrl"
        name="file"
        :headers="myHeaders"
        :show-file-list="false"
        :on-success="quillImgSuccess"
        :on-error="uploadError"
        :before-upload="uploadImgBefore"
        accept='.jpg,.jpeg,.png,.gif'>
        </el-upload>
        <quill-editor v-model="content"
          ref="quillEditor"
          :options="editorOption"
          @blur="handleEditorBlur($event)"
          @focus="handleEditorFocus($event)"
          @change="handleEditorChange($event)"
          >
        </quill-editor>
        <div class="deploy-btn-con">
          <el-button type="primary" @click="deployArticle()">发表</el-button>
          <el-button type="danger" @click="cancelDeploy()">取消</el-button>
        </div>
      </div>

      <button class="show-deploy-button" @click="showDeploy()">写文章</button>
      <!-- <i class="el-icon-edit show-deploy-button" @click="showDeploy()"></i> -->
      <articleCard :articleList="articles"></articleCard>
      
  </div>

</template>

<script>
  import $ from 'jquery';
  import {mapGetters} from 'vuex';
  import {post} from '@/utils/request.js';
  import articleCard from './article/article.vue';
  

  const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],       // 加粗 斜体 下划线 删除线
  ["blockquote", "code-block"],                    // 引用  代码块
  [{ list: "ordered" }, { list: "bullet" }],       // 有序、无序列表
  [{ indent: "-1" }, { indent: "+1" }],            // 缩进
  [{ size: ["small", false, "large", "huge"] }],   // 字体大小
  [{ header: [1, 2, 3, 4, 5, 6, false] }],         // 标题
  [{ color: [] }, { background: [] }],             // 字体颜色、字体背景颜色
  [{ align: [] }],                                 // 对齐方式
  ["clean"],                                       // 清除文本格式
  ["link", "image", "video"]                       // 链接、图片、视频
];

export default {
  name: 'My',
  props: {
    /* 编辑器的内容 */
    value: {
      type: String
    },
    /* 图片大小 */
    maxSize: {
      type: Number,
      default: 4000 //kb
    },
  },
  components:{
    articleCard
  },
  data() {
    return{
      nickName:'',
      emo: '此时心情',
      emoList: ["心情1","心情2","心情3","心情4","心情5","心情6","心情7","心情8","心情9","心情10",
      "心情1","心情2","心情3","心情4","心情5","心情6","心情7","心情8","心情9","心情10","心情11"],
      content: this.value,

      articleHtml:'',
      articleTitle:'',
      articles:[],
      uploadImgUrl: "",
      editorOption: {
        placeholder: "",
        theme: "snow", // or 'bubble'
        placeholder: "请输入内容",
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              image: function(value) {
                if (value) {
                  
                  // 触发input框选择图片文件
                  document.querySelector(".quill-img input").click();
                  
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        
        }
      },
      uploadImgUrl: this.urlUtil.baseUrl + this.urlUtil.imgOSSUpload, // 上传的图片服务器地址
      myHeaders: {}
    }

  },
  watch: {
    value: function() {
      this.content = this.value;
    }
  },
  computed:{
    ...mapGetters(['userInfo','token','articleData'])
  },
  mounted() {
    //设置上传图片的头部token
    this.myHeaders = {'Authorization': 'Bearer:' + this.token.token}
    this.loadUserData();
    this.loadUserArticles();
  },
  onbeforeunload() {
    this.loadUserData();
    this.loadUserArticles()
  },
  methods: {
    /******************加载信息***************/

    //加载个人信息
    loadUserData:function(){
      let that = this;
      
      let msg = {
        userName: that.userInfo.userName
      }
      post(that.urlUtil.getUserInfo,msg).then(function(res){
        
        if(res.data.status == 0){
          that.$store.commit("setUserInfo",res.data.data);
          
          that.nickName = that.userInfo.nickName
          that.setAvatar(that.userInfo.avatarUrl);
        }
      })
    },
    setAvatar:function(avatarUrl){
      $('.avatar-con').css("background-image", "url("+avatarUrl+")")
    },
    //加载、重新渲染用户文章列
    loadUserArticles:function(){
      let that = this;
      let msg = {
        userName: that.userInfo.userName
      }
      post(that.urlUtil.getUserArticle,msg).then(function(res){
        console.log(res)
        //成功获取文章
        if(res.data.status == 0){
          that.$store.commit("setArticleData",res.data.data);

          // that.articleData = that.articleData.articleData
          that.articles = that.articleData.articleData
        }
        
      })
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
    },
    /**********************上传头像*********************/
    changeAvatar:function(){
      $('.avatar-uploader input').click()
      
    },
    avatarUploadSuccess(res, file){
      
      if (res.errorCode == 0) {
        // 如果上传成功
        console.log(res.data)
        this.uploadAvatarUrl(res.data);
      } else {
        this.$message.error("上传头像失败");
      }
    },
    uploadAvatarUrl(avatarUrl){
      let that = this;
      let msg = {
        avatarUrl:avatarUrl,
        userName:this.userInfo.userName
      };
      post(that.urlUtil.uploadAvatarUrl,msg).then(function(res){
        console.log(res)
        if(res.data.status == 0){
          //成功上传头像，获取更新后的userInfo
          that.loadUserData();
        }
      });
    },
    /**********************文章************************/
    titleChange:function(){
      console.log(this.articleTitle)
    },
    showDeploy:function(){
      $('.deploy-con').slideDown(200)
    },
    handleEditorBlur:function(e){
      console.log(e)
    },
    handleEditorFocus:function(e){
      console.log(e)
    },
    handleEditorChange:function(e){
      console.log(e.html)
      this.articleHtml = e.html
    },
    // 富文本图片上传前
    uploadImgBefore(file) {
      let fileType = file.type;
   if(fileType === 'image/jpeg' || fileType === 'image/png'){
    return true;
   }else {
    this.$message.error('请插入图片类型文件(jpg/jpeg/png)');
    return false;
   }
    },

    quillImgSuccess(res, file) {
      // res为图片服务器返回的数据
      // 获取富文本组件实例
      let quill = this.$refs.quillEditor.quill;
      // 如果上传成功
      
      
      if (res.errorCode == 0) {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片  res.data为服务器返回的图片地址
        quill.insertEmbed(length, "image", res.data);
        // 调整光标到最后
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
      
    },
    
    // 富文本图片上传失败
    uploadError() {
      // loading动画消失
      this.$message.error("图片插入失败");
    },
    //上传文章
    deployArticle:function(){
      let that = this;
      
      if(that.articleTitle && that.articleHtml){
        
        let msg = {
          title: that.articleTitle,
          article: that.articleHtml,
          userName: that.userInfo.userName
        }
        post(that.urlUtil.deployArticle,msg).then(function(res){
          console.log(res)
          if(res.data.status == 0){
            $('.deploy-con').slideUp(200);
            that.$message.success('上传成功');
            that.loadUserArticles();
            that.articleTitle = '';
            that.content = '';
          }
        })
      }else{
        that.$message.warning('标题或正文为空');
      }
    },
    //取消上传，关闭deploy
    cancelDeploy:function(){
      $('.deploy-con').slideUp(200);
    }
  },
  
}

</script>

<style>
  @import url("my.css");
  
</style>
