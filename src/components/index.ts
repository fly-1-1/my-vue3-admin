import SvgIcon from "./SvgIcon/index.vue"
import Pagination from "./Pagination/index.vue"
const allGlobalComponent: any = { SvgIcon, Pagination }
//暴露插件对象
export default {
  install(app: any) {
    Object.keys(allGlobalComponent).forEach(key => {
      app.component(key, allGlobalComponent[key])
    })
  }
}
