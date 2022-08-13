<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li v-for="(item,index) in taskList" :key="index" :class="item.state===true?'completed':''">
      <div class="view">
        <input class="toggle" type="checkbox"  v-model="item.state" @click="$store.commit('TodoMain/changeState',index)"  />
        <label>{{item.name}}</label>
        <button class="destroy" @click="$store.commit('TodoMain/delTask',index)" ></button>
      </div>
    </li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['taskList'])
  }
};
</script>
