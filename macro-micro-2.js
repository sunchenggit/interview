const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')
$("#container").append($p1).append($p2).append($p3)

// alert('本次 call stack 结束， DOM 结构已更新，但是尚未触发渲染')

// 微任务：DOM 渲染前触发
Promise.resolve().then(() => {
  console.log('length', $("#container").children().length)
  alert('Promise then') // DOM 没有渲染
})

// 宏任务：DOM 渲染后出触发
setTimeout(() => {
  console.log('length', $("#container").children().length)
  alert('setTimeout')  // DOM 渲染了
})
