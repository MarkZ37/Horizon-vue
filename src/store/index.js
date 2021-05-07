import Vue from 'vue'
import Vuex from 'vuex'

import userInfo from './moudles/userInfo'
import token from './moudles/token'

import getters from './getters'
Vue.use(Vuex)
const  store=new  Vuex.Store({
  

  modules:{
    userInfo:userInfo,
    
    token: token,
  },
  getters:getters
})
export default store;
