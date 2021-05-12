const state = {
    articleData: []
}

const mutations = {
    setArticleData(state,articles){
        
        state.articleData = articles;
    }
}
export default { state, mutations };