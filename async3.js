/*
async function async1 () {
  console.log('async1 start')   // 2 执行 async 方法，会直接执行这个函数 和 Promise 一样
  await async2()   // undefined 这里可以看做，先执行 async2 在await
  // await 后面都可以看做是 callback 里的内容，即异步
  // 类似 event loop setTimeout(cb1)
  // setTimeout(() => {console.log('async1 end')})
  // Promise.resolve().then(() => console.log('async1 end'))
  console.log('async1 end')  // 5
}

async function async2 () {
  console.log('async2')       // 3
}

console.log('script start') // 1
async1()
console.log('script end')  // 4

// 同步代码执行完成 (event loop)
*/

async function async1 () {
  console.log('async1 start')  // 2
  await async2()
  console.log('async1 end')  // 5
  await async3()
  console.log('async1 end 2') // 7
}

async function async2 () {
  console.log('async2')  // 3
}

async function async3 () {
  console.log('async3') // 6
}

console.log('script start')  // 1
async1()
console.log('script end')  // 4
