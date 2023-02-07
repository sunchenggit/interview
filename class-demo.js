// 类
class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
    // this.gender = 'male'
  }

  sayHi () {
    console.log(`姓名：${this.name}，学号：${this.number}`);
  }

  // study () { }
}

// 通过类声明对象/实类
const xialuo = new Student('夏洛', 100);
console.log(xialuo.name);
console.log(xialuo.number);
xialuo.sayHi();