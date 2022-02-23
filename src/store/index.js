import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        taskName: "",
        taskDate: "",
        taskImportance: "",
      },
    ],
  },
  mutations: {
    setTask(state, tasks) {
      state.tasks = tasks
    },
  },
  actions: {
    setTask({ commit }, tasks) {
      commit("setTask", tasks);
    },
  },
});
