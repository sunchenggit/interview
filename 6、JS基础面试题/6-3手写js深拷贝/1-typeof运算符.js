// typeof 运算符
// 识别所有值类型
// 识别函数
// 判断是否是引用类型（不可在细分）

// 常见值类型
let a; // undefined
let s = 'abc'
let n = 100
let b = true
let sy = Symbol('sy')

// 识别所有值类型
console.log(typeof a); // undefined
console.log(typeof s); // string
console.log(typeof n); // number
console.log(typeof b); // boolean
console.log(typeof sy); // symbol

// 识别函数
console.log(typeof console.log); // function
console.log(typeof function () { });  // function

// 判断是否是引用类型（不可在细分）
console.log(typeof null); // object
console.log(typeof ['a', 'b']) // object
console.log(typeof { a: 100 }) // object