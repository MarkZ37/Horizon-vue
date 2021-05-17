const getters = {
    userInfo : state =>  state.userInfo,
    userName : state => state.userInfo.userName,
    token : state => state.token,
    articleData : state => state.articleData,
    mainArticle : state => state.mainArticle
}

 export default getters