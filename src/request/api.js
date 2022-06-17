// 封装页面请求
import request from '@/request/request.js'

// 登录 用户管理 权限管理页面的api请求
 
// 登录验证接口
export const addLogin = (data) =>request({ url: '/api/login', method: "post", data})
 
// 获取登录信息
export const getUserInfo = (data) =>request({ url: '/userinfo', method: "get", data})
 