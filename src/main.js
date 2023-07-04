import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Y2oj9NAs229CH4AgEgBvTY4MnFxGgYHX'
})
new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
    //安装全局事件总线，$bus就是当前应用的vm
  },
  render: h => h(App)
}).$mount('#app')
