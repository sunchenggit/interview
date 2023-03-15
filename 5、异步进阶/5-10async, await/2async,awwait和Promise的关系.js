// 执行 async 函数，返回的是 Promise 对象
// await 相当于 Promise 的 then
// try...catch可捕获异常,代替了 Promise 的 catch

// 异步本质
// async/await 是消灭异步回调的终极武器
// JS还是单线程，还得有异步，还得是基于 event loop
// async/await 只是语法糖，但这颗糖真甜

/*
async function async1 () {
  // 执行 async1 要立马执行函数体 // 2
  console.log('async1 start')
  // 执行 async2 要立马执行函数体
  await async2();
  // await 后面都可以看做是 callback 里的内容，即异步
  // 类似 event loop setTimeout(function (){ console.log('async1 end') })
  // Promise.resolve().then(() => { console.log('async1 end') })
  console.log('async1 end'); // 5
}

async function async2 () {
  console.log('async2'); // 3
}

console.log('script start'); // 1
async1()
console.log('script end'); // 4
// 同步代码执行完（event loop）
*/

async function async1 () {
  console.log('async1 start') // 2
  await async2();
  // 下面三行都是异步回调 callback 的内容
  console.log('async1 end'); // 5
  await async3()
    // 下面一行是异步回调的内容，类似嵌套
    console.log('async end 2'); //7
  }

async function async2 () {
  console.log('async2'); // 3
}

async function async3 () {
  console.log('async3');  // 6
}

console.log('script start'); // 1
async1()
console.log('script end'); // 4
// 同步代码执行完，接下来执行异步代码