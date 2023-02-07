// 闭包隐藏数据只提供api
function createCache () {
  const data = {} // 闭包中的函数，被隐藏，不被外界访问
  return {
    set: function (key, value) {
      data[key] = value
    },
    get: function (key) {
      return data[key]
    }
  }
}

const c = createCache()
c.set('a', 100)
console.log(c.get('a'))