let a = 0
function fn1 () {
  let a1 = 100
  function fn2 () {
    let a2 = 200

    function fn3 () {
      let a3 = 300
      return a + a1 + a2 + a3
    }
    fn3()
  }
  fn2()
}
fn1()

// ES6 块级作用域
if (true) {
  let x = 200
}
console.log(x); // 报错

// 自由变量
// 一个变量在当前作用域中没定义，但是被使用了
// 就会向上级作用域，一层一层的一次查找，知道找到为止
// 如果全局作用域没有找到，则报错 xx is not defined