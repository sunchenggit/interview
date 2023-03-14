/**
 * 三种状态
 * 1. pending
 * 2. fulfilled
 * 3. rejected
 * 
 * pending => fulfilled
 * 或则
 * pending => rejected
 */

const p1 = new Promise((resolve, reject) => {

})

console.log('p1', p1); // pending 状态

const p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve()
  })
})

console.log('p2', p2); // pending 一开始打印时
setTimeout(() => { console.log('p2-settimeout', p2) }) // fulfilled

const p3 = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject()
  })
})

console.log('p3', p3); // pending 一开始打印时
setTimeout(() => { console.log('p3-settimeout', p3) }) // rejected

/**
 * 状态的表现
 * pending 状态，不触发 then 和 catch
 * resolved 状态，会触发后续的 then 回调函数
 * rejected 转态，会触发后续的 catch 回调函数
 */