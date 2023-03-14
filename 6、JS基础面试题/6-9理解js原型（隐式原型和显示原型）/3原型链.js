// 父类
class People {
  constructor(name) {
    this.name = name
  }
  eat () {
    console.log(`${this.name} eat something`)
  }
}

// 学生 子类 继承 父类 People
class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  sayHi () {
    console.log(`姓名 ${this.name}, 学号 ${this.number}`)
  }
}

// 原型链
console.log(Student.prototype.__proto__)
console.log(People.prototype)
console.log(People.prototype === Student.prototype.__proto__)
