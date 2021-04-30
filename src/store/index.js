import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const  store=new  Vuex.Store({
  state:{
    //赋值
    token:localStorage.getItem('token') ? localStorage.getItem('token'):''
  },
  mutations:{
    setToken(state,token){
      state.token=token;
    //   这段代码token.token , 是因为在login.vue中调用这个方法传进来的是一个对象
    // （即使你觉的你传进来的是一个字符串，不知道为什么会被放到object里去），
    //   传进来的对象里有token这个属性
      localStorage.setItem("token",token.token);
    } ,
    delToken(state){
      state.token='';
      localStorage.removeItem("token");
    }
  }
})
export default store;
