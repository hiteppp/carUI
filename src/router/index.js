import Vue from 'vue'
import VueRouter from 'vue-router'
import MapView from '../views/MapView.vue'
import map from '../views/BaiduMap.vue'
import HealthView from '../views/HealthView.vue'
import MusicView from '../views/MusicView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',//如果你的路径是/,那就显示HomeView这个组件
    name: 'map',
    component: map
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/MapView',//如果你的路径是/,那就显示HomeView这个组件
    name: 'MapView',
    component: MapView
  },
  {
    path: '/HealthView',//如果你的路径是/,那就显示HomeView这个组件
    name: 'HealthView',
    component: HealthView
  },
  {
    path: '/MusicView',//如果你的路径是/,那就显示HomeView这个组件
    name: 'MusicView',
    component: MusicView
  },
  // {
  //   path: '/MapView',//如果你的路径是/,那就显示HomeView这个组件
  //   name: 'MapView',
  //   component: MapView
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
