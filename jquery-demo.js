class jQuery {
  constructor(seletor) {
    const result = document.querySelectorAll(seletor)
    const length = result.length
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
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
      elem.addEventListener(type, fn, false)
    })
  }

  // 扩展DOM操作api
}

// 插件
jQuery.prototype.dialog = function (info) {
  alert(info)
}

// “造轮子”
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector)
  }

  addClass (className) { }

  style (data) {

  }
}