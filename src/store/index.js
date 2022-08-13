import Vue from 'vue'
import Vuex from 'vuex'
import { TodoHeader, TodoMain, TodoFooter } from './modules'
import createPersistedState from "vuex-persistedstate";

// 注册vuex
Vue.use(Vuex)

//创建Vuex实例

export default new Vuex.Store({
  modules: {
    TodoHeader, TodoMain, TodoFooter
  },
  getters: {
    taskList: (state) => state.TodoMain.taskList,
    //剩余数量
    taskCount(state) {
      if (state.TodoFooter.tag === 'all') {
        return state.TodoMain.taskList.length
      } else if (state.TodoFooter.tag === 'yes') {
        return state.TodoMain.taskList.filter(item => item.state === true).length
      } else {
        return state.TodoMain.taskList.filter(item => item.state === false).length
      }
    },
    //全选按钮
    allState(state) {
      if (state.TodoMain.taskList.every(item => item.state === true)) {
        return true
      }
    },
    //底部统计tag标识
    tag(state) {
      return state.TodoFooter.tag
    }
  },

  plugins: [createPersistedState({
    key: "tudoList", // 指定名称 默认vuex
    // paths: ["setting"] 
  })]
})