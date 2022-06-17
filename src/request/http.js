// 封装请求
import axios from "axios";
import { Message } from "element-ui";
import router from "../router";
// axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'
// 请求
const http = axios.create({
  baseURL: "http://127.0.0.1",
  timeout: 6000
});
// 请求拦截
http.interceptors.request.use(
  config => {
    //请求头设置
    let token = window.localStorage.getItem("token");
    token && (config.headers.Authorization = "Bearer" + " " + token);
    return config;
  },
  err => {
    console.log(err);
  }
);
// 响应拦截
http.interceptors.response.use(
  arr => {
    // 对响应码的处理
    switch (arr.data.status) {
      case 200:
        Message({
          message: arr.data.message,
          type: "success"
        });
        break;
      case 201:
        Message({
          message: arr.data.message,
          type: "success"
        });
        break;
      case 204:
        Message({
          message: arr.data.message,
          type: "success"
        });
        break;
      case 400:
        Message({
          message: "1",
          type: "warning"
        });
        break;
      case 401:
        Message({
          message: arr.data.message,
          type: "warning"
        });
        router.replace({
          path: "login",
          query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
        break;
      case 403:
        Message({
          message: arr.data.message,
          type: "warning"
        });
        break;
      case 404:
        Message({
          message: arr.data.message,
          type: "warning"
        });
        break;
      case 422:
        Message({
          message: arr.data.message,
          type: "warning"
        });
        break;
      case 500:
        Message({
          message: arr.data.message,
          type: "error"
        });
        break;
    }
    return arr.data;
  },
  err => {
    console.log(err);
  }
);
// 返出
export default http;
