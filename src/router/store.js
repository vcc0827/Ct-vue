import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: 'http://10.40.4.15:3000',
    user_id: isLogin().user_id,
    user_name: isLogin().user_name,
    user_phone: isLogin().user_phone,
    user_address: isLogin().user_address,
    user_image_url: isLogin().user_image_url,
    isLogin: isLogin().isLogin,
  },
  getters: {
    isLogin(state) {
      return state.isLogin;
    },
    UserId(state) {
      return state.user_id;
    },
    UserName(state) {
      return state.user_name
    },
    UserPhone(state) {
      return state.user_phone
    },
    UserAddress(state) {
      return state.user_address
    },
    UserImageUrl(state) {
      return (state.url + state.user_image_url).replace(/\"/g, "")
    }
  }
});

function isLogin() {
  var login = {};
  login.user_id = localStorage.getItem("user_id");
  login.user_name = localStorage.getItem("user_name");
  login.user_phone = localStorage.getItem("user_phone");
  login.user_address = localStorage.getItem("user_address");
  login.user_image_url = localStorage.getItem("user_image_url");
  if (login.user_phone) {
    login.isLogin = true;
  } else {
    login.isLogin = false;
    localStorage.clear();
  }
  return login;
}
