const getters = {
    userInfo : state =>  state.userInfo,
    userName : state => state.userInfo.userName,
    token : state => state.token
}

 export default getters