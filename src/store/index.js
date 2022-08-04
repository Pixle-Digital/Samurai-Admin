import Vue from "vue";
import Vuex from "vuex";

import app from "../main";
import menu from "./modules/menu";
import user from "./modules/user";
import chat from "./modules/chat";
import todo from "./modules/todo";
import survey from "./modules/survey";
import { setCurrentLanguage } from "../utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiData: {},
    sourceData: {},
    complaiChat: [
      {
        message: "This is Complai Bot , Is There any i can do for you ?",
        time: new Date()
      }
    ]
  },
  mutations: {
    changeLang(state, payload) {
      app.$i18n.locale = payload;
      setCurrentLanguage(payload);
    },
    storeApiData(state, payload) {
      state.apiData = payload;
    },
    addComplaiChat(state, payload) {
      state.complaiChat.push(payload);
    },
    addSourcedata(state, payload){
      state.sourceData = payload;
    }
  },
  actions: {
    setLang({ commit }, payload) {
      commit("changeLang", payload);
    },
    setApiData({ commit }, payload) {
      commit("storeApiData", payload);
    },
    setComplaiData({ commit }, payload) {
      commit("addComplaiChat", payload);
    },
    setSourceData({ commit }, payload) {
      commit("addSourcedata", payload);
    }
  },
  getters: {
    getApiData: state => {
      return state.apiData;
    },
    getComplaiChat: state => {
      return state.complaiChat;
    },
    getSourceData: state => {
      return state.sourceData;
    }
  },
  modules: {
    menu,
    user,
    chat,
    todo,
    survey
  }
});
