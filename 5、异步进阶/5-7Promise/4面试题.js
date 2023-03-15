//---- 第一题 ----//
Promise.resolve().then(() => {
  console.log(1); // 1
}).catch(() => {
  console.log(2)
}).then(() => {
  console.log(3); //3
})// fulfilled

//---- 第二题 ----//
Promise.resolve().then(() => { // rejected
  console.log(1); // 1
  throw new Error('error1')
}).catch(() => {
  console.log(2); // 2
}).then(() => {
  console.log(3); //3
})// fulfilled

//---- 第三题 ----//
Promise.resolve().then(() => { // rejected
  console.log(1); // 1
  throw new Error('error1')
}).catch(() => {// fulfilled
  console.log(2); // 2
}).catch(() => {
  console.log(3);
})// fulfilled