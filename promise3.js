/*
const p1 = Promise.resolve().then(() => {
  return 100
})

// console.log('p1', p1); // resolved 触发后续 then 回调
p1.then((res) => {
  console.log('p1-then', res)
})

const p2 = Promise.resolve().then(() => {
  throw new Error('then error')
})

// console.log('p2', p2);  // rejected 触发后续 catch 回调
p2.catch(err => {
  console.log('p2-catch', err)
})
*/

const p3 = Promise.reject('my error').catch(err => {
  console.log(err);
})
console.log('p3', p3) // resovled 注意

const p4 = Promise.reject('my error').catch(() => {
  throw new Error('err')
})

console.log('p4', p4) // resovled 注意