

<template>
  <div>
    <div class="input-con">
      <input type="text" v-model="title" @keydown.enter="addTodo" />
      <transition name="modal">
        <div class="info-wrapper" v-if="showModal">
          <div class="info">
            你啥也没输入！
          </div>
        </div>
  </transition>
    </div>
    <ul v-if="todos.length">
      <transition-group name="flip-list" tag='ul'>
            <li v-for="(todo,index) in todos" :key="index">
              <input type="checkbox" v-model="todo.done" />
              <span :class="{ done: todo.done }"> {{ todo.title }}</span>
            </li>
      </transition-group>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
let title = ref("");
let todos = ref([{title:'学习Vue3.2',done:false}])
let showModal = ref(false)
function addTodo() {
   if(!title.value){
      showModal.value = true 
      setTimeout(()=>{ showModal.value = false },1500) 
      return 
    } 
      todos.value.push({ title: title.value, done: false, })
      title.value = ""
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
  *transition:v-enter-from 中的 v，就是我们设置的 name 属性。所以在我们现在这个案例中，标签在进入和离开的时候，会有 fade-enter-active 和 fade-leave-active 的 class，进入的开始和结束会有 fade-enter-from 和 face-enter-to 两个 class。
  *列表动画 内置组件 transition-group 想比与transition，新增了 v-move 类
  *
  */
  .done{ color:gray; text-decoration: line-through; }

.input-con{
  display: flex;
}
  .modal-enter-from {
    opacity: 0;
    transform: translateX(60px);
  }
  .modal-enter-active {
    transition: all 0.3s ease;
  }
  .modal-leave-to {
    opacity: 0;
    transform: translateX(60px);
  }
  .modal-leave-active {
    transition: all 0.3s ease;
  }
  .flip-list-move { transition: transform 0.8s ease;}
  .flip-list-enter-active,.flip-list-leave-active { transition: all 1s ease;}
  .flip-list-enter-from,.flip-list-leave-to { opacity: 0; transform: translateX(30px);}
</style>

