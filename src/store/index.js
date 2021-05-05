import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const  store=new  Vuex.Store({
  state:{
    //赋值
    token:localStorage.getItem('token') ? localStorage.getItem('token'):'',
    userInfo:localStorage.getItem('userInfo') ? localStorage.getItem('userInfo'):''
    // userInfo:{
    //   userName:'',
    //   nickName:'',
    //   avatarUrl:'',
    //   sign:'',
    // }
  },
  mutations:{
    setToken(state,token){
      state.token=token;
    
      localStorage.setItem('token',token);
    } ,
    delToken(state){
      state.token='';
      localStorage.removeItem('token');
    },
    setUserInfo(state,userInfo){

      

      state.userInfo = userInfo

      // state.userInfo.userName = userInfoObj.userName;
      // state.userInfo.avatarUrl = userInfoObj.avatarUrl;
      // state.userInfo.nickName = userInfoObj.nickName;
      // state.userInfo.sign = userInfoObj.sign;

      localStorage.setItem('userInfo',userInfo)
    }
  },
  getters:{
    getUserInfo(state){

    }
  }
})
export default store;
