const p1 = Promise.resolve('response data')
console.log('p1', p1); //fulfilled

p1.then(res => {
  console.log('data', res); // data response data
}).catch(err => {
  console.log('err', err); // 不会执行
})

const p2 = Promise.reject('err')
console.log('p2', p2); //rejected

p2.then(res => {
  console.log('data2', res); // 不会执行
}).catch(err => {
  console.log('err2', err); // err2 err
})