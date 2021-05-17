const state = {
    mainArticle: []
}

const mutations = {
    setMainArticle(state,articles){
        
        state.mainArticle = articles;
    }
}
export default { state, mutations };