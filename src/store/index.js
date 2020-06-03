import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: null,
    inputValue: "",
  },
  getters: {
    getInputValue(state) {
      console.log("state inputValue ", state.inputValue);
      return state.inputValue;
    },
    getResult(state) {
      console.log("state result ", state.result);
      return state.result;
    },
  },
  mutations: {
    setResult(state, payload) {
      state.result = payload;
    },
    setInputValue(state, payload) {
      state.inputValue = payload;
    },
  },
  actions: {
    async fetchData({ commit, state }) {
      console.log("inputValue ", state.inputValue);
      axios
        .get(`https://api.github.com/users/${state.inputValue}`)
        .then((response) => {
          commit("setResult", response.data);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
  },
});
