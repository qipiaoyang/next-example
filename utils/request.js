import axios from "axios";
import qs from "qs";
import { message } from "antd";
import {TIMEOUTTIME} from "../../config/constants";
import Promise from 'promise-polyfill';

export default function request(url, opt = {}, config) {
  // 取传进来的用户信息
  let {
    type,
    body,
  } = opt;

  let params = {}, data = null;
  // 非GET方式
  if (type.toUpperCase() !== "GET") {
    data = body;
    params = undefined;
  }

  // 拼接post form data
  let transformRequest = [];

  let instance = axios.create({
    responseType: 'json', // 默认值是json
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: true,
    timeout: TIMEOUTTIME
  });
  
  // 表单类型的POST请求需要做转换
     if (type.toLowerCase() === 'post') {
       transformRequest = [function (data) {
        let ret = qs.stringify(data);
        return ret;
       }]
     }

  // 响应中间处理层
  instance.interceptors.response.use(function (response) {

    if(response && response.status >= 200 && response.status < 300) {
      if(response.data.code === 200) {

        return {
          data: response.data,
          success: true,
        };
      } else {
        if(response && response.data && response.data.code === "401") {
          return {
            data: response.data,
            success: false,
          }
        } else {
          return {
            data: response.data,
            success: false,
          }
        }
      }
    } else {
      message.error(response.message);
    }

  }, function (error) {
    // 请求失败 错误在此
    return Promise.reject(error);
  });

  let promise = instance.request({
    url,
    method:type,
    params,
    data,
    transformRequest
  });
  return promise;
}
