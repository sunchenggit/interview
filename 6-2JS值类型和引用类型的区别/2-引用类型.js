let a = { age: 20 }
let b = a
b.age = 21
console.log(a.age); // 21

/**
两个变量同时指向同一个内存地址
其中一个变量操作属性，修改的是同一个的内存地址
所以另一个变量输出还是同一个内存地址指向的值
*/

// 常见引用类型
let obj = { x: 100 }
let arr = ['a', 'b', 'c']
// 特殊引用类型，指针指向为空地址
let n = null
// 特殊引用类型，但不用于存储数据，所以没有“拷贝、复制函数一说”
function fn () { }