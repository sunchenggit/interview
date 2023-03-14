// 示例
console.log('Hi')

setTimeout(function cb1 () {
  console.log('cb1')
}, 5e3)

console.log('Bye')

// Hi
// Bye
// 五秒后 => cb1