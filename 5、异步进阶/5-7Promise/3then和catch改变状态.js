/**
 * then 正常返回 fulfilled 里面有报错则返回  rejected
 * catch 正常返回 fulfilled 里面有报错则返回 rejected
 */

/*
const p1 = Promise.resolve().then(() => {
  return 100
})

console.log('p1', p1); //fulfilled 触发后续 then 回调
p1.then((res) => { console.log(res) }); // 100

const p2 = Promise.resolve().then(() => {
  throw new Error('then error')
})

console.log('p2', p2); //rejected 触发后续 catach 回调
p2.catch(err => {
  console.error(err); // Error: then error
})*/

const p3 = Promise.reject('my error').catch(err => {
  console.error(err)
})
console.log('p3', p3); // fulfilled

const p4 = Promise.reject('my error1').catch(err => {
  throw new Error('catch errr')
})
console.log('p4', p4); // rejected