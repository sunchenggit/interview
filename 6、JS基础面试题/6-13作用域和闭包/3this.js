// 作为普通函数
// 使用 call apply bind
// 作为对象方法被调用
// 箭头函数
// 在 class 方法中调用

// this在各个场景中取什么值，是在函数执行的时候定义的，不是在函数定义的时候确定的

function fn1 () {
  console.log(this)
}
fn1(); // window

fn1.call({ x: 100 });// {x:100}

const fn2 = fn1.bind({ x: 200 })
fn2(); // {x:200}

const zhangsan = {
  name: '张三',
  sayHi () {
    // this 当前对象
    console.log(this)
  },
  awit () {
    // setTimeout 触发的执行，作为一个普通函数被执行的，this === window
    setTimeout(function () {
      // this === window
      console.log(this)
    })
  }
}


const lisi = {
  name: '李四',
  sayHi () {
    // this 当前对象
    console.log(this)
  },
  awit () {
    // 箭头函数的this永远指向上级的this
    setTimeout(() => {
      // this 当前对象
      console.log(this)
    })
  }
}

class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
  sayHi () {
    console.log(this)
  }
}

// 通过类 new 对象/实例
const xialuo = new Student('夏洛', 30)
xialuo.sayHi(); // xialuo 对象