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

// 教师 子类 继承 父类 People
class Teach extends People {
  constructor(name, major) {
    super(name)
    this.major = major
  }
  teach () {
    console.log(`${this.name} 教授 ${this.major}`)
  }
}

// 通过类 new 对象/实例
const xialuo = new Student('夏洛', 30)
console.log(xialuo.name, xialuo.number)
xialuo.sayHi()
xialuo.eat()

const madongmei = new Student('马冬梅', 22)
console.log(madongmei.name, madongmei.number)
madongmei.sayHi()
madongmei.eat()

// 实例
const wang = new Teach('王老师', '语文')
console.log(wang.name, wang.major)
wang.teach()
wang.eat()

// instanceof
console.log(xialuo instanceof People); // true
console.log(xialuo instanceof Student); // true
console.log(xialuo instanceof Object); // true