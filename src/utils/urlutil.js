const baseUrl = 'http://localhost:8080';
const rootApi = '/api';
const userApi = '/user';
const articleApi = '/article';
const followApi = '/follow';

const login = rootApi + userApi + '/weblogin';
const regist = rootApi + userApi + '/webregist';
const getUserInfo = rootApi + userApi + '/webgetuserinfo';
const uploadAvatarUrl = rootApi + userApi + '/uploadavatarurl';
const webGetOtherUserInfo= rootApi + userApi + '/webgetotheruserinfo';

const deployArticle = rootApi + articleApi + '/webdeployarticle';
const getUserArticle = rootApi + articleApi + '/webgetuserarticle';
const getArticle = rootApi + articleApi + '/webgetarticle';
const webGetSupportStatus = rootApi + articleApi + '/webgetsupportstatus';
const webSupportArticle = rootApi + articleApi + '/websupportarticle';
const webDislikeArticle = rootApi + articleApi + '/webdislikearticle';
const webCancelSupport = rootApi + articleApi + '/webcancelsupport';
const webCancelDislike = rootApi + articleApi + '/webcanceldislike';

const followUser = rootApi + followApi + '/webfollowuser';
const isFollowJudge = rootApi + followApi + '/isfollowjudge';
const cancelFollowUser = rootApi + followApi + '/webcancelfollowuser';
const getUserFollowList = rootApi + followApi + "/getuserfollowlist";

const imgOSSUpload = '/tool/oss/homeImageUpload';

export default{
    baseUrl,
    login,
    regist,
    getUserInfo,
    uploadAvatarUrl,

    deployArticle,
    getUserArticle,
    getArticle,
    webGetSupportStatus,
    webSupportArticle,
    webDislikeArticle,
    webCancelSupport,
    webCancelDislike,

    webGetOtherUserInfo,
    followUser,
    isFollowJudge,
    cancelFollowUser,
    getUserFollowList,
    
    imgOSSUpload
}