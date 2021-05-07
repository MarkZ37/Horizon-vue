const state = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
}

const mutations = {
    setToken(state,token){
        state.token = token;

        localStorage.setItem('token',token)
    }
}
export default { state, mutations };