/*
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2022-06-08 14:18:04
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2022-06-17 10:05:56
 * @RevisionHistory: 
 */
import Vue from "vue"
import Router from "vue-router"
import login from "@/components/login"
import index from "@/components/index"
import register from "@/components/register"
Vue.use(Router)

export default new Router({
  mode: "history", // 去掉url中的#
  routes: [
    {
      name: "index",
      path: "/",
      component: index
    },
    {
      name: "login",
      path: "/login",
      component: login
    },
    {
      name: "register",
      path: "/register",
      component: register
    },
  ]
});
