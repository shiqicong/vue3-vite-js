
<template>
    <div>这里是首页</div>
    🌹 todoList 使用Vue 3内置的 traisition和transition-group 组件来控制组件的动画<br/>
    （可以通过输入内容点击回车或者不输入任何内容点击回车来尝试）
    <TodoList />  

    🌹 通过组合API，实现获取鼠标位置
    <div>{{x}},{{y}}</div>

    🌹 点击改变字体颜色（css中通过v-bind绑定color变量）
    <h3 @click="changeColor">颜色</h3>

    🌹 获取评分的公共方法
    <div>{{getStart(3)}}</div> 

    🌹 评分组件（v-modal的形式实现修改评分）
    <!-- 正常的组件调用 -->
    <!-- <Rate :value="score" theme="red" @update-rate="update"></Rate> -->
    <!-- v-model的形式 -->
      <Rate v-model="score" theme="red" />
      🌹 vuex (手动封装迷你vux实现点击数据累加)
      <Count />
</template>

<script setup>
/**
 * 使用 <script setup> 可以让代码变得更加精简，这也是现在开发 Vue 3 项目必备的写法
*/
import { ref } from 'vue'
import TodoList from '../components/TodoList.vue'
import {getStart} from '../utils/index'
import Rate from '../components/Rate.vue'
import Count from '../components/Count.vue'

// 组合APi的使用
import {useMouse} from '../utils/index'
let {x,y} = useMouse()

// 点击改变字体颜色
let color = ref('red')
const changeColor = () =>{
  color.value = Math.random()>0.5? "blue":"red"
}

// 评分
let score = ref(3.5)
function update(num){
    score.value = num
}
</script>
<style  scoped>
    h3{ color:v-bind(color);}
</style>