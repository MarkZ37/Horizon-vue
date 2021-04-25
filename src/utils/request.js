// request.js
import axios from "axios";
import qs from "qs";

//定义方法
export function post(url, params){
    const basePath=process.env.NODE_ENV=="development" ? "/api/mall" : "/mall";
    return axios.post(basePath+url, qs.stringify(params)); //如果不需要转json的话，那么第二次参数就是params
}
export function get(url,params){
    let basePath=process.env.NODE_ENV=="development" ? "/api/mall" : "/mall";
    return axios.get(basePath+url, { params });
}