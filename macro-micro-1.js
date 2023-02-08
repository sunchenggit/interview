console.log(100)

// 宏任务
setTimeout(() => {
  console.log(200)
})

// 微任务
Promise.resolve().then(() => {
  console.log(300)
})

console.log(400)

// 微任务比宏任务的执行时机要早