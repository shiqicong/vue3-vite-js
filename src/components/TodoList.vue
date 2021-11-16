

<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <ul v-if="todos.length">
      <li v-for="(todo,index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    {{x}} {{y}}
  </div>
  <!-- 点击改变颜色 -->
  <h1 @click="changeColor">颜色</h1>
</template>

<script setup>
import { ref } from "vue";
// 组合APi的使用
import {useMouse} from '../utils/index'
let title = ref("");
let todos = ref([{title:'学习Vue',done:false}])
let {x,y} = useMouse()
function addTodo() {
  todos.value.push({
    title: title.value,
    done: false,
  });
  title.value = "";
}

let color = ref('red')
const changeColor = () =>{
  color.value = Math.random()>0.5? "blue":"red"
}
</script>
<style scoped>
  /**
  *在 style 标签上，当我们加上 scoped 这个属性的时候，我们定义的 CSS 就只会应用到当前组件的元素上，这样就很好地避免了一些样式冲突的问题。
  *添加scoped，标签和样式的属性上，新增了 data- 的前缀，确保只在当前组件生效。
  *如果在 scoped 内部，你还想写全局的样式，那么你可以用:global 来标记，这样能确保灵活地组合你的样式代码
  *可以通过 v-bind 函数，直接在 CSS 中使用 JavaScript 中的变量
  */
  .done{ color:gray; text-decoration: line-through; }
  h1 { color:v-bind(color);}
</style>