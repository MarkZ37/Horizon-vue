const state = {
    mainArticle: [],
    
}

const mutations = {
    setMainArticle(state,pageInfo){
        
        state.mainArticle = pageInfo;
        
    }
}
export default { state, mutations };