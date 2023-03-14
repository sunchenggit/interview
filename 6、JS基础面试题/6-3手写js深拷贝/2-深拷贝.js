const obj = {
  age: 120,
  name: 'zhangsan',
  address: {
    city: 'beijing'
  },
  hobby: ['a', 'b', 'c']
}

function deepClone (source) {
  if (typeof source !== 'object' || source == null) {
    return source
  }
  let target
  if (source instanceof Array) {
    target = []
  } else {
    target = {}
  }
  for (let key in source) {
    // 保证key不是原型上的属性
    if (source.hasOwnProperty(key)) {
      target[key] = deepClone(source[key])
    }
  }
  return target
}

const obj1 = deepClone(obj)

obj1.age = 10
obj1.address.city = 'shanghai'
obj1.hobby[0] = 'str'
console.log(obj1, obj)