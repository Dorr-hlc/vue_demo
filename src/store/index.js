import Vue from "vue";
import Vuex from "vuex";
import {getUserInfo} from "@/request/api";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    login: false,
    userinfo: {}
  },
  getters: {},
  mutations: {
    ORLOGIN(state) {
      window.localStorage.getItem("token") != null
        ? (state.login = true)
        : (state.login = false);
    },
    USERINFO(state, userinfo) {
      state.userinfo = userinfo;
    }
  },
  actions: {
    OrLogin(context) {
      context.commit("ORLOGIN");
    },
    UserInfo(context, userinfo) {
     return getUserInfo().then(res => {
        context.commit("USERINFO", (userinfo = res));
      });
    }
  },
});
