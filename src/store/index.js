import Vue from 'vue'
import Vuex from 'vuex'

import userInfo from './moudles/userInfo'
import token from './moudles/token'
import article from './moudles/article'
import mainArticle from './moudles/mainarticle'
import getters from './getters'
Vue.use(Vuex)
const  store=new  Vuex.Store({
  

  modules:{
    userInfo : userInfo,
    articleData : article,
    mainArticle : mainArticle,
    token : token,
  },
  getters:getters
})
export default store;
