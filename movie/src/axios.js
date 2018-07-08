//axios.js
import axios from 'axios'
import store from './store'
import router from './router'
//创建axios实例
var instance = axios.create({
 timeout: 5000, //请求超过5秒即超时返回错误
 headers: { 'Content-Type': 'application/json;charset=UTF-8' },
 baseURL:'http://118.89.35.145:9998/api',
});
//request拦截器
instance.interceptors.request.use(
 config => {
  //判断是否存在token，如果存在的话，则每个http header都加上token
  if (store.state.token) {
   config.headers.Authorization = `token ${store.state.token}`;
  }
  return config;
 },
 err => {
        return Promise.reject(err);
 }
);
//respone拦截器
export default {
  //用户注册
  userRegister(data){
    return instance.post('/user/register', data);
  },
  //用户登录
  userLogin(data){
    return instance.post('/user/login', data);
  },
  postIndent(data){
    return instance.post('/api/postindent',data);
  },
  getIndent(data){
    return instance.post('/api/getindent', data);
  }
}
