async function fn1 () {
  // return 100 // 相当于 return Promise.resolve(100)
  return Promise.resolve(200)
}

// const res1 = fn1(); // 执行 async 函数，返回的是一个promise对象
// // console.log(res1) // Promise 对象
// res1.then(res => {
//   console.log(res) // 200
// })

// !(async function () {
//   const p1 = Promise.resolve(300)
//   const data = await p1 // await 相当于 Promise then
//   console.log('data', data); // 300
// })()

// !(async function () {
//   const data1 = await 400 // await Promise.resolve(400)
//   console.log('data1', data1); // 400
// })()

// !(async function () {
//   const data2 = await fn1()
//   console.log('data2', data2)
// })()

!(async function () {
  const p4 = Promise.reject('err1')
  const res = await p4 // 报错终止执行
  console.log(res) // 不会执行
})()

// !(async function () {
//   const p4 = Promise.reject('err1') // rejected 状态
//   try {
//     const res = await p4
//     console.log(res)
//   } catch (ex) {
//     console.error(ex) // try ... catch 相当于 Promise catch
//   }
// })()

