<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>数量值:{{$store.getters.taskCount}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{'selected': 'all'=== tag}" href="javascript:;" @click="changeTag('all')">全部</a>
      </li>
      <li>
        <a :class="{'selected': 'no'=== tag}" href="javascript:;" @click="changeTag('no')">未完成</a>
      </li>
      <li>
        <a :class="{'selected': 'yes'=== tag}" href="javascript:;" @click="changeTag('yes')" >已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="$store.commit('TodoMain/delCompletedTask')">清除已完成</button>
  </footer>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['tag'])
  },
    methods:{
      ...mapMutations('TodoFooter',['changeTag'])
    }
}
</script>
