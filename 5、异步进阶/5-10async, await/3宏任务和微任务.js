console.log(100)
setTimeout(() => {
  console.log(200)
})

Promise.resolve().then(() => {
  console.log(300)
})
console.log(400)

/**
 * 输出结果
 * 100
 * 400
 * 300
 * 200
 */

/**
 * 宏任务和微任务
 * 宏任务： setTimeout，setInterval， Ajax， DOM 事件
 * 微任务： Promise async / await 
 * 微任务执行时机要比宏任务要早
 * 宏任务：DOM渲染后触发，如setTimeout
 * 微任务：DOM渲染前触发，如Promise
 * 
 * 宏任务：浏览器定义的语法
 * 微任务：ES6语法
 */