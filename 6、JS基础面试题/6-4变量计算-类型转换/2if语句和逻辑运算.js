// truly 变量 !!a === true 的变量
// falsely 变量 !!a === false 的变量

const n = 100
console.log(!!n); // true
const n1 = 0
console.log(!!n1); // false

// 以下是 falsely 变量，其他都是 truly 变量
!!0 === false
!!NaN === false
!!'' === false
!!nul === false
!!undefined === false
!!false === false

// 逻辑判断
console.log(10 && 0) // 10
console.log(0 && 10) // 0
console.log('' || 'abc') // 'abc'
console.log('abc' || '') // 'abc'
console.log(!window.abc) // true