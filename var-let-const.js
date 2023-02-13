// 变量提升
// console.log(a) // undefined
// var a = 100

// console.log(b)  // 报错未定义
// let b = 10


// for (var i = 0; i < 10; i++) {
//   var j = i + 1
// }

// console.log(i, j) // 10 10


// let 块状定义域
for (let i = 0; i < 10; i++) {
  let j = i + 1
}

console.log(i, j) // i is not defined