const getters = {
    userInfo : state =>  state.userInfo,
    userName : state => state.userInfo.userName,
    token : state => state.token,
    articleData : state => state.articleData
}

 export default getters