async function fn1 () {
  return 100
}

!(async function () {
  const a = fn(); // Promise
  const b = await fn(); // 100
})()


!(async function fn2 () {
  console.log('start')
  const a = await 100; // 如果是具体值，那么 a 就等于这个具体值
  console.log('a', a)
  const b = await Promise.resolve(200); // await 相当于 then，所以这里 b = 200
  console.log('b', b)
  const c = await Promise.reject(300); //  await 相当于 then，但是这里是reject 需要catch，所以 await 会报错
  console.log('c', c);// 上面报错，下面这两步就不执行了
  console.log('end')
})()


async function async1 () {
  console.log('async1 start')
  await async2()
  // await 后面作为回调执行 = 微任务 1
  console.log('async1 end')
}

async function async2 () {
  console.log('async2')
}

console.log('script start')

setTimeout(() => { // 宏任务1
  console.log('setTimeout')
}, 0)

async1()

// 初始化Promise时传入的函数会被立刻执行
new Promise((resolve, reject) => {
  console.log('promise1')
  resolve()
}).then(() => {
  // 微任务2
  console.log('promise2')
})

console.log('script end')

// 同步代码执行完毕（event loop - callback)清空
// 执行微任务代码
// 渲染DOM节点
// 触发 eventloop 执行宏任务代码

/**
 * 运行结果
 * 1. script start
 * 2. async1 start
 * 3. async2
 * 4. promise1
 * 5. script end
 * 6. async1 end
 * 7. promise2
 * 8. setTimeout
 */