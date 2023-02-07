/**
 * 深拷贝
 */

const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing'
  },
  arr: ['a', 'b', 'c']
}

const obj2 = deepClone(obj1)
obj2.address.city = 'shanghai'
console.log(obj1.address.city);
console.log(obj2.address.city);


/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 * @returns 
 */
function deepClone (obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    // obj 是 null或者不是对象或者数组，就直接返回
    return obj;
  }
  // 初始化返回结果
  let result;
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 保证key不是原型上的属性
    if (obj.hasOwnProperty(key)) {
      // 递归
      result[key] = deepClone(obj[key])
    }
  }

  // 返回结果
  return result;
}