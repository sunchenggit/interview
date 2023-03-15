/**
 * JS是单线程的，而且和DOM渲染共用一个线程
 * JS执行的时候，得六一些时机供DOM渲染
 */

/**
 * 微任务和宏任务的区别
 * 宏任务：DOM渲染后触发，如setTimeout
 * 微任务：DOM渲染前触发，如Promise
 */

const p1 = $("<p>p1</p>")
const p2 = $("<p>p2</p>")
const p3 = $("<p>p3</p>")

$("#container").append(p1).append(p2).append(p3);

// 微任务：DON渲染前触发
Promise.resolve().then(() => {
  console.log('length1', $('#container').children().length); //3
  alert('Promise then'); // DOM 没有渲染
})

// 宏任务：DOM渲染后触发
setTimeout(() => {
  console.log('length2', $('#container').children().length); // 3
  alert('setTimeout then'); // DOM 渲染了
})