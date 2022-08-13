//头部模块
export const TodoHeader = {
  namespaced: true,
  state: {
    allState: false
  },
  mutations: {

  },
  actions: {

  }
}
//主体模块
export const TodoMain = {
  namespaced: true,
  state: {
    taskList: []
  },
  mutations: {
    //添加新任务
    addTask(state, payload) {
      state.taskList.unshift({ state: false, name: payload })
    },
    //全选状态
    changeAll(state, payload) {
      // 将每个任务的状态改成isALL的状态
      state.taskList.forEach(item => (item.state = payload))
    },

    // },
    //更改状态
    changeState(state, index) {
      state.taskList[index].state = !state.taskList[index].state
    },
    //删除任务
    delTask(state, index) {
      state.taskList.splice(index, 1)
    },
    //清除已完成的任务
    delCompletedTask(state) {
      state.taskList = state.taskList.filter(item => item.state === false)
    }

  },
  actions: {

  }
}
//底部模块
export const TodoFooter = {
  namespaced: true,
  state: {
    tag: 'all'
  },
  mutations: {
    //tag赋值
    changeTag(state, payload) {
      state.tag = payload
    }
  },
  actions: {

  }
}