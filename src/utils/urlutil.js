const baseUrl = 'http://localhost:8080';
const rootApi = '/api';
const login = rootApi + '/user/weblogin';
const regist = rootApi + '/user/webregist';
const getUserInfo = rootApi + '/user/webgetuserinfo';
const imgOSSUpload = '/tool/oss/homeImageUpload';

export default{
    baseUrl,
    login,
    regist,
    getUserInfo,
    imgOSSUpload
}