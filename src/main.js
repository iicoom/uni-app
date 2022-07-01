import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import {router} from "./router/router";
import { RouterMount } from 'uni-simple-router';
import api from "./utils/api";

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(uView)
Vue.use(router)
Vue.use(api)

const app = new Vue({
  ...App
})

// #ifdef H5
RouterMount(app,router,'#app')
// #endif

app.$mount()
