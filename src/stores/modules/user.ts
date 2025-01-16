//创建 用户相关的 store 模块
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user';

//引入路由
import { constantRoute } from '@/router/routes'

//创建用户的小仓库
const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('token') || '',
      menuRoutes: constantRoute
    }
  },
  actions: {
    async userLogin(data: any) {
      const res: any = await reqLogin(data)
      if (res.code === 200) {
        this.token = res.data.token
        console.log(res.code)
        localStorage.setItem('token', res.data.token)
        return 'ok';
      } else {
        console.log(res.code)
        return Promise.reject(new Error(res.data.message))
      }

    }
  },
  getters: {

  }
})

export default useUserStore;
