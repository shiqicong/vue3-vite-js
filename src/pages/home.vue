
<template>
    <h1>这是首页</h1>
    <TodoList />  
    <div>{{getStart(3)}}</div>  
    <!-- <Rate :value="score" theme="red" @update-rate="update"></Rate> -->
      <Rate v-model="score" theme="red"></Rate>
</template>

<script setup>
/**
 * 使用 <script setup> 可以让代码变得更加精简，这也是现在开发 Vue 3 项目必备的写法
*/
import { ref } from 'vue'
import TodoList from '../components/TodoList.vue'
import {getStart} from '../utils/index'
import Rate from '../components/Rate.vue'
let score = ref(3.5)
function update(num){
    score.value = num
}
</script>
