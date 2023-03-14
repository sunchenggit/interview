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

// class 的本质还是 function 是语法糖
console.log(typeof People); //function
console.log(typeof Student); //function

// 隐式原型和显示原型
const xialuo = new Student('夏洛', 30)
console.log(xialuo.__proto__);      // 隐式原型
console.log(Student.prototype);     // 显示原型
console.log(xialuo.__proto__ === Student.prototype)

// # 原型关系
// 每个class都有一个显示原型prototype
// 每个实例都有隐式原型__proto__
// 实例的__proto__指向对应class的prototype

// # 基于原型的执行规则
// 获取属性 xialuo.name或执行方法xialuo.sayHi()时
// 先在自身属性和方法寻找
// 如果找不到则自动去__proto__中查找