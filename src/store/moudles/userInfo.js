const state = {
    userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : '',
    nickName: '',
    avatarUrl: '',
    sign: ''
}

const mutations = {
    
      setUserInfo(state,userInfo){
        
        state.userName = userInfo.userName;
        state.avatarUrl = userInfo.avatarUrl;
        state.nickName = userInfo.nickName;
        state.sign = userInfo.sign;

        localStorage.setItem('userName',userInfo.userName);
  
      }
}

export default { state, mutations };