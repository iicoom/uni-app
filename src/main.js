import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
// import tabBar from "./components/tabBar";

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(uView)
// 全局注册组件
// Vue.component('tab-bar', tabBar)

const app = new Vue({
  ...App
})
app.$mount()
