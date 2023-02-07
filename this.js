// this 取什么值，是在this执行的时候确定的
function fn1 () {
  console.log(this);
}
fn1() // window

fn1.call({ x: 100 }) // {x:100}

const fn2 = fn1.bind({ x: 200 })
fn2() // {x:200}

const zhangsan = {
  name: '张三',
  sayHi () {
    console.log(this)
  },
  wait () {
    setTimeout(function () {
      // this == window
      console.log(this)
    })
  },
  wait1 () {
    setTimeout(() => {
      // this 即当前对象
      console.log(this)
    })
  }
}
zhangsan.sayHi() // zhangsan 对象
zhangsan.wait()  // window
zhangsan.wait1() // zhangsan 对象

class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHi () {
    console.log(this)
  }
}

const lisi = new People()
lisi.sayHi() // lisi 对象