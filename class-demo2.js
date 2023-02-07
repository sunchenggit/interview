// 父类
class Person {
  constructor(name) {
    this.name = name
  }

  eat () {
    console.log(`${this.name} eat something`)
  }
}

// 子类
class Student extends Person {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  sayHi () {
    console.log(`姓名：${this.name}，学号：${this.number}`)
  }
}

class Teacher extends Person {
  constructor(name, major) {
    super(name)
    this.major = major
  }
  teach () {
    console.log(`${this.name} 教授 ${this.major}`)
  }
}

// 通过类声明对象/实类
const xialuo = new Student('夏洛', 100);
console.log(xialuo.name);
console.log(xialuo.number);
xialuo.sayHi();
xialuo.eat();

const wanglaoshi = new Teacher('王老师', '语文')
console.log(wanglaoshi.name)
console.log(wanglaoshi.major)
wanglaoshi.teach()
wanglaoshi.eat()