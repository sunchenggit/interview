// 1. typrof能判断哪些类型
// 识别所有值类型
// 识别函数
// 判断是否是引用类型（不可在细分）

// 2. 何时用 == 何时用===
// 除了 == null 之外，其他一律用 === 
const obj = { x: 100 }
if (obj.a == null) { }
// 相当于：
// if(obj.a === null || obj.a === undefined) {}

// 3. 值类型和引用类型的区别
const obj1 = { x: 100, y: 200 }
const obj2 = obj1
let x1 = obj1.x
obj2.x = 101
x1 = 102
console.log(obj1); // {x:101, y: 200}