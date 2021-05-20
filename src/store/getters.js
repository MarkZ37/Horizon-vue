const getters = {
    userInfo : state =>  state.userInfo,
    otherUserInfo : state => state.otherUserInfo,
    userName : state => state.userInfo.userName,
    otherUserName : state => state.otherUserInfo.userName,
    token : state => state.token,
    articleData : state => state.articleData,
    mainArticle : state => state.mainArticle
}

 export default getters