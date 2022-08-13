<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll"/>
    <label for="toggle-all" ></label>
    <input
      class="new-todo" 
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="newtask"
      @keydown.enter="$store.commit('TodoMain/addTask', newtask);newtask=''"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      newtask: "",
    };
  },
  computed: {
            isAll: {
                set(checked){ // 只有true / false
                    // 9.3 影响数组里每个小选框绑定的isDone属性
                    // this.$store.state.TodoMain.taskList.forEach(obj => obj.state = checked)
                    this.$store.commit('TodoMain/changeAll',checked)
                },
                get(){
                    // 9.4 小选框统计状态 -> 全选框
                    // 9.5 如果没有数据, 直接返回false-不要让全选勾选状态
                    return this.$store.state.TodoMain.taskList.length !== 0 && this.$store.state.TodoMain.taskList.every(obj => obj.state === true)
                }
            }
        },
  methods: {},
};
</script>
