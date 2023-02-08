const p1 = Promise.resolve(100)
console.log('p1', p1)
p1.then(res => {
  console.log('p1-then', res)
}).catch(err => {
  console.log('p1-catch', err)
})

const p2 = Promise.reject('err')
console.log('p2', p2)
p2.then(res => {
  console.log('p2-then', res)
}).catch(err => {
  console.log('p2-catch', err)
})