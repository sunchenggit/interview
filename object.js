const obj1 = {
  a: 10,
  b: 20,
  sum () {
    return this.a + this.b
  }
}

const obj2 = new Object({
  a: 10,
  b: 20,
  sum () {
    return this.a + this.b
  }
})

console.log(obj1 === obj2) // false

const obj3 = new Object(obj1)

const obj4 = Object.create(null) // {} 没有原型
const obj5 = new Object() // {}
console.log(obj4) // 
console.log(obj5)