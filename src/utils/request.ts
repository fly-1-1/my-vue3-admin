//axios封装
import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  let message = '';

  const status = error.response.status;
  switch (status) {
    case 401:
      message = 'Token失效，请重新登录';
      break;
    case 403:
      message = '权限不足';
      break;
    case 404:
      message = '请求的资源不存在';
      break;
    case 500:
      message = '服务器内部错误';
      break;
    default:
      message = '请求失败，请稍后再试';
      break;
  }

  ElMessage({
    type: 'error',
    message: message
  })

})


export default request;
