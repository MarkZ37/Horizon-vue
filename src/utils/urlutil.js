const baseUrl = 'http://localhost:8080';
const rootApi = '/api';
const userApi = '/user';
const articleApi = '/article';

const login = rootApi + userApi + '/weblogin';
const regist = rootApi + userApi + '/webregist';
const getUserInfo = rootApi + userApi + '/webgetuserinfo';
const uploadAvatarUrl = rootApi + userApi + '/uploadavatarurl';
const deployArticle = rootApi + articleApi + '/webdeployarticle';
const getUserArticle = rootApi + articleApi + '/webgetuserarticle';

const imgOSSUpload = '/tool/oss/homeImageUpload';

export default{
    baseUrl,
    login,
    regist,
    getUserInfo,
    uploadAvatarUrl,
    deployArticle,
    getUserArticle,
    imgOSSUpload
}