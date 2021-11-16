/**
 * 组合式API
 * 我们在组件的入口就可以和普通函数一样使用 useMouse 函数。
 * 在下面的代码中，上面的代码返回的 x 和 y 的值可以在模板任意地方使用，也会随着鼠标的移动而改变数值。
 * ref 和 computed 等功能都可以从 Vue 中全局引入，所以我们就可以把组件进行任意颗粒度的拆分和组合，这样就大大提高了代码的可维护性和复用性。
*/
import {ref, onMounted,onUnmounted} from 'vue'

// 鼠标位置
export function useMouse(){
    const x = ref(0)
    const y = ref(0)
    function update(e) {
      x.value = e.pageX
      y.value = e.pageY
    }
    onMounted(() => {
      window.addEventListener('mousemove', update)
    })
  
    onUnmounted(() => {
      window.removeEventListener('mousemove', update)
    })
    return { x, y }
}

// 星级
export function getStart(rate){
    return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
}

