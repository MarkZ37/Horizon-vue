<template>
  <div class="article-detail-con">
    <div class="close-bar">
      <el-button type="danger" @click="closeDetail()" class="close-btn">
        <i class="el-icon-close"></i>
      </el-button>
    </div>
    <div>
      <div class="title-con">{{article.title}}</div>
      <div class="author-con">
        <div class="author-avatar">
          <img :src="article.avatarurl" alt="" class="author-img">
        </div>
        {{article.nickname}}
      </div>
      <div class="time-con">{{timeFormat(article.time)}}</div>

      <el-divider></el-divider>
      <div class="article-con ql-snow ql-editor" v-html="article.article"></div>
      <el-divider></el-divider>
      <div class="support-btn-con">
        <div class="support-con">
          <div v-if="supportStatus.supportFlag">
            <el-button type="info" @click="cancelSupport()">取消赞</el-button>
          </div>
          <div v-else>
            <el-button type="success" round @click="dealSupport()">赞</el-button>
          </div>
        </div>
        <div class="dislike-con">
          <div v-if="supportStatus.dislikeFlag">
            <el-button type="info" @click="cancelDislike()">取消踩</el-button>
          </div>
          <div v-else>
            <el-button type="danger" round @click="dealDislike()">踩</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { datetimeFormat } from '@/utils/formatutil.js'
  import $ from 'jquery';
  import { mapGetters } from 'vuex';
  import { post } from '@/utils/request.js';

  export default {
    name: 'Detail',
    props: ['article', 'supportStatus'],
    data() {
      return {

      }

    },

    computed: {
      ...mapGetters(['userInfo'])
    },
    mounted() {

    },
    onbeforeunload() {

    },
    methods: {
      timeFormat(dateTime) {
        return datetimeFormat(dateTime, 'yyyy-MM-dd HH:mm')
      },
      closeDetail() {
        $('.article-detail-con').slideUp(200)
      },
      //点赞
      dealSupport: function () {
        let that = this;

        let msg = {
          userName: that.userInfo.userName,
          articleId: that.article.id
        }
        if (that.supportStatus.dislikeFlag == 1) {

          post(that.urlUtil.webCancelDislike, msg).then(function (res) {

            if (res.data.status == 0) {

              that.supportStatus.dislikeFlag = 0;
              post(that.urlUtil.webSupportArticle, msg).then(function (res) {
                if (res.data.status == 0) {
                  that.$message.success('点赞成功')
                  that.supportStatus.supportFlag = 1;
                }
              })
            }
          })

        } else {
          post(that.urlUtil.webSupportArticle, msg).then(function (res) {
            if (res.data.status == 0) {
              that.$message.success('点赞成功')
              that.supportStatus.supportFlag = 1;
            }
          })
        }

      },
      //点踩
      dealDislike: function () {
        let that = this;

        let msg = {
          userName: that.userInfo.userName,
          articleId: that.article.id
        }
        if (that.supportStatus.supportFlag == 1) {
          post(that.urlUtil.webCancelSupport, msg).then(function (res) {
            if (res.data.status == 0) {
              that.supportStatus.supportFlag = 0;
              post(that.urlUtil.webDislikeArticle, msg).then(function (res) {
                if (res.data.status == 0) {
                  that.$message.success('点了踩')
                  that.supportStatus.dislikeFlag = 1;
                }
              })

            }
          })

        } else {
          post(that.urlUtil.webDislikeArticle, msg).then(function (res) {

            if (res.data.status == 0) {

              that.$message.success('点了踩')
              that.supportStatus.dislikeFlag = 1;

            }
          })
        }


      },
      //取消赞
      cancelSupport: function () {
        let that = this;

        let msg = {
          userName: that.userInfo.userName,
          articleId: that.article.id
        }

        post(that.urlUtil.webCancelSupport, msg).then(function (res) {

          if (res.data.status == 0) {

            that.supportStatus.supportFlag = 0;

          }
        })


      },
      //取消踩
      cancelDislike: function () {
        let that = this;
        let msg = {
          userName: that.userInfo.userName,
          articleId: that.article.id
        }

        post(that.urlUtil.webCancelDislike, msg).then(function (res) {

          if (res.data.status == 0) {

            that.supportStatus.dislikeFlag = 0;

          }
        })


      }

    },

  }

</script>

<style>
  .article-detail-con {
    /* padding: 10px; */
    display: none;
    position: fixed;
    z-index: 1000;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1050px;
    height: 625px;
    background-color: white;

    overflow: scroll;

  }

  .close-bar {
    width: 1050px;
    /* height: 50px; */
    position: fixed;
    float: right;
    background-color: whitesmoke;
    z-index: 2;
  }

  .close-btn {
    border-radius: 0;
    float: right;
  }

  .title-con {
    margin-top: 45px;
  }

  .title-con {
    text-align: center;
    font-size: 35px;
    font-weight: 700;
  }

  .author-con {
    height: 40px;
    line-height: 40px;
    text-align: right;
  }

  .author-avatar {
    height: 40px;
    width: 40px;
    margin-left: 5px;
    float: right;
  }

  .author-img {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    object-fit: cover;
  }

  .author-img:hover {
    cursor: pointer;
  }

  .time-con {
    text-align: right;
  }

  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }

  .article-con img {
    max-width: 80%;
    margin: 5px auto;
    display: block;

  }
</style>