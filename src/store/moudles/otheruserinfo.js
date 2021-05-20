const state = {
    otherUserName: localStorage.getItem('otherUserName') ? localStorage.getItem('otherUserName') : '',
    nickName: '',
    avatarUrl: '',
    sign: ''
}

const mutations = {
    
      setOtherUserInfo(state,userInfo){
        
        state.otherUserName = userInfo.username;
        state.avatarUrl = userInfo.avatarurl;
        state.nickName = userInfo.nickname;
        state.sign = userInfo.sign;

        localStorage.setItem('otherUserName',userInfo.username);
  
      }
}

export default { state, mutations };