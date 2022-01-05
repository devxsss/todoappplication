import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskName:'',
    taskDate:'',
    taskImportance:'',
  },
  mutations: {
    setTaskName(state,taskName){
      state.taskName= taskName
    },
    setTaskDate(state,taskDate){
      state.taskDame= taskDate
    },
    setTaskName(state,taskImportance){
      state.taskImportance= taskImportance
    }
  },
  actions: {
    setTaskName(state,taskName){
      state.taskName= taskName
    },
    setTaskDate(state,taskDate){
      state.taskDame= taskDate
    },
    setTaskName(state,taskImportance){
      state.taskImportance= taskImportance
    }
  },
  modules: {},
});