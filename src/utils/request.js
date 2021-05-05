// request.js
import axios from "axios";

import store from "@/store";
import urlUtil from "./urlutil"
axios.defaults.baseURL=urlUtil.baseUrl
// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    //判断是否存在token，如果存在将每个页面header都添加token
    console.log(store.state.token)
      if(store.state.token){
        config.headers.Authorization=store.state.token;
        
      }
      return config;
    }, error => {
    // 对请求错误做些什么
      return Promise.reject(error);
    });
//定义方法
export function post(url, params){
    
    return axios.post(url, params); //如果不需要转json的话，那么第二次参数就是params
}
export function get(url,params){
    let basePath=process.env.NODE_ENV=="development" ? "/api/mall" : "/mall";
    return axios.get(basePath+url, { params });
}