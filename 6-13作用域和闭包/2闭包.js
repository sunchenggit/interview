// 作用域应用的特殊情况, 有两种表现
// 1. 函数作为参数被传递
// 2. 函数作为返回值被返回

// 函数作为返回值被返回
function create () {
  let a = 100
  return function () {
    console.log(a)
  }
}
let fn = create()
let a = 200
fn(); // 100

// 函数作为参数
function print (fn) {
  let b = 200
  fn()
}
let b = 100
function fn1 () {
  console.log(b)
}

print(fn1); // 100

// 所有自由变量的查找，是在函数定义的地方，想上级作用域查找
// 不是在函数执行的地方！！！
