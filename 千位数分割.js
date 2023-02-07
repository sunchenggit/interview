/*
let str = '12345678919111'
let arr = []
let yu = str.length % 3
if (yu > 0) {
  arr.push(str.substring(0, yu))
}
let yuStr = str.substring(yu)
for (let i = 0; i < yuStr.length / 3; i++) {
  arr.push(yuStr.substring(i * 3, i * 3 + 3))
}

console.log(arr.join(','))
*/
// $& 代表前面匹配字符
// 
var f = '99999999999'.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
console.log(f)