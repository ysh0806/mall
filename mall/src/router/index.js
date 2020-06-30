import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '',
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("views/home/Home")
    },
    {
      path: "/category",
      component: () => import("views/category/Category")
    },
    {
      path: "/shopcart",
      component: () => import("views/shopcart/Shopcart")
    },
    {
      path: "/profile",
      component: () => import("views/profile/Profile")
    }
  ],
  mode: "history"
})
