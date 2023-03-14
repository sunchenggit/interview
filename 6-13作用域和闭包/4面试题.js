// 1. this 的不同应用场景，如何取值
/**
 * 1.当做普通函数 = window
 * 2. 使用 call bind apply  =  传入什么就是什么
 * 3. 作为对象方法被调用 = 返回对象本身
 * 4. 在 class 的方法中调用 = 当前实例本身
 * 5. 箭头函数 = 永远找他的上级作用域中的 this
 */

// 2. 手写bind函数
function fn1 (a, b) {
  console.log('this:', this)
  console.log('a:', a, 'b:', b)
  return 'this is fn1'
}

const fn2 = fn1.bind({ x: 100 }, 10, 20)
const res = fn2()
console.log(res)

// 模拟bind
Function.prototype.myBind = function () {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments)
  // 获取this(数组第一项)
  const t = args.shift()
  // fn1.bind(...)中的fn1
  const self = this
  return function () {
    return self.apply(t, args)
  }
}

// 3. 实际开发中闭包的应用场景，举例说明
// 隐藏数据
// 做一个简单 cache 工具

// 闭包隐藏数据，只提供API
function createCache () {
  const data = {};// 闭包中的函数，被隐藏，不被外界访问
  return {
    set: function (key, val) {
      data[key] = val;
    },
    get: function (key) {
      return data[key]
    }
  }
}

const c = createCache()
c.set('a', 100)
console.log('c', c.get('a'))

// 
let a;
// let 创建块级作用域，每次循环都会创建一个块级作用域，
for (let i = 0; i < 10; i++) {
  a = document.createElement('a')
  a.innerHTML = i
  a.addEventListener('click', function (e) {
    e.preventDefault()
    alert(i)
  })
  document.body.appendChild(a)
}

// var 全局变量，所以的用立即执行函数来生辰一个块并将i传递进去
for (var i = 0; i < 10; i++) {
  (function (j) {
    a = document.createElement('a')
    a.innerHTML = j
    a.addEventListener('click', function (e) {
      e.preventDefault()
      alert(j)
    })
    document.body.appendChild(a)
  })(i)
}