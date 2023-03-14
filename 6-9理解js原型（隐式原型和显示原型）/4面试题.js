// 1. 如何准确判断一个变量是不是数组？
// let a = []
// console.log(a instanceof Array)

// 3. class的原型本质，如何理解？
// 参考  3原型链.drawio  原型图

// 2. 手写一个简易的jQuery,考虑插件和扩展性
class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector)
    const length = result.length
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
    this.selector = selector
    // 类数组形式。本质是对象
  }
  get (index) {
    return this[index]
  }
  each (fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i]
      fn(elem)
    }
  }
  on (type, fn) {
    return this.each(elem => {
      elem.addEventListener(type, fn)
    })
  }
  // 扩展很多其他 API
}

// 插件形式
jQuery.prototype.dialog = function (info) {
  alert(info)
}

// 复写机制，造轮子
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector)
  }
  // 扩展自己的方法
  addClass (className) { }
  style (data) { }
}