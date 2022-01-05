import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    task:{
    taskName:'',
    taskDate:'',
    taskImportance:'',
    },
  },
  mutations: {
    setTaskName(state,taskName){
      state.task.taskName= taskName
    },
    setTaskDate(state,taskDate){
      state.task.taskDame= taskDate
    },
    setTaskImportance(state,taskImportance){
      state.task.taskImportance= taskImportance
    }
  },
  actions: {
    setTaskName({commit},taskName){
      commit('setTaskName', taskName)
    },
    setTaskName({commit},taskDate){
      commit('setTaskDate', taskDate)
    },
    setTaskName({commit},taskImportance){
      commit('setTaskImportance', taskImportance)
    }
  },
});