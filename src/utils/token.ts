//封装本地存储数据和读取数据方法
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('token', token)
}
