// const arr = [10, 20, 30, 40]

// pop
// const popRes = arr.pop(arr)
// console.log(popRes)  // 40
// console.log(arr) // [10, 20, 30]

// push
// const pushRes = arr.push(50)
// console.log(pushRes) // 5
// console.log(arr)  // [10, 20, 30, 40, 50]

// unshift
// const unshiftRes = arr.unshift(50)
// console.log(unshiftRes) // 5
// console.log(arr) // [50, 10, 20, 30, 40]

// shift
// const shiftRes = arr.shift()
// console.log(shiftRes) // 10
// console.log(arr) // [20, 30, 40]

// // 纯函数：1. 不改变原数组（没有副作用）；2. 返回一个数组
// const arr = [10, 20, 30, 40]

// // concat
// const arr1 = arr.concat([50, 60, 70])
// console.log(arr1) // [10, 20, 30, 40, 50, 60, 70]
// console.log(arr)  // [10, 20, 30, 40]

// // map
// const arr2 = arr.map(item => item * 10)
// console.log(arr2) // [100, 200, 300, 400]
// console.log(arr)  // [10, 20, 30, 40]

// // filter
// const arr3 = arr.filter(item => item > 25)
// console.log(arr3) // [30, 40]
// console.log(arr)  // [10, 20, 30, 40]

// const arr = [10, 20, 30, 40, 50]
// // slice 纯函数
// const arr4 = arr.slice()  // 相当于复制一个数组
// const arr5 = arr.slice(1, 4)
// const arr6 = arr.slice(2)
// const arr7 = arr.slice(-2) // 最后两个
// console.log(arr4) // [10, 20, 30, 40]
// console.log(arr5) // [20, 30, 40]
// console.log(arr6) // [30, 40, 50]
// console.log(arr7) // [40, 50]
// console.log(arr)  // [10, 20, 30, 40]

// splice 非纯函数
// const spliceRes = arr.splice(1, 2, 'a', 'b', 'c')
// console.log(spliceRes) // [10, 'a', 'b', 'c', 40, 50]
// const spliceRes1 = arr.splice(1, 2)
// console.log(spliceRes1) //  [20, 30]
// const spliceRes2 = arr.splice(1, 0, 'a', 'b', 'c')
// console.log(spliceRes2) // [10, 'a', 'b', 'c', 20, 30, 40, 50]
// console.log(arr)

// 
const arr = [10, 20, 30]
const res = arr.map(parseInt)
console.log(res) // [10, NaN, NaN]

[10, 20, 30].map((num, index) => {
  return parseInt(num, index)
})






