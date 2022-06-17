// 封装请求参数
import http from "./http.js";
import qs from "qs";
function request({ method = "get", url, data = {}}) {
  return http({
    method,
    url,
    params: method === "get" ? qs.stringify(data):"",
    data: method === "post" ? qs.stringify(data):"",
  })
}

export default request;
