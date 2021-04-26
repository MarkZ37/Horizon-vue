// request.js
import axios from "axios";
import qs from "qs";

//定义方法
export function post(url, params){
    // let result;
    // axios({
    //     method: 'post',
    //     url:url,
    //     data:params
    //   })
    //   .then(function(res){
    //     console.log("请求成功")
    //     result = res;
    //   })
    //   return result;
    // const basePath=process.env.NODE_ENV=="development" ? "/api" : "/api";
    // console.log(basePath)
    return axios.post(url, params); //如果不需要转json的话，那么第二次参数就是params
}
export function get(url,params){
    let basePath=process.env.NODE_ENV=="development" ? "/api/mall" : "/mall";
    return axios.get(basePath+url, { params });
}