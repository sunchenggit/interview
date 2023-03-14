const a = 100 + 10 // 110
const b = 100 + '10'  // '10010'
const c = true + '10' // 'true10'

// == 运算符
100 == '100'        // true
0 == ''             // true
0 == false          // true
false == ''         // true
null == undefined   // true

// 除了 == null 之外，其他一律用 === 
const obj = { x: 100 }
if (obj.a == null) { }
// 相当于：
// if(obj.a === null || obj.a === undefined) {}